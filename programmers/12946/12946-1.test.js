const solution = require('./12946-1');

describe('', () => {
    it('테스트 1', () => {
        expect(solution(2)).toBe([
            [1, 2],
            [1, 3],
            [2, 3],
        ]);
    });
    it('테스트 2', () => {
        expect(solution(3)).toBe([
            [1, 3],
            [1, 2],
            [3, 1],
            [1, 3],
            [2, 1],
            [2, 3],
            [1, 3],
        ]);
    });
});
