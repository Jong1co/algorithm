function solution(picks, minerals) {
  let answer = 0;
  let temp = [];
  let numberOfBundles =
    minerals.length > picks.reduce((a, b) => a + b * 5, 0)
      ? picks.reduce((a, b) => a + b, 0)
      : Math.ceil(minerals.length / 5);

  const bundleOfMinerals = Array.from(new Array(numberOfBundles), () => []);
  const work = { diamond: 2, iron: 1, stone: 0 };

  minerals = minerals.map((mineral) => work[mineral]);

  for (let i = 0; i < numberOfBundles; i++) {
    for (let j = i * 5; j < i * 5 + 5; j++) {
      if (minerals[j] >= 0) bundleOfMinerals[i].push(minerals[j]);
    }
  }

  temp = bundleOfMinerals
    .map((bundle) => {
      const diamond = bundle.reduce((a, b) => a + getFatigue(b - 2), 0);
      const iron = bundle.reduce((a, b) => a + getFatigue(b - 1), 0);
      const stone = bundle.reduce((a, b) => a + getFatigue(b - 0), 0);

      return { diamond, iron, stone };
    })
    .sort((a, b) => b.stone - a.stone);

  for (let t of temp) {
    if (picks[0] > 0) {
      picks[0] -= 1;
      answer += t["diamond"];
    } else if (picks[1] > 0) {
      picks[1] -= 1;
      answer += t["iron"];
    } else if (picks[2] > 0) {
      picks[2] -= 1;
      answer += t["stone"];
    }
  }

  return answer;
}

function getFatigue(number) {
  return Math.pow(5, number < 0 ? 0 : number);
}

// function solution(picks, minerals) {
//   let answer = 0;
//   const bundleOfMinerals = new Array(Math.ceil(minerals.length / 5))
//     .fill(0)
//     .map((v) => []);

//   minerals = minerals.map((mineral) => {
//     switch (mineral) {
//       case "diamond":
//         return 2;
//       case "iron":
//         return 1;
//       default:
//         return 0;
//     }
//   });

//   for (let i = 0; i < Math.ceil(minerals.length / 5); i++) {
//     for (let j = i * 5; j < i * 5 + 5; j++) {
//       if (minerals[j] >= 0) bundleOfMinerals[i].push(minerals[j]);
//     }
//   }

//   bundleOfMinerals.sort(
//     (a, b) => b.reduce((m, n) => m + n, 0) - a.reduce((m, n) => m + n, 0)
//   );

//   answer = bundleOfMinerals
//     .map((bundle) => {
//       if (picks.reduce((a, b) => a + b, 0) === 0) return 0;

//       let durability = 0;
//       if (picks[0] > 0) {
//         picks[0] -= 1;
//         durability = 2;
//       } else if (picks[1] > 0) {
//         picks[1] -= 1;
//         durability = 1;
//       } else if (picks[2] > 0) {
//         picks[2] -= 1;
//         durability = 0;
//       }

//       return bundle.reduce(
//         (a, b) => a + Math.pow(5, b - durability < 0 ? 0 : b - durability),
//         0
//       );
//     })
//     .reduce((a, b) => a + b, 0);

//   return answer;
// }

// /**
//  * ----------------------------------------------------
//  */

// function solution(picks, minerals) {
//   const work = { diamond: 2, iron: 1, stone: 1 };
//   minerals = minerals.map((mineral) => work[mineral]);
//   const bundleOfMinerals = Array.from(
//     new Array(Math.ceil(minerals.length / 5)),
//     () => []
//   );

//   for (let i = 0; i < Math.ceil(minerals.length / 5); i++) {
//     for (let j = i * 5; j < i * 5 + 5; j++) {
//       if (minerals[j] >= 0) bundleOfMinerals[i].push(minerals[j]);
//     }
//   }

//   bundleOfMinerals.sort(
//     (a, b) => b.reduce((m, n) => m + n, 0) - a.reduce((m, n) => m + n, 0)
//   );

//   return bundleOfMinerals
//     .map((bundle) => {
//       if (picks.reduce((a, b) => a + b, 0) === 0) return 0;

//       let durability = 0;
//       if (picks[0] > 0) {
//         picks[0] -= 1;
//         durability = 2;
//       } else if (picks[1] > 0) {
//         picks[1] -= 1;
//         durability = 1;
//       } else if (picks[2] > 0) {
//         picks[2] -= 1;
//         durability = 0;
//       }

//       return bundle.reduce(
//         (a, b) => a + Math.pow(5, b - durability < 0 ? 0 : b - durability),
//         0
//       );
//     })
//     .reduce((a, b) => a + b, 0);
// }

// function getFatigue(number) {
//   return Math.pow(5, number < 0 ? 0 : number);
// }
