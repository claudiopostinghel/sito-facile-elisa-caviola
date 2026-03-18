import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const ease = 'power3.out';

// ── HERO (plays on load) ────────────────────────────
const hero = document.querySelector('.hero');
if (hero) {
  const eyebrow    = hero.querySelector('.eyebrow');
  const h1         = hero.querySelector('h1');
  const sub        = hero.querySelector('.subtitle');
  const ctaPrimary = hero.querySelector('.btn-primary');
  const ctaOutline = hero.querySelector('.btn-outline');
  const heroImage  = hero.querySelector('.hero-image');

  // Initial states
  if (eyebrow)    gsap.set(eyebrow, { opacity: 0, y: 24 });
  if (ctaPrimary) { ctaPrimary.style.transition = 'none'; gsap.set(ctaPrimary, { opacity: 0, y: 24 }); }
  if (ctaOutline) { ctaOutline.style.transition = 'none'; gsap.set(ctaOutline, { opacity: 0, y: 24 }); }
  if (heroImage)  gsap.set(heroImage, { opacity: 0, x: -40 });

  // SplitText
  const split = h1 ? new SplitText(h1, { type: 'chars' }) : null;
  if (split) gsap.set(split.chars, { opacity: 0, y: 24 });
  const splitSub = sub ? new SplitText(sub, { type: 'words' }) : null;
  if (splitSub) gsap.set(splitSub.words, { opacity: 0, y: 24 });

  // Timeline
  const tl = gsap.timeline({ defaults: { ease } });
  if (heroImage)  tl.to(heroImage, { opacity: 1, x: 0, duration: 0.8 }, 0);
  if (eyebrow)    tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0.2);
  if (split)      tl.to(split.chars, { opacity: 1, y: 0, stagger: 0.02, duration: 0.5 }, 0.3);
  if (splitSub)   tl.to(splitSub.words, { opacity: 1, y: 0, stagger: 0.04, duration: 0.5 }, '-=0.4');
  if (ctaPrimary) tl.to(ctaPrimary, { opacity: 1, y: 0, duration: 0.6, onComplete() { ctaPrimary.style.transition = ''; } }, '-=0.3');
  if (ctaOutline) tl.to(ctaOutline, { opacity: 1, y: 0, duration: 0.6, onComplete() { ctaOutline.style.transition = ''; } }, '-=0.4');
}

// ── SCROLL — fade-in from below per .reveal block ───
document.querySelectorAll('.reveal').forEach(el => {
  if (el.closest('[data-stagger]') && el !== el.closest('[data-stagger]')) return;
  gsap.set(el, { opacity: 0, y: 48 });
  gsap.to(el, {
    opacity: 1, y: 0, duration: 1, ease,
    scrollTrigger: { trigger: el, start: 'top 85%' }
  });
});

// ── PORTFOLIO — clipPath wipe reveal on images ──────
document.querySelectorAll('.img-wrap, .video-wrap').forEach(el => {
  gsap.set(el, { clipPath: 'inset(0 0 100% 0)', opacity: 0 });
  gsap.to(el, {
    clipPath: 'inset(0 0 0% 0)', opacity: 1,
    duration: 1.2, ease: 'power4.out',
    scrollTrigger: { trigger: el, start: 'top 78%' }
  });
});

// ── PORTFOLIO — pull-quote typing effect ────────────
document.querySelectorAll('.pull-quote p').forEach(el => {
  const text = el.textContent;
  el.textContent = '';
  el.style.minHeight = '3.6em'; // prevent layout shift

  // Blinking cursor
  const cursor = document.createElement('span');
  cursor.textContent = '|';
  cursor.style.cssText = 'animation:blink .6s step-end infinite;font-weight:300;color:currentColor;opacity:0.6';
  el.appendChild(cursor);

  // Inject @keyframes once
  if (!document.getElementById('typing-keyframes')) {
    const style = document.createElement('style');
    style.id = 'typing-keyframes';
    style.textContent = '@keyframes blink{50%{opacity:0}}';
    document.head.appendChild(style);
  }

  let charIndex = 0;
  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter() {
      const type = () => {
        if (charIndex < text.length) {
          el.insertBefore(document.createTextNode(text[charIndex]), cursor);
          charIndex++;
          gsap.delayedCall(0.03 + Math.random() * 0.04, type);
        } else {
          // Remove cursor after typing finishes
          gsap.to(cursor, { opacity: 0, duration: 0.4, delay: 1.2, onComplete() { cursor.remove(); } });
        }
      };
      type();
    }
  });
});

// ── SERVIZI — hover tilt 3D ─────────────────────────
document.querySelectorAll('.service-card').forEach(card => {
  card.style.transformStyle = 'preserve-3d';
  card.style.willChange = 'transform';

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotateY: x * 10,
      rotateX: y * -10,
      duration: 0.4, ease: 'power2.out'
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power2.out' });
  });
});

// ── STAGGER — pseudo-random delays ──────────────────
const delays = [0, 0.25, 0.12, 0.4, 0.18, 0.35, 0.08, 0.3];
document.querySelectorAll('[data-stagger]').forEach(container => {
  Array.from(container.children).forEach((el, i) => {
    gsap.set(el, { opacity: 0, y: 48 });
    gsap.to(el, {
      opacity: 1, y: 0, duration: 1, ease,
      delay: delays[i % delays.length],
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });
});

// Refresh ScrollTrigger after images/fonts finish loading
window.addEventListener('load', () => ScrollTrigger.refresh());
