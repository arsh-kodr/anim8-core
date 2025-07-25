// tests/effects/slide.test.js
import { slideIn } from '../../src/effects/slide.js';
import * as animateModule from '../../src/core/animate.js';

describe('slideIn()', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="test"></div>`;
    jest.spyOn(animateModule, 'animate').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls animate when DOM element is passed', () => {
    const el = document.getElementById('test');
    slideIn(el);
    expect(animateModule.animate).toHaveBeenCalled();
  });

  it('calls animate when selector string is passed', () => {
    slideIn("#test");
    expect(animateModule.animate).toHaveBeenCalled();
  });
});
