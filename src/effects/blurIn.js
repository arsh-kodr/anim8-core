// src/animations/blurIn.js
import { animate } from '../core/animate.js';
import { resolveElement } from '../utils/resolveElement.js';

export function blurIn(target, options = {}) {
  let elements;

  if (typeof target === 'string') {
    elements = document.querySelectorAll(target);
  } else {
    const el = resolveElement(target);
    if (!el) return;
    elements = [el];
  }

  elements.forEach(element => {
    animate(element, {
      opacity: [0, 1],
      filter: ['blur(10px)', 'blur(0)']
    }, {
      duration: options.duration || 600,
      easing: options.easing || 'ease-out',
      delay: options.delay || 0
    });
  });
}
