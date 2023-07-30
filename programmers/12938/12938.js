/**
1. 원소의 합이 S가 되는 수의 집합 =>
2. 곱이 가장 큰 경우 => n개의 숫자의 차이가 가장 작은 경우
*/

function solution(n, s) {
  if (n > s) return [-1];

  const value = Math.floor(s / n);
  const answer = new Array(n).fill(value);
  const remain = s % n;

  for (let i = 0; i < remain; i++) {
    answer[i]++;
  }

  return answer.sort((a, b) => a - b);
}
