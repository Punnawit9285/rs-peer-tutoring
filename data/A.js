/* Section A: Acid-Base Regulation (681117-2 Acid base regulation Med 2025 student.pdf, 88 slides). */
CVS.add({ id: 'A', short: 'Acid-base', title: 'Acid-Base Regulation', kind: 'Lecture',
  blurb: 'Normal arterial pH, volatile vs fixed acids, the Henderson–Hasselbalch equation, extracellular and intracellular buffers, renal HCO₃⁻ reclamation and new HCO₃⁻ generation, the four primary acid-base disorders with compensation formulas, and the 6-step ABG & anion gap approach.',
  items: [
  { t: 'c', id: 'A-C1', title: 'Arterial pH, acid loads, and the Henderson–Hasselbalch equation', src: 'Acid-base p.4–19',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li>Normal arterial blood pH is {{7.35–7.45}} (mean 7.40, equivalent to [H⁺] = {{40 nEq/L}}); life-compatible pH spans {{6.80–7.80}}.</li>' +
      '<li><b>{{Volatile acid}}</b> (CO₂ from aerobic metabolism, {{15,000–20,000}} mmol/day) is eliminated by the lungs; <b>non-volatile ({{fixed}}) acids</b> ({{50–100}} mEq/day from protein/phospholipid catabolism: sulfuric, phosphoric, uric, lactic, and ketoacids) are excreted by the kidneys.</li>' +
      '<li><b>Henderson–Hasselbalch equation</b>: pH = {{6.1}} + log([HCO₃⁻] / ({{0.03}} × PaCO₂)); at [HCO₃⁻] = 24 mmol/L and PaCO₂ = 40 mmHg, the base-to-acid ratio is {{20:1}} (log 20 = 1.3 → pH 7.40).</li>' +
      '<li>Three lines of defense: <b>chemical buffers</b> act within {{seconds}}, <b>respiratory regulation</b> within {{minutes}}, and <b>renal regulation</b> over hours to days.</li></ul></div>' +
      CVS.fig('acid-buffers', 'Extracellular, intracellular, and renal tubular buffer systems with their pKa values.', 'acid', 16) + '</div>' },
  { t: 'q', id: 'A1', src: 'Acid-base p.11–13', core: true,
    q: 'In the Henderson–Hasselbalch equation for the bicarbonate buffer system at normal arterial blood values ([HCO₃⁻] = 24 mmol/L, PaCO₂ = 40 mmHg), what is the ratio of <b>[HCO₃⁻] to dissolved CO₂ (0.03 × PaCO₂)</b>?',
    o: ['20 : 1', '10 : 1', '1 : 20', '24 : 40', '40 : 1'], a: 0,
    ex: 'Dissolved CO₂ = 0.03 × 40 = 1.2 mmol/L. Therefore [HCO₃⁻] / (0.03 × PaCO₂) = 24 / 1.2 = 20 : 1, and log(20) = 1.30, giving pH = 6.1 + 1.30 = 7.40.' },
  { t: 'q', id: 'A2', src: 'Acid-base p.16–19',
    q: 'Why is the <b>HCO₃⁻ / CO₂ buffer system</b> the most important physiological buffer in extracellular fluid despite having a pKa of 6.1 (far from 7.4)?',
    o: ['It is abundant in ECF and works as an open system whose components are independently regulated by the lungs (PaCO₂) and kidneys ([HCO₃⁻])', 'Its pKa of 6.1 is closer to normal blood pH than the pKa of inorganic phosphate (6.8)', 'Bicarbonate cannot cross out of red blood cells into plasma', 'It buffers only fixed acids and never interacts with other buffer pairs', 'Carbonic anhydrase is absent in both red blood cells and renal tubular epithelium'], a: 0,
    ex: 'Although a pKa of 6.1 gives lower intrinsic chemical buffering power at pH 7.4 than phosphate (pKa 6.8), HCO₃⁻/CO₂ is the premier ECF buffer because it is present in high concentration (24 mmol/L) and is an open regulated system (lungs control CO₂, kidneys control HCO₃⁻).' },
  { t: 'tf', id: 'A3', src: 'Acid-base p.8, 19',
    q: 'Daily metabolic production of volatile acid (CO₂, ~15,000–20,000 mmol/day) is far greater than daily production of fixed non-volatile acids (~50–100 mEq/day).', a: true,
    ex: 'True. Tissue metabolism generates 15,000–20,000 mmol/day of CO₂ (eliminated by ventilation) compared with 50–100 mEq/day of fixed acid (handled by renal excretion).' },

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
  { t: 'q', id: 'A4', src: 'Acid-base p.34–42', core: true,
    q: 'During severe <b>chronic metabolic acidosis</b>, which renal mechanism provides the <b>greatest quantitative increase</b> in net acid excretion and new HCO₃⁻ generation?',
    o: ['Increased glutamine metabolism and urinary NH₄⁺ excretion (up to ~500 mEq/day)', 'Unrestricted reduction of urine pH below 2.0', 'Doubling proximal tubular HCO₃⁻ reclamation without excreting urinary buffers', 'Increased HCO₃⁻ secretion by type B intercalated cells via pendrin', 'Washout of filtered phosphate to 500 mEq/day'], a: 0,
    ex: 'Titratable acid is limited by filtered phosphate supply (10–40 mEq/day), and urine pH cannot fall below 4.4–4.5. In chronic acidosis, renal glutamine metabolism and NH₄⁺ excretion can increase from 20–50 mEq/day up to ~500 mEq/day.' },
  { t: 'q', id: 'A5', src: 'Acid-base p.35–37',
    q: 'Reabsorption of 85% of filtered HCO₃⁻ in the <b>proximal convoluted tubule</b> depends directly on apical H⁺ secretion via:',
    o: ['Na⁺–H⁺ exchanger (NHE3) coupled to brush-border carbonic anhydrase IV', 'Apical pendrin Cl⁻/HCO₃⁻ exchanger', 'Basolateral H⁺/K⁺-ATPase', 'NKCC2 cotransporter in the macula densa', 'ENaC channels in principal cells'], a: 0,
    ex: 'In the proximal tubule, H⁺ is secreted into the lumen primarily by NHE3 (with a smaller H⁺-ATPase contribution), combines with filtered HCO₃⁻ via brush-border CA IV to form CO₂ + H₂O, and returns to blood as HCO₃⁻ via basolateral NBCe1.' },
  { t: 'tf', id: 'A6', src: 'Acid-base p.35, 39',
    q: 'Reabsorption of filtered HCO₃⁻ in the proximal tubule results in net excretion of fixed H⁺ in the urine and adds newly synthesized HCO₃⁻ to the body.', a: false,
    ex: 'False. Proximal HCO₃⁻ reabsorption merely reclaims filtered HCO₃⁻ (1 H⁺ secreted neutralizes 1 filtered HCO₃⁻). Net H⁺ excretion and new HCO₃⁻ generation occur only when secreted H⁺ is excreted in urine as titratable acid (H₂PO₄⁻) or NH₄⁺.' },

  { t: 'c', id: 'A-C3', title: 'The four primary acid-base disorders and expected compensation', src: 'Acid-base p.46–61',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Respiratory acidosis</b> (↑PaCO₂ &gt; {{45 mmHg}}): <b>acute</b> ↑[HCO₃⁻] by {{1}} mmol/L per 10 mmHg ↑PaCO₂; <b>chronic</b> (&gt;3–5 days) ↑[HCO₃⁻] by {{3.5 mmol/L}} (or 3–4) per 10 mmHg ↑PaCO₂.</li>' +
      '<li><b>Respiratory alkalosis</b> (↓PaCO₂ &lt; {{35 mmHg}}): <b>acute</b> ↓[HCO₃⁻] by {{2 mmol/L}} per 10 mmHg ↓PaCO₂; <b>chronic</b> ↓[HCO₃⁻] by {{4–5 mmol/L}} per 10 mmHg ↓PaCO₂.</li>' +
      '<li><b>Metabolic acidosis</b> (↓[HCO₃⁻] &lt; {{22 mmol/L}}): respiratory compensation via {{Kussmaul}} hyperventilation lowers PaCO₂ by {{1.25 mmHg}} per 1 mmol/L ↓[HCO₃⁻] (or 5 mmHg per 4 mmol/L ↓[HCO₃⁻]; <b>{{Winter’s}} formula</b>: PaCO₂ = 1.5×[HCO₃⁻] + 8 ± 2).</li>' +
      '<li><b>Metabolic alkalosis</b> (↑[HCO₃⁻] &gt; {{26 mmol/L}}): hypoventilation raises PaCO₂ by {{0.75 mmHg}} per 1 mmol/L ↑[HCO₃⁻] (or 3 mmHg per 4 mmol/L ↑[HCO₃⁻]).</li></ul>' +
      '<p class="trap">Slide 55, 56 &amp; 60 prose contain direction typos ("increase" instead of "decrease"); always follow the minus sign in the equations and the summary table on slide 61: compensation always moves the secondary variable in the <b>same direction</b> as the primary change.</p></div>' +
      CVS.fig('acid-comp-table', 'Summary table of the four primary acid-base disorders and their compensation ratios.', 'acid', 61) + '</div>' },
  { t: 'q', id: 'A7', src: 'Acid-base p.51–53, 61', core: true,
    q: 'A patient with severe COPD has a chronic PaCO₂ of <b>70 mmHg</b> (30 mmHg above normal). Assuming pure <b>chronic respiratory acidosis</b>, what is the expected plasma [HCO₃⁻]?',
    o: ['~34.5 mmol/L (24 + 3.5 × 3)', '~27.0 mmol/L (24 + 1 × 3)', '~18.0 mmol/L (24 − 2 × 3)', '~9.0 mmol/L (24 − 5 × 3)', '~24.0 mmol/L (unchanged)'], a: 0,
    ex: 'In chronic respiratory acidosis, [HCO₃⁻] rises by 3.5 mmol/L (3–4 mmol/L) for every 10 mmHg rise in PaCO₂: 24 + 3.5 × ((70 − 40)/10) = 24 + 10.5 = 34.5 mmol/L. In acute respiratory acidosis it would rise by only 1 × 3 = 3 mmol/L to 27 mmol/L.' },
  { t: 'q', id: 'A8', src: 'Acid-base p.60–61', core: true,
    q: 'A patient with diabetic ketoacidosis has a plasma [HCO₃⁻] of <b>12 mmol/L</b> (a decrease of 12 mmol/L from 24 mmol/L). What is the expected compensated <b>PaCO₂</b>?',
    o: ['~25–26 mmHg', '~40 mmHg', '~49 mmHg', '~12 mmHg', '~55 mmHg'], a: 0,
    ex: 'Using the lecture ratio (↓PaCO₂ = 1.25 × Δ[HCO₃⁻] = 1.25 × 12 = 15 mmHg → 40 − 15 = 25 mmHg) or Winter’s formula (PaCO₂ = 1.5 × 12 + 8 ± 2 = 26 ± 2 mmHg), expected PaCO₂ is ~25–26 mmHg.' },
  { t: 'tf', id: 'A9', src: 'Acid-base p.47, 61',
    q: 'In uncomplicated acid-base disorders, physiologic compensation normally overcorrects arterial pH past 7.40 in the opposite direction.', a: false,
    ex: 'False. Compensation brings pH back toward normal (7.35–7.45) but does not overcorrect it.' },

  { t: 'c', id: 'A-C4', title: 'Plasma anion gap: HAGMA vs NAGMA and urine anion gap', src: 'Acid-base p.64–70',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Plasma Anion Gap (AG)</b> = [Na⁺] − ([Cl⁻] + [HCO₃⁻]); normal range in the handout is {{12 ± 4}} mEq/L ({{8–16}} mEq/L, where unmeasured anions exceed unmeasured cations, largely plasma {{albumin}}).</li>' +
      '<li><b>High anion gap metabolic acidosis (HAGMA)</b> (normochloremic; acid HA adds unmeasured A⁻ that replaces HCO₃⁻): <b>{{KUSMALE}}</b> — {{Ketoacidosis}} (DKA, starvation, alcoholic), {{Uremia}}, {{Salicylate}}, {{Methanol}}, Aldehyde/alcohol, {{Lactic acidosis}}, and Ethylene glycol.</li>' +
      '<li><b>Normal anion gap metabolic acidosis (NAGMA)</b> (hyperchloremic; lost HCO₃⁻ is replaced 1:1 by Cl⁻): severe {{diarrhea}}, renal tubular acidosis (RTA), or {{acetazolamide}} (carbonic anhydrase inhibition).</li>' +
      '<li><b>Urine Anion Gap (UAG)</b> = ([Na⁺]ᵤ + [K⁺]ᵤ) − [Cl⁻]ᵤ estimates urinary NH₄⁺: a <b>{{negative}}</b> UAG (&lt; −20 mEq/L) shows intact renal NH₄⁺ excretion (GI HCO₃⁻ loss), whereas a <b>positive</b> UAG (&gt; +20 mEq/L) indicates impaired distal acid excretion (RTA).</li></ul></div>' +
      CVS.fig('acid-ag', 'Electrolyte Gamblegrams comparing Normal, High Anion Gap (normochloremic), and Normal Anion Gap (hyperchloremic) metabolic acidosis.', 'acid', 66) + '</div>' },
  { t: 'q', id: 'A10', src: 'Acid-base p.66–68', core: true,
    q: 'Which condition causes a <b>normal anion gap (hyperchloremic) metabolic acidosis</b> rather than a high anion gap metabolic acidosis?',
    o: ['Severe secretory diarrhea or renal tubular acidosis (RTA)', 'Diabetic ketoacidosis (DKA)', 'Lactic acidosis from circulatory shock', 'Methanol or ethylene glycol poisoning', 'Advanced uremia (renal failure)'], a: 0,
    ex: 'Diarrhea and RTA lose HCO₃⁻ directly and replace it with Cl⁻ (hyperchloremic normal anion gap metabolic acidosis). DKA, lactic acidosis, methanol/ethylene glycol poisoning, salicylate toxicity, and uremia accumulate unmeasured organic/inorganic anions (HAGMA, KUSMALE).' },
  { t: 'q', id: 'A11', src: 'Acid-base p.69',
    q: 'A patient has a normal anion gap metabolic acidosis. Urine electrolytes show [Na⁺]ᵤ = 30, [K⁺]ᵤ = 20, and [Cl⁻]ᵤ = 85 mEq/L (<b>UAG = −35 mEq/L</b>). What is the most likely cause?',
    o: ['Gastrointestinal HCO₃⁻ loss from diarrhea (with intact renal NH₄⁺ excretion)', 'Distal renal tubular acidosis (type 1 RTA)', 'Hypoaldosteronism (type 4 RTA)', 'Diabetic ketoacidosis', 'Lactic acidosis'], a: 0,
    ex: 'A strongly negative UAG means urinary Cl⁻ far exceeds (Na⁺ + K⁺) because abundant unmeasured NH₄⁺ is being excreted with Cl⁻—proving the kidneys are responding appropriately to extrarenal HCO₃⁻ loss (diarrhea).' },

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
  { t: 'q', id: 'A12', src: 'Acid-base p.80–81', core: true,
    q: 'A septic patient with pneumonia has: <b>pH 7.12, PaCO₂ 40 mmHg, [HCO₃⁻] 12 mmol/L, Na⁺ 140 mmol/L, Cl⁻ 103 mmol/L</b>. What is the complete acid-base diagnosis?',
    o: ['Mixed high anion gap metabolic acidosis and respiratory acidosis', 'Simple high anion gap metabolic acidosis with full respiratory compensation', 'Simple normal anion gap metabolic acidosis (PaCO₂ is normal at 40 mmHg)', 'Mixed metabolic alkalosis and respiratory alkalosis', 'Acute respiratory acidosis with renal compensation'], a: 0,
    ex: 'pH 7.12 and [HCO₃⁻] 12 mmol/L show metabolic acidosis with AG = 140 − (103 + 12) = 25 mEq/L (HAGMA). Expected compensated PaCO₂ is ~25 mmHg (40 − 1.25 × 12). Because actual PaCO₂ is 40 mmHg (too high for [HCO₃⁻] = 12), the patient also has superimposed respiratory acidosis from ventilatory failure.' },
  { t: 'q', id: 'A13', src: 'Acid-base p.82–83', core: true,
    q: 'A patient with chronic kidney disease and 4 days of vomiting has: <b>pH 7.40, PaCO₂ 40 mmHg, [HCO₃⁻] 24 mmol/L, Na⁺ 145 mmol/L, Cl⁻ 100 mmol/L</b>. Why is this ABG abnormal despite a normal pH, PaCO₂, and [HCO₃⁻]?',
    o: ['The anion gap is 21 mEq/L (ΔAG = +9), revealing a mixed high anion gap metabolic acidosis and metabolic alkalosis', 'The patient has pure chronic respiratory alkalosis', 'The anion gap is 5 mEq/L, indicating severe hypoalbuminemia only', 'Normal pH, PaCO₂, and [HCO₃⁻] rule out all acid-base disorders', 'The patient has pure hyperchloremic normal anion gap metabolic acidosis'], a: 0,
    ex: 'Always calculate the anion gap even when pH, PaCO₂, and [HCO₃⁻] look normal! Here AG = 145 − (100 + 24) = 21 mEq/L (elevated by 9 mEq/L above 12). Without a concurrent disorder, [HCO₃⁻] should have fallen to ~15 mmol/L; the fact that [HCO₃⁻] is 24 mmol/L proves a concurrent metabolic alkalosis from vomiting.' },
  { t: 'q', id: 'A14', src: 'Acid-base p.84–85',
    q: 'A COPD patient admitted with acute bronchitis has <b>pH 7.26, PaCO₂ 70 mmHg, [HCO₃⁻] 31 mmol/L, Na⁺ 137, Cl⁻ 95 (AG 11)</b>. Why is this classified as <b>acute-on-chronic respiratory acidosis</b>?',
    o: ['For PaCO₂ = 70 mmHg, [HCO₃⁻] = 31 mmol/L lies between the acute expected value (27 mmol/L) and the chronic expected value (34.5 mmol/L)', 'The anion gap of 11 mEq/L proves concurrent lactic acidosis', 'pH is above 7.40 due to renal overcompensation', '[HCO₃⁻] is lower than 24 mmol/L', 'PaCO₂ decreases during acute bronchitis'], a: 0,
    ex: 'For a 30 mmHg rise in PaCO₂ (from 40 to 70), pure acute respiratory acidosis raises [HCO₃⁻] to 24 + 3 = 27 mmol/L, while pure chronic respiratory acidosis raises [HCO₃⁻] to 24 + 10.5 = 34.5 mmol/L. An intermediate [HCO₃⁻] of 31 mmol/L with acidemia (pH 7.26) indicates acute CO₂ retention superimposed on chronic CO₂ retention.' }
]});
