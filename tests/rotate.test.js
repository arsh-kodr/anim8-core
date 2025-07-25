/**
 * @jest-environment jsdom
 */
import * as animateModule from '../src/core/animate.js';
import { rotate } from '../src/effects/rotate.js';

describe("rotate", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="box" style="transform: rotate(0deg);"></div>`;
  });

  afterEach(() => {
    document.body.innerHTML = ''; // Clean up DOM
    jest.restoreAllMocks();       // Reset all spies
  });

  it("should call animate with correct parameters", () => {
    const animateSpy = jest.spyOn(animateModule, "animate");

    rotate("#box");

    expect(animateSpy).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      { rotate: [0, 360] },
      {
        duration: 1000,
        easing: expect.any(Function)
      }
    );
  });

  it("should not throw if element is not found", () => {
    // Clear DOM so #box is not there
    document.body.innerHTML = '';

    expect(() => rotate("#nonexistent")).not.toThrow();
  });

  it("should not call animate if element is not found", () => {
    // Clear DOM to simulate element missing
    document.body.innerHTML = '';

    const animateSpy = jest.spyOn(animateModule, "animate");
    rotate("#doesNotExist");

    expect(animateSpy).not.toHaveBeenCalled();
  });
});
