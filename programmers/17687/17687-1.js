//솔루션을 함수를 복붙해주세요
// number.toString(n) => 16진수는 소문자로 나타나짐
function solution(n, t, m, p) {
    let num = 0;
    let str = '';
    let answer = '';

    while (str.length < (t - 1) * m + p) {
        str += num.toString(n).toUpperCase(); // 왜 toUpperCase() 해야 함?
        num++;
    }

    for (let i = 0; i < t; i++) {
        answer += str[i * m + p - 1];
    }

    return answer;
}
