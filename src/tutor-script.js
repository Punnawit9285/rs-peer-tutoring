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
    "U-C2": "Memorize the lateral wall drainage from top to bottom, and note that the hiatus semilunaris in the middle meatus catches three major sinuses while the inferior meatus is reserved for tears. On the septum side, five arteries meet at Kiesselbach area.",
    "U-C3": "Divide the pharynx into three floors and pair each floor with its clinical landmark: fossa of Rosenmuller in the nasopharynx for NPC, Waldeyer ring across the nasopharynx and oropharynx, and the piriform recess in the laryngopharynx for swallowed fish bones.",
    "U-C4": "Nine cartilages—three single, three paired—held together by two fibro-elastic sheets: the upper quadrangular membrane gives the false cord, while the lower conus elasticus gives the true vocal ligament and the median cricothyroid ligament.",
    "U-C5": "One muscle opens the airway—posterior cricoarytenoid—and one intrinsic muscle has its own motor nerve—cricothyroid via the external laryngeal nerve. Everything else motor belongs to the recurrent laryngeal nerve.",
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
    "W-C2": "Three muscle sheets line each space: external runs down-and-forward like hands in pockets to lift the ribs, while internal and innermost run at right angles to pull them down in forced expiration.",
    "W-C3": "Quiet expiration costs zero muscle energy—it is pure elastic recoil. Only when breathing turns forceful do we recruit neck and chest elevators for inspiration or abdominal and internal intercostal muscles for expiration.",
    "W-C4": "Between the internal and innermost muscle layers sits the VAN bundle tucked into the costal groove along the lower rib border. Aim at the lower border to numb the nerve, and hug the upper border to miss the vessels.",
    "W-C5": "Match each pleural problem to its space and line, spot the inward-on-inspiration paradox of a flail chest, and trace the three major openings through the diaphragm.",
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
    "B-C2": "Look at the medial surface of each lung as a mold of its mediastinal neighbors: veins and the esophagus stamp the right lung, while the aorta and subclavian artery stamp the left.",
    "B-C3": "The sternal angle at disc T4–T5 is your master plane for the carina and aortic arch. At the right hilum, spot the right superior lobar bronchus sitting above the pulmonary artery—the only eparterial bronchus.",
    "B-C4": "Bronchial arteries follow a one-right, two-left rule: one right branch off the third right posterior intercostal artery, two left branches straight off the aorta at T5 or T6. Then follow the veins into the azygos on the right and accessory hemiazygos on the left.",
    "B-C5": "Finish with lymph and nerves: bronchomediastinal trunks join the right lymphatic duct and the thoracic duct from L2, while the pulmonary plexus balances vagal bronchoconstriction against sympathetic bronchodilation.",
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
    "H-C2": "Compare the three tubes in one table: C-shaped cartilage and posterior trachealis in the trachea, discontinuous cartilage plates in intrapulmonary bronchi, and zero cartilage with almost no goblet cells or glands once you enter a bronchiole.",
    "H-C3": "At the terminal bronchiole, goblet cells give way to dome-shaped Club cells with short microvilli and four exam jobs: lipoprotein secretion, stem-cell repair, detoxification, and the biomarker CC16.",
    "H-C4": "Watch the number trap in the alveolus: Type II cuboidal cells outnumber Type I cells sixty to forty, but flat Type I cells cover ninety to ninety-five percent of the gas-exchange surface. And remember pores of Kohn equalize pressure between neighbors to prevent atelectasis.",
    "H-C5": "Count all five layers of the air-blood barrier on slide 42 from alveolus to red cell, and finish with the simple squamous mesothelium of the pleura.",
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
    "G-C2": "Just below the carina sits the isothermic saturation boundary: air hits 37 degrees, 100 percent humidity, 44 milligrams per liter, and 47 mmHg of water vapor. Subtracting 47 from 760 leaves 713 mmHg of dry gas, dropping PO2 from 159.1 to 149.2 mmHg before a single molecule crosses an alveolus.",
    "G-C3": "Know both numbers from the alveolar gas equation on room air: 99.2 mmHg when you drop the correction factor F, and 101.2 mmHg when you include F equals 2 or use the clinical times-1.2 shortcut for FiO2 up to 0.6. Above FiO2 0.6, drop the 1.2 multiplier.",
    "G-C4": "Henry’s law multiplies partial pressure by solubility: 0.003 times 100 gives 0.3 mL of dissolved O2 per deciliter of arterial blood, while CO2 is 23 times more soluble in plasma. For the wards, remember tank factor 0.16 for a D cylinder and keep nasal cannula flow at or below 6 liters per minute.",
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
    "M-C2": "Surfactant DPPC lowers surface tension, and slide 16 highlights that smaller alveoli pack more surfactant per unit area so they have a smaller recoil force and expand more easily. On the relaxation curve, inward lung pull and outward chest pull balance at FRC.",
    "M-C3": "Compliance is the inverse of recoil: lung alone is 0.2, chest wall is 0.2, and together in series they add reciprocals to give 0.1 liters per cmH2O. Emphysema loses recoil so compliance shoots up; fibrosis stiffens the lung so compliance drops.",
    "M-C4": "Even though radius to the fourth power rules a single tube, small airways under 2 millimeters contribute only 10 percent of total resistance because thousands of parallel branches create a massive total cross-sectional area. During forced expiration in COPD, high positive pleural pressure crushes those small untethered airways, trapping air.",
    "M-C5": "Match each breath sound to its location and ratio—vesicular is inspiration longer than expiration over the lung fields, bronchial is expiration longer than inspiration over the manubrium—and split resting work of breathing into 65 percent elastic, 25 percent airway resistance, and 10 percent tissue viscosity.",
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
    "E-C2": "Fick’s law puts area, pressure gradient, and solubility on top, and barrier thickness and the square root of molecular weight on the bottom. CO2 is 24.2 times more soluble than O2, so it diffuses 20 times faster. Watch the false highs and lows on DLCO: Müller’s maneuver and polycythemia raise it, Valsalva and anemia lower it.",
    "E-C3": "Arterial blood carries 20.4 mL of O2 per dL and venous blood carries 15.19, giving 5 mL extracted per dL or 250 mL per minute. A red cell spends 0.75 seconds in the capillary: N2O equilibrates in a tenth of that time and normal O2 in a third—both perfusion-limited—while CO binds Hb so tightly that plasma PCO never rises, making CO always diffusion-limited.",
    "E-C4": "Gravity pulls the lung down, making apical intrapleural pressure minus 10 versus minus 2 at the base. So apical alveoli start out largest at rest, sit on the flat top of the compliance curve, and ventilate less than the base—yet apical blood flow is so tiny that V/Q is highest at the apex and lowest at the base, averaging 0.84 overall.",
    "E-C5": "Dead space is ventilation without perfusion—V/Q infinity, alveolar gas looks like tracheal air at 150 and 0, and we measure physiological dead space with Bohr’s equation. Shunt is perfusion without ventilation—V/Q zero, blood stays venous at 40 and 46. Both widen the A-a gradient, whereas moderate exercise keeps arterial blood gases flat through isocapnic buffering.",
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
    "T-C2": "Know the exact three-step choreography of HbA oxygenation: O2 enters the wider alpha pocket first, pulls ferrous iron 0.6 Angstroms into the porphyrin ring from high-spin to low-spin, breaks the salt bridges, rotates alpha-beta 15 degrees, kicks out 2,3-BPG, and opens the beta pocket.",
    "T-C3": "Normal P50 is 27 mmHg. Heat, CO2, protons—acting through the beta-His146 to Asp94 ion pair—and 2,3-BPG all stabilize the T-state and shift the curve right to unload O2. Remember the exam trap on 2,3-BPG: hormones, hypoxia, anemia, and altitude raise it, but acidosis lowers it.",
    "T-C4": "Compare every cousin of HbA: fetal HbF is alpha-2-gamma-2 and ignores 2,3-BPG so it shifts left to pull O2 across the placenta; carbon monoxide binds Fe2+ 210 times tighter than O2; methemoglobin has Fe3+; sulfhemoglobin comes from hydroxylamine sulfate; and muscle myoglobin is a 153-amino-acid monomer with a hyperbolic curve and zero cooperativity.",
    "T-C5": "Most CO2 rides as bicarbonate—70 percent in the Gas Transport slides, over 90 percent in the Gas Exchange slides—made by RBC carbonic anhydrase and exported via the chloride shift. Then lock in the two effects by location: Bohr in systemic capillaries unloads O2 when H+ and CO2 rise; Haldane in pulmonary capillaries unloads CO2 when O2 binds Hb.",
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
    "C-C2": "Two graphs explain PVR: first, when blood flow rises in exercise, PVR drops mainly by recruiting closed capillaries and secondarily by distending open ones. Second, lung inflation squashes alveolar capillaries but pulls extra-alveolar vessels open by radial traction, giving a U-shaped total PVR curve with its minimum right at FRC.",
    "C-C3": "Unlike systemic arteries, pulmonary arteries constrict when alveolar PO2 falls below 70 mmHg. That hypoxic vasoconstriction diverts blood away from unventilated alveoli to reduce shunt, and keeps fetal PVR high until the baby takes its first oxygenated breath.",
    "C-C4": "Normal Starling forces push a slow 20 mL per hour of fluid outward into perivascular lymphatics. When filtration overwhelms those lymphatics, early interstitial edema with peribronchial cuffing turns into late alveolar edema—flooding alveoli one by one, creating a severe shunt, and relying on epithelial Na/K-ATPase to pump the fluid out.",
  }
};

