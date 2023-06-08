//솔루션을 함수를 복붙해주세요
function solution(data, col, row_begin, row_end) {
  var answer = 0;
  data.sort((a, b) => (a[col - 1] === b[col - 1] ? b[0] - a[0] : a[col - 1] - b[col - 1]));

  for (let i = row_begin - 1; i < row_end; i++) {
    let sum = 0;
    data[i].forEach((d) => (sum += d % (i + 1)));
    answer ^= sum;
  }

  return answer;
}
