function dijkstra(graph, start) {
  const numVertices = graph.length;
  const INF = Number.MAX_SAFE_INTEGER;

  // 초기 거리 배열 초기화
  const dist = new Array(numVertices);
  for (let i = 0; i < numVertices; i++) {
    dist[i] = INF;
  }
  dist[start] = 0;

  // 방문한 정점을 저장하는 배열
  const visited = new Array(numVertices).fill(false);

  for (let i = 0; i < numVertices - 1; i++) {
    // 최단 거리를 가진 정점을 선택
    const u = minDistance(dist, visited);
    visited[u] = true;
    console.log('1:', dist);

    // 선택한 정점과 연결된 정점들의 거리 갱신
    for (let v = 0; v < numVertices; v++) {
      if (!visited[v] && graph[u][v] !== 0 && dist[u] + graph[u][v] < dist[v]) {
        dist[v] = dist[u] + graph[u][v];
      }
    }
    console.log('2:', dist);
  }

  return dist;
}

// 최단 거리를 가진 정점 선택
function minDistance(dist, visited) {
  let min = Number.MAX_SAFE_INTEGER;
  let minIndex = -1;
  for (let v = 0; v < dist.length; v++) {
    if (!visited[v] && dist[v] < min) {
      min = dist[v];
      minIndex = v;
    }
  }
  return minIndex;
}

// 예시 그래프
const graph = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0],
];

const startVertex = 0;
const shortestDistances = dijkstra(graph, startVertex);
// console.log(shortestDistances);
