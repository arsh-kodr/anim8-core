/**
 * @jest-environment jsdom
 */

import { fadeIn } from "../src/effects/fade";

beforeAll(() => {
  jest.useFakeTimers();
  global.requestAnimationFrame = (cb) => setTimeout(() => cb(performance.now()), 16);
});

afterAll(() => {
  jest.useRealTimers();
});

describe("fadeIn animation", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="box" style="opacity: 0;"></div>`;
  });

  it("should animate opacity from 0 to 1", () => {
    const el = document.querySelector("#box");

    expect(el).not.toBeNull();
    expect(el.style.opacity).toBe("0");

    fadeIn("#box");

    // Initially should still be 0
    expect(el.style.opacity).toBe("0");

    // Advance all timers by total duration (800ms + buffer)
    jest.advanceTimersByTime(850);

    // Since animate() sets el.style.opacity directly
    expect(Number(el.style.opacity)).toBeGreaterThan(0.9); // final opacity is 1
  });

  it("should not crash if element is not found", () => {
    expect(() => fadeIn("#missing")).not.toThrow();
  });
});
