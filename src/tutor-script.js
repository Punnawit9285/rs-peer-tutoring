/* English recording script for the tutor deck: the video plan (start card), per-section opening line and
   "Understand it: the 80%" summary, and a SAY line for every concept card and core question. Keys match deck IDs. */
window.TUTOR_SCRIPT = {
  plan: [
    ["Video 1", ["U", "W"], "Upper respiratory tract (nasal cavity, sinuses, pharynx, larynx) and thoracic wall, intercostal spaces & diaphragm.", "25&#8211;30 min"],
    ["Video 2", ["B", "H", "G", "M"], "Lung & bronchial tree anatomy, respiratory tract histology, gas-phase physics & equilibrium, and mechanics of breathing.", "50&#8211;60 min"],
    ["Video 3", ["E", "T", "C"], "Alveolar ventilation, diffusion, V/Q matching, hemoglobin O2/CO2 transport, and pulmonary circulation & edema.", "40&#8211;50 min"],
    ["Video 4", ["P", "R"], "Pulmonary function tests, ATS/ERS spirometry & flow-volume loops, and neural & chemical control of respiration.", "30&#8211;35 min"],
    ["Video 5", ["A", "S"], "Acid-base physiology, compensation & 6-step ABG analysis, and the respiratory system under stress (exercise, altitude, diving, sleep, birth).", "25&#8211;35 min"]
  ],
  sec: {}
};
/* Part 1 Tutor script: Sections U, W, B */
window.TUTOR_SCRIPT = window.TUTOR_SCRIPT || { plan: [], sec: {} };
window.TUTOR_SCRIPT.sec = window.TUTOR_SCRIPT.sec || {};

/* ---------- U ---------- */
window.TUTOR_SCRIPT.sec.U = { part: "Video 1", time: "12&#8211;15 min",
  open: "Start at the nostrils and follow the air down to the carina. Along the way, every exam question asks one of four things: which sinus opens into which meatus, which five arteries bleed in epistaxis, where pharyngeal tumors or fish bones hide, and which laryngeal muscle or nerve does which job.",
  u: [
    "<b>Nasal cavity &amp; septum</b>: roof formed by nasal, frontal, ethmoid, and sphenoid bones (cribriform plate fracture causes anosmia and CSF rhinorrhea); septum formed by perpendicular plate of ethmoid, vomer, and septal cartilage; superior and middle conchae are ethmoid, inferior concha is a separate bone.",
    "<b>Sinus &amp; tear drainage</b>: sphenoid sinus to sphenoethmoidal recess; posterior ethmoidal cells to superior meatus; middle ethmoidal cells to ethmoidal bulla; frontal, anterior ethmoidal, and maxillary sinuses to hiatus semilunaris in the middle meatus; nasolacrimal duct to inferior meatus.",
    "<b>Kiesselbach area</b>: anteroinferior septum anastomosis of 5 arteries — anterior and posterior ethmoidal (ophthalmic), sphenopalatine and greater palatine (maxillary), and septal branch of superior labial (facial).",
    "<b>Pharynx</b>: nasopharynx holds pharyngeal tonsil (adenoid), auditory tube, torus tubarius, and fossa of Rosenmuller (origin of EBV-associated NPC); oropharynx holds palatine and lingual tonsils (Waldeyer ring); laryngopharynx features the piriform recess where foreign bodies lodge.",
    "<b>Larynx skeleton &amp; membranes</b>: 3 unpaired (thyroid, cricoid, epiglottis) and 3 paired (arytenoid, corniculate, cuneiform) cartilages; quadrangular membrane forms vestibular ligament; conus elasticus forms vocal ligament and median cricothyroid ligament (pierced in emergency cricothyroidotomy); glottis has stratified squamous epithelium and no lymphatics.",
    "<b>Laryngeal muscles, nerves &amp; trachea</b>: posterior cricoarytenoid is the sole abductor opening the rima glottidis; cricothyroid tenses cords and is innervated by the external laryngeal nerve (injury causes monotone voice); internal laryngeal nerve gives sensory above cords; inferior (recurrent) laryngeal nerve supplies all other intrinsic muscles and sensory below cords; trachea (C6 to T4/T5, 16–20 C-rings, trachealis muscle posteriorly) bifurcates at the carina."
  ],
  say: {
    "U-C1": "Walk around the nasal cavity wall by wall: cribriform plate on the roof, hard palate on the floor, two bones plus one cartilage in the septum, and three conchae on the lateral wall where the bottom one is its own separate bone.",
    "U1": "Clear nasal fluid plus loss of smell after head trauma is the classic cribriform plate fracture tearing olfactory nerve rootlets and dura.",
    "U-C2": "Memorize the lateral wall drainage from top to bottom, and note that the hiatus semilunaris in the middle meatus catches three major sinuses while the inferior meatus is reserved for tears. On the septum side, five arteries meet at Kiesselbach area.",
    "U4": "Hiatus semilunaris is the big three-way gutter in the middle meatus: frontal sinus, anterior ethmoidal cells, and maxillary sinus.",
    "U5": "Kiesselbach area has two ethmoidals from the ophthalmic, two branches from the maxillary, and the superior labial from the facial; the inferior alveolar artery goes to the mandible.",
    "U-C3": "Divide the pharynx into three floors and pair each floor with its clinical landmark: fossa of Rosenmuller in the nasopharynx for NPC, Waldeyer ring across the nasopharynx and oropharynx, and the piriform recess in the laryngopharynx for swallowed fish bones.",
    "U6": "Nasopharyngeal carcinoma classically starts in the pharyngeal recess, also called the fossa of Rosenmuller, just behind the torus tubarius.",
    "U-C4": "Nine cartilages—three single, three paired—held together by two fibro-elastic sheets: the upper quadrangular membrane gives the false cord, while the lower conus elasticus gives the true vocal ligament and the median cricothyroid ligament.",
    "U8": "The conus elasticus gives you two high-yield structures: its upper free edge is the vocal ligament, and its anterior thickening is the median cricothyroid ligament pierced in an emergency cricothyroidotomy.",
    "U9": "True: true vocal cords take mechanical stress so they wear stratified squamous epithelium, and the glottis has no lymphatic vessels.",
    "U-C5": "One muscle opens the airway—posterior cricoarytenoid—and one intrinsic muscle has its own motor nerve—cricothyroid via the external laryngeal nerve. Everything else motor belongs to the recurrent laryngeal nerve.",
    "U10": "Posterior cricoarytenoid is the only abductor of the vocal folds; without it, the rima glottidis cannot open.",
    "U11": "Ligating the superior thyroid artery puts the external laryngeal nerve at risk, paralyzing the cricothyroid muscle and leaving the patient with a monotone voice.",
    "U14": "Use the ten post-test blanks on slide 44 as a rapid-fire checklist across the entire Upper Respiratory Tract lecture."
  }
};

/* ---------- W ---------- */
window.TUTOR_SCRIPT.sec.W = { part: "Video 1", time: "12&#8211;15 min",
  open: "The thoracic wall is both armor and a pump. Anchor your landmarks at the sternal angle for the second rib, learn the three intercostal muscle layers and the VAN bundle between the inner two, and keep your needle on the right rib border.",
  u: [
    "<b>Thoracic cage</b>: sternal angle of Louis joins manubrium and sternal body at the 2nd costal cartilage; ribs 1–7 are true, 8–12 are false (11–12 floating), and 3–9 are typical ribs articulating with vertebral body demifacets (head) and transverse processes (tubercle).",
    "<b>Intercostal layers</b>: external intercostals run inferoanteriorly to elevate ribs in inspiration (replaced anteriorly by membrane); internal and innermost intercostals run superoanteriorly to depress ribs in forced expiration (internal replaced posteriorly by membrane); transversus thoracis spans sternum to ribs 2–6 anteriorly.",
    "<b>Breathing mechanics</b>: quiet inspiration uses the diaphragm and external intercostals; quiet expiration is passive via lung elastic recoil; forceful inspiration recruits SCM, scalenes, pectoralis minor, serratus anterior/posterior, and levator costarum; forceful expiration recruits internal/innermost intercostals, transversus thoracis, and abdominal muscles.",
    "<b>Intercostal VAN bundle</b>: Vein, Artery, and Nerve run superior-to-inferior in the costal groove between the internal and innermost intercostal layers; anterior vessels connect to internal thoracic vessels, while posterior arteries come from the aorta and veins drain to the azygos/hemiazygos system.",
    "<b>Clinical procedures &amp; diaphragm</b>: intercostal nerve block targets the lower rib border, whereas thoracocentesis (7th/8th ICS posterior axillary/mid-scapular in this lecture) and tube thoracostomy (4th/5th ICS anterior/mid-axillary) hug the upper rib border; flail chest shows paradoxical movement; the diaphragm is supplied by the phrenic nerve (C3–C5)."
  ],
  say: {
    "W-C1": "Start with the bony frame: the sternal angle finds the second rib, ribs one through seven reach the sternum directly, and a typical rib grips the spine at two joints—head to vertebral bodies and tubercle to transverse process.",
    "W1": "The sternal angle of Louis always lines up with the second costal cartilage.",
    "W-C2": "Three muscle sheets line each space: external runs down-and-forward like hands in pockets to lift the ribs, while internal and innermost run at right angles to pull them down in forced expiration.",
    "W3": "External intercostals run inferoanteriorly, elevate the ribs in inspiration, and turn into a membrane anteriorly from the costochondral junction to the sternum.",
    "W-C3": "Quiet expiration costs zero muscle energy—it is pure elastic recoil. Only when breathing turns forceful do we recruit neck and chest elevators for inspiration or abdominal and internal intercostal muscles for expiration.",
    "W5": "SCM, scalenes, pectoralis minor, serratus anterior, and levator costarum are all inspiratory helpers; abdominal muscles and internal intercostals belong to forced expiration.",
    "W-C4": "Between the internal and innermost muscle layers sits the VAN bundle tucked into the costal groove along the lower rib border. Aim at the lower border to numb the nerve, and hug the upper border to miss the vessels.",
    "W7": "From top to bottom in the costal groove it is Vein, Artery, Nerve—running in the plane between the internal and innermost intercostal muscles.",
    "W9": "Block the nerve at the lower border where the VAN bundle hides; slide chest tubes and pleural needles over the upper border where it is safe.",
    "W-C5": "Match each pleural problem to its space and line, spot the inward-on-inspiration paradox of a flail chest, and trace the three major openings through the diaphragm.",
    "W10": "In the Thoracic Wall handout, fluid thoracocentesis is at the 7th or 8th space posteriorly, while a chest tube for air or blood goes in the 4th or 5th space at the anterior or mid-axillary line.",
    "W11": "An unattached flail segment gets sucked inward by negative intrathoracic pressure during inspiration and pushed outward during expiration—paradoxical movement."
  }
};

