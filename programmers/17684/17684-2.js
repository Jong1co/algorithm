function solution(msg) {
    const dic = {};
    let answer = [];
    let newWordIndex = 27;
    for (let i = 65; i < 91; i++) {
        dic[String.fromCharCode(i)] = i - 64;
    }

    for (let i = 0; i < msg.length; i++) {
        let word = msg[i];
        let n = i;
        while (dic[word] && n < msg.length - 1) {
            n++;
            word += msg[n];
        }

        if (n === msg.length - 1 && dic[word]) {
            answer.push(dic[word]);
            break;
        }

        answer.push(dic[word.slice(0, -1)]);
        dic[word] = newWordIndex;
        newWordIndex++;
        i = n - 1;
    }
    return answer;
}
