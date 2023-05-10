function solution(m, musicinfos) {
    m = changeHashCode(m);

    let answer = musicinfos.reduce(
        (accr, curr) => {
            let [start, end, title, code] = curr.split(',');
            const playTime = getPlayTime(start, end);

            code = changeHashCode(code);

            if (playTime < code.length) code = code.slice(0, playTime);

            const repeatTime = Math.ceil(playTime / code.length);

            if (code.repeat(repeatTime).includes(m) && playTime > accr.max) {
                return { melody: [playTime, title], max: playTime };
            }
            return accr;
        },
        { melody: [], max: 0 },
    );

    return answer.max === 0 ? '(None)' : answer.melody[1];
}

//----------------------------------------------------------------------------------------

function getPlayTime(start, end) {
    return getTime(end) - getTime(start);
}

function getTime(time) {
    const [hours, minutes] = time.split(':');
    return Number(hours) * 60 + Number(minutes);
}

function changeHashCode(str) {
    let code = '';

    str.split('').forEach((s, i) => {
        if (s === '#') return;
        if (str[i + 1] === '#') {
            return (code += String.fromCodePoint(s.charCodeAt() + 7));
        }
        return (code += s);
    });

    return code;
}

module.exports = solution;
