/* Section A: Acid-Base Regulation (681117-2 Acid base regulation Med 2025 student.pdf, 88 slides). */
CVS.add({ id: 'A', short: 'Acid-base', title: 'Acid-Base Regulation', kind: 'Lecture',
  blurb: 'Normal arterial pH, volatile vs fixed acids, the Henderson–Hasselbalch equation, extracellular and intracellular buffers, renal HCO₃⁻ reclamation and new HCO₃⁻ generation, the four primary acid-base disorders with compensation formulas, and the 6-step ABG & anion gap approach.',
  items: [
  { t: 'c', id: 'A-C1', title: 'Arterial pH, acid loads, and the Henderson–Hasselbalch equation', src: 'Acid-base p.4–19',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li>Normal arterial blood pH is {{7.35–7.45}} (mean 7.40, equivalent to [H⁺] = {{40 nEq/L}}); life-compatible pH spans {{6.80–7.80}}.</li>' +
      '<li><b>{{Volatile acid}}</b> (CO₂ from aerobic metabolism, {{13,000}} mmol/day) is eliminated by the lungs; <b>non-volatile ({{fixed}}) acids</b> ({{50–100}} mEq/day from protein/phospholipid catabolism: sulfuric, phosphoric, uric, lactic, and ketoacids) are excreted by the kidneys.</li>' +
      '<li><b>Henderson–Hasselbalch equation</b>: pH = {{6.1}} + log([HCO₃⁻] / ({{0.03}} × PaCO₂)); at [HCO₃⁻] = 24 mmol/L and PaCO₂ = 40 mmHg, the base-to-acid ratio is {{20:1}} (log 20 = 1.3 → pH 7.40).</li>' +
      '<li>Three lines of defense: <b>chemical buffers</b> act within {{seconds}}, <b>respiratory regulation</b> within {{minutes}}, and <b>renal regulation</b> over hours to days.</li></ul></div>' +
      CVS.fig('acid-buffers', 'Extracellular, intracellular, and renal tubular buffer systems with their pKa values.', 'acid', 16) + '</div>' + '<p class="note"><b>From the past papers</b> · Buffers: bicarbonate is the main buffer of extracellular fluid; plasma proteins such as albumin add to it; phosphate plays little role in ECF but matters in cells and urine; proteins such as hemoglobin (38 histidines, the most important buffer after bicarbonate) buffer inside cells (Acid-base p.14, 24; AC79–AC81).</p>' },
  { t: 'q', id: 'A1', src: 'AC79', keep: true,
    q: 'Which one is the most important metabolic acid load in the body?',
    o: ['Lactic acid', 'Sulfuric acid', 'Carbonic acid', 'Acetic acid', 'Phosphoric acid'], a: 2,
    ex: 'Metabolism makes about 13,000 mmol of CO₂ a day, which forms carbonic acid (the volatile acid) and is cleared by the lungs. Fixed (non-volatile) acids are only about 1 mmol/kg/day.' },
  { t: 'q', id: 'A2', src: 'AC80', core: true, keep: true,
    q: 'A 30-year-old man presents with fatigue after running a marathon. His arterial blood gases show a pH of 7.32, a partial pressure of carbon dioxide of 35 mmHg, and a bicarbonate (HCO₃⁻) concentration 20 mEq/L. Which of the following buffers is the most important in preventing a large change in pH in the patient’s blood?',
    o: ['Hemoglobin', 'Albumin', 'Bicarbonate', 'Phosphate', 'Ammonium'], a: 2,
    ex: 'Lactic acid enters the extracellular fluid, where bicarbonate is the main buffer: it is plentiful and its CO₂ end is removed by the lungs (an open system).' },
  { t: 'q', id: 'A3', src: 'AC81', keep: true,
    q: 'What is the most important buffer in an intracellular environment?',
    o: ['Phosphate', 'Hemoglobin', 'Bicarbonate', 'Albumin', 'Ammonia'], a: 0,
    ex: 'The lecture lists phosphate as playing an important role in cells and urine, and proteins (such as hemoglobin) as abundant intracellular buffers.',
    flag: 'Raw student key: A. The lecture names both phosphate (“important role in cells and urine”) and protein (“abundant in cells, e.g. hemoglobin”) as intracellular buffers, so B is arguable.' },
  { t: 'q', id: 'A4', src: 'AC80', keep: true,
    q: 'What is the dominant form of phosphate at pH 7.4?',
    o: ['H₃PO₄', 'H₂PO₄⁻', 'HPO₄²⁻', 'PO₄³⁻', 'Pyrophosphate'], a: 2,
    ex: 'The relevant pKa (H₂PO₄⁻ ⇌ HPO₄²⁻) is 6.8. At pH 7.4, above the pKa, the base form HPO₄²⁻ dominates (about 4:1).' },
  { t: 'q', id: 'A5', src: 'AC79', keep: true,
    q: 'Which of the following properties makes hemoglobin an important acid-base buffer?',
    o: ['It is a form of titratable acid that is easy to secrete.', 'The pKa is similar to blood pH.', 'Hemoglobin has a lot of histidine residues.', 'It is a type of extracellular buffer that is commonly found in the body.', 'Hemoglobin can bind to carbon dioxide.'], a: 2,
    ex: 'Hemoglobin’s many histidine residues have imidazole groups with a pKa near physiological pH, so they take up and release H⁺. It is an intracellular (red cell) buffer.' },
  { t: 'c', id: 'A-C2', title: 'Renal HCO₃⁻ reclamation vs new HCO₃⁻ generation', src: 'Acid-base p.31–44',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li>Filtered HCO₃⁻ load is ~{{4,320}} mEq/day (180 L/day × 24 mEq/L); <b>{{85%}}</b> is reabsorbed in the proximal convoluted segment, {{10%}} in the thick ascending limb, and {{4.9%}} in the distal/collecting segments (&gt;99.9% conserved).</li>' +
      '<li>Proximal reclamation uses apical {{NHE3}} (Na⁺–H⁺ exchanger) and brush-border {{CA IV}} (plus cytosolic CA II); it conserves filtered HCO₃⁻ without net H⁺ excretion.</li>' +
      '<li><b>New HCO₃⁻ generation</b> requires excreting H⁺ with urinary buffers: (1) <b>{{titratable acid}}</b> (mainly HPO₄²⁻ → H₂PO₄⁻, pKa {{6.8}}, 10–40 mEq/day; minimum urine pH {{4.4–4.5}}) and (2) <b>NH₄⁺ excretion</b> from proximal {{glutamine}} metabolism (20–50 mEq/day baseline, inducible up to {{500}} mEq/day in chronic acidosis).</li>' +
      '<li>In the collecting duct, <b>type A intercalated cells</b> secrete H⁺ (via H⁺-ATPase and H⁺/K⁺-ATPase) during acidosis, whereas <b>type B intercalated cells</b> secrete HCO₃⁻ via apical {{pendrin}} during alkalosis.</li></ul></div>' +
      '<div class="stack">' +
      CVS.fig('acid-hco3-reabs', 'Segmental reabsorption of filtered HCO₃⁻ along the nephron and proximal mechanism.', 'acid', 35) +
      CVS.fig('acid-titratable', 'Formation of urinary phosphate buffer and generation of new HCO₃⁻ in α-intercalated cells.', 'acid', 39) +
      CVS.fig('acid-nh4', 'Synthesis of NH₄⁺ in the early nephron, countercurrent trapping in TAL, and collecting duct secretion.', 'acid', 41) +
      '</div></div>' },
  { t: 'q', id: 'A6', src: 'AC79', core: true, keep: true,
    q: 'Which of the following is the correct compensatory response to metabolic acidosis?',
    o: ['Decreased HCO₃⁻ regeneration', 'Decreased alveolar ventilation rate', 'Increased glutamate trapping by liver', 'Decreased renal tubular Na⁺-H⁺ exchange', 'Increased glutamine degradation in renal tubular cell'], a: 4,
    ex: 'In acidosis the proximal tubule breaks down more glutamine into NH₄⁺ (excreted) and new HCO₃⁻ (returned to blood). Ventilation rises, Na⁺–H⁺ exchange increases and HCO₃⁻ generation increases.',
    flag: 'PS81 edit keys E.' },
  { t: 'q', id: 'A7', src: 'AC79', keep: true,
    q: 'Which buffer system plays the least role in excreting acid from the body?',
    o: ['Protein', 'Phosphate', 'Bicarbonate', 'Ammonium', 'Sulfate'], a: 4,
    ex: 'Urinary acid leaves as titratable acid (mainly phosphate) and ammonium. Sulfate is an anion of a fixed acid, not a buffer that carries H⁺ out.' },
  { t: 'c', id: 'A-C3', title: 'The four primary acid-base disorders and expected compensation', src: 'Acid-base p.46–61',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Respiratory acidosis</b> (↑PaCO₂ &gt; {{45 mmHg}}): <b>acute</b> ↑[HCO₃⁻] by {{1}} mmol/L per 10 mmHg ↑PaCO₂; <b>chronic</b> (&gt;3–5 days) ↑[HCO₃⁻] by {{3.5 mmol/L}} (or 3–4) per 10 mmHg ↑PaCO₂.</li>' +
      '<li><b>Respiratory alkalosis</b> (↓PaCO₂ &lt; {{35 mmHg}}): <b>acute</b> ↓[HCO₃⁻] by {{2 mmol/L}} per 10 mmHg ↓PaCO₂; <b>chronic</b> ↓[HCO₃⁻] by {{4–5 mmol/L}} per 10 mmHg ↓PaCO₂.</li>' +
      '<li><b>Metabolic acidosis</b> (↓[HCO₃⁻] &lt; {{22 mmol/L}}): respiratory compensation via {{Kussmaul}} hyperventilation lowers PaCO₂ by {{1.25 mmHg}} per 1 mmol/L ↓[HCO₃⁻] (or 5 mmHg per 4 mmol/L ↓[HCO₃⁻]; <b>{{Winter’s}} formula</b>: PaCO₂ = 1.5×[HCO₃⁻] + 8 ± 2).</li>' +
      '<li><b>Metabolic alkalosis</b> (↑[HCO₃⁻] &gt; {{26 mmol/L}}): hypoventilation raises PaCO₂ by {{0.75 mmHg}} per 1 mmol/L ↑[HCO₃⁻] (or 3 mmHg per 4 mmol/L ↑[HCO₃⁻]).</li></ul>' +
      '<p class="trap">Slide 55, 56 &amp; 60 prose contain direction typos ("increase" instead of "decrease"); always follow the minus sign in the equations and the summary table on slide 61: compensation always moves the secondary variable in the <b>same direction</b> as the primary change.</p></div>' +
      CVS.fig('acid-comp-table', 'Summary table of the four primary acid-base disorders and their compensation ratios.', 'acid', 61) + '</div>' + '<p class="note"><b>From the past papers</b> · Causes: respiratory alkalosis from hyperventilation (fever, high altitude, anxiety, acute aspirin poisoning); metabolic alkalosis from loss of gastric acid (vomiting), alkaline drugs, aldosterone excess or steroids (Acid-base p.53, 58; AC80, AC81).</p>' },
  { t: 'q', id: 'A8', src: 'AC81', core: true, keep: true,
    q: 'A 45-year-old male patient ABG result is as follows, pH = 7.25, HCO₃⁻ 12 mEq/L. The main abnormality is metabolic acidosis. What is the expected respiratory compensation?',
    o: ['Hypoventilation to retain CO₂', 'Hyperventilation to reduce pCO₂', 'No compensation needed', 'Increased renal H⁺ excretion', 'Increase minute ventilation without increasing RR'], a: 1,
    ex: 'Metabolic acidosis is compensated by hyperventilation (Kussmaul breathing), lowering PCO₂ toward 1.5 × 12 + 8 ± 2 = 24–28 mmHg. Renal H⁺ excretion is metabolic, not respiratory, compensation.' },
  { t: 'q', id: 'A9', src: 'AC81', core: true, keep: true,
    q: 'pH 7.28 / HCO₃⁻ 16 / PCO₂ 40. What is the expected PCO₂ and the primary cause?',
    o: ['30–34 / metabolic acidosis', '30–34 / respiratory acidosis', '38–42 / normal acid-base', '46–50 / metabolic acidosis', '46–50 / respiratory acidosis'], a: 0,
    ex: 'Low pH with low HCO₃⁻: primary metabolic acidosis. Winter: 1.5 × 16 + 8 ± 2 = 30–34 mmHg. The actual PCO₂ of 40 is above that, so there is also a respiratory acidosis.' },
  { t: 'q', id: 'A10', src: 'AC80', core: true, keep: true,
    q: 'A patient presents to the emergency room with an asthma attack. The arterial blood gas analysis shows the following: pH 7.30, partial pressure of carbon dioxide 55 mmHg, bicarbonate concentration 25 mEq/L. What is the diagnosis for this patient?',
    o: ['Acute respiratory acidosis', 'Chronic respiratory acidosis', 'Metabolic acidosis', 'Metabolic alkalosis', 'Compensated respiratory acidosis'], a: 0,
    ex: 'Acidemia with high PCO₂ is respiratory acidosis. Acutely HCO₃⁻ rises only 1 per 10 mmHg (expected about 25.5); chronically it would be about 29. HCO₃⁻ 25 fits acute.' },
  { t: 'q', id: 'A11', src: 'AC79', keep: true,
    q: 'A 37-year-old woman has arterial blood gas results as follows: pH 7.3, PaCO₂ = 60 mmHg, [HCO₃⁻] = 26 mEq. What is the most likely condition found in this patient?',
    o: ['Metabolic acidosis with respiratory compensation', 'Chronic respiratory acidosis with metabolic compensation', 'Acute respiratory acidosis with some metabolic compensation', 'Mixed metabolic and respiratory acidosis', 'Mixed metabolic acidosis with respiratory alkalosis'], a: 2,
    ex: 'PCO₂ up 20: acute compensation predicts HCO₃⁻ ≈ 26, chronic ≈ 31. HCO₃⁻ 26 matches the acute rule.' },
  { t: 'q', id: 'A12', src: 'AC81', core: true, keep: true,
    q: 'A patient comes with COPD. What should be the expected ABG result?',
    o: ['pH 7.50, PaCO₂ 28 mmHg, HCO₃⁻ 22 mEq/L', 'pH 7.25, PaCO₂ 60 mmHg, HCO₃⁻ 24 mEq/L', 'pH 7.37, PaCO₂ 55 mmHg, HCO₃⁻ 31 mEq/L', 'pH 7.28, PaCO₂ 30 mmHg, HCO₃⁻ 14 mEq/L', 'pH 7.45, PaCO₂ 40 mmHg, HCO₃⁻ 28 mEq/L'], a: 2,
    ex: 'Stable COPD retains CO₂ chronically, and the kidney has had days to raise HCO₃⁻ (about 3.5 per 10 mmHg: 24 + 5 ≈ 29–31), so pH is near normal. B is acute respiratory acidosis.' },
  { t: 'q', id: 'A13', src: 'AC79', keep: true,
    q: 'Which of the following formulas is the correct one for calculating blood bicarbonate concentration in the condition of chronic respiratory acidosis?',
    o: ['[HCO₃⁻] = [(PCO₂ − 40)/10] + 24', '[HCO₃⁻] = [(PCO₂ − 40)/3] + 24', '[HCO₃⁻] = 24 − [(40 − PCO₂)/5]', '[HCO₃⁻] = 24 − [(40 − PCO₂)/2]', '[HCO₃⁻] = [(PCO₂ − 40)/5] + 24'], a: 1,
    ex: 'Chronic respiratory acidosis raises HCO₃⁻ about 3–4 per 10 mmHg of PCO₂, i.e. (ΔPCO₂)/3. A is acute acidosis (1 per 10); D is acute alkalosis (2 per 10); C is chronic alkalosis (4–5 per 10).' },
  { t: 'q', id: 'A14', src: 'AC80', keep: true,
    q: 'ขึ้นที่สูงเป็นระยะเวลานาน เมื่อตรวจวัดค่าต่างๆในเลือด ข้อใดน่าจะใกล้เคียงที่สุดกับการปรับตัวนี้ <span class="muted">After a long stay at high altitude, which blood values best fit the adaptation?</span>',
    o: ['pH 7.48, pCO₂ 30, HCO₃⁻ 23', 'pH 7.40, pCO₂ 19, HCO₃⁻ 20', 'pH 7.43, pCO₂ 30, HCO₃⁻ 18'], a: 2,
    ex: 'Altitude causes a respiratory alkalosis. After days the kidney excretes HCO₃⁻ (4–5 per 10 mmHg fall in PCO₂), bringing pH back near normal: pH 7.43, PCO₂ 30, HCO₃⁻ 18. Option 1 (HCO₃⁻ down only 1–2) is the acute picture; option 2 is internally inconsistent.',
    flag: 'The AC80 student key marks option 1, which is the <i>acute</i> picture. The stem says “for a long time”, and the lecture’s chronic rule (HCO₃⁻ falls 4–5 per 10 mmHg) gives option 3.' },
  { t: 'q', id: 'A15', src: 'AC80', keep: true,
    q: 'Which of the following conditions is a potential cause of respiratory alkalosis?',
    o: ['Aspirin poisoning', 'Neuromuscular disorder', 'Methanol', 'Vomiting', 'Obstructive pulmonary disease'], a: 0,
    ex: 'Salicylate directly stimulates the respiratory center, causing hyperventilation and respiratory alkalosis (later a metabolic acidosis too). Neuromuscular disease and COPD cause respiratory acidosis; methanol a metabolic acidosis; vomiting a metabolic alkalosis.' },
  { t: 'q', id: 'A16', src: 'AC79', keep: true,
    q: 'A 15-year-old female has been rescued from a suicide attempt via rope hanging. After the rescue, she seems to be breathing normally again after a few minutes. What is the most likely arterial blood gas results right after she is rescued compared to the normal values?',
    o: ['Increased [HCO₃⁻]', 'Decreased [CO₂] of exhaled air', 'Increased PaCO₂', 'Increased PaO₂', 'Normal PaO₂'], a: 2,
    ex: 'Hanging obstructs the airway: she could not breathe, so CO₂ built up (acute respiratory acidosis) and PaO₂ fell. HCO₃⁻ barely changes acutely.' },
  { t: 'q', id: 'A17', src: 'AC81', keep: true,
    q: 'A woman had treatment for hypertension. pH 7.48, pCO₂ 48, HCO₃⁻ 33. What is the cause of the ABG result?',
    o: ['Renal loss of H⁺ from diuretic', 'Diarrhea', 'Decreased ventilation from drug overdose', 'CO₂ retention', 'Lactate accumulation'], a: 0,
    ex: 'Alkalemia with high HCO₃⁻ and compensating PCO₂: metabolic alkalosis. Thiazide and loop diuretics cause it through volume contraction and renal H⁺ (and K⁺) loss.' },
  { t: 'c', id: 'A-C4', title: 'Plasma anion gap: HAGMA vs NAGMA and urine anion gap', src: 'Acid-base p.64–70',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Plasma Anion Gap (AG)</b> = [Na⁺] − ([Cl⁻] + [HCO₃⁻]); normal range in the handout is {{12 ± 4}} mEq/L ({{8–16}} mEq/L, where unmeasured anions exceed unmeasured cations, largely plasma {{albumin}}).</li>' +
      '<li><b>High anion gap metabolic acidosis (HAGMA)</b> (normochloremic; acid HA adds unmeasured A⁻ that replaces HCO₃⁻): <b>{{KUSMALE}}</b> — {{Ketoacidosis}} (DKA, starvation, alcoholic), {{Uremia}}, {{Salicylate}}, {{Methanol}}, Aldehyde/alcohol, {{Lactic acidosis}}, and Ethylene glycol.</li>' +
      '<li><b>Normal anion gap metabolic acidosis (NAGMA)</b> (hyperchloremic; lost HCO₃⁻ is replaced 1:1 by Cl⁻): severe {{diarrhea}}, renal tubular acidosis (RTA), or {{acetazolamide}} (carbonic anhydrase inhibition).</li>' +
      '<li><b>Urine Anion Gap (UAG)</b> = ([Na⁺]ᵤ + [K⁺]ᵤ) − [Cl⁻]ᵤ estimates urinary NH₄⁺: a <b>{{negative}}</b> UAG (&lt; −20 mEq/L) shows intact renal NH₄⁺ excretion (GI HCO₃⁻ loss), whereas a <b>positive</b> UAG (&gt; +20 mEq/L) indicates impaired distal acid excretion (RTA).</li></ul></div>' +
      CVS.fig('acid-ag', 'Electrolyte Gamblegrams comparing Normal, High Anion Gap (normochloremic), and Normal Anion Gap (hyperchloremic) metabolic acidosis.', 'acid', 66) + '</div>' },
  { t: 'q', id: 'A18', src: 'AC81', core: true, keep: true,
    q: 'Why do we need to account for albumin when calculating anion gap?',
    o: ['It is a major buffer protein', 'It has an effect on HCO₃⁻', 'It increases Cl⁻', 'It is a major unmeasured anion', 'It altered measured Na⁺'], a: 3,
    ex: 'The anion gap is made mostly of unmeasured anions, and albumin is the biggest of them. Low albumin lowers the gap and can hide a high-anion-gap acidosis, so the gap is corrected for albumin.',
    flag: 'The raw student key marks A (“major buffer protein”). The lecture lists albumin among the unmeasured anions that make up the gap (Acid-base p.65), which is why it must be accounted for: D.' },
  { t: 'q', id: 'A19', src: 'AC79', keep: true,
    q: 'Which of the following conditions has acid-base indices in the same direction as diabetic ketoacidosis?',
    o: ['Shortness of breath', 'Vomiting', 'Hyperventilation', 'Anti-acid ingestion', 'Diarrhea'], a: 4,
    ex: 'DKA is a metabolic acidosis: pH, HCO₃⁻ and (compensating) PCO₂ all fall. Diarrhea loses HCO₃⁻ and gives the same direction (though with a normal anion gap). Vomiting and antacids cause alkalosis.',
    flag: 'PS81 edit keys E.' },
  { t: 'c', id: 'A-C5', title: 'The 6-step ABG interpretation algorithm and clinical cases', src: 'Acid-base p.71–87',
    html: '<div class="stack"><ul class="pts">' +
      '<li><b>Step 1 — Check internal consistency</b>: [H⁺] ≈ 24 × PaCO₂ / [HCO₃⁻]. <b>Step 2 — Acidemia vs alkalemia</b>: pH &lt; {{7.35}} is acidemia; pH &gt; {{7.45}} is alkalemia.</li>' +
      '<li><b>Step 3 — Identify primary process</b>: if PaCO₂ and pH move in {{opposite}} directions, it is respiratory; if [HCO₃⁻] and pH move in the {{same}} direction, it is metabolic.</li>' +
      '<li><b>Step 4 — Calculate expected compensation</b>: if actual PaCO₂ or [HCO₃⁻] falls outside the expected compensation range, a concurrent disorder is present.</li>' +
      '<li><b>Step 5 — Calculate AG</b> ([Na⁺] − ([Cl⁻] + [HCO₃⁻]), normal {{12 ± 4}} mEq/L). <b>Step 6 — If AG is elevated, check {{delta}} ratio (ΔAG / Δ[HCO₃⁻])</b>: compare (AG − 12) against (24 − [HCO₃⁻]) to detect a hidden concurrent alkalemic process (if [HCO₃⁻] is higher than expected) or concurrent NAGMA (if [HCO₃⁻] is lower than expected).</li></ul>' +
      '<div class="tblwrap"><table class="tbl"><thead><tr><th>Handout case (p.78–87)</th><th>ABG &amp; electrolytes</th><th>Complete diagnosis</th></tr></thead><tbody>' +
      '<tr><td>Case 1 (p.78) · Vomiting 1 wk</td><td>pH 7.50, PaCO₂ 48, HCO₃⁻ 37, Na⁺ 135, Cl⁻ 86 (AG 12)</td><td>{{Metabolic alkalosis}} with respiratory compensation (expected PaCO₂ ≈ 49.75 mmHg)</td></tr>' +
      '<tr><td>Case 2 (p.80) · Pneumonia &amp; sepsis</td><td>pH 7.12, PaCO₂ 40, HCO₃⁻ 12, Na⁺ 140, Cl⁻ 103 (AG {{25 mEq/L}})</td><td>HAGMA + {{respiratory acidosis}} (expected PaCO₂ ≈ 25 mmHg, actual is 40)</td></tr>' +
      '<tr><td>Case 3 (p.82) · Chronic renal disease + vomiting</td><td>pH 7.40, PaCO₂ 40, HCO₃⁻ 24, Na⁺ 145, Cl⁻ 100 (AG {{21 mEq/L}})</td><td>{{Mixed}} HAGMA + vomiting-induced alkalosis (normal pH/HCO₃⁻ hides elevated AG)</td></tr>' +
      '<tr><td>Case 4 (p.84) · Acute bronchitis on COPD</td><td>pH 7.26, PaCO₂ 70, HCO₃⁻ 31, Na⁺ 137, Cl⁻ 95 (AG 11)</td><td>{{Acute-on-chronic}} hypercapnic acidosis (HCO₃⁻ 31 lies between acute 27 and chronic 34.5)</td></tr>' +
      '<tr><td>Case 5 (p.86) · Diarrhea 5 d</td><td>pH 7.25, PaCO₂ 28, HCO₃⁻ 12, Na⁺ 140, Cl⁻ 116 (AG 12)</td><td>{{Hyperchloremic}} (normal AG) metabolic acidosis with respiratory compensation</td></tr></tbody></table></div></div>' },
  { t: 'q', id: 'A20', src: 'AC81', core: true, keep: true,
    q: 'A patient comes with Diabetes type 1. ABG: pH 7.18, pCO₂ 18, HCO₃⁻ 8. Serum: Na⁺ 140, Cl⁻ 102, HCO₃⁻ 8. What is his condition?',
    o: ['Pure respiratory acidosis', 'Pure high anion gap metabolic acidosis', 'Mixed high anion gap metabolic acidosis with metabolic alkalosis', 'Mixed high anion gap metabolic acidosis with normal anion gap metabolic acidosis', 'Normal acid-base condition'], a: 1,
    ex: 'Low pH, low HCO₃⁻: metabolic acidosis. Winter: 1.5 × 8 + 8 = 20 ± 2, and PCO₂ 18 is in range. AG = 140 − 102 − 8 = 30 (high). Δ-ratio = (30 − 12)/(24 − 8) = 18/16 ≈ 1.1: pure HAGMA (DKA).' },
  { t: 'q', id: 'A21', src: 'AC80 · AC81', core: true, keep: true,
    q: 'A 25-year-old woman with a history of vomiting for the past 3 days presents with the following arterial blood gas (ABG) results: pH 7.52, partial pressure of carbon dioxide 48 mmHg, bicarbonate concentration 38 mEq/L. Which of the following best describes her acid-base status?',
    o: ['Acute metabolic acidosis', 'Chronic respiratory alkalosis with compensation', 'Metabolic alkalosis with respiratory compensation', 'Acute respiratory acidosis', 'Mixed metabolic and respiratory alkalosis'], a: 2,
    ex: 'Alkalemia with high HCO₃⁻: metabolic alkalosis (loss of gastric HCl). Expected PCO₂ = 40 + 0.7 × (38 − 24) ≈ 50 ± 2; 48 fits, so the raised PCO₂ is appropriate compensation.',
    flag: 'AC81 asked the same case (pH 7.52, PCO₂ 48, HCO₃⁻ 37) with simpler options.' },
  { t: 'q', id: 'A22', src: 'AC80', keep: true,
    q: 'A 30-year-old woman presents with the following arterial blood gas results: pH 7.22, partial pressure of carbon dioxide 28 mmHg, bicarbonate concentration 13 mEq/L. Which of the following best describes her acid-base status?',
    o: ['Respiratory acidosis with metabolic compensation', 'Respiratory acidosis with no compensation', 'Metabolic alkalosis with respiratory acidosis', 'Metabolic acidosis with respiratory acidosis', 'Metabolic acidosis with respiratory alkalosis'], a: 4,
    ex: 'Metabolic acidosis. Winter: 1.5 × 13 + 8 = 27.5 ± 2 (25.5–29.5); PCO₂ 28 is appropriate compensation. Of the options, E is closest: here “respiratory alkalosis” means the compensatory fall in PCO₂, not a second disorder.',
    flag: 'AC80 key: E. Strictly this is metabolic acidosis with appropriate respiratory compensation; a true added respiratory alkalosis would need PCO₂ below 25.5.' },
  { t: 'q', id: 'A23', src: 'AC79', keep: true,
    q: 'Which of these cases would have metabolic acidosis with the delta ratio lower than 0.4?',
    o: ['Deep vomiting through GI tract', 'Organic acidemia with vomiting', 'High dose salicylic acid poisoning', 'Lactic acidosis with diarrhea', 'NH₄Cl ingestion'], a: 4,
    ex: 'A delta ratio below 0.4 means the fall in HCO₃⁻ is not matched by a rise in the gap: a pure normal-anion-gap (hyperchloremic) acidosis. Ingested NH₄Cl adds HCl.' }
]});
