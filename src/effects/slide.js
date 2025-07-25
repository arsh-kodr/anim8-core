import { animate } from '../core/animate.js';
import { easeOutExpo } from '../easings/easeOutExpo.js';

export function slideIn(selector, direction = 'left', distance = 200) {
  const el = document.querySelector(selector);
  if (!el) return;

  // Setup initial transform
  let transformProp;
  if (direction === 'left') transformProp = ['x', -distance, 0];
  else if (direction === 'right') transformProp = ['x', distance, 0];
  else if (direction === 'top') transformProp = ['y', -distance, 0];
  else if (direction === 'bottom') transformProp = ['y', distance, 0];

  const [axis, from, to] = transformProp;

  animate(el, {
    [axis]: [from, to],
    opacity: [0, 1],
  }, {
    duration: 800,
    easing: easeOutExpo,
  });
}
