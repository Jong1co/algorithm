//솔루션을 함수를 복붙해주세요
function solution(lands) {
    return Math.max(
        ...lands.reduce(
            (a, land) => {
                return [
                    land[0] + Math.max(a[1], a[2], a[3]),
                    land[1] + Math.max(a[0], a[2], a[3]),
                    land[2] + Math.max(a[1], a[0], a[3]),
                    land[3] + Math.max(a[1], a[2], a[0]),
                ];
            },
            [0, 0, 0, 0],
        ),
    );
}
