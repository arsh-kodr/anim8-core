/**
 * @jest-environment jsdom
 */
import { scrollReveal } from "../src/effects/scrollReveal";
import * as animateModule from "../src/core/animate";

// Proper mock class
class MockIntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
    this.elements = [];
    MockIntersectionObserver.instances.push(this); // Track instances
  }

  observe = (element) => {
    this.elements.push(element);
  };

  unobserve = jest.fn();

  triggerIntersect(entries) {
    this.callback(entries, this);
  }

  disconnect = jest.fn();
}
MockIntersectionObserver.instances = [];

// Assign mock globally
beforeAll(() => {
  global.IntersectionObserver = MockIntersectionObserver;
});

describe("scrollReveal", () => {
  let animateSpy;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="reveal"></div>
      <div class="reveal"></div>
    `;
    animateSpy = jest.spyOn(animateModule, "animate").mockImplementation(() => {});
    MockIntersectionObserver.instances = []; // Reset before each test
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("initializes styles and observes elements", () => {
    scrollReveal(".reveal");

    const elements = document.querySelectorAll(".reveal");
    elements.forEach(el => {
      expect(el.style.opacity).toBe("0");
      expect(el.style.transform).toBe("translateY(50px)");
    });

    expect(elements.length).toBe(2);
    expect(MockIntersectionObserver.instances[0].elements.length).toBe(2);
  });

  it("animates elements on intersection", () => {
    scrollReveal(".reveal");

    const elements = document.querySelectorAll(".reveal");
    const observerInstance = MockIntersectionObserver.instances[0];

    // Simulate intersection
    observerInstance.triggerIntersect([
      { isIntersecting: true, target: elements[0] },
      { isIntersecting: true, target: elements[1] }
    ]);

    expect(animateSpy).toHaveBeenCalledTimes(2);
    expect(animateSpy).toHaveBeenCalledWith(
      elements[0],
      { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
      expect.objectContaining({ delay: 0 })
    );
    expect(animateSpy).toHaveBeenCalledWith(
      elements[1],
      { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
      expect.objectContaining({ delay: 200 }) // default delayBetween
    );
  });

  it("does not break if selector matches no elements", () => {
    expect(() => scrollReveal(".non-existent")).not.toThrow();
    expect(animateSpy).not.toHaveBeenCalled();
  });
});
