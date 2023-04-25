function solution(fees, records) {
  const hash = {};
  records
    .map((record) => record.split(" "))
    .forEach(([time, carNum, _]) => {
      time = timeToMinutes(time);
      hash[carNum] === undefined
        ? (hash[carNum] = [time])
        : hash[carNum].push(time);
    }, hash);

  for (let key in hash) {
    hash[key] = hash[key].reduce(
      (a, b, i) => a + b * (i % 2 === 0 ? -1 : 1),
      0
    );
    if (hash[key] <= 0) hash[key] += timeToMinutes("23:59");
  }

  const feeCalculator = (fee) => {
    if (fee < fees[0]) return fees[1];
    return fees[1] + Math.ceil((fee - fees[0]) / fees[2]) * fees[3];
  };

  return Object.entries(hash)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([_, fee]) => feeCalculator(fee));
}

const timeToMinutes = (time) => {
  const [hour, minutes] = time.split(":").map(Number);
  return hour * 60 + minutes;
};
