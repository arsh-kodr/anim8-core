export const scrollReveal = (elementOrSelector, options = {}) => {
  const elements =
    typeof elementOrSelector === "string"
      ? document.querySelectorAll(elementOrSelector)
      : [elementOrSelector];

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-scrollReveal");

        if (options.once !== false) {
          observerInstance.unobserve(entry.target);
        }
      }
    });
  });

  elements.forEach((el) => {
    observer.observe(el);
  });
};
