/* Interactive anatomy maps for the concept cards where a cadaver photo alone is hard to read.
   Same engine as the PFT and acid-base flowcharts (src/flows.js): click a box to read what it is,
   or pick a route and press Next step to trace it box by box. Facts come from the card and its questions. */
(function () {
  var F = window.FLOWS;
  if (!F || !F.add) return;
  /* a route = list of [node, next node or '', why, extra lit edges] → steps for the engine */
  function routes(R) {
    return function (v) {
      var r = R[v.r];
      if (!r) return { steps: [], err: 'Pick a route.' };
      return { steps: r.s.map(function (x) { return { n: x[0], e: x[1] || undefined, why: x[2], e2: x[3] }; }), dx: r.dx };
    };
  }
  function cases(R, src) { return Object.keys(R).map(function (k) { return { k: k, b: R[k].b, src: src, v: { r: k } }; }); }
  var ROUTES = {};
  function add(name, o) {
    ROUTES[name] = o.R;
    F.add(name, { def: o.def, cases: cases(o.R, o.src), fields: [], path: routes(o.R), txt: o.txt, title: o.title, hint: o.hint, idle: o.idle, dxLabel: 'Route' });
  }
  F.anatomy = ROUTES;  /* used by tools/flowtest.js */

  /* ---------- U-C2 · Paranasal sinus drainage ---------- */
  add('sinus', {
    title: 'Where each sinus drains', src: 'URT p.11–17 · U5–U9',
    hint: 'Click a box, or pick a sinus and press Next step.',
    idle: 'Left: what drains. Middle: the opening it uses. Right: the part of the nose it reaches. Each meatus lies under the concha of the same name.',
    def: { name: 'sinus', W: 960, H: 492, label: 'Paranasal sinus drainage map',
      N: [
        { id: 'fr', k: 'st', x: 10, y: 10, w: 230, h: 52, t: ['Frontal sinus'] },
        { id: 'ae', k: 'st', x: 10, y: 80, w: 230, h: 52, t: ['Anterior ethmoidal cells'] },
        { id: 'mx', k: 'st', x: 10, y: 150, w: 230, h: 52, t: ['Maxillary sinus'] },
        { id: 'me', k: 'st', x: 10, y: 220, w: 230, h: 52, t: ['Middle ethmoidal cells'] },
        { id: 'pe', k: 'st', x: 10, y: 290, w: 230, h: 52, t: ['Posterior ethmoidal cells'] },
        { id: 'sp', k: 'st', x: 10, y: 360, w: 230, h: 52, t: ['Sphenoid sinus'] },
        { id: 'nl', k: 'st', x: 10, y: 430, w: 230, h: 52, t: ['Nasolacrimal duct'], s: ['tears, not a sinus'] },
        { id: 'hs', k: 'q', x: 330, y: 80, w: 260, h: 52, t: ['Hiatus semilunaris'] },
        { id: 'eb', k: 'q', x: 330, y: 220, w: 260, h: 52, t: ['Ethmoidal bulla'] },
        { id: 'mm', k: 'leaf', x: 680, y: 150, w: 270, h: 52, t: ['Middle meatus'], s: ['under the middle concha'] },
        { id: 'sm', k: 'leaf', x: 680, y: 290, w: 270, h: 52, t: ['Superior meatus'] },
        { id: 'ser', k: 'leaf', x: 680, y: 360, w: 270, h: 52, t: ['Sphenoethmoidal recess'], s: ['above the superior concha'] },
        { id: 'im', k: 'leaf', x: 680, y: 430, w: 270, h: 52, t: ['Inferior meatus'] }
      ],
      E: [
        { f: 'fr', to: 'hs', p: [[240, 36], [290, 36], [290, 98], [330, 98]] },
        { f: 'ae', to: 'hs', p: [[240, 106], [330, 106]] },
        { f: 'mx', to: 'hs', p: [[240, 176], [300, 176], [300, 114], [330, 114]] },
        { f: 'me', to: 'eb', p: [[240, 246], [330, 246]] },
        { f: 'hs', to: 'mm', p: [[590, 106], [635, 106], [635, 168], [680, 168]] },
        { f: 'eb', to: 'mm', p: [[590, 246], [635, 246], [635, 184], [680, 184]] },
        { f: 'pe', to: 'sm', p: [[240, 316], [680, 316]] },
        { f: 'sp', to: 'ser', p: [[240, 386], [680, 386]] },
        { f: 'nl', to: 'im', p: [[240, 456], [680, 456]] }
      ] },
    txt: {
      fr: { h: 'Frontal sinus', b: ['Drains down into the <b>hiatus semilunaris</b> → middle meatus.'] },
      ae: { h: 'Anterior ethmoidal cells', b: ['Open into the <b>hiatus semilunaris</b> → middle meatus.'] },
      mx: { h: 'Maxillary sinus', b: ['Opens into the <b>hiatus semilunaris</b> → middle meatus.'] },
      me: { h: 'Middle ethmoidal cells', b: ['Bulge into the nose as the <b>ethmoidal bulla</b> and open on it → middle meatus.'] },
      pe: { h: 'Posterior ethmoidal cells', b: ['Open into the <b>superior meatus</b>.'] },
      sp: { h: 'Sphenoid sinus', b: ['Opens into the <b>sphenoethmoidal recess</b>, above the superior concha.', 'Pus in that recess → the sphenoid is infected.'] },
      nl: { h: 'Nasolacrimal duct', b: ['Carries tears into the <b>inferior meatus</b>, the only thing that opens there.', 'Pus in the inferior meatus → tear duct, not a sinus.'] },
      hs: { h: 'Hiatus semilunaris', b: ['Curved slit in the middle meatus, below the bulla.', 'Shared outlet of three: <b>frontal</b>, <b>anterior ethmoidal</b>, <b>maxillary</b>.'] },
      eb: { h: 'Ethmoidal bulla', b: ['The bulge made by the middle ethmoidal cells, which open on it.'] },
      mm: { h: 'Middle meatus', b: ['Under the middle concha. Receives the hiatus semilunaris and the bulla.'] },
      sm: { h: 'Superior meatus', b: ['Under the superior concha. Receives the posterior ethmoidal cells.'] },
      ser: { h: 'Sphenoethmoidal recess', b: ['Above the superior concha, at the back of the roof. Receives the sphenoid sinus.'] },
      im: { h: 'Inferior meatus', b: ['Under the inferior concha. Only the nasolacrimal duct opens here.'] }
    },
    R: {
      fr: { b: 'Frontal', dx: ['Frontal sinus', 'hiatus semilunaris', 'middle meatus'], s: [['fr', 'hs', 'Frontal sinus drains downward.'], ['hs', 'mm', 'Into the <b>hiatus semilunaris</b>, the slit it shares with the anterior ethmoidal cells and the maxillary sinus.'], ['mm', '', 'Reaches the <b>middle meatus</b>.']] },
      mx: { b: 'Maxillary', dx: ['Maxillary sinus', 'hiatus semilunaris', 'middle meatus'], s: [['mx', 'hs', 'Maxillary sinus.'], ['hs', 'mm', 'Into the <b>hiatus semilunaris</b>.'], ['mm', '', 'Reaches the <b>middle meatus</b>.']] },
      ae: { b: 'Anterior ethmoidal', dx: ['Anterior ethmoidal cells', 'hiatus semilunaris', 'middle meatus'], s: [['ae', 'hs', 'Anterior ethmoidal cells.'], ['hs', 'mm', 'Into the <b>hiatus semilunaris</b>.'], ['mm', '', 'Reaches the <b>middle meatus</b>.']] },
      me: { b: 'Middle ethmoidal', dx: ['Middle ethmoidal cells', 'ethmoidal bulla', 'middle meatus'], s: [['me', 'eb', 'Middle ethmoidal cells.'], ['eb', 'mm', 'Open on the <b>ethmoidal bulla</b>.'], ['mm', '', 'Reaches the <b>middle meatus</b>.']] },
      pe: { b: 'Posterior ethmoidal', dx: ['Posterior ethmoidal cells', 'superior meatus'], s: [['pe', 'sm', 'Posterior ethmoidal cells.'], ['sm', '', 'Open into the <b>superior meatus</b>.']] },
      sp: { b: 'Sphenoid', dx: ['Sphenoid sinus', 'sphenoethmoidal recess'], s: [['sp', 'ser', 'Sphenoid sinus, at the back.'], ['ser', '', 'Opens into the <b>sphenoethmoidal recess</b> → pus there = sphenoid sinusitis.']] },
      nl: { b: 'Tear duct', dx: ['Nasolacrimal duct', 'inferior meatus'], s: [['nl', 'im', 'Tears drain down the nasolacrimal duct.'], ['im', '', 'Into the <b>inferior meatus</b>, the only opening there → pus here is from the tear duct.']] }
    }
  });

  /* ---------- U-C5 · Laryngeal nerves, muscles, injuries ---------- */
  add('larynx', {
    title: 'Laryngeal nerves → muscles → what goes wrong', src: 'URT p.36–44 · U24–U30',
    hint: 'Click a box, or pick an injury and press Next step.',
    idle: 'Two branches of the vagus. The recurrent nerve runs every intrinsic muscle but one; the external branch runs the tensor. Pick an injury to see what is lost.',
    def: { name: 'larynx', W: 960, H: 512, label: 'Laryngeal nerve and muscle map',
      N: [
        { id: 'vag', k: 'q', x: 380, y: 8, w: 200, h: 62, t: ['Vagus (CN X)'] },
        { id: 'sln', k: 'q', x: 110, y: 110, w: 240, h: 62, t: ['Superior laryngeal n.'] },
        { id: 'rln', k: 'q', x: 440, y: 110, w: 250, h: 62, t: ['Recurrent laryngeal n.'], s: ['all intrinsic muscles but one'] },
        { id: 'sens2', k: 'leaf', x: 730, y: 110, w: 220, h: 62, t: ['Sensation'], s: ['below the cords'] },
        { id: 'int', k: 'q', x: 10, y: 220, w: 190, h: 62, t: ['Internal branch'] },
        { id: 'ext', k: 'q', x: 220, y: 220, w: 190, h: 62, t: ['External branch'], s: ['beside the superior thyroid a.'] },
        { id: 'sens1', k: 'leaf', x: 10, y: 330, w: 190, h: 62, t: ['Sensation'], s: ['above the cords'] },
        { id: 'ct', k: 'st', x: 220, y: 330, w: 190, h: 62, t: ['Cricothyroid'], s: ['tenses the cords'] },
        { id: 'inj2', k: 'note', x: 220, y: 440, w: 190, h: 62, t: ['If cut'], s: ['tension ↓ → weak, low voice'] },
        { id: 'pca', k: 'st', x: 440, y: 220, w: 250, h: 62, t: ['Posterior cricoarytenoid'], s: ['opens the rima · the only one'] },
        { id: 'lca', k: 'st', x: 440, y: 300, w: 250, h: 62, t: ['Lateral cricoarytenoid'], s: ['+ arytenoids · close the rima'] },
        { id: 'ta', k: 'st', x: 440, y: 380, w: 250, h: 62, t: ['Thyroarytenoid, vocalis'], s: ['relax the cords'] },
        { id: 'inj1', k: 'note', x: 730, y: 220, w: 220, h: 62, t: ['If cut'], s: ['cord can’t abduct → hoarse'] }
      ],
      E: [
        { f: 'vag', to: 'sln', p: [[440, 70], [440, 90], [230, 90], [230, 110]] },
        { f: 'vag', to: 'rln', p: [[520, 70], [520, 90], [565, 90], [565, 110]] },
        { f: 'sln', to: 'int', p: [[170, 172], [170, 196], [105, 196], [105, 220]] },
        { f: 'sln', to: 'ext', p: [[290, 172], [290, 196], [315, 196], [315, 220]] },
        { f: 'int', to: 'sens1', p: [[105, 282], [105, 330]] },
        { f: 'ext', to: 'ct', p: [[315, 282], [315, 330]] },
        { f: 'ct', to: 'inj2', p: [[315, 392], [315, 440]], dash: true },
        { f: 'rln', to: 'sens2', p: [[690, 141], [730, 141]] },
        { f: 'rln', to: 'pca', p: [[565, 172], [565, 220]] },
        { f: 'rln', to: 'lca', p: [[480, 172], [480, 200], [426, 200], [426, 331], [440, 331]] },
        { f: 'rln', to: 'ta', p: [[480, 172], [480, 200], [426, 200], [426, 411], [440, 411]] },
        { f: 'pca', to: 'inj1', p: [[690, 251], [730, 251]], dash: true }
      ] },
    txt: {
      vag: { h: 'Vagus (CN X)', b: ['Gives both laryngeal nerves.'] },
      sln: { h: 'Superior laryngeal nerve', b: ['Splits into an <b>internal</b> branch (sensory) and an <b>external</b> branch (motor).'] },
      int: { h: 'Internal branch', b: ['Sensation of the larynx <b>above the vocal cords</b>.'] },
      ext: { h: 'External branch', b: ['Runs with the <b>superior thyroid artery</b> → caught when the artery is tied in thyroidectomy.', 'Motor to the cricothyroid only.'] },
      ct: { h: 'Cricothyroid', b: ['The only intrinsic muscle not on the recurrent nerve.', '<b>Tenses</b> the cords.'] },
      inj2: { h: 'External branch injury', b: ['Cricothyroid lost → cord tension ↓ → <b>weak, low-pitched voice</b>.'] },
      rln: { h: 'Recurrent laryngeal nerve', b: ['Every intrinsic muscle <b>except the cricothyroid</b>.', 'Sensation <b>below</b> the cords.'] },
      sens1: { h: 'Above the cords', b: ['Internal laryngeal nerve.'] },
      sens2: { h: 'Below the cords', b: ['Recurrent laryngeal nerve.'] },
      pca: { h: 'Posterior cricoarytenoid', b: ['The <b>only</b> muscle that opens (abducts) the rima glottidis.'] },
      lca: { h: 'Lateral cricoarytenoid, arytenoids', b: ['Close (adduct) the rima.'] },
      ta: { h: 'Thyroarytenoid, vocalis', b: ['Relax the cords.'] },
      inj1: { h: 'Recurrent nerve injury', b: ['The only opener is lost → cord can’t abduct → <b>hoarse voice, difficult breathing</b>.'] }
    },
    R: {
      rln: { b: 'Recurrent nerve cut', dx: ['Recurrent laryngeal n.', 'posterior cricoarytenoid lost', 'cord can’t abduct'], s: [['vag', 'rln', 'Thyroid surgery near the recurrent laryngeal nerve.'], ['rln', 'pca', 'It supplies every intrinsic muscle except the cricothyroid, plus sensation below the cords.', ['lca', 'ta', 'sens2']], ['pca', 'inj1', 'Among them the <b>posterior cricoarytenoid</b>, the only muscle that opens the cords.'], ['inj1', '', 'Cord can’t abduct → <b>hoarse voice, difficult breathing</b>.']] },
      ext: { b: 'Superior thyroid a. tied', dx: ['External laryngeal n.', 'cricothyroid lost', 'weak, low voice'], s: [['vag', 'sln', 'The superior laryngeal nerve leaves the vagus.'], ['sln', 'ext', 'Its <b>external branch</b> runs beside the superior thyroid artery.'], ['ext', 'ct', 'Tie the artery and the nerve goes with it → no <b>cricothyroid</b>.'], ['ct', 'inj2', 'Cricothyroid tenses the cords.'], ['inj2', '', 'Tension ↓ → <b>weak, low-pitched voice</b>.']] },
      sens: { b: 'Sensation', dx: ['Above the cords: internal laryngeal', 'below: recurrent laryngeal'], s: [['vag', 'sln', 'Superior laryngeal nerve.'], ['sln', 'int', 'Its <b>internal</b> branch is sensory.'], ['int', 'sens1', 'It covers the larynx down to the cords.'], ['sens1', '', 'Sensation <b>above</b> the vocal cords.'], ['rln', 'sens2', 'The recurrent laryngeal nerve takes over below.'], ['sens2', '', 'Sensation <b>below</b> the vocal cords.']] }
    }
  });

  /* ---------- W-C4 · The intercostal space, outside → in ---------- */
  add('icspace', {
    title: 'Through the chest wall, outside → in', src: 'Thoracic wall p.7–11, 15–23 · W6–W15',
    hint: 'Click a layer, or pick a procedure and press Next step.',
    idle: 'Layers from the skin to the lung. The V-A-N bundle runs between the internal and innermost layers, under each rib.',
    def: { name: 'icspace', W: 960, H: 508, label: 'Intercostal space layers and needle paths',
      N: [
        { id: 'skin', k: 'st', x: 200, y: 8, w: 300, h: 44, t: ['Skin, fascia'] },
        { id: 'ext', k: 'st', x: 200, y: 64, w: 300, h: 44, t: ['External intercostal'] },
        { id: 'int', k: 'st', x: 200, y: 120, w: 300, h: 44, t: ['Internal intercostal'] },
        { id: 'inn', k: 'st', x: 200, y: 176, w: 300, h: 44, t: ['Innermost intercostal'] },
        { id: 'etf', k: 'st', x: 200, y: 232, w: 300, h: 44, t: ['Endothoracic fascia'] },
        { id: 'par', k: 'q', x: 200, y: 288, w: 300, h: 44, t: ['Parietal (costal) pleura'] },
        { id: 'psp', k: 'q', x: 200, y: 344, w: 300, h: 44, t: ['Pleural space'] },
        { id: 'vis', k: 'st', x: 200, y: 400, w: 300, h: 44, t: ['Visceral pleura'] },
        { id: 'lung', k: 'leaf', x: 200, y: 456, w: 300, h: 44, t: ['Lung'] },
        { id: 'van', k: 'q', x: 570, y: 140, w: 280, h: 60, t: ['V-A-N bundle'], s: ['vein · artery · nerve, under the rib'] },
        { id: 'tip1', k: 'note', x: 10, y: 120, w: 170, h: 100, ty: 30, t: ['Nerve block'], s: ['aim at the lower', 'border of the rib'] },
        { id: 'tip2', k: 'note', x: 10, y: 288, w: 170, h: 100, ty: 30, t: ['Tap or drain'], s: ['over the upper border', 'of the rib below'] }
      ],
      E: [
        { f: 'skin', to: 'ext', p: [[350, 52], [350, 64]] },
        { f: 'ext', to: 'int', p: [[350, 108], [350, 120]] },
        { f: 'int', to: 'inn', p: [[350, 164], [350, 176]] },
        { f: 'inn', to: 'etf', p: [[350, 220], [350, 232]] },
        { f: 'etf', to: 'par', p: [[350, 276], [350, 288]] },
        { f: 'par', to: 'psp', p: [[350, 332], [350, 344]] },
        { f: 'psp', to: 'vis', p: [[350, 388], [350, 400]], dash: true },
        { f: 'vis', to: 'lung', p: [[350, 444], [350, 456]] },
        { f: 'int', to: 'van', p: [[500, 150], [535, 150], [535, 170], [570, 170]] }
      ] },
    txt: {
      skin: { h: 'Skin and superficial fascia', b: ['First thing the needle crosses.'] },
      ext: { h: 'External intercostal', b: ['Outer layer · fibres down and forward (“hands in pockets”) → lifts ribs → breathing in.'] },
      int: { h: 'Internal intercostal', b: ['Middle layer · fibres up and forward → pulls ribs down → forced breathing out.'] },
      inn: { h: 'Innermost intercostal', b: ['Deepest layer, runs like the internal.', 'The V-A-N bundle lies between it and the internal layer.'] },
      etf: { h: 'Endothoracic fascia', b: ['Lines the inside of the chest wall, just outside the pleura.'] },
      par: { h: 'Parietal (costal) pleura', b: ['The pleura on the ribs: the layer a tap or drain must pierce.', 'Broken rib → tears this costal part.'] },
      psp: { h: 'Pleural space', b: ['Where fluid, air or blood collects → the target of a tap or drain.'] },
      vis: { h: 'Visceral pleura', b: ['Covers the lung itself → a drain must <b>never</b> pass through it.'] },
      lung: { h: 'Lung', b: ['Behind the visceral pleura.'] },
      van: { h: 'Neurovascular bundle', b: ['In the groove on the <b>lower edge</b> of each rib, between the internal and innermost layers.', 'Top → bottom: <b>V</b>ein, <b>A</b>rtery, <b>N</b>erve.', 'Arteries: front ← internal thoracic · back ← aorta.'] },
      tip1: { h: 'Nerve block', b: ['The nerve hugs the lower border of the rib → inject there.'] },
      tip2: { h: 'Tap or chest drain', b: ['Go over the <b>upper border of the rib below</b> → away from the bundle.'] }
    },
    R: {
      drain: { b: 'Chest drain / tap', dx: ['Skin', '3 muscle layers', 'endothoracic fascia', 'costal pleura', 'pleural space'], s: [['tip2', '', 'Enter over the upper border of the rib below, away from the bundle.'], ['skin', 'ext', 'Skin and fascia.'], ['ext', 'int', 'External intercostal.'], ['int', 'inn', 'Internal intercostal.'], ['inn', 'etf', 'Innermost intercostal.'], ['etf', 'par', 'Endothoracic fascia.'], ['par', 'psp', 'Parietal (<b>costal</b>) pleura.'], ['psp', '', 'In the <b>pleural space</b> → stop: the visceral pleura and lung are never crossed.']] },
      block: { b: 'Nerve block', dx: ['Skin', 'external', 'internal', 'V-A-N bundle at the lower border of the rib'], s: [['tip1', '', 'Aim at the lower border of the rib, where the nerve runs.'], ['skin', 'ext', 'Skin.'], ['ext', 'int', 'External intercostal.'], ['int', 'van', 'Internal intercostal.'], ['van', '', 'Reach the <b>bundle</b>: nerve lowest of V-A-N, in the rib’s groove.']] }
    }
  });

  /* ---------- W-C5 · Diaphragm openings ---------- */
  add('diaphragm', {
    title: 'Diaphragm openings by level', src: 'Thoracic wall p.26–30 · W16–W21',
    hint: 'Click a box, or pick an opening and press Next step.',
    idle: 'Three openings, highest first: T8, T10, T12.',
    def: { name: 'diaphragm', W: 960, H: 372, label: 'Diaphragm openings by vertebral level',
      N: [
        { id: 't8', k: 'q', x: 10, y: 20, w: 120, h: 56, t: ['T8'] },
        { id: 'cav', k: 'st', x: 170, y: 20, w: 330, h: 56, t: ['Caval opening'], s: ['in the central tendon'] },
        { id: 'ivc', k: 'leaf', x: 540, y: 20, w: 410, h: 56, t: ['Inferior vena cava'] },
        { id: 't10', k: 'q', x: 10, y: 110, w: 120, h: 56, t: ['T10'] },
        { id: 'eso', k: 'st', x: 170, y: 110, w: 330, h: 56, t: ['Esophageal hiatus'] },
        { id: 'oes', k: 'leaf', x: 540, y: 110, w: 410, h: 56, t: ['Esophagus'], s: ['+ vagal trunks'] },
        { id: 't12', k: 'q', x: 10, y: 200, w: 120, h: 56, t: ['T12'] },
        { id: 'aor', k: 'st', x: 170, y: 200, w: 330, h: 56, t: ['Aortic hiatus'], s: ['behind the diaphragm'] },
        { id: 'ao', k: 'leaf', x: 540, y: 200, w: 410, h: 56, t: ['Aorta'], s: ['+ thoracic duct, azygos'] },
        { id: 'phr', k: 'note', x: 10, y: 290, w: 490, h: 72, ty: 30, t: ['Motor: phrenic nerve only (C3–5)'], s: ['cut → that half of the diaphragm is paralysed'] },
        { id: 'liv', k: 'note', x: 540, y: 290, w: 410, h: 72, ty: 30, t: ['Right dome sits on the liver'] }
      ],
      E: [
        { f: 't8', to: 'cav', p: [[130, 48], [170, 48]] }, { f: 'cav', to: 'ivc', p: [[500, 48], [540, 48]] },
        { f: 't10', to: 'eso', p: [[130, 138], [170, 138]] }, { f: 'eso', to: 'oes', p: [[500, 138], [540, 138]] },
        { f: 't12', to: 'aor', p: [[130, 228], [170, 228]] }, { f: 'aor', to: 'ao', p: [[500, 228], [540, 228]] }
      ] },
    txt: {
      t8: { h: 'T8', b: ['Highest opening.'] }, t10: { h: 'T10', b: ['Middle opening.'] }, t12: { h: 'T12', b: ['Lowest opening.'] },
      cav: { h: 'Caval opening (T8)', b: ['In the central tendon.'] },
      ivc: { h: 'Inferior vena cava', b: ['Passes at T8.'] },
      eso: { h: 'Esophageal hiatus (T10)', b: ['In the muscle of the diaphragm.'] },
      oes: { h: 'Esophagus', b: ['Passes at T10 with the vagal trunks.'] },
      aor: { h: 'Aortic hiatus (T12)', b: ['Behind the diaphragm rather than through it.'] },
      ao: { h: 'Aorta', b: ['Passes at T12 with the thoracic duct and azygos vein.'] },
      phr: { h: 'Phrenic nerve', b: ['The only motor nerve of the diaphragm (C3–5) → injury paralyses it.'] },
      liv: { h: 'Right dome', b: ['The liver lies right under it.'] }
    },
    R: {
      ivc: { b: 'IVC', dx: ['T8', 'caval opening', 'IVC'], s: [['t8', 'cav', 'Highest level: T8.'], ['cav', 'ivc', 'Caval opening in the central tendon.'], ['ivc', '', '<b>Inferior vena cava</b>.']] },
      eso: { b: 'Esophagus', dx: ['T10', 'esophageal hiatus', 'esophagus'], s: [['t10', 'eso', 'T10.'], ['eso', 'oes', 'Esophageal hiatus.'], ['oes', '', '<b>Esophagus</b> with the vagal trunks.']] },
      ao: { b: 'Aorta', dx: ['T12', 'aortic hiatus', 'aorta'], s: [['t12', 'aor', 'Lowest level: T12.'], ['aor', 'ao', 'Aortic hiatus, behind the diaphragm.'], ['ao', '', '<b>Aorta</b>, thoracic duct, azygos.']] },
      phr: { b: 'Paralysed diaphragm', dx: ['Phrenic nerve (C3–5)'], s: [['phr', '', 'Only motor supply → injury to the <b>phrenic nerve</b> paralyses the diaphragm.']] }
    }
  });

  /* ---------- B-C3 · Bronchial tree ---------- */
  add('airway', {
    title: 'The airway tree, trachea → alveoli', src: 'Lung & bronchi p.21–30 · B11–B18',
    hint: 'Click a box, or pick a route and press Next step.',
    idle: 'Right main bronchus: short, wide, steep. Left: long, horizontal. Only the right upper lobe bronchus runs above the pulmonary artery.',
    def: { name: 'airway', W: 960, H: 536, label: 'Bronchial tree',
      N: [
        { id: 'tr', k: 'q', x: 380, y: 8, w: 200, h: 62, t: ['Trachea'], s: ['starts at C6'] },
        { id: 'car', k: 'q', x: 380, y: 96, w: 200, h: 62, t: ['Carina'], s: ['sternal angle, T4/5'] },
        { id: 'rmb', k: 'q', x: 120, y: 184, w: 260, h: 62, t: ['Right main bronchus'], s: ['shorter, wider, steeper'] },
        { id: 'lmb', k: 'q', x: 580, y: 184, w: 260, h: 62, t: ['Left main bronchus'], s: ['longer, horizontal'] },
        { id: 'rul', k: 'st', x: 10, y: 284, w: 200, h: 62, t: ['Right upper lobe'], s: ['eparterial bronchus'] },
        { id: 'bi', k: 'st', x: 230, y: 284, w: 200, h: 62, t: ['Bronchus intermedius'] },
        { id: 'rml', k: 'st', x: 170, y: 380, w: 120, h: 62, t: ['Middle'], s: ['lobe'] },
        { id: 'rll', k: 'st', x: 310, y: 380, w: 120, h: 62, t: ['Lower'], s: ['lobe'] },
        { id: 'lul', k: 'st', x: 560, y: 284, w: 180, h: 62, t: ['Left upper lobe'], s: ['+ lingula'] },
        { id: 'lll', k: 'st', x: 760, y: 284, w: 180, h: 62, t: ['Left lower lobe'] },
        { id: 'seg', k: 'q', x: 480, y: 380, w: 460, h: 62, t: ['Segmental bronchi → bronchioles'], s: ['→ terminal bronchiole: last conducting airway'] },
        { id: 'res', k: 'leaf', x: 480, y: 466, w: 460, h: 62, t: ['Respiratory bronchiole → alveoli'], s: ['gas exchange starts'] }
      ],
      E: [
        { f: 'tr', to: 'car', p: [[480, 70], [480, 96]] },
        { f: 'car', to: 'rmb', p: [[440, 158], [440, 170], [250, 170], [250, 184]] },
        { f: 'car', to: 'lmb', p: [[520, 158], [520, 170], [710, 170], [710, 184]] },
        { f: 'rmb', to: 'rul', p: [[180, 246], [180, 266], [110, 266], [110, 284]] },
        { f: 'rmb', to: 'bi', p: [[300, 246], [300, 266], [330, 266], [330, 284]] },
        { f: 'bi', to: 'rml', p: [[290, 346], [290, 364], [230, 364], [230, 380]] },
        { f: 'bi', to: 'rll', p: [[370, 346], [370, 380]] },
        { f: 'lmb', to: 'lul', p: [[650, 246], [650, 284]] },
        { f: 'lmb', to: 'lll', p: [[780, 246], [780, 266], [850, 266], [850, 284]] },
        { f: 'lll', to: 'seg', p: [[850, 346], [850, 380]] },
        { f: 'rll', to: 'seg', p: [[430, 411], [480, 411]] },
        { f: 'seg', to: 'res', p: [[710, 442], [710, 466]] }
      ] },
    txt: {
      tr: { h: 'Trachea', b: ['Starts at C6 · C-shaped rings closed behind by trachealis.'] },
      car: { h: 'Carina', b: ['The trachea divides at the sternal angle (T4/5).'] },
      rmb: { h: 'Right main bronchus', b: ['<b>Shorter, wider, more vertical</b> → an inhaled peanut usually lodges here.'] },
      lmb: { h: 'Left main bronchus', b: ['Long and horizontal.'] },
      rul: { h: 'Right upper lobe bronchus', b: ['Leaves early and runs <b>above</b> the pulmonary artery → the <b>eparterial</b> bronchus. Every other lobar bronchus is below it.'] },
      bi: { h: 'Bronchus intermedius', b: ['What is left of the right main bronchus after the upper lobe branch.'] },
      rml: { h: 'Right middle lobe', b: ['From the bronchus intermedius.'] },
      rll: { h: 'Right lower lobe', b: ['From the bronchus intermedius.'] },
      lul: { h: 'Left upper lobe', b: ['Includes the lingula, below the cardiac notch.'] },
      lll: { h: 'Left lower lobe', b: ['From the left main bronchus.'] },
      seg: { h: 'Conducting airways', b: ['Segmental bronchi → bronchioles → <b>terminal bronchiole</b>, the last airway that only conducts.'] },
      res: { h: 'Respiratory zone', b: ['Respiratory bronchiole → alveolar duct → sac: gas exchange starts here.'] }
    },
    R: {
      peanut: { b: 'Inhaled peanut', dx: ['Trachea', 'carina', 'right main bronchus'], s: [['tr', 'car', 'Down the trachea.'], ['car', 'rmb', 'At the carina the right main bronchus is the straighter path.'], ['rmb', '', 'It is <b>shorter, wider and more vertical</b> → the peanut lodges on the right.']] },
      epart: { b: 'Eparterial bronchus', dx: ['Right main bronchus', 'right upper lobe bronchus'], s: [['car', 'rmb', 'Right side.'], ['rmb', 'rul', 'The first branch, to the upper lobe.'], ['rul', '', 'It runs <b>above</b> the pulmonary artery → eparterial bronchus = right superior lobe bronchus.']] },
      left: { b: 'Left side', dx: ['Left main bronchus', 'upper lobe + lingula', 'lower lobe'], s: [['car', 'lmb', 'Left main bronchus: longer and horizontal.'], ['lmb', 'lul', 'Upper lobe, with the lingula.', ['lll']], ['lul', '', 'Two lobes only on the left.']] },
      air: { b: 'Air to an alveolus', dx: ['Trachea', 'main bronchus', 'lobar', 'segmental', 'terminal bronchiole', 'respiratory bronchiole'], s: [['tr', 'car', 'Trachea.'], ['car', 'rmb', 'Main bronchus.'], ['rmb', 'bi', 'Bronchus intermedius.'], ['bi', 'rll', 'Lobar bronchus.'], ['rll', 'seg', 'Into the lobe.'], ['seg', 'res', 'Segmental bronchi → bronchioles → terminal bronchiole: still <b>conducting</b> only.'], ['res', '', 'Respiratory bronchiole: <b>gas exchange</b> begins.']] }
    }
  });

  /* ---------- B-C5 · Lymph drainage ---------- */
  add('lymph', {
    title: 'Lymph from the lung and chest', src: 'Lung & bronchi p.38–42 · B22–B26',
    hint: 'Click a box, or pick a route and press Next step.',
    idle: 'Lung lymph runs node to node toward the hilum and up the trachea. Two ducts empty into the veins at the root of the neck.',
    def: { name: 'lymph', W: 960, H: 458, label: 'Thoracic lymph drainage',
      N: [
        { id: 'lung', k: 'st', x: 10, y: 20, w: 170, h: 62, t: ['Lung tissue'] },
        { id: 'bp', k: 'q', x: 220, y: 20, w: 250, h: 62, t: ['Bronchopulmonary'], s: ['(hilar) nodes'] },
        { id: 'tb', k: 'q', x: 510, y: 20, w: 220, h: 62, t: ['Tracheobronchial'], s: ['nodes'] },
        { id: 'bm', k: 'q', x: 770, y: 20, w: 180, h: 62, t: ['Bronchomediastinal'], s: ['trunk'] },
        { id: 'rub', k: 'st', x: 10, y: 150, w: 200, h: 62, t: ['Right upper body'] },
        { id: 'rld', k: 'q', x: 250, y: 150, w: 300, h: 62, t: ['Right lymphatic duct'] },
        { id: 'rva', k: 'leaf', x: 600, y: 150, w: 300, h: 62, t: ['Right venous angle'], s: ['subclavian + internal jugular'] },
        { id: 'cc', k: 'st', x: 10, y: 270, w: 200, h: 62, t: ['Cisterna chyli'], s: ['abdomen, legs'] },
        { id: 'td', k: 'q', x: 250, y: 270, w: 300, h: 62, t: ['Thoracic duct'], s: ['between aorta and azygos'] },
        { id: 'lva', k: 'leaf', x: 600, y: 270, w: 300, h: 62, t: ['Left venous angle'], s: ['subclavian + internal jugular'] },
        { id: 'chy', k: 'note', x: 250, y: 386, w: 300, h: 62, t: ['Duct torn'], s: ['chyle in the pleura = chylothorax'] }
      ],
      E: [
        { f: 'lung', to: 'bp', p: [[180, 51], [220, 51]] }, { f: 'bp', to: 'tb', p: [[470, 51], [510, 51]] }, { f: 'tb', to: 'bm', p: [[730, 51], [770, 51]] },
        { f: 'bm', to: 'rva', p: [[860, 82], [860, 120], [920, 120], [920, 181], [900, 181]] },
        { f: 'rub', to: 'rld', p: [[210, 181], [250, 181]] }, { f: 'rld', to: 'rva', p: [[550, 181], [600, 181]] },
        { f: 'cc', to: 'td', p: [[210, 301], [250, 301]] }, { f: 'td', to: 'lva', p: [[550, 301], [600, 301]] },
        { f: 'td', to: 'chy', p: [[400, 332], [400, 386]], dash: true }
      ] },
    txt: {
      lung: { h: 'Lung tissue', b: ['Lymph starts here.'] },
      bp: { h: 'Bronchopulmonary nodes', b: ['At the hilum: the <b>first</b> nodes to receive lymph from the lung.'] },
      tb: { h: 'Tracheobronchial nodes', b: ['Around the carina and trachea.'] },
      bm: { h: 'Bronchomediastinal trunk', b: ['Carries the chest’s lymph toward the venous angle.'] },
      rub: { h: 'Right upper body', b: ['Right arm, right half of the head, neck and chest.'] },
      rld: { h: 'Right lymphatic duct', b: ['Drains the right upper body → right venous angle.'] },
      rva: { h: 'Right venous angle', b: ['Where the <b>subclavian</b> and internal jugular veins meet → lymph re-enters the blood.'] },
      cc: { h: 'Cisterna chyli', b: ['Start of the thoracic duct, in the abdomen.'] },
      td: { h: 'Thoracic duct', b: ['Runs up between the aorta and the azygos vein → left venous angle.', 'Carries chyle (fat-rich lymph).'] },
      lva: { h: 'Left venous angle', b: ['The thoracic duct joins the blood here.'] },
      chy: { h: 'Chylothorax', b: ['Thoracic duct injured → chyle leaks into the pleural space.'] }
    },
    R: {
      lung: { b: 'Lung lymph', dx: ['Lung', 'bronchopulmonary nodes', 'tracheobronchial nodes', 'bronchomediastinal trunk', 'venous angle'], s: [['lung', 'bp', 'Lymph leaves the lung tissue.'], ['bp', 'tb', 'First stop: <b>bronchopulmonary (hilar)</b> nodes.'], ['tb', 'bm', 'Then the tracheobronchial nodes.'], ['bm', 'rva', 'Bronchomediastinal trunk.'], ['rva', '', 'Into the veins at the venous angle.']] },
      chyle: { b: 'Chylothorax', dx: ['Cisterna chyli', 'thoracic duct', 'torn → chylothorax'], s: [['cc', 'td', 'Chyle from the gut collects in the cisterna chyli.'], ['td', 'chy', 'It rises in the <b>thoracic duct</b>, between the aorta and azygos.'], ['chy', '', 'Tear the duct → chyle in the pleura = <b>chylothorax</b>.']] },
      rub: { b: 'Right upper body', dx: ['Right lymphatic duct', 'right venous angle (subclavian vein)'], s: [['rub', 'rld', 'Right arm, right half of head, neck and chest.'], ['rld', 'rva', 'Right lymphatic duct.'], ['rva', '', 'Joins the blood where the <b>subclavian vein</b> meets the internal jugular.']] },
      body: { b: 'Rest of the body', dx: ['Cisterna chyli', 'thoracic duct', 'left venous angle'], s: [['cc', 'td', 'Legs, abdomen, left side.'], ['td', 'lva', 'Thoracic duct.'], ['lva', '', 'Left venous angle.']] }
    }
  });
})();
