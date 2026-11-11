/* Section C: Pulmonary Circulation, Vascular Resistance & Pulmonary Edema (681117-3 Pulmonary circulation.pdf, 27 pages). */
CVS.add({ id: 'C', short: 'Pulm circulation', title: 'Pulmonary Circulation, Vascular Resistance & Pulmonary Edema', kind: 'Lecture',
  blurb: 'Pulmonary vs bronchial and systemic circulation, recruitment and distension, alveolar vs extra-alveolar vessels and lung volume (FRC), vasoactive mediators and hypoxic pulmonary vasoconstriction, West zones, Starling law, and interstitial vs alveolar pulmonary edema.',
  items: [
  { t: 'c', id: 'C-C1', title: 'Pulmonary vs systemic & bronchial circulation', src: 'Pulm circulation p.4–7',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Pulmonary circulation</b>: walls of the pulmonary artery and its branches are remarkably thin and contain {{little smooth muscle}}, operating at <b>{{low pressure}}</b> (PA ~25/8 mmHg, mean {{15 mmHg}} vs systemic 120/80, mean 100 mmHg) and <b>{{low resistance}}</b> while carrying the <b>{{same flow}}</b> (equal cardiac output from RV and LV, since Flow = Pressure / Resistance).</li>' +
      '<li><b>Function</b>: systemic circulation regulates blood supply to organs far above the heart (brain), whereas the pulmonary circulation only needs to lift blood to the top of the lung.</li>' +
      '<li><b>Bronchial circulation</b>: branches from the {{aorta and intercostal arteries}} at <b>high systemic pressure</b> to supply the conducting airways down to about the {{terminal bronchioles}}.</li>' +
      '<li><b>Bronchial venous drainage</b>: carried away from the lung partly via the {{pulmonary veins}} (entering the left atrium as part of the 2% physiologic R-to-L shunt) and partly via the systemic venous circulation.</li></ul></div>' +
      CVS.fig('circ-pressures', 'Comparison of pressures in the pulmonary vs systemic circulation.', 'circ', 5) + '</div>' },
  { t: 'q', id: 'C1', src: 'AC81', core: true, keep: true,
    q: 'What is true about pulmonary circulation and systemic circulation?',
    o: ['High pressure, high resistance, and high flow', 'High pressure, high resistance, and low flow', 'Low pressure, low resistance, and low flow', 'Low pressure, low resistance, and same flow'], a: 3,
    ex: 'The right heart pumps the same cardiac output as the left, but the pulmonary circuit runs at about one-sixth of the pressure because its resistance is about one-tenth.' },
  { t: 'c', id: 'C-C2', title: 'Pulmonary vascular resistance (PVR): recruitment, distension & lung volume', src: 'Pulm circulation p.10–13, 16',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Rising pulmonary pressure or blood flow lowers PVR</b> via two passive mechanisms that occur together (e.g., during {{exercise}}):</li>' +
      '<li><b>1. {{Recruitment}} (main mechanism)</b>: at rest, some capillaries are closed or open with no flow; as pressure rises, these closed vessels begin conducting blood, lowering overall PVR.</li>' +
      '<li><b>2. {{Distension}}</b>: high-compliance capillaries change shape from near-flattened to more circular (widening caliber).</li>' +
      '<li><b>{{Alveolar vessels}}</b> (capillaries and corner vessels exposed to alveolar pressure): at <b>high lung volume</b> they are <b>more squashed (&uparrow; PVR)</b>; at low lung volume they are less squashed (&downarrow; PVR).</li>' +
      '<li><b>{{Extra-alveolar vessels}}</b> (arteries and veins running through lung parenchyma): at <b>high lung volume</b> they have <b>lower PVR</b> due to {{radial traction}} of elastic parenchyma and more negative intrapleural pressure; at <b>low lung volume</b> their smooth muscle and elastic tissue resist expansion and narrow caliber (<b>&uparrow; PVR</b>).</li>' +
      '<li><b>Combined U-shaped curve</b>: total PVR is <b>lowest at {{FRC}}</b> and increases when lung volume moves away toward {{TLC or RV}}.</li></ul></div>' +
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
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Effect on PVR</th><th>Mediators &amp; Conditions</th></tr></thead><tbody>' +
      '<tr><td><b>Pulmonary vasoconstrictors (&uparrow; PVR)</b></td><td>{{Endothelin}}, serotonin, histamine, norepinephrine, {{thromboxane A2}}, and <b>alveolar hypoxia</b></td></tr>' +
      '<tr><td><b>Pulmonary vasodilators (&downarrow; PVR)</b></td><td>{{Nitric oxide}}, {{phosphodiesterase inhibitors}}, {{prostacyclin (PGI2)}}, calcium channel blockers, and acetylcholine</td></tr></tbody></table></div>' +
      '<ul class="pts">' +
      '<li><b>Hypoxic pulmonary vasoconstriction (HPV)</b>: opposite to systemic organs! When alveolar P<sub>AO2</sub> falls below {{70 mmHg}}, vascular smooth muscle contracts locally to redirect blood <b>away from poorly ventilated (hypoxic) regions</b> toward well-ventilated alveoli, {{reducing shunt}}.</li>' +
      '<li><b>Fetal &rarr; neonatal transition</b>: generalized HPV keeps fetal PVR very high; with the {{first breath}}, alveolar oxygenation markedly decreases PVR and increases pulmonary blood flow.</li>' +
      '<li><b>Gravity &amp; West zones (upright)</b>: the <b>apex</b> has lower intravascular pressure, less recruitment/distension, higher resistance, and less perfusion; the <b>base ({{Zone 3}})</b> has higher intravascular pressure, more recruitment/distension, lower resistance, and the most perfusion (normal V/Q = 0.8–1).</li></ul></div>' +
      '<div class="stack">' + CVS.fig('circ-vaso', 'Signaling pathways of pulmonary vasoconstrictors and vasodilators in vascular smooth muscle.', 'circ', 14) + CVS.fig('circ-zones', 'Effect of gravity on pulmonary perfusion and West zones in the upright lung.', 'circ', 19) + '</div></div>' },
  { t: 'q', id: 'C4', src: 'AC79', core: true, keep: true,
    q: 'Arrange the pressure in the correct order from the greatest to the least in the zone 3 of the lung. (Pa = pulmonary arterial pressure, P<sub>A</sub> = pulmonary alveolar pressure, Pv = pulmonary venous pressure)',
    o: ['Pa > Pv > P<sub>A</sub>', 'P<sub>A</sub> > Pa > Pv', 'Pv > P<sub>A</sub> > Pa', 'Pa > P<sub>A</sub> > Pv', 'P<sub>A</sub> > Pv > Pa'], a: 0,
    ex: 'Zone 1: P<sub>A</sub> > Pa > Pv (no flow). Zone 2: Pa > P<sub>A</sub> > Pv (flow set by Pa − P<sub>A</sub>). Zone 3, the base: Pa > Pv > P<sub>A</sub>, so flow is set by Pa − Pv.',
    flag: 'AC81 asked a zone-order question too, but the recall did not define i, ii and iii, so only this version is used.' },
  { t: 'c', id: 'C-C4', title: 'Starling’s equation, lung water balance & pulmonary edema', src: 'Pulm circulation p.21–24',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Starling’s equation</b> across the 0.3 &mu;m capillary barrier (as printed on slides 21 &amp; 24): Net fluid out = K[(P<sub>c</sub> &minus; P<sub>i</sub>) &minus; &sigma;(&pi;<sub>i</sub> &minus; &pi;<sub>c</sub>)] (<i>note: standard physiology writes &sigma;(&pi;<sub>c</sub> &minus; &pi;<sub>i</sub>) since capillary oncotic pressure &pi;<sub>c</sub> opposes outward filtration</i>), where &sigma; is the {{reflection coefficient}} (protein impermeability).</li>' +
      '<li><b>Normal baseline</b>: net Starling pressure is slightly outward, balanced by a continuous perivascular lymph flow of ~{{20 mL/h}}.</li>' +
      '<li><b>Stage 1 — {{Interstitial edema}} (early)</b>: fluid engorges perivascular and peribronchial spaces (seen on CXR as {{peribronchial cuffing}}); compensated by perivascular lymphatics draining fluid to the {{hilar lymph nodes}}.</li>' +
      '<li><b>Stage 2 — {{Alveolar edema}} (late, severe)</b>: when maximal interstitial drainage is exceeded, fluid crosses the alveolar wall and floods alveoli one by one (&rarr; unventilated alveoli, V/Q mismatch, and severe <b>shunt</b>); compensated by active fluid pumping via epithelial {{Na+/K+-ATPase}}.</li>' +
      '<li><b>Causes</b>: <b>Cardiac (&uparrow; P<sub>c</sub>)</b> from &uparrow; afterload (LV failure, {{mitral stenosis}}) or &uparrow; preload (fluid overload) vs <b>Non-cardiac</b> from &downarrow; &pi;<sub>c</sub> (protein starvation, renal/GI loss, hemodilution), &uparrow; {{Filtration coefficient (K)}} / permeability (acute lung injury, sepsis, O<sub>2</sub> toxicity), or &downarrow; lymphatic drainage.</li></ul></div>' +
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
