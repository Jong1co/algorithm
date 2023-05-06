function solution(x) {
    if (x < 0) return false;
    x = String(x);
    for (let i = 0; i < x.length / 2; i++) {
        console.log(x[i], x[x.length - 1 - i]);
        if (x[i] !== x[x.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

module.exports = solution;
