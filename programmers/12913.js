function solution(lands) {
  lands.forEach((land, i) => {
    if (i === 0) return;
    land.forEach((_, j) => {
      lands[i][j] += Math.max(...lands[i - 1].filter((_, idx) => idx !== j));
    });
  });

  return Math.max(...lands[lands.length - 1]);
}
