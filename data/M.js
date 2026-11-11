/* Section M: Mechanics of breathing (Mechanics handout, slides 1–44). */
CVS.add({ id: 'M', short: 'Mechanics', title: 'Mechanics of Breathing: Pressures, Compliance, Resistance & Work', kind: 'Lecture',
  blurb: 'Inspiratory and expiratory muscles, pleural and alveolar pressures in spontaneous vs positive-pressure ventilation, surfactant and the lung-thorax relaxation curve, compliance, Poiseuille law and dynamic compression, breath sounds, and work of breathing.',
  items: [
  { t: 'c', id: 'M-C1', title: 'Respiratory muscles and pressures in spontaneous vs positive-pressure breathing', src: 'Mechanics p.1–12',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Architecture</b>: {{23}} airway generations ending in {{300 million}} alveoli with {{50 to 100 m2}} diffusing surface area.</li>' +
      '<li><b>Quiet inspiration</b>: {{diaphragm}} and {{external intercostals}} contract. <b>Maximal inspiration</b> adds {{sternocleidomastoid}}, {{serratus anterior}}, and {{scalenes}}.</li>' +
      '<li><b>Quiet expiration</b>: passive muscle relaxation. <b>Maximal expiration</b>: {{internal intercostals}} and abdominal muscles (rectus abdominis, external &amp; internal obliques) contract.</li>' +
      '<li><b>At rest (FRC = EELV)</b>: P<sub>A</sub> = {{0 cmH2O}}, P<sub>pl</sub> = {{-5 cmH2O}} (&minus;3.5 mmHg), transpulmonary pressure P<sub>L</sub> = P<sub>A</sub> &minus; P<sub>pl</sub> = {{+5 cmH2O}}.</li>' +
      '<li><b>Quiet inspiration</b> (Boyle law): P<sub>pl</sub> falls to &minus;8 to &minus;10 cmH<sub>2</sub>O, P<sub>A</sub> drops to {{-1 cmH2O}}, 500 mL flows in; during expiration P<sub>A</sub> rises to +1 cmH<sub>2</sub>O.</li>' +
      '<li><b>Positive-pressure ventilation (PPV)</b>: ventilator raises P<sub>ao</sub> above atmospheric (e.g. +30 cmH<sub>2</sub>O) so P<sub>pl</sub> rises (+5 cmH<sub>2</sub>O passive); if the patient also inspires actively (P<sub>pl</sub> = &minus;20), P<sub>L</sub> = 30 &minus; (&minus;20) = 50 cmH<sub>2</sub>O.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('mech-muscles', 'Muscles of inspiration (left) and muscles of expiration (right).', 'mech', 2) +
      CVS.fig('mech-cycle', 'Volume, intrapleural pressure, and alveolar pressure changes during a normal spontaneous breath.', 'mech', 9) + '</div></div>' +
      CVS.fig('mech-ppv', 'Pressures during passive positive-pressure ventilation compared with spontaneous breathing.', 'mech', 11) + '<p class="note"><b>From the past papers</b> · Pleural pressure is negative at rest because the elastic recoil of the lung pulls inward while the chest wall springs outward (AC81).</p>' },
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
      '<li><b>Lung elastic recoil</b> comes from tissue elastin/collagen fibers and alveolar liquid {{surface tension}}.</li>' +
      '<li><b>Surfactant</b> — mainly {{dipalmitoyl phosphatidylcholine}} ({{DPPC}}) from Type II cells — inserts hydrophobic tails at the air-water interface to lower interfacial tension and reduce lung elastic recoil.</li>' +
      '<li><b>Small vs large alveoli</b> (p.16): smaller alveoli have {{more surfactant per unit area}} than larger alveoli, giving smaller alveoli a {{lower elastic recoil force}} so they expand {{more easily}} during inspiration.</li>' +
      '<li><b>Thoracic elastic recoil</b>: at rest, the chest wall pulls {{outward}}, opposing the {{inward}} pull of the lungs.</li>' +
      '<li><b>Lung-thorax relaxation curve</b>: at {{FRC}} (~40% VC), lung pull equals chest wall pull in magnitude (net relaxation pressure = 0); the chest wall alone reaches its neutral position at ~60–70% VC, while an unsealed lung collapses to {{minimal air}}.</li></ul></div>' +
      CVS.fig('mech-relax', 'Lung-thorax relaxation pressure curve showing the balance of lung and chest wall recoil at FRC.', 'mech', 18) + '</div>' },
  { t: 'q', id: 'M8', src: 'AC81', keep: true,
    q: 'What is the role of surfactant?',
    o: ['Decrease alveolar recoil', 'Increase alveolar elastic work force'], a: 0,
    ex: 'Surfactant lowers surface tension, which reduces the recoil of the alveoli, raises compliance and cuts the elastic work of breathing.',
    flag: 'Only two options were recalled.' },
  { t: 'c', id: 'M-C3', title: 'Lung and chest wall compliance (static vs dynamic)', src: 'Mechanics p.20–25',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Definition</b>: compliance {{C = &Delta;V / &Delta;P}} (in {{L/cmH2O}}), measuring distensibility ({{inversely proportional}} to elastic recoil). On the normal curve (p.20), &Delta;V = 0.5 L for &Delta;P<sub>TP</sub> = 2.5 cmH<sub>2</sub>O gives C<sub>L</sub> = {{0.2 L/cmH2O}}.</li>' +
      '<li><b>Combined lung-thorax compliance</b>: {{1/C(lung-thorax) = 1/C(lung) + 1/C(thorax)}}, so total system compliance (~0.1 L/cmH<sub>2</sub>O) is always less than either alone.</li>' +
      '<li><b>Static compliance</b>: measured during {{no airflow}} (breath-hold), reflecting pure elastic properties.</li>' +
      '<li><b>Dynamic compliance</b>: measured during {{active breathing}} at points of zero flow; influenced by both elastic recoil and airway resistance.</li>' +
      '<li><b>Disease shifts</b>: {{emphysema}} destroys alveolar walls &rarr; &darr; elastic recoil &rarr; {{increased compliance}} (curve shifts up/left); {{pulmonary fibrosis}} stiffens the lung &rarr; &uarr; elastic recoil &rarr; {{decreased compliance}} (curve shifts down/right).</li></ul></div>' +
      CVS.fig('mech-compliance', 'Static lung compliance curves in alveolar septal destruction, normal lung, and interstitial stiffening.', 'mech', 24) + '</div>' + '<p class="note"><b>From the past papers</b> · Compliance is the slope of the pressure–volume curve: the steeper the curve, the more compliant the lung (AC81).</p>' },
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
      '<li><b>Poiseuille law</b>: Flow = &Delta;P / R and {{R = 8&eta;l / (&pi;r4)}} — airway radius {{r to the fourth power}} is the dominant determinant of resistance.</li>' +
      '<li><b>Sites of airway resistance</b> (p.29): nose-mouth {{50%}}, glottis {{25%}}, trachea &amp; bronchi &gt;2 mm {{15%}}, small airways &lt;2 mm only {{10%}} because vast parallel branching gives huge {{total cross-sectional area}} (e.g. 180 cm<sup>2</sup> at generation 16 vs 2.54 cm<sup>2</sup> in trachea).</li>' +
      '<li><b>Inspiration vs forced expiration</b>: during inspiration, negative P<sub>pl</sub> and alveolar {{radial traction}} (mechanical tethering) pull airways open; during forced expiration, positive P<sub>pl</sub> (+25 cmH<sub>2</sub>O) causes {{dynamic compression}} when P<sub>pl</sub> exceeds intraluminal airway pressure.</li>' +
      '<li><b>COPD &amp; autonomic tone</b>: loss of elastic recoil in COPD/emphysema causes early airway closure and {{air trapping}} (dynamic hyperinflation); {{parasympathetic}} stimulation causes bronchoconstriction (&uarr; R) while {{sympathetic}} stimulation causes bronchodilation (&darr; R).</li></ul></div>' +
      '<div class="stack">' + CVS.fig('mech-resistance', 'Airway resistance vs airway generation and velocity vs aggregate cross-sectional area.', 'mech', 28) +
      CVS.fig('mech-compress', 'Passive vs forced expiration showing positive pleural pressure and dynamic airway compression.', 'mech', 31) + '</div></div>' },
  { t: 'q', id: 'M11', src: 'AC80 · AC81', core: true, keep: true,
    q: 'What is the most important factor limiting forced expiration from total lung capacity to residual volume?',
    o: ['Action of diaphragm', 'Dynamic compression of the airway', 'Elasticity of the airway', 'Rate of contraction of expiratory muscles', 'Increases sympathetic stimulation of smooth muscles of the airway'], a: 1,
    ex: 'In forced expiration intrapleural pressure turns positive and squeezes the airways at the equal-pressure point. Beyond that point more effort only compresses the airway further, so flow is effort-independent.' },
  { t: 'c', id: 'M-C5', title: 'Airflow patterns, normal breath sounds and work of breathing', src: 'Mechanics p.38–44',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Breath sound</th><th>Insp : Exp &amp; pitch</th><th>Normal location</th></tr></thead><tbody>' +
      '<tr><td><b>Vesicular</b></td><td>{{Insp &gt; Exp}}, soft, low (&le;200 Hz)</td><td>{{Over most of both lungs}}</td></tr>' +
      '<tr><td><b>Bronchovesicular</b></td><td>Insp = Exp, medium pitch</td><td>{{1st–2nd ICS anteriorly}} &amp; between scapulae</td></tr>' +
      '<tr><td><b>Bronchial</b></td><td>{{Exp &gt; Insp}} (with gap), loud, high (&ge;400 Hz)</td><td>Over {{manubrium}}</td></tr>' +
      '<tr><td><b>Tracheal</b></td><td>Insp = Exp, very loud, high pitch</td><td>Over {{extrathoracic trachea}} in neck</td></tr></tbody></table></div>' +
      '<ul class="pts">' +
      '<li><b>Airflow regimes</b> (p.38): {{laminar flow}} in small peripheral airways (&Delta;P &propto; viscosity), {{turbulent flow}} in trachea/large airways at high flow (&Delta;P &propto; gas density), and {{transitional flow}} at branch points.</li>' +
      '<li><b>Work of breathing at rest</b> (Work = P &times; V, p.40): {{65%}} overcomes elastic resistance, {{25%}} overcomes airway resistance, and {{10%}} overcomes tissue viscous resistance.</li>' +
      '<li><b>Disease loops</b> (p.43): restrictive disease (pulmonary fibrosis) increases {{elastic work}}; obstructive disease (COPD) increases {{airway resistance work}} and active expiratory work.</li></ul></div>' +
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
