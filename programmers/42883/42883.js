//솔루션을 함수를 복붙해주세요
function solution(number, k) {
    let stack = [];
    for (let num of number) {
        while (stack[stack.length - 1] < num && k > 0) {
            stack.pop();
            k--;
        }

        stack.push(num);
    }
    while (k > 0) {
        stack.pop();
        k--;
    }

    return stack.join('');
}
