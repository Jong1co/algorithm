function solution(n, words) {
  let hash = {};
  let answer = [];

  words.forEach((word, i) => {
    if (hash[word]) {
      return answer.push([(i % n) + 1, Math.floor(i / n) + 1]);
    }

    if (i + 1 < words.length && word[word.length - 1] !== words[i + 1][0]) {
      return answer.push([((i + 1) % n) + 1, Math.floor((i + 1) / n) + 1]);
    }

    return (hash[word] = true);
  });

  return answer.length > 0 ? answer[0] : [0, 0];
}
