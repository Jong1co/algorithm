var letterCombinations = function (digits) {
  if (digits === '') return [];
  const digitsList = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const answer = [];

  function dfs(result, remainString) {
    if (!remainString) {
      return answer.push(result);
    }
    const idx = remainString[0];
    const enabledLetters = digitsList[idx];
    for (let letter of enabledLetters) {
      dfs(result + letter, remainString.substring(1));
    }
  }
  dfs('', digits);

  return answer;
};
