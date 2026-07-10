// Header scroll style
const header = document.getElementById('header');
const onScroll = () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 4px 16px rgba(58,47,34,0.08)' : 'none';
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav-open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach((item) => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach((openItem) => openItem.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// Scroll reveal (progressive enhancement — elements stay visible if this never runs)
if ('IntersectionObserver' in window) {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => {
    el.classList.add('reveal-armed');
    observer.observe(el);
  });
}
