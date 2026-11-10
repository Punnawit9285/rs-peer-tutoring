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
      CVS.fig('trans-rbc', 'RBCs bind dissolved gas reversibly, shifting the equilibrium so much more gas can dissolve and be transported.', 'trans', 11) + '</div>' },
  { t: 'q', id: 'T1', src: 'Gas transport p.4–5, 8', core: true,
    q: 'At a gas–liquid interface, what term describes the force causing dissolved gas molecules to escape from the liquid phase, and how does the O<sub>2</sub> diffusing capacity of a young adult change from rest to exercise?',
    o: ['Tension (equals partial pressure at equilibrium) · O2 diffusing capacity rises from 20 to 65 mL/min/mmHg',
        'Partial pressure · O2 diffusing capacity falls from 65 to 20 mL/min/mmHg during exercise',
        'Solubility coefficient (α) · O2 diffusing capacity stays constant at 25 mL/min/mmHg',
        'Osmotic reflection · O2 diffusing capacity rises from 5 to 20 mL/min/mmHg',
        'Graham’s tension · O2 diffusing capacity increases 65-fold from 20 to 1300 mL/min/mmHg'], a: 0,
    ex: 'Partial pressure drives gas into liquid, whereas tension drives gas out of the liquid phase (at equilibrium, partial pressure = tension). In a young adult, O2 diffusing capacity increases from 20 mL/min/mmHg at rest to 65 mL/min/mmHg during exercise due to capillary expansion (↑ area) and alveolar membrane thinning (↓ distance).' },
  { t: 'q', id: 'T2', src: 'Gas transport p.9, 11, 14',
    q: 'Which set of conditions is classified in the lecture as causing an <b>alveolar–capillary block</b> (rather than diminished alveolar surface area), and by what factor does hemoglobin in RBCs increase the O<sub>2</sub>-carrying capacity of blood?',
    o: ['Pulmonary edema, interstitial pulmonary fibrosis, and silicosis · increases O2 capacity 65-fold',
        'Pneumonia, atelectasis, lung tumor, and tuberculosis · increases O2 capacity 20-fold',
        'Bronchial asthma and pulmonary embolism · increases O2 capacity 210-fold',
        'Silicosis and atelectasis · increases O2 capacity 4-fold',
        'Interstitial pulmonary fibrosis and tuberculosis · increases O2 capacity 100-fold'], a: 0,
    ex: 'Slide 9 divides causes of decreased diffusion rate into diminished alveolar surface area (pneumonia, atelectasis, lung tumor, tuberculosis) and alveolar-capillary block (pulmonary edema, interstitial pulmonary fibrosis, silicosis). Slide 14 states that hemoglobin in RBCs increases blood O2-binding capacity 65-fold (1 Hb binds 4 O2 molecules).' },

  { t: 'c', id: 'T-C2', title: 'Hemoglobin A structure & molecular mechanism of oxygenation', src: 'Gas transport p.12–21',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Hemoglobin A (HbA)</b>: quaternary tetramer (&alpha;<sub>2</sub>&beta;<sub>2</sub>; &alpha; = 141 AA, &beta; = 146 AA), MW {{64,500 Da}} (5.5 nm), with 4 heme groups each containing ferrous iron (<b>Fe<sup>2+</sup></b>) coordinated to proximal histidine.</li>' +
      '<li><b>Reversible O<sub>2</sub> binding</b>: O<sub>2</sub> attachment to Fe<sup>2+</sup> is {{oxygenation}} (not oxidation &mdash; Fe<sup>2+</sup> valence does not change) and occurs in {{0.01 s}}.</li>' +
      '<li><b>Step 1 (first subunit)</b>: driven by the P<sub>O2</sub> gradient, the first O<sub>2</sub> binds the {{alpha chain}} first because its heme pocket is wider than that of the &beta;-subunit.</li>' +
      '<li><b>Step 2 (Fe<sup>2+</sup> movement)</b>: in deoxyHb, steric repulsion keeps Fe<sup>2+</sup> {{0.6 &Aring;}} above the porphyrin ring in a {{high-spin}} state; O<sub>2</sub> binding converts Fe<sup>2+</sup> to a {{low-spin}} state and pulls it into the flat porphyrin plane.</li>' +
      '<li><b>Step 3 (T &rarr; R transition)</b>: breaking of &alpha;&ndash;&alpha; and &alpha;&ndash;&beta; {{salt bridges}}, {{15&deg;}} rotation of &alpha;&beta; dimers, expulsion of 2,3-BPG from between the &beta;-chains, narrowing of the &beta;&ndash;&beta; gap (0.07 nm), and widening of the &beta;-subunit heme pocket.</li>' +
      '<li>This positive {{cooperativity}} (like tearing a block of 4 stamps) converts low-affinity deoxyHb (T-state) into high-affinity oxyHb (R-state) and yields a <b>sigmoidal</b> dissociation curve.</li></ul></div>' +
      CVS.fig('trans-heme', 'Iron atom movement into the flat porphyrin plane upon oxygen binding.', 'trans', 18) + '</div>' },
  { t: 'q', id: 'T3', src: 'Gas transport p.16–19', core: true,
    q: 'During the oxygenation of deoxyhemoglobin A (&alpha;<sub>2</sub>&beta;<sub>2</sub>), which sequence of molecular events occurs first and triggers the cooperative transition to oxyhemoglobin?',
    o: ['O2 binds the α-subunit first (wider heme pocket) → Fe2+ shifts from high-spin (0.6 Å above the ring) into the porphyrin plane (low-spin) → α–α and α–β salt bridges break, αβ rotates 15°, 2,3-BPG is expelled, and the β heme pocket opens',
        'O2 binds the β-subunit first (after 2,3-BPG covalently phosphorylates His146) → Fe2+ is oxidized to Fe3+ and moves 1.5 nm out of the porphyrin plane',
        '2,3-BPG binds between the α-subunits → αβ dimers rotate 45° → Fe2+ transitions from low-spin to high-spin',
        'CO2 binds to Fe2+ of the α-subunit → β–β subunits move 0.6 Å farther apart → salt bridges form to stabilize the R-state',
        'All four subunits bind O2 simultaneously without conformational change, producing a hyperbolic curve'], a: 0,
    ex: 'Because the α-subunit has a wider heme pocket than the β-subunit, O2 binds the α-subunit first. Fe2+ transitions from high-spin (0.6 Å out of plane due to steric repulsion) to low-spin in the flat porphyrin plane, pulling the histidine helix, breaking α–α and α–β salt bridges, rotating αβ dimers by 15°, expelling 2,3-BPG, bringing the β-chains 0.07 nm closer, and opening the β heme pocket.' },
  { t: 'tf', id: 'T4', src: 'Gas transport p.15',
    q: 'When oxygen binds to hemoglobin in red blood cells, the heme iron is oxidized from the ferrous state (Fe<sup>2+</sup>) to the ferric state (Fe<sup>3+</sup>) in 0.01 seconds.', a: false,
    ex: 'False. Binding of O2 to Hb is oxygenation, NOT oxidation: the iron atom must remain in the ferrous (Fe2+) oxidation state to bind O2 reversibly (oxidation to Fe3+ forms non-functional methemoglobin).' },
  { t: 'q', id: 'T5', src: 'Gas transport p.13',
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
  { t: 'q', id: 'T6', src: 'Gas transport p.22, 29–31', core: true,
    q: 'During strenuous exercise, lactic acid accumulation lowers blood pH and raises P<sub>50</sub> from 27 mmHg toward 48 mmHg. Which specific intramolecular interaction stabilizes deoxyhemoglobin in this state?',
    o: ['Protonated His146 (His HC3) of the β-subunit forms an ion pair with Asp94 (Asp FG1), stabilizing the T-state',
        'Deprotonated His146 forms a disulfide bond with Cys93 on the α-subunit, locking Hb in the R-state',
        'Lactic acid covalently esterifies Fe2+ in the heme ring, lowering P50 to 16 mmHg',
        'H+ ions displace Fe2+ from the porphyrin ring, converting sigmoidal binding into hyperbolic binding',
        'Low pH stimulates 2,3-BPG synthesis to covalently cross-link the α-subunits'], a: 0,
    ex: 'A decrease in pH (↑ [H+]) protonates His146 (His HC3) of the β-subunits, which then forms a salt bridge / ion pair with Asp94 (Asp FG1) on the same β-chain. This stabilizes deoxyhemoglobin in the low-affinity T-state, shifting the O2 dissociation curve to the right (P50 > 27 mmHg) and enhancing O2 release to exercising muscle.' },
  { t: 'q', id: 'T7', src: 'Gas transport p.23–25', core: true,
    q: 'Which statement accurately describes 2,3-bisphosphoglycerate (2,3-BPG) and the factors that alter its concentration in red blood cells?',
    o: ['It is a highly charged anion from anaerobic glycolysis that binds β-chains of deoxyHb non-covalently (1:1); it increases with thyroid hormone, growth hormone, androgens, anemia, hypoxia, and high altitude, but decreases in acidosis',
        'It is produced by the mitochondrial citric acid cycle in RBCs and binds covalently to α-chains; it increases in acidosis and decreases at high altitude',
        'It binds oxyhemoglobin in a 4:1 ratio to shift the O2 dissociation curve to the left (P50 < 27 mmHg)',
        'It is decreased by thyroid hormone, growth hormone, and androgens, and increased by respiratory acidosis',
        'It binds equally strongly to adult HbA (α2β2), fetal HbF (α2γ2), and monomeric myoglobin'], a: 0,
    ex: '2,3-BPG is synthesized from 1,3-BPG during anaerobic glycolysis in RBCs, binds non-covalently 1:1 between the β-chains of deoxyHb, lowers O2 affinity (right shift), is increased by thyroid hormone, GH, androgens, exercise, anemia, hypoxia, and high altitude, and is decreased by acidosis.' },
  { t: 'open', id: 'T8', src: 'Gas transport p.25–27',
    q: 'Trace the short-term ventilatory response and the RBC acclimatization response when a person ascends to high altitude.',
    ans: 'At high altitude, lower atmospheric PO2 decreases pressure gradients and causes hypobaric hypoxia. Peripheral chemoreceptors (carotid and aortic bodies) sense the low PaO2 and trigger hyperventilation, which blows off CO2 and causes respiratory alkalosis. During acclimatization, hypoxia and alkalosis stimulate RBCs to increase 2,3-BPG (along with increased erythropoiesis/Hb), shifting the Hb-O2 dissociation curve to the right so more O2 is unloaded to tissues despite the reduced arterial PO2.' },

  { t: 'c', id: 'T-C4', title: 'Hemoglobin variants, CO poisoning, abnormal hemoglobins & myoglobin', src: 'Gas transport p.34–39',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Protein / Variant</th><th>Subunits / Structure</th><th>Key physiological or clinical feature</th></tr></thead><tbody>' +
      '<tr><td><b>Embryonic Hb</b></td><td>{{Gower 1 (&zeta;2&epsilon;2), Gower 2 (&alpha;2&epsilon;2), Portland (&zeta;2&gamma;2)}}</td><td>Produced in the embryonic yolk sac</td></tr>' +
      '<tr><td><b>Fetal Hb (HbF)</b></td><td>{{&alpha;2&gamma;2}} (&lt;1% in adults)</td><td>Does <b>not bind (or loosely binds) 2,3-BPG</b> &rarr; <b>left shift</b> &amp; higher O<sub>2</sub> affinity than maternal HbA</td></tr>' +
      '<tr><td><b>Adult HbA / HbA<sub>2</sub> / HbA<sub>1c</sub></b></td><td>HbA &alpha;<sub>2</sub>&beta;<sub>2</sub> (~{{97%}}), HbA<sub>2</sub> {{&alpha;2&delta;2}} (2–2.5%)</td><td>HbA<sub>1c</sub> (&alpha;<sub>2</sub>&beta;<sub>2</sub> + glucose) rises up to 12% in diabetes mellitus</td></tr>' +
      '<tr><td><b>Carboxyhemoglobin</b></td><td>Hb bound to CO at Fe<sup>2+</sup></td><td>CO binds Hb with {{210 times}} higher affinity than O<sub>2</sub> &rarr; left shift &amp; severe tissue hypoxia</td></tr>' +
      '<tr><td><b>MetHb &amp; SulfHb</b></td><td>MetHb: {{Fe3+}} replaces Fe<sup>2+</sup></td><td>SulfHb: sulfur replaces ferrous atom after exposure to {{hydroxylamine sulfate}} ((NH<sub>2</sub>OH)<sub>2</sub>H<sub>2</sub>SO<sub>4</sub>)</td></tr>' +
      '<tr><td><b>Myoglobin</b> (heart &amp; skeletal muscle)</td><td>Monomer: {{153 amino acids}}, MW {{16,700 Da}}, 1 heme</td><td><b>Rectangular {{hyperbolic}}</b> curve (higher affinity than HbA, tight binding at low &amp; high P<sub>O2</sub>), <b>no cooperativity</b>, does <b>not</b> bind H<sup>+</sup> or CO<sub>2</sub></td></tr></tbody></table></div></div>' +
      CVS.fig('trans-myoglobin', 'Myoglobin monomer structure and its oxygen dissociation curve compared with HbA.', 'trans', 38) + '</div>' },
  { t: 'q', id: 'T9', src: 'Gas transport p.35–36', core: true,
    q: 'Why does fetal hemoglobin (HbF) have a higher affinity for oxygen (left-shifted dissociation curve) than maternal adult hemoglobin (HbA), and what is its subunit composition?',
    o: ['HbF is α2γ2 and does not bind (or only loosely binds) 2,3-BPG, keeping it in a higher-affinity state to extract O2 across the placenta',
        'HbF is ζ2ε2 (Gower 1) and binds two molecules of 2,3-BPG covalently per tetramer',
        'HbF is α2δ2 and contains ferric iron (Fe3+) which binds O2 210 times tighter than Fe2+',
        'HbF is a monomeric protein of 153 amino acids with a rectangular hyperbolic curve',
        'HbF has a lower affinity for O2 (P50 = 48 mmHg) because γ-chains form stronger salt bridges with Asp94'], a: 0,
    ex: 'Fetal hemoglobin (HbF, α2γ2) replaces the β-chains of HbA (α2β2) with γ-chains that lack the positively charged residues needed to bind 2,3-BPG tightly. Because HbF does not bind (or loosely binds) 2,3-BPG, its O2-Hb dissociation curve is shifted to the left (higher O2 affinity than HbA), enabling O2 transfer from mother to fetus.' },
  { t: 'q', id: 'T10', src: 'Gas transport p.34, 36–37', core: true,
    q: 'Which statement correctly matches an abnormal hemoglobin derivative with its mechanism and chemical cause?',
    o: ['Carboxyhemoglobin: CO binds heme Fe2+ with 210× the affinity of O2 (left shift) · Methemoglobin: Fe3+ replaces Fe2+ · Sulfhemoglobin: sulfur atom replaces ferrous iron after exposure to hydroxylamine sulfate',
        'Carboxyhemoglobin: CO2 binds N-terminal globin with 210× the affinity of O2 (right shift) · Methemoglobin: sulfur replaces Fe2+',
        'Methemoglobin: Fe2+ is reduced to Fe+ · Sulfhemoglobin: caused by nitric oxide inhalation',
        'Carboxyhemoglobin: shifts the O2 dissociation curve strongly to the right (P50 = 48 mmHg) to increase tissue O2 delivery',
        'Sulfhemoglobin: glucose binds α2β2 up to 12% in patients exposed to hydroxylamine sulfate'], a: 0,
    ex: 'CO binds to heme Fe2+ with 210 times the affinity of O2 to form carboxyhemoglobin, shifting the O2 dissociation curve to the left and causing tissue hypoxia. Methemoglobin has ferric (Fe3+) in place of ferrous (Fe2+) iron. Sulfhemoglobin has a sulfur atom replacing the ferrous atom after exposure to sulfur-containing corrosive agents such as hydroxylamine sulfate ((NH2OH)2H2SO4).' },
  { t: 'q', id: 'T11', src: 'Gas transport p.38–39', core: true,
    q: 'How does <b>myoglobin</b> differ structurally and functionally from <b>hemoglobin A</b>?',
    o: ['Myoglobin is a 153-amino-acid monomer (MW 16,700 Da) in heart and skeletal muscle with a rectangular hyperbolic O2 curve (higher affinity than HbA), no cooperativity, and no binding to H+ or CO2',
        'Myoglobin is a 4-subunit tetramer (MW 64,500 Da) in RBCs with a sigmoidal curve and a strong Bohr effect',
        'Myoglobin has lower O2 affinity than HbA at low PO2, allowing it to unload O2 into arterial plasma',
        'Myoglobin binds 2,3-BPG in a 1:1 ratio to shift its hyperbolic curve into a sigmoidal curve during exercise',
        'Myoglobin contains 4 heme groups on a single 141-amino-acid polypeptide chain'], a: 0,
    ex: 'Myoglobin is a single-chain monomeric globular protein (153 AA, MW 16,700 Da, 1 heme) located in heart and skeletal muscle cells. Unlike tetrameric HbA (α2β2, MW 64,500 Da, sigmoidal curve), myoglobin has a rectangular hyperbolic O2 dissociation curve (tight binding at both low and high PO2, higher O2 affinity than HbA), exhibits no allosteric cooperativity, and does not bind H+ or CO2.' },

  { t: 'c', id: 'T-C5', title: 'CO2 transport in blood, Bohr effect & Haldane effect', src: 'Gas transport p.40–43',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Three forms of CO<sub>2</sub> in blood</b> (Gas transport p.41): (1) {{7%}} physically dissolved in plasma; (2) {{23%}} bound to globin N-terminal &minus;NH<sub>2</sub> as <b>carbaminohemoglobin</b>; (3) {{70%}} converted to <b>bicarbonate (HCO<sub>3</sub><sup>&minus;</sup>)</b> in RBCs (<i>note: Gas exchange p.33 lists 5% dissolved, 3% carbaminoHb, and &gt;90% HCO<sub>3</sub><sup>&minus;</sup>; in both lectures HCO<sub>3</sub><sup>&minus;</sup> is the major form</i>).</li>' +
      '<li><b>RBC bicarbonate pathway &amp; chloride shift</b>: RBC {{carbonic anhydrase}} catalyzes CO<sub>2</sub> + H<sub>2</sub>O &rightleftharpoons; H<sub>2</sub>CO<sub>3</sub> &rightleftharpoons; H<sup>+</sup> + HCO<sub>3</sub><sup>&minus;</sup>; H<sup>+</sup> is buffered by deoxyHb (HHb) while HCO<sub>3</sub><sup>&minus;</sup> exits the RBC in exchange for {{Cl&minus;}} entering.</li>' +
      '<li><b>{{Bohr effect}}</b> (occurs in {{systemic capillaries}}): adding metabolically produced <b>H<sup>+</sup> and CO<sub>2</sub> decreases O<sub>2</sub>–Hb affinity</b> (right shift), promoting O<sub>2</sub> release to tissues.</li>' +
      '<li><b>{{Haldane effect}}</b> (occurs in <b>alveolar capillaries</b>): <b>oxygenation of Hb decreases its affinity for CO<sub>2</sub> and H<sup>+</sup></b>, releasing H<sup>+</sup> to combine with HCO<sub>3</sub><sup>&minus;</sup> &rarr; H<sub>2</sub>CO<sub>3</sub> &rarr; CO<sub>2</sub> + H<sub>2</sub>O for exhalation.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('trans-co2', 'Three mechanisms of carbon dioxide transport in red blood cells and plasma.', 'trans', 41) + CVS.fig('trans-bohr-haldane', 'Coupling of oxygen and carbon dioxide transport between lungs and tissues.', 'trans', 43) + '</div></div>' },
  { t: 'q', id: 'T12', src: 'Gas transport p.40–41; Gas exchange p.33', core: true,
    flag: 'Slide conflict: Gas Transport p.41 gives 7% dissolved, 23% carbaminohemoglobin, and 70% HCO3−, whereas Gas Exchange p.33 gives 5% dissolved, 3% carbaminohemoglobin, and 90+% HCO3−. Both agree that HCO3− is the major form.',
    q: 'What is the <b>major form</b> in which CO<sub>2</sub> is transported in blood, and which enzyme and ion-exchange process inside red blood cells generate it?',
    o: ['Bicarbonate ion (HCO3−, 70% in Gas Transport / 90+% in Gas Exchange), formed via RBC carbonic anhydrase with HCO3− exported in exchange for Cl− (chloride shift)',
        'Carbaminohemoglobin (70%), formed by carbonic anhydrase attaching CO2 to heme Fe2+ in exchange for Na+',
        'Dissolved CO2 gas in plasma (70%), driven by the Haldane pump across capillary endothelium',
        'Carbonic acid bound to plasma albumin (90%), exchanged for K+ across the RBC membrane',
        'Carboxyhemoglobin (23%), catalyzed by 2,3-BPG mutase in plasma'], a: 0,
    ex: 'Most CO2 in blood is transported as bicarbonate (HCO3−: 70% on Gas Transport p.41 [with 23% carbaminoHb and 7% dissolved], or 90+% on Gas Exchange p.33 [with 3% carbaminoHb and 5% dissolved]). Inside RBCs, carbonic anhydrase converts CO2 + H2O → H2CO3 → H+ + HCO3−; HCO3− diffuses out into plasma in exchange for Cl− (the chloride shift), while deoxyHb buffers H+.' },
  { t: 'q', id: 'T13', src: 'Gas transport p.43', core: true,
    q: 'Which statement correctly distinguishes the <b>Bohr effect</b> from the <b>Haldane effect</b>?',
    o: ['Bohr effect (systemic capillaries): adding H+ and CO2 lowers O2–Hb affinity to unload O2 · Haldane effect (alveolar capillaries): oxygenation of Hb lowers CO2–Hb and HHb affinity to unload CO2',
        'Bohr effect (alveolar capillaries): oxygenation of Hb increases CO2 binding · Haldane effect (systemic capillaries): high CO2 increases O2–Hb affinity',
        'Bohr effect occurs only in myoglobin · Haldane effect occurs only in fetal hemoglobin (HbF)',
        'Bohr effect is the exchange of Cl− for HCO3− across the RBC membrane · Haldane effect is the binding of 2,3-BPG to β-chains',
        'Both effects describe the leftward shift of the O2 dissociation curve during exercise'], a: 0,
    ex: 'On slide 43, the Bohr effect operates in systemic capillaries: adding H+ and CO2 from tissue metabolism decreases O2–Hb affinity, promoting O2 release to tissues. The Haldane effect operates in alveolar capillaries: oxygenation of Hb (forming HbO2) decreases the affinity of Hb for CO2 and H+, promoting conversion of HCO3− + H+ → H2CO3 → CO2 + H2O and unloading of CO2 into the alveoli.' }
]});
