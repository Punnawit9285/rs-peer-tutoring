/* Section C: Pulmonary Circulation, Vascular Resistance & Pulmonary Edema (681117-3 Pulmonary circulation.pdf, 27 pages). */
CVS.add({ id: 'C', short: 'Pulm circulation', title: 'Pulmonary Circulation, Vascular Resistance & Pulmonary Edema', kind: 'Lecture',
  blurb: 'Pulmonary vs bronchial and systemic circulation, recruitment and distension, alveolar vs extra-alveolar vessels and lung volume (FRC), vasoactive mediators and hypoxic pulmonary vasoconstriction, West zones, Starling law, and interstitial vs alveolar pulmonary edema.',
  items: [
  { t: 'c', id: 'C-C1', title: 'Pulmonary vs systemic & bronchial circulation', src: 'Pulm circulation p.4–7',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Pulmonary circulation</b>: thin walls, {{little smooth muscle}}.</li>' +
      '<li>Compared with systemic: {{low pressure}}, {{low resistance}}, {{same flow}} (RV and LV pump the same output).</li>' +
      '<li>Why that is enough: it only has to lift blood to the top of the lung, not to the brain.</li>' +
      '<li><b>Bronchial circulation</b>: from the {{aorta}} (systemic pressure) → feeds the airways down to the terminal bronchioles.</li>' +
      '<li>Some bronchial venous blood → {{pulmonary veins}} → left atrium → part of the normal small shunt.</li></ul></div>' +
      CVS.fig('circ-pressures', 'Comparison of pressures in the pulmonary vs systemic circulation.', 'circ', 5) + '</div>' },
  { t: 'q', id: 'C1', src: 'AC81', core: true, keep: true,
    q: 'What is true about pulmonary circulation and systemic circulation?',
    o: ['High pressure, high resistance, and high flow', 'High pressure, high resistance, and low flow', 'Low pressure, low resistance, and low flow', 'Low pressure, low resistance, and same flow'], a: 3,
    ex: 'The right heart pumps the same cardiac output as the left, but the pulmonary circuit runs at about one-sixth of the pressure because its resistance is about one-tenth.' },
  { t: 'c', id: 'C-C2', title: 'Pulmonary vascular resistance (PVR): recruitment, distension & lung volume', src: 'Pulm circulation p.10–13, 16',
    html: '<div class="two"><div class="stack"><p><b>More pressure or flow (exercise) → PVR falls</b>, passively:</p>' +
      '<ul class="pts"><li>{{Recruitment}} (main): closed capillaries open.</li>' +
      '<li>{{Distension}}: open capillaries widen.</li></ul>' +
      '<p><b>Lung volume pulls two vessel types opposite ways</b>:</p>' +
      '<ul class="pts"><li>{{Alveolar vessels}} (capillaries): big lung → squashed by alveoli → PVR {{↑}}.</li>' +
      '<li>{{Extra-alveolar vessels}}: big lung → pulled open by {{radial traction}} → PVR ↓; small lung → narrow → PVR ↑.</li>' +
      '<li>Sum = U-shaped curve → PVR lowest at {{FRC}}.</li>' +
      '<li>↑ alveolar pressure (ventilator, very high volume) → squashes capillaries → PVR ↑.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('circ-recruit', 'Opening of closed capillaries and widening of open capillaries as pulmonary pressure rises.', 'circ', 10) + CVS.fig('circ-pvr-vol', 'Opposing effects of lung volume on the two vessel types, producing a U-shaped total resistance curve.', 'circ', 13) + '</div></div>' },
  { t: 'q', id: 'C2', src: 'AC81', core: true, keep: true,
    q: 'What causes an increase in pulmonary artery resistance?',
    o: ['Increase alveolar pressure', 'Increase arterial pressure', 'Increase venous pressure', 'Distention of the pulmonary artery'], a: 0,
    ex: 'Raised alveolar pressure (e.g. positive-pressure ventilation, very high lung volume) squashes the alveolar capillaries and raises PVR. Higher arterial or venous pressure recruits and distends vessels, which lowers resistance.' },
  { t: 'q', id: 'C3', src: 'AC80', core: true, keep: true,
    q: 'Which diagram best illustrates the pulmonary vasculature when the cardiac output has increased to a maximum extent?',
    fig: CVS.fig('ac80-vessels', 'AC80: five drawings of the pulmonary capillary bed, A–E.', 'ac80', 9),
    o: ['A', 'B', 'C', 'D', 'E'], a: 0,
    ex: 'When cardiac output rises, closed capillaries open (recruitment) and open ones widen (distension), so PVR falls. A shows all channels open and wide.' },
  { t: 'c', id: 'C-C3', title: 'Vasoactive mediators, hypoxic pulmonary vasoconstriction (HPV) & gravity zones', src: 'Pulm circulation p.14–19',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl compact"><thead><tr><th>Raise PVR</th><th>Lower PVR</th></tr></thead><tbody>' +
      '<tr><td>{{endothelin}}, {{thromboxane A2}}, serotonin, histamine, alveolar hypoxia</td><td>{{nitric oxide}}, {{prostacyclin}}, PDE inhibitors, calcium channel blockers</td></tr></tbody></table></div>' +
      '<ul class="pts"><li><b>Hypoxic vasoconstriction</b> (opposite of the body): alveolar P<sub>O2</sub> low → local arteries {{constrict}} → blood goes to well-aired alveoli → less shunt.</li>' +
      '<li><b>Birth</b>: fetus = whole lung hypoxic → PVR very high → {{first breath}} → O<sub>2</sub> in → PVR falls → lung flow rises.</li>' +
      '<li><b>Gravity zones (upright)</b><ul><li>Zone 1 (apex): P<sub>A</sub> &gt; Pa &gt; Pv → no flow.</li>' +
      '<li>Zone 2: Pa &gt; P<sub>A</sub> &gt; Pv.</li>' +
      '<li>Zone 3 (base): {{Pa &gt; Pv &gt; P<sub>A</sub>}} → most flow.</li></ul></li></ul></div>' +
      '<div class="stack">' + CVS.fig('circ-vaso', 'Signaling pathways of pulmonary vasoconstrictors and vasodilators in vascular smooth muscle.', 'circ', 14) + CVS.fig('circ-zones', 'Effect of gravity on pulmonary perfusion and West zones in the upright lung.', 'circ', 19) + '</div></div>' },
  { t: 'q', id: 'C4', src: 'AC79', core: true, keep: true,
    q: 'Arrange the pressure in the correct order from the greatest to the least in the zone 3 of the lung. (Pa = pulmonary arterial pressure, P<sub>A</sub> = pulmonary alveolar pressure, Pv = pulmonary venous pressure)',
    o: ['Pa > Pv > P<sub>A</sub>', 'P<sub>A</sub> > Pa > Pv', 'Pv > P<sub>A</sub> > Pa', 'Pa > P<sub>A</sub> > Pv', 'P<sub>A</sub> > Pv > Pa'], a: 0,
    ex: 'Zone 1: P<sub>A</sub> > Pa > Pv (no flow). Zone 2: Pa > P<sub>A</sub> > Pv (flow set by Pa − P<sub>A</sub>). Zone 3, the base: Pa > Pv > P<sub>A</sub>, so flow is set by Pa − Pv.',
    flag: 'AC81 asked a zone-order question too, but the recall did not define i, ii and iii, so only this version is used.' },
  { t: 'c', id: 'C-C4', title: 'Starling’s equation, lung water balance & pulmonary edema', src: 'Pulm circulation p.21–24',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Starling</b>: fluid out = K × [(P<sub>c</sub> − P<sub>i</sub>) − σ × (oncotic difference)]; σ = {{reflection coefficient}}.</li>' +
      '<li><b>Normal</b>: net force slightly {{outward}} → cleared by lymph (about 20 mL/h).</li></ul>' +
      '<div class="flow col"><div class="fbox start"><b>Too much filtration</b></div><div class="farrow">↓</div>' +
      '<div class="fbox art"><b>1 · {{Interstitial edema}}</b> (early): fluid around vessels and bronchi → CXR {{peribronchial cuffing}} → lymph carries it to the hilar nodes</div><div class="farrow">↓ lymph overwhelmed</div>' +
      '<div class="fbox ven"><b>2 · {{Alveolar edema}}</b> (late): alveoli flood one by one → no ventilation → {{shunt}} → pumped out by epithelial {{Na⁺/K⁺-ATPase}}</div></div>' +
      '<ul class="pts"><li><b>Cardiac</b>: P<sub>c</sub> ↑ (LV failure, {{mitral stenosis}}, fluid overload).</li>' +
      '<li><b>Non-cardiac</b>: low plasma protein, leaky capillaries ({{sepsis}}, lung injury), blocked lymph.</li></ul></div>' +
      CVS.fig('circ-starling', 'Starling forces across the pulmonary capillary endothelium and lymphatic drainage.', 'circ', 21) + '</div>' },
  { t: 'q', id: 'C5', src: 'Pulm circulation p.22–23', core: true,
    q: 'What distinguishes <b>early (interstitial)</b> pulmonary edema from <b>late (alveolar)</b> pulmonary edema in terms of fluid location, radiographic sign, gas-exchange impact, and compensatory clearance mechanism?',
    o: ['Early: fluid in perivascular/peribronchial interstitium (peribronchial cuffing), drained by perivascular lymphatics to hilar lymph nodes · Late: fluid floods alveoli one by one causing severe shunt, actively pumped out by epithelial Na+/K+-ATPase',
        'Early: fluid floods alveolar spaces first and is cleared by surfactant · Late: fluid enters hilar lymph nodes and improves V/Q matching',
        'Early: caused only by sepsis · Late: caused only by mitral stenosis and cleared by endothelial Ca2+-ATPase',
        'Early: causes pure anatomic dead space (V/Q = ∞) · Late: causes increased DLCO (>120%)',
        'Early: actively pumped out by alveolar macrophages · Late: passively drained by bronchial veins'], a: 0,
    ex: 'Initially, capillary filtrate enters the perivascular and peribronchial interstitial spaces (interstitial edema, producing peribronchial cuffing) and is compensated by perivascular lymphatics transporting fluid to hilar lymph nodes. Once maximal interstitial drainage is exceeded, fluid crosses into alveolar spaces (alveolar edema), filling alveoli one by one, creating unventilated units (V/Q mismatch and severe shunt), and is compensated by epithelial Na+/K+-ATPase pumps.' },
  { t: 'tf', id: 'C6', src: 'Pulm circulation p.21',
    q: 'Under normal physiological conditions in humans, the net Starling force across pulmonary capillaries is outward, producing a baseline lymph flow of approximately 20 mL/h.', a: true,
    ex: 'True. Slide 21 states that the net pressure of the Starling equation is outward under normal conditions, resulting in a small continuous pulmonary lymph flow of about 20 mL/h.' }
]});
