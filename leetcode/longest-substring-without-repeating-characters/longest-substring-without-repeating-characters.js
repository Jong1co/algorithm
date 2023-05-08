/**
 * 어거지로 만들어낸 풀이
 * runtime 1221ms
 * memory 95.5mb
 */
// var lengthOfLongestSubstring = function (s) {
//     let answer = 0;

//     for (let i = 0; i < s.length; i++) {
//         let str = {};
//         str[s[i]] = true;
//         for (let j = i + 1; j <= s.length; j++) {
//             if (!str[s[j]] && s[j] !== undefined) {
//                 str[s[j]] = true;
//             } else {
//                 answer = Math.max(answer, Object.values(str).length);
//                 break;
//             }
//         }
//     }

//     return answer === 0 ? s.length : answer;
// };

/**
 * 해법 2 : 만약에 중복이 발생한다면 맨 왼쪽에 있는 문자들을 하나씩 떨어트릴것임. 반복이 더이상 없을 때까지
 * runtime : 94ms
 * memory : 45mb
 */
var lengthOfLongestSubstring = function (s) {
    let answer = [];
    let count = 0;
    for (let str of s) {
        count = Math.max(count, answer.length);
        while (answer.includes(str)) {
            answer.shift();
        }
        answer.push(str);
    }

    return Math.max(count, answer.length);
};

module.exports = lengthOfLongestSubstring;
