// src/animations/depthZoom.js
import { animate } from '../core/animate.js';
import { resolveElement } from '../utils/resolveElement.js';

export function depthZoom(target, options = {}) {
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
      transform: ["scale(0.8) translateZ(-200px)", "scale(1) translateZ(0)"]
    }, {
      duration: options.duration || 700,
      easing: options.easing || 'ease-out',
      delay: options.delay || 0
    });
  });
}
