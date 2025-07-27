// src/effects/slide.js
import { animate } from '../core/animate.js';
import { easeOutExpo } from '../easings/easeOutExpo.js';
import { resolveElement } from '../utils/resolveElement.js';

export function slideIn(target, direction = 'left', distance = 200) {
  const el = resolveElement(target);
  if (!el) return;

  let axis, from;

  switch (direction) {
    case 'right':
      axis = 'translateX';
      from = distance;
      break;
    case 'top':
      axis = 'translateY';
      from = -distance;
      break;
    case 'bottom':
      axis = 'translateY';
      from = distance;
      break;
    case 'left':
    default:
      axis = 'translateX';
      from = -distance;
  }

  animate(el, {
    [axis]: [from, 0],
    opacity: [0, 1],
  }, {
    duration: 800,
    easing: easeOutExpo,
  });
}
