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
      CVS.fig('mech-ppv', 'Pressures during passive positive-pressure ventilation compared with spontaneous breathing.', 'mech', 11) },
  { t: 'q', id: 'M1', src: 'Mechanics p.2–5', core: true,
    q: 'Which muscles contract during quiet inspiration, maximal inspiration, and maximal (forced) expiration?',
    o: ['Quiet inspiration: diaphragm & external intercostals; maximal inspiration adds sternocleidomastoid, serratus anterior & scalenes; maximal expiration: internal intercostals & abdominal muscles', 'Quiet inspiration: diaphragm & internal intercostals; maximal inspiration adds rectus abdominis; maximal expiration: external intercostals & scalenes', 'Quiet inspiration: sternocleidomastoid & scalenes; quiet expiration: internal intercostals; maximal expiration: diaphragm', 'Quiet inspiration: diaphragm only; quiet expiration: rectus abdominis & external obliques; maximal inspiration: internal intercostals', 'Quiet inspiration: external & internal intercostals; maximal inspiration: transversus abdominis; maximal expiration: serratus anterior'], a: 0,
    ex: 'Slide 5: quiet inspiration uses the diaphragm and external intercostals; maximal inspiration recruits sternocleidomastoid, serratus anterior, and scalenes; quiet expiration is passive relaxation; maximal expiration contracts the internal intercostals and abdominal muscles (rectus abdominis, external and internal obliques).' },
  { t: 'q', id: 'M2', src: 'Mechanics p.8–10', core: true,
    q: 'At the end of a normal quiet exhalation (at FRC / EELV, before the next inspiration begins), what are alveolar pressure (PA), intrapleural pressure (Ppl), and transpulmonary pressure (PL = PA − Ppl)?',
    o: ['PA = 0 cmH2O, Ppl = −5 cmH2O, and PL = +5 cmH2O', 'PA = −1 cmH2O, Ppl = −8 cmH2O, and PL = −7 cmH2O', 'PA = +5 cmH2O, Ppl = 0 cmH2O, and PL = +5 cmH2O', 'PA = 0 cmH2O, Ppl = +5 cmH2O, and PL = −5 cmH2O', 'PA = −5 cmH2O, Ppl = −5 cmH2O, and PL = 0 cmH2O'], a: 0,
    ex: 'At rest (FRC / EELV) with no airflow, PA equals atmospheric pressure (0 cmH2O), inward lung recoil against outward chest wall recoil creates Ppl = −5 cmH2O (−3.5 mmHg), and PL = PA − Ppl = 0 − (−5) = +5 cmH2O.' },
  { t: 'tf', id: 'M3', src: 'Mechanics p.11–12',
    q: 'During passive positive-pressure mechanical ventilation without patient respiratory effort, intrapleural pressure becomes more negative during inspiration just as in spontaneous breathing.', a: false,
    ex: 'False: during passive positive-pressure ventilation, positive airway pressure pushes the lungs and chest wall outward, making intrapleural pressure positive (e.g. from −5 to +5 cmH2O). Only when the patient makes a spontaneous inspiratory effort during PPV does Ppl become strongly negative.' },

  { t: 'c', id: 'M-C2', title: 'Elastic recoil, surface tension, surfactant and the relaxation curve', src: 'Mechanics p.13–19',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Lung elastic recoil</b> comes from tissue elastin/collagen fibers and alveolar liquid {{surface tension}}.</li>' +
      '<li><b>Surfactant</b> — mainly {{dipalmitoyl phosphatidylcholine}} ({{DPPC}}) from Type II cells — inserts hydrophobic tails at the air-water interface to lower interfacial tension and reduce lung elastic recoil.</li>' +
      '<li><b>Small vs large alveoli</b> (p.16): smaller alveoli have {{more surfactant per unit area}} than larger alveoli, giving smaller alveoli a {{lower elastic recoil force}} so they expand {{more easily}} during inspiration.</li>' +
      '<li><b>Thoracic elastic recoil</b>: at rest, the chest wall pulls {{outward}}, opposing the {{inward}} pull of the lungs.</li>' +
      '<li><b>Lung-thorax relaxation curve</b>: at {{FRC}} (~40% VC), lung pull equals chest wall pull in magnitude (net relaxation pressure = 0); the chest wall alone reaches its neutral position at ~60–70% VC, while an unsealed lung collapses to {{minimal air}}.</li></ul></div>' +
      CVS.fig('mech-relax', 'Lung-thorax relaxation pressure curve showing the balance of lung and chest wall recoil at FRC.', 'mech', 18) + '</div>' },
  { t: 'q', id: 'M4', src: 'Mechanics p.14, 16', core: true,
    q: 'According to the lecture (slide 16), why do small alveoli expand more readily than large alveoli during inspiration?',
    o: ['Small alveoli have a higher amount of surfactant (DPPC) per unit surface area, resulting in a lower elastic recoil force than large alveoli', 'Small alveoli have no surfactant and therefore generate a higher collapsing pressure', 'Large alveoli have thicker smooth muscle rings that prevent expansion', 'Intrapleural pressure is positive around small alveoli and negative around large alveoli', 'Small alveoli are lined solely by Type II cuboidal cells with no surface tension'], a: 0,
    ex: 'Slide 16 emphasizes that smaller alveoli have more surfactant per surface area than larger alveoli, making their elastic recoil force smaller than that of larger alveoli so their volume increases more during inspiration.' },
  { t: 'q', id: 'M5', src: 'Mechanics p.17–19', core: true,
    q: 'At functional residual capacity (FRC) on the lung-thorax relaxation pressure curve, how are the elastic recoil forces of the lungs and thoracic wall related, and what happens if the pleural space is unsealed (pneumothorax)?',
    o: ['Inward lung recoil is equal and opposite to outward thoracic recoil; unsealing the chest lets the lung collapse inward to minimal air while the chest wall springs outward', 'Both lung and chest wall recoil pull inward; unsealing the chest causes both to collapse', 'Both lung and chest wall are at zero recoil individually; unsealing the chest causes no volume change', 'Lung recoil pulls outward and chest wall recoil pulls inward; unsealing the chest hyperinflates the lung', 'Inward lung recoil is twice outward chest wall recoil; unsealing the chest collapses the rib cage'], a: 0,
    ex: 'At FRC (point B on slide 18), inward lung recoil equals outward thoracic recoil (combined pressure = 0). If the pleural seal is broken (slide 19), the unopposed lung collapses to minimal air while the chest wall expands toward its own equilibrium (~60–70% VC).' },
  { t: 'tf', id: 'M6', src: 'Mechanics p.14',
    q: 'Absence of pulmonary surfactant (dipalmitoyl phosphatidylcholine, DPPC) increases alveolar surface tension and increases the elastic recoil force of the lung.', a: true,
    ex: 'True: without surfactant (DPPC), water molecules attract strongly at the air-liquid interface, raising surface tension and lung elastic recoil force (making the lung stiff and prone to collapse).' },

  { t: 'c', id: 'M-C3', title: 'Lung and chest wall compliance (static vs dynamic)', src: 'Mechanics p.20–25',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Definition</b>: compliance {{C = &Delta;V / &Delta;P}} (in {{L/cmH2O}}), measuring distensibility ({{inversely proportional}} to elastic recoil). On the normal curve (p.20), &Delta;V = 0.5 L for &Delta;P<sub>TP</sub> = 2.5 cmH<sub>2</sub>O gives C<sub>L</sub> = {{0.2 L/cmH2O}}.</li>' +
      '<li><b>Combined lung-thorax compliance</b>: {{1/C(lung-thorax) = 1/C(lung) + 1/C(thorax)}}, so total system compliance (~0.1 L/cmH<sub>2</sub>O) is always less than either alone.</li>' +
      '<li><b>Static compliance</b>: measured during {{no airflow}} (breath-hold), reflecting pure elastic properties.</li>' +
      '<li><b>Dynamic compliance</b>: measured during {{active breathing}} at points of zero flow; influenced by both elastic recoil and airway resistance.</li>' +
      '<li><b>Disease shifts</b>: {{emphysema}} destroys alveolar walls &rarr; &darr; elastic recoil &rarr; {{increased compliance}} (curve shifts up/left); {{pulmonary fibrosis}} stiffens the lung &rarr; &uarr; elastic recoil &rarr; {{decreased compliance}} (curve shifts down/right).</li></ul></div>' +
      CVS.fig('mech-compliance', 'Static lung compliance curves in alveolar septal destruction, normal lung, and interstitial stiffening.', 'mech', 24) + '</div>' },
  { t: 'q', id: 'M7', src: 'Mechanics p.20, 22, 24', core: true,
    q: 'If isolated lung compliance is 0.2 L/cmH2O and thoracic wall compliance is 0.2 L/cmH2O, what is the combined lung-thorax compliance, and how does static lung compliance change in emphysema vs pulmonary fibrosis?',
    o: ['Combined compliance is 0.1 L/cmH2O; static compliance increases in emphysema and decreases in pulmonary fibrosis', 'Combined compliance is 0.4 L/cmH2O; static compliance decreases in emphysema and increases in pulmonary fibrosis', 'Combined compliance is 0.2 L/cmH2O; static compliance increases in both emphysema and pulmonary fibrosis', 'Combined compliance is 0.1 L/cmH2O; static compliance decreases in emphysema and increases in pulmonary fibrosis', 'Combined compliance is 0.04 L/cmH2O; static compliance is unchanged in both diseases'], a: 0,
    ex: '1/C_total = 1/C_lung + 1/C_thorax = 1/0.2 + 1/0.2 = 10, so C_total = 0.1 L/cmH2O. Emphysema destroys elastic septa (↓ recoil → ↑ compliance), whereas pulmonary fibrosis adds collagen (↑ recoil → ↓ compliance).' },
  { t: 'tf', id: 'M8', src: 'Mechanics p.24',
    q: 'Because compliance is directly proportional to lung elastic recoil force, a patient with emphysema has lower static lung compliance than normal.', a: false,
    ex: 'False: compliance is inversely proportional to elastic recoil (C ∝ 1 / elastic recoil). Emphysema destroys alveolar walls, reducing elastic recoil and increasing static lung compliance.' },
  { t: 'q', id: 'M9', src: 'Mechanics p.23, 25', core: true,
    q: 'How is static lung compliance distinguished experimentally from dynamic lung compliance?',
    o: ['Static compliance is measured during a breath-hold with no airflow, whereas dynamic compliance is measured during rhythmic breathing', 'Static compliance includes airway resistance, whereas dynamic compliance reflects only chest wall recoil', 'Static compliance is measured only during forced expiration, whereas dynamic compliance is measured at RV', 'Dynamic compliance uses esophageal pressure, whereas static compliance uses arterial blood pressure', 'Static compliance is higher in pulmonary fibrosis than in emphysema'], a: 0,
    ex: 'Static compliance is measured when airflow is interrupted (breath-hold) so resistive pressure drops are zero; dynamic compliance is measured during ongoing breathing.' },

  { t: 'c', id: 'M-C4', title: 'Airway resistance, radial traction and dynamic compression in COPD', src: 'Mechanics p.26–37',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Poiseuille law</b>: Flow = &Delta;P / R and {{R = 8&eta;l / (&pi;r4)}} — airway radius {{r to the fourth power}} is the dominant determinant of resistance.</li>' +
      '<li><b>Sites of airway resistance</b> (p.29): nose-mouth {{50%}}, glottis {{25%}}, trachea &amp; bronchi &gt;2 mm {{15%}}, small airways &lt;2 mm only {{10%}} because vast parallel branching gives huge {{total cross-sectional area}} (e.g. 180 cm<sup>2</sup> at generation 16 vs 2.54 cm<sup>2</sup> in trachea).</li>' +
      '<li><b>Inspiration vs forced expiration</b>: during inspiration, negative P<sub>pl</sub> and alveolar {{radial traction}} (mechanical tethering) pull airways open; during forced expiration, positive P<sub>pl</sub> (+25 cmH<sub>2</sub>O) causes {{dynamic compression}} when P<sub>pl</sub> exceeds intraluminal airway pressure.</li>' +
      '<li><b>COPD &amp; autonomic tone</b>: loss of elastic recoil in COPD/emphysema causes early airway closure and {{air trapping}} (dynamic hyperinflation); {{parasympathetic}} stimulation causes bronchoconstriction (&uarr; R) while {{sympathetic}} stimulation causes bronchodilation (&darr; R).</li></ul></div>' +
      '<div class="stack">' + CVS.fig('mech-resistance', 'Airway resistance vs airway generation and velocity vs aggregate cross-sectional area.', 'mech', 28) +
      CVS.fig('mech-compress', 'Passive vs forced expiration showing positive pleural pressure and dynamic airway compression.', 'mech', 31) + '</div></div>' },
  { t: 'q', id: 'M10', src: 'Mechanics p.26–29', core: true,
    q: 'Where is the largest share of airway resistance located in a healthy respiratory tract, and why do small airways (<2 mm diameter) contribute only about 10% of total resistance?',
    o: ['Upper airways (nose-mouth ~50%, glottis ~25%, bronchi >2 mm ~15%); small airways <2 mm contribute only ~10% because thousands of parallel branches create a huge total cross-sectional area', 'Terminal bronchioles (~80% of total resistance) because each individual tube has the smallest radius', 'Alveolar ducts (~60% of total resistance) because gas flow is turbulent there', 'Trachea (~75% of total resistance) because its cross-sectional area is 180 cm2', 'Small airways <2 mm (~50%) and nose-mouth (~10%) because Poiseuille’s law does not apply to bronchioles'], a: 0,
    ex: 'By Poiseuille’s law a single small bronchiole has high resistance, but because small airways (<2 mm) are arranged in tens of thousands of parallel branches with a huge aggregate cross-sectional area, they account for only ~10% of total resistance (while nose-mouth is 50%, glottis 25%, and airways >2 mm 15%).' },
  { t: 'q', id: 'M11', src: 'Mechanics p.30–31, 37', core: true,
    q: 'Why does forced expiration worsen airway narrowing and cause air trapping in a patient with COPD / emphysema?',
    o: ['High positive intrapleural pressure compresses non-cartilaginous airways whose intraluminal pressure drops rapidly due to low alveolar elastic recoil and loss of radial traction', 'Forced expiration makes intrapleural pressure strongly negative, sucking the airway walls together', 'Sympathetic discharge during forced expiration constricts bronchial smooth muscle', 'Surfactant is squeezed out of the trachea during forced expiration, collapsing the cricoid ring', 'Alveolar pressure becomes negative during forced expiration while pleural pressure stays at zero'], a: 0,
    ex: 'During forced expiration, Ppl becomes strongly positive (e.g. +25 cmH2O). In COPD/emphysema, loss of alveolar elastic recoil reduces the driving pressure (Palv = Pel + Ppl) and loss of radial tethering allows positive Ppl to collapse small airways early, trapping air.' },
  { t: 'tf', id: 'M12', src: 'Mechanics p.32',
    q: 'Parasympathetic nervous stimulation causes bronchial smooth muscle contraction (bronchoconstriction) and increases airway resistance, whereas sympathetic stimulation causes bronchodilation and decreases airway resistance.', a: true,
    ex: 'True: vagal parasympathetic fibers constrict bronchial smooth muscle (increasing resistance), whereas sympathetic beta-2 stimulation relaxes it (decreasing resistance).' },

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
  { t: 'q', id: 'M13', src: 'Mechanics p.40, 43', core: true,
    q: 'During quiet breathing at rest, what are the percentages of total work of breathing spent on elastic resistance, airway resistance, and tissue viscous resistance, and which component rises predominantly in pulmonary fibrosis vs COPD?',
    o: ['65% elastic, 25% airway resistance, 10% tissue viscosity; pulmonary fibrosis increases elastic work, whereas COPD increases airway resistance work', '25% elastic, 65% airway resistance, 10% tissue viscosity; pulmonary fibrosis increases airway resistance work, whereas COPD increases elastic work', '50% elastic, 50% airway resistance, 0% tissue viscosity; both diseases increase only tissue viscous work', '80% elastic, 10% airway resistance, 10% tissue viscosity; COPD reduces total work of breathing below normal', '10% elastic, 25% airway resistance, 65% tissue viscosity; pulmonary fibrosis decreases elastic work'], a: 0,
    ex: 'Slide 40: quiet breathing uses ~65% for elastic resistance, ~25% for airway resistance, and ~10% for tissue viscosity. Slide 43: pulmonary fibrosis increases elastic work (wider negative Ppl swing), while COPD increases resistive and active expiratory work.' },
  { t: 'open', id: 'M14', src: 'Mechanics p.38–39',
    q: 'Compare laminar, transitional, and turbulent airflow in the tracheobronchial tree, and state the normal auscultation site and inspiratory-to-expiratory relationship of vesicular vs bronchial breath sounds.',
    ans: 'Laminar flow occurs in small peripheral airways at low velocity and depends on gas viscosity; turbulent flow occurs in the trachea and large airways at high velocity and depends on gas density; transitional flow occurs at airway bifurcations and depends on both viscosity and density. Vesicular sounds are soft, low-pitched (≤200 Hz) with inspiration longer than expiration (Insp > Exp) heard over most of the lung fields; bronchial sounds are loud, high-pitched (≥400 Hz) with expiration longer than inspiration (Exp > Insp) and a silent gap, heard normally over the manubrium.' }
]});
