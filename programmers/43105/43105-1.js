//솔루션을 함수를 복붙해주세요
function solution(triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    triangle[i].forEach((t, idx) => {
      triangle[i][idx] += Math.max(triangle[i + 1][idx], triangle[i + 1][idx + 1]);
    });
  }
  return triangle[0][0];
}
