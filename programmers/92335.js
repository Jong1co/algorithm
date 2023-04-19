/**
 * k진수에서 소수 개수 구하기
 */
function solution(n, k) {
  let answer = 0;
  let prime = "";

  for (let char of n.toString(k)) {
    if (char === "0") {
      if (isPrimeNumber(Number(prime))) answer++;
      prime = "";
      continue;
    }
    prime += char;
  }

  if (isPrimeNumber(Number(prime))) answer++;

  return answer;
}

function isPrimeNumber(number) {
  if (number === 1 || !number) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
