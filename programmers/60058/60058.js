class Node {
  constructor() {
    this.node = { u: null, v: null, corret: false };
  }
}

class BinaryTree {
  constructor(p) {
    this.root = new Node();
    this.divide(p, this.root.node);
  }

  divide(p, node) {
    let sum = 0;
    let idx = 0;
    for (let bracket of p) {
      bracket === '(' ? sum++ : sum--;
      idx++;
      if (sum === 0) break;
    }
    node.u = p.slice(0, idx);
    node.v = p.slice(idx);
  }

  isCorret(brackets) {
    let sum = 0;
    for (let bracket of brackets) {
      bracket === '(' ? sum++ : sum--;
      if (sum < 0) return false;
    }

    return sum === 0;
  }
}

function solution(p) {
  if (p === '') return '';
  const binaryTree = new BinaryTree(p);
  console.log(binaryTree);
}

module.exports = solution;

/**
1. 빈 문자열일 경우 빈문자열 반환 O

2. 균형잡힌 괄호 문자열을 u, v로 분리함 
    => u는 더이상 균형잡힌 괄호 문자열로 분리할 수 없음
    => 분리할 수 없는 경우
        1. 짝이 맞는 순간 u에 할당.
        2. u에 할당한 값이 "올바른 괄호 문자열"인지 판별
            2-1. 올바른 괄호 문자열이라면 u 반환 + v로 재귀 실행
            2-2. 올바른 괄호 문자열이 아니라면 u로 재귀 수행
            
즉 재귀가 두개가 필요한거네.
u를 올바른 괄호 문자열로 변환하는 과정의 재귀와
u가 끝난 후 v로 들어갈 재귀
*/
