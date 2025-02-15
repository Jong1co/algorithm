/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/389479
 * 1. 큐를 이용하면 좋지 않을까?
 *
 * 2. 아이디어 활용해보자
 * [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5]
 *
 * m으로 나눠서 필요한 서버 대수 찾기
 * [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 4, 0, 1, 3, 0, 0, 1]
 *
 * 지속시간 k만큼 유지되니, 현재 index로부터 k만큼 검사
 * 1. for문을 돌아
 * 2. 현재 + k 인덱스만큼 - 1
 */

function solution(players, m, k) {
  //필요한 서버 대수만큼만 계산
  const serverCountList = players.map((player) => Math.floor(player / m));

  for (let i = 0; i < serverCountList.length; i++) {
    const server = serverCountList[i];
    if (server === 0) continue;

    // 운영시간 k만큼 유지됨으로 현재 index로부터 k만큼 검사 및 필요 서버 대수 감소시킴
    for (let j = 0; j < k - 1; j++) {
      const index = i + j + 1;
      if (!serverCountList[index]) continue;
      serverCountList[index] = Math.max(serverCountList[index] - server, 0);
    }
  }

  return serverCountList.reduce((sum, cur) => sum + cur, 0);
}
