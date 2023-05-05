const testForm = (filename) => {
    return `const solution = require('./${filename}');

describe('', () => {
    it('테스트 1', () => {
        expect(solution()).toBe();
    });
    it('테스트 2', () => {
        expect(
            solution(),
        ).toBe();
    });
});`;
};

module.exports.testForm = testForm;
