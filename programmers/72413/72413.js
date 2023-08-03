//솔루션을 함수를 복붙해주세요

function solution(n, s, a, b, fares) {
  const graph = Array.from({ length: n + 1 }, () => {
    const array = new Array(n + 1).fill(0);
    array[0] = null;
    return array;
  });

  function dijkstra(dist, startPoint) {
    const visited = new Array(dist.length).fill(false);
    dist[startPoint] = 0;
    for (let i = 1; i < dist.length; i++) {
      let u = minDistance(dist, visited);
      visited[u] = true;
      for (let v = 1; v < dist.length; v++) {
        if (!visited[v] && graph[u][v] !== 0) {
          dist[v] = Math.min(dist[v], dist[u] + graph[u][v]);
        }
      }
    }
  }

  fares.forEach(([start, end, fare]) => {
    graph[start][end] = fare;
    graph[end][start] = fare;
  });

  const dist = Array.from({ length: 3 }, () => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
  dijkstra(dist[0], s);
  dijkstra(dist[1], a);
  dijkstra(dist[2], b);
  let answer = Number.MAX_SAFE_INTEGER;
  dist[0].forEach((v, i) => {
    answer = Math.min(answer, dist[0][i] + dist[1][i] + dist[2][i]);
  });
  return answer;
}

function minDistance(dist, visited) {
  let min = Number.MAX_SAFE_INTEGER;
  let minIndex = -1;

  dist.forEach((d, i) => {
    if (!visited[i] && d <= min) {
      min = d;
      minIndex = i;
    }
  });

  return minIndex;
}
