const lengthOfLongestSubstring = require('./longest-substring-without-repeating-characters');

describe('', () => {
    it('테스트 1', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    });
    it('테스트 2', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    });
    it('테스트 3', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    });
    it('테스트 4', () => {
        expect(lengthOfLongestSubstring(' ')).toBe(1);
    });
    it('테스트 5', () => {
        expect(lengthOfLongestSubstring('aab')).toBe(2);
    });
});
