/* Section R: Neural & Chemical Control of Respiration (681114-3 Respiratory control handout, 54 pp.). */
CVS.add({ id: 'R', short: 'Resp control', title: 'Neural & Chemical Control of Respiration', kind: 'Lecture',
  blurb: 'Medullary and pontine respiratory centers, central vs peripheral chemoreceptors and glomus cell transduction, lung mechanoreceptors and C-fibers, integrated responses to CO2, O2, pH and exercise, CO2 narcosis, and abnormal breathing patterns.',
  items: [
  { t: 'c', id: 'R-C1', title: 'Central controller: brainstem centers, cortex, and effectors', src: 'Resp control p.4–16',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl compact"><thead><tr><th>Center</th><th>Where</th><th>Job</th></tr></thead><tbody>' +
      '<tr><td><b>DRG</b></td><td>medulla: {{nucleus tractus solitarii}}</td><td>quiet {{breathing in}} → phrenic n. → diaphragm</td></tr>' +
      '<tr><td><b>VRG, middle part</b></td><td>{{pre-Bötzinger complex}}</td><td>the {{pacemaker}} that sets the rhythm</td></tr>' +
      '<tr><td><b>VRG, front and back parts</b></td><td>Bötzinger complex, NRA</td><td>{{expiration}} (active breathing out)</td></tr>' +
      '<tr><td><b>Apneustic</b></td><td>{{lower pons}}</td><td>excites the DRG → longer inspiration</td></tr>' +
      '<tr><td><b>Pneumotaxic</b></td><td>{{upper pons}}</td><td>{{switches inspiration off}} → sets rate and depth</td></tr></tbody></table></div>' +
      '<ul class="pts"><li><b>Cortex</b> → {{voluntary}} control (breath-hold, hyperventilate, within limits).</li>' +
      '<li><b>Limbic system, hypothalamus</b> → breathing changes with emotion.</li></ul></div>' +
      CVS.fig('ctrl-brainstem', 'Brainstem respiratory control network showing sensors, pontine and medullary centers, and motor output to the diaphragm.', 'ctrl', 11) + '</div>' },
  { t: 'q', id: 'R1', src: 'Resp control p.9–10', core: true,
    q: 'Which structure serves as the primary pacemaker (central pattern generator) for the basic respiratory rhythm, and where is it located?',
    o: ['Pre-Botzinger complex in the intermediate ventral respiratory group (VRG)', 'Nucleus tractus solitarii (NTS) in the dorsal respiratory group (DRG)', 'Botzinger complex (nucleus retrofacialis) in the rostral VRG', 'Nucleus retroambigualis (NRA) in the caudal VRG', 'Pneumotaxic center in the upper pons'], a: 0,
    ex: 'The pre-Botzinger complex (preBotC), located in the intermediate subdivision of the ventral respiratory group (VRG) in the medulla, contains pacemaker neurons that generate the basic respiratory rhythm.' },
  { t: 'q', id: 'R2', src: 'Resp control p.10–11, 16', core: true,
    q: 'Which statement accurately describes the medullary dorsal respiratory group (DRG) and the two pontine respiratory centers?',
    o: ['The DRG (nucleus tractus solitarii) drives inspiration via the phrenic nerve (C3–C5); the lower-pontine apneustic center excites the DRG; the upper-pontine pneumotaxic center inhibits inspiration to regulate volume and rate', 'The DRG drives forced expiration via abdominal muscles; the apneustic center inhibits inspiration; the pneumotaxic center prolongs inspiration', 'The DRG is located in the upper pons and receives only somatic limb afferents; the apneustic center is in the dorsal medulla', 'The apneustic center in the upper pons switches off inspiration, whereas the pneumotaxic center in the lower pons excites the diaphragm directly', 'The DRG consists of the nucleus retroambigualis and is active only during heavy exercise'], a: 0,
    ex: 'The DRG is composed of the nucleus tractus solitarii (NTS) in the dorsal medulla, receives visceral sensory input from CN IX and CN X, and sends inspiratory output via the phrenic nerves (C3–C5) to the diaphragm. The lower pons (apneustic center) has an excitatory function on the DRG, whereas the upper pons (pneumotaxic center) inhibits inspiration to regulate tidal volume and respiratory rate.' },
  { t: 'c', id: 'R-C2', title: 'Central vs. peripheral chemoreceptors and glomus cell transduction', src: 'Resp control p.20–26',
    html: '<div class="two">' + CVS.fig('ctrl-central', 'Central chemoreceptor mechanism on the ventral medullary surface.', 'ctrl', 21) + CVS.fig('ctrl-glomus', 'Carotid body histology and hypoxic signal transduction in Type I glomus cells.', 'ctrl', 24) + '</div>' +
      '<div class="cols2"><div class="mini art"><h4>Central (ventral medulla)</h4><ul>' +
      '<li>Blood CO<sub>2</sub> crosses the {{blood-brain barrier}}; blood H<sup>+</sup> cannot.</li>' +
      '<li>CO<sub>2</sub> in CSF → H<sup>+</sup> → receptor fires → ventilation ↑.</li>' +
      '<li>CSF has little protein → {{weak buffer}} → small CO<sub>2</sub> change, big pH change.</li>' +
      '<li>Gives {{about 70%}} of the CO<sub>2</sub> drive. Does not sense O<sub>2</sub>.</li></ul></div>' +
      '<div class="mini ven"><h4>Peripheral (carotid, aortic bodies)</h4><ul>' +
      '<li>Carotid body → {{CN IX}}; aortic body → CN X.</li>' +
      '<li>Sense low P<sub>aO2</sub> (strongly below about {{60}} mmHg), high CO<sub>2</sub>, and blood H<sup>+</sup>.</li>' +
      '<li>Blood acid (lactic acid, ketoacidosis) → mainly the carotid body → {{Kussmaul}} breathing.</li></ul></div></div>' +
      '<p><b>Glomus (type I) cell</b>: low O<sub>2</sub> → {{K⁺ channels}} close → depolarise → {{Ca²⁺}} enters → transmitter release → nerve fires.</p>' },
  { t: 'q', id: 'R3', src: 'AC80', core: true, keep: true,
    q: 'A patient with DM has hyperventilation. His blood test shows elevated levels of lactic acid. Where is the receptor responsible for this phenomenon located?',
    o: ['Medulla', 'Carotid body', 'Internal thoracic artery', 'Vagus nerve', 'Aortic arch'], a: 1,
    ex: 'Blood H⁺ cannot cross the blood–brain barrier, so a metabolic acidosis drives breathing through the peripheral chemoreceptors, mainly the carotid bodies (via CN IX). Central chemoreceptors respond to CSF H⁺ from CO₂.' },
  { t: 'q', id: 'R4', src: 'AC79', keep: true,
    q: 'A 70-year-old woman with severe pulmonary fibrosis comes to a pulmonologist due to worsening dyspnea. The arterial blood gas results are as follows: pH = 7.5, PaO₂ = 50 mmHg, PaCO₂ = 28 mmHg. Which is the correct physiological response in the cerebrospinal fluid?',
    o: ['Stimulation of breathing via central chemoreceptor due to increased pH', 'Inhibition of breathing via central chemoreceptor due to increased pH', 'Stimulation of breathing via peripheral chemoreceptor due to increased pCO₂', 'Inhibition of breathing via central chemoreceptor due to increased pO₂', 'Inhibition of breathing via peripheral chemoreceptor due to increased pO₂'], a: 1,
    ex: 'Hypoxemia drives the peripheral chemoreceptors and she blows off CO₂. The low CO₂ raises CSF pH, which brakes breathing through the central chemoreceptors. Central receptors do not sense O₂.' },
  { t: 'c', id: 'R-C3', title: 'Lung mechanoreceptors, C-fibers, and other sensory inputs', src: 'Resp control p.27–35',
    html: '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Receptor (vagus)</th><th>Triggered by</th><th>Response</th></tr></thead><tbody>' +
      '<tr><td><b>Stretch</b> (airway smooth muscle)</td><td>lung {{inflation}}</td><td>{{Hering-Breuer reflex}} → longer expiration → slower rate (strong in newborns)</td></tr>' +
      '<tr><td><b>Irritant</b> (airway epithelium)</td><td>smoke, dust, cold air, {{histamine}}</td><td>cough, bronchoconstriction → part of {{asthma}} attacks</td></tr>' +
      '<tr><td><b>J receptors</b> (alveolar wall, C-fibres)</td><td>{{interstitial edema}} (e.g. left heart failure)</td><td>{{rapid, shallow breathing}}</td></tr></tbody></table></div>' +
      '<ul class="pts">' +
      '<li>Cut both vagi (animal) → no stretch reflex → {{slow, deep}} breathing.</li>' +
      '<li><b>Others</b>: joint and muscle receptors → early exercise breathing; ↑ blood pressure (baroreceptors) → {{less}} breathing; pain → brief apnea then hyperventilation.</li></ul>' },
  { t: 'q', id: 'R5', src: 'AC79 · AC80 · AC81', core: true, keep: true,
    q: '70-year-old man with congestive heart failure from left ventricular heart failure. EP: rapid shallow breathing with O₂ sat 92%. Lung: fine crepitations in both lungs. Which mechanism is responsible for this?',
    o: ['Peripheral chemoreceptor', 'Central chemoreceptor', 'Muscle and joint receptor', 'Juxtacapillary receptor', 'Both peripheral and central chemoreceptor'], a: 3,
    ex: 'Left heart failure raises pulmonary capillary pressure and fluid builds up in the interstitium. That stimulates J (juxtacapillary) receptors in the alveolar walls, which signal by the vagus to give rapid, shallow breathing.',
    flag: 'Asked in all three years (AC79 wording: “juxta-pulmonary capillary receptors”).' },
  { t: 'c', id: 'R-C4', title: 'Integrated responses to CO2, O2, pH, exercise, altitude, and CO2 narcosis', src: 'Resp control p.38–51',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>CO<sub>2</sub></b> = the {{strongest}} everyday stimulus; ventilation rises in a straight line with P<sub>CO2</sub>.<ul>' +
      '<li>Low O<sub>2</sub> at the same time → steeper line.</li><li>Sleep, age, chronic CO<sub>2</sub> retention → flatter line.</li></ul></li>' +
      '<li><b>Low O<sub>2</sub></b> → sensed {{only by peripheral}} receptors → little effect until P<sub>aO2</sub> &lt; about 60.</li>' +
      '<li><b>Hyperventilation</b> → P<sub>CO2</sub> {{↓}}, P<sub>O2</sub> {{↑}}.</li>' +
      '<li><b>Exercise</b> (moderate): ventilation ↑ more than cardiac output; blood gases and pH stay {{normal}}. Heavy exercise → lactic acid → pH ↓.</li>' +
      '<li><b>Altitude</b>: low O<sub>2</sub> → hyperventilation → {{respiratory alkalosis}}; ↑ 2,3-BPG, ↑ EPO.</li></ul>' +
      '<div class="flow col"><div class="fbox start"><b>CO<sub>2</sub> narcosis</b>: COPD retainer gets too much O<sub>2</sub></div><div class="farrow">↓</div>' +
      '<div class="fbox">hypoxic drive removed → {{hypoventilation}} + hypoxic vasoconstriction lost → V/Q worse</div><div class="farrow">↓</div>' +
      '<div class="fbox end">P<sub>aCO2</sub> ↑ → drowsy (acute-on-chronic {{respiratory acidosis}})</div></div></div>' +
      CVS.fig('ctrl-co2-po2', 'Linear ventilatory response to alveolar PCO2 showing a steeper slope and leftward shift when alveolar PO2 is lowered from 110 to 47 mmHg.', 'ctrl', 40) + '</div>' },
  { t: 'q', id: 'R6', src: 'AC80 · AC81', core: true, keep: true,
    q: 'An elderly man comes to the clinic with COPD. He was given O₂ through nasal cannula. His SpO₂ increases from 85 to 99%. After one hour, he is noted with drowsiness. His PaCO₂ increased from 45 to 70 mmHg. Why?',
    o: ['Increased alveolar dead space', 'Right shift of O₂ dissociation curve', 'Hypoxic vasoconstriction', 'Increased metabolic rate due to improved tissue oxygenation', 'Decreased peripheral chemoreceptor stimulation of ventilation'], a: 4,
    ex: 'With chronic CO₂ retention the central drive is blunted, and breathing leans on hypoxic stimulation of the peripheral chemoreceptors. Correcting the hypoxia removes that drive, ventilation falls and CO₂ rises (CO₂ narcosis). Loss of hypoxic vasoconstriction worsens V/Q matching too.',
    flag: 'AC80 asked it in Thai with only two options and keyed “decreased sensitivity of chemoreceptor to CO₂” (the blunted central drive that makes him rely on the hypoxic drive).' },
  { t: 'q', id: 'R7', src: 'AC81', keep: true,
    q: 'Which of the following choices happens during exercise?',
    o: ['Oxygen consumption can not increase more than tenfold compared to rest.', 'Ventilation is increased in proportion higher than cardiac output', 'Intense exercise causes blood lactic to decrease', 'Change on ventilation is entirely caused by lowered pH'], a: 1,
    ex: 'Ventilation can rise 15–20-fold but cardiac output only about 5-fold, so V/Q rises. O₂ consumption can exceed 10× rest in athletes; lactate rises in intense exercise; and the ventilatory rise is mostly neural, not pH-driven.' },
  { t: 'q', id: 'R8', src: 'AC81', keep: true,
    q: 'Which of the following choices is the hyperventilation effect on PO₂ and PCO₂?',
    o: ['Normal PCO₂, normal PO₂', 'Increased PCO₂, increased PO₂', 'Increased PCO₂, decreased PO₂', 'Decreased PCO₂, increased PO₂', 'Decreased PCO₂, decreased PO₂'], a: 3,
    ex: 'Hyperventilation means alveolar ventilation above what CO₂ production needs: PACO₂ falls and, by the alveolar gas equation, PAO₂ rises.',
    flag: 'The raw student key marks C (increased PCO₂, decreased PO₂), which is the effect of <i>hypo</i>ventilation; the recall probably mixed the two. Physiologically the answer is D.' },
  { t: 'c', id: 'R-C5', title: 'Normal and abnormal respiratory patterns', src: 'Resp control p.52–53',
    html: '<div class="stack">' + CVS.fig('ctrl-patterns', 'Normal and abnormal respiratory patterns traced as tidal volume over time.', 'ctrl', 53) +
      '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Pattern</th><th>Looks like</th><th>Cause</th></tr></thead><tbody>' +
      '<tr><td><b>Sigh</b></td><td>one {{deep breath}} in normal breathing</td><td>normal; reopens alveoli</td></tr>' +
      '<tr><td><b>Cheyne-Stokes</b></td><td>{{crescendo-decrescendo}} → apnea → repeat</td><td>heart failure (slow feedback), brain damage, altitude</td></tr>' +
      '<tr><td><b>Apneusis</b></td><td>{{long inspiratory holds}}</td><td>{{upper pons}} (pneumotaxic) lesion + vagi cut</td></tr>' +
      '<tr><td><b>Cluster (Biot)</b></td><td>{{groups of breaths}} with pauses</td><td>brainstem damage, ↑ ICP</td></tr>' +
      '<tr><td><b>Ataxic</b></td><td>{{completely irregular}}</td><td>{{medulla}} damage</td></tr>' +
      '<tr><td><b>Gasping</b></td><td>single sharp gasps, long pauses</td><td>dying brainstem</td></tr></tbody></table></div></div>' },
  { t: 'q', id: 'R9', src: 'Resp control p.8, 11, 53', core: true,
    q: 'Which abnormal respiratory pattern consists of sustained inspiratory plateaus ("inspiratory cramps") interrupted by brief, insufficient expirations, and what brainstem lesion produces it?',
    o: ['Apneusis — rostral pontine lesion damaging the pneumotaxic center (especially with vagal denervation), leaving the lower-pontine apneustic center uninhibited', 'Cheyne-Stokes respiration — lesion of the pre-Botzinger complex causing chaotic irregular breaths', 'Ataxic breathing — isolated lesion of the cerebral cortex with intact pons and medulla', 'Cluster breathing — bilateral carotid body resection abolishing the Hering-Breuer reflex', 'Vagal breathing — overstimulation of the upper-pontine pneumotaxic center'], a: 0,
    ex: 'Apneusis is characterized by prolonged inspiratory plateaus with brief expirations. Because the lower-pontine apneustic center excites inspiration while the upper-pontine pneumotaxic center and vagal stretch afferents switch inspiration off, damaging the upper pons (pneumotaxic center) and vagi produces apneusis.' }
]});
