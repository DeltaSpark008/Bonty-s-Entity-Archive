/* ==========================================================================
   BONTY'S ENTITY ARCHIVE — DATA FILE
   ==========================================================================
   This file holds every fact the archive displays. script.js reads it and
   builds the pages; it contains no logic of its own.

   HOW TO ADD A NEW ENTITY
   ------------------------
   1. Copy one of the objects in the ENTITIES array below.
   2. Give it a unique "id" (lowercase, hyphens only — used in links).
   3. Set "volume" to the number (1-8) of the volume it belongs in.
   4. Fill in the text fields. Keep the tone of the others: these are
      presented as folklore and tradition, not verified fact.
   5. Add 1-2 real, working sources. Never invent a URL — if you don't have
      a real one, use a source object with no "url" and it will render as
      an unlinked "undocumented" record instead of a broken link.
   6. Page numbers are assigned automatically, in array order, by script.js.

   HOW TO ADD A NEW VOLUME
   ------------------------
   Add an entry to VOLUMES below with the next id and a roman numeral.
   ========================================================================== */

const VOLUMES = [
  { id: 1, roman: "I",    title: "Indian Subcontinent" },
  { id: 2, roman: "II",   title: "Middle Eastern Traditions" },
  { id: 3, roman: "III",  title: "East Asian Traditions" },
  { id: 4, roman: "IV",   title: "European Traditions" },
  { id: 5, roman: "V",    title: "African Traditions" },
  { id: 6, roman: "VI",   title: "The Americas" },
  { id: 7, roman: "VII",  title: "Southeast Asian Traditions" },
  { id: 8, roman: "VIII", title: "Other & Miscellaneous Traditions" }
];

