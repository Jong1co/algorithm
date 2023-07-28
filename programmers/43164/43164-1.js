const INIT_DEPARTURE = 'ICN';

function solution(tickets) {
  var answer = null;
  let index = -1;
  //처음부터 sort를 하고 진입하면, 어차피 알파벳이 빠른 순부터 적용되기 때문에 sort 적용
  tickets.sort();

  function dfs(tickets, route, departure) {
    if (answer !== null) return;
    if (tickets.length === 0) return (answer = [...route, departure]);
    if (tickets.every(([dept, arrv]) => dept !== departure)) return;
    tickets.forEach(([dept, arrv], i) => {
      if (dept === departure) {
        dfs(
          tickets.filter((t, idx) => idx !== i),
          [...route, departure],
          arrv,
        );
      }
    });
  }

  for (let ticket of tickets) {
    index++;
    const [departure, arrival] = ticket;
    if (departure !== INIT_DEPARTURE) continue;
    const route = [INIT_DEPARTURE];

    dfs(
      tickets.filter((_, i) => i !== index),
      route,
      arrival,
    );
  }

  return answer;
}
