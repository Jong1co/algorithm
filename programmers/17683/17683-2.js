//솔루션을 함수를 복붙해주세요
const solution = (m, musicInfos) => {
  m = transformSharpVariableToLowwerCase(m);

  let answer = musicInfos.reduce(
    (accr, curr) => {
      let [st, et, title, code] = curr.split(',');
      const playTime = (new Date(`2022-01-01 ${et}:00`) - new Date(`2022-01-01 ${st}:00`)) / 60000;
      code = transformSharpVariableToLowwerCase(code);
      code = playTime < code.length ? code.slice(0, playTime) : code.repeat(Math.ceil(playTime / code.length));

      if (code.includes(m) && playTime > accr.max) {
        return { melody: [playTime, title], max: playTime };
      }
      return accr;
    },
    { melody: [], max: 0 },
  );

  return answer.max === 0 ? '(None)' : answer.melody[1];
};

const transformSharpVariableToLowwerCase = (str) => {
  const reg = /[A-Z]#/g;
  let arr = str.match(reg);
  if (arr !== null) {
    arr.forEach((v) => (str = str.replaceAll(v, v[0].toLowerCase())));
  }
  return str;
};
