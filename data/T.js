/* Section T: Hemoglobin, Oxygen Dissociation Curve & CO2 Transport (681114-2 Gas Transport.pdf, 43 pages). */
CVS.add({ id: 'T', short: 'Gas transport', title: 'Hemoglobin, Oxygen Dissociation Curve & CO2 Transport', kind: 'Lecture',
  blurb: 'Partial pressure vs tension, the 9-step diffusion pathway, hemoglobin structure and T-to-R oxygenation mechanics, P50 and allosteric effectors (2,3-BPG, pH, CO2, temperature), hemoglobin variants, CO poisoning, myoglobin, and CO2 transport with the Bohr and Haldane effects.',
  items: [
  { t: 'c', id: 'T-C1', title: 'Physical gas transport, 9-step diffusion path & RBC carrying capacity', src: 'Gas transport p.2–11, 14',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Gas–liquid interface</b>: {{partial pressure}} is the force driving gas molecules to dissolve into a liquid phase, whereas {{tension}} is the force causing dissolved gas molecules to escape from the liquid; at equilibrium the two forces are equal.</li>' +
      '<li><b>9-step diffusion path</b> from alveolus to Hb: (1) alveolar air &rarr; (2) {{surfactant layer}} &rarr; (3) alveolar membrane &rarr; (4) interstitial fluid &rarr; (5) capillary membrane &rarr; (6) plasma &rarr; (7) RBC membrane &rarr; (8) intracellular fluid &rarr; (9) hemoglobin.</li>' +
      '<li><b>O<sub>2</sub> diffusing capacity</b> in a young adult rises from {{20 mL/min/mmHg}} at rest to {{65 mL/min/mmHg}} during exercise because expanded capillary networks increase surface area and stretched alveoli thin the membrane.</li>' +
      '<li><b>Decreased diffusion rate</b>: diminished alveolar surface area (pneumonia, atelectasis, lung tumor, tuberculosis) vs {{alveolar-capillary block}} (pulmonary edema, interstitial pulmonary fibrosis, {{silicosis}}).</li>' +
      '<li><b>Role of RBCs</b>: RBCs bind dissolved O<sub>2</sub> temporarily and reversibly, shifting the plasma equilibrium so more gas dissolves and increasing blood O<sub>2</sub> transport capacity {{65-fold}}.</li></ul></div>' +
      CVS.fig('trans-rbc', 'RBCs bind dissolved gas reversibly, shifting the equilibrium so much more gas can dissolve and be transported.', 'trans', 11) + '</div>' + '<p class="note"><b>From the past papers</b> · Anemia lowers hemoglobin, so O₂ content and O₂ delivery fall, but PaO₂, which is set by the lungs, is unchanged (AC81).</p>' },
  { t: 'q', id: 'T1', src: 'AC81', core: true, keep: true,
    q: 'A woman comes with anemia. Blood test reveals she has iron deficiency. Which one is not affected?',
    o: ['Total content of oxygen in blood', 'Oxygen saturation', 'Hemoglobin production', 'Oxygen delivering to tissue', 'Arterial pO₂'], a: 4,
    ex: 'PaO₂ depends on the lungs (alveolar PO₂ and diffusion), not on how much hemoglobin there is. Anemia lowers hemoglobin, O₂ content and O₂ delivery; the key keeps saturation among the affected ones.',
    flag: 'Raw student key: E. In uncomplicated anemia SaO₂ is usually normal too; arterial PO₂ is the safest “not affected” answer.' },
  { t: 'c', id: 'T-C2', title: 'Hemoglobin A structure & molecular mechanism of oxygenation', src: 'Gas transport p.12–21',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Hemoglobin A (HbA)</b>: quaternary tetramer (&alpha;<sub>2</sub>&beta;<sub>2</sub>; &alpha; = 141 AA, &beta; = 146 AA), MW {{64,500 Da}} (5.5 nm), with 4 heme groups each containing ferrous iron (<b>Fe<sup>2+</sup></b>) coordinated to proximal histidine.</li>' +
      '<li><b>Reversible O<sub>2</sub> binding</b>: O<sub>2</sub> attachment to Fe<sup>2+</sup> is {{oxygenation}} (not oxidation &mdash; Fe<sup>2+</sup> valence does not change) and occurs in {{0.01 s}}.</li>' +
      '<li><b>Step 1 (first subunit)</b>: driven by the P<sub>O2</sub> gradient, the first O<sub>2</sub> binds the {{alpha chain}} first because its heme pocket is wider than that of the &beta;-subunit.</li>' +
      '<li><b>Step 2 (Fe<sup>2+</sup> movement)</b>: in deoxyHb, steric repulsion keeps Fe<sup>2+</sup> {{0.6 &Aring;}} above the porphyrin ring in a {{high-spin}} state; O<sub>2</sub> binding converts Fe<sup>2+</sup> to a {{low-spin}} state and pulls it into the flat porphyrin plane.</li>' +
      '<li><b>Step 3 (T &rarr; R transition)</b>: breaking of &alpha;&ndash;&alpha; and &alpha;&ndash;&beta; {{salt bridges}}, {{15&deg;}} rotation of &alpha;&beta; dimers, expulsion of 2,3-BPG from between the &beta;-chains, narrowing of the &beta;&ndash;&beta; gap (0.07 nm), and widening of the &beta;-subunit heme pocket.</li>' +
      '<li>This positive {{cooperativity}} (like tearing a block of 4 stamps) converts low-affinity deoxyHb (T-state) into high-affinity oxyHb (R-state) and yields a <b>sigmoidal</b> dissociation curve.</li></ul></div>' +
      CVS.fig('trans-heme', 'Iron atom movement into the flat porphyrin plane upon oxygen binding.', 'trans', 18) + '</div>' },
  { t: 'q', id: 'T2', src: 'Gas transport p.16–19', core: true,
    q: 'During the oxygenation of deoxyhemoglobin A (&alpha;<sub>2</sub>&beta;<sub>2</sub>), which sequence of molecular events occurs first and triggers the cooperative transition to oxyhemoglobin?',
    o: ['O2 binds the α-subunit first (wider heme pocket) → Fe2+ shifts from high-spin (0.6 Å above the ring) into the porphyrin plane (low-spin) → α–α and α–β salt bridges break, αβ rotates 15°, 2,3-BPG is expelled, and the β heme pocket opens',
        'O2 binds the β-subunit first (after 2,3-BPG covalently phosphorylates His146) → Fe2+ is oxidized to Fe3+ and moves 1.5 nm out of the porphyrin plane',
        '2,3-BPG binds between the α-subunits → αβ dimers rotate 45° → Fe2+ transitions from low-spin to high-spin',
        'CO2 binds to Fe2+ of the α-subunit → β–β subunits move 0.6 Å farther apart → salt bridges form to stabilize the R-state',
        'All four subunits bind O2 simultaneously without conformational change, producing a hyperbolic curve'], a: 0,
    ex: 'Because the α-subunit has a wider heme pocket than the β-subunit, O2 binds the α-subunit first. Fe2+ transitions from high-spin (0.6 Å out of plane due to steric repulsion) to low-spin in the flat porphyrin plane, pulling the histidine helix, breaking α–α and α–β salt bridges, rotating αβ dimers by 15°, expelling 2,3-BPG, bringing the β-chains 0.07 nm closer, and opening the β heme pocket.' },
  { t: 'q', id: 'T3', src: 'Gas transport p.13',
    q: 'Which pairing of ligand and its specific binding site on hemoglobin is <b>correct</b>?',
    o: ['CO2 → N-terminal −NH2 group of globin chains (forming carbaminohemoglobin) · 2,3-BPG → β-globin chains of deoxyhemoglobin',
        'CO2 → Fe2+ atom of heme · CO → N-terminal −NH2 group of globin chains',
        'H+ → Fe2+ atom of heme · O2 → C-terminal −COOH group of α-globin',
        '2,3-BPG → heme porphyrin ring of oxyhemoglobin · CO → β-globin His146',
        'O2 → N-terminal −NH2 group of globin · H+ → 2,3-BPG central cavity'], a: 0,
    ex: 'O2 and CO bind to the Fe2+ atom of heme (forming oxyhemoglobin and carboxyhemoglobin); CO2 binds to the N-terminal −NH2 group of globin chains (forming carbaminohemoglobin); H+ binds to proton-acceptor amino acids of globin (stabilizing deoxyhemoglobin); and 2,3-BPG binds non-covalently to the β-globin chains of deoxyhemoglobin.' },
  { t: 'c', id: 'T-C3', title: 'P50, oxygen dissociation shifts & 2,3-BPG regulation', src: 'Gas transport p.22–33',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>P<sub>50</sub></b> is the P<sub>O2</sub> at which Hb is 50% saturated; normal P<sub>50</sub> = {{27 mmHg}}.</li>' +
      '<li><b>Right shift (P<sub>50</sub> &gt; 27, e.g. 48 mmHg)</b> = <b>decreased O<sub>2</sub> affinity</b> (enhances O<sub>2</sub> unloading to active tissues): caused by <b>&uparrow; [H<sup>+</sup>] (low pH), &uparrow; P<sub>CO2</sub>, &uparrow; temperature, and &uparrow; 2,3-BPG</b>. <b>Left shift (P<sub>50</sub> &lt; 27, e.g. 16 mmHg)</b> = increased affinity from the opposite changes.</li>' +
      '<li><b>Molecular mechanisms</b>: when protonated at low pH, {{His146}} (His HC3) on the &beta;-subunit forms a stabilizing ion pair with {{Asp94}} (Asp FG1) that locks deoxyHb in the {{T-state}}; CO<sub>2</sub> binds the {{N-terminal amino group}} of globin to form carbaminohemoglobin.</li>' +
      '<li><b>2,3-BPG</b> (from RBC {{anaerobic glycolysis}}) is a highly charged anion that binds {{non-covalently}} in a {{1:1}} ratio to the &beta;-chains of deoxyHb.</li>' +
      '<li><b>2,3-BPG regulation</b>: <b>increased</b> by hormones ({{thyroid hormone, growth hormone, and androgens}}), exercise, anemia, hypoxia, and high altitude; <b>decreased</b> by {{acidosis}}.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('trans-odc', 'Oxygen dissociation curves showing normal affinity and left vs right shifts.', 'trans', 22) + CVS.fig('trans-bpg', 'Conversion of 1,3-BPG to 2,3-BPG in red blood cells and its right-shifting effect.', 'trans', 23) + '</div></div>' },
  { t: 'q', id: 'T4', src: 'AC81', core: true, keep: true,
    q: 'The oxygen dissociation curve shifts significantly to the left. Which of the following changes is most associated with the changes?',
    o: ['P50 increased, affinity of Hb-O₂ decreased', 'P50 decreased, affinity of Hb-O₂ increased', 'P50 increased, affinity of Hb-O₂ increased', 'P50 decreased, affinity of Hb-O₂ decreased', 'P50 unchange, affinity of Hb-O₂ unchange'], a: 1,
    ex: 'A left shift means Hb is 50% saturated at a lower PO₂ (lower P50): higher affinity, holding O₂ more tightly.' },
  { t: 'q', id: 'T5', src: 'AC80', core: true, keep: true,
    q: 'What is the primary effect of 2,3-BPG on binding oxygen to hemoglobin?',
    o: ['Increase oxygen unloading to tissue', 'Decrease oxygen unloading to tissue', 'Increase oxygen affinity'], a: 0,
    ex: '2,3-BPG binds deoxyhemoglobin, stabilizing the T state: affinity falls, the curve shifts right, and more O₂ is released to tissues.' },
  { t: 'c', id: 'T-C4', title: 'Hemoglobin variants, CO poisoning, abnormal hemoglobins & myoglobin', src: 'Gas transport p.34–39',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Protein / Variant</th><th>Subunits / Structure</th><th>Key physiological or clinical feature</th></tr></thead><tbody>' +
      '<tr><td><b>Embryonic Hb</b></td><td>{{Gower 1 (&zeta;2&epsilon;2), Gower 2 (&alpha;2&epsilon;2), Portland (&zeta;2&gamma;2)}}</td><td>Produced in the embryonic yolk sac</td></tr>' +
      '<tr><td><b>Fetal Hb (HbF)</b></td><td>{{&alpha;2&gamma;2}} (&lt;1% in adults)</td><td>Does <b>not bind (or loosely binds) 2,3-BPG</b> &rarr; <b>left shift</b> &amp; higher O<sub>2</sub> affinity than maternal HbA</td></tr>' +
      '<tr><td><b>Adult HbA / HbA<sub>2</sub> / HbA<sub>1c</sub></b></td><td>HbA &alpha;<sub>2</sub>&beta;<sub>2</sub> (~{{97%}}), HbA<sub>2</sub> {{&alpha;2&delta;2}} (2–2.5%)</td><td>HbA<sub>1c</sub> (&alpha;<sub>2</sub>&beta;<sub>2</sub> + glucose) rises up to 12% in diabetes mellitus</td></tr>' +
      '<tr><td><b>Carboxyhemoglobin</b></td><td>Hb bound to CO at Fe<sup>2+</sup></td><td>CO binds Hb with {{210 times}} higher affinity than O<sub>2</sub> &rarr; left shift &amp; severe tissue hypoxia</td></tr>' +
      '<tr><td><b>MetHb &amp; SulfHb</b></td><td>MetHb: {{Fe3+}} replaces Fe<sup>2+</sup></td><td>SulfHb: sulfur replaces ferrous atom after exposure to {{hydroxylamine sulfate}} ((NH<sub>2</sub>OH)<sub>2</sub>H<sub>2</sub>SO<sub>4</sub>)</td></tr>' +
      '<tr><td><b>Myoglobin</b> (heart &amp; skeletal muscle)</td><td>Monomer: {{153 amino acids}}, MW {{16,700 Da}}, 1 heme</td><td><b>Rectangular {{hyperbolic}}</b> curve (higher affinity than HbA, tight binding at low &amp; high P<sub>O2</sub>), <b>no cooperativity</b>, does <b>not</b> bind H<sup>+</sup> or CO<sub>2</sub></td></tr></tbody></table></div></div>' +
      CVS.fig('trans-myoglobin', 'Myoglobin monomer structure and its oxygen dissociation curve compared with HbA.', 'trans', 38) + '</div>' },
  { t: 'q', id: 'T6', src: 'AC80', core: true, keep: true,
    q: 'Which of the following is true regarding fetal hemoglobin (HbF) compared to adult hemoglobin (HbA)?',
    o: ['HbF has a lower affinity for oxygen', 'HbF is unable to bind carbon dioxide', 'HbF is more efficient at unloading oxygen in tissues', 'HbF binds 2,3-bisphosphoglycerate more effectively', 'HbF causes a leftward shift in the oxygen-hemoglobin curve'], a: 4,
    ex: 'HbF (α₂γ₂) binds 2,3-BPG poorly, so its O₂ affinity is higher and its curve lies to the left of HbA, which lets the fetus take O₂ from maternal blood.' },
  { t: 'q', id: 'T7', src: 'AC79', keep: true,
    q: 'What does the oxygen dissociation curve graph of hemoglobin F look like compared to the graph for hemoglobin A?',
    o: ['Sigmoidal shape with a left shift', 'Sigmoidal shape with a right shift', 'Rectangular hyperbola', 'Sigmoidal shape with no shift', 'Linear'], a: 0,
    ex: 'HbF is still a cooperative tetramer, so its curve stays sigmoid, but it lies to the left. A rectangular hyperbola is myoglobin.' },
  { t: 'q', id: 'T8', src: 'AC81', core: true, keep: true,
    q: 'How does higher arterial CO affect hemoglobin dissociation curve?',
    o: ['Right shift of O₂ dissociation curve + higher O₂ affinity', 'Left shift of O₂ dissociation curve + higher O₂ affinity', 'Left shift of O₂ dissociation curve + lower O₂ affinity', 'Right shift of O₂ dissociation curve + lower O₂ affinity'], a: 1,
    ex: 'CO occupies heme sites (about 200–250 × the affinity of O₂) and makes the remaining sites hold O₂ more tightly: the curve shifts left and O₂ unloading falls.' },
  { t: 'q', id: 'T9', src: 'AC80 (clinical correlation)', keep: true,
    q: 'A 30 year old man uses kerosene as a fuel in his house. After a while, he walks out of his house without wearing a shirt on his upper body. There is black smoke floating out of his house. What happened?',
    o: ['CO have more affinity with Hb than O₂, so there is a defect in O₂ transportation', 'Hb-O₂ graph shift to the right'], a: 0,
    ex: 'Burning kerosene indoors produces carbon monoxide. CO binds Hb 200–250 times more tightly than O₂, lowering O₂-carrying capacity, and it shifts the curve left, not right.',
    flag: 'Only two options were recalled.' },
  { t: 'c', id: 'T-C5', title: 'CO2 transport in blood, Bohr effect & Haldane effect', src: 'Gas transport p.40–43',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Three forms of CO<sub>2</sub> in blood</b> (Gas transport p.41): (1) {{7%}} physically dissolved in plasma; (2) {{23%}} bound to globin N-terminal &minus;NH<sub>2</sub> as <b>carbaminohemoglobin</b>; (3) {{70%}} converted to <b>bicarbonate (HCO<sub>3</sub><sup>&minus;</sup>)</b> in RBCs (<i>note: Gas exchange p.33 lists 5% dissolved, 3% carbaminoHb, and &gt;90% HCO<sub>3</sub><sup>&minus;</sup>; in both lectures HCO<sub>3</sub><sup>&minus;</sup> is the major form</i>).</li>' +
      '<li><b>RBC bicarbonate pathway &amp; chloride shift</b>: RBC {{carbonic anhydrase}} catalyzes CO<sub>2</sub> + H<sub>2</sub>O &rightleftharpoons; H<sub>2</sub>CO<sub>3</sub> &rightleftharpoons; H<sup>+</sup> + HCO<sub>3</sub><sup>&minus;</sup>; H<sup>+</sup> is buffered by deoxyHb (HHb) while HCO<sub>3</sub><sup>&minus;</sup> exits the RBC in exchange for {{Cl&minus;}} entering.</li>' +
      '<li><b>{{Bohr effect}}</b> (occurs in {{systemic capillaries}}): adding metabolically produced <b>H<sup>+</sup> and CO<sub>2</sub> decreases O<sub>2</sub>–Hb affinity</b> (right shift), promoting O<sub>2</sub> release to tissues.</li>' +
      '<li><b>{{Haldane effect}}</b> (occurs in <b>alveolar capillaries</b>): <b>oxygenation of Hb decreases its affinity for CO<sub>2</sub> and H<sup>+</sup></b>, releasing H<sup>+</sup> to combine with HCO<sub>3</sub><sup>&minus;</sup> &rarr; H<sub>2</sub>CO<sub>3</sub> &rarr; CO<sub>2</sub> + H<sub>2</sub>O for exhalation.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('trans-co2', 'Three mechanisms of carbon dioxide transport in red blood cells and plasma.', 'trans', 41) + CVS.fig('trans-bohr-haldane', 'Coupling of oxygen and carbon dioxide transport between lungs and tissues.', 'trans', 43) + '</div></div>' },
  { t: 'q', id: 'T10', src: 'AC80', core: true, keep: true,
    q: 'CO₂ ลำเลียงมากที่สุดในรูปไหน <span class="muted">In which form is most CO₂ transported?</span>',
    o: ['HCO₃⁻', 'H₂CO₃', 'ละลายกับ plasma <span class="muted">(dissolved in plasma)</span>', 'จับกับ Hb <span class="muted">(bound to Hb)</span>'], a: 0,
    ex: 'About 70% of CO₂ travels as bicarbonate (made by carbonic anhydrase in red cells and moved out by the chloride shift), about 23% as carbamino-Hb and about 7% dissolved.' },
  { t: 'q', id: 'T11', src: 'AC81', core: true, keep: true,
    q: 'Which of the following choices best describe the Haldane effect?',
    o: ['Oxygenation of hemoglobin promote CO₂ loading in tissue', 'Oxygenation of hemoglobin promote CO₂ unloading in lung', 'Decreased partial pressure of CO₂ promotes oxygenation of hemoglobin', 'Increased partial pressure of CO₂ promotes deoxygenation of hemoglobin'], a: 1,
    ex: 'Haldane: oxygenated Hb holds less CO₂ (and H⁺), so O₂ loading in the lung pushes CO₂ off. C and D describe the Bohr effect (CO₂ changing O₂ binding).' },
  { t: 'q', id: 'T12', src: 'AC79', keep: true,
    q: 'Which of the following statements is correct regarding the Bohr shift?',
    o: ['High oxygenation of Hb causes lowering of CO₂ affinity', 'High oxygenation of Hb causes a rise in CO₂ affinity', 'Low pH causes lowering of CO₂ affinity', 'Low pH causes lowering of O₂ affinity', 'Low pH causes a rise in O₂ affinity'], a: 3,
    ex: 'Bohr effect: H⁺ and CO₂ lower Hb’s O₂ affinity (right shift), helping unload O₂ in active tissue. A is the Haldane effect.' }
]});
