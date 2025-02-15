const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

var islandPerimeter = function (grid) {
  let count = 0;
  const queue = [];

  const visited = grid.map((v) => v.map((l) => !l));

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x]) {
        queue.push([y, x]);

        while (queue.length > 0) {
          const [y, x] = queue.shift();
          grid[y][x] = 0;
          let innerCount = 0;

          for (let [sy, sx] of direction) {
            if (visited[y + sy] && visited[y + sy][x + sx] === true) continue;

            if (grid[y + sy] && grid[y + sy][x + sx]) {
              queue.push([y + sy, x + sx]);
              visited[y + sy][x + sx] = true;

              continue;
            }

            if (!grid[y + sy] || (grid[y + sy] && !grid[y + sy][x + sx])) {
              innerCount += 1;
            }
          }
          console.log(y, x, innerCount);

          count += innerCount;
        }
      }
    }
  }

  return count;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
);
