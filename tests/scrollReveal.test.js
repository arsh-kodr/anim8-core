/**
 * @jest-environment jsdom
 */

import { scrollReveal } from "../src/effects/scrollReveal";

describe("scrollReveal()", () => {
  document.body.innerHTML = '<div id="test"></div>';
  const mockObserver = {
    observe: jest.fn(),
    unobserve: jest.fn(),
  };

  beforeEach(() => {
    global.IntersectionObserver = jest.fn(() => mockObserver);
    jest.clearAllMocks();
  });

  it("calls animate when element becomes visible", () => {
    const element = document.getElementById("test");
    scrollReveal(element);

    const entry = {
      isIntersecting: true,
      target: element,
    };
    const observerCallback = global.IntersectionObserver.mock.calls[0][0];
    observerCallback([entry], mockObserver);

    expect(element.classList.contains("animate-scrollReveal")).toBe(true);
    expect(mockObserver.unobserve).toHaveBeenCalledWith(element);
  });

  it("works with selector string input", () => {
    scrollReveal("#test");

    const entry = {
      isIntersecting: true,
      target: document.getElementById("test"),
    };
    const observerCallback = global.IntersectionObserver.mock.calls[0][0];
    observerCallback([entry], mockObserver);

    expect(entry.target.classList.contains("animate-scrollReveal")).toBe(true);
  });

  it("does not call unobserve when once is false", () => {
    const element = document.getElementById("test");
    scrollReveal(element, { once: false });

    const entry = {
      isIntersecting: true,
      target: element,
    };
    const observerCallback = global.IntersectionObserver.mock.calls[0][0];
    observerCallback([entry], mockObserver);

    expect(mockObserver.unobserve).not.toHaveBeenCalled();
  });
});