/* ---------- B ---------- */
window.TUTOR_SCRIPT.sec.B = { part: "Video 2", time: "12&#8211;15 min",
  open: "Now we put the lungs inside the pleura and trace every tube, vessel, lymph trunk, and nerve at the hilum. Almost every question here contrasts right against left or lung border against pleural border.",
  u: [
    "<b>Pleurae &amp; 6-8-10 / 8-10-12 rule</b>: parietal pleura (backed by extrapleural fascia) projects 1 inch above the medial third of the clavicle as the cupola; along the MCL, MAL, and paravertebral lines, the lung ends at ribs 6, 8, 10 and the pleura at ribs 8, 10, 12, leaving the costodiaphragmatic recess (tapped at the 8th–10th ICS midaxillary line in this lecture).",
    "<b>Mediastinal impressions</b>: right lung shows grooves for the arch of azygos vein, SVC, brachiocephalic vein, and esophagus; left lung shows grooves for the aortic arch, descending aorta, and subclavian artery, plus the cardiac notch and lingula; the pulmonary ligament hangs below each hilum.",
    "<b>Tracheobronchial tree &amp; hila</b>: sternal angle (DT4) marks the 2nd rib, aortic arch start/end, and carina; right main bronchus is wider, shorter, and more vertical (10 segments: 3+2+5) with an eparterial superior lobar bronchus above the right PA; left lung has 8 segments (4+4) and hyparterial bronchi; gas exchange starts at respiratory bronchioles.",
    "<b>Bronchial vessels &amp; azygos system</b>: 1 right bronchial artery arises from the 3rd right posterior intercostal artery (vein to azygos); 2 left bronchial arteries arise from the thoracic aorta at T5–T6 (vein to accessory hemiazygos); accessory hemiazygos drains left 5th–8th spaces and hemiazygos drains left 9th–11th spaces into the azygos vein.",
    "<b>Thoracic lymphatics &amp; nerves</b>: parasternal, anterior mediastinal, and tracheobronchial nodes feed the bronchomediastinal trunks to the right lymphatic duct and left thoracic duct (from cisterna chyli at L2); phrenic nerve (C3–C5) supplies diaphragm motor/sensory and mediastinal pleura/pericardium; vagus constricts bronchi and dilates vessels while sympathetic does the opposite; greater (T5–T9) and lesser (T10–T11) splanchnic nerves head below the diaphragm."
  ],
  say: {
    "B-C1": "Lock in the two-rib pleural gap across the three vertical lines: six-eight-ten for the lung, eight-ten-twelve for the pleura. That two-rib space at the base is the costodiaphragmatic recess.",
    "B1": "Six, eight, ten for the lung; eight, ten, twelve for the pleura; and the cupola rises one inch above the medial third of the clavicle.",
    "B2": "In the Lung handout, a pleural tap enters the costodiaphragmatic recess at the 8th, 9th, or 10th space in the midaxillary line, always hugging the upper border of the rib.",
    "B-C2": "Look at the medial surface of each lung as a mold of its mediastinal neighbors: veins and the esophagus stamp the right lung, while the aorta and subclavian artery stamp the left.",
    "B4": "Right mediastinal surface is venous plus esophagus—azygos arch, SVC, brachiocephalic vein—while the left surface carries the aortic arch, descending aorta, and subclavian artery.",
    "B-C3": "The sternal angle at disc T4–T5 is your master plane for the carina and aortic arch. At the right hilum, spot the right superior lobar bronchus sitting above the pulmonary artery—the only eparterial bronchus.",
    "B6": "Everything on that list sits at the sternal angle plane except the start of the trachea, which is up in the neck at C6.",
    "B7": "The right superior lobar bronchus is the eparterial bronchus above the right pulmonary artery, and the segment count in this lecture is ten on the right and eight on the left.",
    "B-C4": "Bronchial arteries follow a one-right, two-left rule: one right branch off the third right posterior intercostal artery, two left branches straight off the aorta at T5 or T6. Then follow the veins into the azygos on the right and accessory hemiazygos on the left.",
    "B9": "One right bronchial artery from the third right posterior intercostal artery with venous drainage to the azygos; two left bronchial arteries from the aorta at T5–T6 with venous drainage to the accessory hemiazygos.",
    "B-C5": "Finish with lymph and nerves: bronchomediastinal trunks join the right lymphatic duct and the thoracic duct from L2, while the pulmonary plexus balances vagal bronchoconstriction against sympathetic bronchodilation.",
    "B11": "Parasternal, anterior mediastinal, and tracheobronchial nodes feed the bronchomediastinal trunks, and the thoracic duct starts at the cisterna chyli at L2.",
    "B12": "Vagus constricts the airways and dilates pulmonary vessels; sympathetic dilates the airways and constricts vessels; and the greater and lesser splanchnic nerves come from T5–T9 and T10–T11."
  }
};

/* Part 2 Tutor script: Sections H, G, M */
window.TUTOR_SCRIPT = window.TUTOR_SCRIPT || { plan: [], sec: {} };
window.TUTOR_SCRIPT.sec = window.TUTOR_SCRIPT.sec || {};

/* ---------- H ---------- */
window.TUTOR_SCRIPT.sec.H = { part: "Video 2", time: "12&#8211;15 min",
  open: "Follow the lining of the airway from the nostrils to the alveoli. As we go deeper, the epithelium thins out, cartilage and glands disappear at the bronchiole, Club cells take over from goblet cells, and finally only a five-layer air-blood barrier stands between air and red blood cell.",
  u: [
    "<b>Portions &amp; upper epithelia</b>: conducting portion runs from nose to terminal bronchioles, respiratory portion from respiratory bronchioles to alveoli; nasal vestibule has keratinized stratified squamous; respiratory mucosa has pseudostratified ciliated columnar with goblet cells; olfactory mucosa has non-motile cilia, many nuclei, no goblet cells, and Bowman glands; oropharynx, oral epiglottis, and true vocal cords have non-keratinized stratified squamous.",
    "<b>Trachea, bronchi &amp; bronchioles</b>: trachea has C-shaped hyaline cartilage, posterior trachealis muscle, thick basement membrane, and shared adventitia with the esophagus; intrapulmonary bronchi have discontinuous cartilage plates and circular smooth muscle; regular bronchioles have no cartilage and rare or no goblet cells or glands.",
    "<b>Terminal &amp; respiratory bronchioles</b>: terminal bronchioles have simple columnar/cuboidal ciliated epithelium with dome-shaped Club (Clara) cells bearing short microvilli that secrete surfactant-helping lipoprotein, act as stem-like cells, detoxify, and release biomarker CC16; alveoli first bud off respiratory bronchioles.",
    "<b>Alveoli &amp; pneumocytes</b>: Type I simple squamous cells are 40% of cells but cover 90–95% of surface area; Type II cuboidal cells are 60% of cells and 5–10% of area, secreting surfactant and acting as progenitors; dust cells are macrophages; pores of Kohn provide collateral circulation to prevent atelectasis.",
    "<b>Air-blood barrier &amp; pleurae</b>: 5 layers in the slide are (1) alveolar fluid + surfactant, (2) alveolar epithelium, (3) fused basal lamina x 2, (4) capillary endothelium, and (5) RBC plasma membrane; visceral and parietal pleurae are lined by mesothelium producing lubricant fluid (malignancy: mesothelioma)."
  ],
  say: {
    "H-C1": "Start by splitting the tract at the terminal bronchiole, then contrast three upper linings: respiratory mucosa with motile cilia and goblet cells, olfactory mucosa with non-motile cilia and Bowman glands but zero goblet cells, and non-keratinized stratified squamous on every surface that takes mechanical wear.",
    "H1": "Olfactory mucosa has non-motile cilia, packed nuclei, Bowman glands in the lamina propria, and no goblet cells.",
    "H2": "The oropharynx, the oral surface of the epiglottis, and the true vocal cords all take friction, so they wear non-keratinized stratified squamous epithelium.",
    "H-C2": "Compare the three tubes in one table: C-shaped cartilage and posterior trachealis in the trachea, discontinuous cartilage plates in intrapulmonary bronchi, and zero cartilage with almost no goblet cells or glands once you enter a bronchiole.",
    "H4": "C-shaped hyaline cartilage, posterior trachealis muscle, a thick basement membrane, and shared adventitia with the esophagus is the signature of the trachea.",
    "H6": "Stepping from an intrapulmonary bronchus into a bronchiole drops out all cartilage plates and nearly all goblet cells and submucosal glands.",
    "H-C3": "At the terminal bronchiole, goblet cells give way to dome-shaped Club cells with short microvilli and four exam jobs: lipoprotein secretion, stem-cell repair, detoxification, and the biomarker CC16.",
    "H7": "Club cells are dome-shaped with blunt microvilli; they help surfactant via lipoprotein, act as stem-like cells, detoxify xenobiotics, and secrete CC16.",
    "H-C4": "Watch the number trap in the alveolus: Type II cuboidal cells outnumber Type I cells sixty to forty, but flat Type I cells cover ninety to ninety-five percent of the gas-exchange surface. And remember pores of Kohn equalize pressure between neighbors to prevent atelectasis.",
    "H9": "Type I makes up forty percent of the cells but covers ninety to ninety-five percent of the area; Type II makes up sixty percent of the cells and covers only five to ten percent.",
    "H10": "Pores of Kohn link adjacent alveoli for collateral ventilation so a blocked bronchiole does not collapse the alveolus.",
    "H-C5": "Count all five layers of the air-blood barrier on slide 42 from alveolus to red cell, and finish with the simple squamous mesothelium of the pleura.",
    "H12": "In slide order: alveolar fluid with surfactant, alveolar epithelium, fused double basal lamina, capillary endothelium, and the red blood cell plasma membrane."
  }
};

