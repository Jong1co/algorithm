// 첫번째 풀이
function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i < discount.length - 9; i++) {
    let hash = want.reduce(
      (prev, curr, i) => ({ ...prev, [curr]: number[i] }),
      {}
    );
    for (let j = i; j < i + 10; j++) {
      if (hash[discount[j]])
        hash = { ...hash, [discount[j]]: hash[discount[j]] - 1 };
    }
    if (Object.values(hash).find((value) => value > 0) === undefined) answer++;
  }

  return answer;
}

/**
 * 성능 => 좋지 않음
 * 테스트 1 〉	통과 (23.08ms, 37.2MB)
 * 테스트 2 〉	통과 (254.73ms, 40.1MB)
 * 테스트 3 〉	통과 (28.45ms, 38.6MB)
 * 테스트 4 〉	통과 (32.88ms, 39.5MB)
 * 테스트 5 〉	통과 (59.93ms, 40.1MB)
 * 테스트 6 〉	통과 (19.71ms, 37.2MB)
 * 테스트 7 〉	통과 (46.36ms, 37.8MB)
 * 테스트 8 〉	통과 (219.58ms, 60.6MB)
 * 테스트 9 〉	통과 (48.36ms, 43.5MB)
 * 테스트 10 〉	통과 (72.79ms, 40.6MB)
 * 테스트 11 〉	통과 (23.18ms, 39.5MB)
 * 테스트 12 〉	통과 (0.11ms, 33.4MB)
 */

//두번째 풀이
function solution2(want, number, discount) {
  let answer = 0;
  let hash = want.reduce(
    (prev, curr, i) => ({ ...prev, [curr]: number[i] }),
    {}
  );
  for (let i = 0; i < discount.length - 9; i++) {
    let flag = true;
    for (let w of want) {
      if (
        discount.slice(i, i + 10).filter((value) => value === w).length <
        hash[w]
      ) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }

  return answer;
}

/**
 * 테스트 1 〉	통과 (7.87ms, 37.3MB)
 * 테스트 2 〉	통과 (25.90ms, 40.1MB)
 * 테스트 3 〉	통과 (8.79ms, 37.2MB)
 * 테스트 4 〉	통과 (15.81ms, 38.3MB)
 * 테스트 5 〉	통과 (16.27ms, 38.9MB)
 * 테스트 6 〉	통과 (7.50ms, 37MB)
 * 테스트 7 〉	통과 (10.98ms, 37.7MB)
 * 테스트 8 〉	통과 (24.86ms, 41.9MB)
 * 테스트 9 〉	통과 (8.64ms, 37.6MB)
 * 테스트 10 〉	통과 (15.47ms, 39.5MB)
 * 테스트 11 〉	통과 (8.52ms, 37.1MB)
 * 테스트 12 〉	통과 (0.10ms, 33.4MB)
 */
