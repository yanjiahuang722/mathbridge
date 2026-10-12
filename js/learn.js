/* MathBridge 2.0 — course catalog. No server, account, or personal data collection. */
'use strict';
(() => {
  const lessons = window.MATHBRIDGE_LESSONS || [];
  const catalog = document.getElementById('lesson-catalog');
  if (!catalog) return;
  const search = document.getElementById('lesson-search');
  const chips = [...document.querySelectorAll('.filter-chip')];
  const levels = [...document.querySelectorAll('.level-chip')];
  let stage = 'All';
  const empty = document.getElementById('catalog-empty');
  const count = document.getElementById('progress-caption');
  const fill = document.getElementById('progress-fill');
  const STORAGE_KEY = 'mathbridge-lesson-completion-v2';
  function getCompleted() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(raw) ? raw.filter(v => typeof v === 'string') : [];
    } catch { return []; }
  }
  let subject = location.hash === '#number-theory' ? 'Number Theory' :
                location.hash === '#probability' ? 'Probability' : 'All';
  function setFilters() {
    chips.forEach(chip => {
      const selected = chip.dataset.subject === subject;
      chip.classList.toggle('active', selected);
      chip.setAttribute('aria-pressed', String(selected));
    });
  }
  function render() {
    catalog.replaceChildren();
    const completed = new Set(getCompleted());
    const totalDone = lessons.filter(lesson => completed.has(lesson.id)).length;
    count.textContent = `${totalDone} / ${lessons.length} completed`;
    fill.style.width = `${lessons.length ? 100 * totalDone / lessons.length : 0}%`;
    const q = search.value.trim().toLocaleLowerCase();
    let totalShown = 0;
    ['Number Theory', 'Probability'].forEach((course, courseIndex) => {
      if (subject !== 'All' && subject !== course) return;
      const subset = lessons.filter(lesson => lesson.subject === course &&
        (stage==='All' || (stage==='Advanced' ? lesson.level==='Advanced' : lesson.level!=='Advanced')) &&
        [lesson.title, lesson.summary, lesson.level, ...lesson.objectives].join(' ').toLocaleLowerCase().includes(q));
      if (!subset.length) return;
      totalShown += subset.length;
      const section = document.createElement('section');
      section.className = 'course-section';
      section.id = course === 'Number Theory' ? 'number-theory' : 'probability';
      const header = document.createElement('div'); header.className = 'course-section-header';
      const nameBox = document.createElement('div');
      const eyebrow = document.createElement('div'); eyebrow.className = 'eyebrow';
      eyebrow.textContent = `COURSE 0${courseIndex+1} / ${subset.length} lessons`;
      const title = document.createElement('h3'); title.textContent = course;
      const description = document.createElement('p');
      description.textContent = course === 'Number Theory' ?
        'Reason about integers, divisibility, congruences and equations.' :
        'Make sense of uncertainty, models, random variables and sampling.';
      nameBox.append(eyebrow,title,description);
      const completedInCourse = lessons.filter(l=>l.subject===course && completed.has(l.id)).length;
      const courseTotal = lessons.filter(l=>l.subject===course).length;
      const progress = document.createElement('span'); progress.className = 'course-done';
      progress.textContent = `${completedInCourse} / ${courseTotal} finished`;
      header.append(nameBox,progress);
      const grid = document.createElement('div'); grid.className = 'lesson-grid';
      subset.forEach(lesson => {
        const link = document.createElement('a');
        link.href = `./lesson.html?id=${encodeURIComponent(lesson.id)}`;
        link.className = 'lesson-card';
        const top = document.createElement('div'); top.className = 'lesson-card-top';
        const label = document.createElement('span'); label.className = 'lesson-subject-label'; label.textContent = lesson.level;
        const status = document.createElement('span');
        status.className = completed.has(lesson.id) ? 'lesson-status completed' : 'lesson-status';
        status.textContent = completed.has(lesson.id) ? '✓ Completed' : `${lesson.minutes} min`;
        top.append(label,status);
        const h = document.createElement('h4'); h.textContent = lesson.title;
        const p = document.createElement('p'); p.textContent = lesson.summary;
        const foot = document.createElement('div'); foot.className = 'lesson-card-footer';
        const prompt = document.createElement('span'); prompt.textContent='Worked example + 3 questions';
        const arrow = document.createElement('span'); arrow.textContent='Explore →';
        foot.append(prompt, arrow);
        // Each of the 55 guided lessons has its own math-specific SVG illustration.
        const illustration = document.createElement('div');
        illustration.className = 'lesson-illustration';
        const img = document.createElement('img');
        img.src = `./assets/lesson-art/${encodeURIComponent(lesson.id)}.svg`;
        img.alt = '';
        img.loading = 'lazy';
        img.decoding = 'async';
        illustration.append(img);
        link.append(top,illustration,h,p,foot); grid.append(link);
      });
      section.append(header,grid); catalog.append(section);
    });
    empty.hidden = totalShown > 0;
  }
  chips.forEach(chip => chip.addEventListener('click', () => {
    subject = chip.dataset.subject;
    setFilters();render();
    if (subject === 'All') history.replaceState(null, '', location.pathname);
    else history.replaceState(null, '', `#${subject==='Number Theory'?'number-theory':'probability'}`);
  }));
  levels.forEach(button => button.addEventListener('click', () => {
    stage = button.dataset.stage;
    levels.forEach(chip=>{const active=chip.dataset.stage===stage; chip.classList.toggle('active',active); chip.setAttribute('aria-pressed',String(active));});
    render();
  }));
  search.addEventListener('input', render);
  window.addEventListener('pageshow', render);
  window.addEventListener('hashchange', () => {
    subject = location.hash === '#number-theory' ? 'Number Theory' : location.hash === '#probability' ? 'Probability' : 'All';
    setFilters(); render();
  });
  setFilters();render();
})();
