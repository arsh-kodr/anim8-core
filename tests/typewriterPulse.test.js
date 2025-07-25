/**
 * @jest-environment jsdom
 */
import { typewriterPulse } from "../src/effects/typewriterPulse";

describe("typewriterPulse", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    document.body.innerHTML = `<div id="demo">Hello</div>`;
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it("wraps each character in a span and animates with timeout", () => {
    const el = document.querySelector("#demo");
    typewriterPulse("#demo", { delay: 100, letterDelay: 60, pulseScale: 1.3, pulseDuration: 150 });

    const spans = el.querySelectorAll("span");
    expect(spans.length).toBe(5); // "Hello" => 5 spans

    // Initial: all spans should have opacity 0
    spans.forEach((span, index) => {
      expect(span.textContent).toBe("Hello"[index]);
      expect(span.style.opacity).toBe("0");
    });

    // Simulate time for first character reveal
    jest.advanceTimersByTime(100); // initial delay
    expect(spans[0].style.opacity).toBe("1");
    expect(spans[0].style.transform).toBe("scale(1.3)");

    // Simulate pulse reset
    jest.advanceTimersByTime(150);
    expect(spans[0].style.transform).toBe("scale(1)");

    // Simulate the rest of the letters
    jest.advanceTimersByTime(60); // next letter
    expect(spans[1].style.opacity).toBe("1");

    jest.advanceTimersByTime(500); // reveal remaining letters
    spans.forEach(span => {
      expect(span.style.opacity).toBe("1");
    });
  });

  it("handles multiple elements", () => {
    document.body.innerHTML += `<div class="multi">Hi</div><div class="multi">Yo</div>`;
    typewriterPulse(".multi");

    const allSpans = document.querySelectorAll(".multi span");
    expect(allSpans.length).toBe(4); // Hi (2) + Yo (2)
  });

  it("does nothing if selector doesn't match", () => {
    expect(() => typewriterPulse("#doesNotExist")).not.toThrow();
  });
});
