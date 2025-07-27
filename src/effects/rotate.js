// src/effects/rotate.js

import { animate } from '../core/animate.js';
import { easeOutExpo } from '../easings/easeOutExpo.js';
import { resolveElement } from '../utils/resolveElement.js';

export function rotate(target) {
  const el = resolveElement(target);
  if (!el) return;

  animate(el, {
    rotate: [0, 360],
  }, {
    duration: 1000,
    easing: easeOutExpo,
  });
}
