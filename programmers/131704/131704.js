//솔루션을 함수를 복붙해주세요

function solution(order) {
  let answer = 0;
  const stack = [];
  let idx = 0;

  for (let i = 1; i <= order.length; i++) {
    while (order[idx] === stack[stack.length - 1]) {
      stack.pop();
      answer++;
      idx++;
    }
    if (i === order[idx]) {
      idx++;
      answer++;
      continue;
    }
    stack.push(i);
  }

  while (order[idx] === stack[stack.length - 1] && stack.length > 0 && idx < order.length) {
    stack.pop();
    idx++;
    answer++;
  }
  return answer;
}
