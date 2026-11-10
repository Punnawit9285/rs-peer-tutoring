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
  { t: 'q', id: 'E1', src: 'Gas exchange p.7, 13', core: true,
    q: 'According to Dalton’s law, what is the partial pressure of oxygen (in mmHg) in <b>dry inspired air</b> at sea level?',
    o: ['160', '47', '100', '150', '200'], a: 0,
    ex: 'In dry inspired air at sea level (760 mmHg), PO2 = 760 × 0.21 = 160 mmHg. Once humidified in the trachea (PH2O = 47 mmHg), PIO2 drops to (760 − 47) × 0.21 = 150 mmHg; in alveoli PAO2 is ~100 mmHg.' },
  { t: 'q', id: 'E2', src: 'Gas exchange p.8–9', core: true,
    q: 'A healthy adult breathing room air at sea level (P<sub>IO2</sub> = 150 mmHg, P<sub>ACO2</sub> = 40 mmHg) switches from a pure carbohydrate diet (R = 1.0) to a pure fat diet (R = 0.7) without changing P<sub>ACO2</sub>. How does calculated P<sub>AO2</sub> change, and why is arterial P<sub>aO2</sub> still slightly lower than P<sub>AO2</sub>?',
    o: ['PAO2 decreases from 110 mmHg to ~93 mmHg; PaO2 is slightly lower due to the 2% physiologic shunt from bronchial and thebesian veins',
        'PAO2 increases from 93 mmHg to 110 mmHg; PaO2 is lower because water vapor dilutes arterial blood by 47 mmHg',
        'PAO2 remains fixed at 100 mmHg regardless of diet; PaO2 is lower due to anatomic dead space in the conducting airways',
        'PAO2 decreases from 160 mmHg to 150 mmHg; PaO2 is lower because 20% of cardiac output bypasses the lungs',
        'PAO2 increases from 100 mmHg to 150 mmHg; PaO2 is lower because hemoglobin oxidizes Fe2+ to Fe3+'], a: 0,
    ex: 'By the alveolar gas equation PAO2 = PIO2 − (PACO2 / R): at R = 1.0 (carbohydrate), PAO2 = 150 − 40/1.0 = 110 mmHg; at R = 0.7 (fat), PAO2 = 150 − 40/0.7 ≈ 93 mmHg. Normal PaO2 (~97 mmHg) is slightly below PAO2 (~103 mmHg) because 2% of cardiac output bypasses pulmonary capillaries via bronchial arteries and coronary thebesian veins (physiologic shunt).' },
  { t: 'tf', id: 'E3', src: 'Gas exchange p.15',
    q: 'According to Henry’s law, oxygen chemically bound to hemoglobin directly contributes to the partial pressure of oxygen (P<sub>O2</sub>) in arterial plasma.', a: false,
    ex: 'False. Only free, physically dissolved gas molecules contribute to partial pressure in blood (0.003 mL O2 per 100 mL plasma per mmHg PO2); chemically modified or Hb-bound O2 does not exert partial pressure.' },

  { t: 'c', id: 'E-C2', title: 'Fick’s law of diffusion, Graham’s law & DLCO', src: 'Gas exchange p.18–24, 41',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Blood–gas barrier</b> (alveolar epithelium, fused basement membrane, capillary endothelium): thickness T is as thin as {{0.3 &mu;m}} across a surface area A of {{50–100 m&sup2;}}.</li>' +
      '<li><b>Fick’s &amp; Graham’s laws</b>: V&#775;<sub>gas</sub> = [D &times; A &times; (P<sub>1</sub> &minus; P<sub>2</sub>)] / T = D<sub>L</sub> &times; (P<sub>1</sub> &minus; P<sub>2</sub>), where D<sub>L</sub> = (D &times; A) / T and diffusion coefficient D &prop; {{Solubility / &radic;MW}}.</li>' +
      '<li><b>CO<sub>2</sub> vs O<sub>2</sub></b>: CO<sub>2</sub> solubility in water is {{24.2 times}} higher than O<sub>2</sub> (0.592 vs 0.0244) while &radic;(44/32) is only 1.17&times; heavier, so CO<sub>2</sub> diffuses {{20 times}} faster than O<sub>2</sub> (relative D: O<sub>2</sub> = 1, CO<sub>2</sub> = 20, CO = 0.81, N<sub>2</sub> = 0.53, He = 0.25).</li>' +
      '<li><b>D<sub>LCO</sub> (T<sub>LCO</sub>)</b>: normal value is about {{25 mL/min/mmHg}} (normal range 80–120% predicted in men, 76–120% in women).</li>' +
      '<li><b>Low D<sub>LCO</sub> (&lt;80%)</b>: &downarrow; area ({{emphysema}}, lung resection), &uparrow; thickness (fibrosis), or false-low from &downarrow; gradient (smoking), &downarrow; perfusion ({{Valsalva maneuver}}, pulmonary embolism, pulmonary hypertension, extrapulmonary R-to-L shunt), or &downarrow; Hb (anemia).</li>' +
      '<li><b>High D<sub>LCO</sub> (&gt;120%)</b>: &uparrow; perfusion ({{M&uuml;ller’s maneuver}} [inhaling against a closed glottis], pulmonary hemorrhage, early congestion, L-to-R shunt, exercise, fever) or &uparrow; Hb ({{polycythemia}}).</li></ul></div>' +
      CVS.fig('exch-fick', 'Fick’s law of diffusion, diffusion coefficient (D), and lung diffusing capacity (DL).', 'exch', 24) + '</div>' },
  { t: 'q', id: 'E4', src: 'Gas exchange p.19, 25', core: true,
    q: 'An increase in which of the following factors will lead to a <b>decrease</b> in gas diffusion across the alveolar–capillary membrane?',
    o: ['Membrane thickness', 'Surface area', 'Solubility of gas', 'Diffusion coefficient', 'Partial pressure gradient of gas'], a: 0,
    ex: 'By Fick’s law, Vgas = [D × A × (P1 − P2)] / T. Membrane thickness (T) is in the denominator, so an increase in barrier thickness (e.g., pulmonary fibrosis) decreases gas diffusion, whereas increasing A, solubility, D, or (P1 − P2) increases diffusion.' },
  { t: 'q', id: 'E5', src: 'Gas exchange p.20–22',
    q: 'Why does carbon dioxide (MW 44) diffuse across the alveolar–capillary membrane approximately 20 times faster than oxygen (MW 32)?',
    o: ['The solubility of CO2 in water/plasma is 24.2 times greater than that of O2, outweighing its 1.17-fold higher square root of molecular weight',
        'The molecular weight of CO2 is smaller than that of O2, increasing its Graham’s law velocity 20-fold',
        'CO2 is actively pumped across type I pneumocytes by carbonic anhydrase at 20 times the passive rate of O2',
        'The alveolar–capillary partial pressure gradient for CO2 (46 − 40 = 6 mmHg) is 20 times larger than that for O2',
        'CO2 binds to ferrous iron (Fe2+) 20 times faster than O2'], a: 0,
    ex: 'Graham’s law gives D ∝ Solubility / √MW. At 37°C, CO2 solubility (0.592) is 24.2 times higher than O2 solubility (0.0244), while √(44/32) ≈ 1.17; 24.2 / 1.17 ≈ 20.7, so CO2 diffuses ~20 times faster than O2.' },
  { t: 'q', id: 'E6', src: 'Gas exchange p.41', core: true,
    q: 'Which pair correctly matches a condition that causes a <b>high D<sub>LCO</sub> (&gt;120% predicted)</b> with a condition that causes a <b>low D<sub>LCO</sub> (&lt;80% predicted)</b>?',
    o: ['High DLCO: Müller’s maneuver or alveolar hemorrhage · Low DLCO: Valsalva maneuver or emphysema',
        'High DLCO: Valsalva maneuver or anemia · Low DLCO: Müller’s maneuver or polycythemia',
        'High DLCO: pulmonary embolism or fibrosis · Low DLCO: exercise or left-to-right shunt',
        'High DLCO: emphysema or smoking · Low DLCO: polycythemia or early pulmonary congestion',
        'High DLCO: pulmonary resection · Low DLCO: fever or exercise'], a: 0,
    ex: 'DLCO rises (>120%) when pulmonary capillary blood volume or Hb increases: Müller’s maneuver (inhaling against a closed glottis), alveolar hemorrhage, early congestion, L-to-R shunt, exercise, fever, or polycythemia. DLCO falls (<80%) with reduced area (emphysema, resection), thickened barrier (fibrosis), reduced perfusion (Valsalva maneuver, PE, pulmonary hypertension), anemia, or smoking.' },

  { t: 'c', id: 'E-C3', title: 'O2 content, capillary transit time & perfusion vs diffusion limitation', src: 'Gas exchange p.26–32, 36–40',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Total O<sub>2</sub> content</b> = (Hb &times; {{1.34}} &times; S<sub>O2</sub>) + (P<sub>O2</sub> &times; 0.003). At normal [Hb] = 15 g/dL:</li>' +
      '<li><b>Arterial blood</b> (S<sub>aO2</sub> 100%, P<sub>aO2</sub> 100 mmHg): 20.1 + 0.3 = {{20.4 mL/dL}} (~20 mL/dL). <b>Venous blood</b> (S<sub>vO2</sub> 75%, P<sub>vO2</sub> 40 mmHg): 15.07 + 0.12 = {{15.19 mL/dL}} (~15 mL/dL). Thus 100 mL blood gains 5 mL O<sub>2</sub> (5 L/min CO &rarr; <b>250 mL O<sub>2</sub>/min</b>).</li>' +
      '<li><b>Capillary transit time</b>: RBCs spend {{0.75 s}} in the pulmonary capillary at rest (HR 80 bpm). Normal O<sub>2</sub> equilibrates in {{0.25 s}} (<b>1/3</b> of transit time), leaving a 0.50 s safety margin.</li>' +
      '<li><b>{{Perfusion-limited}} exchange</b> (<b>N<sub>2</sub>O, CO<sub>2</sub>, and O<sub>2</sub> at rest</b>): gas equilibrates early along the capillary (N<sub>2</sub>O in {{0.075 s}} = 1/10 of transit time because it does not bind Hb); total transfer can only be increased by increasing pulmonary blood flow.</li>' +
      '<li><b>{{Diffusion-limited}} exchange</b> ({{Carbon monoxide (CO)}} always; <b>O<sub>2</sub> in emphysema, fibrosis, or strenuous exercise</b>): gas fails to equilibrate by the end of the capillary because CO binds tightly to Hb without raising dissolved plasma P<sub>CO</sub>, maintaining the partial pressure gradient throughout the capillary.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('exch-perf-lim', 'Early capillary equilibration of O2 and N2O (flow-dependent uptake).', 'exch', 37) + CVS.fig('exch-diff-lim', 'Uptake of CO and of O2 in lung disease across the capillary length.', 'exch', 38) + '</div></div>' },
  { t: 'q', id: 'E7', src: 'Gas exchange p.28–30', core: true,
    q: 'Given [Hb] = 15 g/dL, O<sub>2</sub> binding capacity = 1.34 mL O<sub>2</sub>/g Hb, and solubility = 0.003 mL/dL/mmHg, what are the total O<sub>2</sub> contents of normal arterial blood (P<sub>aO2</sub> = 100 mmHg, S<sub>aO2</sub> = 100%) and mixed venous blood (P<sub>vO2</sub> = 40 mmHg, S<sub>vO2</sub> = 75%), and how much O<sub>2</sub> is added to blood per minute at a cardiac output of 5 L/min?',
    o: ['Arterial 20.4 mL/dL · Venous 15.19 mL/dL · 250 mL O2/min added across the lungs',
        'Arterial 15.19 mL/dL · Venous 20.4 mL/dL · 500 mL O2/min added across the lungs',
        'Arterial 20.1 mL/dL · Venous 0.12 mL/dL · 1000 mL O2/min added across the lungs',
        'Arterial 100 mL/dL · Venous 40 mL/dL · 3000 mL O2/min added across the lungs',
        'Arterial 0.3 mL/dL · Venous 0.12 mL/dL · 9 mL O2/min added across the lungs'], a: 0,
    ex: 'Arterial O2 content = (15 × 1.34 × 1.00) + (100 × 0.003) = 20.1 + 0.3 = 20.4 mL/dL (~20 mL/dL). Venous O2 content = (15 × 1.34 × 0.75) + (40 × 0.003) = 15.07 + 0.12 = 15.19 mL/dL (~15 mL/dL). The arteriovenous difference is ~5 mL O2 per 100 mL blood, so 5000 mL/min of cardiac output picks up 50 × 5 = 250 mL O2/min.' },
  { t: 'q', id: 'E8', src: 'Gas exchange p.37–40', core: true,
    q: 'Which of the following gases is <b>always</b> diffusion-limited?',
    o: ['CO', 'CO2', 'N2O', 'O2 under normal condition', 'O2 with mild lung disease'], a: 0,
    ex: 'Carbon monoxide (CO) binds so avidly to hemoglobin that dissolved plasma PCO barely rises along the capillary; the alveolar-capillary partial pressure gradient is maintained all the way to the end of the capillary, making CO uptake always diffusion-limited (which is why DLCO measures diffusing capacity).' },
  { t: 'open', id: 'E9', src: 'Gas exchange p.31, 36–39',
    q: 'Compare the pulmonary capillary equilibration times of N<sub>2</sub>O, normal O<sub>2</sub>, and CO during the 0.75 s RBC transit time, and explain why N<sub>2</sub>O and CO behave at opposite extremes.',
    ans: 'N2O does not bind to hemoglobin, so dissolved plasma PN2O rises immediately and equilibrates with alveolar gas in 0.075 s (1/10 of the 0.75 s transit time), making N2O purely perfusion-limited. O2 binds to hemoglobin (which enters 75% saturated and takes up the remaining 25%), so plasma PO2 equilibrates in 0.25 s (1/3 of transit time) and is also perfusion-limited in healthy lungs at rest. CO binds tightly to hemoglobin with very high affinity, so almost no free CO accumulates in plasma, the partial pressure gradient is maintained for the entire 0.75 s, and CO never equilibrates (purely diffusion-limited).' },

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
  { t: 'q', id: 'E10', src: 'Gas exchange p.43–44, 50, 52', core: true,
    q: 'Which of the following statements is correct regarding the <b>apex</b> of the upright lung compared with the base?',
    o: ['Larger baseline alveoli', 'More perfusion', 'More ventilation', 'Intrapleural pressure is less negative', 'Lower transpulmonary pressure'], a: 0,
    ex: 'At the apex of the upright lung, gravity makes intrapleural pressure more negative (−10 vs −2 cmH2O at the base), creating a larger resting transpulmonary pressure (10 vs 2 cmH2O) and larger baseline alveoli. Because these large alveoli sit on the flat upper part of the P-V curve, they are less compliant and receive less ventilation, while low hydrostatic pressure gives the apex even less perfusion (and thus the highest V/Q ratio).' },
  { t: 'q', id: 'E11', src: 'Gas exchange p.51, 53', core: true,
    q: 'What is the overall V/Q ratio of a patient with tidal volume (TV) 300 mL, dead space (DS) 100 mL, respiratory rate (RR) 10/min, and cardiac output (CO) 5 L/min?',
    o: ['0.4', '0.2', '0.6', '0.8', '1.0'], a: 0,
    ex: 'Alveolar ventilation = (TV − DS) × RR = (300 − 100) × 10 = 2000 mL/min. Pulmonary blood flow (CO) = 5000 mL/min. Therefore V/Q = 2000 / 5000 = 0.4.' },

  { t: 'c', id: 'E-C5', title: 'V/Q mismatch, dead space, shunt, A-a gradient & exercise ventilation', src: 'Gas exchange p.33, 56–68',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Dead space (V/Q = &infin;)</b>: ventilation without perfusion (Q = 0), so alveolar gas equilibrates with humidified inspired air (P<sub>AO2</sub> = {{150 mmHg}}, P<sub>ACO2</sub> = {{0 mmHg}}).</li>' +
      '<li><b>Anatomical dead space</b> (~150 mL, or 2 mL/kg) is measured by {{Fowler’s method}} (single-breath N<sub>2</sub> washout). <b>Physiological dead space</b> (anatomical + alveolar DS) is measured by <b>Bohr’s equation</b>: DS / TV = {{(PACO2 &minus; PECO2) / PACO2}}. Increased in PE, shock, emphysema, or positive-pressure ventilation.</li>' +
      '<li><b>Right-to-left shunt (V/Q = 0)</b>: perfusion without ventilation (V = 0), so end-capillary blood remains identical to mixed venous blood (P<sub>aO2</sub> = {{40 mmHg}}, P<sub>aCO2</sub> = {{46 mmHg}}). Caused by airway obstruction, fluid/pus/blood-filled alveoli, atelectasis, pulmonary AVM, hepatopulmonary syndrome, or intracardiac R-to-L shunt (Eisenmenger).</li>' +
      '<li><b>A–a gradient</b> (P<sub>AO2</sub> &minus; P<sub>aO2</sub>): normally 0–10 mmHg (~6 mmHg) or estimated by {{(Age / 4) + 4}}; increased in <b>R-to-L shunt, V/Q mismatch, and diffusion defect</b>.</li>' +
      '<li><b>Exercise ventilation</b>: abrupt onset increase driven by psychic stimuli and muscle/joint {{proprioceptors}}, brief pause, then gradual rise. In graded moderate exercise ({{isocapnic buffering}}), ventilation rises proportionally with CO<sub>2</sub> production so P<sub>aO2</sub>, P<sub>aCO2</sub>, and pH remain normal; in strenuous exercise, buffering of {{lactic acid}}, &uparrow; plasma K<sup>+</sup>, and &uparrow; temperature further stimulate ventilation.</li></ul></div>' +
      CVS.fig('exch-vq-mismatch', 'Gas tensions from pure shunt (V/Q = 0) through normal to pure dead space (V/Q = infinity).', 'exch', 61) + '</div>' },
  { t: 'q', id: 'E12', src: 'Gas exchange p.56–57', core: true,
    q: 'A patient with an acute pulmonary embolism has a tidal volume (TV) of 500 mL, alveolar P<sub>ACO2</sub> of 40 mmHg, and mixed expired P<sub>ECO2</sub> of 24 mmHg. Which method is used here, and what is the physiological dead space volume?',
    o: ['Bohr’s method · physiological dead space = 200 mL (DS/TV = 0.40)',
        'Fowler’s single-breath N2 washout · anatomical dead space = 150 mL (DS/TV = 0.30)',
        'Bohr’s method · physiological dead space = 300 mL (DS/TV = 0.60)',
        'Fick’s method · physiological dead space = 100 mL (DS/TV = 0.20)',
        'Dalton’s method · physiological dead space = 250 mL (DS/TV = 0.50)'], a: 0,
    ex: 'Bohr’s equation measures physiological dead space fraction: DS/TV = (PACO2 − PECO2) / PACO2 = (40 − 24) / 40 = 16 / 40 = 0.40. Multiplying by TV (500 mL) gives a physiological dead space of 200 mL (elevated above the normal 150 mL anatomical dead space because PE creates unperfused alveolar dead space). Fowler’s single-breath N2 washout measures anatomical dead space only.' },
  { t: 'q', id: 'E13', src: 'Gas exchange p.58–61', core: true,
    q: 'Which statement correctly contrasts an alveolar unit with <b>pure dead space (V/Q = &infin;)</b> and a unit with <b>pure right-to-left shunt (V/Q = 0)</b>, along with their effect on the A–a gradient?',
    o: ['Dead space has PAO2 = 150 mmHg and PACO2 = 0 mmHg; shunt has PaO2 = 40 mmHg and PaCO2 = 46 mmHg; shunt, V/Q mismatch, and diffusion defects widen the A–a gradient above (Age/4) + 4',
        'Dead space has PAO2 = 40 mmHg and PACO2 = 46 mmHg; shunt has PaO2 = 150 mmHg and PaCO2 = 0 mmHg; only anatomic dead space widens the A–a gradient',
        'Both pure dead space and pure shunt have PAO2 = 100 mmHg and PACO2 = 40 mmHg, with an A–a gradient of zero',
        'Dead space is caused by atelectasis or Eisenmenger syndrome; shunt is caused by pulmonary embolism or positive-pressure ventilation',
        'Pure shunt reduces the A–a gradient to 0 mmHg because venous blood bypasses the lungs'], a: 0,
    ex: 'In pure dead space (V/Q = ∞, no blood flow), alveolar gas matches humidified inspired air (PAO2 = 150 mmHg, PACO2 = 0 mmHg). In pure shunt (V/Q = 0, no ventilation), end-capillary blood matches mixed venous blood (PaO2 = 40 mmHg, PaCO2 = 46 mmHg). An elevated A–a gradient (>0–10 mmHg or > Age/4 + 4) occurs in R-to-L shunt, V/Q mismatch, and diffusion defects.' },
  { t: 'tf', id: 'E14', src: 'Gas exchange p.64–65',
    q: 'During moderate graded exercise (isocapnic buffering), arterial P<sub>aO2</sub>, P<sub>aCO2</sub>, and pH remain almost exactly normal because ventilation increases proportionally with CO<sub>2</sub> production.', a: true,
    ex: 'True. At the onset of exercise, ventilation jumps via psychic stimuli and proprioceptors in muscles, tendons, and joints, and during moderate graded exercise (isocapnic buffering) ventilation tracks CO2 production closely so PaO2, PaCO2, and arterial pH stay nearly constant.' }
]});
