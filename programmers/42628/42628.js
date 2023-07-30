function solution(operations) {
  var answer = [];

  operations.forEach((operation) => {
    const [command, number] = operation.split(' ');

    if (command === 'I') {
      answer.push(Number(number));
    } else if (command === 'D') {
      let findValue = number === '-1' ? Math.min(...answer) : Math.max(...answer);
      const index = answer.findIndex((v) => v === findValue);
      answer.splice(index, 1);
    }
  });

  return answer.length ? [Math.max(...answer), Math.min(...answer)] : [0, 0];
}
