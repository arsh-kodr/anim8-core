/**
 * @jest-environment jsdom
 */
import { rotateScale } from '../src/effects/rotateScale';
import * as animateModule from '../src/core/animate';

describe('rotateScale()', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="combo"></div>`;
  });

  test('should call animate with rotate and scale', () => {
    const animateSpy = jest.spyOn(animateModule, 'animate');

    rotateScale('#combo');

    expect(animateSpy).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      expect.objectContaining({
        rotate: expect.any(Array),
        scale: expect.any(Array),
      }),
      expect.any(Object)
    );
  });
});
