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
  { t: 'q', id: 'C1', src: 'Pulm circulation p.5, 7', core: true,
    q: 'Which of the following statements is correct regarding the <b>pulmonary circulation</b> compared with the systemic circulation?',
    o: ['Both lower pressure and lower resistance (with the same flow)',
        'Lower blood flow (about 1/6 of left ventricular cardiac output)',
        'Higher vascular resistance due to thick pulmonary arterial smooth muscle',
        'Same arterial pressure and resistance as the bronchial circulation',
        'Higher mean arterial pressure (100 mmHg vs 15 mmHg)'], a: 0,
    ex: 'On slide 5 and the in-slide MCQ on slide 7, the pulmonary circulation has thin-walled vessels with little smooth muscle, giving it much lower pressure and much lower resistance than the systemic circulation while carrying the same total flow (equal cardiac output from RV and LV).' },
  { t: 'q', id: 'C2', src: 'Pulm circulation p.6', core: true,
    q: 'Which statement accurately describes the <b>bronchial circulation</b>?',
    o: ['It branches from the aorta and intercostal arteries at high systemic pressure, supplies conducting airways down to the terminal bronchioles, and drains partly via pulmonary veins and partly via systemic veins',
        'It branches from the main pulmonary artery at low pressure (mean 15 mmHg) to perfuse the respiratory bronchioles and alveoli',
        'It carries 50% of right ventricular cardiac output and drains exclusively into the superior vena cava',
        'It has lower pressure and lower resistance than the pulmonary circulation',
        'It supplies only the visceral pleura and has no connection to the pulmonary veins'], a: 0,
    ex: 'The bronchial circulation arises from the aorta and intercostal arteries (high pressure like the systemic circulation), supplies the conducting airways down to about the terminal bronchioles, and drains away from the lung via both the pulmonary veins (creating a small anatomic R-to-L shunt) and the systemic circulation.' },
  { t: 'tf', id: 'C3', src: 'Pulm circulation p.5',
    q: 'Because pulmonary arterial pressure is much lower than systemic arterial pressure, total blood flow (cardiac output) through the pulmonary circulation is much lower than through the systemic circulation.', a: false,
    ex: 'False. Flow = Pressure / Resistance. Because pulmonary vascular resistance is proportionally lower than systemic vascular resistance, the pulmonary circulation carries the exact same flow (cardiac output) as the systemic circulation at a much lower pressure.' },

  { t: 'c', id: 'C-C2', title: 'Pulmonary vascular resistance (PVR): recruitment, distension & lung volume', src: 'Pulm circulation p.10–13, 16',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Rising pulmonary pressure or blood flow lowers PVR</b> via two passive mechanisms that occur together (e.g., during {{exercise}}):</li>' +
      '<li><b>1. {{Recruitment}} (main mechanism)</b>: at rest, some capillaries are closed or open with no flow; as pressure rises, these closed vessels begin conducting blood, lowering overall PVR.</li>' +
      '<li><b>2. {{Distension}}</b>: high-compliance capillaries change shape from near-flattened to more circular (widening caliber).</li>' +
      '<li><b>{{Alveolar vessels}}</b> (capillaries and corner vessels exposed to alveolar pressure): at <b>high lung volume</b> they are <b>more squashed (&uparrow; PVR)</b>; at low lung volume they are less squashed (&downarrow; PVR).</li>' +
      '<li><b>{{Extra-alveolar vessels}}</b> (arteries and veins running through lung parenchyma): at <b>high lung volume</b> they have <b>lower PVR</b> due to {{radial traction}} of elastic parenchyma and more negative intrapleural pressure; at <b>low lung volume</b> their smooth muscle and elastic tissue resist expansion and narrow caliber (<b>&uparrow; PVR</b>).</li>' +
      '<li><b>Combined U-shaped curve</b>: total PVR is <b>lowest at {{FRC}}</b> and increases when lung volume moves away toward {{TLC or RV}}.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('circ-recruit', 'Opening of closed capillaries and widening of open capillaries as pulmonary pressure rises.', 'circ', 10) + CVS.fig('circ-pvr-vol', 'Opposing effects of lung volume on the two vessel types, producing a U-shaped total resistance curve.', 'circ', 13) + '</div></div>' },
  { t: 'q', id: 'C4', src: 'Pulm circulation p.10–11', core: true,
    q: 'When cardiac output and pulmonary blood flow increase during exercise, what happens to pulmonary vascular resistance (PVR), and what is the <b>main mechanism</b> responsible at initial pressure rises?',
    o: ['PVR decreases · capillary recruitment (opening of previously closed or non-flowing vessels) is the main mechanism, accompanied by capillary distension',
        'PVR increases · sympathetic α1-mediated vasoconstriction of alveolar capillaries',
        'PVR decreases · active nitric oxide synthesis triggered by alveolar hypocapnia is the sole mechanism',
        'PVR remains unchanged · rigid pulmonary capillaries cannot change caliber or number',
        'PVR increases · compression of extra-alveolar vessels by radial traction'], a: 0,
    ex: 'As pulmonary arterial pressure or blood flow rises (such as during exercise), PVR falls because of capillary recruitment (the main mechanism, where closed or non-perfused capillaries open to conduct blood) together with capillary distension (flattening capillaries become more circular).' },
  { t: 'q', id: 'C5', src: 'Pulm circulation p.12–13, 16', core: true,
    q: 'Why does total pulmonary vascular resistance (PVR) follow a U-shaped curve that is <b>lowest at functional residual capacity (FRC)</b> and higher at both total lung capacity (TLC) and residual volume (RV)?',
    o: ['At high lung volume (toward TLC) alveolar vessels are squashed; at low lung volume (toward RV) extra-alveolar vessels narrow due to loss of radial traction and less negative intrapleural pressure',
        'At high lung volume extra-alveolar vessels are squashed; at low lung volume alveolar capillaries are stretched shut by radial traction',
        'Both alveolar and extra-alveolar vessels have their highest resistance at FRC and lowest resistance at RV',
        'Hypoxic pulmonary vasoconstriction occurs only at TLC and RV',
        'Capillary recruitment only occurs at FRC and ceases completely above or below FRC'], a: 0,
    ex: 'Alveolar vessels (capillaries in alveolar walls) are compressed when alveoli expand toward TLC (↑ PVR at high volume), whereas extra-alveolar vessels (arteries/veins in parenchyma) are pulled open by radial traction and negative Ppl at high volume but narrow due to their smooth muscle and elastic recoil toward RV (↑ PVR at low volume). Consequently, total PVR is lowest at FRC.' },

  { t: 'c', id: 'C-C3', title: 'Vasoactive mediators, hypoxic pulmonary vasoconstriction (HPV) & gravity zones', src: 'Pulm circulation p.14–19',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Effect on PVR</th><th>Mediators &amp; Conditions</th></tr></thead><tbody>' +
      '<tr><td><b>Pulmonary vasoconstrictors (&uparrow; PVR)</b></td><td>{{Endothelin}}, serotonin, histamine, norepinephrine, {{thromboxane A2}}, and <b>alveolar hypoxia</b></td></tr>' +
      '<tr><td><b>Pulmonary vasodilators (&downarrow; PVR)</b></td><td>{{Nitric oxide}}, {{phosphodiesterase inhibitors}}, {{prostacyclin (PGI2)}}, calcium channel blockers, and acetylcholine</td></tr></tbody></table></div>' +
      '<ul class="pts">' +
      '<li><b>Hypoxic pulmonary vasoconstriction (HPV)</b>: opposite to systemic organs! When alveolar P<sub>AO2</sub> falls below {{70 mmHg}}, vascular smooth muscle contracts locally to redirect blood <b>away from poorly ventilated (hypoxic) regions</b> toward well-ventilated alveoli, {{reducing shunt}}.</li>' +
      '<li><b>Fetal &rarr; neonatal transition</b>: generalized HPV keeps fetal PVR very high; with the {{first breath}}, alveolar oxygenation markedly decreases PVR and increases pulmonary blood flow.</li>' +
      '<li><b>Gravity &amp; West zones (upright)</b>: the <b>apex</b> has lower intravascular pressure, less recruitment/distension, higher resistance, and less perfusion; the <b>base ({{Zone 3}})</b> has higher intravascular pressure, more recruitment/distension, lower resistance, and the most perfusion (normal V/Q = 0.8–1).</li></ul></div>' +
      '<div class="stack">' + CVS.fig('circ-vaso', 'Signaling pathways of pulmonary vasoconstrictors and vasodilators in vascular smooth muscle.', 'circ', 14) + CVS.fig('circ-zones', 'Effect of gravity on pulmonary perfusion and West zones in the upright lung.', 'circ', 19) + '</div></div>' },
  { t: 'q', id: 'C6', src: 'Pulm circulation p.14–17', core: true,
    q: 'Which of the following <b>increases</b> pulmonary vascular resistance (PVR)?',
    o: ['Hypoxia', 'Nitric oxide', 'Lung volume at FRC', 'Endothelin antagonist', 'Distension of pulmonary capillary'], a: 0,
    ex: 'Alveolar hypoxia (PAO2 < 70 mmHg) triggers hypoxic pulmonary vasoconstriction, which increases PVR. Nitric oxide, lung volume at FRC, endothelin receptor antagonists, and capillary distension all decrease PVR.' },
  { t: 'q', id: 'C7', src: 'Pulm circulation p.14–16', core: true,
    q: 'What is the physiological threshold and purpose of <b>hypoxic pulmonary vasoconstriction (HPV)</b> in adults, and how does it behave in the fetus?',
    o: ['When PAO2 < 70 mmHg, local vasoconstriction diverts blood away from poorly ventilated alveoli toward well-ventilated alveoli to decrease shunt; in the fetus, generalized HPV keeps PVR high until the first oxygenated breath markedly lowers PVR',
        'When PaO2 < 100 mmHg, pulmonary vasodilation increases blood flow to hypoxic alveoli to maximize O2 uptake; fetal PVR is near zero in utero',
        'When PACO2 < 40 mmHg, vasoconstriction shunts blood from the base (Zone 3) to the apex (Zone 1)',
        'HPV is mediated by prostacyclin (PGI2) and nitric oxide and increases right-to-left intrapulmonary shunt',
        'HPV occurs only in systemic arteries (such as the brain and heart) while pulmonary vessels dilate during hypoxia'], a: 0,
    ex: 'Unlike systemic beds (which dilate in hypoxia), pulmonary vascular smooth muscle constricts when PAO2 < 70 mmHg. Localized HPV redirects blood away from hypoxic, poorly ventilated alveoli toward well-ventilated regions, reducing V/Q mismatch and shunt. In the fetus, generalized HPV keeps PVR very high until the first breath oxygenates the alveoli and drops PVR.' },
  { t: 'tf', id: 'C8', src: 'Pulm circulation p.19',
    q: 'In an upright adult, the base of the lung (Zone 3) has lower intravascular pressure, less capillary recruitment and distension, and higher vascular resistance than the apex.', a: false,
    ex: 'False. Due to gravity, the base of the upright lung (Zone 3) has higher intravascular pressure, which causes more recruitment and distension, lower vascular resistance, and greater perfusion than the apex.' },

  { t: 'c', id: 'C-C4', title: 'Starling’s equation, lung water balance & pulmonary edema', src: 'Pulm circulation p.21–24',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Starling’s equation</b> across the 0.3 &mu;m capillary barrier (as printed on slides 21 &amp; 24): Net fluid out = K[(P<sub>c</sub> &minus; P<sub>i</sub>) &minus; &sigma;(&pi;<sub>i</sub> &minus; &pi;<sub>c</sub>)] (<i>note: standard physiology writes &sigma;(&pi;<sub>c</sub> &minus; &pi;<sub>i</sub>) since capillary oncotic pressure &pi;<sub>c</sub> opposes outward filtration</i>), where &sigma; is the {{reflection coefficient}} (protein impermeability).</li>' +
      '<li><b>Normal baseline</b>: net Starling pressure is slightly outward, balanced by a continuous perivascular lymph flow of ~{{20 mL/h}}.</li>' +
      '<li><b>Stage 1 — {{Interstitial edema}} (early)</b>: fluid engorges perivascular and peribronchial spaces (seen on CXR as {{peribronchial cuffing}}); compensated by perivascular lymphatics draining fluid to the {{hilar lymph nodes}}.</li>' +
      '<li><b>Stage 2 — {{Alveolar edema}} (late, severe)</b>: when maximal interstitial drainage is exceeded, fluid crosses the alveolar wall and floods alveoli one by one (&rarr; unventilated alveoli, V/Q mismatch, and severe <b>shunt</b>); compensated by active fluid pumping via epithelial {{Na+/K+-ATPase}}.</li>' +
      '<li><b>Causes</b>: <b>Cardiac (&uparrow; P<sub>c</sub>)</b> from &uparrow; afterload (LV failure, {{mitral stenosis}}) or &uparrow; preload (fluid overload) vs <b>Non-cardiac</b> from &downarrow; &pi;<sub>c</sub> (protein starvation, renal/GI loss, hemodilution), &uparrow; {{Filtration coefficient (K)}} / permeability (acute lung injury, sepsis, O<sub>2</sub> toxicity), or &downarrow; lymphatic drainage.</li></ul></div>' +
      CVS.fig('circ-starling', 'Starling forces across the pulmonary capillary endothelium and lymphatic drainage.', 'circ', 21) + '</div>' },
  { t: 'q', id: 'C9', src: 'Pulm circulation p.21, 24', core: true,
    flag: 'Slide formula note: Slides 21 and 24 print Net fluid out = K[(Pc − Pi) − σ(πi − πc)], whereas standard physiology writes K[(Pc − Pi) − σ(πc − πi)] because capillary oncotic pressure (πc) opposes outward hydrostatic filtration (as confirmed by slide 24’s table showing ↓ πc causes edema).',
    q: 'According to the lecture’s classification of pulmonary edema mechanisms, which clinical condition causes <b>cardiogenic</b> pulmonary edema via increased capillary hydrostatic pressure (P<sub>c</sub>), and which causes <b>non-cardiogenic</b> edema via an increased filtration coefficient (K)?',
    o: ['Cardiogenic (↑ Pc): left ventricular failure, mitral stenosis, or fluid overload · Non-cardiogenic (↑ K / permeability): acute lung injury, sepsis, or oxygen toxicity',
        'Cardiogenic (↑ Pc): protein starvation or nephrotic syndrome · Non-cardiogenic (↑ K): mitral stenosis',
        'Cardiogenic (↓ πc): hemodilution · Non-cardiogenic (↓ Pc): lymphatic obstruction',
        'Cardiogenic (↑ σ): oxygen toxicity · Non-cardiogenic (↓ K): left ventricular failure',
        'Cardiogenic (↑ lymph flow): sepsis · Non-cardiogenic (↑ πc): renal protein loss'], a: 0,
    ex: 'Slide 24 classifies ↑ Pc as cardiac (increased afterload from LV failure or mitral stenosis; increased preload from fluid overload), whereas non-cardiac edema results from ↓ πc (protein starvation, renal/GI protein loss, hemodilution), ↑ filtration coefficient K / capillary permeability (acute lung injury, sepsis, O2 toxicity), or ↓ lymphatic drainage (obstruction/injury).' },
  { t: 'q', id: 'C10', src: 'Pulm circulation p.22–23', core: true,
    q: 'What distinguishes <b>early (interstitial)</b> pulmonary edema from <b>late (alveolar)</b> pulmonary edema in terms of fluid location, radiographic sign, gas-exchange impact, and compensatory clearance mechanism?',
    o: ['Early: fluid in perivascular/peribronchial interstitium (peribronchial cuffing), drained by perivascular lymphatics to hilar lymph nodes · Late: fluid floods alveoli one by one causing severe shunt, actively pumped out by epithelial Na+/K+-ATPase',
        'Early: fluid floods alveolar spaces first and is cleared by surfactant · Late: fluid enters hilar lymph nodes and improves V/Q matching',
        'Early: caused only by sepsis · Late: caused only by mitral stenosis and cleared by endothelial Ca2+-ATPase',
        'Early: causes pure anatomic dead space (V/Q = ∞) · Late: causes increased DLCO (>120%)',
        'Early: actively pumped out by alveolar macrophages · Late: passively drained by bronchial veins'], a: 0,
    ex: 'Initially, capillary filtrate enters the perivascular and peribronchial interstitial spaces (interstitial edema, producing peribronchial cuffing) and is compensated by perivascular lymphatics transporting fluid to hilar lymph nodes. Once maximal interstitial drainage is exceeded, fluid crosses into alveolar spaces (alveolar edema), filling alveoli one by one, creating unventilated units (V/Q mismatch and severe shunt), and is compensated by epithelial Na+/K+-ATPase pumps.' },
  { t: 'tf', id: 'C11', src: 'Pulm circulation p.21',
    q: 'Under normal physiological conditions in humans, the net Starling force across pulmonary capillaries is outward, producing a baseline lymph flow of approximately 20 mL/h.', a: true,
    ex: 'True. Slide 21 states that the net pressure of the Starling equation is outward under normal conditions, resulting in a small continuous pulmonary lymph flow of about 20 mL/h.' },
  { t: 'open', id: 'C12', src: 'Pulm circulation p.22–24',
    q: 'Contrast the primary Starling abnormality in pulmonary edema caused by (1) mitral stenosis, (2) nephrotic syndrome (renal protein loss), and (3) sepsis, and state why alveolar edema is much more dangerous than interstitial edema.',
    ans: '(1) Mitral stenosis increases pulmonary capillary hydrostatic pressure (↑ Pc, cardiogenic edema due to increased left-sided afterload). (2) Nephrotic syndrome decreases capillary oncotic pressure (↓ πc, non-cardiogenic edema due to renal protein loss). (3) Sepsis damages the alveolar-capillary barrier and increases the filtration coefficient / capillary permeability (↑ K, non-cardiogenic edema). Alveolar edema is much more serious than interstitial edema because fluid floods the alveoli one by one, rendering them unventilated and causing severe V/Q mismatch and right-to-left shunt that directly impair gas exchange.' }
]});