const ENTITIES = [

  /* ======================= VOLUME I — INDIAN SUBCONTINENT ======================= */

  {
    id: "preta", name: "Preta", volume: 1,
    culture: "Indian Subcontinent", category: "Spirit Lore", type: "Hungry Spirit",
    sigil: "figure",
    image: "Preta.jpeg",
    record: "Preta, the “departed one,” is one of the oldest and most widely shared spirit-figures in South and East Asian belief — a soul held in the space between one life and the next by a hunger that can never be answered.",
    lore: "The idea of the preta runs through Hindu, Buddhist, and Jain cosmology alike, though each tradition frames it differently. In Hindu belief a preta is a transitional state: a soul who has not yet received the rites (shraddha) that would let it pass on, or who died with unfinished business, unpaid debts, or ungoverned craving. Buddhist teaching goes further and names the “hungry ghost” realm as one of six possible rebirths, reserved for those whose lives were ruled by greed and attachment. Across both, the preta is less a monster than a mirror: a picture of what unrestrained wanting looks like when it outlives the body.",
    appearance: "Preta are traditionally described with a bloated, cavernous belly and a throat no wider than the eye of a needle — a body built so that no meal or drink could ever be enough. Some accounts add a withered, ash-grey frame and eyes sunk from centuries of unmet hunger.",
    behavior: "They are said to gather wherever want and neglect linger: crossroads, cremation grounds, and the doorways of houses where funeral rites were skipped or done incorrectly. A preta rarely attacks outright; older accounts describe it as a presence that saps the appetite and comfort from a room rather than a thing that strikes.",
    protection: "The primary safeguard is preventative rather than defensive: the Hindu shraddha ceremony, performed by descendants for the recently dead, offers rice-balls (pinda), water, and prayer specifically so a soul is not left to become a preta. Ongoing rites during Pitru Paksha, the fortnight set aside each year for ancestors, are said to ease any preta already caught in that state.",
    encounters: "Accounts of hungry-ghost experiences persist informally across the region — an inexplicable, gnawing hunger or thirst reported near old cremation grounds or neglected shrines, read by tradition as the nearness of a preta rather than an ordinary cause.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Preta" },
      { label: "Folklore documentation — Indian Paranormal Society", url: "https://blog.indianparanormalsociety.in/types-of-ghosts-in-indian-mythology/" }
    ]
  },

  {
    id: "nishi", name: "Nishi", volume: 1,
    culture: "Indian Subcontinent", category: "Spirit Lore", type: "Night-Calling Spirit",
    sigil: "moon",
    image: "Nishi.jpeg",
    record: "Nishi, more fully Nishi Daak — “the call of the night” — is a spirit of Eastern India said to speak in the voice of someone the listener loves, and to lead them into the dark on the strength of that voice alone.",
    lore: "Known across Bengal, Bihar, Jharkhand, and Assam under regional names (Nishir Daak in Bengal, simply Nishi further west, comparable to Karnataka's Naale Ba), the legend holds that the spirit imitates a missing or deceased relative — a parent, spouse, or sibling — and calls a person's name softly into the night. The folklore is precise about the mechanism: the call comes no more than once or twice, never louder, because the deceit depends on being almost missed. It is worth being exact here — Nishi Daak, a spirit, has no connection to the Nyishi, a living indigenous community of Arunachal Pradesh; the resemblance in name is coincidental.",
    appearance: "Nishi Daak is rarely described as a visible figure at all — the folklore is built almost entirely around sound rather than sight, a familiar voice arriving from the treeline or the dark beyond a village with no source when a light is brought.",
    behavior: "It calls once, waits, and calls again, and tradition holds that answering — or turning to look — is what allows it to draw a person from the safety of home into forest or field, from which they do not return.",
    protection: "The core folk safeguard is procedural rather than ritual: never answer a call in the dark that comes only once or twice, and never call a name back into the night. Some tellings add that a call repeated a third time can be trusted as human, since the spirit is said never to call more than twice.",
    encounters: "The legend is told as a caution more than a specific haunting — parents warning children not to wander after dark, and a companion's disappearance explained, after the fact, by the memory of a voice that called their name from the trees.",
    sources: [
      { label: "Folklore documentation — Mythlok", url: "https://mythlok.com/urban-legends/nishi-daak/" },
      { label: "Folklore documentation — Folklore Chronicles", url: "https://folklorechronicles.com/the-legend-of-bengals-nishi-dak-a-call-from-the-shadows/" }
    ]
  },

  {
    id: "chudail", name: "Chudail", volume: 1,
    culture: "Indian Subcontinent", category: "Spirit Lore", type: "Vengeful Female Spirit",
    sigil: "veiled",
    image: "Chudail.jpeg",
    record: "Chudail — also spelled churail, churel, or chudel — is the vengeful revenant of a woman whose death went unmourned or unavenged, feared across North India, Pakistan, Bangladesh, and Nepal under a dozen regional names.",
    lore: "The most common origin story holds that a woman who dies in childbirth, during pregnancy, or through cruelty at the hands of her own family can return as a chudail, her grief converted into a hunger for revenge aimed most often at men, and at the family who wronged her. Some tellings trace the figure through Persian legend to the spirits of women who died with desires deliberately left unsatisfied. It is worth noting, and not as a mere footnote, that the words chudail and daayan have both been used as real accusations against living women — usually widows or those without children — a history any respectful telling holds alongside the ghost story itself.",
    appearance: "She is said to appear as a strikingly beautiful woman, with one telltale flaw visible to a careful eye: her feet face backward. Other accounts add sagging, ashen skin, a black tongue, and unkempt hair beneath the disguise.",
    behavior: "A chudail is said to haunt crossroads, graveyards, and old peepal trees in particular, calling out to lure men into the forest or an abandoned building, where her true form is revealed only once escape is no longer possible.",
    protection: "Tradition holds that iron — nails driven into her tree or doorway — and specific protective mantras recited by an exorcist (ojha) can drive a chudail off. Checking a stranger's feet before following them at night is the folk test most consistently repeated across regional versions.",
    encounters: "Reported “chudail” sightings are common in regional oral tradition, generally describing a beautiful stranger encountered alone at night near a tree or crossroads, discovered too late to be anything but human by her feet or her shadow.",
    sources: [
      { label: "Folklore documentation — Wikipedia (Churel)", url: "https://en.wikipedia.org/wiki/Churel" }
    ]
  },

  {
    id: "vetala", name: "Vetala", volume: 1,
    culture: "Indian Subcontinent", category: "Spirit Lore", type: "Corpse-Possessing Spirit",
    sigil: "skull",
    image: "Vetal.jpg",
    record: "A Vetala is a knowing, mocking spirit of Hindu tradition that animates the dead rather than appearing as one — most famous from the story cycle in which King Vikramaditya carries one, again and again, on his back.",
    lore: "Vetalas are described dwelling in charnel grounds and possessing corpses at will, using the reanimated body only as a vehicle rather than a true resurrection. Their defining trait in the literature is knowledge rather than violence: in the Baital Pachisi (“Twenty-Five Tales of the Vetala”), the spirit tells King Vikramaditya a puzzle-story each time it is carried, then poses a riddle the king is bound by his own honesty to answer — resetting the chase every time he does.",
    appearance: "Inhabiting a corpse rather than having a fixed body of its own, a Vetala is typically described hanging upside-down, bat-like, from a tree in the charnel ground until disturbed, its borrowed body cold, discoloured, and unnaturally animated.",
    behavior: "Vetalas are credited with the power to drive people mad, cause miscarriage, or kill outright when provoked — but the older tales treat them as guardians and holders of secret knowledge as often as threats, capable of aiding as well as tormenting whoever manages to bind one.",
    protection: "The Vikramaditya cycle doubles as the folk method: a Vetala is said to be bound by its own rules of riddle and honesty, so a person clever and truthful enough can out-argue rather than outrun one. More conventionally, charnel grounds and the trees within them are simply avoided after dark.",
    encounters: "Because the Vetala belongs primarily to a specific, still widely retold narrative cycle rather than a folk-sighting tradition, “encounters” here mean literary and oral retellings of the Vikramaditya story rather than personal reports.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Vetala" }
    ]
  },

  {
    id: "yakshini", name: "Yakshini", volume: 1,
    culture: "Indian Subcontinent", category: "Nature Spirit Lore", type: "Nature Spirit",
    sigil: "tree",
    image: "Yakshini.jpg",
    record: "A Yakshini is a female nature spirit shared across Hindu, Buddhist, and Jain tradition — guardian of trees, hidden wealth, and fertility, and just as often the reason a lone traveller under the wrong tree is never seen again.",
    lore: "Yakshinis are the female counterpart to the yaksha, a class of nature spirits older than the organised religions that later absorbed them into their gateways and scripture. In Hindu texts they attend Kubera, god of wealth, guarding buried treasure; in Buddhist and Jain tradition they became protective figures carved at temple and stupa entrances. Their oldest religious role is the shalabhanjika pose found on temple gateways — one hand pulling down a flowering branch — expressing dohada, the belief that a tree blossoms in response to a woman's touch.",
    appearance: "A Yakshini is usually described as strikingly beautiful, full-figured, and closely tied to a specific tree, pool, or hill — at times indistinguishable from the natural feature she inhabits until she chooses to be seen.",
    behavior: "Approached with respect, she is said to grant fertility, a good harvest, or hidden wealth; approached wrongly, or encountered alone at night, regional legend turns her dangerous — a seductress who leaves nothing of a man but what is found scattered beneath her tree by morning.",
    protection: "Village and temple tradition favours appeasement over defense: offerings left at a named tree or shrine, and simply not approaching certain trees alone after dark — particularly the peepal and banyan most associated with yakshini dwellings.",
    encounters: "Yakshini figures persist as named local legends across the subcontinent — a particular tree or pool with its own yakshini story — more often passed down as regional lore attached to a real place than as a contemporary sighting.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Yakshini" },
      { label: "Folklore documentation — Gods & Monsters", url: "https://godsandmonsters.info/yakshi/" }
    ]
  },

  {
    id: "bhoot", name: "Bhoot", volume: 1,
    culture: "Indian Subcontinent", category: "Spirit Lore", type: "Restless Ghost",
    sigil: "figure",
    image: "Bhoot.jpg",
    record: "Bhoot is the broadest and most everyday term in South Asian ghostlore — the ordinary word for the spirit of someone who died before their time, or without the rites that would let them move on.",
    lore: "Interpretations of how a bhoot comes to exist vary by region and community, but the shared thread is disturbance: a death that was sudden, violent, unrited, or otherwise “wrong” leaves a soul unable to complete the ordinary passage toward rebirth or release. The term is common enough to have entered everyday idiom — to be “ridden by the bhoot” of something means to be obsessively fixated on it.",
    appearance: "Descriptions vary enormously by region and story, but recurring folk markers include feet turned backward, no shadow, and toes that do not touch the ground — small physical wrongnesses meant to give a bhoot away in disguise.",
    behavior: "A bhoot is generally said to remain near the place or people tied to its death or its unfinished business, ranging from mischievous to genuinely dangerous depending on the story — some merely startling, others blamed for illness or misfortune in a household.",
    protection: "Common household practice includes iron objects near thresholds, specific verses or mantras recited at dusk, and avoiding whistling or sweeping after dark, both said in various regional traditions to attract wandering spirits.",
    encounters: "“Bhoot” stories are the most commonly shared ghost accounts across South Asia — a category broad enough to include almost any inexplicable household noise, shadow, or misfortune attributed, in the moment, to something that lingered.",
    sources: [
      { label: "Folklore documentation — Wikipedia (Bhoota)", url: "https://en.wikipedia.org/wiki/Bhoota_(ghost)" },
      { label: "Folklore documentation — Indian Paranormal Society", url: "https://blog.indianparanormalsociety.in/types-of-ghosts-in-indian-mythology/" }
    ]
  },

  {
    id: "pishach", name: "Pishach", volume: 1,
    culture: "Indian Subcontinent", category: "Demonic Spirit Lore", type: "Flesh-Eating Spirit",
    sigil: "claw",
    image: "Pishacha.jpg",
    record: "Pishacha are named in the Vedas themselves as the lowest and most malignant class of night-spirit in Hindu and Buddhist tradition — eaters of raw flesh, ranked below even the rakshasa.",
    lore: "Textual tradition traces their origin to the sage Kashyapa and Krodhavasha, whose name means wrath, or in other accounts to the god Brahma directly. Whatever their origin, pishacha are consistently placed at the bottom of the demonic hierarchy: creatures of pure hunger and impurity rather than the schemers and warriors found among the rakshasas.",
    appearance: "They are described with bulging, blood-red eyes, protruding veins, and a gaunt, corpse-like build — a body meant to signal decay and hunger rather than power.",
    behavior: "Pishacha are said to haunt cremation grounds, battlefields, and other places marked by violent or improper death, where they feed on flesh and on the vital energy of the living. Possession is their most feared ability — entering a person and driving them to sickness, fits, or madness with no ordinary cause.",
    protection: "The primary traditional defense is mantra — a correct recitation is said to loosen a pishacha's grip on a possessed person and drive it out. Communities have also historically set aside small offerings of rice at crossroads during certain festivals specifically to keep pishacha satisfied and at bay.",
    encounters: "Traditional accounts of pishacha possession describe sudden, otherwise unexplained fits or derangement in a person who had recently passed a cremation ground or battlefield after dark, treated by a mantra-reciting healer rather than a physician.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Pishacha" },
      { label: "Folklore documentation — Gods & Monsters", url: "https://godsandmonsters.info/pishacha/" }
    ]
  },

  {
    id: "brahmarakshasa", name: "Brahmarakshasa", volume: 1,
    culture: "Indian Subcontinent", category: "Spirit Lore", type: "Cursed Spirit",
    sigil: "horns",
    image: "Brahmarakshasa.jpg",
    record: "A Brahmarakshasa is the single most feared class of spirit in the classical Hindu ghost hierarchy — the restless, brilliant, and furious remainder of a Brahmin scholar who misused sacred knowledge in life.",
    lore: "The name joins Brahma, referring to a Brahmin's learning, and rakshasa, a demon. In the Garuda Purana and later story cycles such as the Kathasaritsagara, the resulting being is a soul denied liberation (moksha) because of arrogance, misused knowledge, or grave neglect of duty in life. Crucially, a Brahmarakshasa keeps the intellect and memory of its former life, making it a cunning and deliberate presence rather than a mindless one.",
    appearance: "Classical descriptions give it a massive, fearsome build, tusks, two horns, and — pointedly — the shikha, the tuft of hair a Brahmin traditionally kept, retained even in monstrous form as a mark of what it once was.",
    behavior: "It is said to haunt forests, ruined temples, and desolate places tied to its former life, obstructing sacred rites nearby and tormenting trespassers — though some legends also describe a Brahmarakshasa granting boons or knowledge to those bold or respectful enough to approach it correctly.",
    protection: "Because it is regarded as the most difficult spirit to remove, tradition calls for advanced ritual and a properly qualified priest rather than a household remedy; several regions of India maintain small shrines specifically to appease a local Brahmarakshasa rather than attempt to banish it.",
    encounters: "Brahmarakshasa shrines — dedicated to propitiating rather than exorcising the spirit — are still maintained in parts of Kerala and elsewhere, a rare case of a feared spirit also being formally worshipped.",
    sources: [
      { label: "Folklore documentation — Hinduism Facts", url: "https://hinduismfacts.org/brahma-rakshasa/" },
      { label: "Folklore documentation — Wisdom Library", url: "https://www.wisdomlib.org/concept/brahmarakshasa" }
    ]
  },

  {
    id: "daayan", name: "Daayan", volume: 1,
    culture: "Indian Subcontinent", category: "Witch Lore", type: "Witch Spirit",
    sigil: "eyes",
    image: "Daayan.gif",
    record: "Daayan — also dayan or dain — is regarded as one of the most powerful classes of malevolent being in North Indian folklore: part witch, part revenant, and the origin of a real and troubling social history.",
    lore: "The word traces to the Sanskrit dakini, a female attendant of Kali in medieval Hindu literature. Folklore distinguishes a daayan from a chudail mainly by agency: where a chudail is the spirit of a specific woman wronged in death, a daayan is often described as a living or once-living practitioner of black magic who deliberately acquired her power. It matters, and is not a footnote, that the term daayan has also been used as a real-world accusation — the basis of documented witch-hunting and violence against women, mostly widows or childless women, in parts of rural India. A respectful account of the legend keeps this history in view alongside the folklore.",
    appearance: "She is described as beautiful and charming at first glance, concealing an older, true form beneath — with an extraordinarily long braid (choti) said to be the seat of her power, long black nails, and feet that face backward.",
    behavior: "A daayan is said to feed on the blood or life-force of her victims, beginning with the youngest male in a household and working upward, and to mark a family for misfortune with nothing more than a lingering gaze.",
    protection: "The most repeated folk remedy is symbolic rather than violent: cutting a daayan's braid is said to strip her of her power entirely. Protective mantras, iron, and the intervention of a recognised exorcist are also widely cited across regional tellings.",
    encounters: "Beyond the ghost story, daayan accusations against real women remain a documented and actively studied social issue in parts of India, distinct from — but historically entangled with — the folklore itself.",
    sources: [
      { label: "Folklore documentation — Wikipedia (Dayan)", url: "https://en.wikipedia.org/wiki/Dayan_(witch)" }
    ]
  },

  {
    id: "masaan", name: "Masaan", volume: 1,
    culture: "Indian Subcontinent", category: "Spirit Lore", type: "Cremation-Ground Spirit",
    sigil: "skull",
    image: "masaan.jpeg",
    record: "Masaan — from Sanskrit shmashana, “cremation ground” — names both a place and the restless spirits, generally described as the ghosts of children, said to linger there and reach toward the living.",
    lore: "Nineteenth-century ethnographic surveys of North Indian folk religion recorded masaan as a general term for the evil spirits that haunt a cremation ground, most often described taking the shape of a child. In Rajbanshi communities of North Bengal this shades into something closer to an actual folk deity — Masan Thakur, described as the eldest of the goddess Kali's children, worshipped rather than only feared, with a specific day, offerings, and appeasement rites of his own.",
    appearance: "The most consistent description gives masaan the form of a child's ghost, or a small, dark, hideous figure that comes from the ashes of the pyre itself; masani, its female counterpart in some tellings, is described lurking specifically around the funeral fire rather than wandering.",
    behavior: "It is said to be drawn to children above all, cursing anyone whose shadow it crosses with a slow wasting illness rather than a sudden attack. Folk belief also holds it responsible for otherwise unexplained fevers and nightmares in a household with young children.",
    protection: "In North Bengal's Masan Thakur tradition, the remedy is worship rather than banishment — offerings of puffed rice, roasted fish, bananas, milk, and ghee, brought to the deity's shrine on a Tuesday, Saturday, or new-moon night. Elsewhere the simpler folk rule is to keep children away from cremation grounds and their shadows entirely, especially at dusk.",
    encounters: "Masan Thakur worship is an active, documented tradition among Rajbanshi communities in North Bengal today, distinct from the more general “masaan” ghost stories told about cremation grounds elsewhere in North India.",
    sources: [
      { label: "Folklore documentation — Indpaedia", url: "http://indpaedia.com/ind/index.php/North_Indian_Popular_Religion:12-Malevolent_spirits" }
    ]
  },

  {
    id: "acheri", name: "Acheri", volume: 1,
    culture: "Indian Subcontinent", category: "Spirit Lore", type: "Mountain Spirit",
    sigil: "figure",
    image: "Acheri.jpeg",
    record: "Acheri is the ghost of a young girl in the hill folklore of Kumaon and Garhwal in the southern Himalayas — a spirit that keeps to the peaks by day and is blamed for sudden childhood illness by night.",
    lore: "Folklore describes an Acheri as the spirit of a girl who died young, violently, or of disease, and who now dwells on mountain summits with others of her kind, descending into villages and valleys at dusk to hold revels of her own. A frequently repeated but mistaken claim ties the Acheri to “Native American” folklore instead — this appears to trace to a single 1985 reference work and has no basis in any Indigenous North American source. The Acheri belongs specifically to Himalayan tradition.",
    appearance: "She is generally pictured as a frail, pale, skeletal girl, sometimes in tattered clothing, distinguished mainly by one particular vulnerability: an intense dislike of the colour red.",
    behavior: "An Acheri is said to cause illness — historically linked in folk memory to ailments like colds and goitre common in isolated hill regions — simply by letting her shadow fall across a child, with no need for direct contact.",
    protection: "The folk remedy is small and specific: a scarlet thread tied around a child's throat, said to ward off both the Acheri's shadow and the illnesses associated with it — one of relatively few entries in the archive with a single, precisely documented protective object rather than a general ritual.",
    encounters: "Acheri sightings are recorded mainly as regional hill folklore from Uttarakhand rather than an ongoing contemporary sighting tradition, generally invoked to explain a child's sudden, otherwise unexplained illness.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Acheri" },
      { label: "Folklore documentation — Gods & Monsters", url: "https://godsandmonsters.info/acheri/" }
    ]
  },

  {
    id: "rakshasa", name: "Rakshasa", volume: 1,
    culture: "Indian Subcontinent", category: "Demonic Spirit Lore", type: "Shapeshifting Demon",
    sigil: "horns",
    image: "Rakshasa.jpg",
    record: "Rakshasa are among the oldest and most prominent demons of Hindu mythology — powerful, shapeshifting beings who appear throughout the Vedas, the epics, and Puranic literature as adversaries of gods, sages, and heroes.",
    lore: "The Ramayana casts the rakshasa king Ravana as its central antagonist, ruling the island kingdom of Lanka with an army of rakshasas; the Mahabharata features rakshasas such as Hidimba and Bakasura in encounters with the Pandavas. Some texts describe rakshasas as a whole fallen or cursed lineage rather than simple monsters, complete with their own courts, cities, and codes of honour, capable of great learning and devotion despite their fearsome reputation.",
    appearance: "Rakshasas are usually described as large, fanged, and inhuman, though tradition holds they are highly skilled shapeshifters, equally able to appear as an ordinary person, an animal, or a being of great beauty.",
    behavior: "They are associated above all with disrupting yajna (sacred fire rituals) and tormenting ascetics and sages in the forest, alongside more familiar demonic behaviour — deception, illusion (maya), and consuming human flesh.",
    protection: "Vedic and epic tradition credits specific mantras and astras (empowered weapons), along with the protection of gods and sages, as the primary defense — the Ramayana's own narrative turns on exactly this, the god-aided defeat of Ravana.",
    encounters: "As with the Vetala, rakshasa “encounters” in the archive's sense are almost entirely literary and religious — drawn from the Ramayana, Mahabharata, and Puranic literature — rather than from a folk-sighting tradition.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Rakshasa" }
    ]
  },

  /* ======================= VOLUME II — MIDDLE EASTERN TRADITIONS ======================= */

  {
    id: "jinn", name: "Jinn", volume: 2,
    culture: "Middle Eastern Traditions", category: "Spirit Lore", type: "Elemental Being",
    sigil: "flame",
    image: "Jinn.jpg",
    record: "Jinn are beings described in the Qur'an itself as a third order of creation alongside humans and angels — made of smokeless fire, invisible by nature, and answerable to the same moral judgment as people.",
    lore: "Islamic tradition holds that God created angels from light, humans from clay, and jinn from “the fire of a scorching wind.” Like humans, jinn possess free will and are considered capable of belief or unbelief, of good deeds or harm. They are described living in a hidden society parallel to the human one — a detailed, structured cosmology rather than a loose set of “genie” tales, though the Western genie derives directly from this tradition. Belief in jinn predates Islam in Arabian religion and remains part of mainstream Islamic theology today, not merely folklore.",
    appearance: "Because they are made of smokeless fire, jinn are invisible in their natural state; tradition holds they can take animal or human form at will, and that snakes in particular are sometimes treated with caution in case one is a jinn in disguise.",
    behavior: "Jinn are said to range across the same moral spectrum as people — some devout, some mischievous, some genuinely dangerous — and to be capable of possessing or influencing a person, which Islamic tradition treats as a real and distinct phenomenon requiring its own religious remedy (ruqyah).",
    protection: "The Qur'an and hadith are themselves the primary traditional protection: reciting specific verses (particularly Ayat al-Kursi and the Qur'an's closing chapters), saying “Bismillah” before entering a room or eating, and general religious observance are all cited as protection against harmful jinn.",
    encounters: "Belief in jinn remains active and mainstream across much of the Islamic world today; reported encounters and possessions are treated as a live religious matter addressed through ruqyah rather than purely as historical folklore.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Jinn" },
      { label: "Folklore documentation — EBSCO Research Starters", url: "https://www.ebsco.com/research-starters/ethnic-and-cultural-studies/jinn-genie" }
    ]
  },

  {
    id: "ifrit", name: "Ifrit", volume: 2,
    culture: "Middle Eastern Traditions", category: "Spirit Lore", type: "Fire Spirit",
    sigil: "flame",
    image: "Ifrit.jpg",
    record: "An Ifrit is a formidable class of jinn named directly in the Qur'an — a being of cunning, pride, and fire, second in power only to the marid.",
    lore: "The Qur'an itself uses the term in the story of Solomon, where an ifrit offers to bring the Queen of Sheba's throne before the court rises. Later story cycles, especially One Thousand and One Nights, expanded the ifrit into a distinct type: intelligent, organised into its own societies, and often encountered wherever blood has recently been spilled.",
    appearance: "Ifrit are generally described as enormous, winged, and composed of or wreathed in fire, with a fierce and commanding presence distinct from the more monstrous ghul or the vaster, water-linked marid.",
    behavior: "Tradition casts the ifrit as cunning and treacherous rather than simply violent — capable of being bound, tricked, or enslaved by a human sorcerer with the right knowledge, but dangerous and resentful if crossed or freed carelessly.",
    protection: "As with jinn generally, Qur'anic recitation and religious observance are the primary traditional defenses; older story-cycle tradition adds that an ifrit, once bound by name or contract, is obligated to honour the exact terms of that binding, however reluctantly.",
    encounters: "Ifrit appear throughout classical Arabic and Persian literature, most famously in the tales of the Nights, rather than in a sighting tradition distinct from jinn belief generally.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Ifrit" },
      { label: "Folklore documentation — Gods & Monsters", url: "https://godsandmonsters.info/djinn/" }
    ]
  },

  {
    id: "ghul", name: "Ghul", volume: 2,
    culture: "Middle Eastern Traditions", category: "Undead Lore", type: "Graveyard Spirit",
    sigil: "skull",
    image: "Ghul.jpg",
    record: "The ghul — anglicised as “ghoul” — is a shapeshifting desert and graveyard spirit of pre-Islamic Arabian religion, generally held to be the least intelligent and most purely predatory class of jinn.",
    lore: "Early Arabic sources describe the ghul as a solitary, cave-dwelling creature that emerges only at night and avoids sunlight, willing to eat human or animal flesh alike. Some medieval geographers describe a regional ghul inhabiting the wilds of Iran and Afghanistan specifically. The Western horror-fiction “ghoul” — a corpse-eating graveyard scavenger — descends directly from this figure, entering English literature through William Beckford's 1786 novel Vathek.",
    appearance: "A ghul is described as a shapeshifter capable of taking animal form, particularly a hyena, to lure travellers — its true form left vague across most tellings, defined more by behaviour than appearance.",
    behavior: "It is said to haunt graveyards and lonely desert roads specifically to mislead and disorient travellers, luring them off the safe path before attacking, and to favour human flesh once a victim is isolated.",
    protection: "Older Arabian travel-lore held that reciting the call to prayer (adhan), or simply naming God aloud, would cause a ghul to flee; staying on a known path and travelling in company rather than alone was the more practical everyday precaution.",
    encounters: "A 1667 account from Mecca describes locals attributing a hyena's attack on a woman to a ghul specifically because of the resemblance between the animal and the legendary shapeshifter — an unusually direct, dated record of the belief in practice.",
    sources: [
      { label: "Folklore documentation — Wikipedia (Ghoul)", url: "https://en.wikipedia.org/wiki/Ghoul" },
      { label: "Folklore documentation — Life in Saudi Arabia", url: "https://lifeinsaudiarabia.net/types-of-jinn-according-to-islam/" }
    ]
  },

  {
    id: "qareen", name: "Qareen", volume: 2,
    culture: "Middle Eastern Traditions", category: "Spirit Lore", type: "Companion Spirit",
    sigil: "eyes",
    image: "Qareen.jpeg",
    record: "A Qareen is a jinn companion Islamic tradition holds is assigned to every human being at birth — an intimate, private, and lifelong presence rather than a monster to be encountered.",
    lore: "The word qarin simply means “constant companion.” A hadith recorded in Sahih Muslim has the Prophet Muhammad state that every person, himself included, has a qareen from among the jinn — and that his own, uniquely, submitted to Islam and now counsels only good. For everyone else, mainstream interpretation holds the qareen's role is to whisper temptation, encourage sin, and amplify a person's own weaknesses, functioning as a kind of personalised tempter rather than an external threat.",
    appearance: "A qareen has no physical form described in tradition at all — it is understood as an unseen, permanently attached presence rather than something that could be seen or encountered directly.",
    behavior: "It is described as working entirely through suggestion — whispering justifications, doubts, and temptations tailored to the specific person it accompanies, rather than acting in the world directly.",
    protection: "Religious practice is itself the stated defense: remembrance of God (dhikr), recitation of Qur'anic verses, and conscious resistance to the whispers (waswasa) attributed to one's qareen are the standard response described in Islamic teaching.",
    encounters: "Because the qareen is understood as a permanent, universal, and invisible companion rather than an occasional apparition, there is no separate “sighting” tradition — its presence is inferred from temptation and inner conflict rather than observed.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Qareen" }
    ]
  },

  {
    id: "marid", name: "Marid", volume: 2,
    culture: "Middle Eastern Traditions", category: "Spirit Lore", type: "Powerful Jinn",
    sigil: "water",
    image: "Marid.jpg",
    record: "A Marid is described as the most powerful order of jinn in Arabic tradition — vast, proud, and closely tied to the sea, the likely origin of the wish-granting “genie” of later popular imagination.",
    lore: "Marid appear in both pre-Islamic Arabian mythology and One Thousand and One Nights, most famously in “The Fisherman and the Jinni.” Islamic scholarly tradition, including the jurist Ibn Abd al-Barr, ranks the marid as more dangerous than an ordinary devil (shaytan) but, notably, less cunning than an ifrit — powerful and difficult to control, yet more easily outwitted.",
    appearance: "Marid are described as towering, commanding figures, sometimes given skin tones from pale to deep blue reflecting their watery associations, distinguishing them from the fire-wreathed ifrit.",
    behavior: "Tradition holds a marid can grant wishes to a human who manages to bind or best it, but rarely without a price — battle, imprisonment, or an exhausting campaign of flattery are all cited as the cost of compelling one to cooperate.",
    protection: "As with jinn generally, religious observance and Qur'anic recitation are the primary defenses named in tradition; story-cycle folklore separately holds that a marid, once genuinely bound by name or vessel, is obligated to honour that binding exactly.",
    encounters: "The marid's best-known “encounter” is literary rather than firsthand — the Nights tale of a fisherman who frees a marid from a sealed vessel, then has to talk his way out of being killed by it in gratitude.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Marid" },
      { label: "Folklore documentation — Mythlok", url: "https://mythlok.com/marid/" }
    ]
  },

  /* ======================= VOLUME III — EAST ASIAN TRADITIONS ======================= */

  {
    id: "onryo", name: "Onryō", volume: 3,
    culture: "East Asian Traditions", category: "Vengeful Spirit Lore", type: "Vengeful Spirit",
    sigil: "eyes",
    image: "Onryo.jpg",
    record: "Onryō — “vengeful spirit” — names the most feared class of yūrei in Japanese tradition: a ghost whose death left behind a grudge so total that ordinary death cannot end it.",
    lore: "Where most yūrei are bound to a place or a person until their grievance is resolved, tradition holds an onryō's fury outlasts even that — its curse can linger at a site long after the spirit itself might otherwise be considered gone. The belief dates back to at least the seventh century in Japanese record, resting on the idea that a soul who dies consumed by hatred, injustice, or betrayal retains the power to act on the living world. Classic kabuki theatre, especially the story of Oiwa in Yotsuya Kaidan, fixed the now-iconic image — long black hair, white burial kimono — that modern horror cinema (Ringu, Ju-on) draws on directly.",
    appearance: "Traditional accounts gave onryō no fixed appearance at all; the now-familiar white burial kimono and trailing black hair are a convention that crystallised through Edo-period kabuki costume rather than older folklore.",
    behavior: "An onryō is described as seeking total, often indiscriminate retribution — capable of harming or killing the person who wronged it, and in the more extreme accounts, of causing wider disaster rather than a contained, personal haunting.",
    protection: "Traditional response favours appeasement over defense: identifying the wrong that created the onryō and formally correcting or honouring it, historically through a dedicated shrine, is described as the only reliable way to end the curse rather than simply escape it.",
    encounters: "Historical figures said to have become onryō, such as the courtier Sugawara no Michizane, were given formal shrines specifically to pacify their grudge — a documented case of state and religious response to a believed onryō.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Onry%C5%8D" },
      { label: "Folklore documentation — Yokai.com", url: "https://yokai.com/onryou/" }
    ]
  },

  {
    id: "yurei", name: "Yūrei", volume: 3,
    culture: "East Asian Traditions", category: "Spirit Lore", type: "Ghost",
    sigil: "veiled",
    image: "Yurei.jpg",
    record: "Yūrei is the general Japanese word for ghost — souls barred from a peaceful afterlife, encompassing a whole taxonomy of more specific spirits from the vengeful onryō to the gentle, candy-bringing zashiki-warashi.",
    lore: "The word combines yū, “faint” or “dim,” and rei, “soul” — a name suggesting something barely there rather than solid. Japanese folklore subdivides yūrei by the manner or circumstance of death: onryō for a grudge-driven ghost, ubume for a mother who died in childbirth and returns to tend her children, goryō for a wronged aristocrat, and funayūrei for those lost at sea, among others.",
    appearance: "The now-standard yūrei image — white burial kimono, long black hair loose rather than bound, no visible feet — developed through Edo-period art and kabuki convention, most influentially the painter Maruyama Ōkyo's Ghost of Oyuki. White itself is significant: a colour of Shinto ritual purity, and of the burial kimono (kyokatabira) used in Edo-period funerals.",
    behavior: "Unlike an onryō, an ordinary yūrei is generally described as bound to a specific place, object, or person connected to its death, and capable of being calmed once whatever kept it from moving on is finally resolved.",
    protection: "Buddhist memorial rites and offerings, correctly performed, are the standard traditional remedy — the same underlying idea found across much of Asian ghostlore, that a spirit lingers because something was left undone, and departs once it is completed.",
    encounters: "The Zenshō-an temple in Tokyo holds Japan's largest single collection of yūrei paintings, displayed only during August, the traditional month associated with the spirits of the dead.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Y%C5%ABrei" }
    ]
  },

  {
    id: "yuki-onna", name: "Yuki-onna", volume: 3,
    culture: "East Asian Traditions", category: "Spirit Lore", type: "Snow Spirit",
    sigil: "moon",
    image: "Yuki-onna.jpg",
    record: "Yuki-onna, the “snow woman,” is a spirit of Japan's snow country said to appear to travellers lost in a blizzard — sometimes as their death, sometimes, in gentler versions, as a test of a promise.",
    lore: "Stories of the yuki-onna predate Japan's Muromachi period (from 1336) and vary widely by region, from purely lethal to genuinely tender. The most famous telling, popularised by Lafcadio Hearn, has her spare a young woodcutter for his beauty on condition he never speak of her — he marries, has children, and eventually breaks the promise to his wife, who reveals herself as the very spirit he encountered that night.",
    appearance: "She is described as a strikingly beautiful woman, unnaturally pale, often barefoot in the snow and sometimes said to leave no footprints at all, marking her as something other than human to any watchful witness.",
    behavior: "Older, harsher tellings have her freeze travellers to death with her breath or lead them deeper into a storm; gentler regional versions describe her testing kindness or an oath rather than simply killing on sight.",
    protection: "Folk advice is seasonal and practical rather than ritual: avoid travelling alone during snowstorms, and in the versions where she can be bargained with, keep any promise made to her exactly, since her return is usually tied to a broken vow rather than random chance.",
    encounters: "Regional yuki-onna tales are attached to specific snow-country villages across Japan, generally framed as explaining winter travel deaths or, in the softer versions, as a folk romance rather than a horror story.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Yuki-onna" }
    ]
  },

  {
    id: "kuchisake-onna", name: "Kuchisake-onna", volume: 3,
    culture: "East Asian Traditions", category: "Urban Legend Lore", type: "Vengeful Spirit",
    sigil: "mask",
    image: "Kuchisake.jpg",
    record: "Kuchisake-onna, the “slit-mouthed woman,” is Japan's most notorious modern urban legend — a masked figure who asks a single question, and whose answer decides what happens next.",
    lore: "The legend is sometimes described with roots as far back as the Edo period, but its modern form dates to a specific 1978 case that became a national panic across Japan in the summer of 1979, with newspapers reporting sightings and parents escorting children home from school in groups. Origin stories describe her as a woman mutilated by a jealous husband, her mouth slit from ear to ear, who died and returned with the disfigurement made permanent.",
    appearance: "She appears as a tall woman, described anywhere from 5'7\" to considerably taller in some tellings, wearing a surgical mask that hides the lower half of her face, with long black hair and pale skin otherwise described as attractive.",
    behavior: "She approaches alone at night and asks, “Am I beautiful?” Any answer is a trap in most tellings — saying no is said to end badly immediately, while saying yes leads her to remove the mask and ask again, “Even like this?”, with the second answer deciding the outcome.",
    protection: "Playground versions of the legend circulate specific, often-changing “safe” answers — a noncommittal reply like “you look average,” or naming a particular hard candy said to distract her — folklore that functions as much as a shared game among children as a genuine defense.",
    encounters: "A 1979 arrest of a woman dressed as Kuchisake-onna and carrying a knife in Himeji was widely reported as ending the initial panic, though the legend itself never fully went away and remains a staple of Japanese schoolyard storytelling.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Kuchisake-onna" }
    ]
  },

  {
    id: "teke-teke", name: "Teke Teke", volume: 3,
    culture: "East Asian Traditions", category: "Urban Legend Lore", type: "Vengeful Spirit",
    sigil: "figure",
    image: "teketeke.jpeg",
    record: "Teke Teke is a modern Japanese urban legend of a schoolgirl's ghost, cut in half by a train, who now drags herself along on her hands — named for the sound she makes doing it.",
    lore: "Unlike older yōkai with centuries of recorded tradition, Teke Teke's exact origin is unclear and was likely established during Japan's school ghost-story boom of the 1990s; a related version names the victim Kashima Reiko, who similarly lost her legs and now haunts train-station bathrooms. Folklorists classify her loosely as an onryō in the modern sense, though she belongs to contemporary urban legend rather than classical yōkai tradition.",
    appearance: "She is described only from the waist up — her lower body left behind at the accident — moving on her hands and forearms, the scrape of her body against pavement or floor producing the “teke teke” sound that gives her the name.",
    behavior: "If encountered at night near train tracks or stations, she is said to give chase — impossible to outrun in most tellings — and to kill by cutting her victim in half, mimicking her own death.",
    protection: "The legend offers little consistent defense; a small number of tellings claim a quick, specific answer can spare a victim, but the more common version is deliberately inescapable, part of what makes it effective as shared schoolyard fright.",
    encounters: "As a living urban legend rather than a fixed historical account, Teke Teke's story is told with variations in location, name, and origin depending on the school or region — she has no single “authentic” version.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Teke_Teke" }
    ]
  },

  {
    id: "jiangshi", name: "Jiangshi", volume: 3,
    culture: "East Asian Traditions", category: "Undead Lore", type: "Hopping Corpse",
    sigil: "skull",
    image: "Jiangshi.png",
    record: "Jiangshi, popularly known in the West as the “hopping vampire,” is a reanimated corpse of Chinese folklore, driven upright and rigid by trapped or errant qi, and traditionally reined in by a Taoist priest rather than a hero.",
    lore: "Scholars trace the belief partly to the real historical practice of “corpse-driving”: professional corpse-carriers in Qing-dynasty Xiang province transporting the bodies of dead labourers home for burial, trussed upright against bamboo poles in a way that, glimpsed at a distance or by torchlight, could resemble a standing corpse moving on its own. The genre proper crystallised in Qing-dynasty literature and later Hong Kong cinema, especially the Mr. Vampire film series.",
    appearance: "A jiangshi is typically shown stiff-limbed and dressed in the official burial garments of the Qing dynasty, arms outstretched, moving in rigid hops because rigor mortis is said to prevent it from bending its legs.",
    behavior: "It is said to hunt by sensing breath, draining the qi (life-force) of the living through touch, and to be capable of “infecting” a victim it kills, turning them into a jiangshi in turn — the folkloric root of its Western “vampire” label.",
    protection: "Traditional countermeasures are specific and almost playful in their logic: holding one's breath so the jiangshi cannot sense it, a rooster's crow marking daybreak, sticky rice, and above all a paper talisman inscribed by a Taoist priest and struck to its forehead to freeze it in place.",
    encounters: "The jiangshi belongs to a genre — jiangshi fiction — as much as to a sighting tradition, rooted in the documented historical corpse-driving practice rather than in individual eyewitness accounts.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Jiangshi" }
    ]
  },

  {
    id: "huli-jing", name: "Huli Jing", volume: 3,
    culture: "East Asian Traditions", category: "Shapeshifter Lore", type: "Fox Spirit",
    sigil: "fox",
    image: "Huli.jpeg",
    record: "Huli jing, the fox spirit of Chinese mythology, predates Japan's kitsune by centuries and shares its core belief: that with enough age and spiritual cultivation, an ordinary fox can take human — and dangerously beautiful — form.",
    lore: "Early references appear in the Shanhaijing (Classic of Mountains and Seas), and the belief runs continuously through Chinese literature for more than two thousand years, most richly in Pu Songling's Qing-dynasty collection Liaozhai Zhiyi, which mixes fox-spirit horror with genuine love stories. A fox is traditionally said to gain the ability to take human shape at fifty years old, a beautiful woman's shape at a hundred, and communion with heaven itself at a thousand.",
    appearance: "A huli jing is described almost always as a strikingly beautiful young woman when in human form, sometimes with a residual fox-like trait — a shadow, a tail, or eyes — visible to someone who knows to look.",
    behavior: "Their nature in folklore is genuinely dual: some tales show a fox spirit as a wise, benevolent guide who rewards kindness with cures or fortune, while others cast her purely as a seductress who drains a man's vitality or leads him to ruin — the tradition holds both without resolving which is more true.",
    protection: "Historic household shrines to a local fox spirit (xianjia) were maintained specifically to keep on its good side, treating the huli jing as a power to respect and petition rather than only to repel.",
    encounters: "Fox-spirit shrines were a genuine, widespread feature of household and street-corner worship in China for centuries, and small examples reportedly persist in and around Beijing today.",
    sources: [
      { label: "Folklore documentation — Wikipedia (Huli jing)", url: "https://en.wikipedia.org/wiki/Huli_jing" }
    ]
  },

  /* ======================= VOLUME IV — EUROPEAN TRADITIONS ======================= */

  {
    id: "banshee", name: "Banshee", volume: 4,
    culture: "European Traditions", category: "Death Omen Lore", type: "Death Omen Spirit",
    sigil: "veiled",
    image: "Banshee.jpg",
    record: "The banshee — from Irish bean sí, “woman of the fairy mound” — is a spirit of Irish and Scottish tradition whose wail is heard not as an attack but as a warning: someone in the family she follows is about to die.",
    lore: "Despite her ghostly reputation, Irish tradition technically classes the banshee as a fairy rather than a human dead — connected to the ancient burial mounds (síde) that dot the Irish landscape, believed to be the dwellings of an older, pre-Christian pantheon reduced to fairy status. Tradition held that only a small number of specific old Irish families were originally “followed” by a banshee, a distinction later loosened as families intermarried.",
    appearance: "She is most often described combing long, flowing hair with a silver comb, wearing a grey cloak over a green dress, her eyes red from perpetual weeping — though firsthand 17th-century accounts, such as Lady Fanshawe's, describe her instead in white, with red hair and a ghastly pale face.",
    behavior: "A banshee's role is to warn, not to harm — her keening cry (from the Irish caoineadh, a traditional lament) is heard as an omen rather than a threat, and multiple banshees crying together is said to mark the death of someone especially great or holy.",
    protection: "Because she is understood as a messenger rather than an aggressor, folklore offers no real defense against a banshee's cry, only the grim certainty of what it means. The one recurring folk warning is not to pick up a silver comb found on the ground, since it may be hers, deliberately left to lure whoever takes it.",
    encounters: "Banshee sightings and “hearings” are still occasionally reported in Irish oral tradition around a family death, generally described afterward as an unexplained wail heard shortly before the news arrived.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Banshee" },
      { label: "Folklore documentation — Irish Myths", url: "https://irishmyths.com/2022/07/25/banshee/" }
    ]
  },

  {
    id: "black-shuck", name: "Black Shuck", volume: 4,
    culture: "European Traditions", category: "Omen Lore", type: "Spectral Hound",
    sigil: "wolf",
    image: "Blackshuck.jpeg",
    record: "Black Shuck is a huge, glowing-eyed phantom dog said to roam the coastline and countryside of East Anglia — one of dozens of “black dog” apparitions recorded across the British Isles, and a likely inspiration for Conan Doyle's Hound of the Baskervilles.",
    lore: "The name likely derives from the Old English scucca, meaning “devil” or “fiend.” Accounts of Black Shuck form part of the folklore of Norfolk, Suffolk, Essex, and the Cambridgeshire Fens specifically, though descriptions of his nature vary — some traditions record him purely as a death omen, others describe him as strangely companionable to a lone traveller rather than threatening.",
    appearance: "He is described as a hairy black dog of abnormal size, from that of a large calf to a horse, with eyes that glow or burn like torches in the dark.",
    behavior: "The most consistent tradition holds that anyone who looks Black Shuck directly in the eye will die within the year — a version of the widespread “omen of doom” black-dog motif found across Britain, though local tellings occasionally describe him as harmless or even protective of travellers on lonely roads.",
    protection: "Folk advice is simple avoidance: do not meet the dog's gaze, and do not travel certain coastal roads and churchyards alone at night, particularly around Norfolk and Suffolk villages with their own named Shuck legends.",
    encounters: "A famous 1577 account describes a huge black dog bursting into churches in Bungay and Blythburgh, Suffolk, during a violent storm, leaving scorch marks on a door still shown to visitors today and remembered locally as “the devil's fingerprints.”",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Black_Shuck" }
    ]
  },

  {
    id: "dullahan", name: "Dullahan", volume: 4,
    culture: "European Traditions", category: "Death Omen Lore", type: "Headless Rider",
    sigil: "floating-head",
    image: "Dullahan.jpg",
    record: "The Dullahan is a headless rider of Irish folklore — sometimes on horseback, sometimes driving a black coach — who carries his own severed head under one arm, and whose appearance is a sure sign that someone nearby is about to die.",
    lore: "Because the Dullahan is not well attested in older native Irish oral sources, folklorists have raised genuine doubt about how far back the figure actually goes versus how much was shaped by 19th-century antiquarian writers and illustrators such as W. H. Brooke. Whatever its exact age, the image has become one of Ireland's most recognisable supernatural figures, and a likely influence on Washington Irving's headless horseman.",
    appearance: "He rides a black horse or drives a black coach (the coiste bodhar), his own head tucked under one arm, its eyes able to see for great distances across the darkened countryside, and his whip said to be made from a human spine.",
    behavior: "The Dullahan is said to ride toward the house of someone about to die, calling their name once he arrives, and to strike blind, or worse, anyone foolish enough to watch him pass.",
    protection: "Folklore holds that gold is the Dullahan's one weakness, however small — even a single gold coin displayed or thrown in his path is said to force him to withdraw immediately.",
    encounters: "Dullahan sightings are described in 19th-century Irish folklore collections as a genuinely feared death-omen, distinct from, though often compared to, the banshee's wailing warning.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Dullahan" }
    ]
  },

  {
    id: "redcap", name: "Redcap", volume: 4,
    culture: "European Traditions", category: "Malevolent Spirit Lore", type: "Malevolent Goblin",
    sigil: "eyes",
    image: "Redcap.jpeg",
    record: "The Redcap is a short, murderous goblin of the Anglo-Scottish Border country, said to inhabit ruined castles and towers with a history of violence — and to survive only by keeping his cap freshly soaked in human blood.",
    lore: "The figure is closely tied to the specific, centuries-long history of the border between England and Scotland: a region of raids, feuds, and shifting loyalties whose ruined fortifications became, in local folklore, dwelling places for something that never fully left. Unlike the more playful or mischievous fairies of other traditions, the Redcap is described as openly, deliberately violent by nature rather than merely dangerous if provoked.",
    appearance: "He is described as a short, thickset old man with long teeth, skinny talon-like fingers, blazing red eyes, wild hair, iron boots, a pikestaff, and — the source of his name — a cap perpetually stained and soaked with blood.",
    behavior: "A Redcap must kill regularly to survive: if the blood staining his cap is allowed to dry out, tradition holds that he dies. This gives him a standing, structural motive to murder any traveller who enters his ruin rather than acting only when provoked.",
    protection: "Folklore holds that reciting scripture aloud, or displaying a cross, causes a Redcap to shriek and vanish, leaving behind one of his own teeth as the only trace — one of the more specific and consistently repeated protective methods in British folklore.",
    encounters: "Ruined border towers such as Blackett Tower in Dumfriesshire carry their own named Redcap or “Old Red Cap” ghost traditions, tying the general legend to specific, still-standing sites.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Redcap" }
    ]
  },

  {
    id: "kelpie", name: "Kelpie", volume: 4,
    culture: "European Traditions", category: "Water Spirit Lore", type: "Shapeshifting Water Spirit",
    sigil: "horse",
    image: "Kelpie.jpeg",
    record: "The kelpie is Scotland's most famous water spirit — a shapeshifter that most often appears as a beautiful horse by the edge of a loch, waiting for someone to climb on.",
    lore: "Nearly every significant body of water in Scotland carries its own kelpie story, and 19th-century folklore collectors, working with inconsistent spelling and heavy anglicisation, recorded a whole family of related water-horses under different regional names, including the fiercer each-uisge. The legend is generally thought to have doubled as a practical warning, keeping children away from dangerous lochs and rivers, and women wary of charming strangers.",
    appearance: "As a horse, a kelpie is described as unnaturally fine and well-formed; in human form it can be recognised by water weed tangled in its hair or, in some tellings, hooves it cannot fully disguise.",
    behavior: "Anyone who mounts the horse finds their skin sticks fast to its hide; the kelpie then plunges into deep water, drowning and sometimes devouring its rider. A well-known variant has a kelpie lure nine children onto its back before a tenth escapes by refusing to touch it.",
    protection: "The kelpie's one weakness is its magical bridle — stealing it is said to grant total control over the creature, forcing it into servitude, though some tellings warn the kelpie dies within a day if the bridle isn't eventually returned. Iron and holy symbols are also cited as wards, especially at haunted river crossings.",
    encounters: "Clan MacGregor is traditionally said to have kept an actual kelpie's bridle passed down through generations after an ancestor took one near Loch Slochd — a family legend distinct from, though clearly related to, the wider Loch Ness water-monster tradition.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Kelpie" }
    ]
  },

  /* ======================= VOLUME V — AFRICAN TRADITIONS ======================= */

  {
    id: "tokoloshe", name: "Tokoloshe", volume: 5,
    culture: "African Traditions", category: "Spirit Lore", type: "Mischievous Spirit",
    sigil: "claw",
    image: "Tokoloshe.jpeg",
    record: "The tokoloshe is a small, dwarf-like water spirit of Zulu and wider Nguni tradition in Southern Africa, said to be summoned by a malicious person specifically to torment someone else.",
    lore: "Tradition holds the tokoloshe is called into being or bound by a person with ill intent toward a target, ranging from a simple scare to lasting harm or death. One documented historical thread behind the belief: people traditionally slept low to the ground around an indoor fire during freezing highveld winters, and carbon monoxide — heavier than air and invisible — could kill sleepers with no apparent cause, a mystery the tokoloshe explained long before the gas itself was understood.",
    appearance: "It is generally described as small, hairy, and dwarf-like, sometimes able to turn invisible by drinking water or swallowing a stone, and grotesque enough in some tellings to resemble a shrivelled corpse.",
    behavior: "A tokoloshe's mischief ranges from petty to lethal — it is widely said to bite the toes of sleeping victims, and at its worst is blamed for serious illness or death, particularly among those it has been specifically directed at.",
    protection: "The most widely cited household defense is remarkably simple and specific: raising a bed on bricks, high enough that a tokoloshe cannot reach a sleeper. Traditional healers (sangoma) or, in Christian communities, pastors with a recognised calling, are sought out to banish one already set loose.",
    encounters: "Belief in the tokoloshe remains widespread enough in parts of South Africa today that raised beds are still a common precaution, and the figure is frequently invoked — including satirically — in contemporary South African media and conversation.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Tokoloshe" }
    ]
  },

  {
    id: "popobawa", name: "Popobawa", volume: 5,
    culture: "African Traditions", category: "Shapeshifter Lore", type: "Shapeshifting Spirit",
    sigil: "bat-wings",
    image: "Popobawa.jpeg",
    record: "Popobawa — “bat-wing” in Swahili — is a shapeshifting nocturnal spirit of Zanzibar and Pemba first recorded in the 1960s, and the subject of one of East Africa's best-documented cases of genuine collective panic.",
    lore: "Popobawa is classed as a shetani, an evil spirit, in the folklore of the Zanzibar Archipelago, drawing on Swahili, Arab, and Islamic spiritual traditions together. Some local accounts trace its origin to a sheikh who summoned a jinn to punish his enemies and then lost control of it. Recurring waves of mass panic have been documented by anthropologists since the 1960s, the largest in 1995, when fear spread from Pemba across to Unguja and the mainland city of Dar es Salaam — a rare instance of a folklore panic serious enough to be formally studied as a social phenomenon in its own right.",
    appearance: "Descriptions vary deliberately from telling to telling, but the recorded folk image gives Popobawa a squat, leathery build about a metre across, ribbed bat-like wings, a single central eye, and a sharp sulfurous smell announcing its arrival.",
    behavior: "It is said to visit sleepers at night, and traditionally to compel each victim to publicly tell others of the encounter on threat of a worse visit if they stay silent — a detail folklorists note likely helped the panic itself spread from house to house.",
    protection: "During the worst outbreaks, entire communities responded together rather than individually: villagers abandoned their beds to sleep outdoors around communal fires, with lights kept burning through the night as a shared precaution.",
    encounters: "The 1995 Popobawa panic is documented in academic and journalistic sources as a genuine, large-scale event — including, tragically, mob violence against people suspected of being the spirit in human form — making it one of the more seriously studied folklore panics in modern African history.",
    sources: [
      { label: "Folklore documentation — Gods & Monsters", url: "https://godsandmonsters.info/popobawa/" },
      { label: "Folklore documentation — Mythology.net", url: "https://mythology.net/mythical-creatures/popobawa/" }
    ]
  },

  {
    id: "adze", name: "Adze", volume: 5,
    culture: "African Traditions", category: "Vampiric Lore", type: "Shapeshifting Vampiric Spirit",
    sigil: "insect",
    image: "Adze.jpeg",
    record: "The adze is a vampiric being of Ewe folklore, from Togo and Ghana, that takes the form of a firefly in the wild and a human being once captured — one of the more unusual disguises in vampire folklore worldwide.",
    lore: "In its insect form the adze can slip through the smallest gap — a keyhole, a crack under a door — to reach a sleeping target undetected. A person possessed by an adze, whether willingly or not, is regarded in Ewe tradition as a witch (abasom), and suspicion has historically fallen disproportionately on specific social positions: women with brothers whose children fared better than their own, the elderly when the young began dying first, or the poor around the visibly wealthy.",
    appearance: "As a firefly or other small insect, an adze looks entirely ordinary; only on capture does it reveal a human shape, at which point it gains the power to possess people.",
    behavior: "It is said to hunt children above all, particularly infants, feeding on blood, though it can subsist for a time on palm oil or coconut water when raiding a village's stores instead.",
    protection: "Folklore is notably blunt on this point: several traditional sources describe the adze as having no reliable ward — neither amulet, spell, nor rite — leaving capture, rather than repulsion, as the only remedy once one is loose in a home.",
    encounters: "Some folklorists have suggested the adze legend may have arisen partly to explain malaria's real, otherwise mysterious transmission by night-biting insects in the same region — a pattern worth noting without overriding the tradition's own explanation.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Adze_(folklore)" }
    ]
  },

  {
    id: "impundulu", name: "Impundulu", volume: 5,
    culture: "African Traditions", category: "Familiar Spirit Lore", type: "Lightning Bird",
    sigil: "owl",
    image: "Impundulu.jpeg",
    record: "The Impundulu, the “lightning bird” of Zulu, Xhosa, and Pondo tradition, is said to summon thunder and lightning with a beat of its wings — and to serve, most often, as a witch's familiar with an appetite for blood.",
    lore: "Nguni-speaking peoples of Southern Africa describe the Impundulu as capable of passing down through a family line, inherited from one witch or healer to the next along with the responsibilities and dangers that come with it. It is closely associated in some traditions with the hamerkop, a real bird whose shaggy crest and curved bill have led certain communities to treat sightings of the bird itself as a sign of the spirit's presence.",
    appearance: "It is generally described as roughly human-sized, black and white or, in some Xhosa tellings, white with red wings, legs, and tail — visible in its true form, tradition holds, only to women.",
    behavior: "Under a witch's direction, the Impundulu is said to strike enemies with illness, sudden death, or destructive storms, and to demand blood tribute from its owner's own family to stay loyal — turning violently on its keeper if that tribute or basic care is ever withheld.",
    protection: "Traditional healers describe specific countermeasures, including a preparation from the bird's own fat used defensively, and umgcabo, a protective substance applied against the illnesses — headaches, nosebleeds — the Impundulu is blamed for causing.",
    encounters: "Xhosa tradition includes accounts of “heaven-herds” (inyanga yezulu), specialists whose role is specifically to confront a lightning bird responsible for a prolonged drought or storm-related disaster.",
    sources: [
      { label: "Folklore documentation — Wikipedia (Lightning bird)", url: "https://en.wikipedia.org/wiki/Lightning_bird" }
    ]
  },

  /* ======================= VOLUME VI — THE AMERICAS ======================= */

  {
    id: "la-llorona", name: "La Llorona", volume: 6,
    culture: "The Americas", category: "Vengeful Spirit Lore", type: "Weeping Ghost",
    sigil: "veiled",
    image: "LaL.jpeg",
    record: "La Llorona, “the Weeping Woman,” is one of the most widely told ghost stories in Latin America — a mother's spirit searching forever for the children she drowned, and a cautionary tale told to generations of children near water.",
    lore: "The most common version names her Maria, a beautiful woman who drowned her own children in a river after her husband abandoned her for another woman, then took her own life in grief. Arriving at the gates of the afterlife, she is turned away and told to first find her children — a search tradition holds she has never finished. Folklorists trace threads of the story back through pre-Columbian Mesoamerican myths of weeping female spirits, later merging with Spanish colonial-era storytelling into the figure told today from Mexico through Central America and the southwestern United States.",
    appearance: "She is described as a woman in white, or sometimes with long black hair and a pale, gaunt face, most often seen or heard near a river, lake, or irrigation canal after dark.",
    behavior: "Her cry — “¡Ay, mis hijos!” (“Oh, my children!”) — is said to carry across water at night; tradition holds hearing it is a bad omen, and that children out alone near water after dark risk being mistaken for, or taken in place of, the ones she lost.",
    protection: "The folk rule handed down to children is direct and simple: do not go near rivers, canals, or lakes alone after dark, and do not answer or approach a woman crying near water at night, however she is dressed.",
    encounters: "La Llorona remains one of the most actively retold legends in Mexican and Mexican-American communities today, still used by parents specifically to keep children away from dangerous water at night.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/La_Llorona" }
    ]
  },

  {
    id: "skinwalker", name: "Skinwalker", volume: 6,
    culture: "The Americas", category: "Shapeshifter Lore", type: "Shapeshifting Witch",
    sigil: "wolf",
    image: "Skinwalker.jpg",
    image: "skinwalker.jpg",
    record: "A skinwalker — yee naaldlooshii, “by means of it, it goes on all fours” — is a figure from Navajo (Diné) belief describing a person who has turned to harmful witchcraft. Many Navajo consider this subject sacred and sensitive rather than casual campfire material, and this entry stays deliberately general out of that respect.",
    lore: "Within Diné tradition, a skinwalker is understood as a specific kind of witch — someone, sometimes a former medicine person, who has deliberately abandoned hózhó (balance and harmony) to pursue the “Witchery Way” and gain the power to take an animal's form, speed, and strength. It stands in direct contrast to the healing role of a medicine person, representing what that role looks like turned to harm. Discussing the subject in detail, especially with outsiders, is treated as taboo within many Navajo communities — a position folklorists and Navajo writers alike have asked popular media to respect, rather than mine for horror content divorced from its real context.",
    appearance: "Described as capable of taking the form of an animal — commonly a coyote, wolf, or owl — a skinwalker is said to sometimes retain an unnatural, not-quite-right gait or a human eye even in animal form, the detail that gives it away to a careful observer.",
    behavior: "Traditional accounts describe skinwalkers as dangerous specifically because they invert medicine-way knowledge for harm — causing illness, misfortune, or fear rather than healing it, and initiating themselves, in the darkest versions of the story, through a taboo act against their own family.",
    protection: "Given the sensitivity of the subject within the culture it belongs to, this entry does not detail specific protective or ritual knowledge, which is understood in Diné tradition to belong to Navajo teaching and ceremony rather than to outside retelling.",
    encounters: "Popular film, television, and “reality” media have repeatedly sensationalised skinwalkers in ways many Navajo commentators and scholars have publicly and specifically objected to — a reminder that this entry, more than most in the archive, describes a living, actively-held belief rather than only an old story.",
    sources: [
      { label: "Folklore documentation — Wikipedia (Skin-walker)", url: "https://en.wikipedia.org/wiki/Skin-walker" }
    ]
  },

  {
    id: "mothman", name: "Mothman", volume: 6,
    culture: "The Americas", category: "Cryptid Lore", type: "Cryptid / Omen",
    sigil: "eyes",
    image: "Mothman.jpeg",
    record: "Mothman is a winged, red-eyed figure reportedly seen around Point Pleasant, West Virginia, in 1966 and 1967 — one of modern America's best-known cryptids, and unusual in the archive for being a 20th-century sighting phenomenon rather than an old tradition.",
    lore: "Reported sightings began in November 1966 and continued through the following year, drawing national attention and, eventually, journalist John Keel's 1975 book The Mothman Prophecies, which linked the sightings to a wave of other strange local occurrences and, more controversially, to the tragic collapse of the Silver Bridge in December 1967. This connection — a supposed omen preceding disaster — is largely what elevated Mothman from a local sighting story to an enduring piece of American folklore.",
    appearance: "Witnesses described a tall, grey, man-shaped figure with large wings and glowing red eyes, generally reported at night near the abandoned munitions site outside Point Pleasant known locally as the “TNT area.”",
    behavior: "Reports generally describe Mothman as startling rather than aggressive — following cars at high speed or appearing suddenly at close range — with no account describing direct physical harm to a witness.",
    protection: "There is no traditional protective ritual associated with Mothman, consistent with its identity as a modern sighting phenomenon rather than an inherited folk belief; the community response was investigation and media coverage rather than ritual practice.",
    encounters: "Point Pleasant now embraces the legend directly, with an annual Mothman Festival and a dedicated museum — an unusually open, celebratory civic relationship to a folkloric figure that started as genuine local fear.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Mothman" }
    ]
  },

  {
    id: "wendigo", name: "Wendigo", volume: 6,
    culture: "The Americas", category: "Spirit Lore", type: "Spirit of Famine",
    sigil: "antlers",
    image: "Wendigo.jpeg",
    record: "The wendigo is a spirit of Algonquian-speaking peoples of the Great Lakes region and Canada, tied to winter, starvation, and the specific horror of cannibalism — a figure with real spiritual and moral weight in the cultures it comes from, not simply a monster imported into horror fiction.",
    lore: "Traditionally, a person could become a wendigo through an act of cannibalism, often committed out of extreme hunger during a harsh winter, or through possession by the spirit itself — the transformation working as both supernatural event and moral lesson about greed, isolation, and the failure to share resources within a community. First recorded in writing by a French Jesuit missionary in 1636, the belief functioned as a genuine cautionary and social framework, not only a scary story told to children, though it served that purpose too. Indigenous scholars and educators have specifically pushed back on popular culture's tendency to strip the wendigo of this context and reduce it to a generic horror monster.",
    appearance: "Descriptions vary by community and telling, but common elements include an emaciated, ash-grey or skeletal frame, a heart of ice, and a hunger that only grows the more it eats — some tellings describe it growing larger with every victim rather than ever being satisfied.",
    behavior: "It is described as relentlessly predatory, driven by an insatiable hunger that can never be filled, and capable of turning others into wendigo in turn, extending a kind of contagious, communal danger rather than remaining a lone threat.",
    protection: "Within Algonquian tradition, the core protection is social and preventative rather than ritual against an external threat: sharing food and resources, especially during famine, and resisting the isolation and desperation folklore holds can open a person to the transformation in the first place.",
    encounters: "A documented culture-specific psychological phenomenon, sometimes called wendigo psychosis, describes historical cases of individuals developing an overwhelming fear or delusion of turning into a wendigo — a genuinely studied intersection of belief, hardship, and mental health rather than a reported sighting of a creature.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Wendigo" },
      { label: "Folklore documentation — Britannica", url: "https://www.britannica.com/topic/wendigo" }
    ]
  },

  {
    id: "chupacabra", name: "Chupacabra", volume: 6,
    culture: "The Americas", category: "Cryptid Lore", type: "Cryptid",
    sigil: "claw",
    image: "Chupacabra.jpeg",
    record: "The chupacabra — “goat-sucker” — is a modern cryptid first reported in Puerto Rico in 1995, blamed for livestock deaths across the Americas and now one of the most recognisable folkloric figures of the late 20th century.",
    lore: "The panic began with a string of livestock deaths in Puerto Rico in 1995, the animals found drained of blood with small, precise puncture wounds and, in some reports, no other visible injury. The legend spread rapidly through Mexico, the wider Caribbean, and the southwestern United States, adapting as it travelled — a genuinely fast-moving, modern instance of folklore formation, closely tracked by journalists and folklorists almost from its start.",
    appearance: "Descriptions split into two fairly distinct types: an alien-like, hairless, kangaroo-postured creature with large red eyes in the original Puerto Rican reports, and a more dog- or coyote-like, hairless quadruped in many later North American sightings.",
    behavior: "It is uniformly described as a nocturnal predator of livestock, particularly goats, killing efficiently and specifically to drain blood rather than for ordinary predation.",
    protection: "As a modern cryptid rather than an old folk tradition, there is no inherited ritual protection; rural communities' actual response has generally been practical — securing livestock enclosures more carefully at night.",
    encounters: "A number of animal carcasses attributed to chupacabra attacks have later been examined and identified as coyotes or dogs with severe mange, a real skin condition that produces a hairless, gaunt appearance strikingly close to the North American description of the creature.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Chupacabra" }
    ]
  },

  /* ======================= VOLUME VII — SOUTHEAST ASIAN TRADITIONS ======================= */

  {
    id: "pontianak", name: "Pontianak", volume: 7,
    culture: "Southeast Asian Traditions", category: "Vengeful Spirit Lore", type: "Vengeful Female Spirit",
    sigil: "veiled",
    image: "Pontianak.jpeg",
    record: "The Pontianak is a vengeful female ghost of Malay and Indonesian folklore, said to be the spirit of a woman who died in childbirth or pregnancy — one of the most widely feared and widely told figures across the region.",
    lore: "Also known as kuntilanak in Indonesia, she is sometimes described as the stillborn child of the langsuir, another Southeast Asian vampiric ghost, linking the two figures in a shared family of female-death folklore. The city of Pontianak in West Kalimantan is itself named, according to local legend, for a founding sultan who had to drive off a plague of these spirits with cannon fire before he could build his settlement there.",
    appearance: "She is described as a beautiful, pale woman in white or green, with long black hair, who reveals fangs, claws, and sometimes a hole in the back of her neck when her true nature is uncovered.",
    behavior: "A Pontianak is said to announce her presence with the cry of a baby — soft when she is near, loud when far, inverted from what instinct would expect — and, in some tellings, by a sweet floral scent followed suddenly by decay. She hunts by scent, particularly clothing left to dry outdoors overnight, which is why some rural households still avoid it.",
    protection: "The specific, widely repeated folk remedy is startlingly precise: driving a nail into the hole at the back of a captured Pontianak's neck is said to render her calm and human — a good wife — for as long as the nail stays in place.",
    encounters: "Reported Pontianak sightings and hoax videos still circulate periodically in Malaysian and Indonesian media, including a widely shared 2010 video recorded by police in Pahang, Malaysia, treated by most observers as an unverified hoax rather than confirmed evidence.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Pontianak_(folklore)" }
    ]
  },

  {
    id: "krasue", name: "Krasue", volume: 7,
    culture: "Southeast Asian Traditions", category: "Spirit Lore", type: "Floating Head Spirit",
    sigil: "floating-head",
    image: "Krasue.jpg",
    record: "The Krasue is a Thai spirit that appears as a woman's head floating alone at night, her internal organs trailing beneath it and glowing faintly like a will-o'-the-wisp seen from a distance.",
    lore: "The Krasue belongs to a much wider Southeast Asian family of floating-head spirits sharing the same basic shape and behaviour under different regional names — the penanggalan in Malaysia, the ahp in Cambodia, the kasu in Laos, and the leyak in Bali — a striking case of one core legend told independently, with local variation, across an entire region.",
    appearance: "She appears as the disembodied head of a young, often beautiful woman, her lungs, stomach, and intestines still attached and hanging visibly below the neck, the whole apparition said to give off a faint glow.",
    behavior: "A Krasue is drawn to blood, raw meat, and the bodies of the newly dead or birthing mothers, and is blamed in rural tellings for spoiling crops or livestock and for a mouth left smeared with blood or filth on clothing left out overnight.",
    protection: "Villagers traditionally scatter thorny plant material, such as the leaves of the mengkuang plant, around windows and doors — particularly in a household with a new mother — specifically to snag the Krasue's trailing organs as she tries to enter.",
    encounters: "Unexplained floating lights over rice fields at night are still occasionally attributed to the Krasue in rural Thai communities, and the figure remains a staple of Thai horror cinema.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Krasue" }
    ]
  },

  {
    id: "penanggalan", name: "Penanggalan", volume: 7,
    culture: "Southeast Asian Traditions", category: "Vampiric Lore", type: "Floating Head Spirit",
    sigil: "floating-head",
    image: "Penanggalan.jpeg",
    record: "The Penanggalan is a Malay vampiric spirit closely related to Thailand's Krasue — a woman's head that detaches at night, trailing its own organs, to hunt while its body waits behind.",
    lore: "Tradition most often links the Penanggalan to childbirth and to women who practised black magic, sometimes describing it as a midwife whose pact for beauty or power came with a curse. On finishing its nightly hunt, a Penanggalan is said to return and soak its dangling organs in a jar of vinegar to shrink them enough to fit back inside its body before dawn.",
    appearance: "By day she can pass as an ordinary woman; by night, her head detaches entirely, lungs and intestines trailing beneath it, twinkling faintly like a flame when glimpsed from a distance.",
    behavior: "She is said to target pregnant women and newborns above all, using her trailing organs and a long, thin tongue to reach into a house through gaps too small for a whole body — thatched roofs and unscreened windows are named as particular points of entry.",
    protection: "The same thorny-plant defense described for the Krasue — mengkuang leaves or other thorns strung around windows and doors — is the standard Malay countermeasure, meant specifically to snag her entrails as she tries to slip inside. A second, more drastic folk remedy holds that filling the empty body cavity with broken glass while the head is away will kill her outright when she tries to return.",
    encounters: "A common variant tale involves discovering an unattended headless body at night and, out of caution or mischief, disturbing or hiding it, so that when the head returns it cannot rejoin properly — exposing the woman as a Penanggalan to the whole village by morning.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Penanggalan" }
    ]
  },

  {
    id: "toyol", name: "Toyol", volume: 7,
    culture: "Southeast Asian Traditions", category: "Familiar Spirit Lore", type: "Child Familiar Spirit",
    sigil: "figure",
    image: "Toyol.jpeg",
    record: "A toyol is a small, undead child-spirit of Malay folklore, raised by a bomoh (traditional healer or sorcerer) from a stillborn or dead infant and set to work stealing for whoever keeps it.",
    lore: "According to Malay tradition, a toyol can be summoned through ritual, purchased outright from a bomoh, or in some tellings even inherited — treated less as a monster to fear on sight than as an ethically fraught possession, since owning one is understood to require exploiting a child's spirit for personal gain. Some scholars have suggested the underlying tradition of keeping a bound spirit may trace back to pre-Islamic beliefs.",
    appearance: "It is described as small and child-sized with a disproportionately large head, small hands, a swollen belly, and jet-black, red, or clouded eyes, its skin greenish or grey, usually dressed in only a simple loincloth.",
    behavior: "A toyol is set to steal money or valuables for its owner, leaving small, child-like footprints and fingerprints as the only trace, and is described as mischievous and easily distracted rather than genuinely malicious in its own right.",
    protection: "Households traditionally scattered toys or marbles, on the belief that a toyol's childlike nature will distract it into playing rather than stealing; valuables were also kept near a mirror, since a toyol is said to be frightened by its own reflection.",
    encounters: "Owning a jar believed to house a toyol is still occasionally reported in Malaysian communities today, generally alongside unexplained thefts or a small, doll-like figure kept and fed by a household.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Toyol" }
    ]
  },

  {
    id: "manananggal", name: "Manananggal", volume: 7,
    culture: "Southeast Asian Traditions", category: "Vampiric Lore", type: "Self-Segmenting Spirit",
    sigil: "bat-wings",
    image: "Manananggal.jpeg",
    record: "The Manananggal is a Filipino vampiric creature that separates at the torso, its winged upper half flying off at night while the legs are left standing behind, waiting for its return before dawn.",
    lore: "The name comes from the Tagalog tanggal, “to remove” or “to separate” — literally, “one who separates itself.” It shares clear roots with the Penanggalan and Krasue of mainland Southeast Asia, though the Manananggal is distinguished specifically by detaching its entire upper torso rather than the head alone, and by growing bat-like wings to fly.",
    appearance: "By day she can appear as an ordinary, often strikingly beautiful woman; by night her upper body separates entirely, sprouting large bat-like wings, with a long, thin, proboscis-like tongue used to feed.",
    behavior: "A Manananggal is said to hover on rooftops and use her extended tongue to reach through the thatch, targeting sleeping pregnant women and drawing out the fetus, or otherwise draining blood from sleeping victims below.",
    protection: "Tradition holds that finding and destroying, salting, or sprinkling ash or crushed garlic on the abandoned lower half of her body before she returns will prevent the two halves from rejoining, killing her at sunrise.",
    encounters: "Manananggal legends remain especially strong in the Visayas region of the Philippines, and the figure is a recurring subject of Filipino horror cinema and television to this day.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Manananggal" }
    ]
  },

  {
    id: "aswang", name: "Aswang", volume: 7,
    culture: "Southeast Asian Traditions", category: "Shapeshifter Lore", type: "Shapeshifting Vampiric Spirit",
    sigil: "bat-wings",
    image: "Aswang.jpeg",
    record: "Aswang is an umbrella term in Filipino folklore for a group of shapeshifting, vampiric, or ghoulish beings — widely considered the single most feared figure in the Philippines, and by some counts the most elaborately documented in Southeast Asia.",
    lore: "Early Spanish colonial-era dictionaries and missionary accounts already recorded aswang beliefs, and the term today can cover several related figures — the Manananggal and Penanggalan are sometimes classed as specific types of aswang, alongside a general ordinary-seeming shapeshifter that hunts by night and returns to human form and daily life by day. A famous 1957 mass panic in Negros Occidental, sometimes called the “Aswang panic,” saw entire communities react to rumours with genuine, widely reported fear.",
    appearance: "By day an aswang is said to look entirely ordinary — even a friendly neighbour — with only subtle tells such as bloodshot eyes or an aversion to certain foods; by night it may take a monstrous or animal form, including a large black dog, boar, or bird.",
    behavior: "It is said to hunt at night, favouring the sick, the pregnant, and small children, and to sometimes replace a stolen corpse with a fashioned likeness made of banana trunk so the theft goes unnoticed until burial.",
    protection: "Folk remedies include garlic, salt, and stingray tails or whips hung at doorways, along with the crowing of a rooster or the approach of dawn, both said to weaken or drive off an aswang. Certain plants and specific holy objects are also cited depending on the region.",
    encounters: "The aswang remains one of the most actively told and regionally varied legends in the Philippines, with specific towns and provinces maintaining their own distinct local aswang traditions and warning stories to this day.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Aswang" }
    ]
  },

  /* ======================= VOLUME VIII — OTHER & MISCELLANEOUS TRADITIONS ======================= */

  {
    id: "baba-yaga", name: "Baba Yaga", volume: 8,
    culture: "Slavic Traditions", category: "Witch Lore", type: "Witch Spirit",
    sigil: "claw",
    image: "Baba.jpg",
    record: "Baba Yaga is one of the most distinctive figures in all Slavic folklore — a witch who lives deep in the forest in a hut that stands and turns on chicken legs, and who is, depending entirely on which story is being told, either a child-eating monster or an unexpectedly generous guide.",
    lore: "Scholar Andreas Johns has described her as one of the most memorable and enigmatic figures in Eastern European folklore precisely because of this contradiction — the same character who fries and eats children in one tale helps the hero complete an impossible task in the next. She appears throughout the great 19th-century Afanasyev collection of Russian fairy tales, including “Vasilisa the Beautiful” and “Marya Morevna,” and some traditions describe her as one of three sisters who all share the name.",
    appearance: "She is generally described as an old, often repulsively ugly woman, sometimes with iron teeth or a bony leg, who flies through the air in a mortar, rowing herself along with a pestle and sweeping away her tracks with a broom.",
    behavior: "Her role shifts by story: she may test, trick, or threaten to eat a visitor to her hut, but a hero who answers her correctly, performs a set task, or simply shows her courtesy is just as often rewarded with vital help or a magical gift.",
    protection: "Folktale logic, more than ritual, is the real protection here: politeness, honesty, and correctly performing whatever task Baba Yaga sets are what fairy tales consistently describe as the way to survive an encounter with her, rather than any object or charm.",
    encounters: "Baba Yaga remains one of the most continuously retold figures in Russian and wider Slavic storytelling, appearing in new adaptations, films, and games essentially every year without her folklore roots ever fading from view.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Baba_Yaga" }
    ]
  },

  {
    id: "draugr", name: "Draugr", volume: 8,
    culture: "Norse Traditions", category: "Undead Lore", type: "Undead Guardian",
    sigil: "skull",
    image: "Draugr.jpg",
    record: "The draugr is an animated corpse of Norse tradition, dwelling in its own burial mound with full awareness, physical strength, and — often — a fierce determination to guard its grave-goods from the living.",
    lore: "Icelandic sagas describe draugr with remarkably consistent, specific traits: they retain the personality and grudges they held in life, possess superhuman strength that increases the longer they remain undead, and can grow to an unnatural size within their mound. Unlike more common Western zombie tropes, a draugr is depicted as fully intelligent and often eloquent, capable of returning specifically to torment those who wronged it or trespassed on grave-goods it still considers its own.",
    appearance: "Sagas describe a draugr's body as bloated, dark blue-black, or corpse-pale, occasionally noted for the reek of decay, yet strong enough to wrestle a living man and win.",
    behavior: "It is said to guard its burial mound and possessions jealously, to trample roofs and cause livestock to sicken or go mad, and in the most feared accounts, to walk out of its mound entirely to attack nearby farms.",
    protection: "Saga tradition describes the only certain remedy as decisive and physical: decapitating the corpse, placing the head at its buttocks, burning the body completely, and scattering the ashes — often at sea — to prevent any return.",
    encounters: "The Icelandic Grettis saga contains one of the most detailed draugr accounts in the literature: the hero Grettir wrestles and ultimately defeats the draugr Glámr, who curses him with misfortune even in defeat.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Draugr" }
    ]
  },

  {
    id: "huldra", name: "Huldra", volume: 8,
    culture: "Scandinavian Traditions", category: "Nature Spirit Lore", type: "Forest Spirit",
    sigil: "tree",
    image: "Huldra.jpg",
    record: "The huldra, also called the hulder, is a strikingly beautiful forest spirit of Norwegian and Swedish folklore — seductive and dangerous from the front, and marked by a strange, hollow secret from behind.",
    lore: "Her name comes from a root meaning “hidden” or “covered,” and she belongs to the wider huldrefolk, a whole category of hidden supernatural beings said to share the landscape unseen alongside humans. Regional names include skogsrå and tallemaja (“pine-tree Mary”) in Sweden, and ulda in Sámi tradition. Later Christian-era retellings recast her, like much older pagan folklore, as a kind of fallen or unbaptised being in need of salvation rather than a being from an older, pre-Christian nature religion in her own right.",
    appearance: "She appears as an exceptionally beautiful young woman, often blonde, but with a telltale flaw visible from behind: a hollow back resembling rotted bark, or a cow's tail she works hard to keep hidden.",
    behavior: "A huldra is said to lure men deep into the forest with her beauty, sometimes to marry them — tradition holds that marrying a human man in a church can cause her to lose her tail and hollow back and become fully human, a rare genuinely happy outcome in her folklore.",
    protection: "Because her danger lies specifically in seduction, the folk warning is behavioural: men working or travelling alone in the deep forest are cautioned to be wary of unusually beautiful strangers encountered far from any village, and to check for a tail or hollow back if given the chance.",
    encounters: "Huldra tales remain closely tied to specific stretches of Norwegian and Swedish forest, often told as an explanation for a man who went into the woods and returned changed, or did not return at all.",
    sources: [
      { label: "Folklore documentation — Wikipedia (Hulder)", url: "https://en.wikipedia.org/wiki/Hulder" }
    ]
  },

  {
    id: "bunyip", name: "Bunyip", volume: 8,
    culture: "Aboriginal Australian Traditions", category: "Water Spirit Lore", type: "Waterhole Guardian",
    sigil: "water",
    image: "Bunyip.jpeg",
    record: "The Bunyip is a water-dwelling being of Aboriginal Australian tradition, said to inhabit the billabongs, swamps, and waterholes of southeastern Australia — described across many distinct Aboriginal nations not simply as a monster, but as a guardian of sacred water and an enforcer of law.",
    lore: "The word is traced to the Wemba-Wemba or Wergaia language of Victoria, and is often translated today as “devil” or “evil spirit,” though its role in Aboriginal cosmology is considerably more layered than that translation suggests — billabongs and waterholes are frequently understood as thresholds to the spiritual world, connected in some traditions to the Rainbow Serpent, and the Bunyip's role is bound up with protecting those sites from disrespect or trespass. Because Australia is home to hundreds of distinct Aboriginal language groups, no single “canonical” Bunyip description exists; it is better understood as a category of related beings than one fixed figure, and this entry describes the most widely shared, publicly told elements rather than any single community's specific account.",
    appearance: "Reports vary enormously and deliberately — a swan-like neck, a dog-like head, tusks, flippers, feathers, fur — a lack of consistency several sources treat as central to the Bunyip's mystique rather than a flaw in the tradition.",
    behavior: "The Bunyip is generally described emerging at night with a booming cry audible across still water, and is said to seize those, often specifically children, who wander too close to a dangerous waterhole alone.",
    protection: "The clearest and most consistently reported protection is simply behavioural: children are taught from an early age not to go near deep water alone, particularly at dusk, both as genuine safety guidance and as a mark of respect for sites considered spiritually significant.",
    encounters: "19th-century European settlers recorded numerous alleged Bunyip sightings and even a purported skull, later lost, exhibited at the Australian Museum — records that mixed real Aboriginal tradition with colonial sensationalism, and are best read as evidence of the legend's impact on settlers rather than a description of Aboriginal belief itself.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Bunyip" }
    ]
  },

  {
    id: "krampus", name: "Krampus", volume: 8,
    culture: "Alpine Traditions", category: "Folk Devil Lore", type: "Companion of St. Nicholas",
    sigil: "horns",
    image: "Krampus.jpg",
    record: "Krampus is a horned, goat-legged folk devil of Alpine winter tradition, who accompanies Saint Nicholas each December not to reward good children, but to frighten and punish the bad ones.",
    lore: "The pairing is old enough that the Catholic Church periodically tried to suppress Krampus celebrations, most notably during Austria's Fascist era in the 1930s, when the tradition was banned outright as pagan and un-Christian. It survived regardless and has surged in popularity in recent decades, with Krampusnacht (the night of December 5th) now marked by large public Krampuslauf parades of costumed performers across Austria, Bavaria, and neighbouring Alpine regions.",
    appearance: "He is depicted with the horns, fur, and cloven hooves of a goat, a long lolling tongue, and a bundle of birch branches (ruten) or chains, often carrying a washtub or basket on his back for hauling away the worst-behaved children.",
    behavior: "Tradition holds Krampus swats badly behaved children with birch branches and, in the more severe telling, stuffs them in his basket to carry off entirely — a folk-disciplinary counterweight to Saint Nicholas's gifts for the well-behaved.",
    protection: "Because Krampus is understood as a corrective rather than a random threat, the traditional “protection” is behavioural: being good in the first place. Leaving offerings alongside St. Nicholas's gifts, and children reciting prayers or poems well, are cited in some regional customs as ways to stay in Krampus's good graces.",
    encounters: "Krampuslauf events — processions of elaborately costumed Krampus performers parading through town streets, often with fire and noise — are a genuine, large, and growing annual public tradition across the Alps today, rather than a private or hidden belief.",
    sources: [
      { label: "Folklore documentation — Wikipedia", url: "https://en.wikipedia.org/wiki/Krampus" }
    ]
  }

];
