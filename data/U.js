/* Section U: Upper Respiratory Tract (681027 Slide Upper Respiratory Tract.pdf, 44 pages). */
CVS.add({ id: 'U', short: 'Upper tract', title: 'Upper Respiratory Tract: Nose, Sinuses, Pharynx, Larynx & Trachea', kind: 'Lecture',
  blurb: 'Nasal septum and conchae, paranasal sinus drainage, Kiesselbach plexus, pharyngeal walls and tonsillar ring, laryngeal skeleton and membranes, intrinsic laryngeal muscles and nerves, and the trachea.',
  items: [
  { t: 'c', id: 'U-C1', title: 'Nasal cavity boundaries, septum and lateral conchae', src: 'URT p.4–10',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Air path</b>: nostrils → {{vestibule}} (hairs) → nasal cavity → {{choanae}} → nasopharynx.</li>' +
      '<li><b>Septum</b> = {{perpendicular plate}} of ethmoid (back, up) + {{vomer}} (back, down) + {{septal cartilage}} (front).</li>' +
      '<li><b>Lateral wall</b>: superior and middle conchae belong to the ethmoid; the {{inferior concha}} is a bone of its own.</li>' +
      '<li>Each meatus lies <b>under</b> the concha of the same name.</li>' +
      '<li><b>Roof</b> = {{cribriform plate}} → fracture → {{anosmia}} + {{CSF rhinorrhea}}.</li></ul></div>' +
      CVS.fig('urt-septum', 'Bony and cartilaginous framework of the medial wall and coronal section.', 'urt', 8) + '</div>' +
      '<p class="note"><b>From the past papers</b> · Inferior meatus → only the nasolacrimal duct opens there → pus there comes from the tear duct, not a sinus (AC79 spot, AC80).</p>' },
  { t: 'q', id: 'U1', src: 'AC79 spot', core: true, keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st2', 'AC79 spot test, station 2.', 'ac79s', 4),
    o: ['Nasal vestibule', 'Ethmoidal bullae', 'Middle nasal concha', 'Inferior nasal concha'], a: 3,
    ex: 'A is the lowest and longest scroll on the lateral wall, just above the floor of the nose: the inferior nasal concha, a separate bone.' },
  { t: 'q', id: 'U2', src: 'AC79 spot', keep: true,
    q: 'Which structure opens below the structure A?',
    fig: CVS.fig('ac79s-st2', 'AC79 spot test, station 2.', 'ac79s', 4), figRef: 'U1',
    o: ['Middle ethmoidal air cells', 'Anterior ethmoidal air cells', 'Frontal sinus', 'None of the above'], a: 3,
    ex: 'Below the inferior concha is the inferior meatus, and the only thing that opens there is the nasolacrimal duct, which is not listed. The ethmoidal cells and the frontal sinus open higher, into the middle meatus.' },
  { t: 'q', id: 'U3', src: 'AC80', core: true, keep: true,
    q: 'The source of pus seen at the inferior nasal meatus is from which structure?',
    o: ['Frontal sinus', 'Sphenoid sinus', 'Maxillary sinus', 'Ethmoid sinus', 'Nasolacrimal duct'], a: 4,
    ex: 'Only the nasolacrimal duct opens into the inferior meatus. The frontal, maxillary and anterior ethmoid sinuses drain into the middle meatus; the sphenoid sinus drains into the sphenoethmoidal recess.' },
  { t: 'q', id: 'U4', src: 'AC80 spot', keep: true,
    q: 'Identify this structure (red tube).',
    fig: CVS.fig('ac80s-nld', 'AC80 spot test (recalled image): the red tube.', 'ac80s', 4),
    o: ['Nasolacrimal duct', 'Frontonasal duct', 'Viteline duct', 'Ethmoidal air sinus'], a: 0,
    ex: 'The probe runs down from the lacrimal sac to the inferior opening under the inferior concha: the nasolacrimal duct.',
    flag: 'Options as recalled (“viteline duct” is the vitelline duct of the embryo, not a nasal structure).' },
  { t: 'c', id: 'U-C2', title: 'Paranasal sinus drainage and Kiesselbach epistaxis plexus', src: 'URT p.11–17',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl compact"><thead><tr><th>Opening in</th><th>What drains there</th></tr></thead><tbody>' +
      '<tr><td>Sphenoethmoidal recess</td><td>{{sphenoid sinus}}</td></tr>' +
      '<tr><td>Superior meatus</td><td>{{posterior ethmoidal}} cells</td></tr>' +
      '<tr><td>Middle meatus: {{ethmoidal bulla}}</td><td>middle ethmoidal cells</td></tr>' +
      '<tr><td>Middle meatus: {{hiatus semilunaris}}</td><td>{{frontal sinus}}, {{anterior ethmoidal}} cells, {{maxillary sinus}}</td></tr>' +
      '<tr><td>Inferior meatus</td><td>{{nasolacrimal duct}} only</td></tr></tbody></table></div>' +
      '<ul class="pts"><li><b>{{Kiesselbach area}}</b> (front of the septum): branches of several arteries meet → commonest site of nosebleed.</li>' +
      '<li>Pituitary surgery reaches the sella through the sphenoid (transsphenoidal route).</li></ul></div>' +
      '<div class="stack">' + CVS.fig('urt-meatus', 'Openings of paranasal sinuses and tear drainage on the lateral wall.', 'urt', 13) + CVS.fig('urt-epistaxis', 'Arterial anastomoses on the anterior septum in nosebleed.', 'urt', 16) + '</div></div>' },
  { t: 'q', id: 'U5', src: 'AC81', core: true, keep: true,
    q: 'The patient has been diagnosed with pus in the sphenoethmoidal recess. Which paranasal sinus is most likely to be infected?',
    o: ['Frontal sinus', 'Maxillary sinus', 'Sphenoid sinus', 'Anterior ethmoid', 'Posterior ethmoid'], a: 2,
    ex: 'The sphenoethmoidal recess, above the superior concha, receives the sphenoid sinus. Posterior ethmoidal cells open into the superior meatus; frontal, maxillary and anterior ethmoid into the middle meatus.' },
  { t: 'q', id: 'U6', src: 'AC79 spot', core: true, keep: true,
    q: 'Identify this opening A.',
    fig: CVS.fig('ac79s-st1', 'AC79 spot test, station 1.', 'ac79s', 3),
    o: ['Hiatus semicircularis', 'Hiatus semilunaris', 'Opening to middle ethmoidal air cells', 'Opening to posterior ethmoidal air cells'], a: 1,
    ex: 'A is the curved gutter in the middle meatus, under the ethmoidal bulla: the hiatus semilunaris, where the frontal, anterior ethmoidal and maxillary sinuses drain.' },
  { t: 'q', id: 'U7', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st1', 'AC79 spot test, station 1.', 'ac79s', 3), figRef: 'U6',
    o: ['Ethmoidal sinus', 'Maxillary sinus', 'Frontal sinus', 'Sphenoid sinus'], a: 3,
    ex: 'B is the air space in the body of the sphenoid, behind the nasal cavity and under the sella: the sphenoid sinus.' },
  { t: 'q', id: 'U8', src: 'AC81 spot', keep: true,
    q: 'Identify structure A.',
    fig: CVS.fig('ac81s-st1', 'AC81 spot test, station 1.', 'ac81s', 2),
    o: ['Superior nasal concha', 'Inferior nasal concha', 'Hiatus semilunaris', 'Ethmoidal bulla'], a: 2,
    ex: 'With the middle concha removed, A is the curved slit in the middle meatus: the hiatus semilunaris.' },
  { t: 'q', id: 'U9', src: 'AC81 spot', keep: true,
    q: 'Which paranasal sinus opening lies on B?',
    fig: CVS.fig('ac81s-st1', 'AC81 spot test, station 1.', 'ac81s', 2), figRef: 'U8',
    o: ['Frontal sinus', 'Ethmoid sinus', 'Maxillary sinus', 'Sphenoid sinus'], a: 0,
    ex: 'B is the front, upper end of the hiatus semilunaris, where the frontonasal duct (ethmoidal infundibulum) brings down the frontal sinus.',
    flag: 'Key from the AC81 spot short answer key. The maxillary ostium lies further back along the same hiatus.' },
  { t: 'c', id: 'U-C3', title: 'Pharynx subdivisions, Waldeyer ring and pharyngeal recesses', src: 'URT p.18–24',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Nasopharynx</b> (air only)<ul><li>Roof: {{pharyngeal tonsil}} (adenoid).</li>' +
      '<li>Side wall, front → back: {{auditory tube}} opening → {{torus tubarius}} → {{pharyngeal recess}} (fossa of Rosenmüller).</li></ul></li>' +
      '<li><b>Oropharynx</b> (air + food)<ul><li>{{palatine tonsil}} between the two arches; {{lingual tonsil}} on the tongue root.</li></ul></li>' +
      '<li><b>Laryngopharynx</b><ul><li>{{piriform recess}} beside the laryngeal inlet → swallowed fish bones lodge there.</li></ul></li>' +
      '<li>The tonsils together form a ring: {{Waldeyer ring}}.</li></ul>' +
      '<p class="trap"><b>Clinical</b>: the recess behind the torus → commonest site of nasopharyngeal carcinoma → linked to {{EBV}}.</p></div>' +
      CVS.fig('urt-pharynx', 'Landmarks of the nasopharynx, oropharynx, and laryngopharynx.', 'urt', 19) + '</div>' +
      '<p class="note"><b>From the past papers</b> · The fold running down from the torus covers salpingopharyngeus, which starts on the tube’s cartilage (AC81 spot).</p>' },
  { t: 'q', id: 'U10', src: 'AC79', core: true, keep: true,
    q: 'A patient has a small mass in the oropharynx. Which structure is <b>LEAST</b> likely the cause of this mass?',
    o: ['Uvula', 'Epiglottis', 'Palatine tonsil', 'Lingual tonsil', 'Pharyngeal tonsil'], a: 4,
    ex: 'The pharyngeal tonsil (adenoid) sits on the roof and posterior wall of the nasopharynx. The uvula, palatine tonsils, lingual tonsil and the tip of the epiglottis are all seen in the oropharynx.' },
  { t: 'q', id: 'U11', src: 'AC79 · AC81', core: true, keep: true,
    q: 'What structure is abnormal in this patient?',
    fig: CVS.fig('ac81-tonsil', 'AC81: view through the open mouth.', 'ac81', 3),
    o: ['Palatine tonsil', 'Lingual tonsil', 'Pharyngeal tonsil', 'Tubal tonsil', 'No abnormality in this patient'], a: 0,
    ex: 'The swollen masses on each side of the oropharynx, between the palatoglossal and palatopharyngeal arches, are enlarged palatine tonsils (tonsillitis).',
    flag: 'AC79 asked the same with a tonsillitis photo (“What is the tonsil in this picture?”), also keyed palatine tonsil.' },
  { t: 'q', id: 'U12', src: 'AC80', keep: true,
    q: 'Where is the adenoid tonsil located?',
    fig: CVS.fig('ac80-adenoid', 'AC80: labels A–D on a sagittal drawing.', 'ac80', 1),
    o: ['A', 'B', 'C', 'D'], a: 0,
    ex: 'A marks the roof and posterior wall of the nasopharynx: the pharyngeal (adenoid) tonsil. B is the tubal tonsil, C the palatine tonsil, D the lingual tonsil (AC80 key).' },
  { t: 'q', id: 'U13', src: 'AC80', core: true, keep: true,
    q: 'Dysfunction of the auditory (Eustachian) tube is associated with which region?',
    o: ['Larynx', 'Esophagus', 'Nasopharynx', 'Oropharynx', 'Laryngopharynx'], a: 2,
    ex: 'The pharyngeal opening of the auditory tube is on the lateral wall of the nasopharynx, behind the inferior concha and in front of the torus tubarius.' },
  { t: 'q', id: 'U14', src: 'AC81', keep: true,
    q: 'A patient presents with a fish bone stuck in the tonsillar crypts. Which structure do the tonsillar crypts reside in?',
    o: ['Oropharynx', 'Nasopharynx', 'Larynx'], a: 0,
    ex: 'Tonsillar crypts are the pits of the palatine tonsil, which lies in the oropharynx (tonsillar fossa). A fish bone also commonly lodges there.',
    flag: 'Only three options were recalled. It sat in the AC81 thoracic wall chapter, but it is upper-tract anatomy.' },
  { t: 'q', id: 'U15', src: 'AC79 spot', core: true, keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st3', 'AC79 spot test, station 3.', 'ac79s', 5),
    o: ['Palatine torus', 'Torus tubarius', 'Salpingopharyngeal fold', 'Torus mandibularis'], a: 1,
    ex: 'A is the rounded cartilage bump behind the opening of the auditory tube on the lateral nasopharyngeal wall: the torus tubarius.' },
  { t: 'q', id: 'U16', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st3', 'AC79 spot test, station 3.', 'ac79s', 5), figRef: 'U15',
    o: ['Epiglottic vallecula', 'Piriform sinus', 'Pharyngeal sinus', 'Opening to pharyngotympanic tube'], a: 2,
    ex: 'B is the deep pocket behind the torus tubarius: the pharyngeal recess (fossa of Rosenmüller), recalled here as “pharyngeal sinus”.',
    flag: 'The option was recalled as “pharyngeal sinus”; the structure is the pharyngeal recess (fossa of Rosenmüller).' },
  { t: 'q', id: 'U17', src: 'AC81 spot', keep: true,
    q: 'Identify area A.',
    fig: CVS.fig('ac81s-st2', 'AC81 spot test, station 2.', 'ac81s', 3),
    o: ['Piriform recess', 'Hiatus semilunaris', 'Opening of auditory tube', 'Opening of nasolacrimal duct'], a: 2,
    ex: 'A points to the funnel-shaped opening on the lateral nasopharyngeal wall, in front of the torus: the opening of the auditory tube.' },
  { t: 'q', id: 'U18', src: 'AC81 spot', keep: true,
    q: 'Identify muscle in area B.',
    fig: CVS.fig('ac81s-st2', 'AC81 spot test, station 2.', 'ac81s', 3), figRef: 'U17',
    o: ['Palatoglossus', 'Stylopharyngeus', 'Palatopharyngeus', 'Salpingopharyngeus'], a: 3,
    ex: 'The fold running down from the torus tubarius covers the salpingopharyngeus (salpinx = tube), which arises from the cartilage of the auditory tube.' },
  { t: 'c', id: 'U-C4', title: 'Laryngeal cartilages, fibro-elastic membranes and cavity', src: 'URT p.25–35',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Unpaired</b>: {{thyroid}} (the shield) · {{cricoid}} (the only complete ring) · {{epiglottis}}.</li>' +
      '<li><b>Paired</b>: {{arytenoid}} (the cords attach here), corniculate, cuneiform.</li>' +
      '<li><b>Inside, top → bottom</b>: vestibular (false) fold → ventricle → vocal (true) fold → subglottis.</li>' +
      '<li><b>Membranes</b><ul><li>{{quadrangular membrane}} → its lower edge = vestibular ligament.</li>' +
      '<li>{{conus elasticus}} → its upper edge = {{vocal ligament}}.</li></ul></li>' +
      '<li>True cords are lined by {{stratified squamous}} epithelium.</li>' +
      '<li><b>Emergency airway</b>: cut the membrane just above the complete ring (cricothyroidotomy).</li></ul></div>' +
      '<div class="stack">' + CVS.fig('urt-larynx-cart', 'Laryngeal skeleton, fibro-elastic membranes, and ligaments.', 'urt', 28) + CVS.fig('urt-larynx-cor', 'Coronal section showing laryngeal vestibule, ventricle, and cords.', 'urt', 31) + '</div></div>' +
      '<p class="note"><b>From the past papers</b> · Opened larynx: false fold above the ventricle, true fold below it, trachea below the complete ring (AC79 and AC81 spot).</p>' },
  { t: 'q', id: 'U19', src: 'AC79 spot', keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st4', 'AC79 spot test, station 4.', 'ac79s', 6),
    o: ['Thyroid cartilage', 'Cricoid cartilage', 'Arytenoid cartilage', 'Hyoid bone'], a: 0,
    ex: 'A is the large shield-shaped lamina on the side of the larynx: the thyroid cartilage.' },
  { t: 'q', id: 'U20', src: 'AC80 spot', keep: true,
    q: 'Identify this structure.',
    fig: CVS.fig('ac80s-cricoid', 'AC80 spot test (recalled image).', 'ac80s', 7),
    o: ['Cricoid cartilage', 'Thyroid cartilage', 'Arytenoid cartilage', 'Corniculate cartilage'], a: 0,
    ex: 'A marks the complete ring at the lower end of the larynx, just above the trachea: the cricoid cartilage.' },
  { t: 'q', id: 'U21', src: 'AC79 spot', core: true, keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st6', 'AC79 spot test, station 6.', 'ac79s', 8),
    o: ['Piriform sinus', 'Vestibular fold of larynx', 'Laryngeal ventricle', 'Vocal fold of larynx'], a: 3,
    ex: 'In the opened larynx, A is the lower of the two folds, below the ventricle: the vocal (true) fold.' },
  { t: 'q', id: 'U22', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st6', 'AC79 spot test, station 6.', 'ac79s', 8), figRef: 'U21',
    o: ['Trachea', 'Esophagus', 'Cricoid cartilage', 'Thyroid gland'], a: 0,
    ex: 'B is the cartilage-ringed tube continuing below the cricoid: the trachea.' },
  { t: 'q', id: 'U23', src: 'AC81 spot', keep: true,
    q: 'Identify structure B.',
    fig: CVS.fig('ac81s-st3', 'AC81 spot test, station 3.', 'ac81s', 4),
    o: ['Vocal fold', 'Vestibular fold', 'Ary-epiglottic fold'], a: 0,
    ex: 'In the coronal section B points to the lower fold, under the ventricle: the vocal fold.',
    flag: 'The recalled stem repeated “Which paranasal sinus opening lies on B?”; the options show the real question was to identify B.' },
  { t: 'c', id: 'U-C5', title: 'Intrinsic laryngeal muscles, nerves and trachea', src: 'URT p.36–44',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl compact"><thead><tr><th>Muscle</th><th>Action</th><th>Nerve</th></tr></thead><tbody>' +
      '<tr><td><b>{{Posterior cricoarytenoid}}</b></td><td>{{opens}} the rima (the only one)</td><td>recurrent</td></tr>' +
      '<tr><td>Lateral cricoarytenoid, arytenoids</td><td>close the rima</td><td>recurrent</td></tr>' +
      '<tr><td><b>{{Cricothyroid}}</b></td><td>{{tenses}} the cords</td><td>{{external laryngeal}}</td></tr>' +
      '<tr><td>Thyroarytenoid, vocalis</td><td>{{relaxes}} the cords</td><td>recurrent</td></tr></tbody></table></div>' +
      '<ul class="pts"><li><b>Recurrent laryngeal n.</b> → all intrinsic muscles except the tensor → injury → hoarse voice, cord cannot abduct.</li>' +
      '<li><b>The tensor’s nerve</b> runs with the superior thyroid artery → caught when the artery is tied → weak, low-pitched voice.</li>' +
      '<li><b>Sensation</b>: {{internal laryngeal}} n. above the cords, recurrent below.</li>' +
      '<li><b>Trachea</b>: C6 → {{carina}} at the sternal angle; C-shaped rings closed behind by {{trachealis}} muscle.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('urt-larynx-musc', 'Actions of intrinsic laryngeal muscles on the laryngeal inlet and vocal ligaments.', 'urt', 37) + CVS.fig('urt-larynx-nerve', 'Superior and recurrent laryngeal nerve branches and arterial supply.', 'urt', 39) + '</div></div>' },
  { t: 'q', id: 'U24', src: 'AC81 spot', keep: true,
    q: 'Identify structure A.',
    fig: CVS.fig('ac81s-st3', 'AC81 spot test, station 3.', 'ac81s', 4),
    o: ['Cricothyroid m.', 'Thyroarytenoid m.', 'Lateral cricoarytenoid m.', 'Posterior cricoarytenoid m.'], a: 3,
    ex: 'From behind, A is the muscle on the back of the cricoid lamina: the posterior cricoarytenoid.' },
  { t: 'q', id: 'U25', src: 'AC79 spot', keep: true,
    q: 'Identify this structure B.',
    fig: CVS.fig('ac79s-st4', 'AC79 spot test, station 4.', 'ac79s', 6),
    o: ['Posterior cricoarytenoid muscle', 'Thyroepiglottic muscle', 'Thyroarytenoid muscle', 'Cricothyroid muscle'], a: 3,
    ex: 'On the front of the larynx, B is the muscle running from the cricoid arch up to the thyroid cartilage: the cricothyroid, the only intrinsic muscle on the outside.' },
  { t: 'q', id: 'U26', src: 'AC79 spot', core: true, keep: true,
    q: 'Identify this structure A.',
    fig: CVS.fig('ac79s-st5', 'AC79 spot test, station 5.', 'ac79s', 7),
    o: ['Cricothyroid muscle', 'Aryepiglottic muscle', 'Posterior cricoarytenoid muscle', 'Arytenoid muscle'], a: 2,
    ex: 'Viewed from behind, A lies on the posterior surface of the cricoid lamina: the posterior cricoarytenoid.' },
  { t: 'q', id: 'U27', src: 'AC79 spot', core: true, keep: true,
    q: 'What is the function of structure A?',
    fig: CVS.fig('ac79s-st5', 'AC79 spot test, station 5.', 'ac79s', 7), figRef: 'U26',
    o: ['Tense vocal cords', 'Relax vocal cords', 'Opens rima glottidis', 'Closes rima glottidis'], a: 2,
    ex: 'The posterior cricoarytenoid rotates the arytenoids outward and is the only abductor: it opens the rima glottidis.' },
  { t: 'q', id: 'U28', src: 'AC79 · AC81', core: true, keep: true,
    q: 'In a thyroidectomy operation, the surgeon accidentally caused a ligation of the superior thyroid artery. Which muscle is most likely to be affected?',
    o: ['Cricothyroid', 'Thyroarytenoid', 'Lateral cricoarytenoid', 'Posterior cricoarytenoid', 'Vocalis'], a: 0,
    ex: 'The external branch of the superior laryngeal nerve runs with the superior thyroid artery and supplies only the cricothyroid. Tying the artery can catch the nerve.' },
  { t: 'q', id: 'U29', src: 'AC80', keep: true,
    q: 'During the procedure of thyroidectomy, a lesion of a nerve beside the superior thyroid artery. What would be the cause of this?',
    o: ['Decrease tension in vocal cord', 'Paralysis of vocalis muscle', 'Unable to abduct rima glottidis'], a: 0,
    ex: 'The nerve beside the superior thyroid artery is the external laryngeal nerve. Losing the cricothyroid means the vocal cords cannot be tensed: a weak, low-pitched voice.',
    flag: 'A fourth option was not recalled. AC80 also asked the same idea as “Cutting the superior laryngeal artery … decrease tension of the vocal cords”.' },
  { t: 'q', id: 'U30', src: 'AC79 · AC81', core: true, keep: true,
    q: 'The patient presents with a hoarse voice, difficult breathing, and an inability to abduct the vocal fold. Which nerve defect could cause this symptom?',
    o: ['External laryngeal nerve', 'Internal laryngeal nerve', 'Superior laryngeal nerve', 'Recurrent laryngeal nerve', 'Vagus nerve'], a: 3,
    ex: 'The recurrent laryngeal nerve supplies every intrinsic muscle except the cricothyroid, including the only abductor (posterior cricoarytenoid). It is at risk in neck and thyroid surgery.' }
]});
