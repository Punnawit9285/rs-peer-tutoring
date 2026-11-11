/* Section E: Alveolar Ventilation, Diffusion, Perfusion Limitation & V/Q Matching (681114-1 Gas exchange.pdf, 72 pages). */
CVS.add({ id: 'E', short: 'Gas exchange', title: 'Alveolar Ventilation, Diffusion, Perfusion Limitation & V/Q Matching', kind: 'Lecture',
  blurb: 'Dalton and Henry laws, the partial pressure cascade and alveolar gas equation, Fick diffusion and DLCO, O2 content, perfusion vs diffusion limitation, regional V/Q differences, dead space, shunt, A-a gradient, and exercise ventilation.',
  items: [
  { t: 'c', id: 'E-C1', title: 'Partial pressure cascade, alveolar gas equation & alveolar ventilation', src: 'Gas exchange p.7–12, 15',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Dalton’s law</b> (P<sub>gas</sub> = P<sub>total</sub> &times; F<sub>gas</sub>): dry inspired air at sea level has P<sub>O2</sub> = 760 &times; 0.21 = {{160 mmHg}}.</li>' +
      '<li><b>Humidified tracheal air</b>: water vapor dilutes inspired air (P<sub>H2O</sub> = {{47 mmHg}} at 37&deg;C), so P<sub>IO2</sub> = (760 &minus; 47) &times; 0.21 = {{150 mmHg}}.</li>' +
      '<li><b>Alveolar gas equation</b>: P<sub>AO2</sub> = P<sub>IO2</sub> &minus; ({{PACO2 / R}}) + F. With normal respiratory quotient R = 0.8 and P<sub>ACO2</sub> = 40 mmHg, P<sub>AO2</sub> = 150 &minus; (40 / 0.8) = <b>100 mmHg</b> (103 mmHg on the shunt diagram). Macronutrient RQ: carbohydrates {{1.0}}, proteins ~0.8, fats {{0.7}}.</li>' +
      '<li><b>Physiologic shunt</b>: normal arterial P<sub>aO2</sub> is <b>97 mmHg</b> (slightly below P<sub>AO2</sub>) because <b>2%</b> of cardiac output bypasses alveolar capillaries via the {{bronchial}} artery and coronary {{thebesian}} veins.</li>' +
      '<li><b>Henry’s law</b>: dissolved [O<sub>2</sub>] = P<sub>O2</sub> &times; {{0.003}} mL O<sub>2</sub>/100 mL blood/mmHg (= 0.3 mL/dL at P<sub>aO2</sub> 100 mmHg; only free dissolved molecules generate partial pressure).</li>' +
      '<li><b>Alveolar ventilation</b>: V&#775;<sub>A</sub> = {{(TV &minus; DS) &times; RR}} (whereas minute ventilation = TV &times; RR).</li></ul></div>' +
      CVS.fig('exch-shunt-phys', 'Oxygen cascade from dry air to arterial blood, showing the 2% anatomic/physiologic shunt.', 'exch', 8) + '</div>' },
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
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Blood–gas barrier</b> (alveolar epithelium, fused basement membrane, capillary endothelium): thickness T is as thin as {{0.3 &mu;m}} across a surface area A of {{50–100 m&sup2;}}.</li>' +
      '<li><b>Fick’s &amp; Graham’s laws</b>: V&#775;<sub>gas</sub> = [D &times; A &times; (P<sub>1</sub> &minus; P<sub>2</sub>)] / T = D<sub>L</sub> &times; (P<sub>1</sub> &minus; P<sub>2</sub>), where D<sub>L</sub> = (D &times; A) / T and diffusion coefficient D &prop; {{Solubility / &radic;MW}}.</li>' +
      '<li><b>CO<sub>2</sub> vs O<sub>2</sub></b>: CO<sub>2</sub> solubility in water is {{24.2 times}} higher than O<sub>2</sub> (0.592 vs 0.0244) while &radic;(44/32) is only 1.17&times; heavier, so CO<sub>2</sub> diffuses {{20 times}} faster than O<sub>2</sub> (relative D: O<sub>2</sub> = 1, CO<sub>2</sub> = 20, CO = 0.81, N<sub>2</sub> = 0.53, He = 0.25).</li>' +
      '<li><b>D<sub>LCO</sub> (T<sub>LCO</sub>)</b>: normal value is about {{25 mL/min/mmHg}} (normal range 80–120% predicted in men, 76–120% in women).</li>' +
      '<li><b>Low D<sub>LCO</sub> (&lt;80%)</b>: &downarrow; area ({{emphysema}}, lung resection), &uparrow; thickness (fibrosis), or false-low from &downarrow; gradient (smoking), &downarrow; perfusion ({{Valsalva maneuver}}, pulmonary embolism, pulmonary hypertension, extrapulmonary R-to-L shunt), or &downarrow; Hb (anemia).</li>' +
      '<li><b>High D<sub>LCO</sub> (&gt;120%)</b>: &uparrow; perfusion ({{M&uuml;ller’s maneuver}} [inhaling against a closed glottis], pulmonary hemorrhage, early congestion, L-to-R shunt, exercise, fever) or &uparrow; Hb ({{polycythemia}}).</li></ul></div>' +
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
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Total O<sub>2</sub> content</b> = (Hb &times; {{1.34}} &times; S<sub>O2</sub>) + (P<sub>O2</sub> &times; 0.003). At normal [Hb] = 15 g/dL:</li>' +
      '<li><b>Arterial blood</b> (S<sub>aO2</sub> 100%, P<sub>aO2</sub> 100 mmHg): 20.1 + 0.3 = {{20.4 mL/dL}} (~20 mL/dL). <b>Venous blood</b> (S<sub>vO2</sub> 75%, P<sub>vO2</sub> 40 mmHg): 15.07 + 0.12 = {{15.19 mL/dL}} (~15 mL/dL). Thus 100 mL blood gains 5 mL O<sub>2</sub> (5 L/min CO &rarr; <b>250 mL O<sub>2</sub>/min</b>).</li>' +
      '<li><b>Capillary transit time</b>: RBCs spend {{0.75 s}} in the pulmonary capillary at rest (HR 80 bpm). Normal O<sub>2</sub> equilibrates in {{0.25 s}} (<b>1/3</b> of transit time), leaving a 0.50 s safety margin.</li>' +
      '<li><b>{{Perfusion-limited}} exchange</b> (<b>N<sub>2</sub>O, CO<sub>2</sub>, and O<sub>2</sub> at rest</b>): gas equilibrates early along the capillary (N<sub>2</sub>O in {{0.075 s}} = 1/10 of transit time because it does not bind Hb); total transfer can only be increased by increasing pulmonary blood flow.</li>' +
      '<li><b>{{Diffusion-limited}} exchange</b> ({{Carbon monoxide (CO)}} always; <b>O<sub>2</sub> in emphysema, fibrosis, or strenuous exercise</b>): gas fails to equilibrate by the end of the capillary because CO binds tightly to Hb without raising dissolved plasma P<sub>CO</sub>, maintaining the partial pressure gradient throughout the capillary.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('exch-perf-lim', 'Early capillary equilibration of O2 and N2O (flow-dependent uptake).', 'exch', 37) + CVS.fig('exch-diff-lim', 'Uptake of CO and of O2 in lung disease across the capillary length.', 'exch', 38) + '</div></div>' },
  { t: 'q', id: 'E6', src: 'AC80', keep: true,
    q: 'ออกกำลังกายที่สูง 5000 เมตร ให้ตาราง PaO₂ ก่อนออกกำลังกายเทียบหลังออก<div class="tblwrap"><table class="tbl compact"><thead><tr><th></th><th>PaO₂ ก่อน (rest)</th><th>PaO₂ หลัง (exercise)</th></tr></thead><tbody><tr><td>ระดับน้ำทะเล (sea level)</td><td class="num">92</td><td class="num">92</td></tr><tr><td>ที่สูง 5000 m</td><td class="num">50</td><td class="num">40</td></tr></tbody></table></div>ถามว่าอะไรคือกลไกที่ทำให้ PO₂ ลดลงเมื่อออกกำลังกายในที่สูงเมื่อเทียบกับภาวะพักในที่สูง <span class="muted">Exercise at 5,000 m: what lowers PaO₂ during exercise at altitude compared with rest at altitude?</span>',
    o: ['Increase shunt fraction', 'Increase dead space fraction', 'Decrease blood transit time', 'Hyperventilation'], a: 2,
    ex: 'Exercise speeds blood through the capillary (transit time can fall below 0.25 s). At sea level that is still enough time, but at altitude the small alveolar–capillary gradient makes O₂ uptake slow, so it becomes diffusion-limited and PaO₂ falls.' },
  { t: 'c', id: 'E-C4', title: 'Regional ventilation, perfusion & V/Q ratio from apex to base', src: 'Gas exchange p.43–51',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Feature (upright lung)</th><th>Apex</th><th>Base</th></tr></thead><tbody>' +
      '<tr><td><b>Intrapleural pressure (P<sub>pl</sub>)</b></td><td>More negative ({{&minus;10 cmH2O}})</td><td>Less negative ({{&minus;2 cmH2O}})</td></tr>' +
      '<tr><td><b>Transpulmonary pressure</b></td><td>Greater (+10 cmH<sub>2</sub>O)</td><td>Lower (+2 cmH<sub>2</sub>O)</td></tr>' +
      '<tr><td><b>Resting alveolar size (at FRC)</b></td><td>{{Largest resting size}}</td><td>{{Smallest resting size}}</td></tr>' +
      '<tr><td><b>Alveolar compliance &amp; V&#775;<sub>A</sub></b></td><td>{{Less compliant}} &rarr; <b>less ventilation</b></td><td>{{More compliant}} &rarr; <b>more ventilation</b></td></tr>' +
      '<tr><td><b>Arterial pressure, PVR &amp; Q&#775;</b></td><td>Lower P<sub>a</sub>, higher PVR &rarr; <b>much less perfusion</b></td><td>Higher P<sub>a</sub>, lower PVR &rarr; <b>much more perfusion</b></td></tr>' +
      '<tr><td><b>V/Q ratio</b></td><td>{{Highest V/Q}} (&gt;1; wasted ventilation)</td><td>{{Lowest V/Q}} (&lt;0.8; relative underventilation)</td></tr></tbody></table></div>' +
      '<p class="note"><b>Overall normal V/Q</b>: with TV = 500 mL, DS = 150 mL, RR = 12/min, V&#775;<sub>A</sub> = (500 &minus; 150) &times; 12 = <b>4200 mL/min</b> and cardiac output Q&#775; = <b>5000 mL/min</b>, giving overall V/Q = 4200 / 5000 = {{0.84}} (normal range 0.8–1.0). In the supine position, blood flow becomes nearly uniform from apex to base (ventral vs dorsal).</p></div>' +
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
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Dead space (V/Q = &infin;)</b>: ventilation without perfusion (Q = 0), so alveolar gas equilibrates with humidified inspired air (P<sub>AO2</sub> = {{150 mmHg}}, P<sub>ACO2</sub> = {{0 mmHg}}).</li>' +
      '<li><b>Anatomical dead space</b> (~150 mL, or 2 mL/kg) is measured by {{Fowler’s method}} (single-breath N<sub>2</sub> washout). <b>Physiological dead space</b> (anatomical + alveolar DS) is measured by <b>Bohr’s equation</b>: DS / TV = {{(PACO2 &minus; PECO2) / PACO2}}. Increased in PE, shock, emphysema, or positive-pressure ventilation.</li>' +
      '<li><b>Right-to-left shunt (V/Q = 0)</b>: perfusion without ventilation (V = 0), so end-capillary blood remains identical to mixed venous blood (P<sub>aO2</sub> = {{40 mmHg}}, P<sub>aCO2</sub> = {{46 mmHg}}). Caused by airway obstruction, fluid/pus/blood-filled alveoli, atelectasis, pulmonary AVM, hepatopulmonary syndrome, or intracardiac R-to-L shunt (Eisenmenger).</li>' +
      '<li><b>A–a gradient</b> (P<sub>AO2</sub> &minus; P<sub>aO2</sub>): normally 0–10 mmHg (~6 mmHg) or estimated by {{(Age / 4) + 4}}; increased in <b>R-to-L shunt, V/Q mismatch, and diffusion defect</b>.</li>' +
      '<li><b>Exercise ventilation</b>: abrupt onset increase driven by psychic stimuli and muscle/joint {{proprioceptors}}, brief pause, then gradual rise. In graded moderate exercise ({{isocapnic buffering}}), ventilation rises proportionally with CO<sub>2</sub> production so P<sub>aO2</sub>, P<sub>aCO2</sub>, and pH remain normal; in strenuous exercise, buffering of {{lactic acid}}, &uparrow; plasma K<sup>+</sup>, and &uparrow; temperature further stimulate ventilation.</li></ul></div>' +
      CVS.fig('exch-vq-mismatch', 'Gas tensions from pure shunt (V/Q = 0) through normal to pure dead space (V/Q = infinity).', 'exch', 61) + '</div>' + '<p class="note"><b>From the past papers</b> · An anatomical dead space of about 150 mL is about 30% of a 500 mL breath (VD/VT ≈ 0.3) (AC80).</p>' },
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
