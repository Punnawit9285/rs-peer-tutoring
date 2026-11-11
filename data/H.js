/* Section H: Histology of the respiratory system (Histology handout, slides 1–46). */
CVS.add({ id: 'H', short: 'Histology', title: 'Histology of the Respiratory System', kind: 'Lecture',
  blurb: 'Epithelial transitions from nasal vestibule to alveoli, cartilage and smooth muscle along the bronchial tree, Club (Clara) cells, Type I and II pneumocytes, pores of Kohn, the five-layer air-blood barrier, and pleural mesothelium.',
  items: [
  { t: 'c', id: 'H-C1', title: 'Conducting vs respiratory portions and upper-tract epithelia', src: 'Histology p.2–15',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Air-conducting portion</b>: nose → {{terminal bronchioles}}. <b>Respiratory portion</b>: {{respiratory bronchioles}} → alveoli.</li>' +
      '<li><b>Nasal vestibule</b>: {{keratinized stratified squamous}} epithelium.</li>' +
      '<li><b>Respiratory mucosa</b> (most of nasal cavity, paranasal sinuses, nasopharynx, larynx): {{pseudostratified ciliated columnar}} epithelium with {{goblet cells}} (= respiratory epithelium).</li>' +
      '<li><b>Olfactory mucosa</b> (upper part of {{superior nasal concha}}, upper nasal septum, {{sphenoethmoidal recess}}): pseudostratified columnar with {{non-motile cilia}}, numerous nuclei, {{no goblet cells}}, and {{Bowman glands}} in the lamina propria.</li>' +
      '<li><b>Oropharynx</b> (with {{Waldeyer ring}} MALT), oral side of epiglottis, and {{true vocal cords}}: {{non-keratinized stratified squamous}} epithelium; laryngeal side of epiglottis has respiratory epithelium over an elastic cartilage core.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('histo-resp', 'Respiratory mucosa: ciliated pseudostratified columnar epithelium.', 'histo', 7) +
      CVS.fig('histo-olfactory', 'Olfactory mucosa with non-motile olfactory cilia and serous glands in the lamina propria.', 'histo', 8) + '</div></div>' +
      CVS.fig('histo-epiglottis', 'Epiglottis: stratified squamous on the oral (superior) surface vs respiratory epithelium on the laryngeal (inferior) surface.', 'histo', 13) },
  { t: 'q', id: 'H1', src: 'AC80', core: true, keep: true,
    q: 'Which type of epithelium is found at superior and inferior of epiglottis? <span class="muted">Choose two.</span>',
    o: ['Simple squamous epithelium', 'Stratified squamous epithelium', 'Simple columnar epithelium', 'Stratified columnar epithelium', 'Pseudostratified columnar epithelium'], a: [1,4],
    ex: 'The lingual (upper, anterior) surface and the top of the laryngeal surface meet swallowed food, so they carry stratified squamous epithelium. The lower laryngeal surface faces the airway and carries ciliated pseudostratified columnar (respiratory) epithelium.',
    flag: 'The recall listed “stratified squamous” twice (options 2 and 4); option 4 is shown as stratified columnar. AC80 key: 2 and 5.' },
  { t: 'q', id: 'H2', src: 'AC79', core: true, keep: true,
    q: 'This picture shows the structures in the larynx using the laryngoscope. Which is the epithelial lining of the labelled structure from this picture?',
    fig: CVS.fig('ac79-laryngoscope', 'AC79: laryngoscopic view, arrow on the labelled structure.', 'ac79', 5),
    o: ['Stratified squamous epithelium', 'Stratified columnar epithelium', 'Psuedostratified columnar epithelium', 'Simple squamous epithelium', 'Simple columnar epithelium'], a: 0,
    ex: 'The arrow is on the free upper edge of the epiglottis, the part that meets food: stratified squamous epithelium.' },
  { t: 'q', id: 'H3', src: 'AC81', keep: true,
    q: 'What is the type of epithelium at the red arrow?',
    fig: CVS.fig('ac81-epiglottis', 'AC81: specimen of the larynx, red arrow.', 'ac81', 6),
    o: ['Pseudostratified columnar', 'Stratified squamous', 'Stratified columnar', 'Simple squamous', 'Simple columnar'], a: 0,
    ex: 'The arrow is on the laryngeal (posterior) surface of the epiglottis, below its free edge, where respiratory epithelium (ciliated pseudostratified columnar) lines the airway.',
    flag: 'Raw student key. The answer depends on exactly where the arrow sits: the lingual surface and the free edge are stratified squamous; the lower laryngeal surface is pseudostratified columnar.' },
  { t: 'q', id: 'H4', src: 'AC79', core: true, keep: true,
    q: 'Which structure doesn’t contain the respiratory epithelium?',
    o: ['Nostril', 'Lateral wall of superior nasal meatus', 'Lateral wall of medial meatus', 'Frontal sinus', 'Vestibular folds'], a: 0,
    ex: 'The nostril (nasal vestibule) is lined by skin: keratinized stratified squamous epithelium with hairs (vibrissae). The meatuses, sinuses and vestibular folds carry respiratory epithelium.' },
  { t: 'q', id: 'H5', src: 'AC79 spot', keep: true,
    q: 'Identify this epithelium.',
    fig: CVS.fig('ac79s-st23', 'AC79 spot test, station 23.', 'ac79s', 25),
    o: ['Stratified squamous epithelium, moist type', 'Stratified squamous epithelium, dried type', 'Pseudostratified columnar epithelium', 'Stratified cuboidal epithelium'], a: 0,
    ex: 'Many layers of cells that flatten toward the surface without a keratin layer: non-keratinized (moist) stratified squamous epithelium.' },
  { t: 'q', id: 'H6', src: 'AC79 spot', core: true, keep: true,
    q: 'Where can this type of epithelium be found?',
    fig: CVS.fig('ac79s-st23', 'AC79 spot test, station 23.', 'ac79s', 25), figRef: 'H5',
    o: ['Nasal vestibule', 'Roof of nasal cavity', 'True vocal cord', 'Terminal bronchiole'], a: 2,
    ex: 'The true vocal cords take constant mechanical stress, so they carry non-keratinized stratified squamous epithelium. The vestibule is keratinized (skin), the roof is olfactory and the terminal bronchiole is simple cuboidal.',
    flag: 'AC80 used the same kind of slide and keyed oropharynx, which is also lined by moist stratified squamous epithelium.' },
  { t: 'q', id: 'H7', src: 'AC79 spot', keep: true,
    q: 'Where can this slide section be found?',
    fig: CVS.fig('ac79s-st24', 'AC79 spot test, station 24.', 'ac79s', 26),
    o: ['Piriform recess', 'Sphenoethmoidal recess', 'Pharyngeal recess', 'Costodiaphragmatic recess'], a: 1,
    ex: 'A tall epithelium over a lamina propria packed with glands is olfactory mucosa, found in the roof of the nasal cavity around the superior concha and the sphenoethmoidal recess.' },
  { t: 'q', id: 'H8', src: 'AC79 spot', keep: true,
    q: 'What is the main function of this structure A?',
    fig: CVS.fig('ac79s-st24', 'AC79 spot test, station 24.', 'ac79s', 26), figRef: 'H7',
    o: ['Transmit odorants', 'Immune surveillance', 'Enzymatic secretion', 'Mucus formation'], a: 0,
    ex: 'A points to a gland in the lamina propria of olfactory mucosa: a Bowman (olfactory) gland. Its watery secretion dissolves odorants so they reach the receptor cilia, then washes them away.',
    flag: 'Key from the AC79 spot short answer key; “transmit odorants” means dissolving odorants and carrying them to the olfactory receptors.' },
  { t: 'q', id: 'H9', src: 'AC81 spot', keep: true,
    q: 'Identify this structure (arrow).',
    fig: CVS.fig('ac81s-st14', 'AC81 spot test, station 14.', 'ac81s', 15),
    o: ['Motile cilia', 'Non motile cilia', 'Stereo cilia', 'Microfilament'], a: 1,
    ex: 'This is olfactory epithelium: the hair-like processes on the surface are the long non-motile cilia of the olfactory receptor neurons.' },
  { t: 'q', id: 'H10', src: 'AC81 spot', core: true, keep: true,
    q: 'Where this tissue can be found?',
    fig: CVS.fig('ac81s-st14', 'AC81 spot test, station 14.', 'ac81s', 15), figRef: 'H9',
    o: ['Maxillary sinus', 'Oropharyng', 'Upper part of nasal cavity', 'Vocal fold'], a: 2,
    ex: 'Olfactory epithelium lines the roof of the nasal cavity: the upper septum and the superior concha.' },
  { t: 'c', id: 'H-C2', title: 'Trachea, intrapulmonary bronchi and regular bronchioles', src: 'Histology p.16–23',
    html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>Feature</th><th>Trachea &amp; primary bronchi</th><th>Intrapulmonary bronchus</th><th>Regular bronchiole</th></tr></thead><tbody>' +
      '<tr><td><b>Hyaline cartilage</b></td><td>{{C-shaped}} ring</td><td>{{Discontinuous}} plates</td><td>{{Absent}} (none)</td></tr>' +
      '<tr><td><b>Smooth muscle</b></td><td>Posterior {{trachealis}} muscle</td><td>Continuous circular layer between mucosa and cartilage</td><td>{{Prominent circular}} muscularis layer</td></tr>' +
      '<tr><td><b>Epithelium</b></td><td>Respiratory epithelium on a {{thick basement membrane}}</td><td>Respiratory epithelium</td><td>Pseudostratified ciliated columnar with {{rare or no goblet cells}}</td></tr>' +
      '<tr><td><b>Glands &amp; outer layer</b></td><td>Seromucous glands; shares {{adventitia}} with {{esophagus}}</td><td>Submucosal seromucous glands</td><td>{{No seromucous glands}}</td></tr></tbody></table></div>' +
      CVS.fig('histo-airways', 'Cross-sectional comparison of trachea, intrapulmonary bronchus, and regular bronchiole.', 'histo', 22) },
  { t: 'q', id: 'H11', src: 'AC79 spot', keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st19', 'AC79 spot test, station 19.', 'ac79s', 21),
    o: ['Intrapulmonary bronchus', 'Nasopharynx', 'Esophagus', 'Trachea'], a: 3,
    ex: 'A is the wide lumen supported by a C-shaped hyaline cartilage ring, with the esophagus behind it: the trachea.' },
  { t: 'q', id: 'H12', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st19', 'AC79 spot test, station 19.', 'ac79s', 21), figRef: 'H11',
    o: ['Trachealis muscle', 'Adventitia layer of trachea', 'Muscularis externa of trachea', 'Tracheal cartilage'], a: 1,
    ex: 'B is the outermost loose connective tissue around the trachea: the adventitia. The trachea has no muscularis externa.' },
  { t: 'q', id: 'H13', src: 'AC81 spot', keep: true,
    q: 'Identify this structure.',
    fig: CVS.fig('ac81s-st13', 'AC81 spot test, station 13.', 'ac81s', 14),
    o: ['Regular bronchiole', 'Terminal bronchiole', 'Intrapulmonary bronchiole', 'Respiratory bronchiole'], a: 0,
    ex: 'A folded epithelium with a ring of smooth muscle, no cartilage and no glands, and no alveoli opening from the wall: a (regular) bronchiole.' },
  { t: 'q', id: 'H14', src: 'AC81 spot', keep: true,
    q: 'Identify structure A.',
    fig: CVS.fig('ac81s-st13', 'AC81 spot test, station 13.', 'ac81s', 14), figRef: 'H13',
    o: ['Smooth muscle', 'Hyalin cartilage', 'Dense connective tissue'], a: 0,
    ex: 'A is the band of smooth muscle around the bronchiole; bronchioles have no cartilage.' },
  { t: 'c', id: 'H-C3', title: 'Terminal and respiratory bronchioles: Club (Clara) cells', src: 'Histology p.24–29',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Terminal bronchioles</b> (end of conducting portion): lined by {{simple columnar}} to {{simple cuboidal}} ciliated epithelium containing non-ciliated {{Clara cells}} ({{Club cells}}).</li>' +
      '<li><b>Morphology</b>: {{dome-shaped}} apical projection with short blunt {{microvilli}} (no cilia).</li>' +
      '<li><b>Four functions</b>: (1) secrete {{lipoprotein}} that helps surfactant prevent luminal adhesion, (2) act as {{stem-cell-like}} progenitors, (3) {{detoxify}} inhaled xenobiotics, and (4) secrete biomarker {{CC16}} (secretory protein).</li>' +
      '<li><b>Respiratory bronchioles</b> (start of gas exchange): cuboidal wall interrupted by outpocketing alveoli. Clinical airway disorders include bronchitis, COPD, and asthma.</li></ul></div>' +
      CVS.fig('histo-clara', 'Terminal bronchiole epithelium showing non-ciliated apical projections among ciliated cells.', 'histo', 24) + '</div>' },
  { t: 'q', id: 'H15', src: 'AC81', core: true, keep: true,
    q: 'What is the characteristic of the respiratory bronchiole?',
    o: ['Absence of Clara cells', 'Diameter 1-2 mm', 'Simple cuboidal', 'The smallest airway that has hyaline cartilage'], a: 2,
    ex: 'Respiratory bronchioles are lined by simple cuboidal epithelium (with club/Clara cells) interrupted by alveoli. Cartilage ends at the bronchi; bronchioles are under about 1 mm.' },
  { t: 'q', id: 'H16', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st20', 'AC79 spot test, station 20.', 'ac79s', 22),
    o: ['Primary bronchiole', 'Respiratory bronchiole', 'Terminal bronchiole', 'Alveolar duct'], a: 1,
    ex: 'In the inset, B is a short tube with cuboidal lining whose wall is interrupted by alveoli: a respiratory bronchiole.' },
  { t: 'q', id: 'H17', src: 'AC80 spot', keep: true,
    q: 'Identify letter “B”.',
    fig: CVS.fig('ac80s-lungsec', 'AC80 spot test (recalled image): lung section with labels A–D.', 'ac80s', 25),
    o: ['Terminal bronchiole', 'Respiratory bronchiole', 'Intrapulmonary bronchi', 'Alveolar duct'], a: 1,
    ex: 'B is a small airway whose wall is already broken by alveoli: a respiratory bronchiole.' },
  { t: 'c', id: 'H-C4', title: 'Alveolar ducts, alveoli, pneumocytes, dust cells and pores of Kohn', src: 'Histology p.30–40',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Alveolar ducts &amp; sacs</b>: lined by {{simple squamous}} epithelium with smooth muscle knobs at alveolar openings.</li>' +
      '<li><b>Pneumocyte Type I</b>: flattened squamous cells making up {{40%}} of alveolar cells but covering {{90–95%}} of the surface area for gas exchange.</li>' +
      '<li><b>Pneumocyte Type II</b> (septal cell): {{simple cuboidal}} cells with lamellar bodies making up {{60%}} of cells but only {{5–10%}} of surface area; synthesize {{pulmonary surfactant}} (lowering surface tension by Laplace law) and divide as progenitors for Type I and II cells.</li>' +
      '<li><b>Dust cells</b>: {{alveolar macrophages}} in the septa and airspaces.</li>' +
      '<li><b>Pores of Kohn</b>: inter-alveolar openings providing {{collateral circulation}} to equalize pressure and prevent {{atelectasis}} (lung collapse).</li>' +
      '<li><b>Alveolar pathology</b>: infant {{RDS}} (surfactant deficiency), emphysema, pulmonary edema, lobar pneumonia, and pneumoconioses (anthracosis, silicosis, asbestosis).</li></ul></div>' +
      CVS.fig('histo-alveoli', 'Type II pneumocyte secreting lamellar bodies, with Laplace law and alveolar stability.', 'histo', 35) + '</div>' },
  { t: 'q', id: 'H18', src: 'AC79 spot', keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st20', 'AC79 spot test, station 20.', 'ac79s', 22),
    o: ['Primary bronchiole', 'Respiratory bronchiole', 'Terminal bronchiole', 'Alveolar duct'], a: 3,
    ex: 'A (red dots) traces a passage whose wall is made entirely of alveolar openings, with only knobs of smooth muscle between them: an alveolar duct.' },
  { t: 'q', id: 'H19', src: 'AC80 spot', keep: true,
    q: 'Identify letter “C”.',
    fig: CVS.fig('ac80s-lungsec', 'AC80 spot test (recalled image): lung section with labels A–D.', 'ac80s', 25),
    o: ['Alveoli', 'Alveolar sac', 'Alveolar duct', 'Pleural sac'], a: 1,
    ex: 'C marks a blind-ended cluster of alveoli at the end of an alveolar duct: an alveolar sac.' },
  { t: 'q', id: 'H20', src: 'AC79 · AC80 · AC81', core: true, keep: true,
    q: 'Premature newborn develops respiratory distress syndrome. What is the main cause of this syndrome?',
    o: ['Underdeveloped pneumocyte type 2', 'Underdeveloped dust cell', 'Underdeveloped clara', 'Underdeveloped pneumocyte type 1'], a: 0,
    ex: 'Neonatal RDS is surfactant deficiency: type II pneumocytes are not yet mature enough to make enough surfactant (dipalmitoylphosphatidylcholine), so alveoli collapse.',
    flag: 'AC79 (immature type II pneumocytes) and AC81 (surfactant deficiency) asked the same.' },
  { t: 'q', id: 'H21', src: 'AC79 spot', core: true, keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st21', 'AC79 spot test, station 21.', 'ac79s', 23),
    o: ['Type I pneumocyte', 'Type II pneumocyte', 'Clara cell', 'Dust cell'], a: 1,
    ex: 'A points to the rounded, cuboidal cells bulging into the alveolar corners: type II pneumocytes.' },
  { t: 'q', id: 'H22', src: 'AC79 spot', keep: true,
    q: 'What is the function of structure A?',
    fig: CVS.fig('ac79s-st21', 'AC79 spot test, station 21.', 'ac79s', 23), figRef: 'H21',
    o: ['Secrete surfactant', 'Immune surveillance', 'Secrete lubricant', 'Facilitation of gas perfusion in lungs'], a: 0,
    ex: 'Type II pneumocytes secrete surfactant and are the progenitors that replace type I cells.' },
  { t: 'q', id: 'H23', src: 'AC80 spot', keep: true,
    q: 'Identify this cell.',
    fig: CVS.fig('ac80s-dustcell', 'AC80 spot test (recalled image): arrows on cells in the alveolar wall.', 'ac80s', 27),
    o: ['Pneumocyte II', 'Clara cell', 'CD4+ cytotoxic B cell', 'Dust cell'], a: 3,
    ex: 'The arrows point to cells sitting free in the alveolar wall and lumen: alveolar macrophages (dust cells).' },
  { t: 'q', id: 'H24', src: 'AC80 spot', keep: true,
    q: 'What is the function?',
    fig: CVS.fig('ac80s-dustcell', 'AC80 spot test (recalled image): arrows on cells in the alveolar wall.', 'ac80s', 27), figRef: 'H23',
    o: ['Surfactant', 'Protein cc16', 'Vitamin B1', 'Macrophage-like'], a: 3,
    ex: 'Dust cells are macrophages: they phagocytose inhaled particles and microbes. CC16 is the club cell protein; surfactant comes from type II cells.' },
  { t: 'c', id: 'H-C5', title: 'The air-blood barrier and the lung pleurae', src: 'Histology p.41–45',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Five layers of the air-blood barrier</b> (from alveolar lumen to erythrocyte, p.42):' +
      '<ol><li>{{Alveolar fluid}} + {{surfactant}} layer</li>' +
      '<li>{{Alveolar epithelium}} (Type I pneumocyte cytoplasm)</li>' +
      '<li>Fused {{basal lamina x 2}} (of epithelial and endothelial layers)</li>' +
      '<li>Capillary {{endothelium}}</li>' +
      '<li>{{Plasma membrane}} of the {{red blood cell}} (RBC)</li></ol></li>' +
      '<li><b>Lung pleurae</b> (visceral and parietal): serous membranes lined by {{mesothelium}} (simple squamous) over connective tissue that produces {{lubricant fluid}}.</li>' +
      '<li><b>Pleural pathology</b>: pneumothorax, hydrothorax, hemothorax, and asbestos-related {{mesothelioma}}.</li></ul></div>' +
      CVS.fig('histo-barrier', 'Structure of the alveolocapillary (air-blood) barrier between alveolar air and capillary blood.', 'histo', 41) + '</div>' },
  { t: 'q', id: 'H25', src: 'AC79 spot', keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st22', 'AC79 spot test, station 22.', 'ac79s', 24),
    o: ['Type I pneumocyte', 'Clara cell', 'Mesothelial cell of parietal cavity', 'Mesothelial cell of visceral cavity'], a: 3,
    ex: 'A is the thin surface layer on the outside of lung tissue: the mesothelium of the visceral pleura.',
    flag: 'Options as recalled: “visceral cavity” means the visceral pleura covering the lung.' },
  { t: 'q', id: 'H26', src: 'AC79 spot', keep: true,
    q: 'What is the function of structure A?',
    fig: CVS.fig('ac79s-st22', 'AC79 spot test, station 22.', 'ac79s', 24), figRef: 'H25',
    o: ['Secrete surfactant', 'Immune surveillance', 'Secrete lubricant', 'Facilitation of gas perfusion in lungs'], a: 2,
    ex: 'Pleural mesothelium secretes the thin serous fluid that lubricates the two pleural layers.' }
]});
