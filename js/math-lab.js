'use strict';

const MAX_INPUT = 1000000000n;
function parseInteger(raw, label, {positive = false, min = null, allowNegative = false} = {}) {
  const text = raw.trim();
  if (!(allowNegative ? /^-?\d+$/.test(text) : /^\d+$/.test(text))) {
    throw new Error(`${label} must be an integer.`);
  }
  const value = BigInt(text);
  if (positive && value <= 0n) throw new Error(`${label} must be positive.`);
  if (min !== null && value < min) throw new Error(`${label} must be at least ${min}.`);
  if (value > MAX_INPUT || value < -MAX_INPUT) {
    throw new Error(`Please keep ${label.toLowerCase()} between −1,000,000,000 and 1,000,000,000.`);
  }
  return value;
}
function extendedEuclid(a, b) {
  let oldR = a, r = b;
  let oldS = 1n, s = 0n;
  let oldT = 0n, t = 1n;
  const steps = [];
  while (r !== 0n) {
    const q = oldR / r;
    const nextR = oldR - q * r;
    steps.push(`${oldR} = ${q} × ${r} + ${nextR}`);
    [oldR, r] = [r, nextR];
    [oldS, s] = [s, oldS - q * s];
    [oldT, t] = [t, oldT - q * t];
  }
  return {gcd: oldR, x: oldS, y: oldT, steps};
}
function displayResult(id, message, type='') {
  const target = document.getElementById(id);
  target.className = 'result' + (type ? ' ' + type : '');
  const pre = document.createElement('pre');
  pre.textContent = message;
  target.replaceChildren(pre);
}
function updateGcd() {
  try {
    const a = parseInteger(document.getElementById('gcd-a').value, 'First integer', {positive: true});
    const b = parseInteger(document.getElementById('gcd-b').value, 'Second integer', {positive: true});
    const result = extendedEuclid(a, b);
    displayResult('gcd-output', result.steps.join('\n') +
      `\n\ngcd(${a}, ${b}) = ${result.gcd}` +
      `\n\nBézout identity:\n${a} × (${result.x}) + ${b} × (${result.y}) = ${result.gcd}`, 'success');
  } catch (err) { displayResult('gcd-output', err.message, 'error'); }
}
function updateInverse() {
  try {
    const a = parseInteger(document.getElementById('inv-a').value, 'Integer a', {allowNegative: true});
    const m = parseInteger(document.getElementById('inv-m').value, 'Modulus m', {min: 2n});
    const reduced = ((a % m) + m) % m;
    const result = extendedEuclid(reduced, m);
    if (result.gcd !== 1n) {
      displayResult('inverse-output',
        `a ≡ ${reduced} (mod ${m})\ngcd(${reduced}, ${m}) = ${result.gcd}\n\nNo modular inverse exists because gcd(a, m) ≠ 1.`);
      return;
    }
    const inverse = ((result.x % m) + m) % m;
    const steps = result.steps.join('\n');
    displayResult('inverse-output',
      `${steps}\n\nBézout identity:\n${reduced} × (${result.x}) + ${m} × (${result.y}) = 1`+
      `\n\nInverse: ${a}⁻¹ ≡ ${inverse} (mod ${m})`+
      `\nCheck: ${a} × ${inverse} ≡ 1 (mod ${m})`, 'success');
  } catch (err) { displayResult('inverse-output', err.message, 'error'); }
}
const ns = 'http://www.w3.org/2000/svg';
function addSvg(parent, tag, attrs={}, text='') {
  const el = document.createElementNS(ns, tag);
  for (const [k,v] of Object.entries(attrs)) el.setAttribute(k, String(v));
  if (text) el.textContent = text;
  parent.appendChild(el);
  return el;
}
function pmf(n, k, p) {
  if (p === 0) return k === 0 ? 1 : 0;
  if (p === 1) return k === n ? 1 : 0;
  let choose = 1;
  for (let j=1; j<=k; j++) choose *= (n - j + 1) / j;
  return choose * Math.pow(p,k) * Math.pow(1-p,n-k);
}
function updateBinomial() {
  const n = Number(document.getElementById('bin-n').value);
  const p = Number(document.getElementById('bin-p').value);
  const kInput = document.getElementById('bin-k');
  kInput.max = String(n);
  const requested = Number(kInput.value);
  const k = Number.isInteger(requested) ? Math.max(0, Math.min(n, requested)) : Math.round(n*p);
  kInput.value = String(k);
  document.getElementById('n-value').textContent = String(n);
  document.getElementById('p-value').textContent = p.toFixed(2);
  const values = Array.from({length:n+1}, (_,i)=>pmf(n,i,p));
  const maxValue = Math.max(...values, 0.01);
  document.getElementById('bin-mean').textContent = (n*p).toFixed(2);
  document.getElementById('bin-variance').textContent = (n*p*(1-p)).toFixed(2);
  document.getElementById('bin-probability').textContent = values[k].toFixed(4);
  document.getElementById('bin-summary').textContent = `For n = ${n} and p = ${p.toFixed(2)}, P(X = ${k}) = ${values[k].toFixed(4)}. Teal highlights the chosen k.`;
  const chart = document.getElementById('bin-chart');
  chart.replaceChildren();
  addSvg(chart,'title',{},`Binomial distribution n=${n}, p=${p.toFixed(2)}, highlighted k=${k}`);
  const left=55, right=25, top=28, base=271, width=760-left-right, height=base-top;
  for(let step=0;step<=4;step++) {
    const tick=maxValue*step/4;
    const y=base-height*step/4;
    addSvg(chart,'line',{x1:left,y1:y,x2:760-right,y2:y,stroke:'#e5edf7','stroke-width':1});
    addSvg(chart,'text',{x:left-9,y:y+4,'text-anchor':'end',fill:'#69809d','font-size':12},tick.toFixed(2));
  }
  const slot=width/(n+1), bw=Math.max(4, Math.min(36,slot*.74));
  for (let i=0;i<=n;i++) {
    const barHeight=Math.max(0,values[i]/maxValue*height);
    const x=left+i*slot+(slot-bw)/2, y=base-barHeight;
    const rect=addSvg(chart,'rect',{x,y,width:bw,height:barHeight,rx:Math.min(4,bw/4),fill:i===k?'#06a7a0':'#3578d4'});
    addSvg(rect,'title',{},`k=${i}: P(X=k)=${values[i].toFixed(6)}`);
    if(n<=12 || i===k || i%Math.ceil(n/10)===0) {
      addSvg(chart,'text',{x:x+bw/2,y:base+19,'text-anchor':'middle',fill:i===k?'#087f83':'#60738b','font-size':12,'font-weight':i===k?'700':'400'},String(i));
    }
  }
  addSvg(chart,'text',{x:left+width/2,y:312,'text-anchor':'middle',fill:'#536a82','font-size':13},'Number of successes (k)');
}

document.getElementById('gcd-form')?.addEventListener('submit', e => {e.preventDefault();updateGcd();});
document.getElementById('inverse-form')?.addEventListener('submit', e => {e.preventDefault();updateInverse();});
for(const id of ['bin-n','bin-p','bin-k']) {
  document.getElementById(id)?.addEventListener('input',updateBinomial);
}
updateGcd();
updateInverse();
updateBinomial();
