const solution = require('./palindrome-number');

describe('', () => {
    it('테스트 1', () => {
        expect(solution(121)).toBe(true);
    });
    it('테스트 2', () => {
        expect(solution(-121)).toBe(false);
    });
    it('테스트 3', () => {
        expect(solution(10)).toBe(false);
    });
});
