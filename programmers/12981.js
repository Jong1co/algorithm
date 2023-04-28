/**
 * forEach를 통해 무조건 끝까지 루프를 돌 필요가 없다고 판단해서 for..of를 이용해 루프를 돌리고, 탈락자가 나올 시 바로 정답을 리턴하도록 변경
 */
function solution(n, words) {
  let hash = {};
  let i = 0;

  for (let word of words) {
    if (hash[word]) return [(i % n) + 1, Math.floor(i / n) + 1];

    i++;

    if (i < words.length && word[word.length - 1] !== words[i][0]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    hash[word] = true;
  }

  return [0, 0];
}

/**
 * 기존 코드
 */

function solution2(n, words) {
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
