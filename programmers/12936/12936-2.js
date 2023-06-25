//솔루션을 함수를 복붙해주세요
function solution(n, k) {
  const people = Array.from({ length: n }, (v, i) => i + 1);
  let idx = 0;
  const answer = [];

  let factorial = people.reduce((a, b) => a * b, 1);
  k -= 1;
  while (k > 0) {
    factorial = factorial / (n - idx);

    const index = Math.floor(k / factorial);
    answer.push(people[index]);
    people.splice(index, 1);

    k %= factorial;
    idx++;
  }

  return answer.concat(people);
}