/* ---------- G ---------- */
window.TUTOR_SCRIPT.sec.G = { part: "Video 2", time: "12&#8211;15 min",
  open: "Before gas reaches the blood, physics sets the partial pressures. Follow air from dry atmospheric conditions through the 37-degree humidification boundary below the carina into the alveolus, then apply Henry’s law and the clinical oxygen cylinder rules.",
  u: [
    "<b>Standard conditions &amp; gas laws</b>: STP is 273.25 K (0 °C) and 760 mmHg (101.3 kPa, 14.9 psi); STPD is 0 °C, 760 mmHg, dry; BTPS is 37 °C (310 K), ambient pressure, saturated with water vapor (P<sub>H2O</sub> = 47 mmHg). 1 mole at STP is 22.4 L; PV = nRT with R = 0.082 L·atm/(K·mol) or 8.314 J/(K·mol); a liquid CO<sub>2</sub> cylinder at 20 °C sits at 830 psi.",
    "<b>Humidification &amp; Dalton’s law</b>: at the isothermic saturation boundary just below the carina, inspired gas reaches 37 °C, 100% RH, 44 mg/L water, and P<sub>H2O</sub> = 47 mmHg, diluting dry P<sub>O2</sub> from 159.1 mmHg down to 0.2093 &times; (760 &minus; 47) = 149.2 mmHg.",
    "<b>Alveolar gas equation &amp; Graham’s law</b>: P<sub>AO2</sub> = F<sub>iO2</sub>(P<sub>B</sub> &minus; P<sub>H2O</sub>) &minus; P<sub>aCO2</sub>/R + F with R = 183/230 &approx; 0.8 and F &approx; 2 mmHg, giving 101.2 mmHg with F (or with the F<sub>iO2</sub> &le; 0.6 clinical &times;1.2 formula) and 99.2 mmHg without F; for F<sub>iO2</sub> &gt; 0.6, subtract P<sub>aCO2</sub> directly without &times;1.2. Graham’s law states gas-phase diffusion is inversely proportional to &radic;MW.",
    "<b>Henry’s law &amp; blood gas solubility</b>: C = &alpha;P with blood &alpha;<sub>O2</sub> = 0.003 mL/dL/mmHg (0.3 mL/dL at P<sub>aO2</sub> 100 mmHg), and plasma CO<sub>2</sub> is ~23&times; more soluble than O<sub>2</sub> (0.490 vs 0.021 mL/mL); total blood gas content equals dissolved plus protein-bound plus chemically modified gas.",
    "<b>Medical oxygen cylinders &amp; delivery devices</b>: tank conversion factors are D = 0.16 L/psi (320 L at 2000 psi), E = 0.28 L/psi, and G = 2.41 L/psi; nasal cannula runs at 2–6 L/min (F<sub>iO2</sub> 0.28–0.44, &gt;6 L/min irritates nasal mucosa) and simple face mask at 3–8 L/min (F<sub>iO2</sub> 0.30–0.80)."
  ],
  say: {
    "G-C1": "Separate STPD from BTPS right away: BTPS is 37 degrees Celsius, ambient pressure, and saturated with 47 mmHg of water vapor. Then lock in 22.4 liters per mole at STP and the two numbers for the gas constant R.",
    "G1": "BTPS stands for body temperature at 37 degrees Celsius, ambient pressure, and gas saturated with 47 mmHg of water vapor.",
    "G2": "One mole of ideal gas occupies 22.4 liters at STP, with R equal to 0.082 liter-atmospheres per Kelvin-mole or 8.314 Joules per Kelvin-mole.",
    "G-C2": "Just below the carina sits the isothermic saturation boundary: air hits 37 degrees, 100 percent humidity, 44 milligrams per liter, and 47 mmHg of water vapor. Subtracting 47 from 760 leaves 713 mmHg of dry gas, dropping PO2 from 159.1 to 149.2 mmHg before a single molecule crosses an alveolus.",
    "G4": "Subtract 47 mmHg of water vapor from 760 to get 713, then multiply by 0.2093 to get 149.2 mmHg in moist bronchial air.",
    "G5": "At the isothermic saturation boundary below the carina, gas is at 37 degrees Celsius, 100 percent relative humidity, 44 milligrams per liter, and 47 mmHg water vapor pressure.",
    "G-C3": "Know both numbers from the alveolar gas equation on room air: 99.2 mmHg when you drop the correction factor F, and 101.2 mmHg when you include F equals 2 or use the clinical times-1.2 shortcut for FiO2 up to 0.6. Above FiO2 0.6, drop the 1.2 multiplier.",
    "G7": "149.2 minus 40 over 0.8 gives 99.2 mmHg without F, and adding the 2 mmHg correction factor—or subtracting 40 times 1.2—gives 101.2 mmHg.",
    "G8": "Once FiO2 goes above 0.6, the clinical formula drops the 1.2 multiplier and simply subtracts PaCO2 from FiO2 times PB minus water vapor.",
    "G-C4": "Henry’s law multiplies partial pressure by solubility: 0.003 times 100 gives 0.3 mL of dissolved O2 per deciliter of arterial blood, while CO2 is 23 times more soluble in plasma. For the wards, remember tank factor 0.16 for a D cylinder and keep nasal cannula flow at or below 6 liters per minute.",
    "G10": "At a PaO2 of 100 mmHg, 0.003 times 100 gives 0.3 mL of dissolved O2 per deciliter, and CO2 is about 23 times more soluble in plasma than O2."
  }
};

/* ---------- M ---------- */
window.TUTOR_SCRIPT.sec.M = { part: "Video 2", time: "14&#8211;18 min",
  open: "Mechanics of breathing links muscle forces and pleural pressures to lung compliance, airway resistance, and the work of breathing—explaining why fibrosis makes the lung stiff to inflate while COPD traps air during expiration.",
  u: [
    "<b>Muscles &amp; pressures</b>: quiet inspiration uses the diaphragm and external intercostals; maximal inspiration adds SCM, serratus anterior, and scalenes; quiet expiration is passive; maximal expiration uses internal intercostals and abdominal muscles. At FRC, P<sub>A</sub> = 0, P<sub>pl</sub> = &minus;5 cmH<sub>2</sub>O, and P<sub>L</sub> = +5 cmH<sub>2</sub>O; passive positive-pressure ventilation turns P<sub>pl</sub> positive.",
    "<b>Recoil, surfactant &amp; relaxation curve</b>: DPPC surfactant from Type II cells lowers surface tension; smaller alveoli have more surfactant per area and lower recoil force, expanding more easily in inspiration (slide 16). At FRC, inward lung recoil balances outward chest wall recoil; pneumothorax collapses the lung to minimal air and springs the chest wall out.",
    "<b>Compliance</b>: C = &Delta;V/&Delta;P (normal C<sub>L</sub> = 0.2 L/cmH<sub>2</sub>O, combined lung-thorax = 0.1 L/cmH<sub>2</sub>O via 1/C<sub>total</sub> = 1/C<sub>L</sub> + 1/C<sub>CW</sub>); static compliance is measured at zero flow (breath-hold), dynamic during breathing; compliance rises in emphysema and falls in fibrosis.",
    "<b>Airway resistance &amp; dynamic compression</b>: Poiseuille R = 8&eta;l/(&pi;r<sup>4</sup>); nose-mouth is 50%, glottis 25%, airways &gt;2 mm 15%, and small airways &lt;2 mm only 10% due to huge parallel cross-sectional area. Forced expiration creates positive P<sub>pl</sub> that dynamically compresses non-cartilaginous airways, causing air trapping in COPD where recoil and radial traction are lost; vagus constricts, sympathetic dilates.",
    "<b>Flow, breath sounds &amp; work</b>: laminar flow in small airways (viscosity), turbulent in large airways (density), transitional at branches; vesicular sounds (Insp &gt; Exp, &le;200 Hz) over lungs vs bronchial (Exp &gt; Insp, &ge;400 Hz) over manubrium. Rest work is 65% elastic, 25% airway resistance, 10% tissue viscous (fibrosis raises elastic work; COPD raises resistive/expiratory work)."
  ],
  say: {
    "M-C1": "Start at rest at FRC: alveolar pressure is zero, intrapleural pressure is minus five, and transpulmonary pressure is plus five. Quiet inspiration pulls pleural pressure more negative, whereas passive positive-pressure ventilation pushes pleural pressure positive.",
    "M1": "Diaphragm and external intercostals drive quiet inspiration; SCM, serratus anterior, and scalenes join in maximal inspiration; and internal intercostals plus abdominal muscles drive forced expiration.",
    "M2": "At end-expiration at FRC, alveolar pressure is 0, intrapleural pressure is minus 5 cmH2O, and transpulmonary pressure PA minus Ppl is plus 5 cmH2O.",
    "M-C2": "Surfactant DPPC lowers surface tension, and slide 16 highlights that smaller alveoli pack more surfactant per unit area so they have a smaller recoil force and expand more easily. On the relaxation curve, inward lung pull and outward chest pull balance at FRC.",
    "M4": "In slide 16, small alveoli have a higher density of surfactant per surface area, giving them a lower elastic recoil force so they expand more easily during inspiration.",
    "M5": "At FRC, inward lung recoil equals outward chest wall recoil; opening the chest lets the lung collapse to minimal air while the rib cage springs outward.",
    "M-C3": "Compliance is the inverse of recoil: lung alone is 0.2, chest wall is 0.2, and together in series they add reciprocals to give 0.1 liters per cmH2O. Emphysema loses recoil so compliance shoots up; fibrosis stiffens the lung so compliance drops.",
    "M7": "Adding reciprocals of 0.2 and 0.2 gives a combined compliance of 0.1 L/cmH2O; static compliance rises in emphysema and falls in pulmonary fibrosis.",
    "M9": "Static compliance is measured during a breath-hold with zero airflow, while dynamic compliance is measured during active breathing.",
    "M-C4": "Even though radius to the fourth power rules a single tube, small airways under 2 millimeters contribute only 10 percent of total resistance because thousands of parallel branches create a massive total cross-sectional area. During forced expiration in COPD, high positive pleural pressure crushes those small untethered airways, trapping air.",
    "M10": "Upper and large airways account for 90 percent of resistance—50 percent in the nose and mouth, 25 at the glottis, 15 in bronchi over 2 mm—leaving only 10 percent in small airways because of their huge parallel cross-sectional area.",
    "M11": "In COPD, loss of elastic recoil and radial traction lets high positive pleural pressure during forced expiration compress non-cartilaginous airways early, causing air trapping.",
    "M-C5": "Match each breath sound to its location and ratio—vesicular is inspiration longer than expiration over the lung fields, bronchial is expiration longer than inspiration over the manubrium—and split resting work of breathing into 65 percent elastic, 25 percent airway resistance, and 10 percent tissue viscosity.",
    "M13": "At rest, 65 percent of work overcomes elastic recoil, 25 percent airway resistance, and 10 percent tissue viscosity; fibrosis increases elastic work while COPD increases airway resistance work."
  }
};

