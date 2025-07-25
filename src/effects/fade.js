import { animate } from '../core/animate.js';
import { easeOutExpo } from '../easings/easeOutExpo.js';

export function fadeIn(selector) {
  const el = document.querySelector(selector);
  if (!el) return;

  animate(el, { opacity: [0, 1] }, {
    duration: 800,
    easing: easeOutExpo
  });
}
