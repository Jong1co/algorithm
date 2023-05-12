//솔루션을 함수를 복붙해주세요
// 무조건 들어와야 나갈 수 있음
// 홀수라는 뜻 -> 마지막까지 나가지 않았다는 뜻.
// 마지막에 23:59 OUT시간 추가해주면 됨

/**
 * 풀이 방식:
 * 1. hash로 자동차 분류함
 * 2. 누적시간 매핑함 -> 홀수일 경우 23:59 추가해야 함
 * 3. 차량번호가 작은 순서대로 정렬
 */
function solution(fees, records) {
    const [기본시간, 기본요금, 단위시간, 단위요금] = fees;
    let answer = [];
    let map = {};

    records.reduce((accr, record) => {
        const [time, carNum] = record.split(' ');
        if (accr[carNum]) {
            accr[carNum].push(timeToMinutes(time));
            return accr;
        }

        accr[carNum] = [timeToMinutes(time)];
        return accr;
    }, map);

    Object.keys(map)
        .sort((a, b) => a - b)
        .forEach((carNum) => {
            let time = 0;
            time = map[carNum].reduce((accr, curr, i) => {
                return (accr += curr * (isOdd(i) ? 1 : -1));
            }, 0);
            if (isOdd(map[carNum].length)) {
                time += timeToMinutes('23:59');
            }
            answer.push(time < 기본시간 ? 기본요금 : 기본요금 + Math.ceil((time - 기본시간) / 단위시간) * 단위요금);
        });

    return answer;
}

function isOdd(num) {
    return num % 2 === 1;
}

function timeToMinutes(time) {
    const [hours, minutes] = time.split(':');
    return Number(hours) * 60 + Number(minutes);
}

//------------------------------------------------------------------------------------------------

function solution(fees, records) {
    const [기본시간, 기본요금, 단위시간, 단위요금] = fees;
    let answer = [];
    let map = {};

    records.reduce((accr, record) => {
        const [time, carNum] = record.split(' ');
        if (accr[carNum]) {
            accr[carNum].count++;
            accr[carNum].time += timeToMinutes(time) * (isOdd(accr[carNum].count) ? -1 : 1);
            return accr;
        }

        accr[carNum] = { count: 1, time: timeToMinutes(time) * -1 };
        return accr;
    }, map);

    Object.keys(map)
        .sort((a, b) => a - b)
        .forEach((carNum) => {
            let { count, time } = map[carNum];

            if (isOdd(count)) time += timeToMinutes('23:59');
            answer.push(time < 기본시간 ? 기본요금 : 기본요금 + Math.ceil((time - 기본시간) / 단위시간) * 단위요금);
        });

    return answer;
}

function isOdd(num) {
    return num % 2 === 1;
}

function timeToMinutes(time) {
    const [hours, minutes] = time.split(':');
    return Number(hours) * 60 + Number(minutes);
}

solution([180, 5000, 10, 600], ['05:34 5961 IN', '06:00 0000 IN', '06:34 0000 OUT', '07:59 5961 OUT', '07:59 0148 IN', '18:59 0000 IN', '19:09 0148 OUT', '22:59 5961 IN', '23:00 5961 OUT']);

module.exports = solution;
