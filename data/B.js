/* Section B: Lung & Bronchial Tree (681028 Lung and bronchial tree.pdf, 48 pages). */
CVS.add({ id: 'B', short: 'Lung & bronchi', title: 'Lungs, Pleural Recesses, Bronchial Tree & Neurovasculature', kind: 'Lecture',
  blurb: 'Pleural reflections and 6-8-10 / 8-10-12 surface markings, mediastinal impressions on right vs left lungs, eparterial vs hyparterial bronchi, bronchial vessels and azygos system, and thoracic lymphatics and nerves.',
  items: [
  { t: 'c', id: 'B-C1', title: 'Pleurae, surface markings (6-8-10 / 8-10-12) and pleural tap', src: 'Lung & bronchi p.2–10',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Reference line</th><th>Inferior border of lung</th><th>Inferior border of pleura</th></tr></thead><tbody>' +
      '<tr><td><b>Midclavicular line (MCL)</b></td><td>Rib {{6}}</td><td>Rib {{8}}</td></tr>' +
      '<tr><td><b>Midaxillary line (MAL)</b></td><td>Rib 8</td><td>Rib {{10}}</td></tr>' +
      '<tr><td><b>Paravertebral line</b></td><td>Rib 10</td><td>Rib {{12}}</td></tr></tbody></table></div>' +
      '<ul class="pts">' +
      '<li><b>Layers &amp; dome</b>: parietal pleura (separated from the chest wall by {{extrapleural fascia}}) and visceral pleura; the cervical dome ({{cupola}}) rises {{1 inch}} above the medial third of the clavicle.</li>' +
      '<li><b>Recesses &amp; fluid</b>: {{costomediastinal}} and {{costodiaphragmatic}} recesses; excess fluid causes hydrothorax, haemothorax, pyothorax (empyema), or {{chylothorax}} (lymph).</li>' +
      '<li><b>Pleural tap (thoracentesis)</b>: needle enters the {{8th, 9th or 10th}} intercostal space at the midaxillary line above the superior rib border (vs 7th/8th ICS posterior axillary/mid-scapular in Thoracic wall p.23).</li></ul></div>' +
      '<div class="stack">' + CVS.fig('lung-recess', 'Inferior surface markings of lung and parietal pleura across three vertical lines.', 'lung', 6) + CVS.fig('lung-tap', 'Needle path into the pleural recess above the upper costal margin.', 'lung', 10) + '</div></div>' },
  { t: 'q', id: 'B1', src: 'AC79 · AC81', core: true, keep: true,
    q: 'A patient has been sent to the ER due to a rib fracture with pneumothorax. Which part of the pleura is most likely to be damaged?',
    o: ['Visceral pleura', 'Costal pleura', 'Diaphragmatic pleura', 'Mediastinal pleura', 'Cervical pleura'], a: 1,
    ex: 'A broken rib tears the pleura lining the inner surface of the ribs: the costal part of the parietal pleura.',
    flag: 'AC79 asked the same with “parietal pleura” among the options and keyed it; the costal pleura is the part of the parietal pleura on the ribs, so both keys agree.' },
  { t: 'q', id: 'B2', src: 'AC79 spot', core: true, keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st13', 'AC79 spot test, station 13.', 'ac79s', 15),
    o: ['Costodiaphragmatic recess', 'Costomediastinal recess', 'Supraphrenic recess', 'Pulmonary ligament'], a: 0,
    ex: 'B marks the gutter where costal pleura turns onto the diaphragm at the lowest lateral part of the cavity: the costodiaphragmatic recess, where fluid collects first.' },
  { t: 'q', id: 'B3', src: 'AC79 spot', keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st14', 'AC79 spot test, station 14.', 'ac79s', 16),
    o: ['Visceral pleura', 'Parietal pleura', 'Pulmonary ligament', 'Endothoracic fascia'], a: 0,
    ex: 'A is the membrane between two lobes, inside a fissure. Only the visceral pleura dips into the fissures.',
    flag: 'From the recall: in the real exam the pin was placed on the membrane between two lobes (A) and on the membrane over the intercostal muscles behind the lung (B).' },
  { t: 'q', id: 'B4', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st14', 'AC79 spot test, station 14.', 'ac79s', 16), figRef: 'B3',
    o: ['Visceral pleura', 'Parietal pleura', 'Pulmonary ligament', 'Pulmonary membrane'], a: 1,
    ex: 'B is the membrane lining the inner chest wall over the intercostal muscles: the parietal (costal) pleura.' },
  { t: 'c', id: 'B-C2', title: 'Lung surfaces, fissures and mediastinal impressions', src: 'Lung & bronchi p.11–20',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Lobes &amp; fissures</b>: right lung has 3 lobes divided by oblique and {{horizontal}} fissures; left lung has 2 lobes divided by an oblique fissure, with an anterior {{cardiac notch}} and {{lingula}} on the superior lobe.</li>' +
      '<li><b>Root (hilum) &amp; sleeve</b>: transmits bronchi, pulmonary &amp; bronchial vessels, lymphatics, and plexuses; inferiorly the parietal-to-visceral reflection hangs down as the {{pulmonary ligament}}.</li>' +
      '<li><b>Right mediastinal impressions</b>: {{arch of azygos vein}} arching over the root, {{superior vena cava}} (SVC), {{brachiocephalic vein}}, and {{esophagus}} behind the hilum.</li>' +
      '<li><b>Left mediastinal impressions</b>: {{aortic arch}} above the root, {{descending aorta}} behind, {{subclavian artery}} sulcus heading to the apex, and a deep cardiac impression.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('lung-impressions', 'Mediastinal surface of the right lung showing venous and esophageal grooves.', 'lung', 18) + CVS.fig('lung-impressions-lt', 'Mediastinal surface of the left lung showing arterial grooves and tongue-like projection.', 'lung', 20) + '</div></div>' },
  { t: 'q', id: 'B5', src: 'AC79', core: true, keep: true,
    q: 'Where is the cardiac notch located in the lungs?',
    o: ['Superior lobe of left lung', 'Inferior lobe of left lung', 'Superior lobe of right lung', 'Middle lobe of right lung', 'Inferior lobe of right lung'], a: 0,
    ex: 'The cardiac notch is on the anterior border of the left lung, in the superior lobe, with the lingula below it.' },
  { t: 'q', id: 'B6', src: 'AC79 spot', core: true, keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st16', 'AC79 spot test, station 16.', 'ac79s', 18),
    o: ['Visceral pleura', 'Parietal pleura', 'Pulmonary ligament', 'Costodiaphragmatic fold'], a: 2,
    ex: 'A is the double fold of pleura hanging down from the lung root on the mediastinal surface: the pulmonary ligament.' },
  { t: 'q', id: 'B7', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st16', 'AC79 spot test, station 16.', 'ac79s', 18), figRef: 'B6',
    o: ['Middle lobe of right lung', 'Inferior lobe of right lung', 'Lingula of left lung', 'Inferior lobe of left lung'], a: 2,
    ex: 'On the left lung, B is the tongue of the upper lobe below the cardiac notch: the lingula.' },
  { t: 'q', id: 'B8', src: 'AC79 spot', keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st17', 'AC79 spot test, station 17.', 'ac79s', 19),
    o: ['Aortic arch impression', 'Superior vena cava impression', 'Azygos vein impression', 'Subclavian artery impression'], a: 2,
    ex: 'On the mediastinal surface of the right lung, A is the groove arching over the root: the impression of the azygos vein.' },
  { t: 'q', id: 'B9', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st17', 'AC79 spot test, station 17.', 'ac79s', 19), figRef: 'B8',
    o: ['Right cardiac impression', 'Left cardiac impression', 'Esophagus impression', 'Descending aorta impression'], a: 1,
    ex: 'On the left lung the deep hollow in front of the root is the cardiac impression, made by the left ventricle.' },
  { t: 'q', id: 'B10', src: 'AC80 spot', keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac80s-subclavian', 'AC80 spot test (recalled image).', 'ac80s', 8),
    o: ['Expression of aortic arch', 'Expression of subclavian', 'Thoricoaca', 'Gyreus capitis'], a: 1,
    ex: 'A is the groove near the apex of the right lung, where the subclavian artery arches over it: the subclavian artery impression.',
    flag: 'Options as recalled: “expression” means impression; the last two options are garbled in the recall.' },
  { t: 'c', id: 'B-C3', title: 'Tracheobronchial tree, sternal angle and hilar relations', src: 'Lung & bronchi p.21–30',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Conducting vs respiratory zones</b>: conducting part runs from trachea → main → lobar → segmental bronchi → {{terminal bronchioles}}; respiratory part begins at {{respiratory bronchioles}} → alveolar ducts → alveolar sacs → alveoli.</li>' +
      '<li><b>Sternal angle (of Louis, {{DT4}})</b>: marks the manubriosternal joint, 2nd rib, beginning/end of aortic arch, inferior border of superior mediastinum, and tracheal bifurcation ({{carina}}; trachea length given as {{12 cm}} here vs 10 cm in URT p.41).</li>' +
      '<li><b>Main bronchi &amp; segments</b>: right main bronchus is {{wider, shorter, and more vertical}} (foreign body predisposition) and supplies {{10 segments}} (3+2+5); left lung has {{8 segments}} (4+4).</li>' +
      '<li><b>Hilar relationship to pulmonary artery</b>: the right superior lobar bronchus arises above the right pulmonary artery and is called the {{eparterial bronchus}}; all other lobar bronchi pass below the pulmonary artery ({{hyparterial bronchi}}).</li></ul></div>' +
      CVS.fig('lung-hilum', 'Comparison of right and left hilar structures and lobar bronchial positions.', 'lung', 28) + '</div>' + '<p class="note"><b>From the past papers</b> · The left main bronchus is longer and more horizontal. In the lung root the pulmonary veins lie lowest and most anterior. The trachea starts at C6, at the cricoid (Lung p.23; AC79 and AC81 spot).</p>' },
  { t: 'q', id: 'B11', src: 'AC80', core: true, keep: true,
    q: 'A mass is found in eparterial bronchus, which structure is affected?',
    o: ['Right superior bronchus', 'Right middle bronchus', 'Right inferior bronchus', 'Left superior bronchus', 'Left inferior bronchus'], a: 0,
    ex: 'The eparterial bronchus is the right superior (upper) lobar bronchus, the only lobar bronchus that arises above the pulmonary artery.' },
  { t: 'q', id: 'B12', src: 'AC79 · AC81', core: true, keep: true,
    q: 'A 2-year-old boy suddenly chokes after swallowing a peanut. Which part of the airway is most likely obstructed?',
    o: ['Right main bronchus', 'Left main bronchus', 'Larynx', 'Trachea', 'Tracheal carina'], a: 0,
    ex: 'The right main bronchus is wider, shorter and more vertical, so inhaled objects usually enter it.',
    flag: 'AC79 asked it with a boy choking on an almond, also keyed right main bronchus.' },
  { t: 'q', id: 'B13', src: 'AC79 spot', keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st13', 'AC79 spot test, station 13.', 'ac79s', 15),
    o: ['Caruncle of trachea', 'Carina of trachea', 'Trachealis muscle', 'Right main bronchus'], a: 1,
    ex: 'A is the keel-shaped ridge inside the tracheal bifurcation: the carina.' },
  { t: 'q', id: 'B14', src: 'AC79 spot', keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st15', 'AC79 spot test, station 15.', 'ac79s', 17),
    o: ['Branch of pulmonary artery', 'Right main bronchus', 'Eparterial bronchus', 'Left superior lobar bronchus'], a: 2,
    ex: 'In the right lung root, A is the uppermost bronchus, above the pulmonary artery: the eparterial bronchus.' },
  { t: 'q', id: 'B15', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st15', 'AC79 spot test, station 15.', 'ac79s', 17), figRef: 'B14',
    o: ['Right main bronchus', 'Left main bronchus', 'Right superior lobar bronchus', 'Tracheal bifurcation'], a: 1,
    ex: 'B is the longer, more horizontal branch of the bifurcation: the left main bronchus.' },
  { t: 'q', id: 'B16', src: 'AC80 spot', keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac80s-lobar', 'AC80 spot test (recalled image).', 'ac80s', 10),
    o: ['Pulmonary artery', 'Main bronchus', 'Pulmonary vein', 'Lobar bronchus'], a: 3,
    ex: 'Inside the hilum, A points to a bronchus already inside the lung, one branch below the main bronchus: a lobar bronchus.' },
  { t: 'q', id: 'B17', src: 'AC81 spot', keep: true,
    q: 'Which structure delivers oxygenated blood from the lungs back to the heart?',
    fig: CVS.fig('ac81s-st10', 'AC81 spot test, station 10.', 'ac81s', 11),
    o: ['A', 'B', 'C', 'D'], a: 2,
    ex: 'Pulmonary veins carry oxygenated blood to the left atrium and sit lowest and most anterior in the lung root: C.' },
  { t: 'q', id: 'B18', src: 'AC81 spot', keep: true,
    q: 'Which structure is at the same vertebral level as the start of the conducting portion of the bronchial tree?',
    fig: CVS.fig('ac81s-st11', 'AC81 spot test, station 11.', 'ac81s', 12),
    o: ['C6', 'T1', 'Carina', 'Eparterial bronchus', 'Lingula'], a: 0,
    ex: 'The trachea begins at the lower border of the cricoid cartilage, at C6.',
    flag: 'Recall wording kept. The trachea starts at C6 and divides at the carina at about the sternal angle (T4–T5).' },
  { t: 'c', id: 'B-C4', title: 'Bronchial vessels and the azygos venous system', src: 'Lung & bronchi p.31–37',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Vessel</th><th>Right side</th><th>Left side</th></tr></thead><tbody>' +
      '<tr><td><b>Bronchial arteries</b> (supply tree, visceral pleura, pulmonary a.)</td><td><b>1 artery</b> from {{3rd right posterior intercostal}} artery</td><td><b>2 arteries</b> directly from {{thoracic aorta}} (at {{T5 or T6}})</td></tr>' +
      '<tr><td><b>Bronchial veins</b></td><td>Drain into {{azygos vein}}</td><td>Drain into {{accessory hemiazygos}} vein</td></tr></tbody></table></div>' +
      '<ul class="pts">' +
      '<li><b>Right-sided collector</b>: receives right posterior intercostal, right subcostal, and {{right ascending lumbar}} veins (plus both left-sided tributaries) and arches over the right lung root to empty into the {{SVC}}.</li>' +
      '<li><b>{{Hemiazygos vein}}</b>: drains left ascending lumbar, left subcostal, and {{left 9th–11th}} posterior intercostal veins, then crosses to the right side.</li>' +
      '<li><b>Upper left collector</b>: drains {{left 5th–8th}} posterior intercostal veins (and left bronchial veins), then crosses to the right side.</li></ul></div>' +
      CVS.fig('lung-azygos', 'Drainage of right and left bronchial veins into the posterior thoracic venous system.', 'lung', 34) + '</div>' },
  { t: 'q', id: 'B19', src: 'AC79 · AC81', core: true, keep: true,
    q: 'A patient diagnosed with a tumor immediately above the right lung root. Which structure is most likely to be affected?',
    o: ['Arch of the azygos vein', 'Superior vena cava', 'Brachiocephalic trunk', '1st posterior intercostal vein', 'Pulmonary trunk'], a: 0,
    ex: 'The azygos vein arches forward over the right lung root to join the SVC, so a mass sitting on top of the right root compresses it first.',
    flag: 'AC79 asked it as “a tumor above the right hilum” (keyed azygos vein).' },
  { t: 'q', id: 'B20', src: 'AC81 spot', keep: true,
    q: 'Which structure delivers deoxygenated blood from the posterior of the thorax to the heart?',
    fig: CVS.fig('ac81s-st12', 'AC81 spot test, station 12.', 'ac81s', 13),
    o: ['A', 'B', 'C', 'D'], a: 2,
    ex: 'C is the azygos vein running up beside the vertebral bodies; it drains the posterior chest wall into the SVC.' },
  { t: 'q', id: 'B21', src: 'AC81 spot', keep: true,
    q: 'Which structure delivers oxygenated blood to the bronchial tree?',
    fig: CVS.fig('ac81s-st12', 'AC81 spot test, station 12.', 'ac81s', 13), figRef: 'B20',
    o: ['A', 'B', 'C', 'D'], a: 1,
    ex: 'The bronchial arteries arise from the descending thoracic aorta and follow the bronchi; B points to this branch.',
    flag: 'Key from the AC81 spot short answer key.' },
  { t: 'c', id: 'B-C5', title: 'Thoracic lymphatics, pulmonary plexuses and splanchnic nerves', src: 'Lung & bronchi p.38–48',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Thoracic lymph nodes</b>: <b>parietal</b> ({{parasternal}}, intercostal, phrenic) vs <b>visceral</b> (anterior mediastinal/brachiocephalic, posterior mediastinal, {{tracheobronchial}}).</li>' +
      '<li><b>Lymphatic ducts</b>: the first parietal group plus anterior mediastinal and hilar/carinal nodes unite into bilateral {{bronchomediastinal}} trunks, which join the {{right lymphatic duct}} on the right and the {{thoracic duct}} (arising from the {{cisterna chyli}} at L2) on the left.</li>' +
      '<li><b>{{Phrenic nerve}} (C3–C5)</b>: motor and sensory to the diaphragm, plus sensory to pericardium and mediastinal pleura.</li>' +
      '<li><b>Pulmonary plexuses</b>: parasympathetic ({{vagus nerve}}) produces {{bronchoconstriction}} and vasodilation; sympathetic produces {{bronchodilation}} and vasoconstriction.</li>' +
      '<li><b>Thoracic splanchnic nerves</b>: {{greater splanchnic}} (T5–T9) and {{lesser splanchnic}} (T10–T11) supply abdominal viscera below the diaphragm.</li></ul></div>' +
      CVS.fig('lung-lymph', 'Major lymphatic trunks and main collecting ducts at the venous angles.', 'lung', 40) + '</div>' + '<p class="note"><b>From the past papers</b> · Lung lymph drains to the bronchopulmonary (hilar) nodes, then the nodes around the tracheal bifurcation (AC80). The stellate (cervicothoracic) ganglion sits at the top of the sympathetic trunk, on the neck of the first rib (AC79 spot).</p>' },
  { t: 'q', id: 'B22', src: 'AC80 · AC81', core: true, keep: true,
    q: 'A patient presents with chylothorax. Which structure is most likely to be affected?',
    o: ['Inferior vena cava', 'Thoracic duct', 'Azygos vein', 'Hemiazygos vein', 'Accessory hemiazygos vein'], a: 1,
    ex: 'Chylothorax is chyle (milky lymph) in the pleural cavity, almost always from injury or obstruction of the thoracic duct.',
    flag: 'AC80 asked it twice, once with a breast cancer patient.' },
  { t: 'q', id: 'B23', src: 'AC80', keep: true,
    q: 'Which lymph node receives fluid from the lung parenchyma?',
    o: ['Cervical duct', 'Bronchopulmonary duct', 'Axillary', 'Clavicular', 'Cardiac'], a: 1,
    ex: 'Lymph from the lung drains to the bronchopulmonary (hilar) nodes, then to the tracheobronchial nodes and the bronchomediastinal trunks.',
    flag: 'The recall wrote “duct”; the intended answer is the bronchopulmonary (hilar) lymph nodes (AC80 key).' },
  { t: 'q', id: 'B24', src: 'AC79', keep: true,
    q: 'Lymph from the right upper quadrant of the body enters the main circulatory system from which vessel?',
    o: ['Subclavian vein', 'Superior vena cava', 'Internal jugular vein', 'Brachiocephalic vein', 'Retromandibular vein'], a: 0,
    ex: 'The right lymphatic duct empties at the right venous angle, where the right subclavian vein meets the internal jugular vein.',
    flag: 'Keyed subclavian vein in the PS81 edit (an older AC79 key gave brachiocephalic vein). The duct ends at the junction of subclavian and internal jugular veins, the start of the brachiocephalic vein.' },
  { t: 'q', id: 'B25', src: 'AC79 spot', keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st18', 'AC79 spot test, station 18.', 'ac79s', 20),
    o: ['Left phrenic nerve', 'Thoracic duct', 'Stellate ganglion', 'Internal thoracic artery'], a: 2,
    ex: 'A is the large ganglion at the top of the sympathetic trunk, on the neck of the first rib: the stellate (cervicothoracic) ganglion.' },
  { t: 'q', id: 'B26', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st18', 'AC79 spot test, station 18.', 'ac79s', 20), figRef: 'B25',
    o: ['Thoracic duct', 'Thoracic sympathetic trunk', 'Azygos vein', 'Right vagus nerve'], a: 0,
    ex: 'B is the thin, beaded vessel between the aorta and the azygos vein on the vertebral bodies: the thoracic duct.' }
]});
