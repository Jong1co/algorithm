//각 기능은 진도 100%일 때 반영 가능
//스피드에 따라 빨리 완성될 수도 있음
//뒤에 있는 기능은 앞의 기능이 완성 되어야 함께 배포 가능
//각 배포마다 몇개의 기능이 배포되는는지 리턴하라

function solution(progresses, speeds) {
  const answer = [];
  let day = 1;
  let priority = 0;

  while (progresses.length - 1 >= priority) {
    if (progresses[priority] + speeds[priority] * day >= 100) {
      answer.push(day);
      priority++;
      continue;
    }
    day++;
  }

  return Object.values(
    answer.reduce(
      (acc, day) => ({ ...acc, [String(day)]: (acc[String(day)] ?? 0) + 1 }),
      {}
    )
  );
}

let progresses = [93, 30, 55];
let speeds = [1, 30, 5];

const answer1 = solution(progresses, speeds);

console.log("solution1:", answer1);

progresses = [95, 90, 99, 99, 80, 99];
speeds = [1, 1, 1, 1, 1, 1];

const answer2 = solution(progresses, speeds);

console.log("solution1:", answer2);