/* Part 3 Tutor script: Sections E, T, C. */
window.TUTOR_SCRIPT = window.TUTOR_SCRIPT || { plan: [], sec: {} };
window.TUTOR_SCRIPT.sec = window.TUTOR_SCRIPT.sec || {};

/* ---------- E ---------- */
window.TUTOR_SCRIPT.sec.E = { part: "Video 3", time: "14&#8211;18 min",
  open: "Gas exchange is a four-step pressure cascade from dry air to arterial blood, governed by Fick’s law across a 0.3-micron membrane and by how well ventilation matches perfusion from apex to base.",
  u: [
    "<b>O<sub>2</sub> cascade &amp; alveolar gas equation</b>: dry air 160 mmHg &rarr; humidified tracheal air 150 mmHg (diluted by P<sub>H2O</sub> 47 mmHg) &rarr; alveolar P<sub>AO2</sub> = P<sub>IO2</sub> &minus; (P<sub>ACO2</sub>/R) = 100–103 mmHg (R = 0.8 mixed, 1.0 carb, 0.7 fat) &rarr; arterial P<sub>aO2</sub> 97 mmHg due to the 2% physiologic shunt (bronchial + thebesian veins).",
    "<b>Alveolar ventilation &amp; Henry’s law</b>: V&#775;<sub>A</sub> = (TV &minus; DS) &times; RR = 4200 mL/min normally; dissolved O<sub>2</sub> = 0.003 &times; P<sub>O2</sub> (only free dissolved gas creates partial pressure).",
    "<b>Fick’s law &amp; D<sub>LCO</sub></b>: V&#775;<sub>gas</sub> = D &times; A &times; (P<sub>1</sub> &minus; P<sub>2</sub>) / T with D &prop; Solubility / &radic;MW. CO<sub>2</sub> is 24.2&times; more soluble than O<sub>2</sub>, so it diffuses ~20&times; faster. Normal D<sub>LCO</sub> is ~25 mL/min/mmHg (80–120%): low in emphysema, fibrosis, anemia, PE, Valsalva; high in M&uuml;ller’s maneuver, alveolar hemorrhage, polycythemia, exercise.",
    "<b>O<sub>2</sub> content &amp; transit time</b>: total O<sub>2</sub> = (1.34 &times; Hb &times; S<sub>O2</sub>) + (0.003 &times; P<sub>O2</sub>) = 20.4 mL/dL arterial vs 15.19 mL/dL venous (250 mL O<sub>2</sub>/min at CO 5 L/min). Transit time is 0.75 s; O<sub>2</sub> equilibrates in 0.25 s (1/3) and N<sub>2</sub>O in 0.075 s (1/10, perfusion-limited), whereas CO never equilibrates (diffusion-limited).",
    "<b>Regional V/Q (upright)</b>: apex has P<sub>pl</sub> &minus;10 cmH<sub>2</sub>O, largest resting alveoli, lowest compliance, low V, even lower Q, and highest V/Q; base has P<sub>pl</sub> &minus;2 cmH<sub>2</sub>O, smallest resting alveoli, highest compliance, high V, highest Q (Zone 3), and lowest V/Q (overall V/Q = 4200/5000 = 0.84).",
    "<b>V/Q mismatch &amp; exercise</b>: dead space (V/Q = &infin;, P<sub>AO2</sub> 150, P<sub>ACO2</sub> 0; Fowler for anatomical, Bohr DS/TV = [P<sub>ACO2</sub> &minus; P<sub>ECO2</sub>]/P<sub>ACO2</sub> for physiological) vs shunt (V/Q = 0, P<sub>aO2</sub> 40, P<sub>aCO2</sub> 46). A–a gradient (normally 0–10 or Age/4 + 4) rises in shunt, V/Q mismatch, and diffusion defect. Moderate exercise maintains normal P<sub>aO2</sub>, P<sub>aCO2</sub>, and pH via isocapnic buffering."
  ],
  say: {
    "E-C1": "Walk oxygen down four steps: 160 in dry air, 150 in the humidified trachea after subtracting 47 for water vapor, 100 in the alveolus from the alveolar gas equation, and 97 in arterial blood because of the 2 percent physiologic shunt from bronchial and thebesian veins.",
    "E1": "Read the stem carefully: dry inspired air at sea level is 760 times 0.21, which is 160 mmHg. Once humidified in the trachea it drops to 150.",
    "E2": "Switching from carbohydrates (R = 1.0) to fat (R = 0.7) increases the PACO2-over-R term, so PAO2 drops from 110 to about 93 mmHg; PaO2 stays slightly below PAO2 because of the 2 percent bronchial and thebesian shunt.",
    "E-C2": "Fick’s law puts area, pressure gradient, and solubility on top, and barrier thickness and the square root of molecular weight on the bottom. CO2 is 24.2 times more soluble than O2, so it diffuses 20 times faster. Watch the false highs and lows on DLCO: Müller’s maneuver and polycythemia raise it, Valsalva and anemia lower it.",
    "E4": "Membrane thickness sits in the denominator of Fick’s law, so thickening the barrier is the only choice that decreases diffusion.",
    "E6": "Pair high capillary blood volume or high Hb with high DLCO—Müller’s maneuver, alveolar hemorrhage, polycythemia—and reduced area or reduced flow with low DLCO—emphysema or Valsalva.",
    "E-C3": "Arterial blood carries 20.4 mL of O2 per dL and venous blood carries 15.19, giving 5 mL extracted per dL or 250 mL per minute. A red cell spends 0.75 seconds in the capillary: N2O equilibrates in a tenth of that time and normal O2 in a third—both perfusion-limited—while CO binds Hb so tightly that plasma PCO never rises, making CO always diffusion-limited.",
    "E7": "Plug 15 grams of Hb into 1.34 times saturation plus 0.003 times PO2: 20.4 mL/dL arterial, 15.19 venous, and 250 mL per minute across a 5-liter cardiac output.",
    "E8": "Carbon monoxide is always diffusion-limited because it locks onto hemoglobin without raising dissolved plasma partial pressure.",
    "E-C4": "Gravity pulls the lung down, making apical intrapleural pressure minus 10 versus minus 2 at the base. So apical alveoli start out largest at rest, sit on the flat top of the compliance curve, and ventilate less than the base—yet apical blood flow is so tiny that V/Q is highest at the apex and lowest at the base, averaging 0.84 overall.",
    "E10": "At the apex, more negative intrapleural pressure stretches resting alveoli to their largest baseline size, making them less compliant during inspiration.",
    "E11": "Subtract dead space first: 300 minus 100 is 200 mL per breath, times 10 breaths per minute is 2000 mL/min of alveolar ventilation. Divide by 5000 mL/min of cardiac output to get 0.4.",
    "E-C5": "Dead space is ventilation without perfusion—V/Q infinity, alveolar gas looks like tracheal air at 150 and 0, and we measure physiological dead space with Bohr’s equation. Shunt is perfusion without ventilation—V/Q zero, blood stays venous at 40 and 46. Both widen the A-a gradient, whereas moderate exercise keeps arterial blood gases flat through isocapnic buffering.",
    "E12": "Use Bohr’s formula: 40 minus 24 over 40 is 0.40, and 40 percent of a 500 mL tidal volume gives 200 mL of physiological dead space.",
    "E13": "Pure dead space matches humidified inspired air at 150 and 0; pure shunt matches mixed venous blood at 40 and 46; and shunt, V/Q mismatch, and diffusion defects all widen the A-a gradient."
  }
};

