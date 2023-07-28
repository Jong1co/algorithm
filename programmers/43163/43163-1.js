function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  let answer = Number.MAX_SAFE_INTEGER;

  function dfs(words, word, count) {
    if (count > answer) return;
    if (word === target) {
      answer = Math.min(answer, count);
      return;
    }
    words.forEach((w) => {
      let countOfDifferentSpelling = 0;
      for (let i = 0; i < w.length; i++) {
        if (w[i] !== word[i]) countOfDifferentSpelling++;
      }

      if (countOfDifferentSpelling === 1) {
        dfs(
          words.filter((diffWord) => diffWord !== w),
          w,
          count + 1,
        );
      }
    });
  }
  dfs(words, begin, 0);
  return answer;
}
