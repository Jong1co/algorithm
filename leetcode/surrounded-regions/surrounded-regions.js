//솔루션을 함수를 복붙해주세요

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solve = function(board) {
//     const direction = [[0, -1],[0, 1],[1, 0],[-1, 0]]
//     const visited = board.map(b => [...b.map(v => v !== "O")]);

//     for(let n = 1; n < board.length - 1; n++){
//         for(let m = 1; m < board[0].length - 1; m++){
//             if(visited[n][m] === true) continue;
//             const stack = [[n, m]];
//             let flag = true;
//             const willChangedCoordinates = [[n, m]];

//             while(stack.length > 0){
//                 const [x, y] = stack.pop();
//                 if(x === 0 || y === 0 || x === board.length - 1 || y === board[0].length - 1) {
//                     flag = false
//                 };
//                 for(let [cx, cy] of direction){
//                     if(visited[x + cx] && visited[x + cx][y + cy] === false){
//                         visited[x + cx][y + cy] = true
//                         stack.push([x + cx, y + cy]);
//                         willChangedCoordinates.push([x + cx, y + cy]);
//                     }
//                 }
//             }

//             if(flag){
//                 for(let [nx, ny] of willChangedCoordinates){
//                     board[nx][ny] = "X"
//                 }
//             }
//         }
//     }
// };

var solve = function (board) {
  const direction = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  if (!board.length) return [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'O' && (i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1)) {
        dfs(i, j);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'V') {
        board[i][j] = 'O';
      } else {
        board[i][j] = 'X';
      }
    }
  }

  return board;

  function dfs(r, c) {
    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] === 'X' || board[r][c] === 'V') {
      return;
    }

    board[r][c] = 'V';

    for (let [x, y] of direction) {
      dfs(r + x, c + y);
    }
  }
};
