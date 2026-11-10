/* Section U: Upper Respiratory Tract (681027 Slide Upper Respiratory Tract.pdf, 44 pages). */
CVS.add({ id: 'U', short: 'Upper tract', title: 'Upper Respiratory Tract: Nose, Sinuses, Pharynx, Larynx & Trachea', kind: 'Lecture',
  blurb: 'Nasal septum and conchae, paranasal sinus drainage, Kiesselbach plexus, pharyngeal walls and tonsillar ring, laryngeal skeleton and membranes, intrinsic laryngeal muscles and nerves, and the trachea.',
  items: [
  { t: 'c', id: 'U-C1', title: 'Nasal cavity boundaries, septum and lateral conchae', src: 'URT p.4–10',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Openings</b>: anterior nares (nostrils) lead into the {{vestibule}} lined with coarse hairs ({{vibrissae}}); posterior nares ({{choanae}}) open into the nasopharynx.</li>' +
      '<li><b>Roof</b>: nasal, frontal, ethmoid and sphenoid bones; lined by {{olfactory}} epithelium. Fracture of the {{cribriform plate}} of the ethmoid causes {{anosmia}} and {{CSF rhinorrhea}}.</li>' +
      '<li><b>Floor</b>: hard palate (palatine process of maxilla and horizontal plate of palatine bone).</li>' +
      '<li><b>Medial wall (septum)</b>: {{perpendicular plate}} of ethmoid superoposteriorly, {{vomer}} inferoposteriorly, and {{septal cartilage}} anteriorly.</li>' +
      '<li><b>Lateral wall</b>: superior and middle conchae (parts of ethmoid) plus the independent {{inferior concha}} bone.</li></ul></div>' +
      CVS.fig('urt-septum', 'Bony and cartilaginous framework of the medial wall and coronal section.', 'urt', 8) + '</div>' },
  { t: 'q', id: 'U1', src: 'URT p.7', core: true,
    q: 'A patient with head trauma presents with clear fluid dripping from the nose and loss of smell. Fracture of which bony structure best explains both findings?',
    o: ['Cribriform plate of the ethmoid bone', 'Vomer', 'Perpendicular plate of the palatine bone', 'Inferior nasal concha', 'Body of the maxilla'], a: 0,
    ex: 'The roof of the nasal cavity is formed in part by the cribriform plate of the ethmoid bone, which transmits olfactory nerve fibers. Its fracture leads to anosmia and CSF rhinorrhea.' },
  { t: 'q', id: 'U2', src: 'URT p.8–9',
    q: 'Which set of structures forms the nasal septum?',
    o: ['Perpendicular plate of ethmoid, vomer, and septal cartilage', 'Cribriform plate of ethmoid, nasal bone, and vomer', 'Superior, middle, and inferior nasal conchae', 'Maxilla, palatine bone, and sphenoid rostrum', 'Septal cartilage, lacrimal bone, and inferior concha'], a: 0,
    ex: 'The nasal septum consists of the perpendicular plate of the ethmoid bone, the vomer, and the septal cartilage.' },
  { t: 'tf', id: 'U3', src: 'URT p.9',
    q: 'The superior, middle, and inferior nasal conchae are all bony projections of the ethmoid bone.', a: false,
    ex: 'False. Only the superior and middle nasal conchae are part of the ethmoid bone; the inferior nasal concha is an independent bone.' },

  { t: 'c', id: 'U-C2', title: 'Paranasal sinus drainage and Kiesselbach epistaxis plexus', src: 'URT p.11–17',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Site in nasal cavity</th><th>Structure(s) opening here</th></tr></thead><tbody>' +
      '<tr><td><b>{{Sphenoethmoidal recess}}</b></td><td>{{Sphenoidal sinus}}</td></tr>' +
      '<tr><td><b>Superior meatus</b></td><td>{{Posterior ethmoidal air cells}}</td></tr>' +
      '<tr><td><b>Middle meatus — {{ethmoidal bulla}}</b></td><td>{{Middle ethmoidal}} air cells</td></tr>' +
      '<tr><td><b>Middle meatus — {{hiatus semilunaris}}</b></td><td>{{Frontal sinus}}, {{anterior ethmoidal}} air cells, {{maxillary sinus}}</td></tr>' +
      '<tr><td><b>Inferior meatus</b></td><td>{{Nasolacrimal duct}}</td></tr></tbody></table></div>' +
      '<ul class="pts"><li><b>{{Kiesselbach area}} (Little area)</b> on the anteroinferior septum is the most common site of epistaxis, fed by 5 arteries: anterior &amp; posterior ethmoidal (from ophthalmic), sphenopalatine &amp; greater palatine (from internal maxillary), and septal branch of {{superior labial}} (from facial).</li>' +
      '<li><b>Clinical</b>: pituitary surgery passes through the sphenoid (transsphenoidal hypophysectomy); HSV-1 or VZV can spread to the brain via olfactory or trigeminal nerves.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('urt-meatus', 'Openings of paranasal sinuses and tear drainage on the lateral wall.', 'urt', 13) + CVS.fig('urt-epistaxis', 'Arterial anastomoses on the anterior septum in nosebleed.', 'urt', 16) + '</div></div>' },
  { t: 'q', id: 'U4', src: 'URT p.13–14', core: true,
    q: 'Which group of structures drains into the middle nasal meatus via the hiatus semilunaris?',
    o: ['Frontal sinus, anterior ethmoidal air cells, and maxillary sinus', 'Sphenoidal sinus and posterior ethmoidal air cells', 'Middle ethmoidal air cells and nasolacrimal duct', 'Posterior ethmoidal air cells and maxillary sinus', 'Nasolacrimal duct and frontal sinus'], a: 0,
    ex: 'The hiatus semilunaris in the middle meatus receives the frontal sinus, anterior ethmoidal air cells, and maxillary sinus. Middle ethmoidal cells open on the ethmoidal bulla, posterior ethmoidal cells into the superior meatus, and the nasolacrimal duct into the inferior meatus.' },
  { t: 'q', id: 'U5', src: 'URT p.16', core: true,
    q: 'Which artery does NOT contribute to Kiesselbach (Little) area on the anterior nasal septum?',
    o: ['Inferior alveolar artery', 'Anterior ethmoidal artery (from ophthalmic artery)', 'Sphenopalatine artery (from maxillary artery)', 'Greater palatine artery (from maxillary artery)', 'Septal branch of superior labial artery (from facial artery)'], a: 0,
    ex: 'Kiesselbach area is an anastomosis of five arteries: anterior and posterior ethmoidal (from ophthalmic), sphenopalatine and greater palatine (from maxillary), and the septal branch of the superior labial artery (from facial).' },

  { t: 'c', id: 'U-C3', title: 'Pharynx subdivisions, Waldeyer ring and pharyngeal recesses', src: 'URT p.18–24',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>Nasopharynx</b> (air only): roof/posterior wall holds the {{pharyngeal tonsil}} (adenoid); lateral wall features the {{auditory tube}} (Eustachian) opening, {{torus tubarius}} (cartilage elevation with tubal tonsil), salpingopharyngeal fold, and {{fossa of Rosenmuller}} (pharyngeal recess).</li>' +
      '<li><b>Oropharynx</b> (air &amp; food): bounded anteriorly by the oropharyngeal isthmus and {{lingual tonsil}} at the tongue root; lateral wall holds the {{palatine tonsil}} between the palatoglossal and palatopharyngeal arches.</li>' +
      '<li><b>Laryngopharynx</b> (C4–C6): lies behind the larynx; on either side of the laryngeal inlet is the {{piriform recess}} (fossa), a classic trap for swallowed {{foreign bodies}} (along with tongue base and tonsillar crypts).</li>' +
      '<li><b>Muscles &amp; lymphoid ring</b>: outer circular constrictors and inner longitudinal muscles supplied by {{CN IX and CN X}}; lymphoid tissue forms {{Waldeyer ring}}.</li></ul>' +
      '<p class="trap"><b>Clinical</b>: Nasopharyngeal carcinoma (NPC) most commonly arises in the pharyngeal recess and is strongly associated with {{Epstein-Barr virus}} (EBV) infection.</p></div>' +
      CVS.fig('urt-pharynx', 'Landmarks of the nasopharynx, oropharynx, and laryngopharynx.', 'urt', 19) + '</div>' },
  { t: 'q', id: 'U6', src: 'URT p.19, 24', core: true,
    q: 'Nasopharyngeal carcinoma (NPC), strongly associated with Epstein-Barr virus (EBV), most commonly originates in which anatomical landmark?',
    o: ['Pharyngeal recess (fossa of Rosenmuller) in the nasopharynx', 'Piriform recess in the laryngopharynx', 'Tonsillar crypts between the palatoglossal and palatopharyngeal arches', 'Vallecula behind the root of the tongue', 'Laryngeal ventricle between the vestibular and vocal folds'], a: 0,
    ex: 'NPC most commonly originates in the pharyngeal recess (fossa of Rosenmuller) located posterior to the torus tubarius in the lateral wall of the nasopharynx.' },
  { t: 'tf', id: 'U7', src: 'URT p.21, 24',
    q: 'The piriform fossa (recess) is a lateral depression in the laryngopharynx on either side of the laryngeal inlet where swallowed foreign bodies commonly lodge.', a: true,
    ex: 'True. Common sites where foreign bodies lodge in the pharynx include the base of the tongue, palatine tonsil (tonsillar crypts), and the piriform fossa of the laryngopharynx.' },

  { t: 'c', id: 'U-C4', title: 'Laryngeal cartilages, fibro-elastic membranes and cavity', src: 'URT p.25–35',
    html: '<div class="two"><div class="stack"><ul class="pts">' +
      '<li><b>9 cartilages (C3–C6)</b>: 3 unpaired ({{thyroid cartilage}}, {{cricoid cartilage}}, {{epiglottis}}) and 3 paired ({{arytenoid}}, corniculate, cuneiform). The first two unpaired plus most of the ladle-shaped pair are {{hyaline cartilage}}; the rest are {{elastic cartilage}}.</li>' +
      '<li><b>Membranes</b>: the {{quadrangular membrane}} runs from the lateral border of the epiglottic leaf to the ladle-shaped cartilage, its lower free edge forming the {{vestibular ligament}} (false cord). The {{conus elasticus}} forms the {{median cricothyroid ligament}} anteriorly and the {{vocal ligament}} (true cord) superiorly.</li>' +
      '<li><b>Interior</b>: laryngeal ventricle separates false folds (rima vestibuli) from true folds (rima glottidis). True cords are lined by {{stratified squamous}} epithelium, and the glottic region has no lymphatic drainage.</li>' +
      '<li><b>Emergency airway</b>: emergency cricothyroidotomy pierces the cricothyroid membrane into the subglottis.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('urt-larynx-cart', 'Laryngeal skeleton, fibro-elastic membranes, and ligaments.', 'urt', 28) + CVS.fig('urt-larynx-cor', 'Coronal section showing laryngeal vestibule, ventricle, and cords.', 'urt', 31) + '</div></div>' },
  { t: 'q', id: 'U8', src: 'URT p.28, 31, 34', core: true,
    q: 'The superior free margin of the conus elasticus thickens to form which structure, and what lies at its anterior midline thickening?',
    o: ['Vocal ligament superiorly; median cricothyroid ligament anteriorly (pierced in emergency cricothyroidotomy)', 'Vestibular ligament superiorly; thyrohyoid membrane anteriorly', 'Aryepiglottic ligament superiorly; cricotracheal ligament anteriorly', 'Vocal ligament superiorly; quadrangular membrane anteriorly', 'Vestibular ligament superiorly; median cricothyroid ligament anteriorly'], a: 0,
    ex: 'The conus elasticus attaches inferiorly to the cricoid cartilage; its superior free edge is the vocal ligament (true vocal cord) and its anterior thickening is the median cricothyroid ligament, pierced during an emergency cricothyroidotomy.' },
  { t: 'tf', id: 'U9', src: 'URT p.31–32', core: true,
    q: 'The true vocal folds are covered by stratified squamous epithelium, and carcinoma restricted to the glottic region has a low rate of early lymphatic metastasis because the glottis has no lymphatic drainage.', a: true,
    ex: 'True. Unlike the rest of the larynx (lined by respiratory epithelium with rich lymphatics), the true vocal cords are lined by stratified squamous epithelium and the glottic region lacks lymphatic drainage.' },

  { t: 'c', id: 'U-C5', title: 'Intrinsic laryngeal muscles, nerves and trachea', src: 'URT p.36–44',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Intrinsic muscle</th><th>Main action on cords / rima glottidis</th><th>Motor nerve</th></tr></thead><tbody>' +
      '<tr><td><b>{{Posterior cricoarytenoid}}</b></td><td><b>Sole abductor</b> — {{opens rima glottidis}}</td><td>Inferior (recurrent) laryngeal n.</td></tr>' +
      '<tr><td><b>Lateral cricoarytenoid</b> &amp; <b>transverse/oblique arytenoids</b></td><td>Adductors — {{close rima glottidis}}</td><td>Inferior (recurrent) laryngeal n.</td></tr>' +
      '<tr><td><b>{{Cricothyroid}}</b></td><td>{{Tenses}} (lengthens) vocal folds</td><td>{{External laryngeal}} n.</td></tr>' +
      '<tr><td><b>{{Thyroarytenoid}}</b> &amp; <b>{{vocalis}}</b></td><td>{{Relaxes}} (shortens) vocal folds</td><td>Inferior (recurrent) laryngeal n.</td></tr></tbody></table></div>' +
      '<ul class="pts"><li><b>Sensory innervation</b>: {{internal laryngeal}} nerve above the vocal folds; inferior (recurrent) laryngeal nerve below the vocal folds.</li>' +
      '<li><b>Trachea (C6 to T4/T5 sternal angle)</b>: 16–20 C-shaped hyaline rings (length 10 cm in URT p.41 vs 12 cm in Lung p.23) bridged posteriorly by smooth {{trachealis}} muscle abutting the esophagus; bifurcates at the {{carina}}.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('urt-larynx-musc', 'Actions of intrinsic laryngeal muscles on the laryngeal inlet and vocal ligaments.', 'urt', 37) + CVS.fig('urt-larynx-nerve', 'Superior and recurrent laryngeal nerve branches and arterial supply.', 'urt', 39) + '</div></div>' },
  { t: 'q', id: 'U10', src: 'URT p.37–38', core: true,
    q: 'Which intrinsic laryngeal muscle is the ONLY muscle that opens (abducts) the rima glottidis?',
    o: ['Posterior cricoarytenoid muscle', 'Lateral cricoarytenoid muscle', 'Cricothyroid muscle', 'Thyroarytenoid (vocalis) muscle', 'Transverse arytenoid muscle'], a: 0,
    ex: 'The posterior cricoarytenoid muscle rotates the arytenoid cartilages externally, making it the sole abductor that opens the rima glottidis.' },
  { t: 'q', id: 'U11', src: 'URT p.39–40', core: true,
    q: 'During thyroidectomy, ligation of the superior thyroid artery injures the accompanying nerve. Which muscle is paralyzed and what voice change results?',
    o: ['Cricothyroid muscle → monotone voice (inability to tense the vocal fold)', 'Posterior cricoarytenoid muscle → inability to abduct the vocal fold', 'Vocalis muscle → hoarseness with complete loss of adduction', 'Thyroepiglottic muscle → inability to widen the laryngeal inlet', 'Lateral cricoarytenoid muscle → loss of sensation above the vocal cords'], a: 0,
    ex: 'The external laryngeal nerve runs closely with the superior thyroid artery and supplies the cricothyroid muscle. Injury paralyzes the cricothyroid, causing loss of vocal fold tension and a monotone voice.' },
  { t: 'q', id: 'U12', src: 'URT p.39',
    q: 'Sensory innervation to the laryngeal mucosa ABOVE the true vocal cords is provided by the:',
    o: ['Internal laryngeal nerve (branch of superior laryngeal nerve)', 'External laryngeal nerve (branch of superior laryngeal nerve)', 'Inferior laryngeal nerve (continuation of recurrent laryngeal nerve)', 'Glossopharyngeal nerve (CN IX)', 'Ansa cervicalis'], a: 0,
    ex: 'The internal laryngeal nerve provides sensory and autonomic innervation to the laryngeal mucosa above the true vocal folds; the inferior (recurrent) laryngeal nerve supplies sensory fibers below the true vocal folds.' },
  { t: 'tf', id: 'U13', src: 'URT p.41–42',
    q: 'The tracheal rings are complete O-shaped rings of elastic cartilage that prevent airway collapse posteriorly against the esophagus.', a: false,
    ex: 'False. The 16–20 tracheal rings are incomplete C-shaped hyaline cartilages; the flat posterior wall lacks cartilage and contains the involuntary trachealis muscle and fibroelastic membrane to allow esophageal expansion during swallowing.' },
  { t: 'open', id: 'U14', src: 'URT p.44', core: true,
    q: 'Complete the 10 lecture post-test items: (1) Medial wall of nasal cavities; (2) Sinus opening into sphenoethmoidal recess; (3) Structure whose floor forms the roof of the maxillary sinus; (4) Tonsil in roof/posterior wall of nasopharynx (adenoid); (5) External circular layer of pharyngeal muscles; (6) Sharp-edged mucosal folds enclosing vocal ligaments and vocalis muscles; (7) Muscle that opens the rima glottidis; (8) Nerve supplying cricothyroid muscle; (9) Involuntary muscle spanning posterior gaps in tracheal rings; (10) Transverse neck incision into anterior tracheal wall for airway obstruction.',
    ans: '(1) Nasal septum (perpendicular plate of ethmoid, vomer, septal cartilage) · (2) Sphenoidal sinus · (3) Orbit · (4) Pharyngeal tonsil · (5) Superior, middle, and inferior pharyngeal constrictor muscles · (6) Vocal folds (true vocal cords) · (7) Posterior cricoarytenoid muscles · (8) External laryngeal nerve (branch of superior laryngeal nerve) · (9) Trachealis muscle · (10) Tracheostomy.' }
]});
