// HAELON website interactions

// 1) 상단 내비게이션 — 스크롤 시 테두리, 모바일 메뉴 토글
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));
document.querySelector('.nav__toggle').addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav__menu a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// 2) 실시간 시계 (HUD)
const clock = document.getElementById('clock');
function tick() {
  const t = new Date().toLocaleTimeString('ko-KR', { hour12: false, timeZone: 'Asia/Seoul' });
  clock.textContent = `${t} KST`;
}
tick(); setInterval(tick, 1000);

// 3) 스크롤 등장 애니메이션
const revealTargets = document.querySelectorAll(
  '.section__title, .lead, .feature, .case, .problem, .user, .obs__item, .drone, .flow__step, .device, .comp, .insight, .stat, .brief__item, .interview, .zone, .level, .swot > div'
);
revealTargets.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
revealTargets.forEach(el => io.observe(el));

// 4) 숫자 카운트업 (Background 섹션)
const counters = document.querySelectorAll('[data-count]');
const countIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseFloat(el.dataset.count);
    const decimals = (el.dataset.count.split('.')[1] || '').length;
    const start = performance.now();
    const dur = 1400;
    (function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(step);
    })(start);
    countIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => countIO.observe(c));

// 5) 대응 흐름 — 단계가 순서대로 켜지는 효과
const steps = document.querySelectorAll('.flow__step');
const flowIO = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) return;
  steps.forEach((s, i) => setTimeout(() => s.classList.add('lit'), i * 350));
  flowIO.disconnect();
}, { threshold: 0.4 });
if (steps.length) flowIO.observe(document.querySelector('.flow'));

// 6) 현재 보고 있는 섹션을 메뉴에 표시
const links = [...document.querySelectorAll('.nav__menu a')];
const sectionIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
links.forEach(l => {
  const sec = document.querySelector(l.getAttribute('href'));
  if (sec) sectionIO.observe(sec);
});
