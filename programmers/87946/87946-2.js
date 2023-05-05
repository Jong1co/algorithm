//피로도 다시 풀기
function solution(k, dungeons) {
    let answer = 0;

    function dfs(k, dungeons, cnt) {
        for (let i = 0; i < dungeons.length; i++) {
            const [min, use] = dungeons[i];
            if (k < min) continue;
            dfs(
                k - use,
                dungeons.filter((d, idx) => idx !== i),
                cnt + 1,
            );
        }
        return (answer = Math.max(cnt, answer));
    }

    dfs(k, dungeons, 0);
    return answer;
}

module.exports = solution;
