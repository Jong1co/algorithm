const solution = require('./17679');

describe('', () => {
  it('테스트 1', () => {
    expect(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'])).toBe(14);
  });
  it('테스트 2', () => {
    expect(solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])).toBe(15);
  });
});
