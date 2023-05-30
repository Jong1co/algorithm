//솔루션을 함수를 복붙해주세요

function solution(numbers) {
  return numbers.map((num) => {
    if (num % 2 === 0) return num + 1;

    const binaryNumber = num.toString(2);

    for (let i = binaryNumber.length - 1; i > 0; i--) {
      const nextIndex = i - 1;
      if (binaryNumber[nextIndex] === '0' && binaryNumber[i] === '1') {
        let result = replaceAt(binaryNumber, i, '0');
        result = replaceAt(result, nextIndex, '1');
        return parseInt(result, 2);
      }
    }
    let result = replaceAt(binaryNumber, 0, 0);
    return parseInt('1' + result, 2);
  });
}

function replaceAt(str, index, num) {
  return str.substring(0, index) + num + str.substring(index + 1);
}
