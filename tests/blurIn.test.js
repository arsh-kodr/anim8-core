import { blurIn } from '../src/effects/blurIn.js';
import * as animateModule from '../src/core/animate.js';

describe('blurIn()', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="blur-target"></div>`;
    jest.spyOn(animateModule, 'animate').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls animate when DOM element is passed', () => {
    const el = document.getElementById('blur-target');
    blurIn(el);
    expect(animateModule.animate).toHaveBeenCalled();
  });

  it('calls animate when selector string is passed', () => {
    blurIn("#blur-target");
    expect(animateModule.animate).toHaveBeenCalled();
  });
});
