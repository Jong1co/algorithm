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
  let width = park[0].length;
  let idx = park.join('').indexOf('S');
  let startPoint = [Math.floor(idx / width), idx % width];

  routes.forEach((route) => {
    const [direction, space] = route.split(' ');
    let init = startPoint;
    for (let i = 0; i < Number(space); i++) {
      startPoint = controller(direction, startPoint, park);
    }
    if (Math.abs(init[0] - startPoint[0]) !== Number(space) && Math.abs(init[1] - startPoint[1]) !== Number(space)) {
      startPoint = init;
    }
  });

  return startPoint;
}
