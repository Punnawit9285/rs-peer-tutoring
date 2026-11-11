/* node tools/flowtest.js: print the path and verdict the two interactive flowcharts give for every preset case. */
global.window = global;
require('../src/flows.js');
const P = FLOWS.paths, strip = h => String(h).replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
P.pftCases.forEach(c => { const r = P.pft(c.v); console.log('PFT', c.b.padEnd(15), r.steps.map(s => s.n + (s.val ? '[' + strip(s.val) + ']' : '')).join(' > ')); });
P.abCases.forEach(c => { const r = P.ab(c.v); console.log('AB ', c.b.padEnd(15), r.steps.map(s => s.n).join('>'), '=>', r.dx.join(' + ')); });
