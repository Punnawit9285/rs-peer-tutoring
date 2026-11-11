/* Section T: Hemoglobin, Oxygen Dissociation Curve & CO2 Transport (681114-2 Gas Transport.pdf, 43 pages). */
CVS.add({ id: 'T', short: 'Gas transport', title: 'Hemoglobin, Oxygen Dissociation Curve & CO2 Transport', kind: 'Lecture',
  blurb: 'Partial pressure vs tension, the 9-step diffusion pathway, hemoglobin structure and T-to-R oxygenation mechanics, P50 and allosteric effectors (2,3-BPG, pH, CO2, temperature), hemoglobin variants, CO poisoning, myoglobin, and CO2 transport with the Bohr and Haldane effects.',
  items: [
  { t: 'c', id: 'T-C1', title: 'Physical gas transport, 9-step diffusion path & RBC carrying capacity', src: 'Gas transport p.2–11, 14',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Gas ↔ liquid</b>: {{partial pressure}} pushes gas into the liquid; {{tension}} pushes it back out → equal at equilibrium.</li>' +
      '<li><b>Path, alveolus → Hb</b>: alveolar air → {{surfactant}} → alveolar wall → interstitium → capillary wall → plasma → RBC membrane → inside the RBC → Hb.</li>' +
      '<li><b>Exercise</b> → more capillaries open + thinner stretched walls → diffusing capacity {{rises}} about 3×.</li>' +
      '<li><b>Diffusion falls</b> with<ul><li>less area (pneumonia, atelectasis, tumour)</li>' +
      '<li>a thick wall = {{alveolar-capillary block}} (edema, fibrosis, silicosis).</li></ul></li>' +
      '<li><b>RBCs</b> soak up dissolved O<sub>2</sub> → more can dissolve → blood carries about {{65×}} more O<sub>2</sub>.</li>' +
      '<li><b>Anemia</b> → less Hb → O<sub>2</sub> {{content}} and delivery fall, but P<sub>aO2</sub> (set by the lung) stays {{normal}}.</li></ul></div>' +
      CVS.fig('trans-rbc', 'RBCs bind dissolved gas reversibly, shifting the equilibrium so much more gas can dissolve and be transported.', 'trans', 11) + '</div>' },
  { t: 'q', id: 'T1', src: 'AC81', core: true, keep: true,
    q: 'A woman comes with anemia. Blood test reveals she has iron deficiency. Which one is not affected?',
    o: ['Total content of oxygen in blood', 'Oxygen saturation', 'Hemoglobin production', 'Oxygen delivering to tissue', 'Arterial pO₂'], a: 4,
    ex: 'PaO₂ depends on the lungs (alveolar PO₂ and diffusion), not on how much hemoglobin there is. Anemia lowers hemoglobin, O₂ content and O₂ delivery; the key keeps saturation among the affected ones.',
    flag: 'Raw student key: E. In uncomplicated anemia SaO₂ is usually normal too; arterial PO₂ is the safest “not affected” answer.' },
  { t: 'c', id: 'T-C2', title: 'Hemoglobin A structure & molecular mechanism of oxygenation', src: 'Gas transport p.12–21',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>HbA</b> = {{α2β2}}: 4 globins, 4 hemes, each with <b>Fe<sup>2+</sup></b>.</li>' +
      '<li>O<sub>2</sub> on Fe<sup>2+</sup> = {{oxygenation}}, not oxidation (iron stays Fe<sup>2+</sup>).</li>' +
      '<li><b>Binding sites</b>: O<sub>2</sub> and CO → heme iron · CO<sub>2</sub> → {{N-terminal amino group}} of globin · 2,3-BPG → between the {{β chains}} of deoxyHb.</li></ul>' +
      '<p><b>Why the first O<sub>2</sub> makes the rest easier</b>:</p>' +
      '<ol class="steps tight"><li>First O<sub>2</sub> binds the {{α}} subunit (wider heme pocket).</li>' +
      '<li>Fe<sup>2+</sup> goes {{high-spin}} → low-spin → drops into the flat porphyrin ring.</li>' +
      '<li>Pulls the histidine → {{salt bridges}} break → dimers rotate → 2,3-BPG pushed out.</li>' +
      '<li>T state (low affinity) → {{R state}} (high affinity) → next O<sub>2</sub> binds more easily.</li></ol>' +
      '<p>That is {{cooperativity}} → the curve is {{sigmoid}}.</p></div>' +
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
      '<li><b>P<sub>50</sub></b> = P<sub>O2</sub> at 50% saturation; normal ≈ {{27}} mmHg.</li>' +
      '<li><b>Right shift</b>: P<sub>50</sub> ↑ → affinity {{↓}} → more O<sub>2</sub> unloaded to tissue.<ul>' +
      '<li>Caused by ↑ {{H<sup>+</sup>}}, ↑ CO<sub>2</sub>, ↑ {{temperature}}, ↑ 2,3-BPG (“an exercising muscle”).</li></ul></li>' +
      '<li><b>Left shift</b>: P<sub>50</sub> ↓ → affinity {{↑}} → Hb holds on.</li>' +
      '<li><b>Low pH</b> → protonated His146 forms an ion pair → locks Hb in the {{T state}}.</li>' +
      '<li><b>2,3-BPG</b><ul><li>made by {{glycolysis}} in the RBC; binds deoxyHb.</li>' +
      '<li>↑ in anemia, hypoxia, high altitude, exercise; ↓ in {{acidosis}}.</li></ul></li></ul></div>' +
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
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Fetal Hb</b> = {{α2γ2}} → binds 2,3-BPG poorly → affinity ↑ → curve shifts {{left}} (still sigmoid) → fetus takes O<sub>2</sub> from the mother.</li>' +
      '<li><b>Adult</b>: HbA α2β2 (most), HbA<sub>2</sub> {{α2δ2}}; HbA<sub>1c</sub> = glycated HbA → ↑ in diabetes.</li>' +
      '<li><b>CO</b> (indoor stove, smoke) → binds Hb about {{200×}} more tightly than O<sub>2</sub> →<ul>' +
      '<li>less O<sub>2</sub> carried</li><li>curve shifts the same way as fetal Hb → what is carried is not released → tissue hypoxia.</li></ul></li>' +
      '<li><b>MetHb</b> = iron oxidised to {{Fe3+}} → cannot carry O<sub>2</sub>.</li>' +
      '<li><b>Myoglobin</b> (muscle): one chain, one heme → {{no cooperativity}} → {{hyperbolic}} curve, higher affinity than HbA.</li></ul></div>' +
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
      '<li><b>CO<sub>2</sub> travels as</b>: {{bicarbonate}} (most, ~70%) · carbamino-Hb · dissolved.</li>' +
      '<li><b>In the RBC</b>: CO<sub>2</sub> + H<sub>2</sub>O → ({{carbonic anhydrase}}) → H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup><ul>' +
      '<li>H<sup>+</sup> → buffered by deoxyHb.</li><li>HCO<sub>3</sub><sup>−</sup> → leaves the cell, {{Cl−}} comes in (chloride shift).</li></ul></li>' +
      '<li><b>{{Bohr}} effect</b> (tissues): ↑ CO<sub>2</sub>, ↑ H<sup>+</sup> → O<sub>2</sub> affinity ↓ → O<sub>2</sub> {{released}}.</li>' +
      '<li><b>{{Haldane}} effect</b> (lungs): Hb picks up O<sub>2</sub> → holds less CO<sub>2</sub> and H<sup>+</sup> → CO<sub>2</sub> {{unloaded}} to be breathed out.</li></ul>' +
      '<p class="note">Memory hook: the tissue effect = CO<sub>2</sub> changes O<sub>2</sub> binding; the lung effect = O<sub>2</sub> changes CO<sub>2</sub> binding.</p></div>' +
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
