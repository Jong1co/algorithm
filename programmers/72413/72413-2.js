//솔루션을 함수를 복붙해주세요
function solution(n, s, a, b, fares) {
  var arr = [];
  for (var i = 1; i <= n; i++) {
    arr[i] = [];
    for (var j = 1; j <= n; j++) {
      arr[i][j] = i == j ? 0 : Number.MAX_SAFE_INTEGER;
    }
  }

  fares.forEach(([v1, v2, distance]) => {
    arr[v1][v2] = distance;
    arr[v2][v1] = distance;
  });

  for (var middle = 1; middle <= n; middle++) {
    for (var start = 1; start <= n; start++) {
      for (var end = 1; end <= n; end++) {
        if (arr[start][end] > arr[start][middle] + arr[middle][end]) {
          arr[start][end] = arr[start][middle] + arr[middle][end];
        }
      }
    }
  }

  var min = Number.MAX_SAFE_INTEGER;
  for (var middle = 1; middle <= n; middle++) {
    var price = arr[middle][s] + arr[middle][a] + arr[middle][b];
    min = Math.min(min, price);
  }

  return min;
}
