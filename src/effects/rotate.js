// src/effects/rotate.js

import { animate } from '../core/animate.js';
import { easeOutExpo } from '../easings/easeOutExpo.js';

export function rotate(selector) {
  const el = document.querySelector(selector);
  if (!el) return; // ✅ This line ensures animate won't be called if el is null

  animate(el, {
    rotate: [0, 360],
  }, {
    duration: 1000,
    easing: easeOutExpo,
  });
}
