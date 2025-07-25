// src/effects/scrollReveal.js
import { animate } from '../core/animate.js';
import { easeOutCubic } from '../easings/easeOutCubic.js';

export function scrollReveal(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const {
    duration = 800,
    easing = easeOutCubic,
    delayBetween = 200, // Add delay between items
    distance = 50
  } = options;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animate(el, {
          opacity: [0, 1],
          transform: [`translateY(${distance}px)`, 'translateY(0px)']
        }, {
          duration,
          easing,
          delay: index * delayBetween // Sequence based on index
        });
        observer.unobserve(el); // Only once
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = `translateY(${distance}px)`;
    observer.observe(el);
  });
}
