/**
 * @jest-environment jsdom
 */
import { slideIn } from "../src/effects/slide";
import * as animateModule from "../src/core/animate";

describe("slideIn", () => {
  let animateSpy;

  beforeEach(() => {
    document.body.innerHTML = `<div id="test"></div>`;
    animateSpy = jest.spyOn(animateModule, "animate").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("animates from left by default", () => {
    slideIn("#test");

    expect(animateSpy).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      { x: [-200, 0], opacity: [0, 1] },
      expect.objectContaining({
        duration: 800,
        easing: expect.any(Function)
      })
    );
  });

  it("animates from right", () => {
    slideIn("#test", "right");

    expect(animateSpy).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      { x: [200, 0], opacity: [0, 1] },
      expect.any(Object)
    );
  });

  it("animates from top", () => {
    slideIn("#test", "top");

    expect(animateSpy).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      { y: [-200, 0], opacity: [0, 1] },
      expect.any(Object)
    );
  });

  it("animates from bottom with custom distance", () => {
    slideIn("#test", "bottom", 300);

    expect(animateSpy).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      { y: [300, 0], opacity: [0, 1] },
      expect.any(Object)
    );
  });

  it("does nothing if element not found", () => {
    slideIn("#does-not-exist");

    expect(animateSpy).not.toHaveBeenCalled();
  });
});
