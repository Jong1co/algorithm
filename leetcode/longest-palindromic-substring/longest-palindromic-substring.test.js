const longestPalindrome = require('./longest-palindromic-substring');

describe('', () => {
    it('테스트 1', () => {
        expect(longestPalindrome('ac')).toBe('a');
    });
    it('테스트 2', () => {
        expect(longestPalindrome('babad')).toBe('bab');
    });
});
