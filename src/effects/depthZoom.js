import { animate } from '../core/animate.js';

export function depthZoom(el, options = {}) {
  const elements = typeof el === 'string' ? document.querySelectorAll(el) : [el];

  elements.forEach(element => {
    animate(element, {
      opacity: [0, 1],
      transform: ["scale(0.8) translateZ(-200px)", "scale(1) translateZ(0)"]
    }, {
      duration: options.duration || 700,
      easing: options.easing || 'ease-out'
    });
  });
}