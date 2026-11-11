/* Section M: Mechanics of breathing (Mechanics handout, slides 1–44). */
CVS.add({ id: 'M', short: 'Mechanics', title: 'Mechanics of Breathing: Pressures, Compliance, Resistance & Work', kind: 'Lecture',
  blurb: 'Inspiratory and expiratory muscles, pleural and alveolar pressures in spontaneous vs positive-pressure ventilation, surfactant and the lung-thorax relaxation curve, compliance, Poiseuille law and dynamic compression, breath sounds, and work of breathing.',
  items: [
  { t: 'c', id: 'M-C1', title: 'Respiratory muscles and pressures in spontaneous vs positive-pressure breathing', src: 'Mechanics p.1–12',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Muscles</b><ul><li>Quiet in: {{diaphragm}} + external intercostals. Quiet out: passive recoil.</li>' +
      '<li>Forced out: {{abdominal muscles}} (rectus, obliques) push the dome up.</li></ul></li>' +
      '<li><b>At rest (FRC)</b><ul><li>Lung pulls in, chest wall springs out → pleural pressure {{negative}} (about −5 cmH<sub>2</sub>O).</li>' +
      '<li>Alveolar pressure = {{0}} → no flow.</li></ul></li>' +
      '<li><b>Breathing in</b>: chest expands → pleural pressure falls further → alveolar pressure {{below 0}} → air flows in (Boyle).</li>' +
      '<li>Flow is fastest in {{mid-inspiration}}; it stops at end-inspiration (alveolar pressure back to 0).</li>' +
      '<li><b>Transpulmonary pressure</b> = alveolar − pleural → end-inspiration: 0 − (−8) = {{+8}}.</li>' +
      '<li><b>Ventilator (PPV)</b>: blows air in → pleural pressure {{rises}} instead of falling.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('mech-muscles', 'Muscles of inspiration (left) and muscles of expiration (right).', 'mech', 2) +
      CVS.fig('mech-cycle', 'Volume, intrapleural pressure, and alveolar pressure changes during a normal spontaneous breath.', 'mech', 9) + '</div></div>' +
      CVS.fig('mech-ppv', 'Pressures during passive positive-pressure ventilation compared with spontaneous breathing.', 'mech', 11) +
      '<p class="note">Volume left after a quiet breath out, with the muscles relaxed = <b>FRC</b>. Esophageal pressure is used as a stand-in for pleural pressure.</p>' },
  { t: 'q', id: 'M1', src: 'AC79', core: true, keep: true,
    q: 'Which of the following statements is correct?',
    o: ['Intrapleural pressure is always sub-atmospheric.', 'Transpulmonary pressure increases during expiration.', 'Intrapulmonary pressure is almost equivalent to intra-esophageal pressure', 'Lung volume that is left after quiet expiration is FRC.', 'Lung volume is the highest when the alveolar pressure at that moment is the most negative.'], a: 3,
    ex: 'D is the definition of FRC. A fails in forced expiration (intrapleural pressure turns positive). B: transpulmonary pressure falls in expiration. C: esophageal pressure tracks intrapleural, not alveolar, pressure. E: volume is highest at end-inspiration, when alveolar pressure is back to zero.' },
  { t: 'q', id: 'M2', src: 'AC81', keep: true,
    q: 'Which statement is true about quiet respiration in an adult?',
    o: ['Alveolar pressure is always sub-atmospheric.', 'Intrapleural pressure is higher than intraesophageal pressure.', 'Transpulmonary pressure is sub-atmospheric', 'Volume left in the lungs after quiet expiration is called functional residual capacity.'], a: 3,
    ex: 'Alveolar pressure is negative only during inspiration and positive during expiration; esophageal pressure is used as a stand-in for intrapleural pressure; transpulmonary pressure (PA − Ppl) stays positive.' },
  { t: 'q', id: 'M3', src: 'AC79 · AC80', keep: true,
    q: 'What is the amount of gas left in the lungs after normal expiration called?',
    o: ['ERV', 'RV', 'TV', 'FRC', 'IRV'], a: 3,
    ex: 'After a normal (quiet) expiration, with the muscles relaxed and alveolar pressure equal to atmospheric, the volume left is the FRC = ERV + RV. RV is what remains after a maximal expiration.',
    flag: 'AC80 asked it in Thai: “If all breathing muscles are relaxed and alveolar pressure equals atmospheric pressure, what volume is left in the lung?”' },
  { t: 'q', id: 'M4', src: 'AC81', core: true, keep: true,
    q: 'What causes the intrapleural pressure to be subatmospheric during rest?<br>i = lung and chest wall pull outward<br>ii = lung and chest wall pull inward<br>iii = lung elastic recoil tends to pull the lung inward and away from the chest wall<br>iv = thoracic wall elastic recoil tends to pull the chest wall outward and away from the lung',
    o: ['i', 'ii', 'iii', 'iv', 'iii and iv'], a: 4,
    ex: 'At FRC the lung recoils inward and the chest wall springs outward. Pulling the two pleural layers apart in opposite directions makes the pressure between them negative (about −5 cmH₂O).' },
  { t: 'q', id: 'M5', src: 'AC79', keep: true,
    q: 'Consider the graph shown below regarding the changes of intrapleural pressure in each breathing cycle. The inspiratory airflow is the maximum at which point of the graph?',
    fig: CVS.fig('ac79-pleuralgraph', 'AC79: intrapleural pressure through one breath, points A–E.', 'ac79', 7),
    o: ['A', 'B', 'C', 'D', 'E'], a: 1,
    ex: 'Inspiration runs from A down to C. Flow is fastest in mid-inspiration, where intrapleural (and alveolar) pressure is falling most steeply: B. At C inspiration ends and flow is zero.',
    flag: 'PS81 edit keys B; an older AC79 key gave C. C is end-inspiration, where flow stops.' },
  { t: 'q', id: 'M6', src: 'AC80', core: true, keep: true,
    q: 'จากภาพ transpulmonary pressure ขณะหายใจเข้าจนสุดเป็นเท่าไร (mm H₂O) <span class="muted">From the figure, what is the transpulmonary pressure at the end of a full inspiration? (the graph is in cmH₂O)</span>',
    fig: CVS.fig('ac80-ppl', 'AC80: intrapleural pressure during one breath (−5 to −8 cmH₂O).', 'ac80', 4),
    o: ['5', '6', '7', '8', '9'], a: 3,
    ex: 'Transpulmonary pressure = alveolar − intrapleural. At end-inspiration alveolar pressure is back to 0 and intrapleural pressure is at its lowest, −8: 0 − (−8) = 8.',
    flag: 'The recall wrote mm H₂O; the graph is in cmH₂O.' },
  { t: 'q', id: 'M7', src: 'AC79 · AC81', keep: true,
    q: 'A girl is blowing a balloon as much as she can that it makes the balloon volume close to the total lung capacity. Which of the following muscles can create the most expiratory effort?',
    o: ['Diaphragm + rectus abdominis', 'Diaphragm + sternocleidomastoid', 'Internal intercostal + rectus abdominis', 'Internal abdominal oblique + rectus abdominis', 'Diaphragm + external intercostal'], a: 3,
    ex: 'Maximal expiration comes from the abdominal muscles (rectus, obliques, transversus), which push the diaphragm up. The internal intercostals help, but the abdominal wall is far stronger. The diaphragm, SCM and external intercostals are inspiratory.',
    flag: 'AC81 asked the same (“rectus abdominis + internal oblique muscle”).' },
  { t: 'c', id: 'M-C2', title: 'Elastic recoil, surface tension, surfactant and the relaxation curve', src: 'Mechanics p.13–19',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Lung recoil</b> = elastic fibres + {{surface tension}} of the alveolar fluid.</li>' +
      '<li><b>Surfactant</b> ({{DPPC}}, from type II cells) → lowers that tension → {{less recoil}} → lung easier to inflate.</li>' +
      '<li>Small alveoli carry {{more surfactant}} per area → they don’t collapse into big ones.</li>' +
      '<li><b>Chest wall</b> springs {{outward}}; lung pulls {{inward}}.</li>' +
      '<li><b>At {{FRC}}</b> the two pulls are equal and opposite → relaxed resting point of the whole system.</li></ul></div>' +
      CVS.fig('mech-relax', 'Lung-thorax relaxation pressure curve showing the balance of lung and chest wall recoil at FRC.', 'mech', 18) + '</div>' },
  { t: 'q', id: 'M8', src: 'AC81', keep: true,
    q: 'What is the role of surfactant?',
    o: ['Decrease alveolar recoil', 'Increase alveolar elastic work force'], a: 0,
    ex: 'Surfactant lowers surface tension, which reduces the recoil of the alveoli, raises compliance and cuts the elastic work of breathing.',
    flag: 'Only two options were recalled.' },
  { t: 'c', id: 'M-C3', title: 'Lung and chest wall compliance (static vs dynamic)', src: 'Mechanics p.20–25',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Compliance</b> = {{ΔV / ΔP}} = the {{slope}} of the pressure-volume curve → steeper = easier to stretch.</li>' +
      '<li>Compliance is the opposite of {{elastic recoil}}.</li>' +
      '<li>Lung + chest wall in series → total compliance is {{lower}} than either alone.</li>' +
      '<li><b>Static</b> = measured with {{no airflow}}. <b>Dynamic</b> = during breathing → airway resistance also counts.</li>' +
      '<li><b>Disease</b><ul><li>{{Emphysema}}: walls destroyed → less recoil → compliance {{↑}}.</li>' +
      '<li>{{Fibrosis}}: stiff lung → more recoil → compliance {{↓}}.</li></ul></li></ul></div>' +
      CVS.fig('mech-compliance', 'Static lung compliance curves in alveolar septal destruction, normal lung, and interstitial stiffening.', 'mech', 24) + '</div>' },
  { t: 'q', id: 'M9', src: 'AC81', core: true, keep: true,
    q: 'Compare the lung compliance.',
    fig: CVS.fig('ac81-compliance', 'AC81: pressure–volume curves of three lungs, S, T and U.', 'ac81', 8),
    o: ['S>T>U', 'S<T<U', 'S=T=U', 'S<T>U', 'S>T<U'], a: 0,
    ex: 'Compliance = ΔV/ΔP, the slope of the curve. S rises most steeply, then T, then U.' },
  { t: 'q', id: 'M10', src: 'AC79 (made up partly by the recall team)', core: true, keep: true,
    q: 'A 49-year-old man comes to the doctor from worsening dyspnea upon exertion for the past 2 months. Chest examination reveals decreased chest wall movement and wheezing noise when breathing. The pulmonary function test and arterial blood gas results are as follows:<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Parameter</th><th>Predicted</th><th>Measured</th><th>% Predicted</th><th>Post-BD</th></tr></thead><tbody><tr><td>FVC</td><td>4.99 L</td><td>4.12 L</td><td>83%</td><td>3.95 L</td></tr><tr><td>FEV₁</td><td>3.97 L</td><td>2.12 L</td><td>53%</td><td>2.75 L</td></tr><tr><td>FEV₁/FVC</td><td></td><td>51%</td><td></td><td>70%</td></tr></tbody></table></div>ABG: pH 7.37, pCO₂ 50 mmHg, [HCO₃⁻] 28 mEq/L. Which of the following is <b>incorrect</b> regarding the pathophysiology underlying this patient’s symptoms and test results?',
    o: ['Increased alveolar dead space', 'Dynamic compression of airways', 'Decreased Hb-O₂ affinity', 'Decreased compliance of lungs', 'Increased FRC'], a: 3,
    ex: 'This is obstructive disease with CO₂ retention (COPD pattern). Emphysema destroys elastic tissue, so lung compliance goes up, not down. Dead space, dynamic compression, a right-shifted curve from high CO₂, and air trapping (raised FRC) all fit.' },
  { t: 'c', id: 'M-C4', title: 'Airway resistance, radial traction and dynamic compression in COPD', src: 'Mechanics p.26–37',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Poiseuille</b>: R ∝ 1 / r<sup>4</sup> → halve the radius → resistance ×{{16}}.</li>' +
      '<li><b>Most resistance</b> is in the {{nose, mouth and large airways}}.</li>' +
      '<li>Small airways add little → so many in {{parallel}} → huge total cross-section.</li>' +
      '<li><b>Breathing in</b>: negative pleural pressure + {{radial traction}} from alveoli → airways held open.</li>' +
      '<li><b>Forced breath out</b>: pleural pressure turns positive → squeezes the airway → {{dynamic compression}} → more effort gives no more flow.</li>' +
      '<li><b>COPD</b>: less recoil → airways close early → {{air trapping}}.</li>' +
      '<li><b>Nerves</b>: parasympathetic → {{constrict}} (R ↑); sympathetic → dilate (R ↓).</li></ul></div>' +
      '<div class="stack">' + CVS.fig('mech-resistance', 'Airway resistance vs airway generation and velocity vs aggregate cross-sectional area.', 'mech', 28) +
      CVS.fig('mech-compress', 'Passive vs forced expiration showing positive pleural pressure and dynamic airway compression.', 'mech', 31) + '</div></div>' },
  { t: 'q', id: 'M11', src: 'AC80 · AC81', core: true, keep: true,
    q: 'What is the most important factor limiting forced expiration from total lung capacity to residual volume?',
    o: ['Action of diaphragm', 'Dynamic compression of the airway', 'Elasticity of the airway', 'Rate of contraction of expiratory muscles', 'Increases sympathetic stimulation of smooth muscles of the airway'], a: 1,
    ex: 'In forced expiration intrapleural pressure turns positive and squeezes the airways at the equal-pressure point. Beyond that point more effort only compresses the airway further, so flow is effort-independent.' },
  { t: 'c', id: 'M-C5', title: 'Airflow patterns, normal breath sounds and work of breathing', src: 'Mechanics p.38–44',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl compact"><thead><tr><th>Sound</th><th>Character</th><th>Where</th></tr></thead><tbody>' +
      '<tr><td><b>Vesicular</b></td><td>{{soft, low}}; in &gt; out</td><td>{{most of the lung}}</td></tr>' +
      '<tr><td><b>Bronchovesicular</b></td><td>in = out</td><td>1st–2nd space front, between the scapulae</td></tr>' +
      '<tr><td><b>Bronchial</b></td><td>{{loud, high}}; out &gt; in</td><td>over the {{manubrium}}</td></tr></tbody></table></div>' +
      '<ul class="pts"><li><b>Flow</b>: {{laminar}} in small airways; {{turbulent}} in the trachea at high flow.</li>' +
      '<li><b>Work of breathing</b><ul><li>Most of it goes into stretching the lung ({{elastic}} work).</li>' +
      '<li>Bronchoconstriction → R ↑ → {{resistive}} work ↑.</li></ul></li>' +
      '<li><b>Disease</b>: fibrosis → stretching work ↑; COPD → airway work ↑.</li></ul></div>' +
      CVS.fig('mech-work', 'Pressure-volume work-of-breathing loops in restrictive lung disease (a) and obstructive lung disease (b).', 'mech', 43) + '</div>' },
  { t: 'q', id: 'M12', src: 'AC80', keep: true,
    q: 'Which of the following will increase as a result from contraction of bronchial smooth muscle?',
    o: ['Lung compliance', 'Airway diameter', 'Elastic work of breathing', 'Resistive work of breathing', 'Anatomic dead space'], a: 3,
    ex: 'Bronchoconstriction narrows the airways, and resistance rises steeply (R ∝ 1/r⁴), so the resistive (non-elastic) work of breathing goes up. Compliance and elastic work are properties of the stretchy tissue; the anatomic dead space falls slightly.' },
  { t: 'q', id: 'M13', src: 'AC81', keep: true,
    q: 'What is the characteristic of vesicular breath sounds?',
    o: ['Soft, low pitch', 'High pitch', 'Expiratory time longer than inspiratory time'], a: 0,
    ex: 'Vesicular sounds, heard over most of the lung, are soft and low-pitched, with inspiration longer than expiration. Bronchial sounds are loud and high-pitched with a long expiratory phase.' }
]});
