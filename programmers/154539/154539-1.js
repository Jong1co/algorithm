// O(n) 시간으로 풀어야 됨

// 아 그러니까 stack에다가 변하지 않은 인덱스를 쌓을 거야.
// 그리고 미리 answer = -1로 배열을 만들어놔.

// for문 돌면서 인덱스를 추가할건데.
// 0번 인덱스가 1보다 작을 때 stack에서 뽑아서 answer에다가 덮어 씌워주고
// 마지막까지 제거되지 못한 아이는 stack에 남아있게 되는 거지.

function solution(numbers) {
  var answer = new Array(numbers.length).fill(-1);
  var stack = [];
  for (var i = 0; i < numbers.length; i++) {
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}
// function solution(numbers) {
//     var answer = [];
//     let length = numbers.length
//     let index = -1;

//     while(answer.length < length){
//         index++
//         answer.push(numbers[index])

//         for(let i = index + 1; i < length; i++){
//             if(numbers[i] > answer[index]){
//                 answer[index] = numbers[i]
//                 break;
//             }
//         }

//         if(answer[index] === numbers[index]) answer[index] = -1
//     }

//     return answer;
// }
