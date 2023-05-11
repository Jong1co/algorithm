function solution(msg) {
    const hash = {};
    let currentIndex = 27;
    let answer = [];

    for (let i = 1; i <= 26; i++) {
        hash[String.fromCharCode(i + 64)] = i;
    }

    for (let i = 0; i < msg.length; i++) {
        let word = msg[i];

        for (let j = i + 1; j < msg.length; j++) {
            word += msg[j];
            if (hash[word] === undefined) {
                hash[word] = currentIndex;
                currentIndex++;
                break;
            }
            if (j === msg.length - 1) {
                answer.push(hash[word]);
                return answer;
            }
        }
        if (word.length > 2) i = i + word.length - 2;
        if (i === msg.length - 1) {
            answer.push(hash[word]);
            return answer;
        }
        answer.push(hash[word.slice(0, -1)]);
    }
    return answer;
}
