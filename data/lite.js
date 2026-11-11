/* Short concept cards: each card's body is written here as arrow chains and brief bullets.
   Loaded last (data/sections.json), so it rebuilds the html of every card listed below.
   The card's figures and flow widgets are taken from its original html in the section file;
   the text there is superseded. Block syntax (one string per block):
     '> A → B → C'      cause → effect chain          '- text'   bullet (consecutive bullets form one list)
     '## Heading'        small group label            '! text'   exam trap / past-paper note
     '| a | b |'         table row (first row = head)  '= text'   centered equation
     '@F1' '@F2'         place that figure here; figures not placed go to a column beside the text
     '@X1'               place that flow widget        {{...}}    cloze blank (keep 3–8 per card, key ideas only)
     '---'               what follows goes full width under the text and figure columns */
(function () {
  var C = window.CVS, byId = {};
  C.sections.forEach(function (s) { s.items.forEach(function (it) { byId[it.id] = it; }); });
  function inl(t) { return C.cloze(String(t)).replace(/(→|↔|⇄)/g, '<span class="lt-ar">$1</span>'); }
  function render(blocks, F, X) {
    var out = [], main = out, below = null, ul = null, tb = null, used = {};
    function flush() {
      if (ul) { out.push('<ul class="lt-pts">' + ul.join('') + '</ul>'); ul = null; }
      if (tb) {
        out.push('<div class="tblwrap"><table class="lt-tbl"><thead><tr>' + tb[0].map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>' +
          tb.slice(1).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + inl(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>');
        tb = null;
      }
    }
    blocks.forEach(function (b) {
      var k = b.slice(0, 2), t = b.slice(2);
      if (k === '- ') { if (tb) flush(); (ul = ul || []).push('<li>' + inl(t) + '</li>'); return; }
      if (b[0] === '|') { if (ul) flush(); (tb = tb || []).push(b.replace(/^\|\s*|\s*\|\s*$/g, '').split(/\s*\|\s*/)); return; }
      flush();
      if (b === '---') { below = []; out = below; return; }
      if (k === '> ') out.push('<p class="lt-chain">' + inl(t) + '</p>');
      else if (b.slice(0, 3) === '## ') out.push('<h4 class="lt-h">' + b.slice(3) + '</h4>');
      else if (k === '! ') out.push('<p class="lt-trap">' + inl(t) + '</p>');
      else if (k === '= ') out.push('<div class="eqn">' + inl(t) + '</div>');
      else if (/^@F\d+$/.test(b)) { var i = +b.slice(2) - 1; if (!F[i]) throw new Error('no figure ' + b); used[i] = 1; out.push(F[i]); }
      else if (/^@X\d+$/.test(b)) { var j = +b.slice(2) - 1; if (!X[j]) throw new Error('no flow ' + b); out.push(X[j]); }
      else out.push('<p class="lt-p">' + inl(b) + '</p>');
    });
    flush();
    var rest = F.filter(function (f, i) { return !used[i]; });
    var text = '<div class="lt">' + main.join('') + '</div>';
    var top = rest.length ? '<div class="two lt-two">' + text + '<div class="lt-figs">' + rest.join('') + '</div></div>' : text;
    return below ? '<div class="lt">' + top + below.join('') + '</div>' : top;
  }
  C.short = function (id, blocks, opt) {
    var it = byId[id];
    if (!it || it.t !== 'c') throw new Error('short(): no concept ' + id);
    var F = [], X = [];
    String(it.html).replace(/<figure\b[\s\S]*?<\/figure>/g, function (m) { F.push(m); return m; });
    String(it.html).replace(/<div class="flowx"[^>]*><\/div>/g, function (m) { X.push(m); return m; });
    if (opt && opt.drop) F = F.filter(function (f, i) { return opt.drop.indexOf(i + 1) < 0; });
    it.html = render(blocks, F, X);
  };
})();
var S_ = CVS.short;

/* ---------- U · Upper respiratory tract ---------- */
S_('U-C1', [
  '> Nostril → vestibule → nasal cavity → {{choanae}} → nasopharynx',
  '- Septum: perpendicular plate (ethmoid) + {{vomer}} + septal cartilage',
  '- Superior, middle conchae = ethmoid · {{inferior concha}} = separate bone',
  '- Each meatus lies <b>under</b> its concha',
  '> Inferior meatus → {{nasolacrimal duct}} only → pus there = tear duct, not a sinus',
  '> Cribriform plate fracture → {{anosmia}} + CSF rhinorrhea'
]);
S_('U-C2', [
  '| Opening | Drains |',
  '| Sphenoethmoidal recess | {{sphenoid sinus}} |',
  '| Superior meatus | posterior ethmoidal cells |',
  '| Middle meatus · {{hiatus semilunaris}} | {{frontal}}, maxillary, anterior ethmoidal |',
  '| Inferior meatus | nasolacrimal duct |',
  '> {{Kiesselbach area}} (front of septum) → arteries meet → commonest nosebleed site'
]);
S_('U-C3', [
  '## Nasopharynx · air only',
  '- Roof: {{pharyngeal tonsil}} (adenoid)',
  '- Side wall, front → back: {{auditory tube}} opening → {{torus tubarius}} → pharyngeal recess',
  '- Fold down from the torus = {{salpingopharyngeus}}',
  '## Oropharynx · air + food',
  '- {{Palatine tonsil}} between the arches · lingual tonsil on the tongue root',
  '## Laryngopharynx',
  '- {{Piriform recess}} → swallowed fish bones lodge',
  '> Pharyngeal recess → nasopharyngeal carcinoma (EBV)'
]);
S_('U-C4', [
  '- Unpaired: {{thyroid}} (shield) · {{cricoid}} (only complete ring) · epiglottis',
  '- Paired: arytenoid (cords attach), corniculate, cuneiform',
  '> Top → bottom: false fold → ventricle → {{vocal fold}} (true) → subglottis',
  '- Quadrangular membrane → vestibular ligament · {{conus elasticus}} → vocal ligament',
  '> Emergency airway → cut the cricothyroid membrane'
]);
S_('U-C5', [
  '| Muscle | Action | Nerve |',
  '| {{Posterior cricoarytenoid}} | opens the rima (only one) | recurrent |',
  '| Lateral cricoarytenoid, arytenoids | close | recurrent |',
  '| {{Cricothyroid}} | tenses the cords | {{external laryngeal}} |',
  '| Thyroarytenoid, vocalis | relax | recurrent |',
  '> Recurrent laryngeal injury → cord can’t {{abduct}} → hoarse, short of breath',
  '> Superior thyroid a. tied → its companion nerve cut → cord tension ↓ → weak, low voice',
  '- Trachea: C6 → carina at the sternal angle · C-rings closed by trachealis'
]);

/* ---------- W · Thoracic wall ---------- */
S_('W-C1', [
  '> Manubrium → {{sternal angle}} → {{body}} → xiphoid',
  '> Angle = {{2nd rib}} level → count ribs from here',
  '- {{True ribs}} 1–7: own cartilage to sternum · false 8–12 (11–12 floating)',
  '- Rib head → vertebral bodies · tubercle → transverse process'
]);
S_('W-C2', [
  '| Layer | Fibres | Job |',
  '| {{External intercostal}} (outer) | down and forward, “hands in pockets” | lift ribs → inspiration |',
  '| {{Internal intercostal}} (middle) | up and forward | pull ribs down → forced expiration |',
  '| Innermost (deep) | same as middle layer | helps |',
  '- Near the sternum the outer layer is only a membrane → muscle seen there = middle layer',
  '- {{Transversus thoracis}}: back of lower sternum → costal cartilages → forced expiration'
]);
S_('W-C3', [
  '## Breathing in',
  '> Quiet → {{diaphragm}} + external intercostals',
  '> Forced → add {{sternocleidomastoid}}, scalenes, pectoralis minor',
  '## Breathing out',
  '> Quiet → passive {{elastic recoil}}',
  '> Forced → internal intercostals + {{abdominal muscles}}',
  '! Lifts ribs → breathes in · pulls ribs down or pushes abdomen up → breathes out'
]);
S_('W-C4', [
  '- Bundle runs under each rib, between internal and innermost layers',
  '> Top → bottom: {{VAN}} = vein, artery, nerve',
  '- Front: {{internal thoracic}} artery · back: aorta · veins → azygos / hemiazygos',
  '> Nerve block → aim at the {{lower border}} of the rib',
  '> Chest tap or drain → over the {{upper border}} of the rib below (away from the bundle)'
]);
S_('W-C5', [
  '> Thoracocentesis → low, at the back · chest drain → 4th–5th space, axillary line',
  '> Needle: skin → 3 intercostal layers → endothoracic fascia → {{costal pleura}} · never the {{visceral pleura}}',
  '> {{Flail chest}}: ribs broken in 2 places → loose segment → {{paradoxical}} movement',
  '- Diaphragm motor = {{phrenic nerve}} only (C3–5)',
  '- Openings: IVC T8 · {{esophagus}} T10 · aorta T12',
  '- Right dome sits on the {{liver}}'
]);

/* ---------- B · Lungs and bronchi ---------- */
S_('B-C1', [
  '| Line | Lung ends | Pleura ends |',
  '| Midclavicular | rib 6 | rib 8 |',
  '| Midaxillary | rib 8 | rib 10 |',
  '| Paravertebral | rib 10 | rib 12 |',
  '> Pleura 2 ribs below lung → gap = {{costodiaphragmatic recess}} → fluid collects here first',
  '- Parietal lines the wall (rib part = {{costal pleura}}) · {{visceral}} covers the lung',
  '> Broken rib → tears the pleura on the ribs → pneumothorax',
  '- {{Cupola}} rises above the clavicle · lymph in the pleural space = chylothorax'
]);
S_('B-C2', [
  '- Right: 3 lobes · oblique + {{horizontal}} fissure',
  '- Left: 2 lobes · {{cardiac notch}} with the {{lingula}} below it',
  '- Pleura hanging below the root = {{pulmonary ligament}}',
  '## Mediastinal grooves',
  '- Right (veins): {{azygos}} arch over the root · SVC · esophagus',
  '- Left (arteries): aortic arch · descending aorta · {{subclavian}} near apex · cardiac hollow'
]);
S_('B-C3', [
  '> Trachea starts at {{C6}} → divides at the {{carina}} (sternal angle, T4/5)',
  '> {{Right main bronchus}}: wider, shorter, more vertical → inhaled peanut lodges here',
  '- Right upper lobe bronchus above the pulmonary artery = {{eparterial bronchus}}',
  '- Left main bronchus: long, horizontal',
  '- Pulmonary {{veins}}: lowest, most anterior in the root → oxygenated blood to the heart'
]);
S_('B-C4', [
  '> Bronchial arteries feed lung tissue: left ← {{thoracic aorta}} · right ← posterior intercostal a.',
  '> Bronchial veins: right → {{azygos}} · left → accessory hemiazygos',
  '> Left-side veins cross midline → join right side → arch over right root → {{SVC}}',
  '! Mass just above the right root → presses the {{azygos arch}} first'
]);
S_('B-C5', [
  '> Lung → {{bronchopulmonary}} (hilar) nodes → tracheobronchial → bronchomediastinal trunk',
  '- {{Thoracic duct}}: from cisterna chyli · between aorta and azygos · injury → chylothorax',
  '- Right lymphatic duct → right {{venous angle}} (subclavian + internal jugular)',
  '> Vagus → {{bronchoconstriction}} · sympathetic → bronchodilation',
  '- {{Stellate ganglion}}: top of the sympathetic trunk, on the neck of rib 1'
]);

/* ---------- H · Histology ---------- */
S_('H-C1', [
  '> Conducting: nose → {{terminal bronchioles}} · respiratory: respiratory bronchioles → alveoli',
  '> Rubbed by food or friction → stratified squamous · plain airway → respiratory epithelium',
  '| Site | Lining |',
  '| {{Nostril}} (vestibule) | keratinized stratified squamous (skin) |',
  '| Most of the airway | pseudostratified ciliated columnar + {{goblet cells}} |',
  '| True cords, oral side of epiglottis | non-keratinized stratified squamous |',
  '| Olfactory roof (superior concha, sphenoethmoidal recess) | {{non-motile cilia}}, no mucus cells |',
  '- {{Bowman glands}} → dissolve odorants for the receptors'
]);
S_('H-C2', [
  '| | Trachea | Bronchus | Bronchiole |',
  '| Cartilage | {{C-shaped}} rings | plates | {{none}} |',
  '| Muscle | trachealis at the back | ring | prominent ring |',
  '| Glands | yes | yes | – |',
  '| Outer layer | {{adventitia}}, shared with esophagus | | |',
  '> Down the tree: cartilage, glands disappear → {{smooth muscle}} takes over → bronchioles constrict in asthma'
]);
S_('H-C3', [
  '- Terminal bronchiole = last conducting airway · lining {{simple cuboidal}}',
  '- {{Club cells}} (Clara): dome-shaped, no cilia',
  '> They → surfactant-like protein · {{detoxify}} chemicals · act as stem cells',
  '> {{Respiratory bronchiole}}: cuboidal wall broken by alveoli → gas exchange starts'
]);
S_('H-C4', [
  '> Alveolar duct (rings of alveoli + smooth muscle knobs) → {{alveolar sac}}',
  '- Type I: flat → covers most of the surface → gas exchange',
  '- Type II: {{cuboidal}} → {{surfactant}} → surface tension ↓ · progenitor of both types',
  '> Premature baby → immature type II → too little of that film → alveoli collapse → {{RDS}}',
  '- {{Dust cells}} = alveolar macrophages → eat inhaled particles',
  '- Pores of Kohn → collateral air flow → prevent atelectasis'
]);
S_('H-C5', [
  '> Air → surfactant + fluid → {{type I pneumocyte}} → fused {{basal laminae}} → {{endothelium}} → RBC',
  '- Pleura = {{mesothelium}} (simple squamous) → secretes lubricant',
  '> Asbestos → mesothelioma'
]);

/* ---------- G · Gas phase ---------- */
S_('G-C1', [
  '- STPD = 0 °C, 760 mmHg, dry · BTPS = 37 °C, {{saturated}} with water vapour',
  '> Boyle: P × V constant → volume ↑ → pressure {{falls}}',
  '> Chest expands → alveolar pressure below room air → {{air flows in}}',
  '- Charles: V ∝ T · Gay-Lussac: P ∝ T · ideal gas: {{PV = nRT}}',
  '- Real gases drift from ideal at {{high pressure}}'
]);
S_('G-C2', [
  '= P<sub>gas</sub> = fraction × total pressure',
  '> Airway warms and wets the air → water vapour takes {{47}} of 760 mmHg → dry gas gets 713',
  '> P<sub>IO2</sub> = 0.21 × 713 ≈ {{149}} mmHg → humidifying {{lowers}} P<sub>O2</sub> before any exchange',
  '> Alveolus: CO<sub>2</sub> added → P<sub>AO2</sub> ≈ 100, P<sub>ACO2</sub> ≈ 40',
  '- Air is fully saturated at {{37 °C}} just below the carina'
]);
S_('G-C3', [
  '> P<sub>AO2</sub> = F<sub>iO2</sub> × (P<sub>B</sub> − 47) − P<sub>aCO2</sub> ÷ R',
  '- R (CO<sub>2</sub> made ÷ O<sub>2</sub> used) ≈ {{0.8}} → exam shortcut: × 1.2 instead of ÷ R',
  '> P<sub>aCO2</sub> ↑ → CO<sub>2</sub> takes alveolar room → P<sub>AO2</sub> {{falls}}',
  '> F<sub>iO2</sub> ↑ → P<sub>AO2</sub> {{rises}}',
  '- Room air: 149 − 40 × 1.2 ≈ 100 mmHg',
  '> Graham: heavier gas → slower diffusion (rate ∝ 1/√{{molecular weight}})'
]);
S_('G-C4', [
  '> Henry: dissolved gas = α × {{partial pressure}}',
  '> O<sub>2</sub> dissolves poorly → only 0.3 mL/dL at P<sub>aO2</sub> 100 → most rides on {{hemoglobin}}',
  '- CO<sub>2</sub> far {{more soluble}} than O<sub>2</sub> (≈ 20×)',
  '- Blood gas = dissolved + bound + chemically changed (CO<sub>2</sub> → HCO<sub>3</sub><sup>−</sup>)',
  '> Nasal cannula → F<sub>iO2</sub> rises with flow but stays {{low}} · face mask reaches higher'
]);

/* ---------- M · Mechanics of breathing ---------- */
S_('M-C1', [
  '- Quiet in: {{diaphragm}} + external intercostals · quiet out: passive recoil',
  '- Forced out: {{abdominal muscles}} push the dome up',
  '> At rest: lung pulls in, chest wall springs out → pleural pressure {{negative}}, alveolar 0',
  '> Breathe in → pleural pressure falls further → alveolar below 0 → air in · fastest at {{mid-inspiration}}',
  '> Transpulmonary = alveolar − pleural → end-inspiration: 0 − (−8) = +8',
  '> Ventilator pushes air in → pleural pressure {{rises}} instead of falling',
  '- {{FRC}} = volume left after a quiet breath out'
]);
S_('M-C2', [
  '> Lung recoil = elastic fibres + {{surface tension}}',
  '> {{Surfactant}} (DPPC, type II cells) → tension ↓ → recoil ↓ → easier to inflate',
  '- Small alveoli hold more of it per area → don’t empty into big ones',
  '> Chest wall springs {{outward}} · lung pulls inward → balance point = {{FRC}}'
]);
S_('M-C3', [
  '= Compliance = ΔV / ΔP',
  '- Slope of the P–V curve · the opposite of {{elastic recoil}}',
  '- Lung + chest wall in series → total compliance {{lower}} than either',
  '- Static = {{no airflow}} · dynamic = during breathing (resistance counts)',
  '> {{Emphysema}}: walls destroyed → recoil ↓ → compliance ↑',
  '> {{Fibrosis}}: stiff lung → recoil ↑ → compliance ↓'
]);
S_('M-C4', [
  '> Poiseuille: R ∝ 1/r⁴ → narrower airway → resistance ↑↑',
  '- Most resistance in {{large airways}} (nose, trachea, bronchi) · small ones in parallel add little',
  '> Breathe in: negative pleural pressure + {{radial traction}} → airways held open',
  '> Forced breath out: pleural pressure positive → squeezes airways → {{dynamic compression}} → more effort, no more flow',
  '> COPD: recoil ↓ → airways close early → {{air trapping}}',
  '- Parasympathetic → constrict · sympathetic → dilate'
]);
S_('M-C5', [
  '| Sound | Character | Where |',
  '| Vesicular | {{soft, low}}; in longer than out | most of the lung |',
  '| Bronchovesicular | in = out | upper front, between the scapulae |',
  '| Bronchial | loud, high; out longer | over the manubrium |',
  '> Flow: {{laminar}} in small airways · turbulent in the trachea at high flow',
  '- Most work of breathing = {{elastic}} (stretching the lung)',
  '> Bronchoconstriction → resistance ↑ → {{resistive}} work ↑',
  '- Fibrosis → stretching work ↑ · COPD → airway work ↑',
  '---',
  '@F3'
]);

/* ---------- E · Gas exchange ---------- */
S_('E-C1', [
  '> O<sub>2</sub> (mmHg): dry air 160 → airway 150 → alveolus {{100}} → artery 97',
  '- Air → airway: {{water vapour}} dilutes · airway → alveolus: CO<sub>2</sub> takes room',
  '- Alveolus → artery: ~2% bypasses ({{bronchial}}, Thebesian veins) → small normal shunt',
  '= V̇<sub>A</sub> = (TV − dead space) × RR',
  '> Hyperventilate → CO<sub>2</sub> washed out → P<sub>ACO2</sub>, end-tidal CO<sub>2</sub> {{fall}} · P<sub>AO2</sub> rises'
]);
S_('E-C2', [
  '= V̇<sub>gas</sub> ∝ A × D × ΔP / T',
  '> More {{area}}, bigger gradient, higher solubility → faster · {{thicker}} barrier → slower',
  '> CO<sub>2</sub>: slightly heavier but far more {{soluble}} → diffuses ≈ 20× faster',
  '- D<sub>LCO</sub> {{low}}: emphysema (surface ↓), fibrosis, embolism, anemia',
  '- D<sub>LCO</sub> high: more capillary blood → exercise, {{fever}}, polycythemia, hemorrhage'
]);
S_('E-C3', [
  '= O<sub>2</sub> content = Hb × 1.34 × S<sub>O2</sub> + P<sub>O2</sub> × 0.003',
  '> Transit ~0.75 s · O<sub>2</sub> equilibrates by 0.25 s → plenty of {{spare time}}',
  '> {{Perfusion-limited}} (O<sub>2</sub> at rest, N<sub>2</sub>O): equilibrates early → only more flow adds uptake',
  '> {{Diffusion-limited}} (CO): binds Hb tightly → plasma P<sub>CO</sub> stays low → gradient never closes',
  '- O<sub>2</sub> joins that group: thick wall, hard exercise, {{altitude}}',
  '> Exercise up a mountain → faster blood → {{shorter transit time}} + small gradient → P<sub>aO2</sub> falls'
]);
S_('E-C4', [
  '| Upright lung | Apex | Base |',
  '| Pleural pressure | more negative | less negative |',
  '| Alveoli at rest | {{larger}} | smaller |',
  '| Ventilation | lower | higher |',
  '| Perfusion | much lower | much higher |',
  '| V/Q | {{highest}} | lowest |',
  '> Toward the apex both fall, but perfusion falls {{faster}} → V/Q ↑',
  '- Whole lung V/Q ≈ 0.8 · lying flat → flow nearly even'
]);
S_('E-C5', [
  '| | Dead space (V/Q = ∞) | Shunt (V/Q = 0) |',
  '| What | air, no blood | blood, no air |',
  '| Gas leaving | like inspired air: P<sub>O2</sub> {{high}} | like venous blood |',
  '| Cause | embolism, shock | pus, fluid, collapse |',
  '> V/Q above normal → {{wasted ventilation}} · below → wasted perfusion',
  '- Anatomic dead space ≈ {{30%}} of a breath (Fowler N<sub>2</sub> washout)',
  '- Dead space fraction V<sub>D</sub>/V<sub>T</sub> → {{Bohr}} equation',
  '> Pus or edema in alveoli → {{physiological shunt}}',
  '- A–a gradient widens with shunt, V/Q mismatch, diffusion defect'
]);

/* ---------- T · Gas transport ---------- */
S_('T-C1', [
  '> Gas in: {{partial pressure}} pushes in · tension pushes out → equilibrium',
  '> Path: alveolar air → surfactant → wall → interstitium → capillary → plasma → RBC → Hb',
  '> Exercise → more capillaries + thinner walls → diffusing capacity {{rises}}',
  '> Thick wall (edema, fibrosis) = {{alveolar-capillary block}}',
  '> Anemia → Hb ↓ → O<sub>2</sub> content ↓ but P<sub>aO2</sub> {{normal}}'
]);
S_('T-C2', [
  '- HbA = {{α2β2}}: 4 globins, 4 hemes with Fe<sup>2+</sup>',
  '- O<sub>2</sub> on Fe<sup>2+</sup> = {{oxygenation}} (iron stays Fe<sup>2+</sup>)',
  '- Sites: O<sub>2</sub>, CO → heme iron · CO<sub>2</sub> → N-terminal amino group · 2,3-BPG → between {{β chains}}',
  '> 1st O<sub>2</sub> binds α → Fe moves into the ring → salt bridges break → T → {{R state}}',
  '> Each O<sub>2</sub> makes the next easier = {{cooperativity}} → sigmoid curve'
]);
S_('T-C3', [
  '- P<sub>50</sub> = P<sub>O2</sub> at 50% saturation (≈ 27 mmHg)',
  '> Right shift: ↑ H<sup>+</sup>, CO<sub>2</sub>, {{temperature}}, 2,3-BPG → affinity ↓ → more O<sub>2</sub> unloaded',
  '> Left shift: P<sub>50</sub> ↓ → affinity {{rises}} → Hb holds on',
  '- Low pH → locks Hb in the {{T state}}',
  '> 2,3-BPG (from RBC {{glycolysis}}) binds deoxyHb → right shift · ↑ in anemia, hypoxia, altitude'
]);
S_('T-C4', [
  '> HbF = {{α2γ2}} → binds 2,3-BPG poorly → affinity ↑ → curve {{left}} (still sigmoid)',
  '> CO binds Hb ~200× tighter → less O<sub>2</sub> carried + same shift as HbF → O<sub>2</sub> not released → {{tissue hypoxia}}',
  '- MetHb = iron oxidised to {{Fe3+}} → carries no O<sub>2</sub>',
  '- Myoglobin: one chain → no cooperativity → {{hyperbolic}} curve',
  '- HbA<sub>2</sub> = α2δ2 · HbA<sub>1c</sub> (glycated) ↑ in diabetes'
]);
S_('T-C5', [
  '> CO<sub>2</sub> + H<sub>2</sub>O → ({{carbonic anhydrase}}) → H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup>',
  '- Most CO<sub>2</sub> travels as {{bicarbonate}} · the rest carbamino-Hb, dissolved',
  '> HCO<sub>3</sub><sup>−</sup> leaves the RBC, {{Cl<sup>−</sup>}} enters (chloride shift)',
  '> {{Bohr}} (tissue): CO<sub>2</sub>, H<sup>+</sup> ↑ → O<sub>2</sub> released',
  '> {{Haldane}} (lung): O<sub>2</sub> binds Hb → CO<sub>2</sub> unloaded'
]);

/* ---------- C · Pulmonary circulation ---------- */
S_('C-C1', [
  '> Pulmonary vs systemic: {{low pressure}}, low resistance, {{same flow}}',
  '- Thin walls, little smooth muscle → only has to lift blood to the lung apex',
  '> Bronchial arteries from the {{aorta}} → feed airways down to the terminal bronchioles',
  '> Some bronchial venous blood → {{pulmonary veins}} → small normal shunt'
]);
S_('C-C2', [
  '> Pressure or flow ↑ (exercise) → {{recruitment}} (closed capillaries open) + {{distension}} → PVR ↓',
  '> Big lung → alveolar vessels {{squashed}} → PVR ↑',
  '> Big lung → extra-alveolar vessels pulled open by radial traction · small lung → they narrow',
  '> Sum = U-shaped curve → PVR lowest at {{FRC}}',
  '> Alveolar pressure ↑ (ventilator) → capillaries compressed → PVR ↑'
]);
S_('C-C3', [
  '| Raise PVR | Lower PVR |',
  '| {{endothelin}}, thromboxane A<sub>2</sub>, hypoxia | {{nitric oxide}}, prostacyclin, PDE inhibitors |',
  '> Alveolar P<sub>O2</sub> low → local arteries {{constrict}} → blood to well-aired alveoli → less shunt',
  '> Birth: whole lung hypoxic → PVR high → {{first breath}} → PVR falls',
  '- Zone 1 (apex): P<sub>A</sub> > Pa > Pv → no flow · zone 2: Pa > P<sub>A</sub> > Pv',
  '- Zone 3 (base): {{Pa > Pv > P<sub>A</sub>}} → most flow'
]);
S_('C-C4', [
  '> Fluid out = K × [(P<sub>c</sub> − P<sub>i</sub>) − σ × oncotic difference]',
  '- Normal net force slightly {{outward}} → lymph clears it',
  '> Too much filtration → {{interstitial edema}} (peribronchial cuffing) → lymph overwhelmed → {{alveolar edema}} → shunt',
  '- Cardiac: P<sub>c</sub> ↑ (LV failure, {{mitral stenosis}}, overload)',
  '- Non-cardiac: low protein, leaky capillaries ({{sepsis}}), blocked lymph'
]);

/* ---------- P · Pulmonary function tests ---------- */
S_('P-C1', [
  '- Volumes: TV · IRV · ERV · RV (never leaves)',
  '| Capacity | Made of |',
  '| IC | {{TV + IRV}} |',
  '| FRC | {{ERV + RV}} |',
  '| VC | IRV + TV + ERV |',
  '| TLC | VC + RV |',
  '> Spirometer sees only air through the mouth → anything holding RV (RV, FRC, TLC) {{not measured}} → {{body box}} or gas dilution',
  '- Forced blow → FEV<sub>1</sub>, FVC, ratio, PEF, FEF<sub>25–75</sub> (small airways)'
]);
S_('P-C2', [
  '> Forced blow → chest, skull, eye pressure ↑ → wait after a recent {{heart attack}}, untreated {{pneumothorax}}, aneurysm, recent surgery',
  '- No smoking or hard exercise for 1 h before',
  '> Diagnostic test → stop {{bronchodilators}} first · inhaled steroids can continue',
  '- Predicted values: age, sex, height, ethnicity · {{weight}} doesn’t count'
]);
S_('P-C3', [
  '> Fill fast to TLC → blast out hard → keep going until empty → breathe in fully',
  '- Good start: back-extrapolated volume ≤ 5% of FVC or 0.100 L',
  '- Good end: plateau or ≥ 15 s · no cough in the {{first second}}',
  '- {{3}} to 8 acceptable blows · top two FVC and FEV<sub>1</sub> within 0.150 L',
  '> Report the {{largest}} FEV<sub>1</sub> and FVC · they may come from {{different blows}} · never average'
]);
S_('P-C4', [
  '> FEV<sub>1</sub>/FVC < {{70}} → obstruction',
  '> FVC < 80% → restriction → confirm with {{TLC}}',
  '> Severity: obstruction → {{FEV<sub>1</sub> %pred}} · restriction → FVC %pred',
  '> Reversible: FEV<sub>1</sub> ↑ ≥ 12% and ≥ 200 mL',
  '> All normal but FEF<sub>25–75</sub> < 65% → {{small airways}}',
  '! Use the actual ratio (e.g. 53), not its %pred column · obstruction + low FVC → corrected %FVC still < 80 → mixed',
  '---',
  '@X1'
]);
S_('P-C5', [
  '| Pattern | Breath out | Breath in |',
  '| Obstructive | {{scooped-out}} | normal |',
  '| Restrictive | narrow (witch’s hat in fibrosis) | narrow |',
  '| Variable {{extrathoracic}} | normal | flat |',
  '| Variable intrathoracic | flat | normal |',
  '| {{Fixed}} (stenosis, TB scar) | flat | flat → box shape |',
  '> Vocal cord palsy: breath in → airway pressure below air → neck airway sucked in → {{stridor}}',
  '- Bronchodilator response → loop grows back toward normal'
]);

/* ---------- R · Control of breathing ---------- */
S_('R-C1', [
  '| Center | Where | Job |',
  '| DRG | medulla (NTS) | quiet {{breathing in}} → phrenic → diaphragm |',
  '| Pre-Bötzinger | VRG, middle | {{pacemaker}} of the rhythm |',
  '| VRG front and back | medulla | active breathing out |',
  '| Apneustic | lower pons | longer inspiration |',
  '| Pneumotaxic | {{upper pons}} | switches inspiration off → rate, depth |',
  '> Cortex → {{voluntary}} control · limbic system, hypothalamus → emotion'
]);
S_('R-C2', [
  '## Central (ventral medulla)',
  '> Blood CO<sub>2</sub> crosses the {{blood-brain barrier}} (H<sup>+</sup> can’t) → CSF H<sup>+</sup> ↑ → ventilation ↑',
  '- CSF is a weak buffer → small CO<sub>2</sub> change, big pH change · ~70% of CO<sub>2</sub> drive · no O<sub>2</sub> sensing',
  '## Peripheral (carotid, aortic bodies)',
  '- Sense P<sub>aO2</sub> below ~60, CO<sub>2</sub> ↑, blood H<sup>+</sup> · carotid → {{CN IX}}',
  '> Blood acid (lactic, keto) → mainly the carotid body → {{Kussmaul}} breathing',
  '> Glomus cell: low O<sub>2</sub> → {{K<sup>+</sup> channels}} close → depolarise → Ca<sup>2+</sup> in → transmitter → nerve fires'
]);
S_('R-C3', [
  '| Receptor (vagus) | Trigger | Response |',
  '| Stretch | lung {{inflation}} | Hering-Breuer → longer expiration, slower rate |',
  '| Irritant | smoke, dust, histamine | cough, bronchoconstriction (asthma) |',
  '| {{J receptors}} (C-fibres) | interstitial edema (LV failure) | {{rapid, shallow}} breathing |',
  '> Both vagi cut → no stretch reflex → {{slow, deep}} breathing',
  '- Joint and muscle receptors → early exercise breathing · BP ↑ → breathing ↓'
]);
S_('R-C4', [
  '> CO<sub>2</sub> = {{strongest}} everyday drive → ventilation rises linearly with P<sub>CO2</sub> (steeper if O<sub>2</sub> also low)',
  '> Low O<sub>2</sub> → sensed {{only by peripheral}} receptors → little effect until P<sub>aO2</sub> < 60',
  '- Hyperventilation → P<sub>CO2</sub> ↓, P<sub>O2</sub> ↑',
  '> Moderate exercise → ventilation ↑ more than cardiac output → blood gases stay {{normal}}',
  '> Altitude → hypoxic hyperventilation → {{respiratory alkalosis}} · 2,3-BPG, EPO ↑',
  '> COPD retainer + too much O<sub>2</sub> → hypoxic drive lost → {{hypoventilation}} → P<sub>aCO2</sub> ↑ → CO<sub>2</sub> narcosis'
]);
S_('R-C5', [
  '| Pattern | Looks like | Cause |',
  '| Cheyne-Stokes | {{crescendo-decrescendo}} → apnea | heart failure, brain damage, altitude |',
  '| Apneusis | long inspiratory holds | {{upper pons}} lesion + vagi cut |',
  '| Biot (cluster) | groups of breaths with pauses | brainstem damage, ICP ↑ |',
  '| Ataxic | {{completely irregular}} | {{medulla}} damage |',
  '| Sigh | one deep breath | normal, reopens alveoli |'
]);

/* ---------- A · Acid-base ---------- */
S_('A-C1', [
  '- Normal pH 7.35–7.45',
  '> {{Volatile}} acid (CO<sub>2</sub>) → biggest load → cleared by the {{lungs}}',
  '> Fixed acids (sulfuric, lactic, keto) → cleared by the kidneys',
  '> pH = 6.1 + log (HCO<sub>3</sub><sup>−</sup> ÷ 0.03 P<sub>aCO2</sub>) → ratio 20 : 1 → 7.40',
  '> Speed: buffers seconds → breathing minutes → kidney hours to days',
  '- Outside cells: {{bicarbonate}} · inside: {{phosphate}}, proteins (Hb: many {{histidines}})',
  '- At pH 7.4 it is mostly HPO<sub>4</sub><sup>2−</sup>'
]);
S_('A-C2', [
  '## 1 · Reclaim filtered HCO<sub>3</sub><sup>−</sup>',
  '> Mostly {{proximal tubule}} (~85%) via NHE3 + carbonic anhydrase → no net acid out',
  '## 2 · Make new HCO<sub>3</sub><sup>−</sup>',
  '> Each H<sup>+</sup> excreted → one new HCO<sub>3</sub><sup>−</sup> to the blood',
  '> H<sup>+</sup> leaves as {{titratable acid}} (phosphate) or NH<sub>4</sub><sup>+</sup> (from {{glutamine}}, ↑↑ in chronic acidosis)',
  '- Collecting duct: type A → H<sup>+</sup> · type B → HCO<sub>3</sub><sup>−</sup> via {{pendrin}}',
  '- Sulfate is not a urine buffer → carries no H<sup>+</sup> out'
]);
S_('A-C3', [
  '> Compensation moves the other value the {{same direction}} → ratio back toward 20 : 1 · never overshoots',
  '| Disorder | Primary | Compensation |',
  '| Resp acidosis | P<sub>CO2</sub> ↑ | HCO<sub>3</sub><sup>−</sup> ↑ 1 (acute) or 3.3–4 (chronic) per 10 |',
  '| Resp alkalosis | P<sub>CO2</sub> ↓ | HCO<sub>3</sub><sup>−</sup> ↓ 2 (acute) or 4–5 (chronic) per 10 |',
  '| Metabolic acidosis | HCO<sub>3</sub><sup>−</sup> ↓ | {{Kussmaul}} breathing → P<sub>CO2</sub> ↓ |',
  '| Metabolic alkalosis | HCO<sub>3</sub><sup>−</sup> ↑ | {{hypoventilation}} → P<sub>CO2</sub> ↑ |',
  '= {{Winter}}: P<sub>CO2</sub> = 1.5 × HCO<sub>3</sub><sup>−</sup> + 8 ± 2',
  '- Altitude, aspirin → respiratory alkalosis · diuretics, vomiting → metabolic alkalosis'
]);
S_('A-C4', [
  '= AG = Na<sup>+</sup> − (Cl<sup>−</sup> + HCO<sub>3</sub><sup>−</sup>) ≈ 12',
  '> Acid brings its own anion (lactate, keto) → the gap {{rises}} = HAGMA (MUDPILES)',
  '> HCO<sub>3</sub><sup>−</sup> lost → {{chloride}} replaces it → gap normal = NAGMA ({{diarrhea}}, RTA 1, NH<sub>4</sub>Cl)',
  '> {{Albumin}} = main unmeasured anion → when it falls, the gap falls → can hide a HAGMA',
  '- Delta ratio = ΔAG ÷ ΔHCO<sub>3</sub><sup>−</sup> → < 0.4 pure NAGMA · 1–2 pure HAGMA · > 2 metabolic alkalosis too'
]);
S_('A-C5', [
  '> pH → below 7.35 acidemia · above 7.45 alkalemia · in range → which side of {{7.40}}',
  '> Primary: P<sub>CO2</sub> explains the pH → {{respiratory}} · HCO<sub>3</sub><sup>−</sup> explains it → metabolic',
  '> Compensation: compare with the expected value → outside it → {{second disorder}}',
  '> Metabolic acidosis → {{anion gap}} → delta ratio → pure or mixed',
  '---',
  '@X1'
]);

/* ---------- S · Respiratory system under stress ---------- */
S_('S-C1', [
  '> Fuel: {{phosphagen}} (seconds) → glycogen–lactic acid (~1 min) → oxidative (long)',
  '> First seconds: ventilation jumps → neural drive from motor cortex + {{proprioceptors}}',
  '> Moderate exercise: ventilation matches CO<sub>2</sub> → gases and pH stay {{normal}}',
  '> Above the {{anaerobic threshold}}: lactic acid → extra CO<sub>2</sub> + H<sup>+</sup> → ventilation rises faster',
  '- Ventilation rises the {{most}} (≈ 15×) · cardiac output ≈ 5×',
  '- Training raises VO<sub>2</sub> max mainly via {{stroke volume}}'
]);
S_('S-C2', [
  '> O<sub>2</sub> still 21% but {{barometric pressure}} falls → P<sub>IO2</sub>, P<sub>AO2</sub> fall',
  '> Hours: low P<sub>aO2</sub> → peripheral chemoreceptors → hyperventilation → {{respiratory alkalosis}}',
  '> Days: kidneys excrete HCO<sub>3</sub><sup>−</sup> (faster with {{acetazolamide}}) → pH back toward normal',
  '> Weeks: 2,3-BPG ↑ (curve shifts {{right}}) · EPO ↑ → polycythemia',
  '> Whole-lung hypoxic vasoconstriction → pulmonary pressure ↑ → {{HAPE}} (descend, O<sub>2</sub>, nifedipine)'
]);
S_('S-C3', [
  '> Every 10 m of seawater → +1 atm → at 50 m total 6 atm → P<sub>IO2</sub> = 0.21 × 6',
  '> {{Boyle}}: ascend holding breath → gas expands → alveoli rupture → pneumothorax, gas embolism',
  '> {{Henry}}: deep → more N<sub>2</sub> dissolves → {{nitrogen narcosis}} · more O<sub>2</sub> → toxicity, seizures',
  '> Ascend too fast → dissolved N<sub>2</sub> forms {{bubbles}} → {{decompression sickness}} → hyperbaric chamber'
]);
S_('S-C4', [
  '## Non-REM',
  '> Wake drive lost → ventilation ↓ → P<sub>aCO2</sub> rises a little · breathing {{regular}}',
  '> {{Pharyngeal dilator}} tone ↓ → airway resistance ↑',
  '## REM',
  '> Breathing irregular · CO<sub>2</sub> and O<sub>2</sub> responses depressed · {{atonia}} spares only the diaphragm',
  '> Lying down + low tone → {{FRC}} ↓',
  '> {{Obstructive}} apnea: throat collapses, effort continues → snoring → CPAP · central: no effort at all'
]);
S_('S-C5', [
  '> Fetus: gas exchange in the {{placenta}} · {{HbF}} → curve left → enough O<sub>2</sub> at low P<sub>O2</sub>',
  '> Fluid-filled lungs → PVR very high → blood bypasses: {{foramen ovale}} (RA → LA), ductus arteriosus (PA → aorta)',
  '> First breath + surfactant → PVR {{falls}} → lung flow ↑ → LA pressure ↑',
  '> LA pressure above RA → the oval-hole flap closes {{at once}}',
  '> P<sub>aO2</sub> ↑, PGE<sub>2</sub> ↓ → ductus closes over hours to days'
]);
