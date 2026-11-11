/* Section P: Pulmonary Function Tests & Spirometry Interpretation (681117-1 PFT handout, 15 pp.). */
CVS.add({ id: 'P', short: 'PFTs', title: 'Pulmonary Function Tests & Spirometry Interpretation', kind: 'Lecture',
  blurb: 'What spirometry measures, how a good test is done, how to read a report in five steps (with the lecture’s six worked cases), and flow-volume loops.',
  items: [
  { t: 'c', id: 'P-C1', title: 'Standard lung volumes, capacities, and what spirometry measures', src: 'PFT p.2–4',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Parameter</th><th>Definition &amp; formula</th><th>Typical range</th></tr></thead><tbody>' +
      '<tr><td><b>Tidal volume (TV)</b></td><td>Air entering and leaving the lungs with each normal breath</td><td class="num">0.4–0.5 L</td></tr>' +
      '<tr><td><b>Inspiratory reserve volume (IRV)</b></td><td>Extra air inspired above TV during maximal inspiration</td><td class="num">1.9–2.5 L</td></tr>' +
      '<tr><td><b>Expiratory reserve volume (ERV)</b></td><td>Extra air expired below TV during maximal expiration</td><td class="num">1.1–1.5 L</td></tr>' +
      '<tr><td><b>Residual volume (RV)</b></td><td>Gas remaining in the lungs after a maximal expiration ({{cannot be measured by spirometry}})</td><td class="num">1.5–1.9 L</td></tr>' +
      '<tr><td><b>Inspiratory capacity (IC)</b></td><td>Maximal volume inspired from resting end-expiration = {{TV + IRV}}</td><td class="num">2.3–3.0 L</td></tr>' +
      '<tr><td><b>Functional residual capacity (FRC)</b></td><td>Gas remaining after a normal tidal expiration = {{ERV + RV}} (requires plethysmography)</td><td class="num">2.6–3.4 L</td></tr>' +
      '<tr><td><b>Vital capacity (VC / FVC)</b></td><td>Maximal volume expired after maximal inspiration = {{IRV + TV + ERV}} (or IC + ERV)</td><td class="num">3.4–4.5 L</td></tr>' +
      '<tr><td><b>Total lung capacity (TLC)</b></td><td>Volume in the lungs after maximal inspiration = {{VC + RV}} (or IC + FRC)</td><td class="num">4.9–6.4 L</td></tr></tbody></table></div>' +
      '<ul class="pts"><li>A <b>lung capacity</b> is always the sum of {{two or more physiologic volumes}}.</li>' +
      '<li>Because a spirometer only measures air moving past the lips, it cannot determine <b>RV, FRC, or TLC</b>; measuring those requires {{body plethysmography}}, helium dilution, or nitrogen washout.</li>' +
      '<li>Dynamic forced parameters: <b>FEV<sub>1</sub></b> (volume expelled in the first second), <b>FEV<sub>1</sub>/FVC</b>, <b>PEF</b> (peak expiratory flow), and <b>{{FEF25–75%}}</b> (mean flow over the middle half of FVC, sensitive to {{small airways &lt; 2 mm}}).</li></ul></div>' +
      CVS.fig('pft-volumes', 'Workings of a simple water-bell spirometer and standard lung volumes and capacities on a spirogram.', 'pft', 4) + '</div>' },
  { t: 'q', id: 'P1', src: 'PFT p.4', core: true,
    q: 'Which set of lung volumes and capacities CANNOT be measured by simple spirometry?',
    o: ['Residual volume (RV), functional residual capacity (FRC), and total lung capacity (TLC)', 'Inspiratory reserve volume (IRV), inspiratory capacity (IC), and vital capacity (VC)', 'Expiratory reserve volume (ERV), tidal volume (TV), and forced vital capacity (FVC)', 'Inspiratory capacity (IC), functional residual capacity (FRC), and vital capacity (VC)', 'Tidal volume (TV), residual volume (RV), and expiratory reserve volume (ERV)'], a: 0,
    ex: 'Simple spirometry only tracks air entering and leaving the mouth. Because the lungs cannot be completely emptied below RV, neither RV nor any capacity containing RV (FRC = ERV + RV and TLC = VC + RV) can be measured by simple spirometry; they require body plethysmography or gas dilution.' },
  { t: 'q', id: 'P2', src: 'PFT p.3–4',
    q: 'A healthy adult has TV = 0.5 L, IRV = 2.5 L, ERV = 1.2 L, and RV = 1.6 L. What are the inspiratory capacity (IC), functional residual capacity (FRC), and vital capacity (VC)?',
    o: ['IC = 3.0 L, FRC = 2.8 L, VC = 4.2 L', 'IC = 2.5 L, FRC = 2.8 L, VC = 5.8 L', 'IC = 3.0 L, FRC = 1.7 L, VC = 4.2 L', 'IC = 3.7 L, FRC = 2.8 L, VC = 5.8 L', 'IC = 3.0 L, FRC = 4.1 L, VC = 3.7 L'], a: 0,
    ex: 'IC = TV + IRV = 0.5 + 2.5 = 3.0 L; FRC = ERV + RV = 1.2 + 1.6 = 2.8 L; VC = IRV + TV + ERV = 2.5 + 0.5 + 1.2 = 4.2 L (and TLC = VC + RV = 5.8 L).' },
  { t: 'c', id: 'P-C2', title: 'Before the test: who should not blow, what to stop, what to avoid', src: 'PFT p.5–6',
    html: '<div class="two"><div class="stack">' +
      '<div class="mini"><h4>Why some patients should not blow yet</h4><p>A maximal forced blow sharply raises the pressure inside the chest, the skull and the eyes. So spirometry waits after an {{acute myocardial infarction within 1 month}}, with an untreated {{pneumothorax}} or pulmonary embolism, with a {{cerebral aneurysm}}, within {{4 weeks}} of brain or chest surgery, within 4–8 weeks of eye surgery, in pregnancy beyond {{28 weeks}}, and while an infection such as untreated TB may be active.</p></div>' +
      '<div class="mini"><h4>The hour before</h4><ul><li>No smoking or vaping and no hard exercise for {{1 hour}}; no intoxicants for 8 hours; no clothes that squeeze the chest.</li>' +
      '<li>For a <b>diagnostic</b> test, stop the bronchodilators first (table): short-acting β₂-agonist {{4–6 h}}, short-acting antimuscarinic 12 h, long-acting β₂-agonist 24 h, long-acting antimuscarinic {{36–48 h}}, theophylline 12 h (slow-release 24 h).</li>' +
      '<li>{{Inhaled steroids}} and anti-leukotrienes do not need to be stopped.</li></ul></div>' +
      '<p class="note">Every number on the report is compared with a <b>predicted</b> value for someone of the same {{age, sex, height and ethnicity}} (GLI 2012). Weight is written on the report but does not set the predicted value.</p></div>' +
      CVS.fig('pft-withhold', 'Bronchodilator withholding times before diagnostic spirometry.', 'pft', 6) + '</div>' },
  { t: 'q', id: 'P3', src: 'PFT p.6',
    q: 'Which patient characteristic does NOT determine the predicted spirometry reference values (GLI2012)?',
    o: ['Body weight', 'Standing height', 'Biological sex', 'Age', 'Ethnicity'], a: 0,
    ex: 'Predicted reference values in GLI2012 are determined by age, sex, standing height, and ethnicity. Body weight is measured during preparation but is not part of the reference equations for normal lung volumes.' },
  { t: 'tf', id: 'P4', src: 'PFT p.6',
    q: 'Acute myocardial infarction 2 weeks ago, thoracic surgery 3 weeks ago, or cataract surgery 3 weeks ago are relative contraindications to performing spirometry.', a: true,
    ex: 'True. Acute MI within 1 month, cerebral or thoracic surgery within 4 weeks, and eye surgery within 4–8 weeks are all listed as relative contraindications because forced expiration abruptly increases intrathoracic, intracranial, and intraocular pressures.' },
  { t: 'c', id: 'P-C3', title: 'One good blow, three times over: acceptability, repeatability and the best values', src: 'PFT p.7–9, 14',
    html: '<div class="two"><div class="stack"><ol class="steps"><li><b>Fill up</b>: breathe in fast to {{total lung capacity}}, within 2 s. A slow 4–6 s pause at the top lowers PEF and FEV₁.</li>' +
      '<li><b>Blast</b>: blow out as hard and as fast as possible, sitting upright (no leaning forward).</li>' +
      '<li><b>Keep going</b>: keep blowing until nothing more comes out, then breathe in fully again.</li></ol>' +
      '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Is this blow acceptable?</th><th>Rule</th></tr></thead><tbody>' +
      '<tr><td>Good start</td><td>No hesitation: back-extrapolated volume ≤ {{5% of FVC or 0.100 L}}</td></tr>' +
      '<tr><td>Good end</td><td>One of: a plateau (≤ 0.025 L in the last second), expiratory time ≥ {{15 s}}, or an FVC as big as the best earlier blow</td></tr>' +
      '<tr><td>No artifacts</td><td>No {{cough in the first second}}, glottic closure, leak or blocked mouthpiece</td></tr>' +
      '<tr><td>Full first breath</td><td>The breath in after the blow (FIVC) may exceed FVC by no more than 0.100 L or 5%</td></tr></tbody></table></div></div>' +
      '<div class="stack"><div class="mini art"><h4>How many blows</h4><p>At least {{3}} acceptable blows, at most {{8}}. The set is <b>repeatable</b> when the two biggest FVC values agree within {{0.150 L}}, and so do the two biggest FEV₁ values.</p></div>' +
      '<div class="mini ven"><h4>Which numbers go on the report</h4><p>The {{largest FEV₁}} and the {{largest FVC}} of the acceptable blows, even when they come from {{different blows}}. Never the average.</p></div>' +
      CVS.fig('pft-accept', 'Blows that fail acceptability: variable effort, early end, cough, glottic closure, tongue in the mouthpiece, leak.', 'pft', 8) + '</div></div>' },
  { t: 'q', id: 'P5', src: 'PFT p.7–9', core: true,
    q: 'According to the 2019 ATS/ERS spirometry guidelines, which statement regarding acceptability and adult repeatability criteria is correct?',
    o: ['Back-extrapolated volume (BEV) must be <= 5% of FVC or 0.100 L (whichever is greater), end-expiratory plateau <= 0.025 L in the last 1 s (or expiratory time >= 15 s), and the two largest FVC and FEV1 values within <= 0.150 L', 'Maximal inspiration to TLC should be held for 4–6 s at TLC to maximize PEF and FEV1, with 10–12 trials performed routinely', 'BEV must be <= 10% of FVC or 0.250 L, and the two largest FVC values must be within <= 0.300 L', 'A cough during the first second of expiration is acceptable for FEV1 as long as expiratory time exceeds 6 s', 'If FIVC after the maneuver exceeds FVC by 0.400 L, the trial is acceptable because inspiration after EOFE is normally larger'], a: 0,
    ex: 'ATS/ERS 2019 requires rapid inspiration to TLC in <= 2 s (holding 4–6 s lowers PEF and FEV1), BEV <= 5% of FVC or 0.100 L (whichever is greater), 1 of 3 EOFE indicators (plateau <= 0.025 L in the last 1 s, expiratory time >= 15 s, or repeatable FVC), no artifacts, FIVC - FVC <= 0.100 L or 5% of FVC, 3–8 trials, and adult repeatability within <= 0.150 L for the top two FVC and top two FEV1 values.' },
  { t: 'q', id: 'P6', src: 'PFT lecture quiz 1', core: true, wide: true, keep: true,
    q: 'Four acceptable blows give these values. Which FEV₁ and FVC go on the report?',
    fig: CVS.fig('pft-case1', 'PFT lecture quiz, best test selection.', 'pft', 14),
    o: ['FEV₁ 4.00 L and FVC 4.43 L', 'FEV₁ 3.93 L and FVC 4.39 L (the first blow)', 'FEV₁ 3.92 L and FVC 4.21 L (the averages)', 'FEV₁ 3.84 L and FVC 3.97 L (the blow with the highest FEV₁/FVC)', 'FEV₁ 4.00 L and FVC 4.04 L'], a: 0,
    ex: 'Report the largest FEV₁ (4.00, trial 2) and the largest FVC (4.43, trial 2); they may come from different blows, and you never average. Repeatability passes: FEV₁ 4.00 vs 3.93 and FVC 4.43 vs 4.39 each differ by under 0.150 L. Trials 3 and 4 have a ratio of 96–97% with a smaller FVC, the sign of a blow that stopped early.' },
  { t: 'c', id: 'P-C4', title: 'Reading a spirometry report in five steps', src: 'PFT p.10–11, lecture quiz p.14–15',
    html: '<p>Read the report as a checklist. Each step asks one question and uses one number from one column. The lecture cases below walk through it.</p>' +
      '<div class="tblwrap"><table class="tbl"><thead><tr><th>Step</th><th>Question</th><th>Which number</th><th>Rule from the lecture</th></tr></thead><tbody>' +
      '<tr><td class="num">1</td><td>Is the airflow <b>obstructed</b>?</td><td>FEV₁/FVC: the {{actual ratio}} in the Pre column</td><td>Below {{70–75}} (below the lower limit of normal) → obstruction</td></tr>' +
      '<tr><td class="num">2</td><td>Is the lung <b>small</b> (restriction)?</td><td>FVC %(Pre/Pred)</td><td>Below {{80%}} → restriction, to be confirmed by {{TLC}}. If step 1 found obstruction, first correct it: corrected %FVC = %pred FVC + [70 − FEV₁/FVC]. Above 80% → pure obstruction; 80% or less → {{combined}} obstructive and restrictive defect.</td></tr>' +
      '<tr><td class="num">3</td><td>How <b>severe</b>?</td><td>Obstruction: {{FEV₁ %pred}} · Restriction: {{FVC %pred}}</td><td>Mild ≥ 70 · Moderate {{50–69}} · Severe {{35–49}} · Very severe &lt; 35</td></tr>' +
      '<tr><td class="num">4</td><td>Does it <b>reverse</b> with a bronchodilator?</td><td>FEV₁ or FVC, Pre against Post</td><td>Rise of ≥ {{12% and ≥ 200 mL}} → bronchodilator response (reversible obstruction). % change = (post − pre) ÷ pre × 100</td></tr>' +
      '<tr><td class="num">5</td><td>Ratio and FVC normal: are the <b>small airways</b> involved?</td><td>FEF₂₅–₇₅% %(Pre/Pred)</td><td>Below {{65%}} → small airway disease; otherwise normal spirometry</td></tr></tbody></table></div>' +
      '<p class="trap">The FEV₁/FVC row also has a %(Pre/Pred) column (68 in case 4). That is the ratio as a percent of the <i>predicted ratio</i>. Step 1 uses the ratio itself (53.29 in case 4), not that column.</p>' +
      '<p class="note">The flowchart adds the ERS/ATS 2021 option: a change of more than 10% of the <i>predicted</i> value in FEV₁ or FVC also counts as a response. The worked cases use the percent-and-millilitre rule in step 4.</p>' +
      CVS.fig('pft-algo', 'The lecture’s interpretation flowchart.', 'pft', 10) },
  { t: 'q', id: 'P7', src: 'PFT lecture quiz 2', core: true, wide: true, keep: true,
    q: 'Thai male, 29 years, height 162 cm, weight 80 kg. Interpret this spirometry report.',
    fig: CVS.fig('pft-case2', 'PFT lecture quiz, case 2.', 'pft', 14),
    o: ['Normal spirometry', 'Small airway disease', 'Moderate restriction', 'Moderate obstruction with bronchodilator response', 'Severe obstruction without bronchodilator response'], a: 0,
    ex: 'Step 1: FEV₁/FVC 80.53 (above 75): no obstruction. Step 2: FVC 93% predicted (above 80%): no restriction. Step 5: FEF₂₅–₇₅% 70% predicted (above 65%): no small airway disease. Normal spirometry. (After the bronchodilator FEV₁ rises 2.90 → 3.01 L, +4%, so there is no response either.)' },
  { t: 'q', id: 'P8', src: 'PFT lecture quiz 3', core: true, wide: true, keep: true,
    q: 'Thai male, 71 years, height 162 cm, weight 41.4 kg. Interpret this spirometry report.',
    fig: CVS.fig('pft-case3', 'PFT lecture quiz, case 3.', 'pft', 14),
    o: ['Normal spirometry', 'Small airway disease', 'Moderate restriction', 'Moderate obstruction with bronchodilator response', 'Severe obstruction without bronchodilator response'], a: 4,
    ex: 'Step 1: FEV₁/FVC 41.96: obstruction. Step 2: FVC 81% predicted (above 80%, no correction needed): pure obstruction. Step 3: FEV₁ 43% predicted: severe (35–49). Step 4: FEV₁ 1.01 → 1.09 L (+8%, +80 mL) and FVC 2.40 → 2.43 L (+1%): below 12% and 200 mL, so no bronchodilator response (irreversible obstruction).' },
  { t: 'q', id: 'P9', src: 'PFT lecture quiz 4', core: true, wide: true, keep: true,
    q: 'Thai male, 76 years, height 169 cm, weight 62 kg. Interpret this spirometry report.',
    fig: CVS.fig('pft-case4', 'PFT lecture quiz, case 4.', 'pft', 14),
    o: ['Normal spirometry', 'Small airway disease', 'Moderate restriction', 'Moderate obstruction with bronchodilator response', 'Severe obstruction without bronchodilator response'], a: 3,
    ex: 'Step 1: FEV₁/FVC 53.29 (not the 68 in its %Pred column): obstruction. Step 2: FVC 100% predicted: pure obstruction. Step 3: FEV₁ 69% predicted: moderate (50–69). Step 4: FEV₁ 1.69 → 1.90 L = +0.21 L and (1.90 − 1.69)/1.69 = +12.4% (the report rounds to 13): both ≥ 200 mL and ≥ 12%, so a bronchodilator response (reversible obstruction).' },
  { t: 'q', id: 'P10', src: 'PFT lecture quiz 5', core: true, wide: true, keep: true,
    q: 'Thai male, 70 years, height 172 cm, weight 65 kg. Interpret this spirometry report.',
    fig: CVS.fig('pft-case5', 'PFT lecture quiz, case 5.', 'pft', 15),
    o: ['Normal spirometry', 'Small airway disease', 'Moderate restriction', 'Moderate obstruction with bronchodilator response', 'Severe obstruction without bronchodilator response'], a: 2,
    ex: 'Step 1: FEV₁/FVC 82.81: no obstruction. Step 2: FVC 62% predicted (below 80%): restriction pattern, to be confirmed by TLC. Step 3: restriction is graded on FVC % predicted: 62% is moderate (50–69).' },
  { t: 'q', id: 'P11', src: 'PFT lecture quiz 6', wide: true, keep: true,
    q: 'Thai female, 70 years, height 156 cm, weight 55.8 kg. Interpret this spirometry report.',
    fig: CVS.fig('pft-case6', 'PFT lecture quiz, case 6.', 'pft', 15),
    o: ['Normal spirometry', 'Small airway disease', 'Moderate restriction', 'Moderate obstruction with bronchodilator response', 'Severe obstruction without bronchodilator response'], a: 2,
    ex: 'Step 1: FEV₁/FVC 83.11: no obstruction. Step 2: FVC 60% predicted (below 80%): restriction pattern. Step 3: FVC 60% predicted: moderate (50–69).' },
  { t: 'q', id: 'P12', src: 'AC80', core: true, keep: true,
    q: 'A 55-year-old man with a 30 pack-year smoking history presents with progressive dyspnea. Spirometry shows FVC = 3.72 L and FEV₁ = 2.54 L. Which is the most likely diagnosis?',
    o: ['Small airway disease', 'Chronic obstructive pulmonary disease', 'Parenchymal lung disease', 'Pulmonary fibrosis'], a: 1,
    ex: 'FEV₁/FVC = 2.54/3.72 = 68%, below 70–75: obstruction. With a heavy smoking history, COPD is the likely cause.' },
  { t: 'q', id: 'P13', src: 'AC81', core: true, keep: true,
    q: 'Spirometry:<div class="tblwrap"><table class="tbl compact"><thead><tr><th></th><th>Before bronchodilator</th><th>After bronchodilator</th></tr></thead><tbody><tr><td>FVC</td><td>3.0 L (75% predicted)</td><td>3.1 L (78% predicted)</td></tr><tr><td>FEV₁</td><td>0.60 L (18% predicted)</td><td>0.85 L (27% predicted)</td></tr><tr><td>FEF₂₅–₇₅%</td><td>0.40 L/s (11% predicted)</td><td>0.45 L/s (13% predicted)</td></tr></tbody></table></div>Which is the condition of the patient?',
    o: ['Moderate obstructive PD with bronchodilator response', 'Severe obstructive PD with bronchodilator response', 'Very severe obstructive PD with bronchodilator response', 'Very severe obstructive PD without bronchodilator response'], a: 2,
    ex: 'Step 1: FEV₁/FVC = 0.60/3.0 = 20%: obstruction. Step 2: FVC is 75%, so correct it: 75 + (70 − 20) = 125% (above 80%): pure obstruction. Step 3: FEV₁ 18% predicted: very severe (below 35). Step 4: FEV₁ 0.60 → 0.85 L = +250 mL and +42%: a bronchodilator response by the ≥ 12% and ≥ 200 mL rule.',
    flag: 'The raw AC81 key marks D (without response). That only fits the ERS/ATS 2021 rule (change &gt; 10% of predicted: 27 − 18 = 9%). By the rule the lecture applies in its worked cases (≥ 12% and ≥ 200 mL, as in case 4, which counts a 9-point change as a response), the answer is C. The PS81 recall also notes these numbers were rebuilt by the recall team.' },
  { t: 'q', id: 'P14', src: 'AC81', keep: true,
    q: 'What is the most plausible disease the patient in the previous question might have?',
    o: ['Myasthenia gravis', 'Asthma', 'Pulmonary fibrosis', 'Chronic obstructive pulmonary disorder'], a: 3,
    ex: 'Even after the bronchodilator FEV₁/FVC is 0.85/3.1 ≈ 27%: the obstruction stays severe and largely fixed, which points to COPD. Asthma usually reverses toward normal; fibrosis and myasthenia give restriction, not obstruction.' },
  { t: 'q', id: 'P15', src: 'AC79', core: true, keep: true,
    q: 'A 26-year-old woman is admitted to the hospital due to difficulty breathing which has been aggravating for the past 2 months. She also complains about persistent cough and wheezing. The results of her pulmonary function test are as shown below:<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Parameter</th><th>Predicted</th><th>Measured</th><th>% Predicted</th><th>Measured (post-BD)</th></tr></thead><tbody><tr><td>FVC</td><td>3.99 L</td><td>3.87 L</td><td>97%</td><td>3.95 L</td></tr><tr><td>FEV₁</td><td>3.42 L</td><td>2.09 L</td><td>61%</td><td>2.75 L</td></tr><tr><td>FEV₁/FVC</td><td></td><td>54%</td><td></td><td>70%</td></tr></tbody></table></div>What is the most likely diagnosis for this patient?',
    o: ['Mixed obstructive and restrictive disease', 'Moderate obstructive disease with bronchodilator effect', 'Moderate obstructive disease without bronchodilator effect', 'Severe obstructive disease with bronchodilator effect', 'Severe obstructive disease without bronchodilator effect'], a: 1,
    ex: 'Ratio 54%: obstruction. FVC 97%: pure. FEV₁ 61% predicted: moderate. FEV₁ 2.09 → 2.75 L = +660 mL and +32%: a bronchodilator response (fits asthma).' },
  { t: 'q', id: 'P16', src: 'AC79', keep: true,
    q: 'A 40-year-old male comes to the doctor with progressive dyspnea upon exertion for 4 months. The pulmonary function test parameters are as follows:<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Parameter</th><th>Pre-bronchodilator</th><th>% Predicted</th></tr></thead><tbody><tr><td>FVC</td><td>2.5 L</td><td>80%</td></tr><tr><td>FEV₁</td><td>2.2 L</td><td>75%</td></tr><tr><td>FEF₂₅–₇₅%</td><td>1.6 L</td><td>50%</td></tr></tbody></table></div>Which is the most possible etiology?',
    o: ['Functional dyspnea', 'Pulmonary vascular disease', 'Neuromuscular disease', 'Small airway obstruction', 'Upper airway obstruction'], a: 3,
    ex: 'FEV₁/FVC = 2.2/2.5 = 88%: no obstruction. FVC 80%: not restricted. FEF₂₅–₇₅% 50% predicted is below 65%: small airway disease, the earliest sign of airway disease.' },
  { t: 'q', id: 'P17', src: 'AC79 (clinical correlation)', core: true, keep: true,
    q: 'A patient comes to the doctor due to worsening dyspnea. The pulmonary function test results are as follows:<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Parameter</th><th>Predicted</th><th>Measured</th><th>% Predicted</th><th>Measured (post-BD)</th></tr></thead><tbody><tr><td>FVC</td><td>3.17 L</td><td>2.03 L</td><td>64%</td><td>2.11 L</td></tr><tr><td>FEV₁</td><td>2.69 L</td><td>1.55 L</td><td>58%</td><td>1.83 L</td></tr><tr><td>FEV₁/FVC</td><td></td><td>76%</td><td></td><td>87%</td></tr></tbody></table></div>What is the condition found in this patient?',
    o: ['Restrictive disease', 'Small airway obstruction', 'Intra-thoracic airway obstruction', 'Moderate obstruction with bronchodilator response', 'Moderate obstruction without bronchodilator response'], a: 0,
    ex: 'Ratio 76% (not below 75): no obstruction, so the low FEV₁ just follows the small lung. FVC 64% predicted: restriction (moderate), to be confirmed by TLC.' },
  { t: 'c', id: 'P-C5', title: 'Flow-volume loops: obstructive, restrictive, and central airway obstruction', src: 'PFT p.11–13',
    html: '<div class="stack">' + CVS.fig('pft-loops', 'Flow-volume loops in obstructive disease, bronchodilator responsiveness, restrictive subtypes, and the three patterns of central airway obstruction.', 'pft', 12) +
      '<div class="tblwrap"><table class="tbl"><thead><tr><th>Condition</th><th>Expiratory limb (top)</th><th>Inspiratory limb (bottom)</th><th>Key mechanism / clinical clue</th></tr></thead><tbody>' +
      '<tr><td><b>Obstructive disease</b></td><td>Reduced PEF with {{scooped-out (concave)}} downslope</td><td>Normal (shifted left if hyperinflated)</td><td>Dynamic compression of small intrathoracic airways; improves post-BD if reversible</td></tr>' +
      '<tr><td><b>Restrictive disease</b></td><td>Narrow volume width; {{steep witch-hat}} slope in parenchymal fibrosis</td><td>Narrowed in volume</td><td><b>(a) Parenchymal</b>: high recoil gives steep slope; <b>(b) Chest wall</b>: parallel slope; <b>(c) Neuromuscular</b>: {{PEF not sharp}}</td></tr>' +
      '<tr><td><b>Variable extrathoracic obstruction</b></td><td>Normal</td><td>{{Flat inspiratory curve}}</td><td>During inspiration, negative airway pressure (&minus;) below atmospheric pressure (+) pulls extrathoracic trachea inward &rarr; {{inspiratory stridor}}</td></tr>' +
      '<tr><td><b>Variable intrathoracic obstruction</b></td><td>{{Flat expiratory curve}}</td><td>Normal</td><td>During expiration, high positive pleural pressure (+) exceeds airway pressure (&minus;) and compresses intrathoracic airway &rarr; {{expiratory wheezes}}</td></tr>' +
      '<tr><td><b>Fixed upper airway obstruction</b></td><td>Flattened</td><td>Flattened ({{box-like loop}})</td><td>Rigid stenosis at any level resists diameter change during both inspiration and expiration</td></tr></tbody></table></div></div>' },
  { t: 'q', id: 'P18', src: 'PFT p.12–13', core: true,
    q: 'A patient with vocal cord paralysis presents with inspiratory stridor. Which flow-volume loop pattern is expected, and what transmural pressure mechanism explains it?',
    o: ['Flat inspiratory curve with a normal expiratory curve — negative intraluminal airway pressure during inspiration pulls the compliant extrathoracic airway inward against higher atmospheric pressure', 'Flat expiratory curve with a normal inspiratory curve — positive pleural pressure during forced expiration compresses the extrathoracic trachea', 'Flattening of both inspiratory and expiratory curves — vocal cord paralysis acts as a rigid intrathoracic ring', 'Scooped-out concave expiratory curve with normal PEF — small airway dynamic compression', 'Narrow "witch\'s hat" loop shifted to the right — increased lung elastic recoil'], a: 0,
    ex: 'Vocal cord paralysis is a variable extrathoracic upper airway obstruction (pattern a). During inspiration, intraluminal tracheal pressure becomes subatmospheric (-), while surrounding neck pressure is atmospheric (+), sucking the mobile vocal cords inward and flattening the inspiratory limb (producing stridor). During expiration, positive intraluminal pressure pushes them open.' },
  { t: 'q', id: 'P19', src: 'AC81', core: true, keep: true,
    q: 'A patient comes with combined obstructive and restrictive pulmonary defect. Which flow-volume loop is most likely? The graph labelled “Reference” is a normal loop.',
    fig: '<div class="scanrow">' + CVS.fig('ac81-fvref', 'Reference: a normal loop.', 'ac81', 13) + CVS.fig('ac81-fva', 'A', 'ac81', 13) + CVS.fig('ac81-fvb', 'B', 'ac81', 13) + CVS.fig('ac81-fvc', 'C', 'ac81', 13) + CVS.fig('ac81-fvd', 'D', 'ac81', 13) + '</div>',
    o: ['A', 'B', 'C', 'D'], a: 0,
    ex: 'Combined disease needs both features: a small loop (low volume, about 1.6 L, from restriction) and a scooped, low expiratory limb (obstruction). A shows both.',
    flag: 'From the AC81 recall: the real exam gave numbers; the recall team redrew it with loops.' },
  { t: 'q', id: 'P20', src: 'AC80', core: true, keep: true,
    q: 'What should be the abnormality of this patient?',
    fig: CVS.fig('ac80-fvfixed', 'AC80: flow-volume loop.', 'ac80', 8),
    o: ['Fixed upper airway obstruction', 'Variable extrathoracic obstruction', 'Variable intrathoracic obstruction', 'Chest wall restriction'], a: 0,
    ex: 'Both the expiratory and inspiratory limbs are flattened into a box: the narrowing limits flow in both directions, so it is a fixed upper (central) airway obstruction, such as tracheal stenosis.' },
  { t: 'q', id: 'P21', src: 'AC79', core: true, keep: true,
    q: 'A 35-year-old man comes to a pulmonologist due to worsening dyspnea. The doctor decides to perform a spirometry test, and then do it again after letting the patient take a bronchodilator. The results of both tests, shown as the flow-volume loop curves, are as follows. What is the most likely condition found in this patient?',
    fig: CVS.fig('ac79-fvbd', 'AC79: flow-volume loops at baseline and after salbutamol, with the reference curve.', 'ac79', 13),
    o: ['Restrictive pattern', 'Obstructive pattern without bronchodilator response', 'Obstructive pattern with bronchodilator response', 'Fixed upper airway obstruction', 'Variable extrathoracic obstruction'], a: 2,
    ex: 'The baseline expiratory limb is scooped (obstruction). After salbutamol the loop grows toward the reference curve: a bronchodilator response.' },
  { t: 'q', id: 'P22', src: 'AC79', keep: true,
    q: 'A 67-year-old woman with a history of persistent tuberculosis comes to her pulmonologist to check her respiratory health status using the spirometry test. The results, shown as the flow-volume curve, are as follows. What is the most likely condition found in this patient?',
    fig: CVS.fig('ac79-fvtb', 'AC79: flow-volume loop.', 'ac79', 13),
    o: ['Fixed airway obstruction', 'Variable intrathoracic obstruction', 'Variable extrathoracic obstruction', 'Poor inspiratory effort', 'Restrictive pattern'], a: 0,
    ex: 'Both limbs are flattened. Old tuberculosis can scar the trachea or a main bronchus into a fixed stenosis.',
    flag: 'PS81 edit keys A.' }
]});
