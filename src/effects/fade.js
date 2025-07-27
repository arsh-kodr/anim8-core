// src/animations/fadeIn.js
import { animate } from '../core/animate.js';
import { easeOutExpo } from '../easings/easeOutExpo.js';
import { resolveElement } from '../utils/resolveElement.js';

export function fadeIn(target, options = {}) {
  const el = resolveElement(target);
  if (!el) return;

  animate(el, { opacity: [0, 1] }, {
    duration: options.duration || 800,
    easing: options.easing || easeOutExpo,
    delay: options.delay || 0
  });
}
