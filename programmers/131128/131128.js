//솔루션을 함수를 복붙해주세요
function solution(X, Y) {
  let answer = '';
  let map = {};
  let mapY = {};

  for (let num of X) {
    map[num] = (map[num] ?? 0) + 1;
  }

  for (let num of Y) {
    mapY[num] = (mapY[num] ?? 0) + 1;
  }

  for (let i = 9; i >= 0; i--) {
    if (map[i] && mapY[i]) answer += String(i).repeat(Math.min(map[i], mapY[i]));
  }

  return answer.length === 0 ? '-1' : answer[0] === '0' ? '0' : answer;
}
