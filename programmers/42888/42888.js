/**
 * 통과한 풀이
 */

function solution(records) {
  const map = {};
  records = records.map((record) => record.split(" "));

  for (let i = records.length - 1; i >= 0; i--) {
    const [status, uid, nickname] = records[i];
    if (nickname && !map[uid]) map[uid] = nickname;
  }

  return records
    .filter(([status]) => status !== "Change")
    .map(([status, uid, nickname]) => {
      const text =
        status === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다.";
      return map[uid] + text;
    });
}

/**
 * 최적화
 */
function solution(records) {
  const map = {};
  const answer = [];
  records = records.map((record) => record.split(" "));

  for (let i = records.length - 1; i >= 0; i--) {
    const [_, uid, nickname] = records[i];
    if (nickname && !map[uid]) map[uid] = nickname;
  }

  records.forEach(([status, uid]) => {
    if (status !== "Change") {
      const text =
        status === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다.";
      answer.push(map[uid] + text);
    }
  });

  return answer;
}

// 25 ~ 32 시간초과
function solution2(records) {
  let map = {};
  records = records.map((record) => record.split(" "));

  map = records.reduce((prev, curr) => {
    const uid = curr[1];
    const nickname = curr[2];

    if (nickname !== undefined) {
      return { ...prev, [uid]: [...(prev[uid] ?? []), nickname] };
    }
    return prev;
  }, map);

  return records
    .filter(([status]) => status !== "Change")
    .map(([status, uid, nickname]) => {
      const nameHistory = map[uid];
      const text =
        status === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다.";

      return nameHistory[nameHistory.length - 1] + text;
    });
}

/**
 *
 */

function solution3(records) {
  let map = {};
  records = records.map((record) => record.split(" "));

  const uidList = [...new Set(records.map(([_, uid]) => uid))];

  for (let j = 0; j < uidList.length; j++) {
    for (let i = records.length - 1; i > 0; i--) {
      const [status, uid, nickname] = records[i];
      if (nickname !== undefined && !map[uid]) {
        map[uid] = nickname;
        break;
      }
    }
  }

  return records
    .filter(([status]) => status !== "Change")
    .map(([status, uid, _]) => {
      const nickname = map[uid];
      const text =
        status === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다.";

      return nickname + text;
    });
}
