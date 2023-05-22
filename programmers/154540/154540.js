//솔루션을 함수를 복붙해주세요
//48분
function solution(maps) {
  let answer = [];
  maps = maps.map((map) => map.split(''));

  for (let y = 0; y < maps.length; y++) {
    for (let x = 0; x < maps[0].length; x++) {
      if (maps[y][x] === 'X') continue;
      let count = 0;
      let stack = [[y, x]];

      while (stack.length !== 0) {
        const [y, x] = stack.pop();
        if (maps[y][x] === 'X') continue;
        count += Number(maps[y][x]);
        maps[y][x] = 'X';

        if (maps[y][x - 1] && maps[y][x - 1] !== 'X') stack.push([y, x - 1]);
        if (maps[y][x + 1] && maps[y][x + 1] !== 'X') stack.push([y, x + 1]);
        if (maps[y - 1] && maps[y - 1][x] !== 'X') stack.push([y - 1, x]);
        if (maps[y + 1] && maps[y + 1][x] !== 'X') stack.push([y + 1, x]);
      }
      answer.push(count);
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
