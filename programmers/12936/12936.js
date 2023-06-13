//솔루션을 함수를 복붙해주세요
function solution(n, k) {
  let arr = new Array(n).fill(0).map((v, i) => i + 1);
  var answer = [];

  let factorial = [1, 1];
  for (let i = 2; i <= 20; i++) {
    factorial.push(factorial[factorial.length - 1] * i);
  }

  k -= 1;

  while (k > 0) {
    const result = Math.floor(k / factorial[n - 1]);
    answer.push(arr[result]);
    arr = arr.filter((v, i) => i !== result);
    n--;
    k %= factorial[n];
  }

  return answer.concat(arr);
}
