//솔루션을 함수를 복붙해주세요

function controller(direction, coordinate, park) {
  const [y, x] = coordinate;
  let maxY = park.length - 1;
  let maxX = park[0].length - 1;

  switch (direction) {
    case 'E':
      if (x === maxX || park[y][x + 1] === 'X') return coordinate;
      return [y, x + 1];
    case 'W':
      if (x === 0 || park[y][x - 1] === 'X') return coordinate;
      return [y, x - 1];
    case 'S':
      if (y === maxY || park[y + 1][x] === 'X') return coordinate;
      return [y + 1, x];
    case 'N':
      if (y === 0 || park[y - 1][x] === 'X') return coordinate;
      return [y - 1, x];
  }
}

function solution(park, routes) {
  var answer = [];
  let width = park[0].length;
  let idx = park.join('').indexOf('S');

  let startPoint = [Math.floor(idx / width), idx % width];

  routes.forEach((route) => {
    const [direction, space] = route.split(' ');
    for (let i = 0; i < space; i++) {
      startPoint = controller(direction, startPoint, park);
      console.log(startPoint);
    }
  });

  return startPoint;
}