/* ---------- P ---------- */
window.TUTOR_SCRIPT.sec.P = { part: "Video 4", time: "14&#8211;18 min",
  open: "Most of the class lost the thread in this lecture, so we will treat it as a checklist: how a good test is done, then five questions that read any spirometry report, then six real reports from the slides.",
  u: [
    "<b>What spirometry sees</b>: only air that moves past the lips, so it cannot measure RV, FRC or TLC.",
    "<b>Before the test</b>: a forced blow spikes chest, skull and eye pressure (hence the contraindications); stop bronchodilators for a diagnostic test, but not inhaled steroids.",
    "<b>A good blow</b>: fill to TLC fast, blast, keep going; at least 3 acceptable blows with the top two within 0.150 L; report the largest FEV₁ and the largest FVC.",
    "<b>Steps 1–2</b>: FEV₁/FVC below 70–75 is obstruction (use the actual ratio); FVC below 80% predicted is restriction (correct it first if obstructed; confirm with TLC).",
    "<b>Steps 3–4</b>: grade obstruction by FEV₁ %pred and restriction by FVC %pred (≥ 70, 50–69, 35–49, &lt; 35); a bronchodilator response is ≥ 12% and ≥ 200 mL.",
    "<b>Step 5</b>: if the ratio and FVC are normal, FEF₂₅–₇₅% below 65% means small airway disease.",
    "<b>Loops</b>: scooped expiration in obstruction, a small narrow loop in restriction, flat limbs in central airway obstruction (both flat = fixed)."
  ],
  say: {
    "P-C1": "Start with the one rule they always test: a simple spirometer only sees air crossing the lips, so it can never measure residual volume, FRC, or TLC. For those three, you need a body box or gas dilution.",
    "P-C2": "Blowing hard spikes the pressure in the chest, head and eyes, which is why the list of reasons to wait looks the way it does.",
    "P-C3": "One good blow is fill, blast, keep going. Do it at least three times, check the top two agree, then report the biggest FEV1 and the biggest FVC.",
    "P-C4": "Read every report with five questions: blocked, small, how bad, reversible, small airways. Each one uses one number from one column.",
    "P-C5": "Every flow-volume loop tells a mechanical story: scooped-out expiration in distal obstruction, a narrow steep witch's hat in parenchymal fibrosis, flat inspiration in variable extrathoracic obstruction, flat expiration in variable intrathoracic obstruction, and a flat box when the central airway is fixed.",
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
    "R-C2": "Central chemoreceptors do seventy percent of the work for CO2 because CO2 slips right across the blood-brain barrier into low-protein CSF, whereas H+ is locked out. Peripheral carotid bodies handle hypoxia by closing O2-sensitive potassium channels on Type I glomus cells.",
    "R-C3": "Match each vagal lung receptor to its clinical picture: smooth-muscle stretch receptors give the Hering-Breuer inflation reflex, epithelial irritant receptors trigger asthma bronchoconstriction and cough, and unmyelinated alveolar J receptors cause rapid shallow breathing in pulmonary edema.",
    "R-C4": "Arterial PCO2 is the number-one controller, and hypoxia makes its slope even steeper. Memorize the two slide mechanisms for CO2 narcosis when you give too much oxygen to a chronic CO2 retainer: you blunt their hypoxic ventilatory drive and you undo hypoxic pulmonary vasoconstriction, worsening V/Q mismatch.",
    "R-C5": "Read the five abnormal waveforms at a glance: waxing-and-waning with apnea is Cheyne-Stokes, long inspiratory cramps from an upper-pontine lesion is apneusis, grouped breaths with pauses is cluster breathing, and total chaos is medullary ataxic breathing.",
  }
};

