//솔루션을 함수를 복붙해주세요
function solution(n, computers) {
  const visited = Array.from({ length: n }, () => false);
  const queue = [];
  let count = 0;

  while (!visited.every((v) => v === true)) {
    const initIdx = visited.findIndex((v) => v === false);
    queue.push({ network: computers[initIdx], index: initIdx });

    while (queue.length != 0) {
      const { network, index } = queue.shift();
      visited[index] = true;

      network.forEach((n, i) => {
        if (n !== 0 && i !== index && visited[i] === false) {
          queue.push({ network: computers[i], index: i });
        }
      });
    }
    count++;
  }

  return count;
}
