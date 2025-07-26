// tests/stagger.test.js
import { stagger } from '../src/effects/stagger.js';

describe('stagger()', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    document.body.innerHTML = '';
  });

  it('applies staggered animations to multiple elements', () => {
    document.body.innerHTML = `
      <div class="stagger-box"></div>
      <div class="stagger-box"></div>
      <div class="stagger-box"></div>
    `;

    const effectMock = jest.fn();
    stagger('.stagger-box', effectMock, { staggerDelay: 100 });

    jest.runAllTimers(); // Simulate all setTimeout calls

    expect(effectMock).toHaveBeenCalledTimes(3);
  });

  it('handles single element case', () => {
    document.body.innerHTML = `<div class="stagger-box"></div>`;

    const effectMock = jest.fn();
    stagger('.stagger-box', effectMock, { staggerDelay: 100 });

    jest.runAllTimers();

    expect(effectMock).toHaveBeenCalledTimes(1);
  });

  it('does nothing if no element matches', () => {
    const effectMock = jest.fn();
    stagger('.not-found', effectMock, { staggerDelay: 100 });

    jest.runAllTimers();

    expect(effectMock).not.toHaveBeenCalled();
  });
});
