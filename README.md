# Bonty's Entity Archive

A personalized, folklore-themed archive built as a static site: a leather
book cover that opens (in real 3D CSS, no libraries) into a parchment
encyclopedia of paranormal folklore from eight cultural traditions.

## Files

```
index.html    – page structure only (the book, the cover, the sound button)
style.css     – all visual design: leather/parchment textures, the opening
                animation, page layout, the illustration frames
entities.js   – all the content: every entity's lore, plus the list of volumes
script.js     – all behaviour: opening the book, navigation, the illustration
                generator, the ambient sound
```

Only four files, no build step, no dependencies. Open `index.html` directly
in a browser, or host the folder anywhere that serves static files.

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Add these four files to the repository root (a `README.md` too, if you
   want — this one works fine as-is).
3. Commit and push.
4. In the repo on GitHub: **Settings → Pages → Source**, choose the branch
   (usually `main`) and folder `/ (root)`, then save.
5. GitHub gives you a URL like `https://yourusername.github.io/reponame/`
   within a minute or two. That's the whole deployment.

No npm, no build command, nothing else to configure.

## How the opening mechanism works (so it's easy to trust and to extend)

- The cover's closed state is the **default CSS**, not something JavaScript
  sets up after load — so there is nothing to flash or briefly show wrong.
- Clicking the clasp adds exactly one class, `is-open`, to `#book`. Every
  other visual change (the cover rotating away, pages becoming reachable)
  is a CSS rule keyed off that one class.
- There is exactly one click listener for the clasp, and exactly one
  delegated click listener (on `document`) for everything else in the book,
  read from `data-action="..."` attributes. New buttons never need new
  listeners — just give them a `data-action`.

## Adding a new entity

Open `entities.js` and copy one of the objects in the `ENTITIES` array —
the comment at the top of that file walks through each field. Page numbers
are assigned automatically based on where the entity sits in the array, so
you never need to renumber anything by hand.

## Adding a new volume

Add one line to the `VOLUMES` array at the top of `entities.js`
(`{ id: 9, roman: "IX", title: "..." }`), then give entities that `volume`
number. The volume tab bar and navigation pick it up automatically.

## About the illustrations — and adding real photos/art

Every entity has an original ink-style illustration, generated from SVG
shapes in `script.js` (see the `SIGILS` object), rather than a photo or
painting pulled from the internet. That was a deliberate choice: verifying
that an image is actually free to reuse (rather than a "fair use" image
Wikipedia can only legally show on its own article) isn't something I can
reliably check at the scale of 49 entities, and this way no image can ever
fail to load, even offline. Each illustration is built from the tradition's
own description of the entity (Preta's needle-thin throat, Krasue's
trailing organs, Baba Yaga's mortar and pestle) rather than being generic.

**The code is ready for you to add a real image to any entity, any time —
here's the whole process:**

1. Open that entity's Wikipedia link — it's already sitting in the
   **Sources** section at the bottom of its page.
2. Find an image on that article you like. Click through to its file page
   on Wikimedia Commons (click the image, then "More details" if needed)
   and check the license line. Look for **public domain** or a **Creative
   Commons** license (CC0, CC-BY, CC-BY-SA are all fine to reuse) — skip
   anything tagged "non-free" or "fair use."
3. Download it, and save it in a new `images` folder next to `index.html`
   (create the folder if it doesn't exist yet) — e.g. `images/preta.jpg`.
4. In `entities.js`, add one line to that entity's object:
   ```js
   image: "images/preta.jpg",
   ```
   Optionally add a caption too:
   ```js
   imageCredit: "Gaki-Zōshi (Scroll of Hungry Ghosts), 12th century",
   ```

That's it — the page uses the real image automatically. If the file is
ever missing, renamed, or the path is mistyped, it falls straight back to
the drawn illustration instead of showing a broken image icon, so there's
no way to break the page by getting this step wrong.

## Sources

Every entity's "Sources" section links to a real, working page (mostly
Wikipedia, plus a few specialist folklore sites for the less-documented
entries). A small number of entries — where I couldn't find a solid citable
source rather than risk a made-up one — are marked "undocumented" instead
of linked; that's intentional, not a bug.

## Known follow-up

The ambient sound (bottom-right button) currently plays as a fairly flat
layer of noise rather than a distinct atmosphere — noted for a future pass,
not fixed in this version.
