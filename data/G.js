/* Section G: Gas phase, partial pressures & gas-liquid equilibrium (Gas phase handout, slides 1–30). */
CVS.add({ id: 'G', short: 'Gas phase', title: 'Gas Phase, Partial Pressures & Gas-Liquid Equilibrium', kind: 'Lecture',
  blurb: 'STP/STPD/BTPS conventions, ideal and real gas laws, respiratory humidification, Dalton law, the alveolar gas equation, Graham and Henry laws, and clinical oxygen cylinders and delivery devices.',
  items: [
  { t: 'c', id: 'G-C1', title: 'Standard conditions (STP, STPD, BTPS) and the gas laws', src: 'Gas phase p.3–13',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>STP</b>: {{273.25 K}} (0 °C) and absolute pressure {{101.3 kPa}} (1 bar = 1 atm = {{760 mmHg}} = 14.9 psi). <b>STPD</b>: 0 °C (273 K), 1 atm, and {{dry}} (no water vapor).</li>' +
      '<li><b>BTPS</b>: body temperature ({{37 °C}} = 310 K), ambient pressure, and gas {{saturated with water vapor}} (P<sub>H2O</sub> = 47 mmHg).</li>' +
      '<li><b>Boyle law</b> (constant T): {{P1V1 = P2V2}}. <b>Charles law</b> (constant P): {{V1/T1 = V2/T2}} (extrapolates to zero volume at -273 °C). <b>Gay-Lussac law</b> (constant V): P<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>/T<sub>2</sub>.</li>' +
      '<li><b>Avogadro law</b>: 1 mole (6.02 &times; 10<sup>23</sup> molecules) occupies {{22.4 L}} at STP.</li>' +
      '<li><b>Ideal gas law</b>: {{PV = nRT}}, with R = {{0.082}} L&middot;atm/(K&middot;mol) = {{8.314}} J/(K&middot;mol).</li>' +
      '<li><b>Real gases &amp; CO<sub>2</sub> cylinders</b>: real gases deviate from PV/RT = 1 at high pressure; a liquid CO<sub>2</sub> cylinder at 20 °C has a vapor pressure of {{830 psi}} (56.5 atm) below its critical temperature (31 °C).</li></ul></div>' +
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
    html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>Gas</th><th>Dry atmospheric air (mmHg)</th><th>Moist bronchial air (mmHg)</th><th>Alveolar air (mmHg)</th></tr></thead><tbody>' +
      '<tr><td><b>O<sub>2</sub> (20.93% dry)</b></td><td>{{159.1}}</td><td>{{149.2}}</td><td>{{101.2}}</td></tr>' +
      '<tr><td><b>CO<sub>2</sub> (0.03–0.04% dry)</b></td><td>0.3</td><td>0.3</td><td>{{40.0}}</td></tr>' +
      '<tr><td><b>H<sub>2</sub>O vapor</b></td><td>0.0</td><td>{{47.0}}</td><td>{{47.0}}</td></tr>' +
      '<tr><td><b>N<sub>2</sub> (79.03% dry)</b></td><td>600.6</td><td>{{563.5}}</td><td>571.8</td></tr>' +
      '<tr><td><b>Total</b></td><td>760.0</td><td>760.0</td><td>760.0</td></tr></tbody></table></div>' +
      '<ul class="pts"><li><b>Isothermic saturation boundary</b> (just below the carina): inspired air reaches {{37 °C}}, {{100%}} relative humidity, and {{44 mg/L}} water content, exerting P<sub>H2O</sub> = 47 mmHg.</li>' +
      '<li><b>Humidified tracheal P<sub>O2</sub></b>: F<sub>iO2</sub> &times; (P<sub>B</sub> &minus; P<sub>H2O</sub>) = 0.2093 &times; (760 &minus; 47) = 0.2093 &times; {{713}} mmHg.</li></ul>' +
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
    html: '<div class="stack"><ul class="pts">' +
      '<li><b>Full alveolar gas equation</b>: P<sub>AO2</sub> = F<sub>iO2</sub>(P<sub>B</sub> &minus; P<sub>H2O</sub>) &minus; P<sub>aCO2</sub>/{{R}} + {{F}}, where P<sub>ACO2</sub> &approx; {{PaCO2}} (40 mmHg).</li>' +
      '<li><b>Respiratory exchange ratio (R)</b>: V&#775;<sub>CO2</sub> / V&#775;<sub>O2</sub> = {{183}} / {{230}} = 0.797 &approx; {{0.8}}.</li>' +
      '<li><b>Correction factor (F)</b>: accounts for N<sub>2</sub> concentration difference when R &ne; 1; normally about {{2}} mmHg (&lt;3 mmHg). Including F: P<sub>AO2</sub> = 149.2 &minus; 40/0.8 + 2 = 101.2 mmHg; ignoring F gives {{99.2 mmHg}}.</li>' +
      '<li><b>Clinical Beachey formulas</b>: when F<sub>iO2</sub> &le; {{0.6}}, P<sub>AO2</sub> = F<sub>iO2</sub>(P<sub>B</sub> &minus; 47) &minus; P<sub>aCO2</sub> &times; {{1.2}} (= 101.2 mmHg on room air); when F<sub>iO2</sub> &gt; 0.6, F drops out and P<sub>AO2</sub> = F<sub>iO2</sub>(P<sub>B</sub> &minus; 47) &minus; P<sub>aCO2</sub>.</li>' +
      '<li><b>Graham law of diffusion</b>: at constant T and P, the diffusion rate of a gas is inversely proportional to the {{square root}} of its molecular weight (R<sub>1</sub>/R<sub>2</sub> = &radic;(M<sub>2</sub>/M<sub>1</sub>)).</li></ul></div>' },
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
      '<li><b>Henry law</b>: {{C = &alpha;P}} (dissolved gas concentration equals solubility coefficient &alpha; times partial pressure P).</li>' +
      '<li><b>Oxygen solubility in blood</b> (38 °C): &alpha;<sub>O2</sub> = {{0.00302}} mL O<sub>2</sub> / dL blood / mmHg (or {{0.023}} mL O<sub>2</sub> / mL blood at 760 mmHg).</li>' +
      '<li><b>Plasma solubilities</b> (38 °C, 1 atm, mL gas/mL): CO<sub>2</sub> = {{0.490}} vs O<sub>2</sub> = {{0.021}} (&sim;23&times; more soluble); N<sub>2</sub> = {{0.0127}}.</li>' +
      '<li><b>Total blood gas content</b>: [gas]<sub>total</sub> = [gas]<sub>dissolved</sub> + [gas]<sub>bound</sub> + [gas]<sub>chemically modified</sub>.</li>' +
      '<li><b>Oxygen tank conversion factors</b>: D = {{0.16 L/psi}} (2000 psi &rarr; {{320 L}}), E = {{0.28 L/psi}}, G = {{2.41 L/psi}}.</li>' +
      '<li><b>Delivery devices</b>: nasal cannula at {{2–6 L/min}} gives F<sub>iO2</sub> {{0.28–0.44}} (&gt;6 L/min irritates nasal mucosa); simple face mask at 3–8 L/min gives F<sub>iO2</sub> 0.30–0.80.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('gas-henry', 'Henry law and solubility coefficients of O2, CO2, N2, and CO in water, plasma, red cells, and whole blood.', 'gas', 28) +
      CVS.fig('gas-o2tank', 'Medical oxygen cylinders (G, M, D, E) with tank factors and flow/FiO2 ranges for nasal cannula and face mask.', 'gas', 30) + '</div></div>' },
  { t: 'q', id: 'G7', src: 'AC80 · AC81', core: true, keep: true,
    q: 'Which gas law explains the relation between the partial pressure of a gas and the concentration of the gas dissolved in a solution?',
    o: ['Boyle’s law', 'Charles’s law', 'Dalton’s law', 'Henry’s law', 'Graham’s law'], a: 3,
    ex: 'Henry’s law: the amount of gas dissolved is proportional to its partial pressure (C = α × P).' }
]});
