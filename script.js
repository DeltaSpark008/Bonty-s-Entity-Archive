/* ==========================================================================
   BONTY'S ENTITY ARCHIVE — SCRIPT
   ==========================================================================
   Single state system, as promised:
     - #book.is-open        → the cover is open (added once, by openBook())
     - #page-viewport.is-turning → a page transition is in flight (CSS-driven)
     - #sound-toggle.is-on  → ambient sound is playing

   Everything else is plain data attributes read by one delegated click
   handler (data-action="..."). No per-item listeners, no duplicate
   handlers, no competing state classes.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     0. GUARD — make sure the data file actually loaded before we do
        anything else. If entities.js failed to load, fail loudly in the
        console but do not leave the page in a broken half-state.
     --------------------------------------------------------------------- */
  if (typeof ENTITIES === "undefined" || typeof VOLUMES === "undefined") {
    console.error("Bonty's Entity Archive: entities.js did not load — check the <script> order in index.html.");
    return;
  }

  /* ---------------------------------------------------------------------
     1. DATA PREP — assign sequential archive page numbers once, in the
        order entities appear in entities.js (grouped by volume already).
     --------------------------------------------------------------------- */
  ENTITIES.forEach(function (entity, index) {
    entity.pageNumber = index + 1;
  });

  function pad3(n) {
    return String(n).padStart(3, "0");
  }

  function entityIndex(id) {
    return ENTITIES.findIndex(function (e) { return e.id === id; });
  }

  function volumeById(id) {
    return VOLUMES.find(function (v) { return v.id === id; });
  }

  function entitiesInVolume(volumeId) {
    return ENTITIES.filter(function (e) { return e.volume === volumeId; });
  }

  /* Escape text before it goes into innerHTML, so any future entity text
     containing &, <, >, or quotes can never break the page layout. */
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  /* ---------------------------------------------------------------------
     2. STATE — one object, one source of truth for what's on screen.
     --------------------------------------------------------------------- */
  var state = {
    bookOpen: false,
    view: "toc",       // "toc" | "entity"
    volume: 1,          // current volume id, used by the TOC view
    entityId: null       // current entity id, used by the entity view
  };

  /* ---------------------------------------------------------------------
     3. DOM REFERENCES — grabbed once, reused everywhere.
     --------------------------------------------------------------------- */
  var els = {};

  function cacheEls() {
    els.book = document.getElementById("book");
    els.clasp = document.getElementById("clasp");
    els.bookCover = document.getElementById("book-cover");
    els.bookHint = document.getElementById("book-hint");
    els.volumeTabs = document.getElementById("volume-tabs");
    els.pageViewport = document.getElementById("page-viewport");
    els.soundToggle = document.getElementById("sound-toggle");
  }

  /* ---------------------------------------------------------------------
     4. OPENING / CLOSING THE BOOK
        This is the one piece of the whole site that must never fail, so
        it is kept deliberately small and independent of everything else.
     --------------------------------------------------------------------- */
  function openBook() {
    if (state.bookOpen) return;      // guard against a second/duplicate trigger
    state.bookOpen = true;
    els.book.classList.add("is-open");
    if (els.bookHint) els.bookHint.classList.add("is-hidden");
    // Render the current view now, so the pages are correct the moment
    // they're revealed by the cover animation (no flash, no blank page).
    renderCurrentView();
  }

  function closeBook() {
    if (!state.bookOpen) return;
    state.bookOpen = false;
    els.book.classList.remove("is-open");
    if (els.bookHint) els.bookHint.classList.remove("is-hidden");
    // Reset to the first page of the first volume for the next time it opens.
    state.view = "toc";
    state.volume = 1;
    state.entityId = null;
  }

  /* ---------------------------------------------------------------------
     5. INIT
     --------------------------------------------------------------------- */
  function init() {
    cacheEls();
    renderVolumeTabs();

    // The clasp gets exactly one listener, attached exactly once, here.
    els.clasp.addEventListener("click", openBook);

    // Everything else inside the open book is handled by one delegated
    // listener on document, keyed off data-action — see section 8 below.
    document.addEventListener("click", handleDelegatedClick);

    initSound();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  /* Expose a couple of internal pieces on window, namespaced, purely so
     the same small set of functions can be reused by later sections of
     this file without re-querying the DOM. Not part of any public API. */
  /* ---------------------------------------------------------------------
     6. VOLUME TABS — built once; the currently-active one is re-marked
        (not rebuilt) whenever the volume changes, in setActiveVolumeTab().
     --------------------------------------------------------------------- */
  function renderVolumeTabs() {
    var html = VOLUMES.map(function (v) {
      return '<button class="volume-tab" type="button" data-action="open-toc" data-volume="' + v.id + '">' +
               '<span class="volume-tab__roman">' + v.roman + '</span>' +
             '</button>';
    }).join("");
    els.volumeTabs.innerHTML = html;
    setActiveVolumeTab(state.volume);
  }

  function setActiveVolumeTab(volumeId) {
    var tabs = els.volumeTabs.querySelectorAll(".volume-tab");
    tabs.forEach(function (tab) {
      var isActive = Number(tab.getAttribute("data-volume")) === volumeId;
      tab.classList.toggle("is-active", isActive);
    });
  }

  /* ---------------------------------------------------------------------
     7. VIEW RENDERING — one viewport, swapped with a short page-turn
        transition. renderCurrentView() paints instantly (used when the
        book first opens); goToView() adds the transition (used for every
        click after that).
     --------------------------------------------------------------------- */
  function renderCurrentView() {
    if (state.view === "entity" && state.entityId) {
      els.pageViewport.innerHTML = buildEntityPageHTML(state.entityId);
    } else {
      els.pageViewport.innerHTML = buildTocHTML(state.volume);
    }
    els.pageViewport.scrollTop = 0;
    setActiveVolumeTab(state.volume);
  }

  var TURN_MS = 320;
  var pendingTurn = null;

  function goToView(nextState) {
    Object.assign(state, nextState);
    els.pageViewport.classList.add("is-turning");
    if (pendingTurn) window.clearTimeout(pendingTurn);
    pendingTurn = window.setTimeout(function () {
      renderCurrentView();
      els.pageViewport.classList.remove("is-turning");
      pendingTurn = null;
    }, TURN_MS);
  }

  function goToToc(volumeId) {
    goToView({ view: "toc", volume: volumeId, entityId: null });
  }

  function goToEntity(entityId) {
    var idx = entityIndex(entityId);
    if (idx === -1) return;
    goToView({ view: "entity", volume: ENTITIES[idx].volume, entityId: entityId });
  }

  function stepEntity(direction) {
    if (!state.entityId) return;
    var idx = entityIndex(state.entityId);
    if (idx === -1) return;
    var nextIdx = (idx + direction + ENTITIES.length) % ENTITIES.length;
    goToEntity(ENTITIES[nextIdx].id);
  }

  /* ---------------------------------------------------------------------
     8. DELEGATED CLICK HANDLER — the only click listener for anything
        inside the open book. Reads data-action off the nearest ancestor
        that has one, so it keeps working no matter how many times the
        page viewport's innerHTML gets replaced.
     --------------------------------------------------------------------- */
  function handleDelegatedClick(event) {
    var target = event.target.closest("[data-action]");
    if (!target) return;

    var action = target.getAttribute("data-action");

    switch (action) {
      case "open-toc":
        goToToc(Number(target.getAttribute("data-volume")));
        break;
      case "open-entity":
        goToEntity(target.getAttribute("data-entity"));
        break;
      case "next-entity":
        stepEntity(1);
        break;
      case "prev-entity":
        stepEntity(-1);
        break;
      case "go-toc":
        goToToc(state.volume);
        break;
      case "close-book":
        closeBook();
        break;
      default:
        break;
    }
  }

  /* ---------------------------------------------------------------------
     9. PAGE BUILDERS — turn one entity/volume into an HTML string for
        the viewport. Pure functions: data in, markup out.
     --------------------------------------------------------------------- */
  function buildTocHTML(volumeId) {
    var vol = volumeById(volumeId);
    var list = entitiesInVolume(volumeId);
    var idx = VOLUMES.findIndex(function (v) { return v.id === volumeId; });
    var prevVol = VOLUMES[(idx - 1 + VOLUMES.length) % VOLUMES.length];
    var nextVol = VOLUMES[(idx + 1) % VOLUMES.length];

    var items = list.map(function (e) {
      return '<li class="toc-entry">' +
               '<button class="toc-entry__link" type="button" data-action="open-entity" data-entity="' + esc(e.id) + '">' +
                 '<span class="toc-name">' + esc(e.name) + '</span>' +
                 '<span class="toc-leader" aria-hidden="true"></span>' +
                 '<span class="toc-page">' + pad3(e.pageNumber) + '</span>' +
               '</button>' +
             '</li>';
    }).join("");

    return (
      '<div class="toc-page">' +
        '<p class="toc-kicker">Volume ' + vol.roman + '</p>' +
        '<h2 class="toc-title">' + esc(vol.title) + '</h2>' +
        '<div class="toc-rule" aria-hidden="true"><span></span></div>' +
        '<ul class="toc-list">' + items + '</ul>' +
        '<div class="toc-volume-nav">' +
          '<button class="toc-volume-nav__link" type="button" data-action="open-toc" data-volume="' + prevVol.id + '">&larr; Volume ' + prevVol.roman + '</button>' +
          '<button class="toc-volume-nav__link toc-volume-nav__link--next" type="button" data-action="open-toc" data-volume="' + nextVol.id + '">Volume ' + nextVol.roman + ' &rarr;</button>' +
        '</div>' +
      '</div>'
    );
  }

  function buildFigureHTML(e) {
    var svg = buildIllustration(e.sigil);
    if (!e.image) return svg;
    // A real image is used when present, with the archive's own drawing kept
    // right behind it as an automatic fallback — if the file is ever missing,
    // moved, or mistyped, onerror swaps to the drawing instead of a broken icon.
    return (
      '<img src="' + esc(e.image) + '" alt="' + esc(e.name) + '" class="entity-plate entity-plate--photo" ' +
        "onerror=\"this.style.display='none';this.nextElementSibling.style.display='';\">" +
      '<div class="entity-plate-fallback" style="display:none">' + svg + '</div>'
    );
  }

  function buildFigcaptionHTML(e) {
    if (e.image) return esc(e.imageCredit || e.name);
    return 'Archive illustration &mdash; ' + esc(e.name) + ", after the tradition's own description";
  }

  function buildEntityPageHTML(entityId) {
    var idx = entityIndex(entityId);
    if (idx === -1) return "<p>That record could not be found.</p>";
    var e = ENTITIES[idx];

    var sectionDefs = [
      ["The Record", e.record],
      ["Lore", e.lore],
      ["Appearance", e.appearance],
      ["Behavior", e.behavior],
      ["Protection", e.protection],
      ["Encounters", e.encounters]
    ];
    var sections = sectionDefs.map(function (pair) {
      return '<section class="entity-section">' +
               '<h3 class="entity-section__heading">' + pair[0] + '</h3>' +
               '<p>' + esc(pair[1]) + '</p>' +
             '</section>';
    }).join("");

    var sources = e.sources.map(function (s) {
      if (s.url) {
        return '<li><a class="source-entry" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' +
                 '<span class="source-entry__label">' + esc(s.label) + '</span>' +
                 '<span class="source-entry__go" aria-hidden="true">&#8599;</span>' +
               '</a></li>';
      }
      return '<li><span class="source-entry source-entry--undocumented">' +
               '<span class="source-entry__label">' + esc(s.label) + '</span>' +
               '<span class="source-entry__tag">undocumented</span>' +
             '</span></li>';
    }).join("");

    return (
      '<article class="entity-page">' +
        '<header class="entity-header">' +
          '<p class="entity-archive-no">Archive No. ' + pad3(e.pageNumber) + '</p>' +
          '<h2 class="entity-name">' + esc(e.name) + '</h2>' +
          '<dl class="entity-meta">' +
            '<div class="entity-meta__row"><dt>Classification</dt><dd>' + esc(e.culture) + ' &middot; ' + esc(e.category) + '</dd></div>' +
            '<div class="entity-meta__row"><dt>Region</dt><dd>' + esc(e.culture) + '</dd></div>' +
            '<div class="entity-meta__row"><dt>Type</dt><dd>' + esc(e.type) + '</dd></div>' +
          '</dl>' +
        '</header>' +

        '<figure class="entity-figure">' +
          buildFigureHTML(e) +
          '<figcaption>' + buildFigcaptionHTML(e) + '</figcaption>' +
        '</figure>' +

        sections +

        '<section class="entity-section entity-section--sources">' +
          '<h3 class="entity-section__heading">Sources</h3>' +
          '<p class="source-note">External records referenced in compiling this page. Folklore documentation, not verification.</p>' +
          '<ul class="source-list">' + sources + '</ul>' +
        '</section>' +

        '<nav class="entity-nav">' +
          '<button class="entity-nav__btn" type="button" data-action="prev-entity">&larr; Previous</button>' +
          '<button class="entity-nav__btn entity-nav__btn--home" type="button" data-action="go-toc">Contents</button>' +
          '<button class="entity-nav__btn" type="button" data-action="next-entity">Next &rarr;</button>' +
        '</nav>' +
      '</article>'
    );
  }

  /* ---------------------------------------------------------------------
     10. ILLUSTRATIONS — every entity gets an original ink-plate drawing
         built from SVG primitives (no external images, no photos, no
         AI-generated art, nothing that can 404). Shapes are composed from
         a handful of small geometry helpers rather than hand-drawn bezier
         paths, so they stay reliable and easy to extend.
     --------------------------------------------------------------------- */
  function tag(name, attrs, cls) {
    var s = "<" + name;
    for (var k in attrs) s += " " + k + '="' + attrs[k] + '"';
    if (cls) s += ' class="' + cls + '"';
    return s + "/>";
  }
  function circleT(cx, cy, r, cls) { return tag("circle", { cx: cx, cy: cy, r: r }, cls); }
  function ellipseT(cx, cy, rx, ry, cls) { return tag("ellipse", { cx: cx, cy: cy, rx: rx, ry: ry }, cls); }
  function pathT(d, cls) { return tag("path", { d: d }, cls); }
  function lineT(x1, y1, x2, y2, cls) { return tag("line", { x1: x1, y1: y1, x2: x2, y2: y2 }, cls); }

  /* A tapered spike (claw, horn, branch, ear) from a base point to a tip,
     as a simple filled triangle-ish shape. */
  function spike(bx, by, tx, ty, baseWidth, cls) {
    var dx = tx - bx, dy = ty - by;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = (-dy / len) * baseWidth, ny = (dx / len) * baseWidth;
    var d = "M" + (bx + nx) + "," + (by + ny) + " L" + tx + "," + ty + " L" + (bx - nx) + "," + (by - ny) + " Z";
    return pathT(d, cls || "fig-fill");
  }

  /* A soft irregular blob from a handful of overlapping circles — used
     for shadow-shapes (something half-seen in the dark, or in water). */
  function blob(cx, cy, r, cls) {
    var offsets = [[0, 0, 1], [0.55, -0.3, 0.75], [-0.55, -0.25, 0.7], [0.3, 0.5, 0.65], [-0.35, 0.45, 0.6]];
    return offsets.map(function (o) {
      return circleT(cx + o[0] * r, cy + o[1] * r, o[2] * r, cls || "fig-fill");
    }).join("");
  }

  /* A horizontal wavy line (water ripples). */
  function waveH(x1, y, x2, amplitude, cycles) {
    var step = (x2 - x1) / cycles;
    var d = "M" + x1 + "," + y;
    for (var i = 0; i < cycles; i++) {
      var cx = x1 + step * i + step / 2;
      var cy = y + (i % 2 === 0 ? -amplitude : amplitude);
      d += " Q" + cx + "," + cy + " " + (x1 + step * (i + 1)) + "," + y;
    }
    return d;
  }

  /* A vertical wavy line (trailing organs, hanging strands). */
  function waveV(x, y1, y2, amplitude, cycles) {
    var step = (y2 - y1) / cycles;
    var d = "M" + x + "," + y1;
    for (var i = 0; i < cycles; i++) {
      var cy = y1 + step * i + step / 2;
      var cx = x + (i % 2 === 0 ? amplitude : -amplitude);
      d += " Q" + cx + "," + cy + " " + x + "," + (y1 + step * (i + 1));
    }
    return d;
  }

  var SIGILS = {

    figure: function () {
      return circleT(110, 70, 26) +
        pathT("M84,85 L60,175 a12.5,12.5 0 0 0 25,0 a12.5,12.5 0 0 0 25,0 a12.5,12.5 0 0 0 25,0 a12.5,12.5 0 0 0 25,0 L136,85 Z") +
        circleT(100, 66, 3.5, "fig-void") + circleT(120, 66, 3.5, "fig-void");
    },

    veiled: function () {
      return pathT("M110,42 Q145,55 148,96 Q110,82 72,96 Q75,55 110,42 Z") +
        pathT("M80,92 L62,196 L158,196 L140,92 Z") +
        ellipseT(110, 88, 13, 15, "fig-void");
    },

    skull: function () {
      return ellipseT(110, 96, 38, 34) +
        pathT("M80,112 Q110,152 140,112 L134,132 Q110,144 86,132 Z") +
        circleT(95, 92, 10, "fig-void") + circleT(125, 92, 10, "fig-void") +
        pathT("M110,100 L103,118 L117,118 Z", "fig-void") +
        [92, 100, 108, 116, 124].map(function (x) { return tag("rect", { x: x, y: 126, width: 3.5, height: 9 }, "fig-void"); }).join("");
    },

    horns: function () {
      return ellipseT(110, 100, 30, 27) +
        spike(98, 72, 74, 26, 6) + spike(122, 72, 146, 26, 6) +
        circleT(99, 94, 7.5, "fig-void") + circleT(121, 94, 7.5, "fig-void") +
        spike(101, 118, 94, 134, 3) + spike(119, 118, 126, 134, 3);
    },

    eyes: function () {
      return blob(110, 120, 56, "fig-fill") +
        ellipseT(90, 112, 11, 6.5, "fig-glow") + ellipseT(130, 112, 11, 6.5, "fig-glow") +
        circleT(90, 112, 3, "fig-fill") + circleT(130, 112, 3, "fig-fill");
    },

    flame: function () {
      return pathT("M110,44 C88,92 74,124 74,152 C74,183 90,203 110,203 C130,203 146,183 146,152 C146,124 132,92 110,44 Z") +
        pathT("M110,92 C97,118 91,138 91,157 C91,174 99,185 110,185 C121,185 129,174 129,157 C129,138 123,118 110,92 Z", "fig-glow");
    },

    water: function () {
      return blob(112, 178, 26, "fig-fill") +
        pathT(waveH(48, 138, 172, 9, 4), "fig-wave") +
        pathT(waveH(48, 156, 172, 8, 4), "fig-wave") +
        pathT(waveH(48, 174, 172, 9, 4), "fig-wave") +
        pathT(waveH(48, 192, 172, 7, 4), "fig-wave");
    },

    mask: function () {
      return ellipseT(110, 112, 42, 54) +
        pathT("M83,96 Q95,85 109,96 Q95,104 83,96 Z", "fig-void") +
        pathT("M111,96 Q125,85 137,96 Q125,104 111,96 Z", "fig-void") +
        pathT("M88,142 Q110,158 132,142 L132,149 Q110,166 88,149 Z", "fig-void") +
        lineT(72, 88, 56, 68, "fig-line") + lineT(148, 88, 164, 68, "fig-line");
    },

    fox: function () {
      return pathT("M110,58 L152,110 Q152,152 110,172 Q68,152 68,110 Z") +
        spike(90, 68, 74, 32, 10) + spike(130, 68, 146, 32, 10) +
        circleT(96, 106, 4, "fig-void") + circleT(124, 106, 4, "fig-void") +
        circleT(110, 166, 4, "fig-void");
    },

    wolf: function () {
      return pathT("M110,54 L156,100 Q159,152 110,177 Q61,152 64,100 Z") +
        spike(92, 62, 79, 28, 12) + spike(128, 62, 141, 28, 12) +
        circleT(94, 100, 4.5, "fig-void") + circleT(126, 100, 4.5, "fig-void") +
        pathT("M84,140 Q110,178 136,140 L136,152 Q110,186 84,152 Z", "fig-void");
    },

    "floating-head": function () {
      return ellipseT(110, 76, 32, 34) +
        circleT(98, 72, 3.5, "fig-void") + circleT(122, 72, 3.5, "fig-void") +
        pathT(waveV(92, 106, 206, 9, 3), "fig-wave") +
        pathT(waveV(110, 110, 210, 10, 3), "fig-wave") +
        pathT(waveV(128, 106, 206, 9, 3), "fig-wave");
    },

    horse: function () {
      return pathT("M82,196 L76,112 Q76,88 98,74 L132,62 L143,80 L116,90 Q100,100 101,120 L108,196 Z") +
        spike(101, 78, 90, 52, 6) +
        circleT(110, 96, 3.5, "fig-void") +
        spike(90, 90, 72, 82, 3) + spike(95, 102, 76, 98, 3) + spike(100, 114, 80, 114, 3);
    },

    "bat-wings": function () {
      return circleT(110, 100, 11) + ellipseT(110, 132, 10, 22) +
        spike(104, 92, 98, 76, 3) + spike(116, 92, 122, 76, 3) +
        pathT("M100,112 L50,68 Q62,90 55,102 Q76,106 66,120 Q86,122 79,136 Q97,131 100,142 Z") +
        pathT("M120,112 L170,68 Q158,90 165,102 Q144,106 154,120 Q134,122 141,136 Q123,131 120,142 Z") +
        circleT(105, 98, 2.5, "fig-void") + circleT(115, 98, 2.5, "fig-void");
    },

    insect: function () {
      return ellipseT(110, 122, 10, 27) + circleT(110, 92, 7) +
        ellipseT(89, 112, 15, 7.5, "fig-wave") + ellipseT(131, 112, 15, 7.5, "fig-wave") +
        lineT(106, 86, 97, 66, "fig-line") + lineT(114, 86, 123, 66, "fig-line") +
        circleT(110, 147, 7, "fig-glow");
    },

    owl: function () {
      return ellipseT(110, 132, 34, 44) + circleT(110, 94, 29) +
        spike(96, 70, 90, 52, 4) + spike(124, 70, 130, 52, 4) +
        circleT(98, 92, 10, "fig-glow") + circleT(122, 92, 10, "fig-glow") +
        circleT(98, 92, 4, "fig-fill") + circleT(122, 92, 4, "fig-fill") +
        pathT("M104,107 L116,107 L110,119 Z", "fig-void");
    },

    antlers: function () {
      return ellipseT(110, 112, 24, 30) +
        circleT(100, 106, 4, "fig-void") + circleT(120, 106, 4, "fig-void") +
        ellipseT(110, 136, 13, 9, "fig-void") +
        spike(99, 86, 72, 42, 5) + spike(88, 66, 72, 52, 3) + spike(85, 74, 65, 62, 3) +
        spike(121, 86, 148, 42, 5) + spike(132, 66, 148, 52, 3) + spike(135, 74, 155, 62, 3);
    },

    tree: function () {
      return pathT("M101,208 L105,140 L115,140 L119,208 Z") +
        spike(110, 140, 80, 92, 4) + spike(110, 140, 140, 92, 4) +
        spike(110, 140, 96, 62, 3) + spike(110, 140, 124, 62, 3) + spike(110, 140, 110, 50, 3) +
        spike(96, 116, 76, 98, 2) + spike(124, 116, 144, 98, 2) +
        spike(104, 206, 90, 220, 2) + spike(116, 206, 130, 220, 2);
    },

    moon: function () {
      return circleT(110, 100, 38) + circleT(126, 90, 34, "fig-void") +
        pathT(waveH(58, 160, 162, 6, 3), "fig-wave") +
        pathT(waveH(64, 175, 156, 5, 3), "fig-wave");
    },

    claw: function () {
      return ellipseT(110, 158, 27, 20) +
        spike(94, 142, 74, 60, 5) + spike(103, 136, 96, 54, 5) +
        spike(117, 136, 124, 54, 5) + spike(126, 142, 146, 60, 5);
    }

  };

  function buildIllustration(sigilType) {
    var draw = SIGILS[sigilType] || SIGILS.figure;
    var corners = [[15, 15], [205, 15], [15, 225], [205, 225]];
    var fleurons = corners.map(function (c) { return circleT(c[0], c[1], 3, "plate-fleuron"); }).join("");

    return (
      '<svg class="entity-plate" viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Archive illustration">' +
        '<rect x="4" y="4" width="212" height="232" class="plate-bg"/>' +
        '<rect x="10" y="10" width="200" height="220" class="plate-border-outer"/>' +
        '<rect x="16" y="16" width="188" height="208" class="plate-border-inner"/>' +
        fleurons +
        '<g class="plate-figure">' + draw() + "</g>" +
      "</svg>"
    );
  }

  /* ---------------------------------------------------------------------
     11. AMBIENT SOUND — generated entirely with the Web Audio API, so
         there is no audio file to ship or fail to load. Everything here
         is wrapped defensively: if the browser refuses (autoplay policy,
         no Web Audio support, anything else), the button just quietly
         does nothing rather than breaking the page.
     --------------------------------------------------------------------- */
  var audio = { ctx: null, master: null, built: false, on: false };

  function buildAmbience() {
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return false;

    var ctx = new Ctx();
    var master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    /* Two faintly detuned low sine drones, for an uneasy, breathing tone. */
    [55, 55.6].forEach(function (freq) {
      var osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;

      var lfo = ctx.createOscillator();
      lfo.type = "sine";
      lfo.frequency.value = 0.07;
      var lfoGain = ctx.createGain();
      lfoGain.gain.value = 0.03;
      lfo.connect(lfoGain);

      var gain = ctx.createGain();
      gain.gain.value = 0.08;
      lfoGain.connect(gain.gain);

      osc.connect(gain);
      gain.connect(master);
      osc.start();
      lfo.start();
    });

    /* Filtered noise, for a distant wind / old-room texture under the drone. */
    var bufferSize = ctx.sampleRate * 2;
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var data = buffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    var noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    var noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.value = 400;
    noiseFilter.Q.value = 0.6;

    var noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.05;

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(master);
    noise.start();

    audio.ctx = ctx;
    audio.master = master;
    audio.built = true;
    return true;
  }

  function setSoundUI(isOn) {
    els.soundToggle.classList.toggle("is-on", isOn);
    els.soundToggle.setAttribute("aria-pressed", isOn ? "true" : "false");
  }

  function toggleSound() {
    try {
      if (!audio.built) {
        var ok = buildAmbience();
        if (!ok) return; // Web Audio unsupported — button quietly does nothing.
      }
      if (audio.ctx.state === "suspended") audio.ctx.resume();

      audio.on = !audio.on;
      var now = audio.ctx.currentTime;
      audio.master.gain.cancelScheduledValues(now);
      audio.master.gain.setTargetAtTime(audio.on ? 0.5 : 0, now, 0.4);
      setSoundUI(audio.on);
    } catch (err) {
      // Autoplay restrictions or any other Web Audio failure: fail silently,
      // the archive works perfectly well with no sound.
      console.warn("Bonty's Entity Archive: ambient sound unavailable.", err);
    }
  }

  function initSound() {
    els.soundToggle.addEventListener("click", toggleSound);
  }

})();
