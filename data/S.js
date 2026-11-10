/* Section S: RS Under Stress (681119-1 RS_under stress_NS2025_handout.pdf, 16 slides). */
CVS.add({ id: 'S', short: 'RS under stress', title: 'Respiratory System Under Stress', kind: 'Lecture',
  blurb: 'Cardiopulmonary adaptations to exercise, high altitude hypoxia and acclimatization, hyperbaric diving and decompression sickness, NREM vs REM sleep physiology, and the fetal-to-neonatal respiratory transition at birth.',
  items: [
  { t: 'c', id: 'S-C1', title: 'Exercise: energy systems, ventilatory threshold, and blood gases', src: 'Stress p.2–5',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li>Three muscle ATP sources: <b>{{phosphagen}}</b> system (ATP + phosphocreatine, {{8–10 seconds}} burst), <b>{{glycogen–lactic acid}}</b> system (oxygen-independent glycolysis, {{1.3–1.6 minutes}}), and <b>{{oxidative}}</b> system (mitochondrial phosphorylation, unlimited duration while fuel lasts).</li>' +
      '<li>During <b>moderate steady-state exercise</b>, alveolar ventilation increases linearly with O₂ consumption and CO₂ production, so arterial <b>PaO₂, PaCO₂, and pH remain {{normal}}</b> (while venous PO₂ falls and muscle O₂ extraction rises with a {{rightward}} ODC shift from ↑H⁺, ↑CO₂, ↑temperature, and ↑2,3-BPG).</li>' +
      '<li>Above the <b>{{anaerobic}} (ventilatory) threshold</b> (~60% Wmax), lactic acid buffered by HCO₃⁻ generates extra non-metabolic CO₂; H⁺ stimulates {{carotid bodies}}, causing disproportionate hyperventilation that <b>lowers {{PaCO2}}</b> while arterial pH still drops.</li>' +
      '<li>Cardiac output recruits apical capillaries (making V/Q more {{uniform}} and raising diffusing capacity ~3-fold), and endurance training increases <b>VO₂max</b> primarily by increasing {{stroke volume}} and maximal cardiac output rather than lung volumes.</li></ul></div>' +
      CVS.fig('stress-exercise', 'Time course and cardiovascular/ventilatory responses across moderate and heavy exercise workloads.', 'stress', 3) + '</div>' },
  { t: 'q', id: 'S1', src: 'Stress p.3–4', core: true,
    q: 'During <b>moderate steady-state aerobic exercise</b> (below the anaerobic threshold) in a healthy adult, how do arterial <b>PaO₂, PaCO₂, and pH</b> change compared with rest?',
    o: ['PaO₂, PaCO₂, and arterial pH all remain essentially unchanged near normal resting values', 'PaO₂ falls below 60 mmHg while PaCO₂ rises above 55 mmHg', 'PaCO₂ rises markedly while arterial pH becomes severely alkalotic', 'PaO₂ doubles to 200 mmHg while PaCO₂ falls to 15 mmHg', 'Mixed venous PO₂ rises while arterial PaO₂ falls'], a: 0,
    ex: 'Below the anaerobic threshold, alveolar ventilation rises in exact proportion to O₂ uptake and CO₂ production, keeping arterial PaO₂ (~95–100 mmHg), PaCO₂ (~40 mmHg), and pH (~7.40) virtually constant. Above the anaerobic threshold, lactic acidosis triggers hyperventilation that lowers PaCO₂.' },
  { t: 'q', id: 'S2', src: 'Stress p.2–3',
    q: 'Which energy system provides the dominant ATP supply for an all-out <b>100-meter sprint lasting ~8–10 seconds</b>?',
    o: ['Phosphagen system (preformed ATP and phosphocreatine)', 'Aerobic β-oxidation of free fatty acids', 'Glycogen–lactic acid system (peaking at 1.3–1.6 minutes)', 'Hepatic gluconeogenesis from alanine', 'Renal glutamine oxidation'], a: 0,
    ex: 'The phosphagen system (cellular ATP + phosphocreatine) supplies maximal power for 8–10 seconds (e.g., 100-m dash); the glycogen–lactic acid system sustains 1.3–1.6 minutes (e.g., 400–800 m run); the aerobic system sustains prolonged endurance events.' },
  { t: 'tf', id: 'S3', src: 'Stress p.4–5',
    q: 'Above the anaerobic (ventilatory) threshold, buffering of lactic acid by plasma HCO₃⁻ generates extra CO₂ and H⁺, driving a disproportionate increase in minute ventilation and a fall in arterial PaCO₂.', a: true,
    ex: 'True. Lactic acid + HCO₃⁻ → lactate⁻ + H₂CO₃ → H₂O + CO₂; both the extra CO₂ and arterial H⁺ (via peripheral chemoreceptors) drive hyperventilation, so VE/VO₂ rises steeply and PaCO₂ falls below 40 mmHg.' },

  { t: 'c', id: 'S-C2', title: 'High altitude: acute hypoxia, acclimatization, and altitude illness', src: 'Stress p.7–10',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li>At high altitude, fractional O₂ remains {{21%}}, but lower <b>{{barometric pressure}}</b> reduces inspired PO₂ and alveolar PAO₂ (e.g. Mt. Everest summit P_B ≈ {{253 mmHg}}).</li>' +
      '<li><b>Acute response</b>: arterial hypoxia (PaO₂ &lt; 60 mmHg) stimulates {{peripheral chemoreceptors}} (carotid bodies) → hyperventilation → ↓PaCO₂ and <b>{{respiratory alkalosis}}</b>, which initially brakes central respiratory drive.</li>' +
      '<li><b>Acclimatization (days to weeks)</b>: kidneys excrete {{HCO3-}} (accelerated by {{acetazolamide}}, a carbonic anhydrase inhibitor) to normalize CSF/blood pH and restore ventilatory drive; RBC {{2,3-BPG}} rises (shifting ODC right at moderate altitude, whereas extreme hypocapnic alkalemia shifts ODC left to aid pulmonary O₂ loading); <b>{{HIF}} (hypoxia-inducible factor)</b> stimulates {{erythropoietin}} (polycythemia) and VEGF (tissue capillarity).</li>' +
      '<li>Global <b>hypoxic pulmonary vasoconstriction (HPV)</b> raises pulmonary artery pressure, risking right ventricular hypertrophy and <b>{{HAPE}}</b> (high-altitude pulmonary edema, non-cardiogenic patchy edema treated with descent, O₂, and {{nifedipine}}), alongside <b>AMS</b> and <b>HACE</b> (treated with descent, O₂, and dexamethasone).</li></ul></div>' +
      CVS.fig('stress-altitude', 'Physiological cascade and multi-organ acclimatization to hypobaric hypoxia at high altitude.', 'stress', 10) + '</div>' },
  { t: 'q', id: 'S4', src: 'Stress p.8–10', core: true,
    q: 'When an unacclimatized lowlander ascends rapidly to 4,000 m, what initially <b>blunts (brakes)</b> the hypoxic increase in minute ventilation during the first few hours?',
    o: ['Hypocapnia and respiratory alkalosis inhibiting central chemoreceptors', 'Increased renal HCO₃⁻ excretion causing metabolic alkalosis', 'Immediate polycythemia suppressing carotid body glomus cells', 'Global pulmonary vasodilation lowering pulmonary artery pressure', 'Elevated 2,3-BPG directly inhibiting the phrenic nerve'], a: 0,
    ex: 'Peripheral chemoreceptors responds to low PaO₂ by driving hyperventilation, which blows off CO₂. The resulting fall in PaCO₂ and rise in CSF pH inhibit central chemoreceptors until renal HCO₃⁻ excretion (and CSF HCO₃⁻ transport) corrects the alkalosis over 2–5 days.' },
  { t: 'q', id: 'S5', src: 'Stress p.9–10', core: true,
    q: 'What is the primary pathophysiological mechanism of <b>High-Altitude Pulmonary Edema (HAPE)</b>?',
    o: ['Uneven, exaggerated hypoxic pulmonary vasoconstriction causing high capillary hydrostatic pressure and stress failure in overperfused regions', 'Left ventricular myocardial infarction with elevated pulmonary capillary wedge pressure', 'Severe hypercapnic acidosis causing systemic vasodilation', 'Decreased plasma oncotic pressure from acute hepatic failure', 'Bacterial infection of the lower respiratory tract'], a: 0,
    ex: 'Global alveolar hypoxia causes patchy, heterogeneous hypoxic pulmonary vasoconstriction (HPV). Regions with less constriction receive excessive blood flow under high pulmonary artery pressure, causing high capillary hydrostatic pressure and non-cardiogenic pulmonary edema.' },
  { t: 'tf', id: 'S6', src: 'Stress p.8–9',
    q: 'Prophylactic acetazolamide speeds up high-altitude acclimatization by inhibiting renal carbonic anhydrase, promoting urinary HCO₃⁻ excretion and counteracting respiratory alkalosis.', a: true,
    ex: 'True. Acetazolamide causes a mild renal HCO₃⁻ diuresis (metabolic acidosis), which offsets hyperventilation-induced respiratory alkalosis and allows sustained ventilatory drive at altitude.' },

  { t: 'c', id: 'S-C3', title: 'Diving & hyperbaric stress: gas laws, barotrauma, and the bends', src: 'Stress p.11–12',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li>Ambient pressure increases by <b>{{1 ATM}} for every {{10 meters}} (33 ft)</b> of seawater descent (at 20 m depth = 3 ATM; at 30 m = 4 ATM).</li>' +
      '<li><b>{{Boyle’s}} law</b> (P₁V₁ = P₂V₂): during breath-hold descent, lung gas volume compresses ("lung squeeze" below residual volume); during SCUBA <b>ascent</b>, compressed gas expands—failing to exhale causes alveolar rupture, <b>{{pneumothorax}}</b>, mediastinal emphysema, and <b>{{arterial gas embolism}}</b>.</li>' +
      '<li><b>{{Henry’s}} law</b> (dissolved gas ∝ partial pressure): breathing compressed air at depth forces high partial pressures of {{N2}} and O₂ into blood and lipid tissues.</li>' +
      '<li>High-pressure gas hazards at depth: <b>{{nitrogen narcosis}}</b> ("rapture of the deep", euphoria/impairment at &gt;30 m / 4 ATM from inert gas dissolving in neuronal membranes) and acute <b>{{O2 toxicity}}</b> (free-radical CNS seizures and pulmonary damage when PO₂ &gt; 2 ATM).</li>' +
      '<li><b>{{Decompression sickness}} (DCS, "the bends")</b>: rapid ascent causes dissolved inert gas to come out of solution as intravascular and tissue {{bubbles}} (joint pain, spinal/CNS ischemia, "the chokes"); prevented by slow staged ascent or breathing {{Heliox}} (helium–O₂) on deep dives, and treated in a <b>{{hyperbaric}} recompression chamber</b>.</li></ul></div>' +
      CVS.fig('stress-diving', 'Volume compression with depth and dissolved gas bubble formation during rapid ascent.', 'stress', 11) + '</div>' },
  { t: 'q', id: 'S7', src: 'Stress p.11–12', core: true,
    q: 'A SCUBA diver breathing compressed air at <b>30 meters depth (4 ATM)</b> panics and ascends rapidly to the surface while <b>holding his breath</b>. According to <b>Boyle’s law</b>, what life-threatening complication results directly from expansion of trapped alveolar gas?',
    o: ['Pulmonary barotrauma with pneumothorax and arterial gas embolism', 'Nitrogen narcosis ("rapture of the deep")', 'High-altitude cerebral edema', 'Carbon monoxide poisoning', 'Methemoglobinemia'], a: 0,
    ex: 'At 30 m (4 ATM), a diver’s lungs filled with compressed air at 4 ATM will expand 4-fold if held during ascent to 1 ATM (Boyle’s law: P₁V₁ = P₂V₂), tearing alveoli and causing pneumothorax and arterial gas embolism.' },
  { t: 'q', id: 'S8', src: 'Stress p.11–12', core: true,
    q: 'Why is <b>helium (Heliox)</b> substituted for nitrogen in breathing mixtures for very deep dives?',
    o: ['Helium has much lower lipid solubility (preventing nitrogen narcosis and reducing decompression bubble load) and lower density (reducing work of breathing)', 'Helium chemically binds hemoglobin with 200 times the affinity of O₂', 'Helium prevents alveolar gas expansion predicted by Boyle’s law during breath-hold ascent', 'Helium is metabolized by alveolar type II cells into surfactant', 'Helium increases airway resistance to prevent dynamic airway collapse'], a: 0,
    ex: 'Helium is far less lipid-soluble than N₂ (eliminating nitrogen narcosis and shortening decompression time) and has a much lower gas density (reducing turbulent airway resistance at high ambient pressures).' },

  { t: 'c', id: 'S-C4', title: 'Sleep physiology: non-REM vs REM breathing and sleep apnea', src: 'Stress p.13–14',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li>Transition from wakefulness to <b>{{NREM}} sleep</b> removes the cortical "wakefulness drive": minute ventilation falls by {{10–15%}}, breathing is slow and {{regular}}, PaCO₂ rises by {{3–5 mmHg}}, PaO₂ falls slightly, and upper airway resistance increases due to reduced {{pharyngeal dilator}} muscle tone (genioglossus).</li>' +
      '<li>During <b>{{rapid eye movement}} sleep</b>, breathing becomes {{irregular}} with brief apneas, chemosensitivity to hypercapnia and hypoxia is {{depressed}}, and generalized skeletal muscle {{atonia}} inhibits intercostal and upper airway muscles while sparing the <b>{{diaphragm}}</b>.</li>' +
      '<li><b>{{Obstructive}} sleep apnea (OSA)</b>: recurrent pharyngeal collapse during sleep despite preserved respiratory effort (paradoxical chest/abdominal motion, snoring, daytime somnolence, systemic/pulmonary hypertension; treated with {{CPAP}}).</li>' +
      '<li><b>Central sleep apnea (CSA)</b>: transient cessation of brainstem respiratory motor output with absence of both airflow and thoracoabdominal effort.</li></ul></div>' +
      CVS.fig('stress-sleep', 'Ventilatory control, upper airway tone, and blood gas changes across wakefulness and sleep stages.', 'stress', 14) + '</div>' },
  { t: 'q', id: 'S9', src: 'Stress p.13–14', core: true,
    q: 'During <b>REM sleep</b>, why does alveolar ventilation depend almost entirely on the <b>diaphragm</b> while the upper airway is maximally vulnerable to collapse?',
    o: ['Supraspinal descending inhibition causes skeletal muscle atonia of intercostal and pharyngeal dilator muscles while sparing the diaphragm', 'The phrenic nerve is completely paralyzed during REM sleep while external intercostals contract tetanically', 'Arterial PaCO₂ falls to 15 mmHg during REM sleep, silencing central chemoreceptors', 'Surfactant is acutely degraded during REM sleep and resynthesized during NREM sleep', 'The recurrent laryngeal nerve closes the glottis throughout REM sleep'], a: 0,
    ex: 'REM sleep produces generalized postural and respiratory skeletal muscle atonia—inhibiting the intercostal muscles and pharyngeal dilators (such as the genioglossus)—while sparing the diaphragm.' },
  { t: 'tf', id: 'S10', src: 'Stress p.13–14',
    q: 'In normal NREM sleep, loss of the wakefulness drive and increased upper airway resistance cause minute ventilation to decrease slightly and arterial PaCO₂ to rise by about 3–5 mmHg.', a: true,
    ex: 'True. Even in healthy individuals, NREM sleep reduces minute ventilation by ~10–15% and raises PaCO₂ by ~3–5 mmHg due to loss of the wakefulness drive, a rightward shift in the CO₂ apnea/response curve, and higher upper airway resistance.' },

  { t: 'c', id: 'S-C5', title: 'Fetal gas exchange and the cardiopulmonary transition at birth', src: 'Stress p.15–16',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li>In utero, gas exchange occurs in the <b>{{placenta}}</b>; umbilical vein blood has a low PO₂ (~{{30 mmHg}}, ~80% saturated), yet adequate O₂ delivery is maintained by high fetal hemoglobin concentration, <b>{{HbF}} (α₂γ₂)</b> (which binds {{2,3-BPG}} weakly, shifting the ODC {{leftward}} with P₅₀ ≈ {{19 mmHg}}), and the <b>{{double Bohr}} effect</b>.</li>' +
      '<li>Fetal lungs are fluid-filled and hypoxic, causing intense <b>hypoxic pulmonary vasoconstriction</b> (very high {{PVR}}); ~90% of right ventricular output bypasses the lungs via two right-to-left cardiac shunts—the <b>{{foramen ovale}}</b> (RA → LA) and <b>{{ductus arteriosus}}</b> (PA → aorta)—plus the hepatic <b>ductus venosus</b>.</li>' +
      '<li>At birth, the <b>first breath</b> generates strongly negative intrapleural pressure (−40 to −60 cmH₂O) as {{surfactant}} stabilizes expanding alveoli; alveolar oxygenation and expansion cause a dramatic <b>fall in {{pulmonary vascular resistance}}</b> and an 8–10× surge in pulmonary blood flow.</li>' +
      '<li>Clamping the umbilical cord removes the low-resistance placental bed (↑SVR and ↑LA pressure &gt; RA pressure), closing the interatrial flap, while rising PaO₂ and falling {{prostaglandin E2}} constrict the arterial shunt.</li></ul></div>' +
      CVS.fig('stress-fetal', 'Fetal circulation shunts, dissociation curves, and cardiopulmonary changes at the first breath.', 'stress', 15) + '</div>' },
  { t: 'q', id: 'S11', src: 'Stress p.15–16', core: true,
    q: 'What is the primary molecular reason that <b>fetal hemoglobin (HbF, α₂γ₂)</b> has a higher oxygen affinity (left-shifted O₂ dissociation curve, P₅₀ ≈ 19 mmHg) than maternal adult hemoglobin (HbA, α₂β₂, P₅₀ ≈ 27 mmHg)?',
    o: ['The γ-globin chains of HbF bind 2,3-BPG less avidly than the β-globin chains of HbA', 'HbF contains ferric (Fe³⁺) iron instead of ferrous (Fe²⁺) iron', 'HbF is a monomer with a hyperbolic dissociation curve identical to myoglobin', 'Fetal red blood cells lack carbonic anhydrase', 'Fetal arterial blood has a PO₂ of 100 mmHg in the umbilical vein'], a: 0,
    ex: 'HbF (α₂γ₂) has γ chains lacking the positively charged histidine residues on β chains that bind 2,3-BPG. Weak 2,3-BPG binding keeps HbF in the high-affinity R state (left-shifted ODC), allowing O₂ transfer from maternal HbA across the placenta even at low umbilical vein PO₂ (~30 mmHg).' },
  { t: 'q', id: 'S12', src: 'Stress p.15–16', core: true,
    q: 'Immediately after birth, which combination of events causes functional closure of the <b>foramen ovale</b>?',
    o: ['Expansion and oxygenation of the lungs drastically lower PVR (increasing pulmonary venous return to the left atrium) while umbilical cord clamping raises SVR (increasing left atrial pressure above right atrial pressure)', 'Severe neonatal hypoxia increases PVR and raises right atrial pressure above left atrial pressure', 'Elevated placental prostaglandin E₂ dilates the interatrial septum', 'A sudden fall in systemic arterial pressure below pulmonary artery pressure', 'Closure of the trachea during the first inspiration'], a: 0,
    ex: 'The first breath oxygenates the alveoli, releasing hypoxic pulmonary vasoconstriction and dropping PVR so pulmonary blood flow into the LA surges; simultaneously, clamping the umbilical cord removes the low-resistance placenta, raising SVR and LV/LA pressure. Once LA pressure exceeds RA pressure, the flap valve of the foramen ovale closes.' },
  { t: 'tf', id: 'S13', src: 'Stress p.15–16',
    q: 'The double Bohr effect across the placenta refers to maternal blood becoming more acidic (shifting maternal HbA right to unload O₂) while fetal blood becomes more alkaline as it gives up CO₂ (shifting fetal HbF left to load O₂).', a: true,
    ex: 'True. As CO₂ diffuses from fetal to maternal blood in the placenta, fetal pH rises (increasing HbF O₂ affinity) while maternal intervillous pH falls (decreasing HbA O₂ affinity), widening the O₂ saturation transfer gradient in both directions (the double Bohr effect).' }
]});
