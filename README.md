# RS I Anatomy, Histology & Physiology · Peer support 82 deck

Question-first peer-tutoring material for the 13 non-radiology **Respiratory System I (RS I)** lectures (gross anatomy, histology, and respiratory physiology, MDCU).

> **Companion Radiologic Anatomy deck:** The two RS I radiology handouts (*Radiologic Anatomy of Head and Neck* and *Radiologic Anatomy of Respiratory System*) are in the companion deck at **[punnawit9285.github.io/rs-radiology-peer-tutoring](https://punnawit9285.github.io/rs-radiology-peer-tutoring/)**.

## Open it

| | Link |
|---|---|
| **Student deck** (shown in the video) | https://punnawit9285.github.io/rs-peer-tutoring/student.html |
| **Tutor deck** (second screen: answers, Thai notes, script) | https://punnawit9285.github.io/rs-peer-tutoring/tutor.html |
| **Student handout PDF** | https://punnawit9285.github.io/rs-peer-tutoring/student.pdf?v=3d80dc24 |
| **Radiologic Anatomy companion deck** | https://punnawit9285.github.io/rs-radiology-peer-tutoring/ |

Open the student and tutor decks in the same browser and tick *Follow student* in the tutor deck: it jumps to whatever card the student deck shows.

## Sections (63 concepts · 172 questions · 685 cloze blanks · 83 figures)

| ID | Section | Source handout |
|---|---|---|
| U | Upper Respiratory Tract: Nose, Nasal Cavity, Sinuses, Pharynx & Larynx | Upper respiratory tract (44 slides) |
| W | Thoracic Wall, Intercostal Spaces, Pleural Procedures & Diaphragm | Thoracic wall & diaphragm (32 slides) |
| B | Gross Anatomy of the Lungs, Pleurae & Bronchial Tree | Lung & bronchial tree (36 slides) |
| H | Histology of the Respiratory System | Histology of respiratory system (46 slides) |
| G | Gas Phase, Partial Pressures & Gas-Liquid Equilibrium | Gas phase (30 slides) |
| M | Mechanics of Breathing: Pressures, Compliance, Resistance & Work | Mechanics of breathing (44 slides) |
| E | Alveolar Ventilation, Diffusion, Perfusion Limitation & V/Q Matching | Gas exchange (72 slides) |
| T | Hemoglobin O₂ Binding, O₂ Dissociation Curve, CO₂ Transport & Bohr/Haldane Effects | Gas transport (40 slides) |
| C | Pulmonary & Bronchial Circulation, PVR, Hypoxic Vasoconstriction & Pulmonary Edema | Pulmonary circulation (25 slides) |
| P | Pulmonary Function Tests & Spirometry Interpretation | PFTs I & II (35 + 22 slides) |
| R | Neural & Chemical Control of Respiration | Control of respiration (49 slides) |
| A | Acid-Base Regulation | Acid-base regulation (88 slides) |
| S | Respiratory System Under Stress | RS under stress (16 slides) |

Every question is written from the lecture handouts and tagged with its slide page (e.g. `URT p.18`, `Mechanics p.24`, `Gas exchange p.41`, `Acid-base p.61`).

## Pages

- **`student.html`** (also `index.html`, `dist/deck.html`): Present and Browse modes, *Core only* filter, cloze blanks on every concept card (Space = next blank, Enter = all, R = hide, click a blank to flip it), click an option to see the answer, click a figure to zoom, L opens the Thai explanation, B toggles Browse. Swipe on phones.
- **`tutor.html`** (also `dist/notes.html`): the same cards with every answer and blank revealed, Thai bullets, a SAY line on each concept card and core question, the 5-video plan on the start card, an "Understand it: the 80%" summary on each section card, and Thai tutor notes beyond the slides.
- **`student.pdf`**: A4 handout. Each concept on one page with its blanks empty and numbered, then the quiz on that concept (no answers). At the back: the answer key with Thai explanations, the answers to every numbered blank, and each concept's Thai key points and explanation.

## Building

```bash
tools/crops.sh     # crop figures from src-pdf/*.pdf (the handouts; not published) into img/
node check.js      # IDs, answer keys, every Thai / tutor layer keyed to a real card, blanks, images
node build.js all  # student.html, index.html, tutor.html, dist/deck.html, dist/notes.html, dist/img/
tools/pdf.sh       # student.pdf: two headless-Chrome passes for real page numbers (CHROME=... to override)
```

Content lives in `data/<section>.js` (cards and questions), `src/thai-data.js` (Thai bullets, key points, section intros; shared by both decks and the PDF), `src/thai-explain.js`, `src/tutor-notes.js` and `src/tutor-script.js`. The engine is adapted from [cvs-peer-tutoring](https://github.com/Punnawit9285/cvs-peer-tutoring) and [rs-radiology-peer-tutoring](https://github.com/Punnawit9285/rs-radiology-peer-tutoring).
