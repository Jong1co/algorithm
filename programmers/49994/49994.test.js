const solution = require('./49994');

describe('', () => {
    it('테스트 1', () => {
        expect(solution('ULURRDLLU')).toBe(7);
    });
    it('테스트 2', () => {
        expect(solution('LULLLLLLU')).toBe(7);
    });
});
