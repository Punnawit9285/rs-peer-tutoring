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
  { t: 'q', id: 'B1', src: 'Lung & bronchi p.3, 6', core: true,
    q: 'At the midclavicular, midaxillary, and paravertebral lines, the inferior borders of the lung and parietal pleura lie at which ribs, and where is the pleural cupola located?',
    o: ['Lung: ribs 6, 8, 10; Pleura: ribs 8, 10, 12; Cupola: 1 inch above the medial third of the clavicle', 'Lung: ribs 8, 10, 12; Pleura: ribs 6, 8, 10; Cupola: 1 inch below the lateral third of the clavicle', 'Lung: ribs 4, 6, 8; Pleura: ribs 6, 8, 10; Cupola: at the sternal angle', 'Lung: ribs 6, 8, 10; Pleura: ribs 7, 9, 11; Cupola: above the acromioclavicular joint', 'Both lung and pleura end at ribs 6, 8, 10 across all three lines'], a: 0,
    ex: 'Remember the two-rib gap (costodiaphragmatic recess): the lung ends at ribs 6, 8, 10 and the parietal pleura at ribs 8, 10, 12 along the midclavicular, midaxillary, and paravertebral lines. The cupola projects 1 inch above the medial third of the clavicle.' },
  { t: 'q', id: 'B2', src: 'Lung & bronchi p.9–10', core: true,
    q: 'In the Lung & Bronchial Tree lecture, a pleural tap (thoracentesis) into the costodiaphragmatic recess at the midaxillary line is performed at which intercostal spaces, and what structures are at risk if the needle is inserted too deep or at the wrong rib border?',
    o: ['8th, 9th, or 10th ICS above the superior border of the rib; risk to lung, liver, spleen, diaphragm, and intercostal neurovascular bundle', '4th or 5th ICS below the inferior border of the rib; risk only to the internal thoracic artery', '2nd ICS at the midclavicular line; risk to the cupola', '11th or 12th ICS below the 12th rib; risk only to the trachea', '6th ICS at the sternal border; risk to the right main bronchus'], a: 0,
    ex: 'Lung p.10 specifies the 8th, 9th, or 10th ICS at the midaxillary line above the superior margin of a rib; improper placement risks puncturing the lung, diaphragm, liver (right), spleen (left), or intercostal VAN bundle.' },
  { t: 'tf', id: 'B3', src: 'Lung & bronchi p.2, 8',
    q: 'Extrapleural fascia is a layer of loose connective tissue that separates the visceral pleura from the lung parenchyma, and accumulation of lymph in the pleural cavity is termed pyothorax.', a: false,
    ex: 'False. Extrapleural fascia separates the parietal pleura from the overlying thoracic wall (visceral pleura is firmly attached to the lung). Lymph in the pleural space is chylothorax; pus is pyothorax (empyema).' },

  { t: 'c', id: 'B-C2', title: 'Lung surfaces, fissures and mediastinal impressions', src: 'Lung & bronchi p.11–20',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Lobes &amp; fissures</b>: right lung has 3 lobes divided by oblique and {{horizontal}} fissures; left lung has 2 lobes divided by an oblique fissure, with an anterior {{cardiac notch}} and {{lingula}} on the superior lobe.</li>' +
      '<li><b>Root (hilum) &amp; sleeve</b>: transmits bronchi, pulmonary &amp; bronchial vessels, lymphatics, and plexuses; inferiorly the parietal-to-visceral reflection hangs down as the {{pulmonary ligament}}.</li>' +
      '<li><b>Right mediastinal impressions</b>: {{arch of azygos vein}} arching over the root, {{superior vena cava}} (SVC), {{brachiocephalic vein}}, and {{esophagus}} behind the hilum.</li>' +
      '<li><b>Left mediastinal impressions</b>: {{aortic arch}} above the root, {{descending aorta}} behind, {{subclavian artery}} sulcus heading to the apex, and a deep cardiac impression.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('lung-impressions', 'Mediastinal surface of the right lung showing venous and esophageal grooves.', 'lung', 18) + CVS.fig('lung-impressions-lt', 'Mediastinal surface of the left lung showing arterial grooves and tongue-like projection.', 'lung', 20) + '</div></div>' },
  { t: 'q', id: 'B4', src: 'Lung & bronchi p.17–20', core: true,
    q: 'Which pairing of mediastinal impressions on the right versus left lung is CORRECT?',
    o: ['Right lung: arch of azygos vein, SVC, and esophagus; Left lung: aortic arch, descending aorta, and subclavian artery', 'Right lung: aortic arch and descending aorta; Left lung: arch of azygos vein and SVC', 'Right lung: lingula and cardiac notch; Left lung: horizontal fissure and SVC groove', 'Right lung: thoracic duct and left subclavian artery; Left lung: inferior vena cava and azygos arch', 'Both lungs have symmetrical grooves for the aortic arch and arch of the azygos vein'], a: 0,
    ex: 'The right mediastinal surface is grooved by venous structures (arch of azygos vein over the hilum, SVC, brachiocephalic vein) and the esophagus; the left mediastinal surface is grooved by arterial structures (aortic arch, descending aorta, subclavian artery) and has a deep cardiac notch with the lingula.' },
  { t: 'tf', id: 'B5', src: 'Lung & bronchi p.14–15',
    q: 'The pulmonary ligament is a double-layered fold of pleura extending inferiorly from the root of the lung on the mediastinal surface.', a: true,
    ex: 'True. Below the root of the lung, the continuity between parietal and visceral pleura forms the sleeve-like pulmonary ligament on the mediastinal surface.' },

  { t: 'c', id: 'B-C3', title: 'Tracheobronchial tree, sternal angle and hilar relations', src: 'Lung & bronchi p.21–30',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Conducting vs respiratory zones</b>: conducting part runs from trachea → main → lobar → segmental bronchi → {{terminal bronchioles}}; respiratory part begins at {{respiratory bronchioles}} → alveolar ducts → alveolar sacs → alveoli.</li>' +
      '<li><b>Sternal angle (of Louis, {{DT4}})</b>: marks the manubriosternal joint, 2nd rib, beginning/end of aortic arch, inferior border of superior mediastinum, and tracheal bifurcation ({{carina}}; trachea length given as {{12 cm}} here vs 10 cm in URT p.41).</li>' +
      '<li><b>Main bronchi &amp; segments</b>: right main bronchus is {{wider, shorter, and more vertical}} (foreign body predisposition) and supplies {{10 segments}} (3+2+5); left lung has {{8 segments}} (4+4).</li>' +
      '<li><b>Hilar relationship to pulmonary artery</b>: the right superior lobar bronchus arises above the right pulmonary artery and is called the {{eparterial bronchus}}; all other lobar bronchi pass below the pulmonary artery ({{hyparterial bronchi}}).</li></ul></div>' +
      CVS.fig('lung-hilum', 'Comparison of right and left hilar structures and lobar bronchial positions.', 'lung', 28) + '</div>' },
  { t: 'q', id: 'B6', src: 'Lung & bronchi p.24', core: true,
    q: 'Which anatomical landmark does NOT lie at the horizontal plane of the sternal angle (angle of Louis, disc T4–T5)?',
    o: ['Origin of the trachea at the inferior border of the cricoid cartilage (C6)', 'Articulation of the 2nd costal cartilages with the sternum', 'Tracheal bifurcation at the carina', 'Beginning and ending of the aortic arch', 'Inferior border of the superior mediastinum'], a: 0,
    ex: 'The sternal angle (DT4) marks the manubriosternal junction, 2nd rib, beginning and end of the aortic arch, tracheal bifurcation (carina), and inferior border of the superior mediastinum. The trachea begins at C6 (cricoid cartilage).' },
  { t: 'q', id: 'B7', src: 'Lung & bronchi p.27–28', core: true,
    q: 'What is the "eparterial bronchus", and how many bronchopulmonary segments are present in the right and left lungs in this lecture?',
    o: ['Right superior lobar bronchus (passing superior to the right pulmonary artery); 10 right segments (3+2+5) and 8 left segments (4+4)', 'Left superior lobar bronchus (passing superior to the left pulmonary artery); 8 right segments and 10 left segments', 'Right middle lobar bronchus; 10 segments in each lung', 'Right main bronchus before the carina; 12 right segments and 8 left segments', 'Left inferior lobar bronchus; 9 right segments and 9 left segments'], a: 0,
    ex: 'The eparterial bronchus is the right superior lobar bronchus because it lies superior to the right pulmonary artery; all other lobar bronchi are hyparterial (below the pulmonary artery). The right lung has 10 segments (3 upper, 2 middle, 5 lower) and the left lung has 8 segments (4 upper, 4 lower).' },
  { t: 'q', id: 'B8', src: 'Lung & bronchi p.22, 29',
    q: 'Where does the conducting part of the tracheobronchial tree end and the respiratory (gas-exchanging) part begin?',
    o: ['Ends at terminal bronchioles; begins at respiratory bronchioles', 'Ends at segmental (tertiary) bronchi; begins at terminal bronchioles', 'Ends at lobar (secondary) bronchi; begins at alveolar ducts', 'Ends at respiratory bronchioles; begins at alveolar sacs', 'Ends at the carina; begins at main bronchi'], a: 0,
    ex: 'The conducting part ends at the terminal bronchioles; the respiratory part begins with the respiratory bronchioles, followed by alveolar ducts, alveolar sacs, and alveoli.' },

  { t: 'c', id: 'B-C4', title: 'Bronchial vessels and the azygos venous system', src: 'Lung & bronchi p.31–37',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Vessel</th><th>Right side</th><th>Left side</th></tr></thead><tbody>' +
      '<tr><td><b>Bronchial arteries</b> (supply tree, visceral pleura, pulmonary a.)</td><td><b>1 artery</b> from {{3rd right posterior intercostal}} artery</td><td><b>2 arteries</b> directly from {{thoracic aorta}} (at {{T5 or T6}})</td></tr>' +
      '<tr><td><b>Bronchial veins</b></td><td>Drain into {{azygos vein}}</td><td>Drain into {{accessory hemiazygos}} vein</td></tr></tbody></table></div>' +
      '<ul class="pts">' +
      '<li><b>Right-sided collector</b>: receives right posterior intercostal, right subcostal, and {{right ascending lumbar}} veins (plus both left-sided tributaries) and arches over the right lung root to empty into the {{SVC}}.</li>' +
      '<li><b>{{Hemiazygos vein}}</b>: drains left ascending lumbar, left subcostal, and {{left 9th–11th}} posterior intercostal veins, then crosses to the right side.</li>' +
      '<li><b>Upper left collector</b>: drains {{left 5th–8th}} posterior intercostal veins (and left bronchial veins), then crosses to the right side.</li></ul></div>' +
      CVS.fig('lung-azygos', 'Drainage of right and left bronchial veins into the posterior thoracic venous system.', 'lung', 34) + '</div>' },
  { t: 'q', id: 'B9', src: 'Lung & bronchi p.33–34', core: true,
    q: 'What are the usual arterial origins and venous drainage targets of the right and left bronchial vessels?',
    o: ['Right bronchial a. from 3rd right posterior intercostal a., vein → azygos v.; Left bronchial aa. (2) from aorta at T5/T6, vein → accessory hemiazygos v.', 'Right bronchial a. from thoracic aorta, vein → SVC; Left bronchial a. from internal thoracic a., vein → hemiazygos v.', 'Both right and left bronchial arteries arise from the pulmonary trunk and drain into the left atrium', 'Right bronchial a. from subclavian a., vein → brachiocephalic v.; Left bronchial a. from 3rd left intercostal a., vein → coronary sinus', 'Right bronchial aa. (2) from aorta, vein → accessory hemiazygos v.; Left bronchial a. (1) from 3rd right intercostal a., vein → azygos v.'], a: 0,
    ex: 'The single right bronchial artery arises from the 3rd right posterior intercostal artery, whereas the two left bronchial arteries arise directly from the thoracic aorta at T5–T6. Right bronchial veins drain into the azygos vein; left bronchial veins drain into the accessory hemiazygos vein.' },
  { t: 'q', id: 'B10', src: 'Lung & bronchi p.36–37',
    q: 'Which posterior intercostal veins drain into the accessory hemiazygos vein versus the hemiazygos vein?',
    o: ['Accessory hemiazygos: left 5th–8th intercostal veins; Hemiazygos: left 9th–11th intercostal veins (plus left subcostal and ascending lumbar)', 'Accessory hemiazygos: left 9th–11th intercostal veins; Hemiazygos: left 5th–8th intercostal veins', 'Accessory hemiazygos: right 5th–8th intercostal veins; Hemiazygos: right 9th–11th intercostal veins', 'Both drain only the right posterior intercostal veins into the IVC', 'Accessory hemiazygos: left 1st–4th intercostal veins; Hemiazygos: left 5th–12th intercostal veins'], a: 0,
    ex: 'On the left side, the 5th–8th posterior intercostal veins drain into the accessory hemiazygos vein, whereas the 9th–11th posterior intercostal veins (with left subcostal and left ascending lumbar veins) form the hemiazygos vein; both cross to join the azygos vein.' },

  { t: 'c', id: 'B-C5', title: 'Thoracic lymphatics, pulmonary plexuses and splanchnic nerves', src: 'Lung & bronchi p.38–48',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Thoracic lymph nodes</b>: <b>parietal</b> ({{parasternal}}, intercostal, phrenic) vs <b>visceral</b> (anterior mediastinal/brachiocephalic, posterior mediastinal, {{tracheobronchial}}).</li>' +
      '<li><b>Lymphatic ducts</b>: the first parietal group plus anterior mediastinal and hilar/carinal nodes unite into bilateral {{bronchomediastinal}} trunks, which join the {{right lymphatic duct}} on the right and the {{thoracic duct}} (arising from the {{cisterna chyli}} at L2) on the left.</li>' +
      '<li><b>{{Phrenic nerve}} (C3–C5)</b>: motor and sensory to the diaphragm, plus sensory to pericardium and mediastinal pleura.</li>' +
      '<li><b>Pulmonary plexuses</b>: parasympathetic ({{vagus nerve}}) produces {{bronchoconstriction}} and vasodilation; sympathetic produces {{bronchodilation}} and vasoconstriction.</li>' +
      '<li><b>Thoracic splanchnic nerves</b>: {{greater splanchnic}} (T5–T9) and {{lesser splanchnic}} (T10–T11) supply abdominal viscera below the diaphragm.</li></ul></div>' +
      CVS.fig('lung-lymph', 'Major lymphatic trunks and main collecting ducts at the venous angles.', 'lung', 40) + '</div>' },
  { t: 'q', id: 'B11', src: 'Lung & bronchi p.38–42', core: true,
    q: 'Which set of lymph nodes drains into the bronchomediastinal lymph trunks, and where does the thoracic duct originate?',
    o: ['Parasternal, anterior mediastinal, and tracheobronchial nodes; thoracic duct originates from the cisterna chyli at L2', 'Only intercostal and phrenic nodes; thoracic duct originates at the sternal angle (T4)', 'Cervical and axillary nodes only; thoracic duct originates in the right atrium', 'Posterior mediastinal nodes only; thoracic duct originates at the cricoid cartilage (C6)', 'Inguinal nodes directly; thoracic duct originates at T12'], a: 0,
    ex: 'The parasternal (parietal), anterior mediastinal, and tracheobronchial (visceral) nodes drain into the right and left bronchomediastinal lymph trunks. The thoracic duct begins at the cisterna chyli at vertebral level L2.' },
  { t: 'q', id: 'B12', src: 'Lung & bronchi p.43–47', core: true,
    q: 'In the pulmonary nerve plexuses, what are the opposing effects of parasympathetic (vagal) versus sympathetic stimulation, and which thoracic sympathetic ganglia give rise to the greater and lesser splanchnic nerves?',
    o: ['Parasympathetic: bronchoconstriction & vasodilation; Sympathetic: bronchodilation & vasoconstriction; Greater splanchnic: T5–T9, Lesser splanchnic: T10–T11', 'Parasympathetic: bronchodilation & vasoconstriction; Sympathetic: bronchoconstriction & vasodilation; Greater splanchnic: T1–T4, Lesser splanchnic: T5–T9', 'Parasympathetic: bronchodilation & vasodilation; Sympathetic: bronchoconstriction & vasoconstriction; Greater splanchnic: C3–C5, Lesser splanchnic: T12', 'Both divisions cause bronchodilation; Greater splanchnic: T10–T11, Lesser splanchnic: T5–T9', 'Parasympathetic supplies motor fibers to the diaphragm; Sympathetic supplies sensory fibers to the pericardium'], a: 0,
    ex: 'Parasympathetic (vagus) fibers cause bronchoconstriction and pulmonary vasodilation; sympathetic fibers cause bronchodilation and vasoconstriction. The greater splanchnic nerve arises from T5–T9 ganglia and the lesser splanchnic nerve from T10–T11 ganglia.' },
  { t: 'tf', id: 'B13', src: 'Lung & bronchi p.43',
    q: 'The phrenic nerve (C3–C5) supplies only motor fibers to the diaphragm and carries no sensory fibers from the thorax.', a: false,
    ex: 'False. The phrenic nerve (C3–C5) carries both motor and sensory fibers to the diaphragm as well as sensory fibers to the fibrous pericardium and mediastinal pleura.' },
  { t: 'open', id: 'B14', src: 'Lung & bronchi p.17–20, 28, 33–34',
    q: 'Contrast the right and left lungs across three exam-favorite categories: (1) major vascular/visceral impressions on the mediastinal surface, (2) relationship of the superior lobar bronchus to the pulmonary artery at the hilum, and (3) origin and venous drainage of the bronchial vessels.',
    ans: '(1) Mediastinal impressions — Right lung: arch of azygos vein, SVC, brachiocephalic vein, and esophagus; Left lung: aortic arch, descending aorta, subclavian artery, and deep cardiac impression (with cardiac notch & lingula). (2) Hilum — Right superior lobar bronchus is EPARTERIAL (above right pulmonary artery); left superior lobar bronchus (and right middle/inferior) is HYPARTERIAL (below pulmonary artery). (3) Bronchial vessels — Right: 1 artery from 3rd right posterior intercostal a., vein drains to azygos vein; Left: 2 arteries from thoracic aorta at T5–T6, vein drains to accessory hemiazygos vein.' }
]});
