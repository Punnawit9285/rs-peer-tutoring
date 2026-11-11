/* Section P: Pulmonary Function Tests & Spirometry Interpretation (681117-1 PFT handout, 15 pp.). */
CVS.add({ id: 'P', short: 'PFTs', title: 'Pulmonary Function Tests & Spirometry Interpretation', kind: 'Lecture',
  blurb: 'What spirometry measures, how a good test is done, how to read a report in five steps (with the lecture’s six worked cases), and flow-volume loops.',
  items: [
  { t: 'c', id: 'P-C1', title: 'Standard lung volumes, capacities, and what spirometry measures', src: 'PFT p.2–4',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>4 volumes</b>: TV (normal breath) · IRV (extra in) · ERV (extra out) · {{RV}} (what never leaves).</li>' +
      '<li><b>Capacities</b> = {{two or more volumes}} added together:<ul>' +
      '<li>IC = {{TV + IRV}}</li><li>FRC = {{ERV + RV}}</li><li>VC = {{IRV + TV + ERV}}</li><li>TLC = {{VC + RV}}</li></ul></li>' +
      '<li><b>Spirometer</b> measures only air moving through the mouth → anything containing RV (RV, FRC, TLC) {{cannot be measured}} → needs {{body plethysmography}} or gas dilution.</li>' +
      '<li><b>Forced blow gives</b>: FEV<sub>1</sub>, FVC, FEV<sub>1</sub>/FVC, PEF, and {{FEF25–75%}} (the small airways).</li></ul></div>' +
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
      '<div class="mini"><h4>Who should not blow yet</h4><p>Forced blow → pressure ↑ in chest, skull and eyes → wait if:</p><ul>' +
      '<li>{{heart attack}} in the last month</li><li>untreated {{pneumothorax}} or pulmonary embolism</li>' +
      '<li>{{cerebral aneurysm}}</li><li>recent brain, chest or eye surgery</li><li>late pregnancy</li><li>possible active TB</li></ul></div>' +
      '<div class="mini"><h4>Before the test</h4><ul><li>No smoking or hard exercise for {{1 hour}}.</li>' +
      '<li>Diagnostic test → stop {{bronchodilators}} first (short-acting for hours, long-acting for a day or more; see the table).</li>' +
      '<li>{{Inhaled steroids}} can be continued.</li></ul></div>' +
      '<p class="note">Predicted values come from {{age, sex, height and ethnicity}} (GLI 2012). Weight does not count.</p></div>' +
      CVS.fig('pft-withhold', 'Bronchodilator withholding times before diagnostic spirometry.', 'pft', 6) + '</div>' },
  { t: 'q', id: 'P3', src: 'PFT p.6',
    q: 'Which patient characteristic does NOT determine the predicted spirometry reference values (GLI2012)?',
    o: ['Body weight', 'Standing height', 'Biological sex', 'Age', 'Ethnicity'], a: 0,
    ex: 'Predicted reference values in GLI2012 are determined by age, sex, standing height, and ethnicity. Body weight is measured during preparation but is not part of the reference equations for normal lung volumes.' },
  { t: 'tf', id: 'P4', src: 'PFT p.6',
    q: 'Acute myocardial infarction 2 weeks ago, thoracic surgery 3 weeks ago, or cataract surgery 3 weeks ago are relative contraindications to performing spirometry.', a: true,
    ex: 'True. Acute MI within 1 month, cerebral or thoracic surgery within 4 weeks, and eye surgery within 4–8 weeks are all listed as relative contraindications because forced expiration abruptly increases intrathoracic, intracranial, and intraocular pressures.' },
  { t: 'c', id: 'P-C3', title: 'One good blow, three times over: acceptability, repeatability and the best values', src: 'PFT p.7–9, 14',
    html: '<div class="two"><div class="stack"><ol class="steps"><li><b>Fill up</b> fast to {{total lung capacity}} (no long pause: it lowers PEF and FEV₁).</li>' +
      '<li><b>Blast</b> out as hard and fast as possible.</li>' +
      '<li><b>Keep going</b> until nothing more comes out, then breathe in fully.</li></ol>' +
      '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Acceptable blow</th><th>Check</th></tr></thead><tbody>' +
      '<tr><td>Good start</td><td>back-extrapolated volume ≤ {{5% of FVC or 0.100 L}}</td></tr>' +
      '<tr><td>Good end</td><td>plateau (≤ 0.025 L in the last second) or blow ≥ {{15 s}}</td></tr>' +
      '<tr><td>No artifacts</td><td>no {{cough in the first second}}, leak or glottic closure</td></tr></tbody></table></div></div>' +
      '<div class="stack"><div class="mini art"><h4>How many blows</h4><ul><li>{{3}} to 8 acceptable blows.</li>' +
      '<li>Repeatable: top two FVC and top two FEV₁ each within {{0.150 L}}.</li></ul></div>' +
      '<div class="mini ven"><h4>What goes on the report</h4><ul><li>The {{largest FEV₁}} and the {{largest FVC}}.</li>' +
      '<li>They may come from {{different blows}}. Never average.</li></ul></div>' +
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
    html: '<div class="cols2"><div class="mini art"><h4>Read it in order</h4><ol class="steps tight">' +
      '<li><b>Slow?</b> FEV₁/FVC &lt; {{70}} → obstruction</li>' +
      '<li><b>Small?</b> FVC &lt; {{80%}} → restriction → confirm with {{TLC}}</li>' +
      '<li><b>How bad?</b> obstruction → {{FEV₁ %pred}} · restriction → FVC %pred</li>' +
      '<li><b>Reversible?</b> FEV₁ ↑ ≥ {{12%}} <i>and</i> ≥ {{200 mL}}</li>' +
      '<li><b>All normal?</b> FEF₂₅–₇₅ &lt; {{65%}} → small airways</li></ol></div>' +
      '<div class="mini ven"><h4>Two traps</h4><ul>' +
      '<li>Step 1 uses the {{actual ratio}} (e.g. 53), not its %Pred column (e.g. 68).</li>' +
      '<li>Obstruction + low FVC → trapped air can fake a small lung → corrected %FVC = %FVC + (70 − ratio) → still &lt; 80 → {{mixed}} defect.</li></ul></div></div>' +
      '<div class="flowx" data-flow="pft"></div>' +
      '<details class="figmore"><summary>The lecture’s own flowchart (PFT slide 10)</summary>' + CVS.fig('pft-algo', 'The lecture’s interpretation flowchart.', 'pft', 10) + '</details>' },
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
      '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Pattern</th><th>Breath out (top)</th><th>Breath in (bottom)</th><th>Why</th></tr></thead><tbody>' +
      '<tr><td><b>Obstructive</b></td><td>{{scooped-out}}</td><td>normal</td><td>small airways squeezed when blowing</td></tr>' +
      '<tr><td><b>Restrictive</b></td><td>narrow; {{witch’s hat}} in fibrosis</td><td>narrow</td><td>small lung; stiff lung → steep slope</td></tr>' +
      '<tr><td><b>Variable extrathoracic</b> (vocal cord palsy)</td><td>normal</td><td>{{flat}}</td><td>breath in → airway pressure below air → neck airway sucked in → {{stridor}}</td></tr>' +
      '<tr><td><b>Variable intrathoracic</b></td><td>{{flat}}</td><td>normal</td><td>breath out → pleural pressure squeezes the airway</td></tr>' +
      '<tr><td><b>Fixed</b> (stenosis, old TB scar)</td><td>flattened</td><td>flattened</td><td>rigid narrowing → {{box-shaped}} loop</td></tr></tbody></table></div>' +
      '<p class="note">Combined defect = small loop + scooped breath-out limb. A bronchodilator response = the loop grows back toward normal.</p></div>' },
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