/* Part 5 Tutor script: Sections A, S */
window.TUTOR_SCRIPT = window.TUTOR_SCRIPT || { plan: [], sec: {} };
window.TUTOR_SCRIPT.sec = window.TUTOR_SCRIPT.sec || {};

/* ---------- A ---------- */
window.TUTOR_SCRIPT.sec.A = { part: "Video 5", time: "14&#8211;18 min",
  open: "Acid-base regulation comes down to keeping the bicarbonate-to-carbon-dioxide ratio at twenty to one. Once you know how the kidneys reclaim and generate bicarbonate, the four compensation rules and the six-step ABG algorithm solve every clinical case.",
  u: [
    "<b>Arterial pH, acid loads &amp; Henderson–Hasselbalch</b>: normal pH is 7.35–7.45 (7.40 = 40 nEq/L H<sup>+</sup>; compatible range 6.80–7.80). Lungs excrete 13,000 mmol/day of volatile acid (CO<sub>2</sub>); kidneys excrete 50–100 mEq/day of fixed acids. pH = 6.1 + log([HCO<sub>3</sub><sup>&minus;</sup>] / (0.03 &times; P<sub>aCO2</sub>)) with a normal 24 / 1.2 = <b>20:1 ratio</b>; chemical buffers act in seconds, lungs in minutes, kidneys in hours to days.",
    "<b>Renal reclamation vs new HCO<sub>3</sub><sup>&minus;</sup></b>: 85% of filtered HCO<sub>3</sub><sup>&minus;</sup> (~4,320 mEq/day) is reclaimed in the PCT via apical NHE3 and CA IV (plus 10% TAL, 4.9% distal) without net H<sup>+</sup> excretion. New HCO<sub>3</sub><sup>&minus;</sup> requires excreting H<sup>+</sup> with urinary buffers: titratable acid (HPO<sub>4</sub><sup>2&minus;</sup> &rarr; H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>, pK<sub>a</sub> 6.8, 10–40 mEq/day, min urine pH 4.4–4.5) and NH<sub>4</sub><sup>+</sup> from glutamine (20–50 mEq/day, inducible up to <b>500 mEq/day</b> in chronic acidosis). Type A intercalated cells secrete H<sup>+</sup>; Type B secrete HCO<sub>3</sub><sup>&minus;</sup> via pendrin.",
    "<b>Four primary disorders &amp; compensation</b>: respiratory acidosis (&uarr;P<sub>aCO2</sub> &gt; 45) raises HCO<sub>3</sub><sup>&minus;</sup> by 1 (acute) or 3.5 (chronic) per 10 mmHg; respiratory alkalosis (&darr;P<sub>aCO2</sub> &lt; 35) lowers HCO<sub>3</sub><sup>&minus;</sup> by 2 (acute) or 4–5 (chronic) per 10 mmHg; metabolic acidosis (&darr;HCO<sub>3</sub><sup>&minus;</sup> &lt; 22) lowers P<sub>aCO2</sub> by 1.25 per 1 mmol/L (Winter’s: 1.5&times;HCO<sub>3</sub><sup>&minus;</sup> + 8 &plusmn; 2); metabolic alkalosis (&uarr;HCO<sub>3</sub><sup>&minus;</sup> &gt; 26) raises P<sub>aCO2</sub> by 0.75 per 1 mmol/L. Compensation never overcorrects.",
    "<b>Anion gap &amp; urine anion gap</b>: plasma AG = [Na<sup>+</sup>] &minus; ([Cl<sup>&minus;</sup>] + [HCO<sub>3</sub><sup>&minus;</sup>]), normal 12 &plusmn; 4 (8–16) mEq/L. HAGMA (normochloremic) follows <b>KUSMALE</b>; NAGMA (hyperchloremic) occurs in diarrhea, RTA, or acetazolamide. Urine AG = (Na<sup>+</sup> + K<sup>+</sup>) &minus; Cl<sup>&minus;</sup> is negative (&lt; &minus;20) in diarrhea (intact NH<sub>4</sub><sup>+</sup> excretion) and positive in RTA.",
    "<b>6-step ABG algorithm &amp; 5 handout cases</b>: check internal consistency &rarr; acidemia/alkalemia &rarr; primary process &rarr; expected compensation &rarr; always calculate AG &rarr; compare &Delta;AG against &Delta;HCO<sub>3</sub><sup>&minus;</sup> to unmask mixed disorders (such as Case 2 HAGMA + respiratory acidosis, Case 3 normal-pH HAGMA + metabolic alkalosis, and Case 4 acute-on-chronic respiratory acidosis)."
  ],
  say: {
    "A-C1": "Lock in the twenty-to-one ratio in the Henderson-Hasselbalch equation: 24 millimoles per liter of bicarbonate over 1.2 millimoles per liter of dissolved CO2 gives log 20, which is 1.3, plus 6.1 equals 7.40. And contrast about 13,000 millimoles a day of volatile CO2 blown off by the lungs with 50 to 100 mEq a day of fixed acids excreted by the kidneys.",
    "A-C2": "Reclaiming 85 percent of filtered bicarbonate in the proximal tubule via NHE3 and CA IV only saves old bicarbonate. To generate new bicarbonate and excrete net acid, the kidney must trap H+ on phosphate as titratable acid or excrete ammonium from glutamine—which scales up to 500 mEq per day in chronic acidosis.",
    "A-C3": "Memorize the compensation numbers off the summary table on slide 61: 1 and 3.5 for acute and chronic respiratory acidosis, 2 and 4-to-5 for acute and chronic respiratory alkalosis, 1.25—or Winter’s formula—for metabolic acidosis, and 0.75 for metabolic alkalosis. Watch out for the prose typos on slides 55, 56, and 60: compensation always moves in the same direction as the primary change and never overcorrects.",
    "A-C4": "Always calculate the plasma anion gap—sodium minus chloride plus bicarbonate, normally 12 plus-or-minus 4. High anion gap means KUSMALE; normal anion gap means hyperchloremic bicarbonate loss from diarrhea or RTA, which you separate using the urine anion gap.",
    "A-C5": "Walk all five handout cases through the six-step algorithm. Never stop at a normal pH or a PaCO2 of 40: in Case 2, a PaCO2 of 40 with a bicarbonate of 12 means superimposed respiratory acidosis, and in Case 3, an anion gap of 21 unmasks a hidden HAGMA plus vomiting alkalosis despite a completely normal pH of 7.40.",
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
    "S-C2": "At high altitude, FiO2 is still 21 percent—it is barometric pressure that falls. Acute hyperventilation creates a respiratory alkalosis that brakes the central chemoreceptors until the kidneys excrete bicarbonate, a step you can speed up with acetazolamide. And remember HAPE comes from uneven hypoxic pulmonary vasoconstriction.",
    "S-C3": "Pair each diving hazard with its gas law: Boyle’s law explains why holding your breath during SCUBA ascent expands lung gas fourfold from 30 meters and ruptures alveoli, while Henry’s law explains nitrogen narcosis at depth and nitrogen bubbles in decompression sickness—both countered by switching to Heliox.",
    "S-C4": "Contrast NREM and REM sleep: NREM is slow and regular with a 3 to 5 mmHg rise in PaCO2, whereas REM is irregular with skeletal muscle atonia that paralyzes intercostals and pharyngeal dilators while sparing the diaphragm.",
    "S-C5": "In utero, HbF alpha-2-gamma-2 ignores 2,3-BPG to keep a left-shifted P50 of 19 mmHg, and the double Bohr effect widens the oxygen transfer gradient across the placenta. At the first breath, alveolar oxygenation drops PVR while cord clamping raises SVR, flipping left atrial pressure above right atrial pressure to shut the foramen ovale.",
  }
};

