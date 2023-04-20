// 참고한 블로그: https://sasca37.tistory.com/320
/**
 * r^2 = x^2 + y^2 을 이용해 y에 값을 하나씩 대입하고 x값을 찾아냄
 * 즉, y = n인 줄의 x의 갯수는 x = Math.sqrt(r**2 - n**2)와 같다.
 *
 * 하지만, 작은 원의 점을 뺄 때에는 원 테두리에 포함되는 점은 제외되어야 하기 때문에
 * x가 정수일 때에 제거해야할 점의 갯수는 한 개가 적다.
 * 또한 x 가 0일 때에도 처리를 따로 해주어야 한다.
 */

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
