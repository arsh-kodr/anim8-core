// src/effects/slide.js
import { animate } from '../core/animate.js';
import { easeOutExpo } from '../easings/easeOutExpo.js';

export function slideIn(target, direction = 'left', distance = 200) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;

  let transformProp;
  if (direction === 'left') transformProp = ['translateX', -distance, 0];
  else if (direction === 'right') transformProp = ['translateX', distance, 0];
  else if (direction === 'top') transformProp = ['translateY', -distance, 0];
  else if (direction === 'bottom') transformProp = ['translateY', distance, 0];

  const [axis, from, to] = transformProp;

  animate(el, {
    [axis]: [from, to],
    opacity: [0, 1],
  }, {
    duration: 800,
    easing: easeOutExpo,
  });
}
