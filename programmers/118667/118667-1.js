//솔루션을 함수를 복붙해주세요
function solution(queue1, queue2) {
  let q1_idx = 0;
  let q2_idx = 0;

  let q1 = queue1.reduce((a, b) => a + b, 0);
  let q2 = queue2.reduce((a, b) => a + b, 0);
  let queue = queue1.concat(queue2);
  const sum = q1 + q2;
  if (sum % 2 === 1) return -1;

  while (q1_idx < queue1.length && q2_idx < queue2.length && q1 !== sum / 2 && q2 !== sum / 2) {
    if (q1_idx > queue.length * 3 || q2_idx > queue.length * 3) return -1;
    if (q1 < sum / 2) {
      q1 += queue2[q2_idx];
      queue1.push(queue2[q2_idx]);
      q2_idx++;
    } else if (q1 > sum / 2) {
      q1 -= queue1[q1_idx];
      queue2.push(queue1[q1_idx]);
      q1_idx++;
    }
  }

  return queue2[q2_idx] === undefined ? -1 : q1_idx + q2_idx;
}
