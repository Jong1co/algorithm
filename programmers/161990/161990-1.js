//솔루션을 함수를 복붙해주세요

function solution(wp) {
  let minR = Number.MAX_SAFE_INTEGER;
  let minC = Number.MAX_SAFE_INTEGER;
  let maxR = Number.MIN_SAFE_INTEGER;
  let maxC = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < wp.length; i++) {
    for (let j = 0; j < wp[i].length; j++) {
      if (wp[i][j] === '#') {
        minR = Math.min(i, minR);
        minC = Math.min(j, minC);
        maxR = Math.max(i, maxR);
        maxC = Math.max(j, maxC);
      }
    }
  }

  return [minR, minC, ++maxR, ++maxC];
}

function solution2(wallpaper) {
  let minX = 0;
  let maxX = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    if (minX === 0 && wallpaper[i].indexOf('#') >= 0) {
      minX = i;
      break;
    }
  }

  for (let i = wallpaper.length - 1; i >= 0; i--) {
    if (maxX === 0 && wallpaper[i].indexOf('#') >= 0) {
      maxX = i + 1;
      break;
    }
  }

  wallpaper = wallpaper.map((w) => w.split('').map((v, i) => (v === '#' ? i : v)));

  const maxY = Math.max(...wallpaper.flat().filter((v) => v !== '.')) + 1;
  const minY = Math.min(...wallpaper.flat().filter((v) => v !== '.'));

  return [minX, minY, maxX, maxY];
}
