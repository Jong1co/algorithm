//솔루션을 함수를 복붙해주세요
/**
 *  n x m 맵임
 *  무조건 (0, 0)에서 시작
 *  지나간 곳은 0으로 처리하면서 이동하면 될듯?
 *
 *  move라는 함수가 필요하고, 이 move는 근처에 1이 있는지 찾고 있으면 현재 값을 이동시키고, 없으면 재귀 종료
 *
 *
 *
 *
 */
function solution(maps) {
  const maxX = maps[0].length - 1;
  const maxY = maps.length - 1;
  const queue = [[0, 0, 1]];
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();
    if (x === maxX && y === maxY) return count;

    for (let d of direction) {
      const newX = x + d[0];
      const newY = y + d[1];
      if (maps[newY] && maps[newY][newX] && maps[newY][newX] === 1) {
        maps[newY][newX] = 0;
        queue.push([newX, newY, count + 1]);
      }
    }
  }
  return -1;
}

module.exports = solution;
// function solution(maps) {
//   const maxY = maps.length - 1;
//   const maxX = maps[0].length - 1;
//   const answer = 0;
//   function move(currentXY, maps, count) {
//     const [y, x] = currentXY;
//     if (y === maxY && x === maxX) {
//       answer = count;
//       return;
//     }

//     const movedXY = [([y + 1, x], [y - 1, x], [y, x + 1], [y, x - 1])];
//     maps[y][x] = 0;
//     movedXY.forEach((c) => {
//       move(c, [...maps], count++);
//     });
//   }
//   move([0, 0], [...maps], 0);
//   return answer;
// }