/* ---------- T ---------- */
window.TUTOR_SCRIPT.sec.T = { part: "Video 3", time: "14&#8211;18 min",
  open: "Gas transport explains how red blood cells boost oxygen capacity 65-fold through cooperative T-to-R transitions in hemoglobin, how allosteric effectors shift P50, and how CO2 transport couples with the Bohr and Haldane effects.",
  u: [
    "<b>Physical transport &amp; RBCs</b>: partial pressure drives gas into liquid while tension drives gas out (equal at equilibrium). O<sub>2</sub> crosses 9 barriers from alveolar air (via surfactant) to Hb; O<sub>2</sub> diffusing capacity rises from 20 at rest to 65 mL/min/mmHg in exercise, and RBCs boost O<sub>2</sub> capacity 65-fold.",
    "<b>HbA oxygenation (T &rarr; R)</b>: HbA (&alpha;<sub>2</sub>&beta;<sub>2</sub>, MW 64,500 Da, 4 Fe<sup>2+</sup> hemes) binds O<sub>2</sub> by oxygenation (not oxidation) in 0.01 s. O<sub>2</sub> binds the wider &alpha;-subunit pocket first, pulls Fe<sup>2+</sup> 0.6 &Aring; into the porphyrin plane (high-spin &rarr; low-spin), breaks salt bridges, rotates &alpha;&beta; dimers 15&deg;, expels 2,3-BPG, and opens the &beta; pocket (positive cooperativity, sigmoidal curve).",
    "<b>P<sub>50</sub> (27 mmHg) &amp; 2,3-BPG</b>: right shift (P<sub>50</sub> &gt; 27 = lower affinity, better unloading) is caused by &uarr;H<sup>+</sup> (protonated &beta;-His146 ion-pairing with Asp94 in T-state), &uarr;CO<sub>2</sub> (N-terminal carbamino), &uarr;temperature, and &uarr;2,3-BPG. 2,3-BPG (from anaerobic glycolysis, 1:1 non-covalent with &beta;-chains) rises with thyroid hormone, GH, androgens, exercise, anemia, hypoxia, and altitude, but falls in acidosis.",
    "<b>Variants, CO &amp; myoglobin</b>: embryonic Gower 1 (&zeta;<sub>2</sub>&epsilon;<sub>2</sub>), Gower 2 (&alpha;<sub>2</sub>&epsilon;<sub>2</sub>), Portland (&zeta;<sub>2</sub>&gamma;<sub>2</sub>); fetal HbF (&alpha;<sub>2</sub>&gamma;<sub>2</sub>) binds 2,3-BPG weakly &rarr; left shift; adult 97% HbA (&alpha;<sub>2</sub>&beta;<sub>2</sub>), 2–2.5% HbA<sub>2</sub> (&alpha;<sub>2</sub>&delta;<sub>2</sub>), &lt;1% HbF. CO binds Fe<sup>2+</sup> with 210&times; affinity (left shift); MetHb has Fe<sup>3+</sup>; SulfHb comes from hydroxylamine sulfate. Myoglobin is a 153-AA monomer (16,700 Da) with a rectangular hyperbolic curve, no cooperativity, and no Bohr effect.",
    "<b>CO<sub>2</sub> transport, Bohr &amp; Haldane</b>: 7% dissolved, 23% carbaminoHb, 70% HCO<sub>3</sub><sup>&minus;</sup> via RBC carbonic anhydrase and Cl<sup>&minus;</sup>/HCO<sub>3</sub><sup>&minus;</sup> shift (Gas Exchange p.33 lists 5%, 3%, 90+%). Bohr effect in systemic capillaries (&uarr;H<sup>+</sup>, &uarr;CO<sub>2</sub> unloads O<sub>2</sub>) vs Haldane effect in alveolar capillaries (O<sub>2</sub> binding unloads CO<sub>2</sub> and H<sup>+</sup>)."
  ],
  say: {
    "T-C1": "Partial pressure pushes gas into liquid; tension pushes it back out. Follow oxygen across the nine layers from alveolar air and surfactant into hemoglobin: exercise triples O2 diffusing capacity from 20 to 65, and red cells multiply blood O2 capacity 65-fold.",
    "T1": "Tension is the escaping force that balances partial pressure at equilibrium, and young-adult O2 diffusing capacity jumps from 20 at rest to 65 during exercise.",
    "T-C2": "Know the exact three-step choreography of HbA oxygenation: O2 enters the wider alpha pocket first, pulls ferrous iron 0.6 Angstroms into the porphyrin ring from high-spin to low-spin, breaks the salt bridges, rotates alpha-beta 15 degrees, kicks out 2,3-BPG, and opens the beta pocket.",
    "T3": "Alpha subunit first because its heme pocket is wider, then Fe2+ drops 0.6 Angstroms into the plane from high-spin to low-spin, breaking salt bridges, rotating 15 degrees, and expelling 2,3-BPG.",
    "T-C3": "Normal P50 is 27 mmHg. Heat, CO2, protons—acting through the beta-His146 to Asp94 ion pair—and 2,3-BPG all stabilize the T-state and shift the curve right to unload O2. Remember the exam trap on 2,3-BPG: hormones, hypoxia, anemia, and altitude raise it, but acidosis lowers it.",
    "T6": "At low pH, protonated His146 on the beta chain forms an ion pair with Asp94 that locks deoxyhemoglobin in the T-state and raises P50.",
    "T7": "2,3-BPG comes from anaerobic glycolysis, binds beta chains 1-to-1 non-covalently, rises with thyroid hormone, GH, androgens, anemia, and altitude, and decreases in acidosis.",
    "T-C4": "Compare every cousin of HbA: fetal HbF is alpha-2-gamma-2 and ignores 2,3-BPG so it shifts left to pull O2 across the placenta; carbon monoxide binds Fe2+ 210 times tighter than O2; methemoglobin has Fe3+; sulfhemoglobin comes from hydroxylamine sulfate; and muscle myoglobin is a 153-amino-acid monomer with a hyperbolic curve and zero cooperativity.",
    "T9": "HbF is alpha-2-gamma-2 and barely binds 2,3-BPG, shifting its curve to the left so the fetus can extract oxygen from maternal HbA.",
    "T10": "CO binds heme Fe2+ with 210 times the affinity of O2, methemoglobin has ferric Fe3+, and sulfhemoglobin is caused by sulfur agents like hydroxylamine sulfate.",
    "T11": "Myoglobin is a single 153-amino-acid chain of 16,700 Daltons in muscle with a rectangular hyperbolic curve, higher affinity than HbA, no cooperativity, and no H+ or CO2 binding.",
    "T-C5": "Most CO2 rides as bicarbonate—70 percent in the Gas Transport slides, over 90 percent in the Gas Exchange slides—made by RBC carbonic anhydrase and exported via the chloride shift. Then lock in the two effects by location: Bohr in systemic capillaries unloads O2 when H+ and CO2 rise; Haldane in pulmonary capillaries unloads CO2 when O2 binds Hb.",
    "T12": "Bicarbonate is always the major form of CO2 transport, generated by RBC carbonic anhydrase and exported in exchange for chloride.",
    "T13": "Bohr happens in systemic capillaries where H+ and CO2 lower O2 affinity to unload oxygen; Haldane happens in alveolar capillaries where oxygenation of Hb lowers CO2 and H+ affinity to unload carbon dioxide."
  }
};

