// src/effects/slideOut.js
import { resolveElement } from '../utils/resolveElement.js';

export function slideOut(target, options = {}) {
  const {
    direction = 'left',   // 'left', 'right', 'top', 'bottom'
    duration = 1000,
    easing = 'ease',
  } = options;

  const el = resolveElement(target);
  if (!el) return;

  el.style.transition = `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`;
  el.style.opacity = '0';

  const transformMap = {
    left: 'translateX(-100%)',
    right: 'translateX(100%)',
    top: 'translateY(-100%)',
    bottom: 'translateY(100%)',
  };

  el.style.transform = transformMap[direction] || transformMap.left;
}
