function solution(board) {
  let min = Number.MAX_SAFE_INTEGER;
  const boardCoor = { D: [], G: [], R: [] };
  const max = board.length;
  const vwall = "D".repeat(max + 2);

  board = [vwall, ...board, vwall].map((str) => "D" + str + "D");

  board.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const str = row[x];
      if (str !== ".") boardCoor[str].push({ x, y });
    }
  });

  let { D: wall, G: goal, R: curr } = boardCoor;
  curr = curr[0];
  goal = goal[0];

  let prevDirection = "x";

  const dfs = (curr, prevDirection, count) => {
    if (goal.x === curr.x && goal.y === curr.y) {
      if (min > count) min = count;
      return;
    }
    if (count > 1000 || count > min) return;
    count++;

    if (prevDirection === "x") {
      const filteredWall = wall
        .filter((w) => w.x === curr.x)
        .sort((a, b) => a.y - b.y);

      let bottomMove = filteredWall.find((w) => curr.y < w.y).y - 1;

      let topMove = filteredWall.filter((w) => curr.y > w.y);
      topMove = topMove[topMove.length - 1].y + 1;

      prevDirection = "y";

      if (curr.y !== bottomMove)
        dfs({ ...curr, y: bottomMove }, prevDirection, count);
      if (curr.y !== topMove)
        dfs({ ...curr, y: topMove }, prevDirection, count);
    } else {
      const filteredWall = wall
        .filter((w) => w.y === curr.y)
        .sort((a, b) => a.x - b.x);

      let rightMove = filteredWall.find((w) => curr.x < w.x).x - 1;

      let leftMove = filteredWall.filter((w) => curr.x > w.x);
      leftMove = leftMove[leftMove.length - 1].x + 1;

      prevDirection = "x";

      if (curr.x !== rightMove)
        dfs({ ...curr, x: rightMove }, prevDirection, count);
      if (curr.x !== leftMove)
        dfs({ ...curr, x: leftMove }, prevDirection, count);
    }
  };
  dfs(curr, prevDirection, 0);
  console.log(min);
  return min > 100 ? -1 : min;
}
