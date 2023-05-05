function solution(k, dungeons) {
    let answer = 0;

    const dfs = (k, dungeons, clear) => {
        for (let i = 0; i < dungeons.length; i++) {
            const [min, use] = dungeons[i];
            if (min === null || min > k) continue;
            const clone = [...dungeons].map((v) => [...v]);
            clone[i] = [null, null];
            dfs(k - use, clone, clear + 1);
        }
        return (answer = Math.max(clear, answer));
    };

    dfs(k, dungeons, 0);
    return answer;
}
