// src/effects/stagger.js
export function stagger(selector, animationFunc, options = {}) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  elements.forEach((el, index) => {
    setTimeout(() => {
      animationFunc(el, options);
    }, (options.staggerDelay || 100) * index);
  });
}
