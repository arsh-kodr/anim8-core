// src/core/animate.js
export function animate(el, keyframes, options = {}) {
  const {
    duration = 1000,
    easing = (t) => t, // linear by default
    delay = 0,
  } = options;

  const start = performance.now();

  const initialStyles = {};
  const transformKeys = ["translateX", "translateY", "scale", "rotate"];
  const transformParts = [];

  for (const key in keyframes) {
    initialStyles[key] = keyframes[key][0];
  }

  function updateStyles(progress) {
    const transforms = [];

    for (const key in keyframes) {
      const [from, to] = keyframes[key];
      const eased = easing(progress);
      const current = from + (to - from) * eased;

      if (transformKeys.includes(key)) {
        if (key === "translateX" || key === "translateY") {
          transforms.push(`${key}(${current}px)`);
        } else if (key === "scale") {
          transforms.push(`${key}(${current})`);
        } else if (key === "rotate") {
          transforms.push(`${key}(${current}deg)`);
        }
      } else {
        el.style[key] =
          typeof current === "number" ? current.toString() : current;
      }
    }

    if (transforms.length > 0) {
      el.style.transform = transforms.join(" ");
    }
  }

  function loop(now) {
    const elapsed = now - start;

    if (elapsed < delay) {
      requestAnimationFrame(loop);
      return;
    }

    const t = Math.min((elapsed - delay) / duration, 1);
    updateStyles(t);

    if (t < 1) {
      requestAnimationFrame(loop);
    }
  }

  requestAnimationFrame(loop);
}
