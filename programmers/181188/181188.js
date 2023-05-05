// 미사일을 최소로 사용
// 폭격 미사일은
// A => x축에 평행 : 개구간을 나타내는 정수 쌍 (s, e) 형태 =>  s < x < e
// B => y축에 평행 : 단, (s, e)로 표현되는 폭격 미사일은 s 와 e에서 발사하는 요격 미사일로 요격할 수 없음 -> 그 사이에 위치해야 하는구나.

function solution(targets) {
  targets.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let count = 1;
  let max = targets[0][1];
  targets.forEach(([s, e]) => {
    if (max <= s) {
      max = e;
      count++;
    }
  });

  return count;
}

let targets = [
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
];

const case1 = solution(targets);

console.log(case1);