/* ---------- C ---------- */
window.TUTOR_SCRIPT.sec.C = { part: "Video 3", time: "12&#8211;15 min",
  open: "The pulmonary circulation carries the entire cardiac output through thin-walled vessels at one-sixth of systemic pressure, adjusts its resistance through capillary recruitment, lung volume, and hypoxic vasoconstriction, and keeps the 0.3-micron barrier dry via Starling forces and lymphatics.",
  u: [
    "<b>Pulmonary vs systemic &amp; bronchial circulation</b>: thin walls with little smooth muscle give the pulmonary bed low pressure (PA ~25/8, mean 15 mmHg vs systemic 120/80, mean 100 mmHg) and low resistance with the <b>same flow</b> (equal RV and LV output). Bronchial arteries branch from the aorta and intercostal arteries at high pressure to supply conducting airways to the terminal bronchioles and drain partly via pulmonary veins (anatomic shunt).",
    "<b>Recruitment &amp; distension</b>: when pulmonary pressure or blood flow rises (e.g., exercise), PVR falls primarily via <b>capillary recruitment</b> (opening closed capillaries, main mechanism) plus <b>distension</b> (widening flattened capillaries).",
    "<b>Lung volume &amp; PVR (U-shaped curve)</b>: at high lung volume, alveolar vessels are squashed (&uarr;PVR) while extra-alveolar vessels are pulled open by radial traction and negative P<sub>pl</sub> (&darr;PVR); at low volume, extra-alveolar vessels narrow (&uarr;PVR). Total PVR is <b>lowest at FRC</b> and rises toward TLC or RV.",
    "<b>Vasoactive mediators &amp; HPV</b>: vasoconstrictors (&uarr;PVR) include hypoxia (P<sub>AO2</sub> &lt; 70 mmHg), endothelin, serotonin, histamine, norepinephrine, and TXA<sub>2</sub>; vasodilators (&darr;PVR) include NO, PDE inhibitors, PGI<sub>2</sub>, Ca<sup>2+</sup> blockers, and ACh. HPV diverts blood away from hypoxic alveoli to reduce shunt (and keeps fetal PVR high until the first breath).",
    "<b>Starling’s equation &amp; pulmonary edema</b>: net outward filtration (~20 mL/h normally) is drained by perivascular lymphatics to hilar nodes. Early <b>interstitial edema</b> shows peribronchial cuffing; late <b>alveolar edema</b> floods alveoli one by one (causing severe shunt) and is cleared by epithelial Na<sup>+</sup>/K<sup>+</sup>-ATPase. Causes: cardiogenic (&uarr;P<sub>c</sub>: LV failure, mitral stenosis, fluid overload) vs non-cardiogenic (&darr;&pi;<sub>c</sub>, &uarr;K in sepsis/ALI/O<sub>2</sub> toxicity, or &darr;lymphatic drainage)."
  ],
  say: {
    "C-C1": "Three phrases define the pulmonary circulation: low pressure, low resistance, same flow. Then contrast it with the high-pressure bronchial arteries from the aorta and intercostals, which feed the airways down to the terminal bronchioles and drain partly into the pulmonary veins.",
    "C1": "Compared with the systemic bed, the pulmonary circulation has both lower pressure and lower resistance while carrying the exact same cardiac output.",
    "C2": "Bronchial arteries come off the aorta and intercostal arteries at high systemic pressure, supply conducting airways to the terminal bronchioles, and drain partly via pulmonary veins.",
    "C-C2": "Two graphs explain PVR: first, when blood flow rises in exercise, PVR drops mainly by recruiting closed capillaries and secondarily by distending open ones. Second, lung inflation squashes alveolar capillaries but pulls extra-alveolar vessels open by radial traction, giving a U-shaped total PVR curve with its minimum right at FRC.",
    "C4": "During exercise, PVR falls primarily through capillary recruitment—opening previously closed vessels—along with capillary distension.",
    "C5": "Total PVR is lowest at FRC because alveolar vessels are squashed toward TLC while extra-alveolar vessels narrow toward RV.",
    "C-C3": "Unlike systemic arteries, pulmonary arteries constrict when alveolar PO2 falls below 70 mmHg. That hypoxic vasoconstriction diverts blood away from unventilated alveoli to reduce shunt, and keeps fetal PVR high until the baby takes its first oxygenated breath.",
    "C6": "Alveolar hypoxia triggers hypoxic pulmonary vasoconstriction and increases PVR; every other option lowers PVR.",
    "C7": "Below a PAO2 of 70 mmHg, local vasoconstriction redirects blood away from poorly ventilated alveoli to reduce shunt, while in the fetus generalized HPV keeps PVR high until the first breath.",
    "C-C4": "Normal Starling forces push a slow 20 mL per hour of fluid outward into perivascular lymphatics. When filtration overwhelms those lymphatics, early interstitial edema with peribronchial cuffing turns into late alveolar edema—flooding alveoli one by one, creating a severe shunt, and relying on epithelial Na/K-ATPase to pump the fluid out.",
    "C9": "Cardiogenic edema raises capillary hydrostatic pressure—LV failure, mitral stenosis, fluid overload—whereas non-cardiogenic edema lowers plasma oncotic pressure, blocks lymphatics, or raises the filtration coefficient K in sepsis, acute lung injury, or oxygen toxicity.",
    "C10": "Early interstitial edema collects in perivascular and peribronchial spaces and drains via lymphatics to hilar nodes; late alveolar edema floods alveoli, causes shunt, and is pumped out by epithelial Na/K-ATPase."
  }
};

/* ---------- P ---------- */
window.TUTOR_SCRIPT.sec.P = { part: "Video 4", time: "14&#8211;18 min",
  open: "Pulmonary function testing comes down to three questions: which volumes can a simple spirometer actually see, did the patient blow an acceptable and repeatable curve, and how do we walk through the interpretation flowchart and flow-volume loop?",
  u: [
    "<b>Volumes &amp; capacities</b>: four volumes (TV, IRV, ERV, RV) combine into four capacities (IC = TV + IRV, FRC = ERV + RV, VC = IRV + TV + ERV, TLC = VC + RV). Simple spirometry <b>cannot measure RV, FRC, or TLC</b>.",
    "<b>Prep &amp; withholding</b>: withhold SABA 4–6 h, SAMA 12 h, LABA 24 h, ultra-LABA 36 h, LAMA 36–48 h, theophylline 12 h (SR 24 h); do not withhold ICS or anti-leukotrienes. GLI2012 reference values use <b>age, sex, height, and ethnicity</b> — never weight.",
    "<b>ATS/ERS 2019 acceptability</b>: inhale to TLC in &le; 2 s; 1. BEV &le; 5% FVC or 0.100 L; 2. EOFE plateau &le; 0.025 L in last 1 s, time &ge; 15 s, or repeatable FVC; 3. no cough in 1st s, glottis closure, tongue block, or leak; 4. FIVC &minus; FVC &le; 0.100 L or 5% FVC.",
    "<b>Repeatability &amp; best test</b>: 3–8 trials; top two FVC and top two FEV<sub>1</sub> within &le; 0.150 L in adults; report the <b>largest FEV<sub>1</sub> and largest FVC</b> even if from different trials.",
    "<b>Reversibility &amp; algorithm</b>: salbutamol 400 &mu;g (wait 15 min) or ipratropium 160 &mu;g (wait 30 min); positive response is <b>&ge; 12% and &ge; 200 mL</b> from baseline (or &gt; 10% predicted in 2021). Follow FEV<sub>1</sub>/FVC (&lt; 70% = obstruction) &rarr; FVC (&lt; 80% = suspect restriction or check Corrected %FVC) &rarr; FEF<sub>25–75%</sub> (&lt; 65% = small airway disease).",
    "<b>Flow-volume loops</b>: scooped concave expiratory limb in obstruction; steep narrow witch's hat in parenchymal restriction; flat inspiratory limb in variable extrathoracic obstruction (stridor); flat expiratory limb in variable intrathoracic obstruction (wheezes); both flat in fixed central obstruction."
  ],
  say: {
    "P-C1": "Start with the one rule they always test: a simple spirometer only sees air crossing the lips, so it can never measure residual volume, FRC, or TLC. For those three, you need a body box or gas dilution.",
    "P1": "Anything that includes residual volume is invisible to simple spirometry: RV itself, FRC, and TLC.",
    "P-C2": "Forced spirometry is a huge pressure spike in the chest, head, and eyes, which explains the contraindication list. For bronchodilator withholding times, walk up the ladder from four-to-six hours for SABA up to forty-eight hours for LAMA, and remember weight is never in the GLI reference equation.",
    "P3": "Step up the withholding ladder: SABA four to six hours, SAMA twelve, LABA twenty-four, ultra-LABA thirty-six, LAMA thirty-six to forty-eight, and leave inhaled steroids alone.",
    "P-C3": "Four acceptability checks, then repeatability: fast inspiration under two seconds, BEV under five percent or a hundred mils, a clean one-second plateau or fifteen seconds of blow, no first-second cough or leak, and FIVC within a hundred mils of FVC. Then check that the top two FVC and FEV1 values are within a hundred and fifty mils.",
    "P6": "Lock in the 2019 numbers: BEV five percent or a hundred mils, plateau twenty-five mils in the last second or fifteen seconds total, and adult repeatability within a hundred and fifty mils.",
    "P7": "Compare the two largest values, not the highest and lowest: both FEV1 and FVC are repeatable within a hundred and fifty mils, and Trial 2 holds the largest FEV1 and the largest FVC.",
    "P-C4": "Walk the flowchart from the top: check FEV1 over FVC against seventy percent first. If it is normal, check FVC for restriction and FEF25-75 for small airway disease. If FEV1 over FVC is low, grade severity by percent predicted FEV1, use corrected FVC to separate air-trapping pure obstruction from a combined defect, and check the twelve-percent and two-hundred-mil bronchodilator rule.",
    "P8": "Both men have pure obstruction, but Case 3 is forty-three percent predicted and fails the reversibility cutoff, while Case 4 is sixty-nine percent predicted and hits plus twelve percent and plus two hundred mils right on the nose.",
    "P9": "Both patients have a normal FEV1-to-FVC ratio above eighty percent, so look at FVC next: Case 5 has a low FVC of sixty-nine percent predicted, meaning suspected moderate restriction, whereas Case 6 has a normal FVC but an FEF25-75 of fifty-one percent, classic small airway disease.",
    "P-C5": "Every flow-volume loop tells a mechanical story: scooped-out expiration in distal obstruction, a narrow steep witch's hat in parenchymal fibrosis, flat inspiration in variable extrathoracic obstruction, flat expiration in variable intrathoracic obstruction, and a flat box when the central airway is fixed.",
    "P11": "Vocal cord paralysis sits outside the chest: negative airway pressure during inspiration sucks the cords inward against atmospheric pressure, flattening the bottom inspiratory limb and causing stridor."
  }
};

