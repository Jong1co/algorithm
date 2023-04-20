function solution(r1, r2) {
  let answer = 0;
  for (let y = 1; y <= r2; y++) {
    let x = Math.sqrt(r2 ** 2 - y ** 2);

    answer += Math.floor(x) * 4;
  }

  for (let y = 1; y <= r1; y++) {
    let x = Math.sqrt(r1 ** 2 - y ** 2);
    if (x !== 0 && Number.isInteger(x)) x -= 1;

    answer -= Math.floor(x) * 4;
  }

  return (answer += 4 * (r2 - r1 + 1));
}
