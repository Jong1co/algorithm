//솔루션을 함수를 복붙해주세요

// 런타임 에러..
function solution1(dirs) {
    const xdp = Array.from(Array(10), () => Array(10).fill(false));
    const ydp = Array.from(Array(10), () => Array(10).fill(false));
    let coordinate = [5, 5];
    let answer = 0;

    function controller(dir, coor) {
        switch (dir) {
            case 'U':
                if (coor[1] === 10) return coor;
                !ydp[coor[0]][coor[1]] && answer++;
                ydp[coor[0]][coor[1]] = true;
                return [coor[0], coor[1] + 1];
            case 'D':
                if (coor[1] === 0) return coor;
                !ydp[coor[0]][coor[1] - 1] && answer++;
                ydp[coor[0]][coor[1] - 1] = true;
                return [coor[0], coor[1] - 1];
            case 'L':
                if (coor[0] === 0) return coor;
                !xdp[coor[0] - 1][coor[1]] && answer++;
                xdp[coor[0] - 1][coor[1]] = true;
                return [coor[0] - 1, coor[1]];
            case 'R':
                if (coor[0] === 10) return coor;
                !xdp[coor[0]][coor[1]] && answer++;
                xdp[coor[0]][coor[1]] = true;
                return [coor[0] + 1, coor[1]];
        }
    }

    for (let dir of dirs) {
        coordinate = controller(dir, coordinate);
    }

    return answer;
}

function controller(dir, coor) {
    switch (dir) {
        case 'U':
            if (coor[1] === 10) return coor;
            return [coor[0], coor[1] + 1];
        case 'D':
            if (coor[1] === 0) return coor;
            return [coor[0], coor[1] - 1];
        case 'L':
            if (coor[0] === 0) return coor;
            return [coor[0] - 1, coor[1]];
        case 'R':
            if (coor[0] === 10) return coor;
            return [coor[0] + 1, coor[1]];
    }
}

// 양방향 set에 저장. string 형태로
// dirs 루프 돌고, 마지막에 양방향으로 저장했ㅇ므로 size / 2
function solution(dirs) {
    const set = new Set();
    let coordinate = [5, 5];

    for (let dir of dirs) {
        let newCoordinate = controller(dir, coordinate);
        const pc = coordinate.join('');
        const nc = newCoordinate.join('');

        if (pc === nc) continue;

        set.add(pc + nc);
        set.add(nc + pc);
        coordinate = newCoordinate;
    }
    return set.size / 2;
}

module.exports = solution;
