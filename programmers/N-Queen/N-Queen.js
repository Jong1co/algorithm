//솔루션을 함수를 복붙해주세요

function check(queen, row) {
  for (let i = 0; i < row; i++) {
    //같은 컬럼이거나, 대각선이면 false
    if (queen[row] === queen[i] || Math.abs(row - i) === Math.abs(queen[row] - queen[i])) {
      return false;
    }
  }
  return true;
}

function search(queen, row) {
  const n = queen.length;
  let count = 0;
  if (row === n) return 1;

  for (let col = 0; col < n; col++) {
    queen[row] = col; // [row, col]에는 값이 존재한다는 의미 즉, 퀸을 놓았다는 의미
    if (check(queen, row)) count += search(queen, row + 1);
  }

  return count;
}

function solution(n) {
  return search(
    Array.from({ length: n }, () => 0),
    0,
  );
}
