//솔루션을 함수를 복붙해주세요
function solution(rows, columns, queries) {
  let answer = [];
  let array = new Array(rows).fill(0).map((v) => []);

  for (let i = 1; i <= rows * columns; i++) {
    array[Math.ceil(i / columns) - 1].push(i);
  }

  for (let [x1, y1, x2, y2] of queries) {
    const newArray = [...array.map((v) => [...v])];
    let min = 10001;

    for (let i = x1 - 1; i < x2; i++) {
      for (let j = y1 - 1; j < y2; j++) {
        if (i === x1 - 1 && j === y1 - 1) {
          newArray[i][j] = array[i + 1][j];
          if (newArray[i][j] < min) min = newArray[i][j];
          continue;
        }
        if (i === x1 - 1) {
          newArray[i][j] = array[i][j - 1];
          if (newArray[i][j] < min) min = newArray[i][j];
          continue;
        }
        if (j === y2 - 1) {
          newArray[i][j] = array[i - 1][j];
          if (newArray[i][j] < min) min = newArray[i][j];
          continue;
        }
        if (i === x2 - 1) {
          newArray[i][j] = array[i][j + 1];
          if (newArray[i][j] < min) min = newArray[i][j];
          continue;
        }
        if (j === y1 - 1) {
          newArray[i][j] = array[i + 1][j];
          if (newArray[i][j] < min) min = newArray[i][j];
          continue;
        }
      }
    }
    answer.push(min);
    array = newArray;
  }

  return answer;
}
