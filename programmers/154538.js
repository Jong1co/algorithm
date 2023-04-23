/**
 * 숫자 변환하기
 */
function solution(x, y, n) {
  if (x === y) return 0;
  let minCount = Number.MAX_SAFE_INTEGER;

  const dfs = (count, y) => {
    if (y === x) {
      if (count < minCount) minCount = count;
      return;
    }
    count++;

    if (count > minCount) return;
    if (y % 3 === 0) dfs(count, y / 3);
    if (y % 2 === 0) dfs(count, y / 2);
    if (y >= x + n) dfs(count, y - n);
  };
  dfs(0, y);

  return minCount === Number.MAX_SAFE_INTEGER ? -1 : minCount;
}
