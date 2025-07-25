// src/effects/typewriterPulse.js

export function typewriterPulse(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  const {
    delay = 100,
    pulseScale = 1.3,
    pulseDuration = 150,
    letterDelay = 60,
  } = options;

  elements.forEach(el => {
    const text = el.textContent.trim();
    el.textContent = ""; // Clear original text
    el.style.display = "inline-block";

    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.opacity = 0;
      span.style.transition = `transform ${pulseDuration}ms ease, opacity 300ms ease`;
      el.appendChild(span);

      setTimeout(() => {
        span.style.opacity = 1;
        span.style.transform = `scale(${pulseScale})`;
        setTimeout(() => {
          span.style.transform = "scale(1)";
        }, pulseDuration);
      }, delay + i * letterDelay);
    });
  });
}
