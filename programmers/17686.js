// 파일명 정렬

function solution(files) {
  return files
    .map((file) => {
      const head = file.match(/^\D+/)[0].toUpperCase();
      const number = Number(file.match(/\d{1,5}/)[0]);

      return [head, number, file];
    })
    .sort((a, b) => {
      if (a[0] !== b[0]) {
        if (a[0] > b[0]) return 1;
        return -1;
      }
      return a[1] - b[1];
    })
    .map((file) => file[2]);
}
