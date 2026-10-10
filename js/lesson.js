/* MathBridge 2.0 — lesson reader, explanations, self-assessment and local progress. */
'use strict';
(() => {
  const lessons = window.MATHBRIDGE_LESSONS || [];
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const lesson = lessons.find(item => item.id === id);
  const layout = document.querySelector('.lesson-layout');
  const notFound = document.getElementById('lesson-not-found');
  const STORAGE_KEY = 'mathbridge-lesson-completion-v2';
  if (!lesson) {
    if(layout) layout.hidden = true;
    document.querySelector('.lesson-banner').hidden = true;
    notFound.hidden = false;
    return;
  }
  function getCompleted() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return new Set(Array.isArray(value) ? value.filter(x=>typeof x === 'string') : []);
    } catch { return new Set(); }
  }
  function saveCompleted(ids) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids])); return true; }
    catch { return false; }
  }
  const $ = id => document.getElementById(id);
  document.title = `${lesson.title} | MathBridge Learn`;
  $('breadcrumb-lesson').textContent = lesson.title;
  $('lesson-kicker').textContent = lesson.subject + ' / Guided lesson';
  $('lesson-title').textContent = lesson.title;
  $('lesson-summary').textContent = lesson.summary;
  $('lesson-metadata').textContent = `${lesson.minutes} min read  ·  ${lesson.level}  ·  3 checkpoint questions`;
  $('sidebar-course').textContent = lesson.subject;
  const objectives = $('lesson-objectives');
  lesson.objectives.forEach(objective => {
    const li = document.createElement('li'); li.textContent = objective; objectives.append(li);
  });
  // concept and example are hand-authored, static HTML in js/lessons-data.js.
  // Never insert user input using innerHTML.
  $('lesson-concept').innerHTML = lesson.concept;
  $('lesson-example').innerHTML = lesson.example;
  $('lesson-mistake').textContent = lesson.mistake;
  $('lesson-takeaway').textContent = lesson.takeaway;
  $('lesson-lab-link').href = lesson.lab || './math-lab.html';
  $('lesson-lab-link').textContent = (lesson.labLabel || 'Explore Math Lab') + ' →';

  const sameCourse = lessons.filter(l => l.subject === lesson.subject);
  const sidebar = $('lesson-sidebar-list');
  function updateProgress() {
    const completed = getCompleted();
    const progress = sameCourse.filter(l => completed.has(l.id)).length;
    $('sidebar-progress-label').textContent = `${progress} / ${sameCourse.length} lessons completed`;
    $('sidebar-progress-bar').style.width = `${100 * progress / sameCourse.length}%`;
    [...sidebar.querySelectorAll('a')].forEach(link => {
      const completedId=link.dataset.id;
      link.querySelector('.sidebar-check').textContent = completed.has(completedId) ? '✓' : '';
    });
  }
  sameCourse.forEach((item,index) => {
    const a = document.createElement('a');
    a.href = `./lesson.html?id=${encodeURIComponent(item.id)}`;
    a.dataset.id = item.id;
    if(item.id===lesson.id) a.setAttribute('aria-current','page');
    const number = document.createElement('span'); number.className='sidebar-lesson-number'; number.textContent=String(index+1).padStart(2,'0');
    const title = document.createElement('span'); title.className='sidebar-lesson-title'; title.textContent=item.title;
    const check = document.createElement('span'); check.className='sidebar-check';
    a.append(number,title,check); sidebar.append(a);
  });
  updateProgress();
  const globalIndex = lessons.findIndex(l=>l.id===id);
  const previous = lessons[globalIndex-1]; const next=lessons[globalIndex+1];
  const prevLink=$('lesson-prev'),nextLink=$('lesson-next');
  prevLink.href = previous ? `./lesson.html?id=${encodeURIComponent(previous.id)}` : './learn.html';
  prevLink.textContent=previous ? `← Previous: ${previous.title}` : '← All lessons';
  nextLink.href=next ? `./lesson.html?id=${encodeURIComponent(next.id)}` : './learn.html';
  nextLink.textContent=next ? `Next: ${next.title} →` : 'Back to courses →';

  const questions=$('lesson-quiz-questions');
  lesson.quiz.forEach((q,index)=>{
    const fieldset=document.createElement('fieldset'); fieldset.className='checkpoint-question';
    const legend=document.createElement('legend');legend.textContent=`${index+1}. ${q.prompt}`;fieldset.append(legend);
    const choices=document.createElement('div');choices.className='checkpoint-options';
    q.options.forEach((option,choiceIndex)=>{
      const label=document.createElement('label');label.className='checkpoint-option';
      const radio=document.createElement('input');radio.type='radio';radio.name=`question-${index}`;radio.value=String(choiceIndex);
      const text=document.createElement('span');text.textContent=option;
      label.append(radio,text);choices.append(label);
    });
    const details=document.createElement('details');details.className='checkpoint-hint';
    const summary=document.createElement('summary');summary.textContent='Need a hint?';
    const hint=document.createElement('p');hint.textContent=q.hint;
    details.append(summary,hint);
    const feedback=document.createElement('div'); feedback.className='checkpoint-feedback';
    feedback.hidden=true; feedback.setAttribute('aria-live','polite');
    fieldset.append(choices, details,feedback); questions.append(fieldset);
  });
  function score(event) {
    event.preventDefault();
    let right=0, attempted=0;
    lesson.quiz.forEach((q,index)=>{
      const fieldset=questions.children[index];
      const selected=fieldset.querySelector('input:checked');
      const feedback=fieldset.querySelector('.checkpoint-feedback');
      const isRight=!!selected && Number(selected.value)===q.correct;
      if(selected) attempted++;
      if(isRight) right++;
      feedback.hidden=false;
      feedback.className=`checkpoint-feedback ${isRight ? 'correct' : 'incorrect'}`;
      feedback.textContent=(!selected?'Not answered. ':isRight?'Correct! ':'Review: ') + q.explanation;
    });
    const summary=$('quiz-summary'); summary.hidden=false;
    const passed=attempted===lesson.quiz.length && right>=2;
    if(passed) {
      const completed=getCompleted();completed.add(lesson.id);
      const saved=saveCompleted(completed);
      summary.className='quiz-summary success';
      summary.textContent=`Great work — ${right}/3 correct. Lesson completed! ${saved ? 'Your progress is saved in this browser.' : 'Your browser could not save your progress.'}`;
      updateProgress();
    } else {
      summary.className='quiz-summary review';
      summary.textContent=`${right}/3 correct, ${attempted}/3 answered. Answer all three and get at least two correct to complete this lesson. Review the explanations and try again.`;
    }
    $('quiz-retry').hidden=false;
    summary.scrollIntoView({block:'nearest',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  }
  $('lesson-quiz').addEventListener('submit',score);
  $('quiz-retry').addEventListener('click',()=>{
    $('lesson-quiz').reset();
    [...questions.querySelectorAll('.checkpoint-feedback')].forEach(feedback=>feedback.hidden=true);
    $('quiz-summary').hidden=true;
    $('quiz-retry').hidden=true;
    $('lesson-quiz').querySelector('input')?.focus();
  });
})();
