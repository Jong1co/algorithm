//솔루션을 함수를 복붙해주세요

/** 통과한 풀이 */
function solution(topping) {
  let answer = 0;
  let origin = new Map();
  let brother = new Map();
  topping.forEach((type) => {
    origin.has(type) ? origin.set(type, origin.get(type) + 1) : origin.set(type, 1);
  });

  for (let type of topping) {
    brother.has(type) ? brother.set(type, brother.get(type) + 1) : brother.set(type, 1);
    origin.get(type) !== 1 ? origin.set(type, origin.get(type) - 1) : origin.delete(type);

    if (brother.size === origin.size) answer++;
    if (brother.size > origin.size) break;
  }

  return answer;
}

//첫번째 너무 오래걸림
// function solution(topping) {
//   let stack = [];
//   let answer = 0;

//   while (topping.length > 0) {
//     stack.push(topping.pop());
//     if (new Set(topping).size === new Set(stack).size) answer++;
//   }

//   return answer;
// }

// // 두번째 좀 빨라지긴 했어도 어림 없음
// //1번 케이스 2200 -> 14로 줄었지만 어림없음
// //1, 3, 4, 5, 11만 통과
// //hash테이블 만들어서 비교?
// //종류가 만개잖아 그럼 백만 * 만 = 1억 ? 할만해볼듯
function solution(topping) {
  let origin = topping.reduce((accr, curr) => ({ ...accr, [curr]: (accr[curr] ?? 0) + 1 }), {});
  let brother = {};
  let answer = 0;
  let originNumber = Object.keys(origin).length;
  let brotherNumber = 0;

  for (let type of topping) {
    origin[type] -= 1;
    brother[type] = (brother[type] ?? 0) + 1;

    if (origin[type] === 0) originNumber -= 1;
    if (brother[type] === 1) brotherNumber += 1;
    if (originNumber < brotherNumber) break;
    if (originNumber === brotherNumber) answer++;
  }

  return answer;
}
