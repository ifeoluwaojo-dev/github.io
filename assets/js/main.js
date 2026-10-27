/* Accessible interactions for the independent research portfolio. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');

  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  function setMenu(open) {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.inert = !open;
  }
  if (menuButton && mobileMenu) {
    setMenu(false);
    menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuButton.focus();
      }
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.065, rootMargin: '0px 0px 40px 0px' });
    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add('in-view'));
  }

  const yearElements = document.querySelectorAll('[data-year]');
  yearElements.forEach(el => el.textContent = String(new Date().getFullYear()));

  const quiz = document.querySelector('#evaluation-demo');
  if (!quiz) return;
  const questions = [
    {
      category: '01 — REASONING',
      prompt: 'All roses are flowers. Does that mean all flowers are roses?',
      A: 'No. The reverse doesn’t necessarily follow.',
      B: 'Yes, because roses are flowers.',
      correct: 'A',
      why: 'Being a type of flower does not make every flower a rose. The reverse of a statement does not automatically follow.'
    },
    {
      category: '02 — FOLLOWING INSTRUCTIONS',
      prompt: 'Reply in exactly three words to acknowledge a request.',
      A: 'I acknowledge your request.',
      B: 'Request duly acknowledged',
      correct: 'B',
      why: 'Option B uses exactly three words. The instruction is part of what makes an answer correct.'
    },
    {
      category: '03 — FACTUAL ACCURACY',
      prompt: 'What is the chemical symbol for sodium?',
      A: 'Na',
      B: 'So',
      correct: 'A',
      why: 'The correct chemical symbol for sodium is Na, not So. Factual correctness comes before confident wording.'
    }
  ];
  const progress = quiz.querySelector('#quiz-progress');
  const category = quiz.querySelector('#quiz-category');
  const prompt = quiz.querySelector('#quiz-prompt');
  const textA = quiz.querySelector('#answer-a');
  const textB = quiz.querySelector('#answer-b');
  const options = Array.from(quiz.querySelectorAll('.answer-option'));
  const feedback = quiz.querySelector('#quiz-feedback');
  const next = quiz.querySelector('#quiz-next');
  let currentIndex = 0;
  let selected = null;

  function draw() {
    const question = questions[currentIndex];
    progress.textContent = `CASE ${String(currentIndex + 1).padStart(2, '0')} / ${String(questions.length).padStart(2, '0')}`;
    category.textContent = question.category;
    prompt.textContent = question.prompt;
    textA.textContent = question.A;
    textB.textContent = question.B;
    feedback.textContent = '';
    feedback.className = 'quiz-feedback';
    selected = null;
    options.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('is-correct', 'is-incorrect');
      btn.removeAttribute('aria-pressed');
    });
    next.disabled = true;
    next.innerHTML = `${currentIndex === questions.length - 1 ? 'Start again' : 'Next case'} <span aria-hidden="true">${currentIndex === questions.length - 1 ? '↻' : '→'}</span>`;
  }
  options.forEach(button => {
    button.addEventListener('click', () => {
      if (selected !== null) return;
      selected = button.dataset.option;
      const q = questions[currentIndex];
      const isCorrect = selected === q.correct;
      options.forEach(option => {
        option.disabled = true;
        option.setAttribute('aria-pressed', String(option.dataset.option === selected));
        if (option.dataset.option === q.correct) option.classList.add('is-correct');
        else if (option.dataset.option === selected) option.classList.add('is-incorrect');
      });
      feedback.textContent = `${isCorrect ? 'Nice judgment.' : `Not quite — ${q.correct} is stronger.`} ${q.why}`;
      feedback.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
      next.disabled = false;
    });
  });
  next.addEventListener('click', () => {
    if (next.disabled) return;
    currentIndex = (currentIndex + 1) % questions.length;
    draw();
  });
  draw();
})();
