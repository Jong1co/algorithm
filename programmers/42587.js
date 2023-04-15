/**
 * 1. 가장 앞에 있는 문서 꺼냄
 * 2. 우선순위가 가장 높을 때 출력하고, 낮을 경우 마지막으로 보냄
 *
 * queue를 이용해서
 */
function solution(priorities, location) {
  let answer = 0;
  let zeroCount = 0;
  let front = 0;
  const length = priorities.length;

  while (true) {
    if (priorities[front] === Math.max(...priorities)) {
      answer += 1;
      if (front === location) return answer;
      zeroCount++;
    } else {
      priorities.push(priorities[front]);
      if (front === location) location = location + length - zeroCount;
    }
    priorities[front] = 0;
    front += 1;
  }
}

let priorities = [2, 1, 3, 2];
let location = 2;

const case1 = solution(priorities, location);

console.log(case1); //1

priorities = [1, 1, 9, 1, 1, 1];
location = 0;

const case2 = solution(priorities, location);

console.log(case2); //5
