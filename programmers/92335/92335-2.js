//솔루션을 함수를 복붙해주세요

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    let answer = 0;
    n.toString(k)
        .split('0')
        .forEach((num) => {
            if (isPrime(Number(num))) answer++;
        });

    return answer;
}

module.exports = solution;
