function solution(n, wires) {
  const dict = {};
  const answer = [];

  for (let wire of wires) {
    if (!(wire[0] in dict)) dict[wire[0]] = [wire[1]];
    else dict[wire[0]].push(wire[1]);
    if (!(wire[1] in dict)) dict[wire[1]] = [wire[0]];
    else dict[wire[1]].push(wire[0]);
  }

  for (let wire of wires) {
    const [start, end] = wire;
    const stack = [...dict[start]];
    const visited = {};
    let count = 1;

    visited[start] = true;
    visited[end] = true;

    while (stack.length !== 0) {
      const temp = stack.pop();
      if (!visited[temp]) {
        visited[temp] = true;
        stack.push(...dict[temp]);
        count += 1;
      }
    }
    answer.push(Math.abs(count * 2 - n));
  }
  return Math.min(...answer);
}
