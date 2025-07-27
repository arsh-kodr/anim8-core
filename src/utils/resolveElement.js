// src/utils/resolveElement.js

export function resolveElement(target, { all = false } = {}) {
  if (typeof target === 'string') {
    const els = all ? document.querySelectorAll(target) : document.querySelector(target);
    if (!els || (all && els.length === 0)) {
      console.warn(`resolveElement: No element(s) found for selector "${target}"`);
      return all ? [] : null;
    }
    return all ? Array.from(els) : els;
  }

  if (target instanceof HTMLElement) {
    return all ? [target] : target;
  }

  console.warn('resolveElement: Invalid target provided', target);
  return all ? [] : null;
}
