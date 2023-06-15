//솔루션을 함수를 복붙해주세요
function solution(n, vertex) {
  let graph = new Array(n + 1).fill(0).map((v) => []);

  for (let [src, dest] of vertex) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = new Array(n + 1).fill(0);
  distance[1] = 1;
  const queue = [1];

  while (queue.length > 0) {
    const src = queue.shift();
    for (let dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.push(dest);
        distance[dest] += distance[src] + 1;
      }
    }
  }

  const max = Math.max(...distance);

  return distance.filter((v) => v === max).length;
}
