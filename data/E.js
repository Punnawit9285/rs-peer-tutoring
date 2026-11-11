/* Section E: Alveolar Ventilation, Diffusion, Perfusion Limitation & V/Q Matching (681114-1 Gas exchange.pdf, 72 pages). */
CVS.add({ id: 'E', short: 'Gas exchange', title: 'Alveolar Ventilation, Diffusion, Perfusion Limitation & V/Q Matching', kind: 'Lecture',
  blurb: 'Dalton and Henry laws, the partial pressure cascade and alveolar gas equation, Fick diffusion and DLCO, O2 content, perfusion vs diffusion limitation, regional V/Q differences, dead space, shunt, A-a gradient, and exercise ventilation.',
  items: [
  { t: 'c', id: 'E-C1', title: 'Partial pressure cascade, alveolar gas equation & alveolar ventilation', src: 'Gas exchange p.7–12, 15',
    html: '<div class="two"><div class="stack"><p><b>O<sub>2</sub> cascade (mmHg)</b>: dry air {{160}} → humidified airway 150 → alveolus {{100}} → artery {{97}}.</p>' +
      '<ul class="pts"><li>Air → airway: water vapour ({{47}}) dilutes the air.</li>' +
      '<li>Airway → alveolus: CO<sub>2</sub> comes in and takes up room (P<sub>ACO2</sub>/R).</li>' +
      '<li>Alveolus → artery: about 2% of blood bypasses the alveoli ({{bronchial}} veins, Thebesian veins) → small normal shunt.</li>' +
      '<li><b>R</b> depends on food: carbohydrate {{1.0}}, fat 0.7.</li>' +
      '<li><b>Alveolar ventilation</b> = {{(TV − dead space) × RR}}; minute ventilation = TV × RR.</li>' +
      '<li><b>Hyperventilate</b> (CO<sub>2</sub> production unchanged) → CO<sub>2</sub> washed out → P<sub>ACO2</sub> and end-tidal CO<sub>2</sub> {{fall}}; P<sub>AO2</sub> rises.</li></ul></div>' +
      CVS.fig('exch-shunt-phys', 'Oxygen cascade from dry air to arterial blood, showing the 2% anatomic/physiologic shunt.', 'exch', 8) + '</div>' +
      '<p class="note">Worked (AC79): dead space 150 mL, RR 10, cardiac output 5 L/min → needs a tidal volume of about 550 mL.</p>' },
  { t: 'q', id: 'E1', src: 'AC81', core: true, keep: true,
    q: 'A 75-kg man has a dead space of 150 mL. What tidal volume (TV) and respiratory rate (RR) are required to maintain normal alveolar ventilation if his cardiac output is 5 L/min?',
    o: ['TV 250, RR 10', 'TV 450, RR 10', 'TV 350, RR 10', 'TV 550, RR 10', 'TV 750, RR 10'], a: 3,
    ex: 'Normal V/Q is about 0.8, so with a cardiac output of 5 L/min alveolar ventilation should be about 4 L/min. V̇A = (TV − dead space) × RR = (550 − 150) × 10 = 4,000 mL/min.' },
  { t: 'q', id: 'E2', src: 'AC79', core: true, keep: true,
    q: 'A medical student waiting to do the first patient interview becomes anxious and his respiratory rate is increased. If the rate of carbon dioxide production is constant, which of the following parameters is decreased?',
    o: ['P<sub>alveolar</sub>O₂', 'Work of breathing', 'Pulmonary blood flow', 'The level of carbon dioxide at the end of an exhaled breath (ETCO₂)', 'V/Q ratio'], a: 3,
    ex: 'More alveolar ventilation with the same CO₂ production washes CO₂ out, so PACO₂ and end-tidal CO₂ fall, while PAO₂, work of breathing and V/Q go up.',
    flag: 'PS81 edit keys ETCO₂; an older AC79 key gave PAO₂, which actually rises when you hyperventilate.' },
  { t: 'c', id: 'E-C2', title: 'Fick’s law of diffusion, Graham’s law & DLCO', src: 'Gas exchange p.18–24, 41',
    html: '<div class="two"><div class="stack"><p class="eqn"><span>V̇<sub>gas</sub> ∝ A × D × (P<sub>1</sub> − P<sub>2</sub>) / T</span></p>' +
      '<ul class="pts"><li>More {{area}}, bigger gradient, better solubility → faster.</li>' +
      '<li>{{Thicker}} barrier (fibrosis, edema) → slower.</li>' +
      '<li><b>D</b> ∝ solubility / √MW.</li>' +
      '<li><b>CO<sub>2</sub> vs O<sub>2</sub></b>: CO<sub>2</sub> is heavier (slightly slower) but about 24× more {{soluble}} → net ≈ {{20×}} faster.</li>' +
      '<li><b>D<sub>LCO</sub></b> measures how well gas crosses the barrier into blood.<ul>' +
      '<li>{{Low}}: less surface ({{emphysema}}), thick wall (fibrosis), less blood (embolism), anemia.</li>' +
      '<li>{{High}}: more blood in the capillaries → exercise, {{fever}}, polycythemia, pulmonary hemorrhage, L-to-R shunt.</li></ul></li></ul></div>' +
      CVS.fig('exch-fick', 'Fick’s law of diffusion, diffusion coefficient (D), and lung diffusing capacity (DL).', 'exch', 24) + '</div>' },
  { t: 'q', id: 'E3', src: 'AC80', core: true, keep: true,
    q: 'Which of the following will <i>decrease</i> the diffusion of gases from the alveoli to the pulmonary capillaries?',
    o: ['Increased alveolar–capillary partial pressure gradient of O₂', 'Increased alveolar surface area', 'Increased thickness of the respiratory membrane', 'Increased pulmonary capillary blood flow', 'Increased solubility of the gas'], a: 2,
    ex: 'Fick’s law: diffusion ∝ area × gradient × solubility / (thickness × √MW). A thicker membrane (fibrosis, edema) slows diffusion.',
    flag: 'AC80 asked it twice (the second version had three options).' },
  { t: 'q', id: 'E4', src: 'AC80', core: true, keep: true,
    q: 'In the human respiratory system, both oxygen (O₂) and carbon dioxide (CO₂) gases can diffuse across the alveolar–capillary membrane. According to Graham’s law of diffusion, and considering the higher solubility of carbon dioxide, approximately how many times faster does carbon dioxide diffuse through the alveolar membrane compared to oxygen?',
    o: ['0.85', '2', '20', '24', '200'], a: 2,
    ex: 'Graham: rate ∝ 1/√MW, so CO₂ (44) is about 0.85 × as fast as O₂ (32). But CO₂ is about 24 × more soluble. 0.85 × 24 ≈ 20 times faster.',
    flag: 'AC80 asked it twice.' },
  { t: 'q', id: 'E5', src: 'AC81', keep: true,
    q: 'Which of the following can cause a significant increase in DLCO?',
    o: ['Fever', 'Pulmonary embolism', 'Emphysema', 'Pulmonary fibrosis', 'Severe anemia'], a: 0,
    ex: 'The lecture lists fever with exercise, polycythemia, pulmonary hemorrhage and left-to-right shunt as causes of a high DLCO (more capillary blood). Embolism, emphysema, fibrosis and anemia lower it.' },
  { t: 'c', id: 'E-C3', title: 'O2 content, capillary transit time & perfusion vs diffusion limitation', src: 'Gas exchange p.26–32, 36–40',
    html: '<div class="two"><div class="stack"><p class="eqn"><span>O<sub>2</sub> content = Hb × {{1.34}} × S<sub>O2</sub> + P<sub>O2</sub> × 0.003</span></p>' +
      '<ul class="pts"><li>Artery ≈ {{20}} mL/dL; vein ≈ 15 → each 100 mL of blood drops off 5 mL.</li>' +
      '<li><b>Transit time</b>: blood stays {{0.75 s}} in the capillary; O<sub>2</sub> equilibrates in 0.25 s → plenty of spare time.</li>' +
      '<li><b>{{Perfusion-limited}}</b> (O<sub>2</sub> at rest, CO<sub>2</sub>, N<sub>2</sub>O)<ul>' +
      '<li>gas equilibrates early → only more blood flow takes up more.</li></ul></li>' +
      '<li><b>{{Diffusion-limited}}</b> ({{CO}} always)<ul>' +
      '<li>It binds Hb so tightly that plasma P<sub>CO</sub> never rises → gradient never closes.</li>' +
      '<li>O<sub>2</sub> joins this group in thick-wall disease, hard exercise, or {{altitude}}.</li></ul></li>' +
      '<li><b>Exercise up a mountain</b>: faster blood → {{shorter transit time}} + small gradient → no time to equilibrate → P<sub>aO2</sub> falls.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('exch-perf-lim', 'Early capillary equilibration of O2 and N2O (flow-dependent uptake).', 'exch', 37) + CVS.fig('exch-diff-lim', 'Uptake of CO and of O2 in lung disease across the capillary length.', 'exch', 38) + '</div></div>' },
  { t: 'q', id: 'E6', src: 'AC80', keep: true,
    q: 'ออกกำลังกายที่สูง 5000 เมตร ให้ตาราง PaO₂ ก่อนออกกำลังกายเทียบหลังออก<div class="tblwrap"><table class="tbl compact"><thead><tr><th></th><th>PaO₂ ก่อน (rest)</th><th>PaO₂ หลัง (exercise)</th></tr></thead><tbody><tr><td>ระดับน้ำทะเล (sea level)</td><td class="num">92</td><td class="num">92</td></tr><tr><td>ที่สูง 5000 m</td><td class="num">50</td><td class="num">40</td></tr></tbody></table></div>ถามว่าอะไรคือกลไกที่ทำให้ PO₂ ลดลงเมื่อออกกำลังกายในที่สูงเมื่อเทียบกับภาวะพักในที่สูง <span class="muted">Exercise at 5,000 m: what lowers PaO₂ during exercise at altitude compared with rest at altitude?</span>',
    o: ['Increase shunt fraction', 'Increase dead space fraction', 'Decrease blood transit time', 'Hyperventilation'], a: 2,
    ex: 'Exercise speeds blood through the capillary (transit time can fall below 0.25 s). At sea level that is still enough time, but at altitude the small alveolar–capillary gradient makes O₂ uptake slow, so it becomes diffusion-limited and PaO₂ falls.' },
  { t: 'c', id: 'E-C4', title: 'Regional ventilation, perfusion & V/Q ratio from apex to base', src: 'Gas exchange p.43–51',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl compact"><thead><tr><th>Upright lung</th><th>Apex</th><th>Base</th></tr></thead><tbody>' +
      '<tr><td>Pleural pressure</td><td>{{more negative}}</td><td>less negative</td></tr>' +
      '<tr><td>Alveoli at rest</td><td>{{larger}}</td><td>smaller</td></tr>' +
      '<tr><td>Compliance → ventilation</td><td>{{lower}}</td><td>higher</td></tr>' +
      '<tr><td>Perfusion (gravity)</td><td>much less</td><td>{{much higher}}</td></tr>' +
      '<tr><td>V/Q</td><td>{{highest}}</td><td>{{lowest}}</td></tr></tbody></table></div>' +
      '<ul class="pts"><li>Apex: alveoli already stretched → expand less on each breath.</li>' +
      '<li>Ventilation and perfusion both fall toward the apex, but perfusion falls {{more}} → V/Q rises.</li>' +
      '<li>Whole lung: about 4.2 L air / 5 L blood → V/Q ≈ {{0.8}}.</li>' +
      '<li>Lying flat → blood flow nearly even from apex to base.</li></ul></div>' +
      CVS.fig('exch-vq-zones', 'Regional differences in ventilation, perfusion, and V/Q ratio from apex to base in the upright lung.', 'exch', 50) + '</div>' },
  { t: 'q', id: 'E7', src: 'AC79', core: true, keep: true,
    q: 'Which of the following parameters is greater in the apex of the lung than the base of the lung in upright position?',
    o: ['Perfusion', 'Ventilation', 'V/Q ratio', 'Intrapleural pressure', 'Compliance'], a: 2,
    ex: 'Both ventilation and perfusion are lower at the apex, but perfusion falls much more, so V/Q is highest at the apex (about 3). Apical alveoli are already stretched, so their compliance is lower; intrapleural pressure is more negative there.' },
  { t: 'q', id: 'E8', src: 'AC81', keep: true,
    q: 'What is true regarding the lung apex compared to the lung base in an upright position?',
    o: ['Higher ventilation', 'The upper alveoli are larger than the lower ones', 'Higher blood flow'], a: 1,
    ex: 'Intrapleural pressure is more negative at the apex, so apical alveoli are more distended (largest alveoli at the apex, Gas exchange p.43). Ventilation and blood flow are both higher at the base.',
    flag: 'The recall wrote “the upper alveoli are <i>smaller</i> than the lower ones” and keyed it. The lecture says the largest alveoli are at the apex (Gas exchange p.43), so the option must have read “larger”; it is shown corrected here.' },
  { t: 'c', id: 'E-C5', title: 'V/Q mismatch, dead space, shunt, A-a gradient & exercise ventilation', src: 'Gas exchange p.33, 56–68',
    html: '<div class="two"><div class="stack"><div class="cols2">' +
      '<div class="mini art"><h4>Dead space · V/Q = ∞</h4><ul><li>Air, no blood.</li><li>Alveolus looks like inspired air: P<sub>O2</sub> {{high}}, P<sub>CO2</sub> ≈ 0.</li><li>Pulmonary embolism, shock.</li></ul></div>' +
      '<div class="mini ven"><h4>Shunt · V/Q = 0</h4><ul><li>Blood, no air.</li><li>Blood leaves like venous blood: P<sub>O2</sub> {{40}}.</li><li>Pus, fluid or collapse in the alveoli.</li></ul></div></div>' +
      '<ul class="pts"><li>V/Q above normal → {{wasted ventilation}}; below normal → wasted perfusion.</li>' +
      '<li><b>Anatomic dead space</b> ≈ 150 mL ≈ {{30%}} of a 500 mL breath; measured by {{Fowler}} (N<sub>2</sub> washout).</li>' +
      '<li><b>Physiologic dead space fraction</b> (V<sub>D</sub>/V<sub>T</sub>) → {{Bohr}} equation.</li>' +
      '<li>Pus or edema in alveoli (no vasoconstriction) → {{physiological shunt}}.</li>' +
      '<li><b>A–a gradient</b> normal ≈ age/4 + 4; widened by shunt, V/Q mismatch, {{diffusion defect}}.</li>' +
      '<li><b>Exercise</b>: sudden rise ({{proprioceptors}}, mind) → then ventilation matches CO<sub>2</sub> → blood gases stay normal.</li></ul></div>' +
      CVS.fig('exch-vq-mismatch', 'Gas tensions from pure shunt (V/Q = 0) through normal to pure dead space (V/Q = infinity).', 'exch', 61) + '</div>' },
  { t: 'q', id: 'E9', src: 'AC80', core: true, keep: true,
    q: 'Concerning alveolar ventilation, what is the Bohr’s equation used to calculate?',
    o: ['Alveolar ventilation rate (V̇A)', 'Oxygen diffusion capacity', 'Dead space fraction (VD/VT)', 'Ventilation-perfusion (V/Q) ratio', 'Respiratory exchange ratio (RER)'], a: 2,
    ex: 'Bohr’s method measures the physiological dead space fraction: VD/VT = (PaCO₂ − PECO₂)/PaCO₂. Fowler’s single-breath nitrogen washout measures the anatomical dead space.' },
  { t: 'q', id: 'E10', src: 'AC80', keep: true,
    q: 'Which of the following is the approximate percentage of the tidal volume remaining in the airway?',
    o: ['5%', '10%', '15%', '30%', '45%'], a: 3,
    ex: 'About 150 of a 500 mL breath stays in the conducting airways (anatomic dead space), so VD/VT is about 0.3 (30%).',
    flag: 'Recalled in the AC80 mechanics chapter; it is a dead space question.' },
  { t: 'q', id: 'E11', src: 'AC81', core: true, keep: true,
    q: 'The V/Q in alveolar A = 1, B = 0.5, C = 2. Which of the following statements is true?',
    o: ['A wasted ventilation', 'B wasted ventilation', 'PO₂ in C is higher than normal', 'PO₂ in C is lower than normal'], a: 2,
    ex: 'Normal V/Q is about 0.8. A high V/Q (C = 2) behaves like dead space: high PO₂, low PCO₂. A low V/Q (B = 0.5) behaves like shunt: low PO₂, high PCO₂.' },
  { t: 'q', id: 'E12', src: 'AC80', keep: true,
    q: 'V/Q: alveolar A = 1, alveolar B = 0.5, alveolar C = 2. Which statement is true?',
    o: ['PO₂ in B is higher than normal', 'PO₂ in C is lower than normal', 'PCO₂ in A is higher than normal', 'B wasted ventilation', 'C wasted ventilation'], a: 4,
    ex: 'C has ventilation far in excess of blood flow: much of its ventilation is wasted (dead-space-like). B is perfusion in excess of ventilation (wasted perfusion, shunt-like).' },
  { t: 'q', id: 'E13', src: 'AC81', keep: true,
    q: 'Which of the following choices is caused by pulmonary edema not considering the constriction effect?',
    o: ['Physiological shunt', 'Physiological dead space', 'Anatomical shunt', 'Anatomical dead space'], a: 0,
    ex: 'Fluid-filled alveoli are perfused but not ventilated (V/Q → 0): blood passes without picking up O₂. That is a physiological (intrapulmonary) shunt. Hypoxic vasoconstriction would reduce it, which the question tells you to ignore.' },
  { t: 'q', id: 'E14', src: 'AC81 (clinical correlation)', core: true, keep: true,
    q: 'The patient has been diagnosed with an infection in the lower lobe of the left lung. The imaging result shows pus filling the lung tissue, obstructing gas exchange. There is no sign of hypoxic vasoconstriction in the area. Which statement is correct?',
    o: ['An increase in physiological shunt', 'An increase in anatomical shunt', 'An increase in anatomical dead space', 'An increase in physiological dead space', 'An increase in anatomical and physiological dead space'], a: 0,
    ex: 'Consolidated alveoli still receive blood but no air, and without hypoxic vasoconstriction that blood keeps flowing: a physiological shunt. An anatomical shunt bypasses the alveoli entirely (bronchial and Thebesian veins).' },
  { t: 'q', id: 'E15', src: 'AC81 (clinical correlation)', keep: true,
    q: 'A patient falls off a motorcycle and hits a tree, resulting in a chest injury. A chest X-ray reveals a left-sided pneumothorax. What is the physiological mechanism responsible for the resulting decrease in arterial PO₂?',
    o: ['Restrict lung expansion and V/Q mismatch', 'Rapid interstitial edema', 'Increase venous return'], a: 0,
    ex: 'The collapsed lung cannot expand, so its alveoli get little air while blood still flows through them: low V/Q units and shunt lower the PaO₂.',
    flag: 'AC81 also showed a CXR asking the same (keyed “restrict lung and V/Q mismatch”).' }
]});
