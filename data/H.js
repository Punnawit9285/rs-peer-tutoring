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
  { t: 'q', id: 'H1', src: 'Histology p.6, 8', core: true,
    q: 'Which feature distinguishes olfactory mucosa from typical respiratory mucosa?',
    o: ['Pseudostratified columnar epithelium with non-motile cilia, numerous nuclei, no goblet cells, and Bowman glands', 'Keratinized stratified squamous epithelium with sebaceous glands', 'Simple cuboidal epithelium with dome-shaped Club cells', 'Non-keratinized stratified squamous epithelium over hyaline cartilage', 'Abundant goblet cells with motile kinocilia at the inferior nasal concha'], a: 0,
    ex: 'Olfactory mucosa (at the upper superior nasal concha, upper nasal septum, and sphenoethmoidal recess) has non-motile cilia, numerous nuclei, no goblet cells, and serous Bowman glands.' },
  { t: 'q', id: 'H2', src: 'Histology p.10–14', core: true,
    q: 'Which set of respiratory tract surfaces is lined by non-keratinized stratified squamous epithelium?',
    o: ['Oropharynx, oral side of the epiglottis, and true vocal cords', 'Nasal vestibule, nasopharynx, and trachea', 'Laryngeal side of the epiglottis, false vocal cords, and bronchi', 'Superior nasal concha, sphenoethmoidal recess, and nasal septum', 'Terminal bronchioles, respiratory bronchioles, and alveolar ducts'], a: 0,
    ex: 'Surfaces exposed to mechanical abrasion from food or high-velocity phonation—oropharynx, oral (superior) surface of the epiglottis, and true vocal cords—are lined by non-keratinized stratified squamous epithelium. The nasal vestibule is keratinized.' },
  { t: 'tf', id: 'H3', src: 'Histology p.12–13',
    q: 'The epiglottis has an elastic cartilage core lined by non-keratinized stratified squamous epithelium on its oral side and respiratory epithelium on its laryngeal side.', a: true,
    ex: 'True: the epiglottis transitions from non-keratinized stratified squamous epithelium on its oral (superior) aspect to pseudostratified ciliated columnar (respiratory) epithelium on its laryngeal (inferior) aspect.' },

  { t: 'c', id: 'H-C2', title: 'Trachea, intrapulmonary bronchi and regular bronchioles', src: 'Histology p.16–23',
    html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>Feature</th><th>Trachea &amp; primary bronchi</th><th>Intrapulmonary bronchus</th><th>Regular bronchiole</th></tr></thead><tbody>' +
      '<tr><td><b>Hyaline cartilage</b></td><td>{{C-shaped}} ring</td><td>{{Discontinuous}} plates</td><td>{{Absent}} (none)</td></tr>' +
      '<tr><td><b>Smooth muscle</b></td><td>Posterior {{trachealis}} muscle</td><td>Continuous circular layer between mucosa and cartilage</td><td>{{Prominent circular}} muscularis layer</td></tr>' +
      '<tr><td><b>Epithelium</b></td><td>Respiratory epithelium on a {{thick basement membrane}}</td><td>Respiratory epithelium</td><td>Pseudostratified ciliated columnar with {{rare or no goblet cells}}</td></tr>' +
      '<tr><td><b>Glands &amp; outer layer</b></td><td>Seromucous glands; shares {{adventitia}} with {{esophagus}}</td><td>Submucosal seromucous glands</td><td>{{No seromucous glands}}</td></tr></tbody></table></div>' +
      CVS.fig('histo-airways', 'Cross-sectional comparison of trachea, intrapulmonary bronchus, and regular bronchiole.', 'histo', 22) },
  { t: 'q', id: 'H4', src: 'Histology p.16–17', core: true,
    q: 'Which combination of histological features characterizes the trachea?',
    o: ['C-shaped hyaline cartilage, posterior trachealis smooth muscle, thick basement membrane, and shared adventitia with the esophagus', 'Discontinuous cartilage plates, complete ring of smooth muscle, and no goblet cells', 'Elastic cartilage rings, skeletal muscle wall, and simple cuboidal epithelium', 'No cartilage, abundant Club cells, and no submucosal glands', 'Non-keratinized stratified squamous epithelium over complete hyaline cartilage rings'], a: 0,
    ex: 'The trachea has C-shaped hyaline cartilage bridged posteriorly by trachealis smooth muscle, respiratory epithelium on a notably thick basement membrane, and an adventitia shared with the esophagus.' },
  { t: 'tf', id: 'H5', src: 'Histology p.20, 22',
    q: 'Regular bronchioles can be identified by discontinuous hyaline cartilage plates and abundant submucosal seromucous glands.', a: false,
    ex: 'False: discontinuous cartilage plates belong to intrapulmonary bronchi. Regular bronchioles lack hyaline cartilage and have rare or no goblet cells and rare or no seromucous glands.' },
  { t: 'q', id: 'H6', src: 'Histology p.20–22', core: true,
    q: 'Moving from an intrapulmonary bronchus into a regular bronchiole, what is the key histological change?',
    o: ['Discontinuous hyaline cartilage plates disappear completely, and goblet cells and seromucous glands become rare or absent', 'C-shaped hyaline cartilage changes into elastic cartilage plates', 'Pseudostratified ciliated columnar epithelium changes into keratinized stratified squamous epithelium', 'Smooth muscle disappears and is replaced by skeletal muscle', 'Alveoli begin to outpocket directly from the airway wall'], a: 0,
    ex: 'Bronchioles have no cartilage and rare/no glands or goblet cells, leaving a prominent smooth muscle wall (clinically important in asthma bronchospasm).' },

  { t: 'c', id: 'H-C3', title: 'Terminal and respiratory bronchioles: Club (Clara) cells', src: 'Histology p.24–29',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Terminal bronchioles</b> (end of conducting portion): lined by {{simple columnar}} to {{simple cuboidal}} ciliated epithelium containing non-ciliated {{Clara cells}} ({{Club cells}}).</li>' +
      '<li><b>Morphology</b>: {{dome-shaped}} apical projection with short blunt {{microvilli}} (no cilia).</li>' +
      '<li><b>Four functions</b>: (1) secrete {{lipoprotein}} that helps surfactant prevent luminal adhesion, (2) act as {{stem-cell-like}} progenitors, (3) {{detoxify}} inhaled xenobiotics, and (4) secrete biomarker {{CC16}} (secretory protein).</li>' +
      '<li><b>Respiratory bronchioles</b> (start of gas exchange): cuboidal wall interrupted by outpocketing alveoli. Clinical airway disorders include bronchitis, COPD, and asthma.</li></ul></div>' +
      CVS.fig('histo-clara', 'Terminal bronchiole epithelium showing non-ciliated apical projections among ciliated cells.', 'histo', 24) + '</div>' },
  { t: 'q', id: 'H7', src: 'Histology p.24', core: true,
    q: 'Which statement correctly describes Club (Clara) cells in the terminal bronchioles?',
    o: ['Dome-shaped cells with short microvilli that secrete surfactant-helping lipoprotein, detoxify toxins, act as stem-like cells, and produce biomarker CC16', 'Simple squamous cells that cover 90–95% of the alveolar surface area for gas exchange', 'Mucus-secreting goblet cells that proliferate in the nasal vestibule', 'Phagocytic macrophages derived from blood monocytes that clear carbon particles', 'Ciliated pseudostratified cells that secrete serous fluid into Bowman glands'], a: 0,
    ex: 'Clara (Club) cells are dome-shaped non-ciliated cells with short microvilli in terminal and respiratory bronchioles; they secrete surfactant-helping lipoprotein, act as stem-like cells, detoxify, and release biomarker CC16.' },
  { t: 'tf', id: 'H8', src: 'Histology p.2, 24–26',
    q: 'Terminal bronchioles are the final segment of the air-conducting portion, whereas respiratory bronchioles mark the beginning of the respiratory portion.', a: true,
    ex: 'True: the conducting portion runs from the nose to the terminal bronchioles; gas exchange begins in the respiratory bronchioles where alveoli first appear in the wall.' },

  { t: 'c', id: 'H-C4', title: 'Alveolar ducts, alveoli, pneumocytes, dust cells and pores of Kohn', src: 'Histology p.30–40',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Alveolar ducts &amp; sacs</b>: lined by {{simple squamous}} epithelium with smooth muscle knobs at alveolar openings.</li>' +
      '<li><b>Pneumocyte Type I</b>: flattened squamous cells making up {{40%}} of alveolar cells but covering {{90–95%}} of the surface area for gas exchange.</li>' +
      '<li><b>Pneumocyte Type II</b> (septal cell): {{simple cuboidal}} cells with lamellar bodies making up {{60%}} of cells but only {{5–10%}} of surface area; synthesize {{pulmonary surfactant}} (lowering surface tension by Laplace law) and divide as progenitors for Type I and II cells.</li>' +
      '<li><b>Dust cells</b>: {{alveolar macrophages}} in the septa and airspaces.</li>' +
      '<li><b>Pores of Kohn</b>: inter-alveolar openings providing {{collateral circulation}} to equalize pressure and prevent {{atelectasis}} (lung collapse).</li>' +
      '<li><b>Alveolar pathology</b>: infant {{RDS}} (surfactant deficiency), emphysema, pulmonary edema, lobar pneumonia, and pneumoconioses (anthracosis, silicosis, asbestosis).</li></ul></div>' +
      CVS.fig('histo-alveoli', 'Type II pneumocyte secreting lamellar bodies, with Laplace law and alveolar stability.', 'histo', 35) + '</div>' },
  { t: 'q', id: 'H9', src: 'Histology p.33, 35', core: true,
    q: 'How do Alveolar Type I and Type II pneumocytes compare in cell number and surface coverage?',
    o: ['Type I is 40% of cells and covers 90–95% of surface area; Type II is 60% of cells and covers 5–10% of surface area', 'Type I is 90–95% of cells and covers 40% of surface area; Type II is 5–10% of cells and covers 60% of surface area', 'Type I and Type II each represent 50% of cells and 50% of surface area', 'Type I is simple cuboidal and secretes surfactant; Type II is simple squamous for gas exchange', 'Type I is 60% of cells and covers 90–95% of surface area; Type II is 40% of cells and covers 5–10% of surface area'], a: 0,
    ex: 'Classic exam trap: Type II cells are more numerous (60% of total cells vs 40% for Type I), but because Type I cells are thin simple squamous sheets, Type I covers 90–95% of the alveolar surface area while cuboidal Type II covers only 5–10%.' },
  { t: 'q', id: 'H10', src: 'Histology p.37–38', core: true,
    q: 'What is the physiological role of the pores of Kohn?',
    o: ['Connect adjacent alveoli to provide collateral ventilation and prevent atelectasis', 'Secrete pulmonary surfactant to reduce alveolar surface tension', 'Drain lymphatic fluid from the visceral pleura into the hilum', 'Allow dust cells to exit the capillary lumen directly into bronchi', 'Anchor the C-shaped cartilage rings of the trachea to the esophagus'], a: 0,
    ex: 'Pores of Kohn connect adjacent alveoli, permitting collateral air circulation that prevents obstructive atelectasis when a small bronchiole is plugged.' },
  { t: 'tf', id: 'H11', src: 'Histology p.33',
    q: 'Alveolar Type I pneumocytes outnumber Type II pneumocytes in total cell count.', a: false,
    ex: 'False: Type I pneumocytes make up 40% of alveolar epithelial cells (though they cover 90–95% of the surface), whereas Type II pneumocytes make up 60% of the cells (covering 5–10% of the surface).' },

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
  { t: 'q', id: 'H12', src: 'Histology p.42', core: true,
    q: 'In the lecture slide on the air-blood barrier, which five components are traversed by oxygen moving from the alveolus into the red blood cell?',
    o: ['Alveolar fluid + surfactant, alveolar epithelium, basal lamina x 2, capillary endothelium, and RBC plasma membrane', 'Goblet cell mucus, pseudostratified epithelium, thick basement membrane, smooth muscle, and adventitia', 'Clara cell lipoprotein, simple cuboidal epithelium, elastic cartilage, endothelium, and platelets', 'Visceral mesothelium, pleural fluid, parietal mesothelium, endothoracic fascia, and capillary wall', 'Alveolar macrophage, Type II pneumocyte, reticular fibers, pericyte, and WBC membrane'], a: 0,
    ex: 'Slide 42 lists the 5 components in order: (1) alveolar fluid + surfactant, (2) alveolar epithelium, (3) basal lamina x 2, (4) endothelium, and (5) plasma membrane of RBC.' },
  { t: 'open', id: 'H13', src: 'Histology p.43–45',
    q: 'What epithelium lines the visceral and parietal pleurae, what is its normal physiological function, and what malignant tumor arises from it?',
    ans: 'The visceral and parietal pleurae are serous membranes lined by mesothelium (simple squamous epithelium). It produces serous lubricant fluid so the two pleural layers glide frictionlessly during breathing; malignant transformation (classically linked to asbestos exposure) causes mesothelioma.' }
]});