/* ========== Questions: SAY lines for core questions (AC79–AC81 past papers) ========== */
Object.assign(window.TUTOR_SCRIPT.sec.U.say, {
  "U1": "Lowest and longest scroll on the lateral wall: inferior concha.",
  "U3": "Inferior meatus has one tenant only: the nasolacrimal duct.",
  "U5": "Sphenoethmoidal recess drains the sphenoid sinus.",
  "U6": "The curved gutter under the bulla is the hiatus semilunaris.",
  "U10": "The adenoid lives in the nasopharynx, so it cannot make an oropharyngeal mass.",
  "U11": "Open mouth, two swollen masses between the arches: palatine tonsils.",
  "U13": "Auditory tube opens into the nasopharynx.",
  "U15": "The bump behind the tube opening is the torus tubarius.",
  "U21": "Two folds with a slit between: the lower one is the vocal fold.",
  "U26": "Back of the cricoid lamina: posterior cricoarytenoid.",
  "U27": "It is the only muscle that opens the glottis.",
  "U28": "Superior thyroid artery travels with the external laryngeal nerve, so the cricothyroid is at risk.",
  "U30": "Cannot abduct the cords after neck surgery: recurrent laryngeal nerve."
});
Object.assign(window.TUTOR_SCRIPT.sec.W.say, {
  "W1": "Rib 2 meets the sternum at the sternal angle, your landmark for counting ribs.",
  "W4": "Find the ridge, then the cartilage beside it is rib two.",
  "W6": "Near the sternum the outer layer is only membrane, so the muscle you see is the internal intercostal.",
  "W9": "From inside, the fan behind the lower sternum is the transversus thoracis.",
  "W11": "Externals elevate, internals depress.",
  "W12": "Vertical vessels a finger beside the sternum: internal thoracic.",
  "W14": "You stop in the pleural cavity, so the visceral pleura is never crossed.",
  "W15": "Through the chest wall means through the costal pleura.",
  "W16": "C three, four, five keeps the diaphragm alive: the phrenic nerve.",
  "W19": "Esophagus goes through the esophageal hiatus at T10."
});
Object.assign(window.TUTOR_SCRIPT.sec.B.say, {
  "B1": "A rib breaks through the pleura lining the ribs: the costal pleura.",
  "B2": "The lowest lateral gutter of the pleural cavity is the costodiaphragmatic recess.",
  "B5": "The heart pushes a notch into the left upper lobe, with the lingula below it.",
  "B6": "The pleural sleeve hanging below the root is the pulmonary ligament.",
  "B11": "Eparterial means above the artery: the right upper lobe bronchus.",
  "B12": "Wider, shorter, steeper: the right main bronchus catches the peanut.",
  "B19": "Sitting right on top of the right root is the arch of the azygos.",
  "B22": "Milky pleural fluid means the thoracic duct."
});
Object.assign(window.TUTOR_SCRIPT.sec.H.say, {
  "H1": "Food side is stratified squamous, airway side is respiratory epithelium.",
  "H2": "The tip of the epiglottis meets food, so it is stratified squamous.",
  "H4": "The nostril is skin, not respiratory epithelium.",
  "H6": "Moist stratified squamous in the larynx means the true vocal cord.",
  "H10": "Olfactory epithelium lives in the roof of the nose.",
  "H15": "Respiratory bronchiole: simple cuboidal with alveoli budding from the wall.",
  "H20": "Premature lungs lack surfactant because type two pneumocytes are immature.",
  "H21": "Round cells in the alveolar corners are type two pneumocytes."
});
Object.assign(window.TUTOR_SCRIPT.sec.G.say, {
  "G1": "Boyle: squeeze the volume and the pressure goes up.",
  "G2": "Every breath is Boyle’s law: change the volume, change the pressure, air follows.",
  "G3": "Subtract 47 mmHg of water vapor from 760 to get 713, then multiply by 0.2093 to get 149.2 mmHg in moist bronchial air.",
  "G5": "Inspired oxygen minus one point two times the CO2: about ninety-five.",
  "G7": "Dissolved amount follows partial pressure: Henry’s law."
});
Object.assign(window.TUTOR_SCRIPT.sec.M.say, {
  "M1": "Watch the absolute words: always, most. Only the FRC definition survives.",
  "M4": "Lung pulls in, chest wall pulls out, and the gap between them goes negative.",
  "M6": "Alveolar zero minus pleural minus eight gives eight.",
  "M9": "Compliance is the slope: steepest curve, most compliant lung.",
  "M10": "Emphysema makes the lung floppier: compliance goes up, so “decreased compliance” is the wrong statement.",
  "M11": "Push harder and the airway squeezes shut: dynamic compression limits forced expiration."
});
Object.assign(window.TUTOR_SCRIPT.sec.E.say, {
  "E1": "Aim for four litres a minute of alveolar ventilation: tidal five-fifty at ten.",
  "E2": "Breathe faster with the same CO2 production and the end-tidal CO2 falls.",
  "E3": "Fick’s law: thickness is the only thing on the bottom of the fraction here.",
  "E4": "A bit slower by weight, twenty-four times more soluble: about twenty times faster.",
  "E7": "Apex: little air, even less blood, so the highest V over Q.",
  "E9": "Bohr gives the physiological dead space fraction; Fowler gives the anatomical one.",
  "E11": "High V over Q looks like dead space: oxygen high, CO2 low.",
  "E14": "Blood through pus-filled alveoli is a physiological shunt."
});
Object.assign(window.TUTOR_SCRIPT.sec.T.say, {
  "T1": "Anemia empties the trucks, not the road: content falls, PaO2 stays.",
  "T2": "Alpha subunit first because its heme pocket is wider, then Fe2+ drops 0.6 Angstroms into the plane from high-spin to low-spin, breaking salt bridges, rotating 15 degrees, and expelling 2,3-BPG.",
  "T4": "Left shift: lower P50, tighter grip on oxygen.",
  "T5": "2,3-BPG pries oxygen off hemoglobin for the tissues.",
  "T6": "HbF ignores 2,3-BPG, so its curve sits to the left.",
  "T8": "Carbon monoxide steals seats and makes the rest cling: left shift.",
  "T10": "Seventy percent of CO2 rides as bicarbonate.",
  "T11": "Haldane is oxygen kicking CO2 off; Bohr is CO2 kicking oxygen off."
});
Object.assign(window.TUTOR_SCRIPT.sec.C.say, {
  "C1": "Same flow as the body, at a fraction of the pressure and resistance.",
  "C2": "Squeeze the capillaries with alveolar pressure and resistance rises.",
  "C3": "Maximal output opens every channel and widens them all: A.",
  "C4": "Zone three, the base: artery beats vein beats alveolus.",
  "C5": "Early interstitial edema collects in perivascular and peribronchial spaces and drains via lymphatics to hilar nodes; late alveolar edema floods alveoli, causes shunt, and is pumped out by epithelial Na/K-ATPase."
});
Object.assign(window.TUTOR_SCRIPT.sec.P.say, {
  "P1": "Anything that includes residual volume is invisible to simple spirometry: RV itself, FRC, and TLC.",
  "P5": "Lock in the 2019 numbers: BEV five percent or a hundred mils, plateau twenty-five mils in the last second or fifteen seconds total, and adult repeatability within a hundred and fifty mils.",
  "P6": "Pick the biggest FEV1 and the biggest FVC; never average.",
  "P7": "Ratio fine, FVC fine, mid-flows fine: normal.",
  "P8": "Low ratio, FEV1 forty-three percent, only eight percent better: severe and irreversible.",
  "P9": "Moderate obstruction, and two hundred ten millilitres, over twelve percent: it reverses.",
  "P10": "Ratio normal, FVC sixty-two percent: moderate restriction, confirm with TLC.",
  "P12": "Divide first: sixty-eight percent is obstruction, and he smokes.",
  "P13": "Very severe, and two hundred fifty millilitres better: by the lecture rule that is a response.",
  "P15": "Moderate obstruction that jumps six hundred millilitres: reversible, like asthma.",
  "P17": "Normal ratio, small FVC: restriction.",
  "P18": "Vocal cord paralysis sits outside the chest: negative airway pressure during inspiration sucks the cords inward against atmospheric pressure, flattening the bottom inspiratory limb and causing stridor.",
  "P19": "Combined disease: a small loop with a scooped-out top.",
  "P20": "Flat on top and flat on the bottom: a fixed obstruction.",
  "P21": "Scooped at baseline, much bigger after salbutamol: reversible obstruction."
});
Object.assign(window.TUTOR_SCRIPT.sec.R.say, {
  "R1": "The pacemaker that sets the basic respiratory rhythm is the pre-Botzinger complex in the intermediate VRG.",
  "R2": "DRG is the nucleus tractus solitarii driving the diaphragm via C3 to C5; lower-pontine apneustic excites it, and upper-pontine pneumotaxic inhibits it.",
  "R3": "Acid in the blood is sensed at the carotid body, not the medulla.",
  "R5": "Fluid in the alveolar walls fires J receptors: rapid, shallow breathing.",
  "R6": "Correct his hypoxia and you remove the drive he breathes on.",
  "R9": "Sustained inspiratory plateaus are apneusis, caused by losing the upper-pontine pneumotaxic switch-off mechanism."
});
Object.assign(window.TUTOR_SCRIPT.sec.A.say, {
  "A2": "In blood, bicarbonate takes the first hit.",
  "A6": "Kidneys answer acidosis by burning glutamine: ammonium out, new bicarbonate in.",
  "A8": "Metabolic acid, respiratory answer: blow off CO2.",
  "A9": "Winter says thirty to thirty-four; forty means a second, respiratory problem.",
  "A10": "CO2 up fifteen, bicarbonate up one or two: acute.",
  "A12": "COPD: high CO2, high bicarbonate, near-normal pH.",
  "A18": "Albumin is most of the gap; low albumin hides acid.",
  "A20": "Gap thirty, delta ratio one: a pure high-gap acidosis.",
  "A21": "Vomiting: metabolic alkalosis, and the high CO2 is just compensation."
});
Object.assign(window.TUTOR_SCRIPT.sec.S.say, {
  "S1": "Ventilation outruns everything in exercise.",
  "S2": "The first-minute jump is neural: moving limbs talk to the brainstem.",
  "S3": "Altitude first gives a respiratory alkalosis.",
  "S5": "Day one at altitude: you breathe more. Red cells come weeks later.",
  "S6": "Fifty metres is six atmospheres; times point two one is one point two six.",
  "S8": "First breath: left atrial pressure rises and slams the foramen ovale shut."
});
