/**
 * sort((a,b) => (b + a) - (a + b))는 문자열을 합쳐서 비교하는 정렬임
 * 즉 [20, 3] 을 비교한다면 320 - 203 으로 앞에 큰 수가 오도록 정렬할 수 있음
 * 여기서 320 - 203 또한 문자열로 비교함
 */
function solution(numbers) {
  let answer = numbers
    .map(String)
    .sort((a, b) => {
      return b + a - (a + b);
    })
    .join("");
  answer = answer[0] === "0" ? "0" : answer;
  return answer;
}
