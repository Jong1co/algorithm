function isPrime(num) {
  num = Number(num);
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  const set = new Set();
  const nums = numbers.split("");

  //dfs위치에 따른 성능 차이..?
  // 왜 solution 함수 외부에 선언하면 더 느리지
  const dfs = (set, nums, fixed) => {
    if (nums.length > 0) {
      for (let i = 0; i < nums.length; i++) {
        const newFixed = fixed + nums[i];
        let newNums = [...nums];
        newNums.splice(i, 1);

        if (isPrime(newFixed)) {
          set.add(Number(newFixed));
        }
        dfs(set, newNums, newFixed);
      }
    }
  };

  dfs(set, nums, "");
  return set.size;
}
