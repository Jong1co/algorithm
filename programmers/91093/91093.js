//솔루션을 함수를 복붙해주세요
function solution(n, times) {
  times = times.sort((a, b) => a - b);

  let left = 1;
  let right = times[times.length - 1] * n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = times.reduce((prev, time) => prev + Math.floor(mid / time), 0);

    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
