/* Section W: Thoracic Wall & Diaphragm (681027 Thoracic wall & diaphragm.pdf, 30 pages). */
CVS.add({ id: 'W', short: 'Thoracic wall', title: 'Thoracic Wall, Intercostal Space, Pleura & Diaphragm', kind: 'Lecture',
  blurb: 'Sternum and rib articulations, intercostal muscle layers, accessory muscles of respiration, the intercostal VAN bundle and nerve block, thoracocentesis vs thoracostomy, flail chest, and diaphragm.',
  items: [
  { t: 'c', id: 'W-C1', title: 'Thoracic cage: sternum, rib classes and vertebral joints', src: 'Thoracic wall p.2–6',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Sternum, top → bottom</b>: {{manubrium}} → {{sternal angle}} → body → {{xiphoid process}}.</li>' +
      '<li>The angle = level of the {{2nd rib}} → start counting ribs here.</li>' +
      '<li><b>Ribs</b><ul><li>{{true ribs}} (1–7): own cartilage to the sternum.</li>' +
      '<li>{{false ribs}} (8–12): no direct sternal joint; 11–12 are {{floating ribs}}.</li></ul></li>' +
      '<li><b>Typical rib</b>: head, neck, tubercle, shaft with a {{costal groove}} on its lower edge.</li>' +
      '<li><b>Behind</b>: head → {{vertebral bodies}}; tubercle → {{transverse process}}.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('wall-sternum', 'Divisions of the sternum and the sternal junction at the second costal cartilage.', 'wall', 3) + CVS.fig('wall-rib', 'Costovertebral and costotransverse articulations of a typical rib.', 'wall', 6) + '</div></div>' },
  { t: 'q', id: 'W1', src: 'AC80', core: true, keep: true,
    q: 'Which structure has 2nd rib attached to?',
    o: ['Manubrium sterni', 'Sternal angle of Louis', 'Body of sternum', 'Xiphisternal junction', 'Xiphoid process'], a: 1,
    ex: 'The 2nd costal cartilage joins the sternum at the sternal angle (manubriosternal joint). The 1st rib attaches to the manubrium; ribs 3–6 to the body; the 7th at the xiphisternal junction; nothing to the xiphoid.' },
  { t: 'q', id: 'W2', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st8', 'AC79 spot test, station 8.', 'ac79s', 10),
    o: ['Manubrium sterni', 'Sternal angle', 'Body of sternum', 'Xiphoid process'], a: 2,
    ex: 'B points to the long middle part of the sternum, below the sternal angle: the body of the sternum.' },
  { t: 'q', id: 'W3', src: 'AC79 spot', keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st10', 'AC79 spot test, station 10.', 'ac79s', 12),
    o: ['Manubrium sterni', 'Sternal angle', 'Body of sternum', 'Xiphoid process'], a: 1,
    ex: 'A points to the transverse ridge where the manubrium meets the body: the sternal angle.' },
  { t: 'q', id: 'W4', src: 'AC81 spot', core: true, keep: true,
    q: 'Identify structure A.',
    fig: CVS.fig('ac81s-st6', 'AC81 spot test, station 6.', 'ac81s', 7),
    o: ['Manubrium sterni', 'Sternal angle', 'Body of sternum', 'Xiphoid process'], a: 1,
    ex: 'A marks the junction of manubrium and body, level with the 2nd costal cartilages: the sternal angle.' },
  { t: 'q', id: 'W5', src: 'AC81 spot', keep: true,
    q: 'Identify structure B.',
    fig: CVS.fig('ac81s-st6', 'AC81 spot test, station 6.', 'ac81s', 7), figRef: 'W4',
    o: ['2nd rib', '3rd rib', '4th rib', '5th rib'], a: 1,
    ex: 'Count down from the sternal angle: the cartilage at A is the 2nd, so the next one down, at B, is the 3rd.',
    flag: 'Key from the AC81 spot short answer key; count from the sternal angle on the photo to check.' },
  { t: 'c', id: 'W-C2', title: 'Intercostal muscle layers and transversus thoracis', src: 'Thoracic wall p.7–11',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl compact"><thead><tr><th>Layer</th><th>Fibres run</th><th>Job</th></tr></thead><tbody>' +
      '<tr><td><b>{{External intercostal}}</b><br>outer</td><td>{{down and forward}}<br>(“hands in pockets”)</td><td>{{lifts ribs}}: inspiration</td></tr>' +
      '<tr><td><b>{{Internal intercostal}}</b><br>middle</td><td>{{up and forward}}</td><td>{{pulls ribs down}}: forced expiration</td></tr>' +
      '<tr><td><b>{{Innermost intercostal}}</b><br>deepest</td><td>like the middle layer</td><td>helps pull ribs down</td></tr></tbody></table></div>' +
      '<ul class="pts"><li>Near the sternum the outer layer becomes a membrane → the muscle you see there is the middle layer.</li>' +
      '<li><b>{{Transversus thoracis}}</b>: inside the front wall, back of the lower sternum → costal cartilages → forced expiration.</li></ul></div>' +
      CVS.fig('wall-intercostal', 'Three layers of intercostal muscles and their membranes in cross-section.', 'wall', 10) + '</div>' },
  { t: 'q', id: 'W6', src: 'AC79 spot', core: true, keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st7', 'AC79 spot test, station 7.', 'ac79s', 9),
    o: ['External intercostal muscle', 'Internal intercostal muscle', 'Innermost intercostal muscle', 'Transversus thoracis muscle'], a: 1,
    ex: 'Near the sternum the external intercostal is replaced by a membrane, so the muscle seen there (fibres running down and back) is the internal intercostal.' },
  { t: 'q', id: 'W7', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st7', 'AC79 spot test, station 7.', 'ac79s', 9), figRef: 'W6',
    o: ['External intercostal muscle', 'Internal intercostal muscle', 'Innermost intercostal muscle', 'Transversus thoracis muscle'], a: 0,
    ex: 'Further out, B is the superficial layer with fibres running down and forward: the external intercostal.' },
  { t: 'q', id: 'W8', src: 'AC81 spot', keep: true,
    q: 'Identify structure A.',
    fig: CVS.fig('ac81s-st7', 'AC81 spot test, station 7.', 'ac81s', 8),
    o: ['External intercostal m.', 'Internal intercostal m.', 'Innermost intercostal m.', 'Transversus thoracis m.'], a: 0,
    ex: 'On the outer surface of the chest wall, A is the outermost muscle layer with fibres running down and forward: the external intercostal.' },
  { t: 'q', id: 'W9', src: 'AC81 spot', core: true, keep: true,
    q: 'Identify structure A.',
    fig: CVS.fig('ac81s-st5', 'AC81 spot test, station 5.', 'ac81s', 6),
    o: ['External intercostal m.', 'Inner intercostal m.', 'Innermost intercostal m.', 'Transversus thoracis m.'], a: 3,
    ex: 'Seen from inside the chest, A is the fan of muscle slips from the back of the lower sternum up to the costal cartilages: the transversus thoracis.' },
  { t: 'q', id: 'W10', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st9', 'AC79 spot test, station 9.', 'ac79s', 11),
    o: ['External intercostal muscle', 'Internal intercostal muscle', 'Innermost intercostal muscle', 'Transversus thoracis muscle'], a: 3,
    ex: 'The photo shows the inner surface of the anterior chest wall; B is a slip of the transversus thoracis.' },
  { t: 'c', id: 'W-C3', title: 'Mechanics of quiet vs forceful breathing and accessory muscles', src: 'Thoracic wall p.12–14',
    html: '<div class="cols2"><div class="mini art"><h4>Breathing in</h4><ul>' +
      '<li><b>Quiet</b>: {{diaphragm}} + external intercostals.</li>' +
      '<li><b>Forced</b>: add the accessory muscles: {{sternocleidomastoid}}, {{scalenes}}, {{pectoralis minor}}, serratus.</li></ul></div>' +
      '<div class="mini ven"><h4>Breathing out</h4><ul>' +
      '<li><b>Quiet</b>: passive → {{elastic recoil}} of the lung.</li>' +
      '<li><b>Forced</b>: {{internal intercostals}} + innermost + transversus thoracis + {{abdominal muscles}}.</li></ul></div></div>' +
      '<p class="note">Rule of thumb: anything that lifts the ribs breathes in; anything that pulls them down or pushes the abdomen up breathes out.</p>' },
  { t: 'q', id: 'W11', src: 'AC79 · AC81', core: true, keep: true,
    q: 'Which of the following muscles is used to elevate the rib?',
    o: ['External intercostal muscle', 'Internal intercostal muscle', 'Innermost intercostal muscle', 'Transversus thoracis muscle', 'Diaphragm'], a: 0,
    ex: 'The external intercostals raise the ribs in inspiration (bucket and pump handle). The internal, innermost and transversus thoracis depress the ribs in forced expiration; the diaphragm does not lift the ribs.' },
  { t: 'c', id: 'W-C4', title: 'Intercostal neurovascular bundle (VAN), vessels and nerve block', src: 'Thoracic wall p.15–20',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Where</b>: in the costal groove (lower edge of the rib), between the {{internal and innermost}} layers.</li>' +
      '<li><b>Order, top → bottom</b>: {{VAN}} (vein, artery, nerve).</li>' +
      '<li><b>Arteries</b>: front ← {{internal thoracic artery}}; back ← {{aorta}}.</li>' +
      '<li><b>Veins</b>: back → {{azygos}} (right) / {{hemiazygos}} (left).</li>' +
      '<li><b>Needles</b><ul><li>Nerve block → aim at the {{lower border}} of the rib (where the nerve is).</li>' +
      '<li>Chest tap or drain → go over the {{upper border}} of the rib below (away from the bundle).</li></ul></li></ul></div>' +
      '<div class="stack">' + CVS.fig('wall-van', 'Arrangement of Vein, Artery, and Nerve in the costal groove.', 'wall', 18) + CVS.fig('wall-block', 'Infiltration at the inferior costal margin for an intercostal block.', 'wall', 20) + '</div></div>' },
  { t: 'q', id: 'W12', src: 'AC79 spot', core: true, keep: true,
    q: 'Identify these structures A.',
    fig: CVS.fig('ac79s-st8', 'AC79 spot test, station 8.', 'ac79s', 10),
    o: ['Pericardiophrenic vessels', 'Intercostal vessels', 'Internal thoracic vessels', 'Musculophrenic vessels'], a: 2,
    ex: 'A runs vertically about a finger-breadth beside the sternum on the inner chest wall: the internal thoracic vessels.' },
  { t: 'q', id: 'W13', src: 'AC81 spot', keep: true,
    q: 'Identify structure B.',
    fig: CVS.fig('ac81s-st5', 'AC81 spot test, station 5.', 'ac81s', 6),
    o: ['Pericardiophrenic vessels', 'Intercostal vessels', 'Internal thoracic vessels'], a: 2,
    ex: 'B is the vertical pair of vessels beside the sternum: the internal thoracic artery and veins.' },
  { t: 'c', id: 'W-C5', title: 'Pleural procedures, flail chest and the diaphragm', src: 'Thoracic wall p.21–30',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>{{Thoracocentesis}}</b> (tap fluid): low, at the back (posterior axillary line).</li>' +
      '<li><b>{{Tube thoracostomy}}</b> (drain air or blood): 4th–5th space, axillary line, over the upper border of the rib.</li>' +
      '<li><b>Layers crossed</b>: skin → 3 intercostal layers → endothoracic fascia → {{parietal}} (costal) pleura. Never the {{visceral pleura}}.</li>' +
      '<li><b>{{Flail chest}}</b>: several ribs broken in two places → a loose segment → {{paradoxical movement}} (in on inspiration, out on expiration).</li>' +
      '<li><b>Diaphragm</b><ul><li>Motor: {{phrenic nerve}} only (C3–C5); passes in front of the lung root.</li>' +
      '<li>Openings: IVC at {{T8}} (central tendon) · esophagus at {{T10}} · aorta at T12.</li>' +
      '<li>Right dome sits on the {{liver}}.</li></ul></li></ul></div>' +
      '<div class="stack">' + CVS.fig('wall-flail', 'Isolated rib segment moving inward during inspiration and outward during expiration.', 'wall', 28) + CVS.fig('wall-diaphragm', 'Inferior view of the diaphragm showing crura, central tendon, and major openings.', 'wall', 29) + '</div></div>' },
  { t: 'q', id: 'W14', src: 'AC79 · AC80 · AC81', core: true, keep: true,
    q: 'Which structure does not pass through during thoracostomy in a pneumothorax patient?',
    o: ['External intercostal', 'Internal intercostal', 'Innermost intercostal', 'Parietal pleura', 'Visceral pleura'], a: 4,
    ex: 'The tube goes through skin, the three intercostal muscles, endothoracic fascia and parietal pleura into the pleural cavity. The visceral pleura covers the lung and must not be punctured.' },
  { t: 'q', id: 'W15', src: 'AC81', core: true, keep: true,
    q: 'In the thoracocentesis procedure, the needle needs to be inserted through which structure?',
    o: ['Costal pleura', 'Mediastinal pleura', 'Diaphragmatic pleura', 'Cervical pleura', 'Visceral pleura'], a: 0,
    ex: 'A chest tap goes through the lateral chest wall, so it crosses the costal part of the parietal pleura, just above the upper border of the rib below.' },
  { t: 'q', id: 'W16', src: 'AC79 · AC81', core: true, keep: true,
    q: 'Paralysis of the diaphragm is a result of the injury of which nerve?',
    o: ['Accessory nerve', 'Intercostal nerve', 'Vagus nerve', 'Phrenic nerve', 'Greater splanchnic nerve'], a: 3,
    ex: 'The phrenic nerve (C3–C5) is the only motor supply of the diaphragm. Lower intercostal nerves carry sensation from its periphery only.' },
  { t: 'q', id: 'W17', src: 'AC79 spot', keep: true,
    q: 'Which nerve innervates this structure A?',
    fig: CVS.fig('ac79s-st11', 'AC79 spot test, station 11.', 'ac79s', 13),
    o: ['Superior epigastric nerve', 'Medial pectoral nerve', 'Subcostal nerve', 'Phrenic nerve'], a: 3,
    ex: 'A is the dome of the diaphragm, supplied by the phrenic nerve.' },
  { t: 'q', id: 'W18', src: 'AC79 spot', keep: true,
    q: 'Which structure is located right below structure A?',
    fig: CVS.fig('ac79s-st11', 'AC79 spot test, station 11.', 'ac79s', 13), figRef: 'W17',
    o: ['Stomach', 'Liver', 'Small intestine', 'Pancreas'], a: 1,
    ex: 'A is the right dome, which sits on the liver (the reason the right dome is higher).' },
  { t: 'q', id: 'W19', src: 'AC79 spot', core: true, keep: true,
    q: 'Structure A enters the diaphragm through which opening?',
    fig: CVS.fig('ac79s-st12', 'AC79 spot test, station 12.', 'ac79s', 14),
    o: ['Aortic hiatus', 'Esophageal hiatus', 'Caval opening'], a: 1,
    ex: 'A is the esophagus in the midline just left of centre, passing through the esophageal hiatus at T10 (with the vagal trunks).' },
  { t: 'q', id: 'W20', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st12', 'AC79 spot test, station 12.', 'ac79s', 14), figRef: 'W19',
    o: ['Aorta', 'Esophagus', 'Superior vena cava', 'Inferior vena cava'], a: 3,
    ex: 'B is the wide vein passing through the central tendon on the right: the inferior vena cava (caval opening, T8).' },
  { t: 'q', id: 'W21', src: 'AC81 spot', keep: true,
    q: 'Identify structure A.',
    fig: CVS.fig('ac81s-st8', 'AC81 spot test, station 8.', 'ac81s', 9),
    o: ['Vagus n.', 'Recurrent laryngeal n.', 'Phrenic n.', 'Sympathetic trunk'], a: 2,
    ex: 'A runs down on the side of the fibrous pericardium, in front of the lung root, toward the diaphragm: the phrenic nerve. The vagus passes behind the lung root.' }
]});
