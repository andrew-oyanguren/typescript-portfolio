import { describe, it, expect } from 'vitest';
import { getBallVariant } from './helpers';
import { BALL_POSITION } from 'src/constants';

describe('getBallVariant', () => {
  it('returns color-primary css variable string if argument is top', () => {
    const mockCssString = 'var(--color-primary)';
    const result = getBallVariant(BALL_POSITION.TOP);

    expect(result).toEqual(mockCssString);
  });

  it('returns color-secondary css variable string if argument is middle', () => {
    const mockCssString = 'var(--color-secondary)';
    const result = getBallVariant(BALL_POSITION.MIDDLE);

    expect(result).toEqual(mockCssString);
  });

  it('returns color-dark css variable string if argument is bottom', () => {
    const mockCssString = 'var(--color-dark)';
    const result = getBallVariant(BALL_POSITION.BOTTOM);

    expect(result).toEqual(mockCssString);
  });
});
