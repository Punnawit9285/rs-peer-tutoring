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
      CVS.fig('stress-exercise', 'Time course and cardiovascular/ventilatory responses across moderate and heavy exercise workloads.', 'stress', 3) + '</div>' + '<p class="note"><b>From the past papers</b> · The jump in ventilation in the first seconds of exercise is neural: impulses from moving limbs (joint and muscle receptors) and the motor cortex (Resp control p.35; AC81).</p>' },
  { t: 'q', id: 'S1', src: 'AC80', core: true, keep: true,
    q: 'What increase the most percentage during exercise?',
    o: ['Cardiac output', 'Ventilation', 'Heart rate', 'Vascular resistance', 'Tidal volume'], a: 1,
    ex: 'Minute ventilation can rise more than 15-fold because both rate and depth increase. Cardiac output rises about 5-fold, and vascular resistance falls.' },
  { t: 'q', id: 'S2', src: 'AC81', core: true, keep: true,
    q: 'A healthy 25-year-old man does moderate exercise on a treadmill. What is the cause of hyperventilation within the first minute of exercise?',
    o: ['Increased CO₂ stimulates the central chemoreceptor', 'A sudden partial oxygen drop in PaO₂ stimulates the peripheral center', 'Accumulation of lactate', 'Proprioceptor response from moving limbs', 'Increased temperature stimulates the hypothalamus'], a: 3,
    ex: 'The abrupt rise in ventilation at the start of exercise comes before any change in blood gases: it is neural, from the motor cortex and from proprioceptors in moving joints and muscles.' },
  { t: 'c', id: 'S-C2', title: 'High altitude: acute hypoxia, acclimatization, and altitude illness', src: 'Stress p.7–10',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li>At high altitude, fractional O₂ remains {{21%}}, but lower <b>{{barometric pressure}}</b> reduces inspired PO₂ and alveolar PAO₂ (e.g. Mt. Everest summit P_B ≈ {{253 mmHg}}).</li>' +
      '<li><b>Acute response</b>: arterial hypoxia (PaO₂ &lt; 60 mmHg) stimulates {{peripheral chemoreceptors}} (carotid bodies) → hyperventilation → ↓PaCO₂ and <b>{{respiratory alkalosis}}</b>, which initially brakes central respiratory drive.</li>' +
      '<li><b>Acclimatization (days to weeks)</b>: kidneys excrete {{HCO3-}} (accelerated by {{acetazolamide}}, a carbonic anhydrase inhibitor) to normalize CSF/blood pH and restore ventilatory drive; RBC {{2,3-BPG}} rises (shifting ODC right at moderate altitude, whereas extreme hypocapnic alkalemia shifts ODC left to aid pulmonary O₂ loading); <b>{{HIF}} (hypoxia-inducible factor)</b> stimulates {{erythropoietin}} (polycythemia) and VEGF (tissue capillarity).</li>' +
      '<li>Global <b>hypoxic pulmonary vasoconstriction (HPV)</b> raises pulmonary artery pressure, risking right ventricular hypertrophy and <b>{{HAPE}}</b> (high-altitude pulmonary edema, non-cardiogenic patchy edema treated with descent, O₂, and {{nifedipine}}), alongside <b>AMS</b> and <b>HACE</b> (treated with descent, O₂, and dexamethasone).</li></ul></div>' +
      CVS.fig('stress-altitude', 'Physiological cascade and multi-organ acclimatization to hypobaric hypoxia at high altitude.', 'stress', 10) + '</div>' },
  { t: 'q', id: 'S3', src: 'AC81', core: true, keep: true,
    q: 'A woman ascends from sea level to a 4000 m mountain, resulting in hyperventilation. What is the immediate effect in this case?',
    o: ['Respiratory acidosis', 'Respiratory alkalosis', 'Metabolic acidosis', 'No pH change from renal compensation'], a: 1,
    ex: 'Hypoxia drives the peripheral chemoreceptors, she blows off CO₂, and pH rises: acute respiratory alkalosis. Renal compensation (HCO₃⁻ excretion) takes days.' },
  { t: 'q', id: 'S4', src: 'AC79', keep: true,
    q: 'Jane is climbing up Mt. Fuji, a mountain 3776 meters tall. What are the physiological changes expected in Jane compared to when Jane is at sea level?',
    o: ['Hypoventilation', 'Respiratory acidosis', 'The oxygen dissociation curve shifts to the right', 'Decreased 2,3-DPG', 'Pulmonary vasodilation'], a: 2,
    ex: 'Hypoxia raises 2,3-BPG, shifting the curve right to help unload O₂. She hyperventilates (respiratory alkalosis), and hypoxia constricts the pulmonary vessels.' },
  { t: 'q', id: 'S5', src: 'AC80 (clinical correlation)', core: true, keep: true,
    q: '(high altitude) 30-year-old man ขึ้นเขา Mont Blanc แล้ว acclimatization 1 วัน เกิดอะไรขึ้น <span class="muted">A 30-year-old man climbs Mont Blanc and acclimatizes for 1 day. What happens?</span>',
    o: ['Changes oxidative enzymes in muscle cell', 'Polycythemia rapidly increases within a day', 'กราฟ Hb-O₂ shift left <span class="muted">(Hb–O₂ curve shifts left)</span>', 'Hyperventilation'], a: 3,
    ex: 'Within minutes to a day, hypoxia drives hyperventilation through the peripheral chemoreceptors. Polycythemia and changes in muscle enzymes take weeks, and the curve shifts right (more 2,3-BPG), not left.' },
  { t: 'c', id: 'S-C3', title: 'Diving & hyperbaric stress: gas laws, barotrauma, and the bends', src: 'Stress p.11–12',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li>Ambient pressure increases by <b>{{1 ATM}} for every {{10 meters}} (33 ft)</b> of seawater descent (at 20 m depth = 3 ATM; at 30 m = 4 ATM).</li>' +
      '<li><b>{{Boyle’s}} law</b> (P₁V₁ = P₂V₂): during breath-hold descent, lung gas volume compresses ("lung squeeze" below residual volume); during SCUBA <b>ascent</b>, compressed gas expands—failing to exhale causes alveolar rupture, <b>{{pneumothorax}}</b>, mediastinal emphysema, and <b>{{arterial gas embolism}}</b>.</li>' +
      '<li><b>{{Henry’s}} law</b> (dissolved gas ∝ partial pressure): breathing compressed air at depth forces high partial pressures of {{N2}} and O₂ into blood and lipid tissues.</li>' +
      '<li>High-pressure gas hazards at depth: <b>{{nitrogen narcosis}}</b> ("rapture of the deep", euphoria/impairment at &gt;30 m / 4 ATM from inert gas dissolving in neuronal membranes) and acute <b>{{O2 toxicity}}</b> (free-radical CNS seizures and pulmonary damage when PO₂ &gt; 2 ATM).</li>' +
      '<li><b>{{Decompression sickness}} (DCS, "the bends")</b>: rapid ascent causes dissolved inert gas to come out of solution as intravascular and tissue {{bubbles}} (joint pain, spinal/CNS ischemia, "the chokes"); prevented by slow staged ascent or breathing {{Heliox}} (helium–O₂) on deep dives, and treated in a <b>{{hyperbaric}} recompression chamber</b>.</li></ul></div>' +
      CVS.fig('stress-diving', 'Volume compression with depth and dissolved gas bubble formation during rapid ascent.', 'stress', 11) + '</div>' },
  { t: 'q', id: 'S6', src: 'AC81', core: true, keep: true,
    q: 'A 50 m scuba dive with an FiO₂ 21% oxygen tank. What is the PIO₂ in this person (in atm unit)?',
    o: ['1.05', '0.21', '0.55', '1.26'], a: 3,
    ex: 'Every 10 m of seawater adds 1 atm, so at 50 m the total pressure is 1 + 5 = 6 atm. PIO₂ = 0.21 × 6 = 1.26 atm (Dalton’s law).' },
  { t: 'c', id: 'S-C4', title: 'Sleep physiology: non-REM vs REM breathing and sleep apnea', src: 'Stress p.13–14',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li>Transition from wakefulness to <b>{{NREM}} sleep</b> removes the cortical "wakefulness drive": minute ventilation falls by {{10–15%}}, breathing is slow and {{regular}}, PaCO₂ rises by {{3–5 mmHg}}, PaO₂ falls slightly, and upper airway resistance increases due to reduced {{pharyngeal dilator}} muscle tone (genioglossus).</li>' +
      '<li>During <b>{{rapid eye movement}} sleep</b>, breathing becomes {{irregular}} with brief apneas, chemosensitivity to hypercapnia and hypoxia is {{depressed}}, and generalized skeletal muscle {{atonia}} inhibits intercostal and upper airway muscles while sparing the <b>{{diaphragm}}</b>.</li>' +
      '<li><b>{{Obstructive}} sleep apnea (OSA)</b>: recurrent pharyngeal collapse during sleep despite preserved respiratory effort (paradoxical chest/abdominal motion, snoring, daytime somnolence, systemic/pulmonary hypertension; treated with {{CPAP}}).</li>' +
      '<li><b>Central sleep apnea (CSA)</b>: transient cessation of brainstem respiratory motor output with absence of both airflow and thoracoabdominal effort.</li></ul></div>' +
      CVS.fig('stress-sleep', 'Ventilatory control, upper airway tone, and blood gas changes across wakefulness and sleep stages.', 'stress', 14) + '</div>' },
  { t: 'q', id: 'S7', src: 'AC81', keep: true,
    q: 'Which of the following is normal physiology during sleep?',
    o: ['Decreased airway resistance', 'Decreased FRC', 'Increased hypercapnic & hypoxic ventilation drive', 'Decreased respiratory rate', 'Increased body temperature'], a: 1,
    ex: 'In sleep lung volume (FRC) falls with lying down and lower muscle tone, upper airway resistance rises, the hypercapnic and hypoxic drives fall, and body temperature falls. Respiratory rate does not fall consistently; it varies with sleep stage.' },
  { t: 'c', id: 'S-C5', title: 'Fetal gas exchange and the cardiopulmonary transition at birth', src: 'Stress p.15–16',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li>In utero, gas exchange occurs in the <b>{{placenta}}</b>; umbilical vein blood has a low PO₂ (~{{30 mmHg}}, ~80% saturated), yet adequate O₂ delivery is maintained by high fetal hemoglobin concentration, <b>{{HbF}} (α₂γ₂)</b> (which binds {{2,3-BPG}} weakly, shifting the ODC {{leftward}} with P₅₀ ≈ {{19 mmHg}}), and the <b>{{double Bohr}} effect</b>.</li>' +
      '<li>Fetal lungs are fluid-filled and hypoxic, causing intense <b>hypoxic pulmonary vasoconstriction</b> (very high {{PVR}}); ~90% of right ventricular output bypasses the lungs via two right-to-left cardiac shunts—the <b>{{foramen ovale}}</b> (RA → LA) and <b>{{ductus arteriosus}}</b> (PA → aorta)—plus the hepatic <b>ductus venosus</b>.</li>' +
      '<li>At birth, the <b>first breath</b> generates strongly negative intrapleural pressure (−40 to −60 cmH₂O) as {{surfactant}} stabilizes expanding alveoli; alveolar oxygenation and expansion cause a dramatic <b>fall in {{pulmonary vascular resistance}}</b> and an 8–10× surge in pulmonary blood flow.</li>' +
      '<li>Clamping the umbilical cord removes the low-resistance placental bed (↑SVR and ↑LA pressure &gt; RA pressure), closing the interatrial flap, while rising PaO₂ and falling {{prostaglandin E2}} constrict the arterial shunt.</li></ul></div>' +
      CVS.fig('stress-fetal', 'Fetal circulation shunts, dissociation curves, and cardiopulmonary changes at the first breath.', 'stress', 15) + '</div>' },
  { t: 'q', id: 'S8', src: 'AC81', core: true, keep: true,
    q: 'Which of the following immediately happens after the infant’s birth?',
    o: ['An increase in pulmonary resistance', 'Closure of the foramen ovale', 'Blood flow through the ductus arteriosus', 'A weak respiratory'], a: 1,
    ex: 'With the first breaths PVR falls and pulmonary blood flow returning to the left atrium raises its pressure above the right, pushing the flap of the foramen ovale shut. The ductus closes over hours to days.' },
  { t: 'q', id: 'S9', src: 'AC80', keep: true,
    q: 'Placenta → pulmonary circulation. What happen when placenta circulation gives way to pulmonary circulation?',
    o: ['Ductus arteriosus closed', 'Decreased PO₂', 'Increase blood flow through foramen ovale', 'Decreased force of respiration', 'Increased pulmonary vascular resistance'], a: 0,
    ex: 'When the lungs take over, PO₂ rises and PVR falls; the shunts close: the ductus arteriosus (becoming the ligamentum arteriosum) and the foramen ovale (becoming the fossa ovalis).' }
]});
