function solution(str1, str2) {
  const reg = /^[a-zA-Z]{2}$/;
  let hash = {};
  let bigHash = {};
  const set = new Set();
  let sum = 0;

  for (let i = 0; i < str1.length - 1; i++) {
    const str = (str1[i] + str1[i + 1]).toLowerCase();
    if (reg.test(str)) {
      hash = { ...hash, [str]: (hash[str] ?? 0) + 1 };
      sum++;
      set.add(str);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const str = (str2[i] + str2[i + 1]).toLowerCase();
    if (reg.test(str)) {
      bigHash = { ...bigHash, [str]: (bigHash[str] ?? 0) + 1 };
      sum++;
      set.add(str);
    }
  }

  for (let str of set) {
    if (hash[str]) {
      hash = { ...hash, [str]: Math.max(bigHash[str] ?? 0, hash[str]) };
    } else {
      hash = { ...hash, [str]: bigHash[str] };
    }
  }

  const union = Object.values(hash).reduce((a, b) => a + b, 0);

  return union === 0 ? 65536 : Math.floor(((sum - union) / union) * 65536);
}
