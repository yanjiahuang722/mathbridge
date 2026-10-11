'use strict';
// MathBridge 2.1 practice engine. Scores & progress remain in this browser.
const questions=Array.isArray(window.MATHBRIDGE_QUESTIONS)?window.MATHBRIDGE_QUESTIONS:[];
const BANK_BY_ID=new Map(questions.map(q=>[q.id,q]));
const SESSION_KEY='mathbridge.practice.2.1.session';
const HISTORY_KEY='mathbridge.practice.2.1.history';
const list=document.getElementById('practice-list');
let sessionIds=[];
let answers={};
let history={attempts:0,correct:0,perQuestion:{}};

function readStored(key,fallback){
  try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback;}catch(_){return fallback;}
}
function saveStored(key,data){try{localStorage.setItem(key,JSON.stringify(data));}catch(_){/* private storage may be disabled */}}
function loadHistory(){
  const data=readStored(HISTORY_KEY,null);
  if(data && Number.isSafeInteger(data.attempts) && data.attempts>=0 && Number.isSafeInteger(data.correct) && data.correct>=0)
    history={attempts:data.attempts,correct:data.correct,perQuestion:data.perQuestion||{}};
}
function e(tag,attrs={},txt){
  const node=document.createElement(tag);
  for(const [key,value] of Object.entries(attrs)){
    if(key==='className') node.className=value;
    else if(key==='disabled') node.disabled=Boolean(value);
    else node.setAttribute(key,String(value));
  }
  if(txt!==undefined)node.textContent=txt;
  return node;
}
function shuffle(array){
  const result=[...array];
  for(let i=result.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];
  }
  return result;
}
function selection(){
  const topic=document.getElementById('topic-filter').value;
  const level=document.getElementById('level-filter').value;
  const count=document.getElementById('count-filter').value;
  const stage=document.getElementById('stage-filter').value;
  const unit=document.getElementById('unit-filter').value;
  const matches=questions.filter(q=>(topic==='all'||q.topic===topic)&&(level==='all'||q.level===level)&&(stage==='all'||(stage==='Advanced' ? q.stage==='Advanced' : q.stage!=='Advanced')) && (unit==='all'||q.unit===unit));
  const number=count==='all'?matches.length:Math.min(Number(count),matches.length);
  return {matches,number};
}
function updateSelectionNote(){
  const {matches,number}=selection();
  document.getElementById('selection-note').textContent=`${matches.length} matching questions; the next set will contain ${number}. Press Generate to use these filters.`;
}
function saveSession(){
  saveStored(SESSION_KEY,{ids:sessionIds,answers});
}
function loadSession(){
  const stored=readStored(SESSION_KEY,null);
  if(!stored || !Array.isArray(stored.ids) || !stored.ids.length || !stored.ids.every(id=>BANK_BY_ID.has(id)))return false;
  sessionIds=stored.ids;
  const data=stored.answers&&typeof stored.answers==='object'?stored.answers:{};
  answers={};
  for(const id of sessionIds){
    const old=data[id];
    const q=BANK_BY_ID.get(id);
    if(old && Number.isInteger(old.selected) && old.selected>=0 && old.selected<q.options.length){
      answers[id]={selected:old.selected,submitted:Boolean(old.submitted),showHint:Boolean(old.showHint)};
    }else{answers[id]={selected:null,submitted:false,showHint:false};}
  }
  return true;
}
function startSession(){
  const {matches,number}=selection();
  sessionIds=shuffle(matches).slice(0,number).map(q=>q.id);
  answers=Object.fromEntries(sessionIds.map(id=>[id,{selected:null,submitted:false,showHint:false}]));
  saveSession();render();
}
function updateStats(){
  const checked=sessionIds.filter(id=>answers[id]?.submitted).length;
  const correct=sessionIds.filter(id=>answers[id]?.submitted && answers[id].selected===BANK_BY_ID.get(id).answer).length;
  document.getElementById('score').textContent=`${correct} / ${checked}`;
  document.getElementById('accuracy').textContent=checked?`${Math.round(correct/checked*100)}%`:'—';
  document.getElementById('session-count').textContent=`${checked} / ${sessionIds.length}`;
  document.getElementById('lifetime').textContent=String(history.attempts);
  const p=document.getElementById('practice-progress');
  p.setAttribute('aria-valuemax',String(sessionIds.length));p.setAttribute('aria-valuenow',String(checked));
  document.getElementById('practice-progress-fill').style.width=`${sessionIds.length?100*checked/sessionIds.length:0}%`;
  const finish=document.getElementById('session-finish');
  const complete=!!sessionIds.length && checked===sessionIds.length;
  finish.hidden=!complete;
  if(complete){
    finish.replaceChildren(e('strong',{},`Session complete: ${correct} / ${checked} correct (${Math.round(correct/checked*100)}%).`),
      e('p',{},'Read the explanations above. Change your filters and choose “Generate question set” to practice again.'));
  }else{finish.replaceChildren();}
}
function checkAnswer(id){
  const s=answers[id],q=BANK_BY_ID.get(id);
  if(s.submitted)return;
  if(s.selected===null){
    const note=document.getElementById(`question-warning-${id}`);
    note.hidden=false;note.textContent='Choose an answer before checking.';
    return;
  }
  s.submitted=true;
  const isCorrect=s.selected===q.answer;
  history.attempts++;
  if(isCorrect)history.correct++;
  history.perQuestion[id]={attempts:(history.perQuestion[id]?.attempts||0)+1,correct:(history.perQuestion[id]?.correct||0)+(isCorrect?1:0)};
  saveStored(HISTORY_KEY,history);saveSession();render();
}
function renderQuestion(q,num){
  const saved=answers[q.id];
  const card=e('article',{className:'question-card',id:`practice-${q.id}`});
  const top=e('div',{className:'question-top'});
  top.append(e('span',{className:'tag'},q.topic),e('span',{className:'tag'},q.level),e('span',{className:'tag'},q.unit),e('span',{className:'question-number'},`Question ${num} of ${sessionIds.length}`));
  card.append(top,e('h2',{className:'question-title'},q.q));
  const choices=e('div',{className:'answers',role:'radiogroup','aria-label':`Answer choices for question ${num}`});
  q.options.forEach((option,i)=>{
    const label=e('label',{className:'answer-option'+(saved.submitted && i===q.answer?' is-correct':'')+(saved.submitted && i===saved.selected && i!==q.answer?' is-incorrect':'')});
    const input=e('input',{type:'radio',name:`answer-${q.id}`,value:i});
    input.checked=saved.selected===i;
    input.disabled=saved.submitted;
    input.addEventListener('change',()=>{saved.selected=i;saveSession();const warning=document.getElementById(`question-warning-${q.id}`);warning.hidden=true;});
    label.append(input,e('span',{},option));choices.append(label);
  });
  card.append(choices);
  const actions=e('div',{className:'question-actions'});
  const check=e('button',{className:'button',type:'button',disabled:saved.submitted},saved.submitted?'Checked ✓':'Check answer');
  check.addEventListener('click',()=>checkAnswer(q.id));
  const hint=e('button',{className:'button button-secondary',type:'button'},saved.showHint?'Hide hint':'Show hint');
  hint.addEventListener('click',()=>{saved.showHint=!saved.showHint;saveSession();render();});
  actions.append(check,hint);card.append(actions);
  const warning=e('div',{id:`question-warning-${q.id}`,className:'feedback incorrect',role:'status'});
  warning.hidden=true;card.append(warning);
  if(saved.showHint)card.append(e('div',{className:'feedback'},`Hint: ${q.hint}`));
  if(saved.submitted){
    const good=saved.selected===q.answer;
    card.append(e('div',{className:`feedback ${good?'correct':'incorrect'}`,role:'status'},
      `${good?'Correct!':'Not quite.'} ${q.explanation} Correct answer: ${q.options[q.answer]}.`));
  }
  return card;
}
function render(){
  list.replaceChildren();
  sessionIds.forEach((id,i)=>list.append(renderQuestion(BANK_BY_ID.get(id),i+1)));
  document.getElementById('question-count-label').textContent=`${sessionIds.length} questions`;
  updateStats();updateSelectionNote();
}
// Update the topic dropdown when subject or foundation/advanced stage changes.
function syncTopics(){
  const subject=document.getElementById('topic-filter').value;
  const stage=document.getElementById('stage-filter').value;
  const select=document.getElementById('unit-filter');
  const old=select.value;
  const topics=[...new Set(questions.filter(q=>(subject==='all'||q.topic===subject)&&(stage==='all'||(stage==='Advanced'?q.stage==='Advanced':q.stage!=='Advanced'))).map(q=>q.unit))].sort();
  select.replaceChildren(e('option',{value:'all'},'All topics'));
  topics.forEach(unit=>select.appendChild(e('option',{value:unit},unit)));
  select.value=topics.includes(old)?old:'all';
}
for(const id of ['topic-filter','stage-filter']) document.getElementById(id).addEventListener('change',()=>{syncTopics();updateSelectionNote();});
for(const id of ['unit-filter','level-filter','count-filter']) document.getElementById(id).addEventListener('change',updateSelectionNote);
document.getElementById('new-session').addEventListener('click',startSession);
document.getElementById('clear-practice').addEventListener('click',()=>{
  if(!confirm('Clear practice history and the current session on this browser?'))return;
  history={attempts:0,correct:0,perQuestion:{}};
  try{localStorage.removeItem(HISTORY_KEY);localStorage.removeItem(SESSION_KEY);}catch(_){/* optional */}
  startSession();
});
loadHistory();
syncTopics();
if(!loadSession())startSession();else render();
