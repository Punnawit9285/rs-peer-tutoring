/* node tools/flowtest.js: print the path and verdict the two interactive flowcharts give for every preset case. */
global.window = global;
require('../src/flows.js');
require('../src/flows-anatomy.js');
const P = FLOWS.paths, strip = h => String(h).replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
P.pftCases.forEach(c => { const r = P.pft(c.v); console.log('PFT', c.b.padEnd(15), r.steps.map(s => s.n + (s.val ? '[' + strip(s.val) + ']' : '')).join(' > ')); });
P.abCases.forEach(c => { const r = P.ab(c.v); console.log('AB ', c.b.padEnd(15), r.steps.map(s => s.n).join('>'), '=>', r.dx.join(' + ')); });
/* anatomy maps: every route step must name a real box, and every lit arrow must exist */
let bad = 0;
Object.keys(FLOWS.anatomy).forEach(name => {
  const html = FLOWS.printHtml(name), boxes = new Set((html.match(/data-n="([^"]+)"/g) || []).map(x => x.slice(8, -1)));
  Object.entries(FLOWS.anatomy[name]).forEach(([k, r]) => {
    const steps = r.s.map(x => x[0]);
    r.s.forEach(([n, e, , e2]) => { if (!boxes.has(n)) { bad++; console.log('  missing box', name, k, n); } });
    console.log('MAP', (name + '/' + k).padEnd(20), steps.join(' > '), '=>', r.dx.join(' → '));
  });
});
if (bad) { console.log(bad + ' problems'); process.exitCode = 1; }
