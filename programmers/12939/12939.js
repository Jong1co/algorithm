//솔루션을 함수를 복붙해주세요
function solution(s) {
  const numberArray = s.split(' ');
  numberArray.sort((a, b) => a - b);

  return `${numberArray[0]} ${numberArray[numberArray.length - 1]}`;
}
