/* Section W: Thoracic Wall & Diaphragm (681027 Thoracic wall & diaphragm.pdf, 30 pages). */
CVS.add({ id: 'W', short: 'Thoracic wall', title: 'Thoracic Wall, Intercostal Space, Pleura & Diaphragm', kind: 'Lecture',
  blurb: 'Sternum and rib articulations, intercostal muscle layers, accessory muscles of respiration, the intercostal VAN bundle and nerve block, thoracocentesis vs thoracostomy, flail chest, and diaphragm.',
  items: [
  { t: 'c', id: 'W-C1', title: 'Thoracic cage: sternum, rib classes and vertebral joints', src: 'Thoracic wall p.2–6',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Sternum</b>: {{manubrium}} (articulates with clavicle and 1st rib), {{sternal angle}} of Louis (junction with sternal body at the {{2nd rib}}), sternal body, and {{xiphoid process}}.</li>' +
      '<li><b>12 pairs of ribs</b>: {{true ribs}} (ribs 1–7, attach directly to sternum via costal cartilages), {{false ribs}} (ribs 8–12), including {{floating ribs}} (ribs 11–12, free anterior ends).</li>' +
      '<li><b>Typical ribs ({{ribs 3–9}})</b>: head with two articular facets separated by a crest, neck, tubercle, and shaft with an inferior {{costal groove}}.</li>' +
      '<li><b>Posterior articulations</b>: rib head articulates with {{vertebral bodies}} (demifacets); rib tubercle articulates with the {{transverse process}} of the corresponding thoracic vertebra.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('wall-sternum', 'Divisions of the sternum and the sternal junction at the second costal cartilage.', 'wall', 3) + CVS.fig('wall-rib', 'Costovertebral and costotransverse articulations of a typical rib.', 'wall', 6) + '</div></div>' },
  { t: 'q', id: 'W1', src: 'Thoracic wall p.3–4', core: true,
    q: 'The sternal angle (angle of Louis) is the palpable junction between the manubrium and body of the sternum and serves as the surface landmark for counting which rib?',
    o: ['2nd rib', '1st rib', '4th rib', '7th rib', '8th rib'], a: 0,
    ex: 'The 2nd costal cartilage articulates at the sternal angle (of Louis), making it the clinical landmark for counting ribs and intercostal spaces.' },
  { t: 'q', id: 'W2', src: 'Thoracic wall p.4–6',
    q: 'Which statement accurately describes the classification and articulations of ribs?',
    o: ['Typical ribs (3–9) articulate via their head with vertebral body demifacets and via their tubercle with the transverse process', 'True ribs are ribs 1–8 and floating ribs are ribs 9–12', 'The tubercle of a typical rib articulates with the sternal angle', 'False ribs (8–12) all lack costal cartilages anteriorly', 'The costal groove lies along the superior border of a typical rib'], a: 0,
    ex: 'True ribs are 1–7, false ribs are 8–12 (with 11–12 floating), and typical ribs are 3–9. The head articulates with vertebral demifacets and the tubercle with the transverse process.' },

  { t: 'c', id: 'W-C2', title: 'Intercostal muscle layers and transversus thoracis', src: 'Thoracic wall p.7–11',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Layer</th><th>Fiber direction &amp; extent</th><th>Respiratory action</th></tr></thead><tbody>' +
      '<tr><td><b>{{External intercostal}}</b> (outermost)</td><td>{{Inferiorly and anteriorly}} ("hands in pockets"); vertebral column to costochondral junction, then {{external intercostal membrane}}</td><td>{{Elevates ribs}} during inspiration</td></tr>' +
      '<tr><td><b>{{Internal intercostal}}</b> (middle)</td><td>{{Superiorly and anteriorly}}; sternum to costal angle, then {{internal intercostal membrane}}</td><td>{{Depresses ribs}} during forced expiration</td></tr>' +
      '<tr><td><b>{{Innermost intercostal}}</b> (deepest)</td><td>Same fiber orientation as middle layer; occupies lateral and back spaces</td><td>Assists rib depression</td></tr></tbody></table></div>' +
      '<ul class="pts"><li><b>{{Transversus thoracis}}</b>: deep anterior sheet arising from lower sternal body and xiphoid to insert on {{ribs 2–6}}; innervated by intercostal nerves 3–6 to pull ribs down in forced expiration.</li></ul></div>' +
      CVS.fig('wall-intercostal', 'Three layers of intercostal muscles and their membranes in cross-section.', 'wall', 10) + '</div>' },
  { t: 'q', id: 'W3', src: 'Thoracic wall p.8–9', core: true,
    q: 'How do the external intercostal muscles differ from the internal intercostal muscles?',
    o: ['External fibers run inferiorly and anteriorly to elevate ribs in inspiration, and are replaced anteriorly by membrane from the costochondral junction to the sternum', 'External fibers run superiorly and anteriorly to depress ribs in forced expiration', 'Internal fibers run inferiorly and anteriorly and are replaced anteriorly by membrane', 'External fibers lie deep to the intercostal neurovascular bundle', 'Internal fibers elevate the ribs during quiet inspiration'], a: 0,
    ex: 'External intercostals run inferoanteriorly, elevate ribs during inspiration, and become the external (anterior) intercostal membrane between the costochondral junction and sternum. Internal intercostals run superoanteriorly and depress ribs in forced expiration.' },
  { t: 'tf', id: 'W4', src: 'Thoracic wall p.11',
    q: 'The transversus thoracis muscle lies in the innermost plane of the anterior thoracic wall, inserts on ribs 2–6, and depresses the ribs during forced expiration.', a: true,
    ex: 'True. Transversus thoracis originates from the xiphoid process and lower sternal body, inserts on costal cartilages 2–6, and depresses the ribs during forced expiration.' },

  { t: 'c', id: 'W-C3', title: 'Mechanics of quiet vs forceful breathing and accessory muscles', src: 'Thoracic wall p.12–14',
    html: '<div class="stack"><ul class="pts">' +
      '<li><b>Quiet (normal) inspiration</b>: driven primarily by contraction of the {{diaphragm}} together with the external intercostal muscles.</li>' +
      '<li><b>Quiet (normal) expiration</b>: passive process driven by {{elastic recoil}} of the lungs and relaxation of the inspiratory muscles.</li>' +
      '<li><b>Accessory muscles of {{forceful inspiration}}</b> (exercise or respiratory distress): {{sternocleidomastoid}} (SCM), {{scalene muscles}}, {{pectoralis minor}}, {{serratus anterior}} &amp; posterior, and {{levator costarum}}.</li>' +
      '<li><b>Muscles of {{forceful expiration}}</b>: internal and innermost intercostals, transversus thoracis, and {{abdominal muscles}} (rectus abdominis, external oblique, internal oblique).</li></ul></div>' },
  { t: 'q', id: 'W5', src: 'Thoracic wall p.12–14', core: true,
    q: 'Which group consists entirely of accessory muscles used during FORCEFUL INSPIRATION?',
    o: ['Sternocleidomastoid, scalenes, pectoralis minor, serratus anterior, and levator costarum', 'Internal intercostals, transversus thoracis, and rectus abdominis', 'External oblique, internal oblique, and innermost intercostals', 'Diaphragm relaxation and lung elastic recoil only', 'Transversus thoracis, scalenes, and rectus abdominis'], a: 0,
    ex: 'Forceful inspiration recruits SCM, scalenes, pectoralis minor, serratus anterior/posterior, and levator costarum. Internal/innermost intercostals, transversus thoracis, and abdominal muscles drive forceful expiration.' },
  { t: 'tf', id: 'W6', src: 'Thoracic wall p.12, 14',
    q: 'Normal quiet expiration requires active contraction of the internal intercostal and rectus abdominis muscles.', a: false,
    ex: 'False. Normal quiet expiration is passive, resulting from relaxation of the diaphragm/thoracic wall and elastic recoil of the lungs. Internal intercostals and abdominal muscles act during forceful expiration.' },

  { t: 'c', id: 'W-C4', title: 'Intercostal neurovascular bundle (VAN), vessels and nerve block', src: 'Thoracic wall p.15–20',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Plane &amp; order</b>: the main neurovascular bundle runs in the costal groove along the inferior border of the rib, between the {{internal and innermost}} intercostal layers, arranged superior-to-inferior as {{VAN}} (Vein, Artery, Nerve).</li>' +
      '<li><b>Arteries</b>: {{anterior intercostal}} arteries branch from the {{internal thoracic artery}}; {{posterior intercostal}} arteries arise from the thoracic {{aorta}}.</li>' +
      '<li><b>Veins</b>: anterior veins drain to the internal thoracic vein; posterior veins drain to the {{azygos}} vein on the right and {{hemiazygos and accessory hemiazygos}} veins on the left.</li>' +
      '<li><b>Clinical needle placement</b>: an {{intercostal nerve block}} (or herpes zoster dermatomal pain) targets the {{lower border}} of the rib, whereas pleural procedures pass along the {{upper border}} of the rib below to avoid the bundle.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('wall-van', 'Arrangement of Vein, Artery, and Nerve in the costal groove.', 'wall', 18) + CVS.fig('wall-block', 'Infiltration at the inferior costal margin for an intercostal block.', 'wall', 20) + '</div></div>' },
  { t: 'q', id: 'W7', src: 'Thoracic wall p.17–18', core: true,
    q: 'In what muscular plane and in what superior-to-inferior order does the main intercostal neurovascular bundle travel in the costal groove?',
    o: ['Between internal and innermost intercostal muscles; Vein → Artery → Nerve (VAN)', 'Between external and internal intercostal muscles; Nerve → Artery → Vein (NAV)', 'Deep to innermost intercostal muscle on the superior rib border; Artery → Vein → Nerve', 'Between external and internal intercostal muscles; Vein → Artery → Nerve (VAN)', 'Subcutaneously superficial to external intercostal muscle; Vein → Nerve → Artery'], a: 0,
    ex: 'The intercostal vein, artery, and nerve (VAN from superior to inferior) run sheltered in the costal groove between the internal and innermost intercostal muscle layers.' },
  { t: 'q', id: 'W8', src: 'Thoracic wall p.15–16',
    q: 'Anterior intercostal arteries arise directly from which vessel, and into which venous system do the right posterior intercostal veins drain?',
    o: ['Internal thoracic artery; azygos vein', 'Thoracic aorta; internal thoracic vein', 'Subclavian artery; hemiazygos vein', 'Thoracic aorta; accessory hemiazygos vein', 'Axillary artery; brachiocephalic vein'], a: 0,
    ex: 'Anterior intercostal arteries branch from the internal thoracic artery (veins drain to the internal thoracic vein). Posterior intercostal arteries branch from the aorta, and right posterior intercostal veins drain into the azygos vein.' },
  { t: 'q', id: 'W9', src: 'Thoracic wall p.20, 26', core: true,
    q: 'Contrast the needle/tube entry site relative to the rib for an intercostal nerve block versus a tube thoracostomy:',
    o: ['Intercostal nerve block at the lower border of the rib; thoracostomy at the upper border of the rib', 'Both are performed at the lower border of the rib', 'Both are performed at the upper border of the rib', 'Intercostal nerve block at the upper border of the rib; thoracostomy at the lower border of the rib', 'Intercostal nerve block through the costal cartilage; thoracostomy through the sternal angle'], a: 0,
    ex: 'An intercostal nerve block targets the nerve in the costal groove at the lower border of the rib, whereas thoracostomy (and thoracocentesis) enters at the upper border of the lower rib to avoid injuring the VAN bundle.' },

  { t: 'c', id: 'W-C5', title: 'Pleural procedures, flail chest and the diaphragm', src: 'Thoracic wall p.21–30',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>{{Thoracocentesis}} (pleural tap)</b>: needle aspiration of pleural effusion at the {{7th or 8th}} intercostal space along the {{posterior axillary}} or mid-scapular line (note: Lung p.10 teaches 8th–10th ICS at the midaxillary line).</li>' +
      '<li><b>{{Tube thoracostomy}} (chest drain)</b>: evacuates air ({{pneumothorax}}) or blood ({{hemothorax}}) via the {{4th or 5th}} intercostal space at the {{anterior or mid-axillary}} line, hugging the upper rib border.</li>' +
      '<li><b>{{Flail chest}}</b>: multiple rib fractures with isolated segment causing {{paradoxical movement}} (drawn inward on inspiration, pushed outward on expiration).</li>' +
      '<li><b>Diaphragm</b>: dome with central tendon, right &amp; left crura (L2–L4), and 3 major openings (IVC in central tendon, esophageal hiatus in right crus, aortic hiatus behind crura); motor &amp; central sensory via {{phrenic nerve}} (C3–C5), peripheral sensory via lower 6 intercostal nerves.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('wall-flail', 'Isolated rib segment moving inward during inspiration and outward during expiration.', 'wall', 28) + CVS.fig('wall-diaphragm', 'Inferior view of the diaphragm showing crura, central tendon, and major openings.', 'wall', 29) + '</div></div>' },
  { t: 'q', id: 'W10', src: 'Thoracic wall p.23, 26', core: true,
    q: 'According to the thoracic wall lecture, what are the standard anatomical locations for (1) needle thoracocentesis for pleural effusion and (2) tube thoracostomy (chest drain) for pneumothorax/hemothorax?',
    o: ['Thoracocentesis: 7th/8th ICS at posterior axillary or mid-scapular line; Thoracostomy: 4th/5th ICS at anterior or mid-axillary line', 'Thoracocentesis: 2nd ICS at midclavicular line; Thoracostomy: 9th ICS at paravertebral line', 'Thoracocentesis: 4th/5th ICS at anterior axillary line; Thoracostomy: 7th/8th ICS at mid-scapular line', 'Both are performed at the 4th/5th ICS in the midclavicular line', 'Thoracocentesis: 11th ICS at vertebral border; Thoracostomy: 1st ICS at sternal border'], a: 0,
    ex: 'In the Thoracic Wall lecture, thoracocentesis is placed at the 7th or 8th ICS (posterior axillary or mid-scapular line), whereas tube thoracostomy is placed at the 4th or 5th ICS (anterior or mid-axillary line) at the upper border of the rib.' },
  { t: 'q', id: 'W11', src: 'Thoracic wall p.27–28', core: true,
    q: 'A patient with blunt chest trauma has fractures of multiple adjacent ribs in two places, producing an isolated chest wall segment (flail chest). How does the flail segment move during respiration?',
    o: ['Paradoxical movement: pulled inward during inspiration (negative intrathoracic pressure) and pushed outward during expiration', 'Pulled outward during inspiration and pulled inward during expiration', 'Remains completely immobile throughout inspiration and expiration', 'Moves upward only during passive expiration', 'Collapses only during forced coughing'], a: 0,
    ex: 'In flail chest, the unattached segment moves paradoxically in response to intrathoracic pressure: sucked inward during inspiration and pushed outward during expiration, severely impairing ventilation.' },
  { t: 'tf', id: 'W12', src: 'Thoracic wall p.29–30',
    q: 'In the diaphragm, the inferior vena cava passes through the central tendon, whereas the esophageal hiatus is formed by muscular fibers of the right crus.', a: true,
    ex: 'True. As shown on the diaphragm slides, the caval opening lies within the central tendon (to the right of midline), the esophageal hiatus passes through the muscular sling of the right crus, and the abdominal aorta passes posteriorly between the right and left crura.' },
  { t: 'open', id: 'W13', src: 'Thoracic wall p.20, 23, 26; Lung & bronchi p.10',
    q: 'Compare (a) needle placement relative to the rib for intercostal nerve block vs pleural tap/chest tube, and (b) the intercostal space taught for thoracocentesis in the Thoracic Wall lecture vs the Lung & Bronchial Tree lecture.',
    ans: '(a) Intercostal nerve block is injected at the LOWER border of the rib to reach the VAN bundle in the costal groove; pleural tap and chest tube are inserted at the UPPER border of the rib to avoid the neurovascular bundle. (b) Thoracic Wall p.23 gives the 7th or 8th ICS at the posterior axillary or mid-scapular line; Lung & Bronchial Tree p.10 gives the 8th, 9th, or 10th ICS at the midaxillary line into the costodiaphragmatic recess.' }
]});
