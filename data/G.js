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
  { t: 'q', id: 'G1', src: 'Gas phase p.5', core: true,
    q: 'In pulmonary physiology, how is BTPS defined?',
    o: ['Body temperature (37 °C), ambient pressure, and gas saturated with water vapor (PH2O = 47 mmHg)', 'Standard temperature (0 °C), 760 mmHg, and completely dry gas', 'Room temperature (20 °C), 101.3 kPa, and 50% relative humidity', 'Body temperature (37 °C), 1 atm pressure, and zero water vapor', '273.25 K, 14.9 psi, and saturated with water vapor'], a: 0,
    ex: 'BTPS stands for Body Temperature (37 °C), ambient Pressure, and Saturated with water vapor (PH2O = 47 mmHg). STPD is 0 °C (273 K), 760 mmHg, and Dry.' },
  { t: 'q', id: 'G2', src: 'Gas phase p.9–10', core: true,
    q: 'According to Avogadro’s law and the ideal gas equation (PV = nRT), 1 mole of an ideal gas at STP occupies what volume, and what are the two values of the gas constant R given in the lecture?',
    o: ['22.4 L; R = 0.082 L·atm/(K·mol) or 8.314 J/(K·mol)', '44.8 L; R = 8.314 L·atm/(K·mol) or 0.082 J/(K·mol)', '22.4 L; R = 1.987 L·atm/(K·mol) or 760 J/(K·mol)', '10.0 L; R = 0.082 L·atm/(K·mol) or 101.3 J/(K·mol)', '24.0 L; R = 0.2093 L·atm/(K·mol) or 47 J/(K·mol)'], a: 0,
    ex: 'At STP (0 °C, 1 atm), 1 mole of any ideal gas contains 6.02 × 10^23 molecules and occupies 22.4 L; R = 0.082 L·atm/(K·mol) = 8.314 J/(K·mol).' },
  { t: 'tf', id: 'G3', src: 'Gas phase p.7',
    q: 'In Charles’s law, the volume of a fixed mass of gas at constant pressure is directly proportional to its Celsius temperature.', a: false,
    ex: 'False: volume at constant pressure is directly proportional to absolute (Kelvin) temperature (K = °C + 273), not Celsius; the V–T line crosses zero volume at −273 °C (0 K).' },

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
  { t: 'q', id: 'G4', src: 'Gas phase p.16–17', core: true,
    q: 'When dry atmospheric air at sea level (PB = 760 mmHg, FiO2 = 0.2093) is warmed to 37 °C and fully humidified in the conducting airways, what is the moist bronchial PO2?',
    o: ['149.2 mmHg', '159.1 mmHg', '101.2 mmHg', '112.1 mmHg', '99.2 mmHg'], a: 0,
    ex: 'Water vapor at 37 °C (100% RH, 44 mg/L) exerts 47 mmHg, leaving 760 − 47 = 713 mmHg for dry gases: PO2(humidified) = 0.2093 × 713 = 149.2 mmHg.' },
  { t: 'q', id: 'G5', src: 'Gas phase p.16', core: true,
    q: 'At the isothermic saturation boundary just below the carina, what are the temperature, relative humidity, absolute water content, and water vapor pressure of inspired gas?',
    o: ['37 °C, 100% RH, 44 mg/L, and PH2O = 47 mmHg', '34 °C, 100% RH, 36–40 mg/L, and PH2O = 40 mmHg', '37 °C, 80% RH, 28 mg/L, and PH2O = 37 mmHg', '22 °C, 50% RH, 10 mg/L, and PH2O = 19 mmHg', '37 °C, 100% RH, 100 mg/L, and PH2O = 100 mmHg'], a: 0,
    ex: 'At the isothermic saturation boundary (just below the carina), gas is at body temperature (37 °C), 100% relative humidity, 44 mg/L water content, and PH2O = 47 mmHg.' },
  { t: 'tf', id: 'G6', src: 'Gas phase p.17–19',
    q: 'Humidification of inspired air in the upper respiratory tract lowers the partial pressure of oxygen before any alveolar gas exchange occurs.', a: true,
    ex: 'True: adding 47 mmHg of water vapor dilutes the total dry gas pressure from 760 to 713 mmHg, dropping PO2 from 159.1 mmHg to 149.2 mmHg in the conducting airways.' },

  { t: 'c', id: 'G-C3', title: 'The alveolar gas equation and Graham law of diffusion', src: 'Gas phase p.21–26',
    html: '<div class="stack"><ul class="pts">' +
      '<li><b>Full alveolar gas equation</b>: P<sub>AO2</sub> = F<sub>iO2</sub>(P<sub>B</sub> &minus; P<sub>H2O</sub>) &minus; P<sub>aCO2</sub>/{{R}} + {{F}}, where P<sub>ACO2</sub> &approx; {{PaCO2}} (40 mmHg).</li>' +
      '<li><b>Respiratory exchange ratio (R)</b>: V&#775;<sub>CO2</sub> / V&#775;<sub>O2</sub> = {{183}} / {{230}} = 0.797 &approx; {{0.8}}.</li>' +
      '<li><b>Correction factor (F)</b>: accounts for N<sub>2</sub> concentration difference when R &ne; 1; normally about {{2}} mmHg (&lt;3 mmHg). Including F: P<sub>AO2</sub> = 149.2 &minus; 40/0.8 + 2 = 101.2 mmHg; ignoring F gives {{99.2 mmHg}}.</li>' +
      '<li><b>Clinical Beachey formulas</b>: when F<sub>iO2</sub> &le; {{0.6}}, P<sub>AO2</sub> = F<sub>iO2</sub>(P<sub>B</sub> &minus; 47) &minus; P<sub>aCO2</sub> &times; {{1.2}} (= 101.2 mmHg on room air); when F<sub>iO2</sub> &gt; 0.6, F drops out and P<sub>AO2</sub> = F<sub>iO2</sub>(P<sub>B</sub> &minus; 47) &minus; P<sub>aCO2</sub>.</li>' +
      '<li><b>Graham law of diffusion</b>: at constant T and P, the diffusion rate of a gas is inversely proportional to the {{square root}} of its molecular weight (R<sub>1</sub>/R<sub>2</sub> = &radic;(M<sub>2</sub>/M<sub>1</sub>)).</li></ul></div>' },
  { t: 'q', id: 'G7', src: 'Gas phase p.21–24', core: true,
    q: 'A patient breathes room air at sea level (PB = 760 mmHg, PH2O = 47 mmHg, FiO2 = 0.2093) with PaCO2 = 40 mmHg and R = 0.8. What is PAO2 using the lecture equation with F = 2 mmHg (or the FiO2 ≤ 0.6 clinical formula), and what is PAO2 if F is omitted?',
    o: ['101.2 mmHg with F (or × 1.2 formula); 99.2 mmHg without F', '149.2 mmHg with F; 109.2 mmHg without F', '99.2 mmHg with F; 101.2 mmHg without F', '105.0 mmHg with F; 95.0 mmHg without F', '80.0 mmHg with F; 78.0 mmHg without F'], a: 0,
    ex: '0.2093 × (760 − 47) = 149.2 mmHg. Subtracting 40/0.8 = 50 gives 99.2 mmHg (simplified equation without F). Adding F = 2 mmHg (or subtracting 40 × 1.2 = 48) gives 101.2 mmHg.' },
  { t: 'q', id: 'G8', src: 'Gas phase p.22, 24', core: true,
    q: 'According to the clinical modification of the alveolar gas equation in the lecture, how does the formula change when FiO2 exceeds 0.6?',
    o: ['PAO2 = FiO2(PB − PH2O) − PaCO2 (PaCO2 is no longer multiplied by 1.2)', 'PAO2 = FiO2(PB − PH2O) − PaCO2 × 2.0', 'Water vapor pressure (47 mmHg) is omitted from the equation', 'PaCO2 is added to FiO2(PB − PH2O) instead of subtracted', 'R increases from 0.8 to 2.0'], a: 0,
    ex: 'As FiO2 rises above 0.6, the nitrogen correction factor diminishes; the lecture specifies using PAO2 = FiO2(PB − water vapor) − (PaCO2) × 1.2 for FiO2 ≤ 0.6, and PAO2 = FiO2(PB − water vapor) − PaCO2 for FiO2 > 0.6.' },
  { t: 'tf', id: 'G9', src: 'Gas phase p.26',
    q: 'According to Graham’s law, in the gas phase carbon dioxide (MW 44) diffuses faster than oxygen (MW 32) because of its larger molecular weight.', a: false,
    ex: 'False: by Graham’s law (R1/R2 = sqrt(M2/M1)), a heavier gas diffuses slightly slower in the gas phase. (CO2 diffuses ~20× faster across liquid/tissue membranes only because its Henry’s law solubility is ~23× higher.)' },

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
  { t: 'q', id: 'G10', src: 'Gas phase p.28', core: true,
    q: 'Using Henry’s law (αO2 = 0.003 mL O2 / dL blood / mmHg), how much physically dissolved oxygen is present in arterial blood with PaO2 = 100 mmHg, and how does CO2 solubility in plasma compare with O2?',
    o: ['0.3 mL O2 / dL blood; CO2 is about 23 times more soluble in plasma than O2 (0.490 vs 0.021)', '3.0 mL O2 / dL blood; O2 is about 20 times more soluble in plasma than CO2', '0.003 mL O2 / dL blood; CO2 and O2 have identical plasma solubility', '20.0 mL O2 / dL blood; N2 is more soluble in plasma than both O2 and CO2', '0.023 mL O2 / dL blood; CO is 50 times more soluble in water than CO2'], a: 0,
    ex: 'At PaO2 = 100 mmHg, dissolved O2 = 0.003 × 100 = 0.3 mL O2/dL blood. In plasma at 38 °C and 1 atm, αCO2 = 0.490 vs αO2 = 0.021 mL/mL (~23-fold higher for CO2).' },
  { t: 'tf', id: 'G11', src: 'Gas phase p.30',
    q: 'A size D oxygen cylinder compressed to 2000 psi (tank factor 0.16 L/psi) holds approximately 320 L of oxygen, and a nasal cannula is normally run at 2–6 L/min (FiO2 0.28–0.44) because flows above 6 L/min irritate the nasal mucosa.', a: true,
    ex: 'True: 2000 psi × 0.16 L/psi = 320 L. Nasal cannula flow is 2–6 L/min (FiO2 0.28–0.44); >6 L/min dries and irritates the nasal epithelium.' },
  { t: 'open', id: 'G12', src: 'Gas phase p.30',
    q: 'A patient is transported with a size D oxygen cylinder at 2000 psi (tank factor 0.16 L/psi) delivering 4 L/min via nasal cannula. How many liters of O2 are in the cylinder, approximately how many minutes will it last, and what happens if nasal cannula flow is raised above 6 L/min?',
    ans: 'Volume = 2000 psi × 0.16 L/psi = 320 L of O2. At 4 L/min, the tank lasts approximately 320 / 4 = 80 minutes (for an E tank at 0.28 L/psi, 2000 psi = 560 L → 140 minutes; a G tank factor is 2.41 L/psi). Flows above 6 L/min via standard nasal cannula irritate and dry the nasal mucosa, so a face mask (3–8 L/min, FiO2 0.30–0.80) is used instead.' }
]});
