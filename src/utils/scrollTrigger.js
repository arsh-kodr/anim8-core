// src/utils/scrollTrigger.js
export function scrollTrigger(selector, callback, options = {}) {
  const elements = typeof selector === "string" ? document.querySelectorAll(selector) : [selector];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target); // Remove if repeat needed
      }
    });
  }, options);

  elements.forEach(el => {
    observer.observe(el);
  });
}
