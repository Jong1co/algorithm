function solution(brown, yellow) {
  const sum = brown + yellow;

  for (let i = 3; i < sum; i++) {
    if (sum % i === 0) {
      if ((i - 2) * (sum / i - 2) === yellow)
        return [i, sum / i].sort((a, b) => b - a);
    }
  }
}
