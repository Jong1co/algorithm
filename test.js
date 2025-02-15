class MaxHeap {
  heap = [0];

  constructor() {}

  push(data) {
    this.heap.push(data);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (currentIndex > 1 && this.heap[parentIndex] < this.heap[currentIndex]) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) return 0;
    if (this.heap.length === 2) return this.heap.pop();

    const maxValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let left = currentIndex * 2;
    let right = currentIndex * 2 + 1;

    while ((this.heap[left] && this.heap[currentIndex] < this.heap[left]) || (this.heap[left] && this.heap[currentIndex] < this.heap[right])) {
      if (current < this.heap[left]) {
        const current = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[left];
        this.heap[left] = current;

        currentIndex = left;
        left = currentIndex * 2;
        right = currentIndex * 2 + 1;
      } else {
        const current = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[right];
        this.heap[right] = current;

        currentIndex = right;
        left = currentIndex * 2;
        right = currentIndex * 2 + 1;
      }
    }

    while ((this.heap[left] && this.heap[currentIndex] < this.heap[left]) || (this.heap[right] && this.heap[currentIndex] < this.heap[right])) {
      if (!this.heap[right] || this.heap[left] > this.heap[right]) {
        [this.heap[currentIndex], this.heap[left]] = [this.heap[left], this.heap[currentIndex]];
        currentIndex = left;
      } else {
        [this.heap[currentIndex], this.heap[right]] = [this.heap[right], this.heap[currentIndex]];
        currentIndex = right;
      }
      left = currentIndex * 2;
      right = currentIndex * 2 + 1;
    }

    return maxValue;
  }
}

function solution(n, works) {
  const maxHeap = new MaxHeap();

  // 작업량을 Max Heap에 삽입
  works.forEach((work) => maxHeap.push(work));

  // n시간 동안 가장 큰 작업량을 줄임
  while (n > 0) {
    let maxWork = maxHeap.pop();
    if (maxWork === 0) break;
    maxHeap.push(maxWork - 1);
    n--;
  }

  // 야근 피로도 계산
  return maxHeap.heap.reduce((sum, work) => sum + work ** 2, 0);
}
