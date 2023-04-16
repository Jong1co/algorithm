function solution(number, k) {
  const stack = [];
  let count = 0;

  for (const item of number) {
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count += 1;
    }
    stack.push(item);
  }

  while (count < k) {
    stack.pop();
    count += 1;
  }

  return stack.join("");
}

let number = "1924";
let k = 2;

const case1 = solution(number, k);
console.log(case1);

number = "987654";
k = 1;

const case2 = solution(number, k);
console.log(case2);

number = "1822228371";
k = 5;

const case3 = solution(number, k);
console.log(case3);
