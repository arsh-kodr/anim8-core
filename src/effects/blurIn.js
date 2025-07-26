import { animate } from '../core/animate.js';

export function blurIn(el, options = {}) {
  const elements = typeof el === 'string' ? document.querySelectorAll(el) : [el];

  elements.forEach(element => {
    animate(element, {
      opacity: [0, 1],
      filter: ["blur(10px)", "blur(0)"]
    }, {
      duration: options.duration || 600,
      easing: options.easing || 'ease-out'
    });
  });
}

