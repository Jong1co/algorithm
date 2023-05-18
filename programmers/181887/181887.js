//솔루션을 함수를 복붙해주세요

function solution(num_list) {
  let answer = num_list.reduce(
    (accr, curr, i) => {
      i % 2 === 0 ? (accr.odd += curr) : (accr.even += curr);
      return accr;
    },
    { odd: 0, even: 0 },
  );

  return Math.max(answer.odd, answer.even);
}
