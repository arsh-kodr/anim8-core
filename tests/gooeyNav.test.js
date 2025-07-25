/**
 * @jest-environment jsdom
 */
import { gooeyNav } from "../src/effects/gooeyNav";

describe("gooeyNav", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav id="main-nav">
        <div class="nav-item" id="item1">Item 1</div>
        <div class="nav-item" id="item2">Item 2</div>
      </nav>
    `;
  });

  it("should add 'active-gooey' class on mouseenter and remove on mouseleave", () => {
    gooeyNav("#main-nav");

    const item1 = document.getElementById("item1");
    const mouseEnterEvent = new Event("mouseenter");
    const mouseLeaveEvent = new Event("mouseleave");

    // Simulate mouseenter
    item1.dispatchEvent(mouseEnterEvent);
    expect(item1.classList.contains("active-gooey")).toBe(true);

    // Simulate mouseleave
    item1.dispatchEvent(mouseLeaveEvent);
    expect(item1.classList.contains("active-gooey")).toBe(false);
  });

  it("should not throw error if selector does not match", () => {
    expect(() => gooeyNav("#non-existent")).not.toThrow();
  });
});
