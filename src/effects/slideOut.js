export function slideOut(element, options = {}) {
  const {
    direction = "left", // can be "left", "right", "top", "bottom"
    duration = 1000,
    easing = "ease"
  } = options;

  // Ensure element is valid
  if (!element || !(element instanceof HTMLElement)) {
    console.warn("slideOut: Invalid element");
    return;
  }

  element.style.transition = `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`;
  element.style.opacity = "0";

  switch (direction) {
    case "left":
      element.style.transform = "translateX(-100%)";
      break;
    case "right":
      element.style.transform = "translateX(100%)";
      break;
    case "top":
      element.style.transform = "translateY(-100%)";
      break;
    case "bottom":
      element.style.transform = "translateY(100%)";
      break;
    default:
      element.style.transform = "translateX(-100%)";
  }
}
