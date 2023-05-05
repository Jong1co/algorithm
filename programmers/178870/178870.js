/**
 * 통과한 풀이
 */
function solution(sequence, k) {
  let answer = [];
  let front = 0;
  let tail = 0;
  let sum = sequence[0];
  let min = Number.MAX_SAFE_INTEGER;

  if (sum === k) return [0, 0];

  while (sequence[front] < k && front < sequence.length) {
    while (sum !== k && tail <= sequence.length) {
      if (sum > k) {
        sum -= sequence[front];
        front++;
      } else {
        tail++;
        sum += sequence[tail];
      }
    }
    if (tail > sequence.length) break;
    if (sum === k) {
      if (min > tail - front) {
        min = tail - front;
        answer = [front, tail];
      }
      sum -= sequence[front];
      front++;
    }
  }

  return answer;
}

/**
 * 실패한 풀이
 */

class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value = null) {
    this.head = new Node(value);
    this.front = 0;
    this.rear = 0;
    this.sum = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    this.sum += value;
    if (this.head.value === null) return (this.head.value = value);

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.rear++;
  }

  dequeue() {
    this.sum -= this.head.value;
    this.head = this.head.next;
    this.front++;
  }
}

function solution(sequence, k) {
  var answer = [];
  const queue = new Queue();
  let index = 0;

  while (index < sequence.length) {
    if (sequence[index] > k) break;
    if (queue.sum < k) {
      queue.enqueue(sequence[index]);
      index++;
    }
    while (queue.sum >= k) {
      if (queue.sum === k) answer.push([queue.front, queue.rear]);
      queue.dequeue();
    }
  }
  let temp = answer.map(([start, end]) => end - start);
  let min = Math.min(...temp);

  return answer[temp.findIndex((v) => v === min)];
}
