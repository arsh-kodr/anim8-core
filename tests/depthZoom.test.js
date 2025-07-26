import { depthZoom } from '../src/effects/depthZoom.js';
import * as animateModule from '../src/core/animate.js';

describe('depthZoom()', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="zoom"></div>`;
    jest.spyOn(animateModule, 'animate').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls animate when DOM element is passed', () => {
    const el = document.getElementById('zoom');
    depthZoom(el);
    expect(animateModule.animate).toHaveBeenCalled();
  });

  it('calls animate when selector string is passed', () => {
    depthZoom("#zoom");
    expect(animateModule.animate).toHaveBeenCalled();
  });
});
