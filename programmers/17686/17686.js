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

// 원래 접근법
// 실패 이유 : split을 사용하면 tail에 같은 숫자가 반복될 시에 함께 삭제되기 때문에 split을 사용해선 안 됨
function solution2(files) {
  return files
    .map((file) => {
      const number = file.match(/\d{1,5}/g)[0];
      const array = file.split(number);
      array.splice(1, 0, number);

      return array;
    })
    .sort((a, b) => {
      if (a[0].toLowerCase() !== b[0].toLowerCase()) {
        let i = 0;
        while (a[0][i] === b[0][i]) {
          i++;
        }
        if (!a[0][i] || !b[0][i]) {
          return a[0].length - b[0].length;
        }
        return (
          a[0][i].toLowerCase().charCodeAt() -
          b[0][i].toLowerCase().charCodeAt()
        );
      }
      if (Number(a[1]) !== Number(b[1])) return Number(a[1]) - Number(b[1]);
      return 0;
    })
    .map((file) => file.join(""));
}
