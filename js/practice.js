'use strict';
const questions = [
  {id:1,topic:'Number Theory',level:'Easy',q:'What is gcd(84, 30)?',options:['3','6','12','14'],answer:1,hint:'Apply the division algorithm: 84 = 2 × 30 + 24.',explanation:'84 = 2×30 + 24; 30 = 1×24 + 6; 24 = 4×6 + 0. The last nonzero remainder is 6.'},
  {id:2,topic:'Number Theory',level:'Medium',q:'What is the multiplicative inverse of 3 modulo 11?',options:['2','4','7','8'],answer:1,hint:'Find x such that 3x ≡ 1 (mod 11).',explanation:'3 × 4 = 12 ≡ 1 (mod 11), so the inverse is 4.'},
  {id:3,topic:'Number Theory',level:'Hard',q:'Which pair (x, y) solves 35x + 22y = 1?',options:['(5, −8)','(−5, 8)','(2, −3)','(−3, 5)'],answer:1,hint:'Use the extended Euclidean algorithm, or substitute each pair.',explanation:'35(−5) + 22(8) = −175 + 176 = 1. Bézout’s identity confirms an integer solution exists because gcd(35, 22) = 1.'},
  {id:4,topic:'Number Theory',level:'Easy',q:'What is the remainder when 29 is divided by 6?',options:['1','3','5','6'],answer:2,hint:'Write 29 = 6q + r where 0 ≤ r < 6.',explanation:'29 = 6 × 4 + 5, so 29 ≡ 5 (mod 6).'},
  {id:5,topic:'Probability',level:'Easy',q:'A fair coin is flipped twice independently. What is P(two heads)?',options:['1/2','1/4','3/4','1/8'],answer:1,hint:'Each toss has probability 1/2 of being heads.',explanation:'The two independent events both have probability 1/2, so P(HH) = (1/2)(1/2) = 1/4.'},
  {id:6,topic:'Probability',level:'Medium',q:'For X ~ Binomial(4, 0.5), what is P(X = 2)?',options:['1/4','1/2','3/8','1/8'],answer:2,hint:'Use C(4, 2) × (1/2)^4.',explanation:'There are C(4,2) = 6 ways to choose the 2 successes. Thus P(X=2) = 6/16 = 3/8.'},
  {id:7,topic:'Probability',level:'Medium',q:'If P(A ∩ B) = 0.15 and P(B) = 0.30, what is P(A | B)?',options:['0.15','0.30','0.45','0.50'],answer:3,hint:'Use the definition P(A | B) = P(A ∩ B) / P(B).',explanation:'P(A | B) = 0.15 / 0.30 = 0.50.'},
  {id:8,topic:'Probability',level:'Easy',q:'If X ~ Binomial(10, 0.3), what is E[X]?',options:['0.3','3','7','10'],answer:1,hint:'The binomial mean is n × p.',explanation:'E[X] = np = 10 × 0.3 = 3.'},
  {id:9,topic:'Probability',level:'Hard',q:'If X ~ Poisson(2), what is P(X = 0)?',options:['e⁻²','2e⁻²','1 − e⁻²','1/2'],answer:0,hint:'Use P(X=k) = e^(−λ) λ^k / k!.',explanation:'With λ = 2 and k = 0, P(X=0) = e^(−2) × 2⁰ / 0! = e⁻².'},
  {id:10,topic:'Probability',level:'Medium',q:'For three independent fair coin flips, what is P(at least one head)?',options:['1/8','3/8','1/2','7/8'],answer:3,hint:'Use the complement: P(at least one head) = 1 − P(no heads).',explanation:'P(no heads) = (1/2)³ = 1/8, so P(at least one head) = 1 − 1/8 = 7/8.'}
];
const state = new Map();
const list=document.getElementById('practice-list');
function e(tag,attrs={},text=''){
  const node=document.createElement(tag);
  for(const [key,value] of Object.entries(attrs)) {
    if(key==='className') node.className=value;
    else node.setAttribute(key,String(value));
  }
  if(text) node.textContent=text;
  return node;
}
function updateScore(){
  const attempted=[...state.entries()].filter(([,s])=>s.submitted);
  const correct=attempted.filter(([id,s])=>s.selected===questions.find(q=>q.id===id).answer).length;
  document.getElementById('score').textContent=`${correct} answered correctly / ${attempted.length} attempted`;
}
function render() {
  list.replaceChildren();
  const topic=document.getElementById('topic-filter').value;
  const level=document.getElementById('level-filter').value;
  const visible=questions.filter(q=>(topic==='all'||q.topic===topic)&&(level==='all'||q.level===level));
  if(!visible.length){ list.append(e('div',{className:'empty-state'},'No questions match those filters.')); return; }
  for(const q of visible){
    const saved=state.get(q.id)||{selected:null,submitted:false,showHint:false};
    const card=e('article',{className:'question-card'});
    const meta=e('div',{className:'question-top'});
    meta.append(e('span',{className:'tag'},q.topic),e('span',{className:'tag'},q.level));
    card.append(meta,e('h2',{},`${q.id}. ${q.q}`));
    const answers=e('div',{className:'answers',role:'radiogroup','aria-label':`Answers for question ${q.id}`});
    q.options.forEach((text,index)=>{
      const label=e('label',{className:'answer-option'});
      const radio=e('input',{type:'radio',name:`q-${q.id}`,value:index});
      radio.checked=saved.selected===index;
      radio.disabled=saved.submitted;
      radio.addEventListener('change',()=>{state.set(q.id,{...saved,selected:index});});
      label.append(radio, e('span',{},text));
      answers.append(label);
    });
    card.append(answers);
    const actions=e('div',{className:'question-actions'});
    const check=e('button',{type:'button',className:'button'},'Check answer');
    check.disabled=saved.submitted;
    check.addEventListener('click',()=>{
      const selected=card.querySelector('input[type="radio"]:checked');
      if(!selected){
        const feedback=e('div',{className:'feedback incorrect',role:'status'},'Choose an answer first.');
        card.querySelector('.feedback')?.remove();card.append(feedback);return;
      }
      state.set(q.id,{...saved,selected:Number(selected.value),submitted:true});
      render();
    });
    const hint=e('button',{type:'button',className:'button button-secondary'},saved.showHint?'Hide hint':'Show hint');
    hint.addEventListener('click',()=>{const current=state.get(q.id)||saved;state.set(q.id,{...current,showHint:!current.showHint});render();});
    actions.append(check,hint);card.append(actions);
    if(saved.showHint)card.append(e('div',{className:'feedback'},`Hint: ${q.hint}`));
    if(saved.submitted){
      const correct=saved.selected===q.answer;
      card.append(e('div',{className:`feedback ${correct?'correct':'incorrect'}`,role:'status'},`${correct?'Correct!':'Not quite.'} ${q.explanation} (Correct answer: ${q.options[q.answer]})`));
    }
    list.append(card);
  }
  updateScore();
}
document.getElementById('topic-filter').addEventListener('change',render);
document.getElementById('level-filter').addEventListener('change',render);
render();
