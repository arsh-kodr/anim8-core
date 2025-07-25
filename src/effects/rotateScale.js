// src/effects/rotateScale.js
import { animate } from '../core/animate.js';
import { easeOutExpo } from '../easings/easeOutExpo.js';

export function rotateScale(selector) {
  const el = document.querySelector(selector);
  if (!el) return;

  animate(el, {
    rotate: [0, 360],
    scale: [0.5, 1],
  }, {
    duration: 1000,
    easing: easeOutExpo,
  });
}
