// src/effects/stagger.js
import { resolveElement } from '../utils/resolveElement.js';

export function stagger(target, animationFunc, options = {}) {
  const elements = resolveElement(target, { all: true });
  if (!elements.length) return;

  elements.forEach((el, index) => {
    setTimeout(() => {
      animationFunc(el, options);
    }, (options.staggerDelay || 100) * index);
  });
}
