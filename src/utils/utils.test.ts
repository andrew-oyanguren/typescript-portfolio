import { describe, it, expect } from 'vitest';
import { renderErrorMessage } from './utils';

describe('renderErrorMessage', () => {
  it('returns fallback message if route error in undefined', () => {
    const result = renderErrorMessage(undefined);

    expect(result).toEqual('something went wrong!');
  });
});
