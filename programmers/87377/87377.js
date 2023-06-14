//솔루션을 함수를 복붙해주세요
function solution(lines) {
  var map = new Map();
  let smallX = Number.MAX_SAFE_INTEGER;
  let smallY = Number.MAX_SAFE_INTEGER;
  let bigX = Number.MIN_SAFE_INTEGER;
  let bigY = Number.MIN_SAFE_INTEGER;

  for (let line1 of lines) {
    for (let line2 of lines) {
      const [x, y] = getCoordinates(line1, line2);

      if (x !== null) {
        smallX = Math.min(x, smallX);
        smallY = Math.min(y, smallY);
        bigX = Math.max(x, bigX);
        bigY = Math.max(y, bigY);
        map.has(x) ? map.set(x, map.get(x).add(y)) : map.set(x, new Set([y]));
      }
    }
  }

  let answer = Array.from({ length: bigY - smallY + 1 }, (v) => new Array(bigX - smallX + 1).fill('.'));

  let plusX = smallX * -1;
  let plusY = bigY * -1;

  for (let [x, yArr] of map.entries()) {
    for (let y of Array.from(yArr)) {
      answer[Math.abs(y + plusY)][x + plusX] = '*';
    }
  }

  return answer.map((v) => v.join(''));
}

function getCoordinates(line1, line2) {
  let denominator = line1[0] * line2[1] - line1[1] * line2[0];
  let x = (line1[1] * line2[2] - line1[2] * line2[1]) / denominator;
  let y = (line1[2] * line2[0] - line1[0] * line2[2]) / denominator;
  if (line1[0] === line2[0] && line1[1] === line2[1] && line1[2] === line2[2]) return [null, null];
  if (Number.isInteger(x) && Number.isInteger(y)) return [x, y];
  return [null, null];
}
