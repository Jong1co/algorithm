//솔루션을 함수를 복붙해주세요

// 48분
function solution(maps) {
  let reg = /\d/;
  let answer = [];
  let startPoint = [];
  let queue = [];
  maps = maps.map((map) => map.split(''));

  while (
    maps
      .map((map) => map.join(''))
      .join('')
      .match(reg)
  ) {
    for (let y = 0; y < maps.length; y++) {
      const x = maps[y].findIndex((map) => map.match(reg));
      if (x !== -1) {
        startPoint = [y, x];
        break;
      }
    }
    queue.push(startPoint);

    let count = 0;
    while (queue.length !== 0) {
      const [y, x] = queue.pop();
      if (maps[y][x] === 'X' || maps[y] === undefined || maps[y][x] === undefined) continue;
      count += Number(maps[y][x]);
      maps[y][x] = 'X';

      if (maps[y][x - 1] && maps[y][x - 1] !== 'X') queue.push([y, x - 1]);
      if (maps[y][x + 1] && maps[y][x + 1] !== 'X') queue.push([y, x + 1]);
      if (maps[y - 1] && maps[y - 1][x] !== 'X') queue.push([y - 1, x]);
      if (maps[y + 1] && maps[y + 1][x] !== 'X') queue.push([y + 1, x]);
    }
    answer.push(count);
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
