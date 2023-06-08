//솔루션을 함수를 복붙해주세요

function solution(orders, course) {
  var answer = [];
  orders = orders.map((menu) => menu.split('').sort());

  for (let menu of course) {
    const map = {};
    for (let order of orders) {
      const comb = getCombinations(order, menu);
      comb.forEach((c) => {
        map[c] = (map[c] ?? 0) + 1;
      });
    }
    const max = Math.max(...Object.values(map));
    Object.entries(map).forEach((v) => v[1] === max && v[1] !== 1 && answer.push(v[0]));
  }

  return answer.sort();
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr;

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached.map((a) => a.join('')));
  });

  return results;
};
