/* Section G: Gas phase, partial pressures & gas-liquid equilibrium (Gas phase handout, slides 1–30). */
CVS.add({ id: 'G', short: 'Gas phase', title: 'Gas Phase, Partial Pressures & Gas-Liquid Equilibrium', kind: 'Lecture',
  blurb: 'STP/STPD/BTPS conventions, ideal and real gas laws, respiratory humidification, Dalton law, the alveolar gas equation, Graham and Henry laws, and clinical oxygen cylinders and delivery devices.',
  items: [
  { t: 'c', id: 'G-C1', title: 'Standard conditions (STP, STPD, BTPS) and the gas laws', src: 'Gas phase p.3–13',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>STPD</b> = 0 °C, 760 mmHg, {{dry}}.</li>' +
      '<li><b>BTPS</b> = {{37 °C}}, room pressure, {{saturated}} with water vapour (47 mmHg).</li>' +
      '<li><b>Boyle</b> (T constant): P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub> → volume up → pressure {{down}}.<ul>' +
      '<li>Chest expands → alveolar pressure falls below air → air flows {{in}}.</li></ul></li>' +
      '<li><b>Charles</b> (P constant): V rises with T. <b>Gay-Lussac</b> (V constant): P rises with T.</li>' +
      '<li><b>Ideal gas</b>: {{PV = nRT}}; 1 mole fills {{22.4 L}} at STP.</li>' +
      '<li>Real gases stop behaving at {{high pressure}} (the curves leave PV/RT = 1).</li></ul></div>' +
      CVS.fig('gas-compress', 'Compressibility factor (PV/RT) of five real gases at 0 °C compared with an ideal gas.', 'gas', 11) + '</div>' },
  { t: 'q', id: 'G1', src: 'AC79', core: true, keep: true,
    q: 'Which statement is true regarding the Boyle’s law?',
    o: ['Pressure increases when the temperature increases.', 'Pressure increases when the volume increases', 'Pressure increases when the volume decreases.', 'Pressure is always equal to volume.', 'Total pressure is calculated from the summation of partial pressures.'], a: 2,
    ex: 'Boyle: at constant temperature, P₁V₁ = P₂V₂, so pressure rises as volume falls. A is Gay-Lussac, E is Dalton.' },
  { t: 'q', id: 'G2', src: 'AC80 · AC81', core: true, keep: true,
    q: 'Air flows from high to low pressure during inspiration-expiration, which law indicates this?',
    o: ['Boyle', 'Charle', 'Gay-Lussac', 'Dalton', 'Henry'], a: 0,
    ex: 'Breathing works by Boyle’s law: expanding the thorax lowers alveolar pressure below atmospheric so air flows in; shrinking it raises alveolar pressure so air flows out.',
    flag: 'AC80 asked “The mechanism of pulmonary inspiration and expiration is best explained by which gas law?” (Boyle).' },
  { t: 'c', id: 'G-C2', title: 'Dalton law, airway humidification and the O2/CO2 cascade', src: 'Gas phase p.15–20',
    html: '<p><b>Dalton</b>: each gas pushes in proportion to its share → P<sub>gas</sub> = fraction × total pressure.</p>' +
      '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>mmHg</th><th>Dry air</th><th>Humidified airway</th><th>Alveolus</th></tr></thead><tbody>' +
      '<tr><td><b>O<sub>2</sub></b></td><td>{{159}}</td><td>{{149}}</td><td>{{≈ 100}}</td></tr>' +
      '<tr><td><b>CO<sub>2</sub></b></td><td>≈ 0</td><td>≈ 0</td><td>{{40}}</td></tr>' +
      '<tr><td><b>H<sub>2</sub>O</b></td><td>0</td><td>{{47}}</td><td>47</td></tr></tbody></table></div>' +
      '<ul class="pts"><li>Nose and airway warm and wet the air → fully saturated at {{37 °C}} just below the carina.</li>' +
      '<li>Water vapour takes 47 of the 760 → dry gas gets only {{713}} → P<sub>O2</sub> = 0.21 × dry-gas pressure.</li>' +
      '<li>So humidifying {{lowers}} P<sub>O2</sub> before any gas exchange happens.</li></ul>' +
      '<div class="two">' + CVS.fig('gas-humid', 'Airway warming and humidification from the nose to the isothermic saturation boundary below the carina.', 'gas', 16) +
      CVS.fig('gas-cascade', 'Partial pressures of O2, CO2, H2O, and N2 from dry air through moist bronchial air to alveolar gas and blood.', 'gas', 20) + '</div>' },
  { t: 'q', id: 'G3', src: 'Gas phase p.16–17', core: true,
    q: 'When dry atmospheric air at sea level (PB = 760 mmHg, FiO2 = 0.2093) is warmed to 37 °C and fully humidified in the conducting airways, what is the moist bronchial PO2?',
    o: ['149.2 mmHg', '159.1 mmHg', '101.2 mmHg', '112.1 mmHg', '99.2 mmHg'], a: 0,
    ex: 'Water vapor at 37 °C (100% RH, 44 mg/L) exerts 47 mmHg, leaving 760 − 47 = 713 mmHg for dry gases: PO2(humidified) = 0.2093 × 713 = 149.2 mmHg.' },
  { t: 'tf', id: 'G4', src: 'Gas phase p.17–19',
    q: 'Humidification of inspired air in the upper respiratory tract lowers the partial pressure of oxygen before any alveolar gas exchange occurs.', a: true,
    ex: 'True: adding 47 mmHg of water vapor dilutes the total dry gas pressure from 760 to 713 mmHg, dropping PO2 from 159.1 mmHg to 149.2 mmHg in the conducting airways.' },
  { t: 'c', id: 'G-C3', title: 'The alveolar gas equation and Graham law of diffusion', src: 'Gas phase p.21–26',
    html: '<p class="eqn"><span>P<sub>AO2</sub> = F<sub>iO2</sub>(P<sub>B</sub> − 47) − P<sub>aCO2</sub>/R</span></p>' +
      '<ul class="pts"><li><b>R</b> = CO<sub>2</sub> made ÷ O<sub>2</sub> used ≈ {{0.8}}.</li>' +
      '<li><b>Room air</b>: 149 − 40/R ≈ {{100}} mmHg.</li>' +
      '<li><b>Exam form</b> (F<sub>iO2</sub> ≤ 0.6): replace “÷ R” with “× {{1.2}}”. Above 0.6, just subtract P<sub>aCO2</sub>.</li>' +
      '<li><b>Logic</b><ul><li>↑ P<sub>aCO2</sub> → CO<sub>2</sub> takes up room in the alveolus → P<sub>AO2</sub> {{falls}}.</li>' +
      '<li>↑ F<sub>iO2</sub> → P<sub>AO2</sub> {{rises}}.</li></ul></li>' +
      '<li><b>Graham</b>: heavier gas → slower diffusion; rate ∝ 1/√{{molecular weight}}.</li></ul>' +
      '<p class="note">Worked (AC80): F<sub>iO2</sub> 0.20 and P<sub>aCO2</sub> 40 → about 95 mmHg.</p>' },
  { t: 'q', id: 'G5', src: 'AC80', core: true, keep: true,
    q: 'If the fraction of inspired oxygen is 20% and the alveolar partial pressure exerted by carbon dioxide is 40 mmHg, and the respiratory exchange ratio is 0.8. What is the alveolar partial pressure of oxygen gas? <span class="muted">(P.S. the partial pressure of H₂O is not given.)</span>',
    o: ['92', '95', '98', '102', '10'], a: 1,
    ex: 'Use the clinical form of the alveolar gas equation with P<sub>H2O</sub> = 47 mmHg: PAO₂ = 0.20 × (760 − 47) − 40 × 1.2 = 142.6 − 48 ≈ 95 mmHg. The shortcut without the correction (− PACO₂/R = − 50) gives 92.6.',
    flag: 'AC80 key: 95. The ×1.2 (Beachey) form includes the correction factor; the simple form PIO₂ − PACO₂/R gives about 93.' },
  { t: 'q', id: 'G6', src: 'AC81', keep: true,
    q: 'A patient is receiving oxygen via a nasal cannula at 30% FiO₂. The arterial blood gas shows PaCO₂ = 44 mmHg, and the respiratory Exchange Ratio (R) is 0.8. Calculate the alveolar oxygen tension (PAO₂).',
    o: ['150', '155', '160', '165', '170'], a: 2,
    ex: 'PIO₂ = 0.30 × (760 − 47) = 213.9 mmHg. PAO₂ = 213.9 − 44/0.8 = 158.9 (or 213.9 − 44 × 1.2 = 161) ≈ 160 mmHg.' },
  { t: 'c', id: 'G-C4', title: 'Henry law, gas solubility in blood, and oxygen cylinders & delivery', src: 'Gas phase p.27–30',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Henry</b>: {{C = αP}} → dissolved gas rises with its {{partial pressure}}.</li>' +
      '<li><b>O<sub>2</sub> dissolves poorly</b>: {{0.003}} mL/dL per mmHg → at P<sub>aO2</sub> 100 only {{0.3}} mL/dL → most O<sub>2</sub> must ride on {{hemoglobin}}.</li>' +
      '<li><b>CO<sub>2</sub></b> is about {{20×}} more soluble than O<sub>2</sub>.</li>' +
      '<li><b>Total gas in blood</b> = dissolved + {{bound}} + chemically changed (CO<sub>2</sub> → HCO<sub>3</sub><sup>−</sup>).</li>' +
      '<li><b>Giving O<sub>2</sub></b>: nasal cannula → F<sub>iO2</sub> rises with flow but stays {{low}}; a face mask reaches higher.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('gas-henry', 'Henry law and solubility coefficients of O2, CO2, N2, and CO in water, plasma, red cells, and whole blood.', 'gas', 28) +
      CVS.fig('gas-o2tank', 'Medical oxygen cylinders (G, M, D, E) with tank factors and flow/FiO2 ranges for nasal cannula and face mask.', 'gas', 30) + '</div></div>' },
  { t: 'q', id: 'G7', src: 'AC80 · AC81', core: true, keep: true,
    q: 'Which gas law explains the relation between the partial pressure of a gas and the concentration of the gas dissolved in a solution?',
    o: ['Boyle’s law', 'Charles’s law', 'Dalton’s law', 'Henry’s law', 'Graham’s law'], a: 3,
    ex: 'Henry’s law: the amount of gas dissolved is proportional to its partial pressure (C = α × P).' }
]});
