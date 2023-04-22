/**
 * 과제 진행하기
 */
function solution(plans) {
  let answer = [];
  let stack = [];
  plans.forEach((plan) => {
    plan[1] = timeToMinutes(plan[1]);
    plan[2] = Number(plan[2]);
  });
  plans.sort((a, b) => b[1] - a[1]);

  while (plans.length > 0) {
    let [subject, start, dur] = plans.pop();
    let endTime = start + dur;

    if (plans.length === 0 && stack.length > 0) {
      let newSubject = stack.pop();
      newSubject[1] = endTime;
      plans.push(newSubject);
    } else if (plans.length === 0 && stack.length === 0) {
      answer.push(subject);
      break;
    }

    if (plans[plans.length - 1][1] < endTime) {
      stack.push([subject, start, endTime - plans[plans.length - 1][1]]);
    } else {
      answer.push(subject);
      if (plans[plans.length - 1][1] === endTime) continue;

      if (stack.length > 0) {
        let newSubject = stack.pop();
        newSubject[1] = endTime;
        plans.push(newSubject);
      }
    }
  }
  return answer;
}

function timeToMinutes(time) {
  const [hour, minutes] = time.split(":");
  return Number(hour) * 60 + Number(minutes);
}
