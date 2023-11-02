import { describe, it, expect } from 'vitest';

import NextIcon from 'src/assets/svgs/chevron-right.svg';
import BackIcon from 'src/assets/svgs/chevron-left.svg';
import { getIconVariant } from './helpers';

describe('getIconVariant', () => {
  it('returns NextIcon variant', () => {
    const result = getIconVariant('Next');

    expect(result).toEqual(NextIcon);
  });

  it('returns backIcon variant', () => {
    const result = getIconVariant('Back');

    expect(result).toEqual(BackIcon);
  });
});
