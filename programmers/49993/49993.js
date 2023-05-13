//솔루션을 함수를 복붙해주세요
//첫번째 풀이
function solution(skill, skill_trees) {
    var answer = 0;
    const nSkill = skill
        .split('')
        .map((_, i) => i)
        .join('');

    skill_trees.forEach((st) => {
        const skillToNum = st
            .split('')
            .filter((s) => skill.includes(s))
            .map((s) => skill.indexOf(s));
        nSkill.indexOf(skillToNum.join('')) === 0 && answer++;
    });

    return answer;
}

//정규표현식을 이용해 간단하게 표현할 수 있음
//인덱스로 변환할 필요도 없음
//정규표현식 1스택..
function solution(skill, skill_trees) {
    var answer = 0;
    let regExp = new RegExp(`[^${skill}]`, 'g');

    skill_trees.forEach((st) => {
        const removedSkillTree = st.replace(regExp, '');
        (skill.indexOf(removedSkillTree) === 0 || removedSkillTree === '') && answer++;
    });

    return answer;
}