/* ---------- R ---------- */
window.TUTOR_SCRIPT.sec.R = { part: "Video 4", time: "14&#8211;18 min",
  open: "Respiratory control is a feedback loop: sensors in the medulla, carotid bodies, and lungs feed the brainstem rhythm generator, which drives the respiratory muscles to keep arterial PO2, PCO2, and pH tightly locked.",
  u: [
    "<b>Brainstem centers</b>: the <b>DRG (NTS)</b> drives inspiration via the phrenic nerve (C3–C5); the <b>intermediate VRG pre-Botzinger complex</b> is the pacemaker rhythm generator; rostral (Botzinger) and caudal (NRA) VRG drive expiration; the lower-pontine <b>apneustic center</b> excites inspiration; the upper-pontine <b>pneumotaxic center</b> inhibits inspiration.",
    "<b>Central chemoreceptors</b> (ventral medulla, ~70% of CO<sub>2</sub> drive): sense <b>H<sup>+</sup> in CSF</b> (normal pH 7.32, low protein = poor buffering) after <b>CO<sub>2</sub> crosses the blood-brain barrier</b>; arterial H<sup>+</sup> cannot cross the BBB easily.",
    "<b>Peripheral chemoreceptors</b> (carotid bodies via CN IX, aortic bodies via CN X): sense low PaO<sub>2</sub> (steep below 60 mmHg, maximal &lt; 50 mmHg), high PaCO<sub>2</sub> (faster than central), and arterial H<sup>+</sup> (<b>carotid bodies only</b> &rarr; Kussmaul breathing). Glomus Type I cells close <b>O<sub>2</sub>-sensitive K<sup>+</sup> channels</b> &rarr; depolarization &rarr; voltage-gated Ca<sup>2+</sup> influx &rarr; ATP &amp; ACh release.",
    "<b>Lung &amp; other receptors</b>: pulmonary stretch receptors in smooth muscle (myelinated CN X) trigger the <b>Hering-Breuer reflex</b> to prolong expiration; epithelial irritant receptors trigger bronchoconstriction and cough; alveolar <b>J receptors</b> (nonmyelinated C-fibers) respond to pulmonary edema in left heart failure with rapid shallow breathing; high BP at baroreceptors causes reflex hypoventilation.",
    "<b>Integrated responses &amp; CO<sub>2</sub> narcosis</b>: PaCO<sub>2</sub> is the primary drive (linear curve steepened by hypoxia). In chronic CO<sub>2</sub> retainers, excessive O<sub>2</sub> causes <b>CO<sub>2</sub> narcosis</b> via (1) blunted hypoxic ventilatory drive (&rarr; hypoventilation) and (2) reversal of hypoxic pulmonary vasoconstriction (&rarr; worse V/Q mismatch). In moderate exercise, PaO<sub>2</sub>, PaCO<sub>2</sub>, and pH stay normal.",
    "<b>Abnormal patterns</b>: <b>Cheyne-Stokes</b> (crescendo–decrescendo + apnea), <b>apneusis</b> (prolonged inspiratory cramp from upper-pontine pneumotaxic lesion), <b>cluster/Biot</b> (grouped breaths + apnea), and <b>ataxic</b> (chaotic medullary pattern)."
  ],
  say: {
    "R-C1": "Separate the rhythm generator from the drivers: the pre-Botzinger complex in the intermediate VRG is the pacemaker, the DRG in the NTS drives normal inspiration down the phrenic nerve, the lower pons pushes inspiration on, and the upper pons switches it off.",
    "R1": "The pacemaker that sets the basic respiratory rhythm is the pre-Botzinger complex in the intermediate VRG.",
    "R2": "DRG is the nucleus tractus solitarii driving the diaphragm via C3 to C5; lower-pontine apneustic excites it, and upper-pontine pneumotaxic inhibits it.",
    "R-C2": "Central chemoreceptors do seventy percent of the work for CO2 because CO2 slips right across the blood-brain barrier into low-protein CSF, whereas H+ is locked out. Peripheral carotid bodies handle hypoxia by closing O2-sensitive potassium channels on Type I glomus cells.",
    "R4": "CO2 crosses the blood-brain barrier freely and acidifies the poorly buffered CSF, whereas arterial H+ cannot cross.",
    "R5": "Low PO2 shuts the O2-sensitive potassium channel on the glomus cell, depolarizing the membrane, opening voltage-gated calcium channels, and releasing ATP and acetylcholine onto CN IX.",
    "R-C3": "Match each vagal lung receptor to its clinical picture: smooth-muscle stretch receptors give the Hering-Breuer inflation reflex, epithelial irritant receptors trigger asthma bronchoconstriction and cough, and unmyelinated alveolar J receptors cause rapid shallow breathing in pulmonary edema.",
    "R7": "Pulmonary congestion in left heart failure stretches the alveolar interstitium and fires unmyelinated vagal J receptors, producing rapid, shallow breathing.",
    "R-C4": "Arterial PCO2 is the number-one controller, and hypoxia makes its slope even steeper. Memorize the two slide mechanisms for CO2 narcosis when you give too much oxygen to a chronic CO2 retainer: you blunt their hypoxic ventilatory drive and you undo hypoxic pulmonary vasoconstriction, worsening V/Q mismatch.",
    "R9": "Slide 45 gives two mechanisms for oxygen-induced CO2 narcosis: reduced hypoxic ventilatory drive causing hypoventilation, and reduced hypoxic pulmonary vasoconstriction worsening V/Q mismatch.",
    "R10": "Low PO2 steepens and left-shifts the linear CO2 response curve, while the hypoxic response itself stays flat until PaO2 drops below about sixty millimeters of mercury.",
    "R-C5": "Read the five abnormal waveforms at a glance: waxing-and-waning with apnea is Cheyne-Stokes, long inspiratory cramps from an upper-pontine lesion is apneusis, grouped breaths with pauses is cluster breathing, and total chaos is medullary ataxic breathing.",
    "R12": "Sustained inspiratory plateaus are apneusis, caused by losing the upper-pontine pneumotaxic switch-off mechanism."
  }
};

/* Part 5 Tutor script: Sections A, S */
window.TUTOR_SCRIPT = window.TUTOR_SCRIPT || { plan: [], sec: {} };
window.TUTOR_SCRIPT.sec = window.TUTOR_SCRIPT.sec || {};

/* ---------- A ---------- */
window.TUTOR_SCRIPT.sec.A = { part: "Video 5", time: "14&#8211;18 min",
  open: "Acid-base regulation comes down to keeping the bicarbonate-to-carbon-dioxide ratio at twenty to one. Once you know how the kidneys reclaim and generate bicarbonate, the four compensation rules and the six-step ABG algorithm solve every clinical case.",
  u: [
    "<b>Arterial pH, acid loads &amp; Henderson–Hasselbalch</b>: normal pH is 7.35–7.45 (7.40 = 40 nEq/L H<sup>+</sup>; compatible range 6.80–7.80). Lungs excrete 15,000–20,000 mmol/day of volatile acid (CO<sub>2</sub>); kidneys excrete 50–100 mEq/day of fixed acids. pH = 6.1 + log([HCO<sub>3</sub><sup>&minus;</sup>] / (0.03 &times; P<sub>aCO2</sub>)) with a normal 24 / 1.2 = <b>20:1 ratio</b>; chemical buffers act in seconds, lungs in minutes, kidneys in hours to days.",
    "<b>Renal reclamation vs new HCO<sub>3</sub><sup>&minus;</sup></b>: 85% of filtered HCO<sub>3</sub><sup>&minus;</sup> (~4,320 mEq/day) is reclaimed in the PCT via apical NHE3 and CA IV (plus 10% TAL, 4.9% distal) without net H<sup>+</sup> excretion. New HCO<sub>3</sub><sup>&minus;</sup> requires excreting H<sup>+</sup> with urinary buffers: titratable acid (HPO<sub>4</sub><sup>2&minus;</sup> &rarr; H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>, pK<sub>a</sub> 6.8, 10–40 mEq/day, min urine pH 4.4–4.5) and NH<sub>4</sub><sup>+</sup> from glutamine (20–50 mEq/day, inducible up to <b>500 mEq/day</b> in chronic acidosis). Type A intercalated cells secrete H<sup>+</sup>; Type B secrete HCO<sub>3</sub><sup>&minus;</sup> via pendrin.",
    "<b>Four primary disorders &amp; compensation</b>: respiratory acidosis (&uarr;P<sub>aCO2</sub> &gt; 45) raises HCO<sub>3</sub><sup>&minus;</sup> by 1 (acute) or 3.5 (chronic) per 10 mmHg; respiratory alkalosis (&darr;P<sub>aCO2</sub> &lt; 35) lowers HCO<sub>3</sub><sup>&minus;</sup> by 2 (acute) or 4–5 (chronic) per 10 mmHg; metabolic acidosis (&darr;HCO<sub>3</sub><sup>&minus;</sup> &lt; 22) lowers P<sub>aCO2</sub> by 1.25 per 1 mmol/L (Winter’s: 1.5&times;HCO<sub>3</sub><sup>&minus;</sup> + 8 &plusmn; 2); metabolic alkalosis (&uarr;HCO<sub>3</sub><sup>&minus;</sup> &gt; 26) raises P<sub>aCO2</sub> by 0.75 per 1 mmol/L. Compensation never overcorrects.",
    "<b>Anion gap &amp; urine anion gap</b>: plasma AG = [Na<sup>+</sup>] &minus; ([Cl<sup>&minus;</sup>] + [HCO<sub>3</sub><sup>&minus;</sup>]), normal 12 &plusmn; 4 (8–16) mEq/L. HAGMA (normochloremic) follows <b>KUSMALE</b>; NAGMA (hyperchloremic) occurs in diarrhea, RTA, or acetazolamide. Urine AG = (Na<sup>+</sup> + K<sup>+</sup>) &minus; Cl<sup>&minus;</sup> is negative (&lt; &minus;20) in diarrhea (intact NH<sub>4</sub><sup>+</sup> excretion) and positive in RTA.",
    "<b>6-step ABG algorithm &amp; 5 handout cases</b>: check internal consistency &rarr; acidemia/alkalemia &rarr; primary process &rarr; expected compensation &rarr; always calculate AG &rarr; compare &Delta;AG against &Delta;HCO<sub>3</sub><sup>&minus;</sup> to unmask mixed disorders (such as Case 2 HAGMA + respiratory acidosis, Case 3 normal-pH HAGMA + metabolic alkalosis, and Case 4 acute-on-chronic respiratory acidosis)."
  ],
  say: {
    "A-C1": "Lock in the twenty-to-one ratio in the Henderson-Hasselbalch equation: 24 millimoles per liter of bicarbonate over 1.2 millimoles per liter of dissolved CO2 gives log 20, which is 1.3, plus 6.1 equals 7.40. And contrast 15,000 to 20,000 millimoles a day of volatile CO2 blown off by the lungs with 50 to 100 mEq a day of fixed acids excreted by the kidneys.",
    "A1": "0.03 times 40 is 1.2 mmol/L of dissolved CO2, and 24 divided by 1.2 gives the classic 20-to-1 base-to-acid ratio.",
    "A-C2": "Reclaiming 85 percent of filtered bicarbonate in the proximal tubule via NHE3 and CA IV only saves old bicarbonate. To generate new bicarbonate and excrete net acid, the kidney must trap H+ on phosphate as titratable acid or excrete ammonium from glutamine—which scales up to 500 mEq per day in chronic acidosis.",
    "A4": "In severe chronic metabolic acidosis, proximal glutamine metabolism and urinary ammonium excretion scale up to about 500 mEq per day—far outstripping phosphate titratable acid.",
    "A-C3": "Memorize the compensation numbers off the summary table on slide 61: 1 and 3.5 for acute and chronic respiratory acidosis, 2 and 4-to-5 for acute and chronic respiratory alkalosis, 1.25—or Winter’s formula—for metabolic acidosis, and 0.75 for metabolic alkalosis. Watch out for the prose typos on slides 55, 56, and 60: compensation always moves in the same direction as the primary change and never overcorrects.",
    "A7": "In chronic respiratory acidosis, bicarbonate rises by 3.5 for every 10 mmHg rise in PaCO2: three steps of 3.5 adds 10.5 to 24, giving 34.5 mmol/L.",
    "A8": "A 12 mmol/L drop in bicarbonate multiplied by 1.25 lowers PaCO2 by 15 mmHg from 40 to 25 mmHg—or by Winter’s formula, 1.5 times 12 plus 8 gives 26 plus-or-minus 2 mmHg.",
    "A-C4": "Always calculate the plasma anion gap—sodium minus chloride plus bicarbonate, normally 12 plus-or-minus 4. High anion gap means KUSMALE; normal anion gap means hyperchloremic bicarbonate loss from diarrhea or RTA, which you separate using the urine anion gap.",
    "A10": "Diarrhea and renal tubular acidosis lose bicarbonate and replace it with chloride, giving a normal anion gap hyperchloremic acidosis; all the other choices are KUSMALE high-anion-gap causes.",
    "A-C5": "Walk all five handout cases through the six-step algorithm. Never stop at a normal pH or a PaCO2 of 40: in Case 2, a PaCO2 of 40 with a bicarbonate of 12 means superimposed respiratory acidosis, and in Case 3, an anion gap of 21 unmasks a hidden HAGMA plus vomiting alkalosis despite a completely normal pH of 7.40.",
    "A12": "With a bicarbonate of 12 and an anion gap of 25, expected PaCO2 is 25 mmHg; an actual PaCO2 of 40 mmHg is far too high, proving a mixed HAGMA and respiratory acidosis.",
    "A13": "Never skip Step 5: even with pH 7.40, PaCO2 40, and bicarbonate 24, the anion gap is 21—revealing a mixed high-anion-gap metabolic acidosis and vomiting-induced metabolic alkalosis."
  }
};

