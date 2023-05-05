const solution = require('./87946-2');

let k = 80;
let dungeons = [
    [80, 20],
    [50, 40],
    [30, 10],
];

describe('피로도 시스템', () => {
    it('테스트 1', () => {
        expect(solution(k, dungeons)).toBe(3);
    });
    it('테스트 2', () => {
        expect(
            solution(40, [
                [40, 20],
                [10, 10],
                [10, 10],
                [10, 10],
                [10, 10],
            ]),
        ).toBe(4);
    });
});

// k = 80;
// dungeons = [
//   [80, 20],
//   [60, 20],
//   [30, 10],
//   [10, 10],
//   [10, 10],
//   [10, 10],
// ];

// test("피로도 시스템", () => {
//   expect(solution(k, dungeons)).toBe(5);
// });
