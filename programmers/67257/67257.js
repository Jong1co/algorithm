//솔루션을 함수를 복붙해주세요
function calculator(operator, s) {
  switch (operator) {
    case '*':
      return s.reduce((a, b) => a * b, 1);
    case '+':
      return s.reduce((a, b) => a + b, 0);
    default:
      return s.reduce((a, b) => a - b, s[0] * 2);
  }
}

function solution(expression) {
  let operators = ['*+-', '*-+', '+-*', '+*-', '-*+', '-+*'].map((v) => v.split(''));
  let answer = Number.MIN_SAFE_INTEGER;

  operators.map((operator) => {
    const numArr = expression.match(/(\d+)/g).map(Number);
    const opArr = expression.match(/[\*\-\+]/g);

    operator.forEach((op) => {
      let idx = opArr.indexOf(op);
      while (idx !== -1) {
        numArr[idx] = calculator(op, [numArr[idx], numArr[idx + 1]]);
        numArr.splice(idx + 1, 1);
        opArr.splice(idx, 1);
        idx = opArr.indexOf(op);
      }
    });
    if (answer < Math.abs(numArr[0])) answer = Math.abs(numArr[0]);
  });

  return answer;
}