/* ---------- S ---------- */
window.TUTOR_SCRIPT.sec.S = { part: "Video 5", time: "12&#8211;15 min",
  open: "We finish by putting the respiratory system under five real-world stresses: exercise, high altitude, deep diving, sleep, and the very first breath at birth.",
  u: [
    "<b>Exercise</b>: muscle ATP comes from the phosphagen system (8–10 s), glycogen–lactic acid system (1.3–1.6 min), and oxidative phosphorylation. Below the anaerobic threshold, arterial P<sub>aO2</sub>, P<sub>aCO2</sub>, and pH stay normal; above it, lactic acid buffered by HCO<sub>3</sub><sup>&minus;</sup> drives hyperventilation and lowers P<sub>aCO2</sub>. Training raises VO<sub>2max</sub> mainly via stroke volume.",
    "<b>High altitude</b>: fractional O<sub>2</sub> is still 21% but low barometric pressure lowers P<sub>IO2</sub>. Acute hypoxia (&lt;60 mmHg) stimulates carotid bodies &rarr; hyperventilation &rarr; respiratory alkalosis (initially braking central drive). Over days, renal HCO<sub>3</sub><sup>&minus;</sup> excretion (hastened by acetazolamide) normalizes pH, 2,3-BPG rises, and HIF drives EPO/VEGF. Patchy HPV causes <b>HAPE</b> (treat with descent, O<sub>2</sub>, nifedipine).",
    "<b>Diving &amp; hyperbaric stress</b>: pressure rises 1 ATM per 10 m depth. By <b>Boyle’s law</b>, breath-hold SCUBA ascent expands trapped gas, causing pneumothorax and arterial gas embolism. By <b>Henry’s law</b>, high-pressure N<sub>2</sub> causes nitrogen narcosis (&gt;30 m) and decompression sickness (bubbles on rapid ascent; prevented by slow ascent or <b>Heliox</b>, treated in a hyperbaric chamber).",
    "<b>Sleep (NREM vs REM)</b>: NREM loses the wakefulness drive (&darr;V&#775;<sub>E</sub> 10–15%, regular breathing, &uarr;P<sub>aCO2</sub> 3–5 mmHg, &uarr;upper airway resistance). REM brings irregular breathing, depressed chemosensitivity, and skeletal muscle <b>atonia sparing only the diaphragm</b> (peak vulnerability to obstructive sleep apnea, treated with CPAP).",
    "<b>Fetal-to-neonatal transition</b>: placental exchange relies on high [Hb], <b>HbF (&alpha;<sub>2</sub>&gamma;<sub>2</sub>)</b> with weak 2,3-BPG binding (left-shifted P<sub>50</sub> &approx; 19 mmHg), and the <b>double Bohr effect</b>; high fetal PVR shunts 90% of RV output across the foramen ovale and ductus arteriosus. The first breath and cord clamping drop PVR and raise SVR, closing the foramen ovale (LA &gt; RA) and constricting the ductus arteriosus (&uarr;P<sub>aO2</sub>, &darr;PGE<sub>2</sub>)."
  ],
  say: {
    "S-C1": "Separate moderate exercise from heavy exercise at the anaerobic threshold: below the threshold, ventilation tracks metabolism so arterial PaO2, PaCO2, and pH stay flat; above the threshold, lactic acid buffering generates extra CO2 and H+, driving hyperventilation that drops PaCO2.",
    "S1": "During moderate steady-state aerobic exercise below the anaerobic threshold, arterial PaO2, PaCO2, and pH remain essentially unchanged from rest.",
    "S-C2": "At high altitude, FiO2 is still 21 percent—it is barometric pressure that falls. Acute hyperventilation creates a respiratory alkalosis that brakes the central chemoreceptors until the kidneys excrete bicarbonate, a step you can speed up with acetazolamide. And remember HAPE comes from uneven hypoxic pulmonary vasoconstriction.",
    "S4": "Blowing off CO2 during the first hours at altitude causes hypocapnia and respiratory alkalosis, which inhibits central chemoreceptors until the kidneys excrete bicarbonate.",
    "S5": "HAPE is a non-cardiogenic edema caused by exaggerated, patchy hypoxic pulmonary vasoconstriction that subjects less-constricted capillary beds to high hydrostatic pressure.",
    "S-C3": "Pair each diving hazard with its gas law: Boyle’s law explains why holding your breath during SCUBA ascent expands lung gas fourfold from 30 meters and ruptures alveoli, while Henry’s law explains nitrogen narcosis at depth and nitrogen bubbles in decompression sickness—both countered by switching to Heliox.",
    "S7": "Rising from 4 atmospheres at 30 meters to 1 atmosphere at the surface while holding your breath expands trapped alveolar gas fourfold by Boyle’s law, causing pulmonary barotrauma, pneumothorax, and arterial gas embolism.",
    "S8": "Helium is far less soluble in lipid membranes than nitrogen and much less dense, preventing nitrogen narcosis, reducing bubble load, and easing the work of breathing on deep dives.",
    "S-C4": "Contrast NREM and REM sleep: NREM is slow and regular with a 3 to 5 mmHg rise in PaCO2, whereas REM is irregular with skeletal muscle atonia that paralyzes intercostals and pharyngeal dilators while sparing the diaphragm.",
    "S9": "During REM sleep, descending supraspinal inhibition causes skeletal muscle atonia of the intercostals and pharyngeal dilators while sparing the diaphragm.",
    "S-C5": "In utero, HbF alpha-2-gamma-2 ignores 2,3-BPG to keep a left-shifted P50 of 19 mmHg, and the double Bohr effect widens the oxygen transfer gradient across the placenta. At the first breath, alveolar oxygenation drops PVR while cord clamping raises SVR, flipping left atrial pressure above right atrial pressure to shut the foramen ovale.",
    "S11": "The gamma chains of HbF bind 2,3-BPG much more weakly than the beta chains of HbA, shifting the fetal curve left to a P50 around 19 mmHg.",
    "S12": "Lung inflation and oxygenation drop pulmonary vascular resistance while cord clamping raises systemic vascular resistance, raising left atrial pressure above right atrial pressure to close the foramen ovale."
  }
};
