//솔루션을 함수를 복붙해주세요
// 효율성 불통
// n이 최대 백만
// works는 1000
// 자바스크립트 sort함수 => 최악의 nlogn이 나오게 됨 : 대충 10000번 돌게 되죠 : 최선의 경우 n => 1000번 : 10억 x

function solution(n, works) {
  while (n > 0) {
    works.sort((a, b) => b - a);
    works[0] -= 1;
    n--;
  }

  return works.map((v) => v ** 2).reduce((a, b) => a + b, 0);
}

// sort하는 데에 log(N)이 필요함 => 힙으로 솔트
class Heap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    while (value > this.heap[parentIdx] && parentIdx > 0) {
      let temp = this.heap[parentIdx];
      this.heap[parentIdx] = value;
      this.heap[currentIdx] = temp;

      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;

    while (this.heap[currentIdx] < this.heap[leftIdx] || this.heap[currentIdx] < this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[rightIdx]) {
        let temp = this.heap[currentIdx];
        this.heap[currentIdx] = this.heap[rightIdx];
        this.heap[rightIdx] = temp;
        currentIdx = rightIdx;
      } else {
        let temp = this.heap[currentIdx];
        this.heap[currentIdx] = this.heap[leftIdx];
        this.heap[leftIdx] = temp;
        currentIdx = leftIdx;
      }

      leftIdx = currentIdx * 2;
      rightIdx = currentIdx * 2 + 1;
    }

    return returnValue;
  }
}

function solution(n, works) {
  if (works.reduce((a, b) => a + b) <= n) return 0;
  const heap = new Heap();

  works.forEach((work) => heap.push(work));

  while (n > 0) {
    heap.push(heap.pop() - 1);
    n--;
  }

  return heap.heap.reduce((a, b) => a + b ** 2, 0);
}
