const solution = require('./60058');

describe('', () => {
    it('테스트 1', () => {
        const answer = solution('(()())()');
        console.log(answer);
        expect(answer).toBe('(()())()');
    });
    // it('테스트 2', () => {
    //     const answer = solution('()))((()');
    //     console.log(answer);
    //     expect(answer).toBe('()(())()');
    // });
    // it('테스트 3', () => {
    //     const answer = solution(')(');
    //     console.log(answer);
    //     expect(answer).toBe('()');
    // });
});
