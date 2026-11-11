/* Section S: RS Under Stress (681119-1 RS_under stress_NS2025_handout.pdf, 16 slides). */
CVS.add({ id: 'S', short: 'RS under stress', title: 'Respiratory System Under Stress', kind: 'Lecture',
  blurb: 'Cardiopulmonary adaptations to exercise, high altitude hypoxia and acclimatization, hyperbaric diving and decompression sickness, NREM vs REM sleep physiology, and the fetal-to-neonatal respiratory transition at birth.',
  items: [
  { t: 'c', id: 'S-C1', title: 'Exercise: energy systems, ventilatory threshold, and blood gases', src: 'Stress p.2–5',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Muscle fuel, fastest → longest</b>: {{phosphagen}} (seconds) → {{glycogen–lactic acid}} (about a minute) → {{oxidative}} (as long as fuel lasts).</li>' +
      '<li><b>First seconds</b>: ventilation jumps → {{neural}} → motor cortex + {{proprioceptors}} in moving limbs.</li>' +
      '<li><b>Moderate exercise</b>: ventilation matches CO<sub>2</sub> → arterial gases and pH stay {{normal}}.</li>' +
      '<li><b>Above the {{anaerobic threshold}}</b>: lactic acid → buffered by HCO₃⁻ → extra CO<sub>2</sub> + H⁺ on the {{carotid bodies}} → ventilation rises faster → P<sub>aCO2</sub> falls.</li>' +
      '<li>Ventilation rises more (≈ 15×) than cardiac output (≈ 5×) → the {{biggest}} rise of all.</li>' +
      '<li>Training raises VO<sub>2</sub>max mainly through {{stroke volume}}, not lung size.</li></ul></div>' +
      CVS.fig('stress-exercise', 'Time course and cardiovascular/ventilatory responses across moderate and heavy exercise workloads.', 'stress', 3) + '</div>' },
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
      '<li>O<sub>2</sub> is still 21%, but {{barometric pressure}} falls → P<sub>IO2</sub> and P<sub>AO2</sub> fall.</li></ul>' +
      '<div class="flow col"><div class="fbox start"><b>Hours</b>: low P<sub>aO2</sub> → {{peripheral chemoreceptors}} → hyperventilation → P<sub>aCO2</sub> ↓ → {{respiratory alkalosis}}</div><div class="farrow">↓</div>' +
      '<div class="fbox"><b>Days</b>: kidneys excrete {{HCO₃⁻}} (faster with {{acetazolamide}}) → pH back toward normal → breathing drive restored</div><div class="farrow">↓</div>' +
      '<div class="fbox end"><b>Weeks</b>: ↑ 2,3-BPG (curve shifts {{right}}); HIF → ↑ {{erythropoietin}} → polycythemia</div></div>' +
      '<ul class="pts"><li>Whole-lung hypoxic vasoconstriction → pulmonary pressure ↑ → {{HAPE}} (treat: descend, O<sub>2</sub>, nifedipine).</li>' +
      '<li>Also AMS and HACE (treat: descend, O<sub>2</sub>, dexamethasone).</li></ul></div>' +
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
      '<li>Every {{10 m}} of seawater adds {{1 atm}} → at 50 m the total is 6 atm → P<sub>IO2</sub> = 0.21 × total.</li>' +
      '<li><b>{{Boyle}}</b>: ascend without breathing out → lung gas expands → alveoli rupture → {{pneumothorax}}, {{arterial gas embolism}}.</li>' +
      '<li><b>{{Henry}}</b>: deep → high pressure → more N<sub>2</sub> and O<sub>2</sub> dissolve:<ul>' +
      '<li>N<sub>2</sub> → {{nitrogen narcosis}} (“rapture of the deep”).</li><li>O<sub>2</sub> → {{oxygen toxicity}} (seizures).</li></ul></li>' +
      '<li><b>{{Decompression sickness}}</b>: ascend too fast → dissolved N<sub>2</sub> forms {{bubbles}} → joint pain, CNS damage → treat in a {{hyperbaric}} chamber.</li></ul></div>' +
      CVS.fig('stress-diving', 'Volume compression with depth and dissolved gas bubble formation during rapid ascent.', 'stress', 11) + '</div>' },
  { t: 'q', id: 'S6', src: 'AC81', core: true, keep: true,
    q: 'A 50 m scuba dive with an FiO₂ 21% oxygen tank. What is the PIO₂ in this person (in atm unit)?',
    o: ['1.05', '0.21', '0.55', '1.26'], a: 3,
    ex: 'Every 10 m of seawater adds 1 atm, so at 50 m the total pressure is 1 + 5 = 6 atm. PIO₂ = 0.21 × 6 = 1.26 atm (Dalton’s law).' },
  { t: 'c', id: 'S-C4', title: 'Sleep physiology: non-REM vs REM breathing and sleep apnea', src: 'Stress p.13–14',
    html: '<div class="two"><div class="stack"><div class="cols2"><div class="mini art"><h4>Non-REM</h4><ul>' +
      '<li>“Wake drive” lost → ventilation ↓ → P<sub>aCO2</sub> rises a little.</li><li>Breathing slow and {{regular}}.</li>' +
      '<li>{{pharyngeal dilator}} tone ↓ → airway resistance ↑.</li></ul></div>' +
      '<div class="mini ven"><h4>REM</h4><ul><li>Breathing {{irregular}}, brief apneas.</li>' +
      '<li>CO<sub>2</sub> and O<sub>2</sub> responses {{depressed}}.</li>' +
      '<li>Muscle {{atonia}} spares only the {{diaphragm}}.</li></ul></div></div>' +
      '<ul class="pts"><li>Lying down + low muscle tone → {{FRC}} ↓.</li>' +
      '<li><b>{{Obstructive}} sleep apnea</b>: throat collapses but the effort continues → snoring, daytime sleepiness → treat with {{CPAP}}.</li>' +
      '<li><b>Central sleep apnea</b>: brainstem stops sending → no airflow and no effort.</li></ul></div>' +
      CVS.fig('stress-sleep', 'Ventilatory control, upper airway tone, and blood gas changes across wakefulness and sleep stages.', 'stress', 14) + '</div>' },
  { t: 'q', id: 'S7', src: 'AC81', keep: true,
    q: 'Which of the following is normal physiology during sleep?',
    o: ['Decreased airway resistance', 'Decreased FRC', 'Increased hypercapnic & hypoxic ventilation drive', 'Decreased respiratory rate', 'Increased body temperature'], a: 1,
    ex: 'In sleep lung volume (FRC) falls with lying down and lower muscle tone, upper airway resistance rises, the hypercapnic and hypoxic drives fall, and body temperature falls. Respiratory rate does not fall consistently; it varies with sleep stage.' },
  { t: 'c', id: 'S-C5', title: 'Fetal gas exchange and the cardiopulmonary transition at birth', src: 'Stress p.15–16',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Fetus</b>: gas exchange in the {{placenta}}; low P<sub>O2</sub> but enough O<sub>2</sub> because:<ul>' +
      '<li>{{HbF}} → curve shifted {{left}}.</li><li>high Hb concentration, double Bohr effect.</li></ul></li>' +
      '<li>Fluid-filled hypoxic lungs → very high {{PVR}} → blood bypasses the lungs:<ul>' +
      '<li>{{foramen ovale}}: RA → LA.</li><li>{{ductus arteriosus}}: pulmonary artery → aorta.</li></ul></li></ul>' +
      '<div class="flow col"><div class="fbox start"><b>First breath</b> + {{surfactant}} → lungs open, O<sub>2</sub> in</div><div class="farrow">↓</div>' +
      '<div class="fbox">lung resistance {{falls}} → lung blood flow ↑ → more blood back to the LA</div><div class="farrow">↓</div>' +
      '<div class="fbox">cord clamped → SVR ↑ → LA pressure &gt; RA → flap of the oval hole {{closes}} (at once)</div><div class="farrow">↓</div>' +
      '<div class="fbox end">P<sub>aO2</sub> ↑, prostaglandin E2 ↓ → the arterial shunt shuts (hours to days)</div></div></div>' +
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
