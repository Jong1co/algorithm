//솔루션을 함수를 복붙해주세요

/**
 * B로 전부 다 더해
 * 그리고 B를 하나씩 빼가고 A를 하나씩 더해가면서
 * B가 안 잡힐 때까지 A를 증가시키는 거야
 *
 * B가 안 잡히는 A의 최솟값을 찾는 거지
 * A는 큰 수로 sorting하고 찾으면 되지 않을까? ( 그리드 )
 *
 * 1-3개에 추가적인 힌트가 있는 것 같아ㅏ.
 */

function solution(info, n, m) {
  let answer = 0;
  let sumB = info.reduce((sum, [a, b]) => sum + b, 0);

  if (sumB < m) return answer;

  info.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : b[0] - a[0]));
  let index = info.findIndex(([a, b]) => a < n);

  if (index === -1) return -1;

  while (true) {
    if (sumB < m) return answer;
    if (answer >= n) return -1;

    const [a, b] = info[index];
    sumB -= b;
    answer += a;

    if (answer >= n) return -1;

    const nextIndex = index + 1;

    if (!info[nextIndex]) return answer;

    const [nextA, nextB] = info[nextIndex];
    if (answer + nextA > n) {
      const jumpedIndex = info.findIndex(([a, b]) => answer + a < n);
      if (jumpedIndex === -1) return answer;
      index = jumpedIndex;
      // 여기는 이제 jump해야지 -> 이거보다 작은 index를 찾아서
    } else {
      index = nextIndex;
    }
  }
}
