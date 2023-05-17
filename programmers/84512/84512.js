//솔루션을 함수를 복붙해주세요
// A AA AAA AAAA AAAAA AAAAE AAAAI AAAAO AAAAU AAAI: 10
// A, E, I, O, U => [0, 1, 2, 3, 4]

// 총 경우의 수
// 5 + 25 + 125 + 625 + 3125
// IA
// I는
// AUUUU 625 + 125 + 25 + 5 + 1 = 781 + EUUUU = 781 의 다음 숫자지
//      5**4  5**3  5**2 5**1 5**0

// 갯수가 한개일 때, 5**4  5**3  5**2 5**1 5**0
// 두개일 때
function calculator(num) {
  let result = 0;
  for (let j = 0; j < num; j++) {
    result += Math.pow(5, j);
  }
  return result;
}

function solution(word) {
  const vowel = ['A', 'E', 'I', 'O', 'U'];
  let answer = 0;

  for (let i = 0; i < word.length; i++) {
    let idx = vowel.findIndex((v) => v === word[i]);
    answer += idx * calculator(5 - i) + 1;
  }

  return answer;
}
