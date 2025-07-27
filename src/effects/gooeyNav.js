// src/animations/gooeyNav.js
import { resolveElement } from '../utils/resolveElement.js';

export function gooeyNav(target) {
  const nav = resolveElement(target);
  if (!nav) return;

  const items = nav.querySelectorAll('.nav-item');
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('active-gooey');
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('active-gooey');
    });
  });
}
