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


// MathBridge 2.1: Extended Euclidean Algorithm, integer equations and LLN.
// Signed inputs are handled by running Euclid on absolute values and
// adjusting the resulting coefficients back to the input signs.
function extendedSigned(a,b){
  if(a===0n && b===0n) throw new Error('gcd(0, 0) is undefined. Enter at least one nonzero coefficient.');
  const A=a<0n?-a:a, B=b<0n?-b:b;
  const result=extendedEuclid(A,B);
  return {...result,x:a<0n?-result.x:result.x,y:b<0n?-result.y:result.y};
}
function coefficientRows(a,b){
  const A=a<0n?-a:a, B=b<0n?-b:b;
  const signA=a<0n?-1n:1n,signB=b<0n?-1n:1n;
  let oldR=A,r=B,oldS=1n,s=0n,oldT=0n,t=1n;
  const rows=[{q:'—',r:oldR,s:oldS*signA,t:oldT*signB}, {q:'—',r,s:s*signA,t:t*signB}];
  while(r!==0n){
    const q=oldR/r;
    [oldR,r]=[r,oldR-q*r];
    [oldS,s]=[s,oldS-q*s];
    [oldT,t]=[t,oldT-q*t];
    rows.push({q:String(q),r,s:s*signA,t:t*signB});
  }
  return rows;
}
function updateExtended(){
  const wrap=document.getElementById('extended-table-wrap');
  wrap.replaceChildren();
  try{
    const a=parseInteger(document.getElementById('ext-a').value,'Integer a',{allowNegative:true});
    const b=parseInteger(document.getElementById('ext-b').value,'Integer b',{allowNegative:true});
    const result=extendedSigned(a,b);
    displayResult('extended-output',
      `gcd(${a}, ${b}) = ${result.gcd}\n`+
      `Bézout identity: ${a} × (${result.x}) + ${b} × (${result.y}) = ${result.gcd}\n`+
      `Verification: ${a*result.x+b*result.y} = ${result.gcd}`,'success');
    const table=document.createElement('table');
    table.className='coefficient-table';
    const caption=document.createElement('caption');caption.textContent='Extended Euclidean coefficient table: r = a · s + b · t';table.append(caption);
    const thead=document.createElement('thead');
    const header=document.createElement('tr');
    for(const name of ['Step','Quotient','Remainder r','Coefficient s','Coefficient t']){
      const th=document.createElement('th');th.scope='col';th.textContent=name;header.append(th);
    }
    thead.append(header);table.append(thead);
    const tbody=document.createElement('tbody');
    coefficientRows(a,b).forEach((row,i)=>{
      const tr=document.createElement('tr');
      for(const content of [String(i),row.q,String(row.r),String(row.s),String(row.t)]){
        const td=document.createElement('td');td.textContent=content;tr.append(td);
      }
      tbody.append(tr);
    });
    table.append(tbody);wrap.append(table);
  }catch(err){displayResult('extended-output',err.message,'error');}
}
function updateDiophantine(){
  try{
    const a=parseInteger(document.getElementById('dio-a').value,'Coefficient a',{allowNegative:true});
    const b=parseInteger(document.getElementById('dio-b').value,'Coefficient b',{allowNegative:true});
    const c=parseInteger(document.getElementById('dio-c').value,'Constant c',{allowNegative:true});
    if(a===0n && b===0n){
      displayResult('dio-output',c===0n?
        '0x + 0y = 0: every integer pair (x, y) is a solution.':
        `0x + 0y = ${c}: no solution, since 0 cannot equal ${c}.`,c===0n?'success':'');
      return;
    }
    const {gcd:g,x,y}=extendedSigned(a,b);
    if(c%g!==0n){
      displayResult('dio-output',
        `gcd(${a}, ${b}) = ${g}\n\nNo integer solution: ${g} does not divide ${c}.`);
      return;
    }
    const factor=c/g,x0=x*factor,y0=y*factor;
    const stepX=b/g,stepY=-a/g;
    displayResult('dio-output',
      `gcd(${a}, ${b}) = ${g}, and ${g} divides ${c}, so integer solutions exist.\n\n`+
      `Bézout coefficients: ${a} × (${x}) + ${b} × (${y}) = ${g}\n`+
      `Multiply by c/g = ${factor} to obtain a particular solution.\n\n`+
      `x₀ = ${x0},  y₀ = ${y0}\n`+
      `Check: ${a} × (${x0}) + ${b} × (${y0}) = ${a*x0+b*y0}\n\n`+
      `All integer solutions (t ∈ ℤ):\n`+
      `x = ${x0} + (${stepX})t\n`+
      `y = ${y0} + (${stepY})t`, 'success');
  }catch(err){displayResult('dio-output',err.message,'error');}
}
let llnTrials=[];
let llnSuccesses=0;
function getLLNp(){return Number(document.getElementById('lln-p').value);}
function resetLLN(){llnTrials=[];llnSuccesses=0;renderLLN();}
function appendLLN(count){
  const p=getLLNp();
  for(let i=0;i<count;i++){
    if(Math.random()<p) llnSuccesses++;
    llnTrials.push(llnSuccesses/ (llnTrials.length+1));
  }
  renderLLN();
}
function renderLLN(){
  const n=llnTrials.length,p=getLLNp();
  document.getElementById('lln-p-value').textContent=p.toFixed(2);
  document.getElementById('lln-n').textContent=n.toLocaleString('en-US');
  document.getElementById('lln-successes').textContent=llnSuccesses.toLocaleString('en-US');
  document.getElementById('lln-proportion').textContent=n?(llnSuccesses/n).toFixed(4):'—';
  document.getElementById('lln-error').textContent=n?Math.abs(llnSuccesses/n-p).toFixed(4):'—';
  document.getElementById('lln-summary').textContent=n?
    `After ${n.toLocaleString('en-US')} trials, the observed success proportion is ${(llnSuccesses/n).toFixed(4)}; the true p is ${p.toFixed(2)}. Run again to see another random sample path.`:
    'Click “Run simulation” to start an independent sequence of random trials.';
  const svg=document.getElementById('lln-chart');svg.replaceChildren();
  const left=54,top=22,width=678,height=270,bottom=top+height;
  for(let k=0;k<=4;k++){
    const val=k/4,y=bottom-val*height;
    addSvg(svg,'line',{x1:left,x2:left+width,y1:y,y2:y,stroke:'#e4edf6','stroke-width':1});
    addSvg(svg,'text',{x:left-9,y:y+4,'text-anchor':'end',fill:'#6a7b91','font-size':12},val.toFixed(2));
  }
  const maxX=Math.max(100,n);
  for(const tick of [0,0.25,0.5,0.75,1]){
    const x=left+tick*width;
    addSvg(svg,'text',{x,y:bottom+21,'text-anchor':'middle',fill:'#6a7b91','font-size':12},String(Math.round(maxX*tick)));
  }
  const targetY=bottom-p*height;
  addSvg(svg,'line',{x1:left,x2:left+width,y1:targetY,y2:targetY,stroke:'#da7d3e','stroke-width':2,'stroke-dasharray':'7 5'});
  addSvg(svg,'text',{x:left+width-3,y:Math.max(13,targetY-7),'text-anchor':'end',fill:'#b46026','font-size':13},`True p = ${p.toFixed(2)}`);
  if(n){
    // Never create more than ~1100 SVG points, even after a long simulation.
    const stride=Math.max(1,Math.ceil(n/1100));
    const indices=[0];
    for(let i=stride;i<n-1;i+=stride)indices.push(i);
    if(n>1)indices.push(n-1);
    const pts=indices.map(i=>`${(left+(i+1)/maxX*width).toFixed(2)},${(bottom-llnTrials[i]*height).toFixed(2)}`).join(' ');
    addSvg(svg,'polyline',{points:pts,fill:'none',stroke:'#1c72c9','stroke-width':2.5,'stroke-linecap':'round','stroke-linejoin':'round'});
  }
  addSvg(svg,'text',{x:left+width/2,y:348,'text-anchor':'middle',fill:'#52657d','font-size':13},'Number of trials');
  addSvg(svg,'text',{x:18,y:top+height/2,transform:`rotate(-90 18 ${top+height/2})`,'text-anchor':'middle',fill:'#52657d','font-size':13},'Observed proportion');
}
document.getElementById('extended-form')?.addEventListener('submit',e=>{e.preventDefault();updateExtended();});
document.getElementById('dio-form')?.addEventListener('submit',e=>{e.preventDefault();updateDiophantine();});
document.getElementById('lln-p')?.addEventListener('input',resetLLN);
document.getElementById('lln-run')?.addEventListener('click',()=>{llnTrials=[];llnSuccesses=0;appendLLN(Number(document.getElementById('lln-trials').value));});
document.getElementById('lln-add')?.addEventListener('click',()=>appendLLN(100));
document.getElementById('lln-reset')?.addEventListener('click',resetLLN);
updateExtended();updateDiophantine();renderLLN();
