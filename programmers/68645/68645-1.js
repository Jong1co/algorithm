//솔루션을 함수를 복붙해주세요

function solution(n) {
  let arr = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
  let x = -1;
  let y = 0;
  let count = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) {
      x++;
      count++;
      arr[x][y] = count;
    }
    for (let i = 0; i < n - 1; i++) {
      y++;
      count++;
      arr[x][y] = count;
    }
    for (let i = 0; i < n - 2; i++) {
      x--;
      y--;
      count++;
      arr[x][y] = count;
    }
    n -= 3;
  }
  return arr.flat();
}
