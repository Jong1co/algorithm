function solution(diffs, times, limit) {
  // Math.max를 사용했으나, 테스트 결과 diffs의 length가 110091이 넘는다면 그 때부터 아래 에러를 반환함
  // Uncaught RangeError: Maximum call stack size exceeded

  let maxLevel = diffs.reduce((prev, cur) => Math.max(prev, cur), 0);
  let currentLevel = Math.ceil(maxLevel / 2);
  let resolveTime = 0;

  while (true) {
    if (maxLevel <= currentLevel) break;
    resolveTime = diffs.reduce((acc, diff, index) => {
      const k = Math.max(diff - currentLevel, 1);
      if (index == 0) return k * times[index];
      acc += k * times[index] + (k - 1) * times[index - 1];
      return acc;
    }, 0);

    if (resolveTime == limit) break;

    if (resolveTime > limit) {
      currentLevel = Math.ceil((maxLevel + currentLevel) / 2);
    } else {
      maxLevel = currentLevel;
      currentLevel = Math.ceil(maxLevel / 2);
    }
  }

  return resolveTime < limit ? currentLevel : currentLevel + 1;
}
