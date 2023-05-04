function solution(numbers, target) {
  let tree = [null, 0];
  let pointer = 1;
  let idx = 0;
  let limit = 2;

  while (idx < numbers.length) {
    while (pointer < limit) {
      tree[pointer * 2] = tree[pointer] - numbers[idx];
      tree[pointer * 2 + 1] = tree[pointer] + numbers[idx];
      pointer++;
    }
    idx++;
    limit *= 2;
  }

  return tree.slice(-(2 ** numbers.length)).filter((node) => node === target)
    .length;
}
