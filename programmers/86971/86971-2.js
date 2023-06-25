/**
1. 양방향 그래프를 생성한다.
2. for문을 돌리는데 하나의 선을 끊어야 하기 때문에 해당 차례의 wire를 방문한 것으로 처리한다.
3. 둘중 하나를 선택한 후에 그 숫자를 기준으로 map을 확인하고, map[number] 를 stack에 쌓는다.
4. visited 데이터를 생성한 후에 stack에 들어간 number를 방문처리 한다.
5. 방문한 것은 넙기고, 방문하지 않은 number가 나왔을 때만 while문을 돌아, count를 구한다.
*/

function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  const map = {};
  wires.forEach((wire) => {
    const [start, end] = wire;
    if (map[start]) {
      map[start].push(end);
    } else {
      map[start] = [end];
    }
    if (map[end]) {
      map[end].push(start);
    } else {
      map[end] = [start];
    }
  });

  for (let wire of wires) {
    const [w1, w2] = wire;
    const stack = [...map[w1]];
    const visited = {};
    let count = 1;

    visited[w1] = true;
    visited[w2] = true;

    while (stack.length > 0) {
      const end = stack.pop();
      if (!visited[end]) {
        count++;
        visited[end] = true;
        stack.push(...map[end]);
      }
    }
    if (Math.abs(n - 2 * count) < answer) answer = Math.abs(n - 2 * count);
  }
  return answer;
}
