// src/effects/scrollReveal.js

import { resolveElement } from '../utils/resolveElement.js';

export const scrollReveal = (elementOrSelector, options = {}) => {
  const elements = resolveElement(elementOrSelector, { all: true });
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-scrollReveal");

        if (options.once !== false) {
          observerInstance.unobserve(entry.target);
        }
      }
    });
  });

  elements.forEach((el) => {
    observer.observe(el);
  });
};
