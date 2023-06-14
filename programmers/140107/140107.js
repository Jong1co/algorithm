//솔루션을 함수를 복붙해주세요

function solution(k, d) {
  var answer = 0;

  for (let i = 0; i <= d / k; i++) {
    let x = k * i;
    let numberOfDot = Math.floor(getMaxY(x, d) / k) + 1;
    answer += numberOfDot;
  }

  return answer;
}

function getMaxY(x, d) {
  let squareY = Math.sqrt(d ** 2 - x ** 2);
  return Math.floor(squareY);
}
