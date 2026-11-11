/* Interactive flowcharts on concept cards. A card places <div class="flowx" data-flow="pft"></div> (P-C4) or
   data-flow="ab" (A-C5); this file fills it in both decks (a MutationObserver mounts every new placeholder).
   Click a box to read why that step exists; load a case to walk its path one step at a time.
   print.js calls FLOWS.printHtml(name) for a static copy of the chart. */
(function () {
  var F = window.FLOWS = {};
  var ST = {};  /* widget state per flow name, kept while the page is open */
  var GRADES = [[70, 'Mild', '≥ 70'], [50, 'Moderate', '50–69'], [35, 'Severe', '35–49'], [-1, 'Very severe', '< 35']];
  function grade(x) { for (var i = 0; i < GRADES.length; i++) if (x >= GRADES[i][0]) return GRADES[i]; return GRADES[3]; }
  function r1(x) { return Math.round(x * 10) / 10; }
  function r2(x) { return Math.round(x * 100) / 100; }
  function ul(a) { return '<ul>' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; }

  /* ---------- SVG drawing ---------- */
  function wrapText(x, y, lines, cls, lh) {
    return lines.map(function (t, i) { return '<text class="' + cls + '" x="' + x + '" y="' + (y + i * lh) + '" text-anchor="middle">' + t + '</text>'; }).join('');
  }
  function drawNode(n, st) {
    var cls = 'fx-node k-' + n.k + (st.on[n.id] ? ' on' : '') + (st.cur === n.id ? ' cur' : '') + (st.sel === n.id ? ' sel' : '') + (st.dim && !st.on[n.id] ? ' dim' : '');
    var cx = n.x + n.w / 2, t = n.t, s = n.s || [];
    var top = n.ty ? n.y + n.ty : n.y + n.h / 2 - ((t.length - 1) * 18 + (s.length ? 6 + s.length * 15 : 0)) / 2 + 6;
    var h = '<g class="' + cls + '" data-n="' + n.id + '" tabindex="0" role="button" aria-label="' + (t.join(' ') + ' ' + s.join(' ')).replace(/<[^>]+>/g, '') + '">';
    h += '<rect x="' + n.x + '" y="' + n.y + '" width="' + n.w + '" height="' + n.h + '" rx="' + (n.k === 'q' ? 6 : 12) + '"/>';
    h += wrapText(cx, top, t, 'fx-t', 18) + wrapText(cx, top + (t.length - 1) * 18 + 19, s, 'fx-s', 15);
    var v = st.val[n.id];
    if (v) {
      var w = Math.max(48, v.replace(/&[a-z]+;/g, 'x').length * 7.1 + 16), px = n.x + n.w - w - 6, py = n.y - 11;  /* top-right corner, clear of the arrows */
      h += '<g class="fx-pill"><rect x="' + px + '" y="' + py + '" width="' + w + '" height="20" rx="10"/><text x="' + (px + w / 2) + '" y="' + (py + 14.5) + '" text-anchor="middle">' + v + '</text></g>';
    }
    return h + '</g>';
  }
  function drawEdge(e, st) {
    var key = e.f + '>' + e.to, on = st.onE[key];
    var d = 'M' + e.p.map(function (p) { return p[0] + ' ' + p[1]; }).join(' L');
    var h = '<g class="fx-edge' + (on ? ' on' : '') + (st.dim && !on ? ' dim' : '') + (e.dash ? ' dash' : '') + '"><path d="' + d + '" marker-end="url(#fxa-' + st.name + (on ? '-on' : '') + ')"/>';
    if (e.l) h += '<text x="' + e.l[0] + '" y="' + e.l[1] + '" text-anchor="middle">' + e.l[2] + '</text>';
    return h + '</g>';
  }
  function svg(def, st) {
    var h = '<svg class="fx-svg" viewBox="0 0 ' + def.W + ' ' + def.H + '" role="img" aria-label="' + def.label + '"><defs>' +
      ['', '-on'].map(function (sfx) { return '<marker id="fxa-' + st.name + sfx + '" class="fx-mk' + sfx + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z"/></marker>'; }).join('') + '</defs>';
    def.E.forEach(function (e) { h += drawEdge(e, st); });
    def.N.forEach(function (n) { h += drawNode(n, st); });
    return h + '</svg>';
  }

  /* ================= PFT ================= */
  var PFT = { name: 'pft', W: 960, H: 646, label: 'Spirometry interpretation flowchart',
    N: [
      { id: 'q1', k: 'q', x: 320, y: 8, w: 320, h: 62, t: ['① FEV₁/FVC below 70?'], s: ['is the air leaving too slowly?'] },
      { id: 'q2o', k: 'q', x: 50, y: 118, w: 320, h: 62, t: ['② FVC below 80%?'], s: ['is the lung small as well?'] },
      { id: 'q2r', k: 'q', x: 590, y: 118, w: 320, h: 62, t: ['② FVC below 80%?'], s: ['is the lung small?'] },
      { id: 'obs', k: 'leaf', x: 8, y: 236, w: 196, h: 68, t: ['Obstruction'], s: ['grade by FEV₁ %pred'] },
      { id: 'qc', k: 'q', x: 252, y: 236, w: 236, h: 68, t: ['③ Corrected %FVC', 'below 80%?'], s: ['%FVC + (70 − ratio)'] },
      { id: 'restr', k: 'leaf', x: 520, y: 236, w: 200, h: 68, t: ['Restriction'], s: ['confirm with TLC', 'grade by FVC %pred'] },
      { id: 'q5', k: 'q', x: 738, y: 236, w: 214, h: 68, t: ['⑤ FEF₂₅–₇₅', 'below 65%?'], s: ['small airways?'] },
      { id: 'mixed', k: 'leaf', x: 272, y: 352, w: 196, h: 68, t: ['Mixed'], s: ['obstruction + restriction', 'confirm with TLC'] },
      { id: 'small', k: 'leaf', x: 690, y: 352, w: 136, h: 68, t: ['Small airway', 'disease'] },
      { id: 'normal', k: 'leaf', x: 836, y: 352, w: 116, h: 68, t: ['Normal'], s: ['spirometry'] },
      { id: 'bd', k: 'q', x: 30, y: 468, w: 440, h: 66, t: ['④ After bronchodilator: FEV₁ up', '≥ 12% AND ≥ 200 mL?'] },
      { id: 'rev', k: 'leaf', x: 14, y: 580, w: 214, h: 58, t: ['Reversible'], s: ['asthma-like'] },
      { id: 'fix', k: 'leaf', x: 250, y: 580, w: 234, h: 58, t: ['Not reversible'], s: ['COPD-like'] },
      { id: 'sev', k: 'note', x: 520, y: 468, w: 432, h: 174, ty: 26, t: ['Severity (% predicted)'], s: [] }
    ],
    E: [
      { f: 'q1', to: 'q2o', p: [[380, 70], [380, 94], [210, 94], [210, 118]], l: [300, 88, 'Yes'] },
      { f: 'q1', to: 'q2r', p: [[580, 70], [580, 94], [750, 94], [750, 118]], l: [665, 88, 'No'] },
      { f: 'q2o', to: 'obs', p: [[66, 180], [66, 236]], l: [86, 214, 'No'] },
      { f: 'q2o', to: 'qc', p: [[318, 180], [318, 208], [370, 208], [370, 236]], l: [394, 214, 'Yes'] },
      { f: 'qc', to: 'obs', p: [[252, 270], [204, 270]], l: [228, 262, 'No'] },
      { f: 'qc', to: 'mixed', p: [[370, 304], [370, 352]], l: [392, 334, 'Yes'] },
      { f: 'q2r', to: 'restr', p: [[640, 180], [640, 208], [620, 208], [620, 236]], l: [606, 202, 'Yes'] },
      { f: 'q2r', to: 'q5', p: [[860, 180], [860, 236]], l: [882, 214, 'No'] },
      { f: 'q5', to: 'small', p: [[790, 304], [790, 328], [758, 328], [758, 352]], l: [744, 324, 'Yes'] },
      { f: 'q5', to: 'normal', p: [[904, 304], [904, 352]], l: [926, 334, 'No'] },
      { f: 'obs', to: 'bd', p: [[66, 304], [66, 468]] },
      { f: 'mixed', to: 'bd', p: [[370, 420], [370, 468]] },
      { f: 'bd', to: 'rev', p: [[121, 534], [121, 580]], l: [100, 562, 'Yes'] },
      { f: 'bd', to: 'fix', p: [[367, 534], [367, 580]], l: [346, 562, 'No'] },
      { f: 'restr', to: 'sev', p: [[620, 304], [620, 468]], dash: true }
    ]
  };
  /* severity rows drawn on top of the sev box */
  function sevRows(st) {
    var g = st.grade, h = '';
    GRADES.forEach(function (gr, i) {
      var y = 518 + i * 28, hit = g && g[1] === gr[1];
      h += '<g class="fx-sevrow' + (hit ? ' hit' : '') + '"><rect x="540" y="' + (y - 18) + '" width="392" height="25" rx="6"/>' +
        '<text x="556" y="' + y + '">' + gr[1] + '</text><text x="916" y="' + y + '" text-anchor="end">' + gr[2] + ' %pred</text></g>';
    });
    return h + '<text class="fx-s" x="736" y="634" text-anchor="middle">obstruction: FEV₁ % · restriction: FVC %</text>';
  }

  var PFT_CASES = [
    { k: 'c2', b: 'Case 2', src: 'Lecture quiz 2 · P7', v: { ratio: 80.53, fvc: 93, fef: 70, pre: 2.90, post: 3.01 } },
    { k: 'c3', b: 'Case 3', src: 'Lecture quiz 3 · P8', v: { ratio: 41.96, fvc: 81, fev1: 43, pre: 1.01, post: 1.09 } },
    { k: 'c4', b: 'Case 4', src: 'Lecture quiz 4 · P9', v: { ratio: 53.29, fvc: 100, fev1: 69, pre: 1.69, post: 1.90 } },
    { k: 'c5', b: 'Case 5', src: 'Lecture quiz 5 · P10', v: { ratio: 82.81, fvc: 62 } },
    { k: 'c6', b: 'Case 6', src: 'Lecture quiz 6 · P11', v: { ratio: 83.11, fvc: 60 } },
    { k: 'p13', b: 'AC81 FEV₁ 18%', src: 'AC81 · P13', v: { ratio: 20, fvc: 75, fev1: 18, fef: 11, pre: 0.60, post: 0.85 } },
    { k: 'p15', b: 'AC79 wheeze', src: 'AC79 · P15', v: { ratio: 54, fvc: 97, fev1: 61, pre: 2.09, post: 2.75 } },
    { k: 'p16', b: 'AC79 FEF 50%', src: 'AC79 · P16', v: { ratio: 88, fvc: 80, fev1: 75, fef: 50 } },
    { k: 'p17', b: 'AC79 FVC 64%', src: 'AC79 · P17', v: { ratio: 76, fvc: 64, fev1: 58 } }
  ];
  var PFT_FIELDS = [['ratio', 'FEV₁/FVC (actual, %)'], ['fvc', 'FVC %pred'], ['fev1', 'FEV₁ %pred'], ['fef', 'FEF₂₅–₇₅ %pred'], ['pre', 'FEV₁ pre-BD (L)'], ['post', 'FEV₁ post-BD (L)']];

  function pftPath(v) {
    var P = [], has = function (k) { return typeof v[k] === 'number' && !isNaN(v[k]); };
    if (!has('ratio') || !has('fvc')) return { steps: [], err: 'Enter at least FEV₁/FVC and FVC %pred.' };
    var obs = v.ratio < 70;
    P.push({ n: 'q1', e: obs ? 'q2o' : 'q2r', val: v.ratio + (obs ? ' → yes' : ' → no'),
      why: 'FEV₁/FVC = <b>' + v.ratio + '</b> ' + (obs ? '&lt; 70 → air leaves too slowly → <b>obstruction</b>.' : (v.ratio < 75 ? '(70–75: borderline; the lecture’s cut-off is 70–75, so check the LLN) → treated as no obstruction.' : '≥ 75 → no obstruction.')) });
    var leaf, g = null;
    if (obs) {
      if (v.fvc < 80) {
        var c = r1(v.fvc + (70 - v.ratio));
        P.push({ n: 'q2o', e: 'qc', val: v.fvc + '% → yes', why: 'FVC <b>' + v.fvc + '%</b> &lt; 80 → but trapped air can make FVC look small → correct it first.' });
        leaf = c < 80 ? 'mixed' : 'obs';
        P.push({ n: 'qc', e: leaf, val: c + '% → ' + (c < 80 ? 'yes' : 'no'), why: 'Corrected %FVC = ' + v.fvc + ' + (70 − ' + v.ratio + ') = <b>' + c + '%</b> → ' + (c < 80 ? '&lt; 80 → the lung is really small too → <b>mixed</b> (confirm with TLC).' : '≥ 80 → the low FVC was only air trapping → <b>pure obstruction</b>.') });
      } else {
        leaf = 'obs';
        P.push({ n: 'q2o', e: 'obs', val: v.fvc + '% → no', why: 'FVC <b>' + v.fvc + '%</b> ≥ 80 → lung size normal → <b>pure obstruction</b>.' });
      }
      if (has('fev1')) g = grade(v.fev1);
      P.push({ n: leaf, e: 'bd', val: g ? g[1].toLowerCase() : '', why: (leaf === 'mixed' ? 'Mixed defect. ' : 'Obstruction. ') + (g ? 'Grade by FEV₁ %pred: <b>' + v.fev1 + '%</b> → <b>' + g[1] + '</b> (' + g[2] + ').' : 'Enter FEV₁ %pred to grade it.') });
      if (has('pre') && has('post')) {
        var dml = Math.round((v.post - v.pre) * 1000), dp = r1((v.post - v.pre) / v.pre * 100), ok = dml >= 200 && dp >= 12;
        P.push({ n: 'bd', e: ok ? 'rev' : 'fix', val: ok ? 'yes' : 'no', why: 'FEV₁ ' + v.pre + ' → ' + v.post + ' L: <b>+' + dml + ' mL</b> and <b>+' + dp + '%</b> → ' + (ok ? 'both ≥ 200 mL and ≥ 12% → <b>bronchodilator response</b>.' : (dml >= 200 ? 'mL passes but % does not' : dp >= 12 ? '% passes but mL does not' : 'neither reaches the cut-off') + ' → <b>no bronchodilator response</b>.') });
        P.push({ n: ok ? 'rev' : 'fix', why: ok ? 'Reversible obstruction: spasm relaxes → fits <b>asthma</b>.' : 'Fixed obstruction → fits <b>COPD</b>.' });
      }
    } else {
      if (v.fvc < 80) {
        g = grade(v.fvc);
        P.push({ n: 'q2r', e: 'restr', val: v.fvc + '% → yes', why: 'Ratio normal and FVC <b>' + v.fvc + '%</b> &lt; 80 → small lung → <b>restriction pattern</b>.' });
        P.push({ n: 'restr', e: 'sev', val: g[1].toLowerCase(), why: 'Restriction, graded by FVC %pred: <b>' + v.fvc + '%</b> → <b>' + g[1] + '</b> (' + g[2] + '). Spirometry cannot measure TLC → confirm with TLC.' });
      } else {
        P.push({ n: 'q2r', e: 'q5', val: v.fvc + '% → no', why: 'FVC <b>' + v.fvc + '%</b> ≥ 80 → lung size normal → look at the small airways.' });
        if (has('fef')) {
          var sm = v.fef < 65;
          P.push({ n: 'q5', e: sm ? 'small' : 'normal', val: v.fef + '% → ' + (sm ? 'yes' : 'no'), why: 'FEF₂₅–₇₅ <b>' + v.fef + '%</b> ' + (sm ? '&lt; 65 → mid-expiratory flow is low → <b>small airway disease</b>.' : '≥ 65 → <b>normal spirometry</b>.') });
          P.push({ n: sm ? 'small' : 'normal', why: sm ? 'Small airway disease: the earliest sign, before the ratio falls.' : 'Normal spirometry.' });
        } else P.push({ n: 'q5', why: 'Enter FEF₂₅–₇₅ %pred to finish.' });
      }
    }
    return { steps: P, grade: g };
  }

  /* volume-time and flow-volume sketches: dashed = normal, solid = this pattern */
  var SHAPE = { normal: [1, .80, 1, 1], obs: [.9, .5, .55, 2.4], mixed: [.62, .52, .42, 2.2], restr: [.6, .88, .78, .9], small: [.98, .76, .9, 1.7], rev: [.92, .55, .6, 2.2], fix: [.85, .42, .45, 2.6] };
  function curves(kind, v) {
    var s = SHAPE[kind]; if (!s) return '';
    var fvc = s[0], r = s[1];
    if (v && typeof v.ratio === 'number' && typeof v.fvc === 'number') { fvc = Math.max(.2, Math.min(1.3, v.fvc / 100)); r = Math.max(.15, Math.min(.95, v.ratio / 100)); }
    var W = 250, H = 150, L = 34, B = 128, sx = (W - L - 10) / 6, sy = (B - 12) / 1.25;
    function vt(f, rr, cls) {
      var tau = -1 / Math.log(1 - rr), d = '';
      for (var t = 0; t <= 6.001; t += .1) d += (t ? ' L' : 'M') + (L + t * sx).toFixed(1) + ' ' + (B - f * (1 - Math.exp(-t / tau)) * sy).toFixed(1);
      var y1 = B - f * rr * sy;
      return '<path class="' + cls + '" d="' + d + '"/><circle class="' + cls + 'd" cx="' + (L + sx) + '" cy="' + y1.toFixed(1) + '" r="3.5"/>';
    }
    var a = '<svg class="fx-mini" viewBox="0 0 ' + W + ' ' + H + '" aria-hidden="true"><line class="ax" x1="' + L + '" y1="' + B + '" x2="' + (W - 6) + '" y2="' + B + '"/><line class="ax" x1="' + L + '" y1="8" x2="' + L + '" y2="' + B + '"/>' +
      '<line class="ax1" x1="' + (L + sx) + '" y1="10" x2="' + (L + sx) + '" y2="' + B + '"/><text x="' + (L + sx) + '" y="' + (B + 16) + '" text-anchor="middle">1 s</text><text x="' + (W - 8) + '" y="' + (B + 16) + '" text-anchor="end">time</text><text x="6" y="16">vol</text>' +
      vt(1, .8, 'nrm') + vt(fvc, r, 'pat') + '</svg>';
    var fv = function (f, pk, k, cls) {
      var d = '', n = 60, i, x, y, X = function (x) { return (L + x * 170).toFixed(1); };
      for (i = 0; i <= n; i++) { x = f * i / n; y = x < .07 * f ? pk * x / (.07 * f) : pk * Math.pow((f - x) / (.93 * f), k); d += (i ? ' L' : 'M') + X(x) + ' ' + (78 - y * 62).toFixed(1); }
      for (i = n; i >= 0; i--) { x = f * i / n; d += ' L' + X(x) + ' ' + (78 + .55 * Math.sqrt(pk) * 56 * Math.sin(Math.PI * i / n)).toFixed(1); }
      return '<path class="' + cls + '" d="' + d + '"/>';
    };
    var b = '<svg class="fx-mini" viewBox="0 0 ' + W + ' ' + H + '" aria-hidden="true"><line class="ax" x1="' + L + '" y1="78" x2="' + (W - 6) + '" y2="78"/><line class="ax" x1="' + L + '" y1="8" x2="' + L + '" y2="' + (H - 6) + '"/>' +
      '<text x="6" y="16">flow</text><text x="' + (W - 8) + '" y="94" text-anchor="end">volume</text>' + fv(1, 1, 1, 'nrm') + fv(fvc, s[2], s[3], 'pat') + '</svg>';
    return '<div class="fx-curves"><figure>' + a + '<figcaption>Volume–time: dot = FEV₁</figcaption></figure><figure>' + b + '<figcaption>Flow–volume loop</figcaption></figure><p class="fx-key"><i class="kn"></i>normal <i class="kp"></i>this pattern' + (v ? ' (drawn from the case’s FVC and ratio)' : '') + '</p></div>';
  }

  var PFT_TXT = {
    q1: { h: '① FEV₁/FVC: is the air leaving too slowly?', b: ['Narrow airways → air leaves slowly → <b>FEV₁ falls more than FVC</b> → ratio ↓', 'Ratio &lt; 70 (lecture: 70–75, the LLN) → <b>obstruction</b>', 'Use the <b>actual ratio</b> (Pre column), not its %Pred column'], th: 'ลมออกช้า → FEV₁ ลดมากกว่า FVC → ratio &lt; 70 = obstruction · ใช้ค่า ratio จริง ไม่ใช่ช่อง %Pred', curve: 'obs' },
    q2o: { h: '② Ratio is low: is FVC below 80% too?', b: ['Obstruction → airways close early → <b>air trapped</b> (↑ RV) → FVC ↓', 'So a low FVC here may be <b>fake</b> → correct it before calling it restriction', 'FVC ≥ 80% → pure obstruction · FVC &lt; 80% → step ③'], th: 'มี obstruction แล้ว FVC ต่ำได้จาก air trapping → ต้อง correct ก่อน' },
    qc: { h: '③ Corrected %FVC = %FVC + (70 − ratio)', b: ['Lower ratio → more air trapping → <b>add back</b> (70 − ratio)', 'Still &lt; 80% → lung really small too → <b>mixed</b> → confirm with <b>TLC</b>', '≥ 80% → low FVC was only trapping → <b>pure obstruction</b>'], th: 'บวกคืนส่วนที่หายไปจาก air trapping · ยัง &lt; 80% = mixed (ยืนยันด้วย TLC)' },
    obs: { h: 'Obstruction', b: ['Bronchospasm, mucus or lost elastic recoil → ↑ airway resistance → slow emptying', 'FEV₁ ↓↓, FVC normal or ↓ → <b>ratio ↓</b>', 'Grade by <b>FEV₁ %pred</b> → then the bronchodilator test (④)', 'Loop: <b>scooped</b> (concave) expiratory limb'], th: 'ทางเดินหายใจแคบ → ลมออกช้า → ratio ต่ำ · grade ด้วย FEV₁ · loop เว้าเข้า', curve: 'obs' },
    mixed: { h: 'Mixed: obstruction + restriction', b: ['Slow emptying (ratio ↓) <b>and</b> a small lung (corrected FVC &lt; 80%)', 'Spirometry cannot measure TLC → <b>confirm restriction with TLC</b>', 'Grade the obstruction by FEV₁ %pred'], th: 'ทั้งลมออกช้าและปอดเล็ก → ต้องยืนยันด้วย TLC', curve: 'mixed' },
    bd: { h: '④ Bronchodilator response', b: ['β₂-agonist → airway smooth muscle relaxes → spasm reverses → FEV₁ ↑', 'Response = FEV₁ (or FVC) up <b>≥ 12% AND ≥ 200 mL</b>', '% change = (post − pre) ÷ pre × 100', 'Both are needed: 12% of a tiny FEV₁ can be &lt; 200 mL', 'ERS/ATS 2021 option: &gt; 10% of the predicted value'], th: 'ต้องเพิ่มทั้ง ≥ 12% และ ≥ 200 mL จึงนับว่าตอบสนอง' },
    rev: { h: 'Reversible obstruction', b: ['Spasm (smooth muscle) relaxes → airflow improves', 'Typical of <b>asthma</b>'], th: 'ตอบสนองต่อยาขยายหลอดลม → นึกถึง asthma', curve: 'rev' },
    fix: { h: 'Not reversible', b: ['Fixed narrowing / lost recoil → little change after the drug', 'Typical of <b>COPD</b>', 'A ratio still far below 70 after BD also points to COPD (AC81)'], th: 'ไม่ตอบสนองต่อยา → นึกถึง COPD', curve: 'fix' },
    q2r: { h: '② Ratio is normal: is the lung small?', b: ['Stiff lung, stiff chest wall or weak muscles → can’t fill → <b>TLC ↓ → FVC ↓</b>', 'FEV₁ falls in proportion → ratio normal or ↑', 'FVC &lt; 80% → restriction pattern'], th: 'ratio ปกติแต่ FVC &lt; 80% → ปอดเล็ก = restriction' },
    restr: { h: 'Restriction pattern', b: ['Fibrosis (stiff lung), chest-wall or neuromuscular disease → small lung', 'FVC ↓ with a normal or high ratio', 'Grade by <b>FVC %pred</b> · confirm with <b>TLC &lt; 80%</b>', 'Loop: small and narrow, normal shape'], th: 'ปอดเล็ก ratio ปกติ · grade ด้วย FVC · ยืนยันด้วย TLC', curve: 'restr' },
    q5: { h: '⑤ FEF₂₅–₇₅: the small airways', b: ['FEF₂₅–₇₅ = mean flow over the <b>middle half</b> of the blow', 'Small airways narrow first → mid-flow ↓ <b>before</b> the ratio falls', '&lt; 65% predicted → small airway disease'], th: 'FEF₂₅–₇₅ ไวต่อหลอดลมเล็ก · &lt; 65% = small airway disease' },
    small: { h: 'Small airway disease', b: ['Ratio and FVC still normal, mid-expiratory flow low', 'The <b>earliest</b> sign of airway disease (e.g. smokers)'], th: 'สัญญาณแรกสุดของโรคหลอดลม ก่อน ratio จะต่ำ', curve: 'small' },
    normal: { h: 'Normal spirometry', b: ['Ratio ≥ 70–75, FVC ≥ 80%, FEF₂₅–₇₅ ≥ 65%'], th: 'ทุกค่าปกติ', curve: 'normal' },
    sev: { h: 'Severity', b: ['Obstruction → grade by <b>FEV₁ %pred</b>', 'Restriction → grade by <b>FVC %pred</b>', 'Mild ≥ 70 · Moderate 50–69 · Severe 35–49 · Very severe &lt; 35'], th: 'obstruction ใช้ FEV₁ · restriction ใช้ FVC' }
  };

  /* ================= Acid-base ================= */
  var AB = { name: 'ab', W: 960, H: 664, label: 'Acid-base interpretation flowchart (handout p.76)',
    N: [
      { id: 'ph', k: 'q', x: 400, y: 6, w: 160, h: 52, t: ['pH'], s: ['normal 7.35–7.45'] },
      { id: 'acid', k: 'st', x: 140, y: 88, w: 250, h: 54, t: ['Acidemia'], s: ['pH &lt; 7.35'] },
      { id: 'mid', k: 'note', x: 410, y: 88, w: 140, h: 54, t: ['7.35–7.45'], s: ['which side of 7.40?'] },
      { id: 'alk', k: 'st', x: 570, y: 88, w: 250, h: 54, t: ['Alkalemia'], s: ['pH &gt; 7.45'] },
      { id: 'ra', k: 'leaf', x: 8, y: 180, w: 222, h: 58, t: ['Respiratory acidosis'], s: ['PCO₂ &gt; 40'] },
      { id: 'ma', k: 'leaf', x: 246, y: 180, w: 226, h: 58, t: ['Metabolic acidosis'], s: ['HCO₃⁻ &lt; 24'] },
      { id: 'ral', k: 'leaf', x: 488, y: 180, w: 222, h: 58, t: ['Respiratory alkalosis'], s: ['PCO₂ &lt; 40'] },
      { id: 'mal', k: 'leaf', x: 726, y: 180, w: 226, h: 58, t: ['Metabolic alkalosis'], s: ['HCO₃⁻ &gt; 24'] },
      { id: 'rac', k: 'q', x: 8, y: 276, w: 222, h: 76, t: ['Acute or chronic?'], s: ['HCO₃⁻ ↑ 1 per 10 (acute)', '↑ 3.3–4 per 10 (chronic)'] },
      { id: 'maw', k: 'q', x: 246, y: 276, w: 226, h: 76, t: ['Winter’s formula'], s: ['expected PCO₂ =', '1.5 × HCO₃⁻ + 8 ± 2'] },
      { id: 'ralc', k: 'q', x: 488, y: 276, w: 222, h: 76, t: ['Acute or chronic?'], s: ['HCO₃⁻ ↓ 2 per 10 (acute)', '↓ 4–5 per 10 (chronic)'] },
      { id: 'malc', k: 'q', x: 726, y: 276, w: 226, h: 76, t: ['Expected PCO₂'], s: ['↑ 6 per 10 HCO₃⁻ ↑'] },
      { id: 'ag', k: 'q', x: 246, y: 390, w: 226, h: 64, t: ['Anion gap'], s: ['Na⁺ − (Cl⁻ + HCO₃⁻)', 'normal ≈ 12'] },
      { id: 'dr', k: 'q', x: 246, y: 490, w: 226, h: 64, t: ['Delta ratio'], s: ['(AG − 12) ÷ (24 − HCO₃⁻)'] },
      { id: 'cra', k: 'cause', x: 8, y: 390, w: 222, h: 164, t: ['Hypoventilation'], s: ['airway obstruction', 'emphysema · COPD', 'severe pneumonia', 'CNS-depressant drugs'] },
      { id: 'cral', k: 'cause', x: 488, y: 390, w: 222, h: 164, t: ['Hyperventilation'], s: ['anxiety · excitement', 'high altitude · fever', 'pneumonia', 'acute aspirin poisoning', 'CNS disease (stroke)'] },
      { id: 'cmal', k: 'cause', x: 726, y: 390, w: 226, h: 164, t: ['Acid lost / base gained'], s: ['vomiting', 'antacids, NaHCO₃', 'aldosterone excess', 'steroids · diuretics'] },
      { id: 'd1', k: 'leaf', x: 8, y: 598, w: 222, h: 60, t: ['&lt; 0.4 · Pure NAGMA'], s: ['RTA · diarrhea'] },
      { id: 'd2', k: 'leaf', x: 246, y: 598, w: 226, h: 60, t: ['0.4–0.8'], s: ['HAGMA + NAGMA'] },
      { id: 'd3', k: 'leaf', x: 488, y: 598, w: 222, h: 60, t: ['1–2 · Pure HAGMA'], s: ['MUDPILES'] },
      { id: 'd4', k: 'leaf', x: 726, y: 598, w: 226, h: 60, t: ['&gt; 2 · HAGMA +'], s: ['metabolic alkalosis'] }
    ],
    E: [
      { f: 'ph', to: 'acid', p: [[430, 58], [430, 72], [265, 72], [265, 88]] },
      { f: 'ph', to: 'alk', p: [[530, 58], [530, 72], [695, 72], [695, 88]] },
      { f: 'ph', to: 'mid', p: [[480, 58], [480, 88]] },
      { f: 'mid', to: 'acid', p: [[410, 115], [392, 115]], dash: true },
      { f: 'mid', to: 'alk', p: [[550, 115], [568, 115]], dash: true },
      { f: 'acid', to: 'ra', p: [[220, 142], [220, 160], [119, 160], [119, 180]] },
      { f: 'acid', to: 'ma', p: [[320, 142], [320, 180]] },
      { f: 'alk', to: 'ral', p: [[640, 142], [640, 160], [599, 160], [599, 180]] },
      { f: 'alk', to: 'mal', p: [[740, 142], [740, 160], [839, 160], [839, 180]] },
      { f: 'ra', to: 'rac', p: [[119, 238], [119, 276]] },
      { f: 'ma', to: 'maw', p: [[300, 238], [300, 276]] },
      { f: 'ral', to: 'ralc', p: [[599, 238], [599, 276]] },
      { f: 'mal', to: 'malc', p: [[839, 238], [839, 276]] },
      { f: 'maw', to: 'ag', p: [[300, 352], [300, 390]] },
      { f: 'ag', to: 'dr', p: [[300, 454], [300, 490]] },
      { f: 'dr', to: 'd1', p: [[270, 554], [270, 576], [119, 576], [119, 598]] },
      { f: 'dr', to: 'd2', p: [[330, 554], [330, 598]] },
      { f: 'dr', to: 'd3', p: [[400, 554], [400, 576], [599, 576], [599, 598]] },
      { f: 'dr', to: 'd4', p: [[436, 554], [436, 566], [839, 566], [839, 598]] }
    ]
  };

  var AB_CASES = [
    { k: 'e1', b: 'Ex 1', src: 'Handout example 1 (p.78)', v: { ph: 7.34, pco2: 52, hco3: 19 } },
    { k: 'e2', b: 'Ex 2', src: 'Handout example 2 (p.79)', v: { ph: 7.33, pco2: 33, hco3: 17 } },
    { k: 'e3', b: 'Ex 3', src: 'Handout example 3 (p.80)', v: { ph: 7.35, pco2: 50, hco3: 28 } },
    { k: 'e4', b: 'Ex 4', src: 'Handout example 4 (p.81)', v: { ph: 7.55, pco2: 30, hco3: 22 } },
    { k: 'e5', b: 'Ex 5', src: 'Handout example 5 (p.82)', v: { ph: 7.55, pco2: 20, hco3: 12 } },
    { k: 'e6', b: 'Ex 6', src: 'Handout example 6 (p.83)', v: { ph: 7.46, pco2: 42, hco3: 31 } },
    { k: 'e7', b: 'Ex 7', src: 'Handout example 7 (p.84)', v: { ph: 7.42, pco2: 42, hco3: 27 } },
    { k: 'e8', b: 'Ex 8', src: 'Handout example 8 (p.85)', v: { ph: 7.39, pco2: 41, hco3: 25 } },
    { k: 'e9', b: 'Ex 9', src: 'Handout example 9 (p.86)', v: { ph: 7.39, pco2: 34, hco3: 20 } },
    { k: 'e10', b: 'Ex 10', src: 'Handout example 10 (p.87): diabetes, pneumonia, vomiting', v: { ph: 7.36, pco2: 42, hco3: 18, na: 135, cl: 95, alb: 2.8 } },
    { k: 'a20', b: 'AC81 DKA', src: 'AC81 · A20', v: { ph: 7.18, pco2: 18, hco3: 8, na: 140, cl: 102 } },
    { k: 'a21', b: 'AC80 vomiting', src: 'AC80 · A21', v: { ph: 7.52, pco2: 48, hco3: 38 } },
    { k: 'a10', b: 'AC80 asthma', src: 'AC80 · A10', v: { ph: 7.30, pco2: 55, hco3: 25 } },
    { k: 'a12', b: 'AC81 COPD', src: 'AC81 · A12', v: { ph: 7.37, pco2: 55, hco3: 31 } },
    { k: 'a14', b: 'AC80 altitude', src: 'AC80 · A14', v: { ph: 7.43, pco2: 30, hco3: 18 } }
  ];
  var AB_FIELDS = [['ph', 'pH'], ['pco2', 'PaCO₂ (mmHg)'], ['hco3', 'HCO₃⁻ (mEq/L)'], ['na', 'Na⁺'], ['cl', 'Cl⁻'], ['alb', 'Albumin (g/dL)']];

  function respComp(v, acid) {
    var H = v.hco3, d = Math.abs(v.pco2 - 40), sg = acid ? 1 : -1;
    var ac = 24 + sg * (acid ? .1 : .2) * d, c1 = 24 + sg * (acid ? .33 : .4) * d, c2 = 24 + sg * (acid ? .4 : .5) * d;
    var lo = Math.min(c1, c2), hi = Math.max(c1, c2), res, add = null;
    var away = acid ? H - ac : ac - H;   /* > 0 when HCO3 moved in the compensating direction beyond acute */
    var farC = acid ? H - hi : lo - H;   /* > 0 when beyond chronic */
    if (away < -1) { res = 'too little'; add = acid ? 'metabolic acidosis' : 'metabolic alkalosis'; }
    else if (away <= 1) res = (acid ? H >= lo - 1 : H <= hi + 1) ? 'acute or chronic (too small to tell)' : 'acute';
    else if (acid ? H < lo - 1 : H > hi + 1) res = 'partly compensated (acute on chronic)';
    else if (farC <= 1) res = 'chronic';
    else { res = 'too much'; add = acid ? 'metabolic alkalosis' : 'metabolic acidosis'; }
    var txt = 'ΔPCO₂ = ' + d + ' → expected HCO₃⁻: acute ≈ <b>' + r1(ac) + '</b>, chronic ≈ <b>' + r1(lo) + (r1(lo) !== r1(hi) ? '–' + r1(hi) : '') + '</b>. Actual <b>' + H + '</b> → ';
    if (add) txt += (res === 'too little' ? 'less' : 'more') + ' change than even ' + (res === 'too little' ? 'acute' : 'chronic') + ' compensation → <b>+ ' + add + '</b>.';
    else txt += '<b>' + res + '</b>.';
    return { res: res, add: add, txt: txt, pill: add ? (add === 'metabolic acidosis' ? '+ met. acid.' : '+ met. alk.') : res.split(' (')[0].replace('acute or chronic', 'unclear').replace('partly compensated', 'acute on chronic') };
  }

  function abPath(v) {
    var P = [], dx = [], has = function (k) { return typeof v[k] === 'number' && !isNaN(v[k]); };
    if (!has('ph') || !has('pco2') || !has('hco3')) return { steps: [], err: 'Enter pH, PaCO₂ and HCO₃⁻.' };
    var pH = v.ph, C = v.pco2, H = v.hco3, side;
    var inRange = pH >= 7.35 && pH <= 7.45, allNormal = inRange && C >= 35 && C <= 45 && H >= 22 && H <= 26;
    if (pH < 7.35) { side = 'acid'; P.push({ n: 'ph', e: 'acid', val: pH + ' → low', why: 'pH <b>' + pH + '</b> &lt; 7.35 → <b>acidemia</b>.' }); }
    else if (pH > 7.45) { side = 'alk'; P.push({ n: 'ph', e: 'alk', val: pH + ' → high', why: 'pH <b>' + pH + '</b> &gt; 7.45 → <b>alkalemia</b>.' }); }
    else {
      P.push({ n: 'ph', e: 'mid', val: pH + ' → in range', why: 'pH <b>' + pH + '</b> is inside 7.35–7.45.' });
      if (allNormal) { P.push({ n: 'mid', val: 'normal', why: 'PaCO₂ ' + C + ' (35–45) and HCO₃⁻ ' + H + ' (22–26) are in range too → <b>normal ABG</b>.' }); dx.push('Normal acid-base status'); return { steps: P, dx: dx }; }
      side = pH < 7.40 ? 'acid' : pH > 7.40 ? 'alk' : null;
      if (!side) { P.push({ n: 'mid', val: '7.40', why: 'pH exactly 7.40 with abnormal PaCO₂/HCO₃⁻ → two opposite disorders cancelling out → <b>mixed</b>.' }); dx.push('Mixed disorder (opposite processes cancel)'); return { steps: P, dx: dx }; }
      P.push({ n: 'mid', e: side, val: side === 'acid' ? '&lt; 7.40' : '&gt; 7.40', why: 'pH in range but PaCO₂/HCO₃⁻ abnormal → compensated or mixed. pH ' + pH + ' is on the <b>' + (side === 'acid' ? 'acid side (&lt; 7.40)' : 'alkaline side (&gt; 7.40)') + '</b> → the primary disorder is the one that makes it ' + (side === 'acid' ? 'acid' : 'alkaline') + '.' });
    }
    var resp, met;
    if (side === 'acid') { resp = C > 40; met = H < 24; } else { resp = C < 40; met = H > 24; }
    var nR = side === 'acid' ? 'ra' : 'ral', nM = side === 'acid' ? 'ma' : 'mal';
    var nameR = side === 'acid' ? 'Respiratory acidosis' : 'Respiratory alkalosis', nameM = side === 'acid' ? 'Metabolic acidosis' : 'Metabolic alkalosis';
    P.push({ n: side, e: resp && met ? null : resp ? nR : nM, val: '', why: (side === 'acid' ? 'Acid side' : 'Alkaline side') + ': PaCO₂ <b>' + C + '</b> ' + (resp ? (side === 'acid' ? '&gt; 40 → explains it (respiratory)' : '&lt; 40 → explains it (respiratory)') : '→ does not explain it') + ' · HCO₃⁻ <b>' + H + '</b> ' + (met ? (side === 'acid' ? '&lt; 24 → explains it (metabolic)' : '&gt; 24 → explains it (metabolic)') : '→ does not explain it') + '.' });
    var metAcid = false;
    if (resp && met) {
      P[P.length - 1].e2 = [nR, nM];
      P.push({ n: nR, val: 'both', why: 'PaCO₂ and HCO₃⁻ <b>both</b> push the pH the same way → <b>mixed ' + nameR.toLowerCase() + ' + ' + nameM.toLowerCase() + '</b>.' });
      P.push({ n: nM, e: side === 'acid' ? 'maw' : null, why: 'Both processes are primary; neither is compensating for the other.' });
      dx.push(nameR, nameM);
      metAcid = side === 'acid';
      if (metAcid) { var we = 1.5 * H + 8; P.push({ n: 'maw', e: 'ag', val: r1(we - 2) + '–' + r1(we + 2), why: 'Check with Winter: expected PCO₂ = 1.5 × ' + H + ' + 8 = <b>' + r1(we) + ' ± 2</b>; actual ' + C + ' is above it → confirms the added respiratory acidosis.' }); }
    } else if (resp) {
      P.push({ n: nR, e: side === 'acid' ? 'rac' : 'ralc', val: 'primary', why: '<b>' + nameR + '</b> is the primary disorder. HCO₃⁻ ' + H + ' moves the ' + ((side === 'acid') === (H >= 24) ? 'same way (compensation)' : 'other way') + '.' });
      var rc = respComp(v, side === 'acid');
      P.push({ n: side === 'acid' ? 'rac' : 'ralc', val: rc.pill, why: rc.txt });
      var lbl = { acute: 'Acute ', chronic: 'Chronic ', 'partly compensated (acute on chronic)': 'Acute-on-chronic ' }[rc.res] || '';
      dx.push(lbl ? lbl + nameR.toLowerCase() : nameR);
      if (rc.add) { dx.push(rc.add); if (rc.add === 'metabolic acidosis') metAcid = true; }
    } else if (met) {
      P.push({ n: nM, e: side === 'acid' ? 'maw' : 'malc', val: 'primary', why: '<b>' + nameM + '</b> is the primary disorder. PaCO₂ ' + C + ' moves the ' + ((side === 'acid') === (C <= 40) ? 'same way (compensation)' : 'other way') + '.' });
      if (side === 'acid') {
        metAcid = true;
        var w = 1.5 * H + 8, lo = r1(w - 2), hi = r1(w + 2), ad = C > w + 2 ? 'respiratory acidosis' : C < w - 2 ? 'respiratory alkalosis' : null;
        P.push({ n: 'maw', e: 'ag', val: ad ? (ad === 'respiratory acidosis' ? '+ resp. acid.' : '+ resp. alk.') : 'appropriate', why: 'Expected PCO₂ = 1.5 × ' + H + ' + 8 = <b>' + r1(w) + ' ± 2</b> (' + lo + '–' + hi + '). Actual <b>' + C + '</b> → ' + (ad ? (C > w + 2 ? 'higher than expected → CO₂ is being retained → <b>+ respiratory acidosis</b>.' : 'lower than expected → <b>+ respiratory alkalosis</b>.') : 'matches → <b>appropriate respiratory compensation</b>.') });
        dx.push('Metabolic acidosis'); if (ad) dx.push(ad);
      } else {
        var ex = 40 + .6 * (H - 24), ad2 = C > ex + 3 ? 'respiratory acidosis' : C < ex - 3 ? 'respiratory alkalosis' : null;
        P.push({ n: 'malc', val: ad2 ? (ad2 === 'respiratory acidosis' ? '+ resp. acid.' : '+ resp. alk.') : 'appropriate', why: 'Expected PCO₂ ≈ 40 + 0.6 × (' + H + ' − 24) = <b>' + r1(ex) + '</b> (handout: +6 per 10). Actual <b>' + C + '</b> → ' + (ad2 ? (C > ex ? 'well above → <b>+ respiratory acidosis</b>.' : 'well below → <b>+ respiratory alkalosis</b>.') : 'close to it → <b>appropriate respiratory compensation</b>.') });
        dx.push('Metabolic alkalosis'); if (ad2) dx.push(ad2);
      }
    } else {
      P.push({ n: side, why: 'Neither value explains the pH: recheck the numbers.' });
    }
    /* anion gap and delta ratio for any metabolic acidosis */
    if (metAcid) {
      if (has('na') && has('cl')) {
        var ag = v.na - v.cl - H, cag = has('alb') ? r1(ag + 2.5 * (4 - v.alb)) : ag;
        P.push({ n: 'ag', e: 'dr', val: 'AG ' + cag, why: 'AG = ' + v.na + ' − (' + v.cl + ' + ' + H + ') = <b>' + ag + '</b>' + (has('alb') ? '; albumin ' + v.alb + ' g/dL hides part of the gap → corrected AG = ' + ag + ' + 2.5 × (4 − ' + v.alb + ') = <b>' + cag + '</b>' : '') + ' (normal ≈ 12).' });
        if (H < 24) {
          var dr = r2((cag - 12) / (24 - H)), leaf = dr < .4 ? 'd1' : dr <= .8 ? 'd2' : dr < 1 ? 'd2' : dr <= 2 ? 'd3' : 'd4';
          var lab = { d1: 'pure normal-AG (hyperchloremic) acidosis', d2: dr < 1 && dr > .8 ? 'between the bands: HAGMA, maybe with some NAGMA' : 'HAGMA + NAGMA', d3: 'pure high-AG acidosis', d4: 'HAGMA + metabolic alkalosis (or respiratory acidosis)' }[leaf];
          P.push({ n: 'dr', e: leaf, val: 'Δ ratio ' + dr, why: 'Delta ratio = (' + cag + ' − 12) ÷ (24 − ' + H + ') = <b>' + dr + '</b> → <b>' + lab + '</b>.' });
          P.push({ n: leaf, why: AB_TXT[leaf].b[0] });
          var mi = dx.indexOf('Metabolic acidosis'); if (mi < 0) mi = dx.indexOf('metabolic acidosis');
          var tag = leaf === 'd1' ? 'normal AG' : leaf === 'd3' ? 'high AG' : leaf === 'd2' ? 'high AG + normal AG' : 'high AG';
          if (mi >= 0) dx[mi] = dx[mi] + ' (' + tag + ')';
          if (leaf === 'd4' && dx.join(' ').indexOf('metabolic alkalosis') < 0) dx.push('metabolic alkalosis');
        }
      } else P.push({ n: 'ag', val: 'need Na⁺, Cl⁻', why: 'Metabolic acidosis → next calculate the anion gap. Enter Na⁺ and Cl⁻ to continue.' });
    }
    return { steps: P, dx: dx };
  }

  var AB_TXT = {
    ph: { h: 'pH: start here', b: ['pH = 6.1 + log (HCO₃⁻ ÷ 0.03 × PCO₂) → set by the <b>ratio</b> (20 : 1 = 7.40)', 'HCO₃⁻ = kidney side · PCO₂ = lung side', '&lt; 7.35 acidemia · &gt; 7.45 alkalemia'], th: 'pH ขึ้นกับอัตราส่วน HCO₃⁻ ต่อ PCO₂ (20:1)' },
    acid: { h: 'Acidemia (pH &lt; 7.35)', b: ['Either PCO₂ ↑ (lung) or HCO₃⁻ ↓ (metabolic) → ratio ↓ → pH ↓', 'Ask: which one moved the pH this way?'], th: 'ดูว่า PCO₂ สูง หรือ HCO₃⁻ ต่ำ ที่ทำให้เป็นกรด' },
    alk: { h: 'Alkalemia (pH &gt; 7.45)', b: ['Either PCO₂ ↓ (lung) or HCO₃⁻ ↑ (metabolic) → ratio ↑ → pH ↑', 'Ask: which one moved the pH this way?'], th: 'ดูว่า PCO₂ ต่ำ หรือ HCO₃⁻ สูง ที่ทำให้เป็นด่าง' },
    mid: { h: 'pH 7.35–7.45', b: ['All three normal → normal ABG', 'pH normal but PCO₂/HCO₃⁻ abnormal → compensated or mixed', 'Compensation never overshoots → the side of <b>7.40</b> points to the primary disorder'], th: 'pH ปกติแต่ค่าอื่นผิด → ดูว่าอยู่ฝั่งไหนของ 7.40' },
    ra: { h: 'Respiratory acidosis', b: ['Hypoventilation → CO₂ retained → H⁺ ↑ → <b>pH ↓</b>', 'Kidney compensates: ↑ H⁺ excretion (H₂PO₄⁻, NH₄⁺) → ↑ HCO₃⁻ → takes <b>days</b>', 'Acute: HCO₃⁻ barely moves · chronic: HCO₃⁻ can exceed 30'], th: 'หายใจน้อย → CO₂ คั่ง → pH ต่ำ → ไตเก็บ HCO₃⁻ เพิ่ม (ใช้เวลาหลายวัน)', ratio: ['↑ (compensation)', '↑ primary'] },
    rac: { h: 'Respiratory acidosis: acute or chronic?', b: ['Every 10 mmHg ↑ PCO₂ → HCO₃⁻ ↑ <b>1</b> (acute) or <b>3.3–4</b> (chronic)', 'Acute: pH ↓ 0.08 per 10 · chronic: only 0.02–0.03', 'Less than acute → + metabolic acidosis · more than chronic → + metabolic alkalosis'], th: 'acute HCO₃⁻ เพิ่ม 1 ต่อ 10 · chronic เพิ่ม 3.3–4 ต่อ 10' },
    ma: { h: 'Metabolic acidosis', b: ['Acid gained (ketoacids, lactate, methanol) <b>or</b> HCO₃⁻ lost (diarrhea) <b>or</b> H⁺ not excreted (RTA) → HCO₃⁻ ↓ → <b>pH ↓</b>', 'Lungs compensate: hyperventilation (Kussmaul) → PCO₂ ↓ → within minutes', 'Then: Winter → anion gap → delta ratio'], th: 'HCO₃⁻ ลด → pH ต่ำ → หายใจเร็วลึกเป่า CO₂ ทิ้ง', ratio: ['↓ primary', '↓ (compensation)'] },
    maw: { h: 'Winter’s formula', b: ['Expected PCO₂ = 1.5 × HCO₃⁻ + 8 ± 2', 'Measured ≈ expected → pure, appropriate compensation', 'Measured &gt; expected → + <b>respiratory acidosis</b>', 'Measured &lt; expected → + <b>respiratory alkalosis</b>'], th: 'PCO₂ จริงสูงกว่าคาด = มี respiratory acidosis ร่วม · ต่ำกว่า = respiratory alkalosis ร่วม' },
    ag: { h: 'Anion gap', b: ['Cations = anions always → the “gap” is the <b>unmeasured anions</b> (albumin, phosphate, sulfate, organic anions)', 'AG = Na⁺ − (Cl⁻ + HCO₃⁻) · normal ≈ 12', 'Added acid anion (lactate, ketoacid) → AG ↑ · lost HCO₃⁻ replaced by Cl⁻ → AG normal', 'Albumin ↓ 1 g/dL → AG ↓ 2.5 → correct it or a high gap hides'], th: 'AG = anion ที่ไม่ได้วัด · albumin ต่ำทำให้ AG ดูต่ำ ต้อง correct' },
    dr: { h: 'Delta ratio', b: ['Each acid anion added should replace one HCO₃⁻ → ΔAG ≈ ΔHCO₃⁻', 'Delta ratio = (AG − 12) ÷ (24 − HCO₃⁻)', 'Too small → extra HCO₃⁻ loss (NAGMA) · too big → extra HCO₃⁻ gain (alkalosis)'], th: 'เทียบ AG ที่เพิ่ม กับ HCO₃⁻ ที่ลด' },
    d1: { h: 'Delta ratio &lt; 0.4: pure NAGMA', b: ['HCO₃⁻ lost and replaced by <b>Cl⁻</b> → gap unchanged (hyperchloremic)', 'Causes: RTA type 1, diarrhea, NH₄Cl ingestion, saline with excess Cl⁻'], th: 'เสีย HCO₃⁻ แล้ว Cl⁻ มาแทน → AG ปกติ' },
    d2: { h: 'Delta ratio 0.4–0.8: HAGMA + NAGMA', b: ['HCO₃⁻ fell more than the gap rose → a second, normal-gap loss', 'Example: lactic acidosis + diarrhea'], th: 'HCO₃⁻ ลดมากกว่าที่ AG เพิ่ม → มี NAGMA ร่วม' },
    d3: { h: 'Delta ratio 1–2: pure HAGMA', b: ['Gap rose about as much as HCO₃⁻ fell → one high-gap acidosis', '<b>MUDPILES</b>: methanol/metformin, uremia, DKA, paracetamol, isoniazid, lactate, ethanol/ethylene glycol, salicylate'], th: 'AG เพิ่มพอๆ กับ HCO₃⁻ ลด → HAGMA อย่างเดียว (MUDPILES)' },
    d4: { h: 'Delta ratio &gt; 2: HAGMA + metabolic alkalosis', b: ['HCO₃⁻ is higher than the gap predicts → something added HCO₃⁻', 'Example: DKA + vomiting'], th: 'HCO₃⁻ สูงกว่าที่ควร → มี metabolic alkalosis ซ่อนอยู่' },
    ral: { h: 'Respiratory alkalosis', b: ['Hyperventilation → CO₂ blown off → H⁺ ↓ → <b>pH ↑</b>', 'Kidney compensates: ↓ H⁺ excretion, ↑ HCO₃⁻ excretion', 'Alkalosis → proteins bind more Ca²⁺ → free Ca²⁺ ↓ → nerves fire easily → <b>tetany</b> (carpopedal spasm)'], th: 'หายใจเร็ว → CO₂ ต่ำ → pH สูง → Ca²⁺ อิสระลด → มือจีบเกร็ง', ratio: ['↓ (compensation)', '↓ primary'] },
    ralc: { h: 'Respiratory alkalosis: acute or chronic?', b: ['Every 10 mmHg ↓ PCO₂ → HCO₃⁻ ↓ <b>2</b> (acute) or <b>4–5</b> (chronic)', 'Chronic (e.g. altitude after days) → pH back near normal'], th: 'acute HCO₃⁻ ลด 2 ต่อ 10 · chronic ลด 4–5 ต่อ 10' },
    mal: { h: 'Metabolic alkalosis', b: ['Acid lost (vomiting) <b>or</b> base gained (antacid, NaHCO₃) <b>or</b> aldosterone/steroids/diuretics → HCO₃⁻ ↑ → <b>pH ↑</b>', 'Lungs compensate: hypoventilation → PCO₂ ↑', 'Kidney: ↓ H⁺ excretion, ↑ HCO₃⁻ excretion'], th: 'เสียกรด/ได้ด่าง → HCO₃⁻ สูง → หายใจช้าลงเก็บ CO₂', ratio: ['↑ primary', '↑ (compensation)'] },
    malc: { h: 'Metabolic alkalosis: expected PCO₂', b: ['Every 10 ↑ HCO₃⁻ → PCO₂ ↑ about <b>6</b> (handout p.60–61)', 'Much higher → + respiratory acidosis · much lower → + respiratory alkalosis'], th: 'HCO₃⁻ เพิ่ม 10 → PCO₂ เพิ่มราว 6' },
    cra: { h: 'Causes of respiratory acidosis', b: ['Hypoventilation: airway obstruction, emphysema/COPD, chronic bronchitis, severe pneumonia, pulmonary edema, CNS-depressant drugs'], th: 'สาเหตุ: หายใจน้อย' },
    cral: { h: 'Causes of respiratory alkalosis', b: ['Hyperventilation: anxiety/fear, high altitude, fever or hypoxia, pneumonia, acute aspirin poisoning, CNS disease (stroke)'], th: 'สาเหตุ: หายใจมากเกิน' },
    cmal: { h: 'Causes of metabolic alkalosis', b: ['Vomiting (loss of gastric HCl), antacids/NaHCO₃/lactate/citrate, aldosterone excess, steroid therapy, diuretics'], th: 'สาเหตุ: อาเจียน ยาลดกรด aldosterone/steroid ยาขับปัสสาวะ' }
  };
  function ratioBox(r) {
    return '<div class="fx-ratio"><div><span>HCO₃⁻ · kidney</span><b>' + r[0] + '</b></div><div class="div">÷</div><div><span>PCO₂ · lung</span><b>' + r[1] + '</b></div></div>';
  }

  /* ================= widget ================= */
  var DEFS = { pft: { def: PFT, cases: PFT_CASES, fields: PFT_FIELDS, path: pftPath, txt: PFT_TXT, title: 'Walk the spirometry flowchart', hint: 'Click any box to see why that step exists. Load a case, then press Next step.' },
    ab: { def: AB, cases: AB_CASES, fields: AB_FIELDS, path: abPath, txt: AB_TXT, title: 'Walk the acid-base flowchart', hint: 'Click any box to see what it means. Load an example, then press Next step.' } };

  function state(name) {
    return ST[name] || (ST[name] = { name: name, caseK: null, v: null, res: null, step: 0, sel: null, form: false });
  }
  function view(name, st) {
    var D = DEFS[name], steps = st.res ? st.res.steps : [], shown = steps.slice(0, st.step);
    var vs = { name: name, on: {}, onE: {}, val: {}, cur: null, sel: st.sel, dim: !!st.res && steps.length > 0, grade: null };
    shown.forEach(function (s, i) {
      vs.on[s.n] = true; if (s.val) vs.val[s.n] = s.val;
      if (i < shown.length - 1 || st.step >= steps.length) { if (s.e) vs.onE[s.n + '>' + s.e] = true; (s.e2 || []).forEach(function (e) { vs.onE[s.n + '>' + e] = true; }); }
    });
    if (shown.length) vs.cur = shown[shown.length - 1].n;
    if (name === 'pft' && st.res && shown.some(function (s) { return /^(obs|mixed|restr)$/.test(s.n); })) vs.grade = st.res.grade;
    if (name === 'pft' && vs.grade) vs.on.sev = true;
    return vs;
  }
  function render(el) {
    var name = el.getAttribute('data-flow'), D = DEFS[name]; if (!D) return;
    var st = state(name), vs = view(name, st), steps = st.res ? st.res.steps : [];
    var h = '<div class="fx-head"><b>' + D.title + '</b><span>' + D.hint + '</span></div>';
    h += '<div class="fx-cases" role="group" aria-label="Load a case">' + D.cases.map(function (c) { return '<button type="button" class="fx-btn' + (st.caseK === c.k ? ' on' : '') + '" data-a="case" data-k="' + c.k + '">' + c.b + '</button>'; }).join('') +
      (D.fields && D.fields.length ? '<button type="button" class="fx-btn ghost' + (st.form ? ' on' : '') + '" data-a="form">Your numbers</button>' : '') + '</div>';
    if (st.form) {
      var cur = st.v || {};
      h += '<div class="fx-form">' + D.fields.map(function (f) { return '<label><span>' + f[1] + '</span><input type="number" step="any" inputmode="decimal" data-f="' + f[0] + '" value="' + (typeof cur[f[0]] === 'number' ? cur[f[0]] : '') + '"></label>'; }).join('') +
        '<button type="button" class="fx-btn go" data-a="run">Walk it</button></div>';
    }
    if (st.res) {
      var c = D.cases.filter(function (x) { return x.k === st.caseK; })[0];
      h += '<div class="fx-case"><span class="fx-src">' + (c ? c.src : 'Your numbers') + '</span>' + D.fields.filter(function (f) { return typeof st.v[f[0]] === 'number'; }).map(function (f) { return '<span class="fx-chip">' + f[1].replace(/ \(.*\)/, '') + ' <b>' + st.v[f[0]] + '</b></span>'; }).join('') + '</div>';
    }
    h += '<div class="fx-scroll">' + svg(D.def, vs).replace('</svg>', (name === 'pft' ? sevRows(vs) : '') + '</svg>') + '</div>';
    if (st.res && steps.length) {
      h += '<div class="fx-ctl"><button type="button" class="fx-btn" data-a="back"' + (st.step <= 1 ? ' disabled' : '') + '>◀ Back</button><span class="fx-pos">Step ' + st.step + ' of ' + steps.length + '</span>' +
        '<button type="button" class="fx-btn go" data-a="next"' + (st.step >= steps.length ? ' disabled' : '') + '>Next step ▶</button><button type="button" class="fx-btn ghost" data-a="all"' + (st.step >= steps.length ? ' disabled' : '') + '>Whole path</button><button type="button" class="fx-btn ghost" data-a="clear">Clear</button></div>';
    }
    if (st.res && st.res.err) h += '<p class="fx-err">' + st.res.err + '</p>';
    h += '<div class="fx-panel">' + panel(name, st, vs) + '</div>';
    el.innerHTML = h;
  }
  function panel(name, st, vs) {
    var D = DEFS[name], steps = st.res ? st.res.steps : [], h = '';
    if (st.res && steps.length && st.step) {
      h += '<ol class="fx-trail">' + steps.slice(0, st.step).map(function (s, i) { return '<li' + (i === st.step - 1 ? ' class="now"' : '') + '>' + s.why + '</li>'; }).join('') + '</ol>';
      if (st.step >= steps.length) {
        if (D.dxLabel && st.res.dx && st.res.dx.length) h += '<p class="fx-dx"><span>' + D.dxLabel + '</span>' + st.res.dx.join(' → ') + '</p>';
        if (name === 'ab' && st.res.dx && st.res.dx.length) h += '<p class="fx-dx"><span>Diagnosis</span>' + st.res.dx.map(function (d, i) { return i ? d.charAt(0).toLowerCase() + d.slice(1) : d; }).join(' + ') + '</p>';
        if (name === 'pft') h += '<p class="fx-dx"><span>Reading</span>' + pftReading(st) + '</p>';
      }
    }
    var key = st.sel || vs.cur, t = key && D.txt[key];
    if (t) {
      h += '<div class="fx-explain"><h4>' + t.h + '</h4>' + ul(t.b) + (t.ratio ? ratioBox(t.ratio) : '') + (t.th ? '<p class="fx-th">' + t.th + '</p>' : '') + '</div>';
      if (name === 'pft' && t.curve) h += curves(t.curve, st.res && vs.on[key] && st.v);
    } else if (!st.res) {
      h += '<p class="fx-idle">' + (D.idle ? D.idle : name === 'pft' ? 'Five questions, in order: is the air slow (ratio)? is the lung small (FVC)? how bad (grade)? does it reverse (bronchodilator)? and, if all normal, the small airways (FEF₂₅–₇₅).' : 'pH first, then which value (PaCO₂ or HCO₃⁻) explains it, then whether the other value compensated as expected, then — for metabolic acidosis — the anion gap and delta ratio.') + '</p>';
    }
    return h;
  }
  function pftReading(st) {
    var s = st.res.steps.map(function (x) { return x.n; }), v = st.v, g = st.res.grade, out;
    if (s.indexOf('normal') >= 0) return 'Normal spirometry';
    if (s.indexOf('small') >= 0) return 'Small airway disease';
    if (s.indexOf('restr') >= 0) return (g ? g[1] + ' ' : '') + 'restriction (confirm with TLC)';
    out = (g ? g[1] + ' ' : '') + (s.indexOf('mixed') >= 0 ? 'mixed obstructive + restrictive defect' : 'obstruction');
    if (s.indexOf('rev') >= 0) out += ' with bronchodilator response';
    else if (s.indexOf('fix') >= 0) out += ' without bronchodilator response';
    return out.charAt(0).toUpperCase() + out.slice(1);
  }
  function act(el, a, btn) {
    var name = el.getAttribute('data-flow'), D = DEFS[name], st = state(name);
    if (a === 'case') {
      var c = D.cases.filter(function (x) { return x.k === btn.getAttribute('data-k'); })[0];
      st.caseK = c.k; st.v = JSON.parse(JSON.stringify(c.v)); st.res = D.path(st.v); st.step = 1; st.sel = null;
    } else if (a === 'form') { st.form = !st.form; }
    else if (a === 'run') {
      var v = {}, ins = el.querySelectorAll('input[data-f]');
      for (var i = 0; i < ins.length; i++) { var x = parseFloat(ins[i].value); if (!isNaN(x)) v[ins[i].getAttribute('data-f')] = x; }
      st.caseK = null; st.v = v; st.res = D.path(v); st.step = st.res.steps.length ? 1 : 0; st.sel = null;
    }
    else if (a === 'next') { if (st.res) st.step = Math.min(st.res.steps.length, st.step + 1); st.sel = null; }
    else if (a === 'back') { st.step = Math.max(1, st.step - 1); st.sel = null; }
    else if (a === 'all') { if (st.res) st.step = st.res.steps.length; st.sel = null; }
    else if (a === 'clear') { st.caseK = null; st.v = null; st.res = null; st.step = 0; st.sel = null; }
    render(el);
    var again = el.querySelector('[data-a="' + a + '"]' + (a === 'case' ? '[data-k="' + st.caseK + '"]' : ''));
    if (again && !again.disabled) try { again.focus({ preventScroll: true }); } catch (e) { }
  }
  function pick(el, n) {
    var st = state(el.getAttribute('data-flow'));
    st.sel = st.sel === n ? null : n;
    render(el);
    var g = el.querySelector('.fx-node[data-n="' + n + '"]'); if (g) try { g.focus({ preventScroll: true }); } catch (e) { }
  }

  F.add = function (name, d) { DEFS[name] = d; };  /* extra charts (src/flows-anatomy.js) */
  F.paths = { pft: pftPath, ab: abPath, pftCases: PFT_CASES, abCases: AB_CASES };  /* used by tools/flowtest.js */
  F.mount = function (root) {
    var els = (root || document).querySelectorAll('.flowx');
    for (var i = 0; i < els.length; i++) if (!els[i].getAttribute('data-on')) { els[i].setAttribute('data-on', '1'); render(els[i]); }
  };
  /* static copy for the PDF: the chart only, nothing loaded */
  F.printHtml = function (name) {
    var D = DEFS[name], vs = { name: name + 'p', on: {}, onE: {}, val: {}, cur: null, sel: null, dim: false, grade: null };
    return '<div class="fx fx-print"><div class="fx-scroll">' + svg(D.def, vs).replace('</svg>', (name === 'pft' ? sevRows(vs) : '') + '</svg>') + '</div></div>';
  };

  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target : null; if (!t) return;
      var el = t.closest('.flowx'); if (!el) return;
      var b = t.closest('[data-a]'); if (b && !b.disabled) { act(el, b.getAttribute('data-a'), b); return; }
      var g = t.closest('.fx-node'); if (g) pick(el, g.getAttribute('data-n'));
    });
    document.addEventListener('keydown', function (e) {
      var t = e.target; if (!t || !t.closest) return;
      var el = t.closest('.flowx'); if (!el) return;
      if ((e.key === 'Enter' || e.key === ' ') && t.classList && t.classList.contains('fx-node')) { e.preventDefault(); pick(el, t.getAttribute('data-n')); }
      if (e.key === 'Enter' && t.tagName === 'INPUT') { e.preventDefault(); act(el, 'run', null); }
    });
    var go = function () { F.mount(document); };
    if (document.body) { go(); try { new MutationObserver(go).observe(document.body, { childList: true, subtree: true }); } catch (e) { } }
    else document.addEventListener('DOMContentLoaded', function () { go(); try { new MutationObserver(go).observe(document.body, { childList: true, subtree: true }); } catch (e) { } });
  }
})();
