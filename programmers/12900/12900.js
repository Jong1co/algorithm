//솔루션을 함수를 복붙해주세요
/**
 * 가로가 2 세로가 1인 직사각형으로 채우는 방법
 *
 * 가로로 놓는 법 : 가로로 무조건 두개 놔야 함
 * 세로로 놓는 법 : 세로로는 아무렇게나 세울 수 있음
 *
 * n = 4일 때,
 *
 * [1, 2, 1]
 * [2, 2]
 * [2, 1, 1]
 * [1, 1, 1, 1]
 * [1, 1, 2]
 *
 * 그럼 1과 2를 사용해서 4를 만드는 법
 *
 * 조건 1. array의 sum이 4여야 함
 * 조건 2. 1과 2만을 사용해야 함
 *
 * n = 1일 때
 * 답 1
 *
 * n= 2일 때
 * 답 2
 *
 * n= 3일 때
 *
 * 답 3
 *
 * 피보나치네
 *
 * 왜냐하면 f(n) = 이전꺼
 */

function solution(n) {
  const dp = [1, 2];

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1_000_000_007;
  }

  return dp.at(-1);
}

module.exports = solution;