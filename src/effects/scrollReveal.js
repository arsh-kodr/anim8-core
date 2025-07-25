export function scrollReveal(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  const {
    once = true,
    delayBetween = 0,
    duration = 800,
    distance = 50,
    reverseEffect = "slideOut", // ← new option (name of reverse anim)
  } = options;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      const el = entry.target;

      if (entry.isIntersecting) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
        el.style.transition = `all ${duration}ms ease ${index * delayBetween}ms`;
      } else if (!once) {
        el.style.opacity = 0;
        el.style.transition = `all ${duration}ms ease`;
        if (reverseEffect === "slideOut") {
          el.style.transform = `translateY(${distance}px)`;
        }
      }
    });
  });

  elements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = `translateY(${distance}px)`;
    observer.observe(el);
  });
}
