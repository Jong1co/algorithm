//솔루션을 함수를 복붙해주세요

// 길이가 큰 배열을 찾고 그거에 맞춰서 for문 돌려.
// 합이 10보다 크면 다음 자리에 1 더해줘
// l2에 해당하는 인덱스가 undefined면 0이라고 생각해

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 파람이 연결리스트 형태로 주어짐.
 * 일단 현재 val를 합치고, 재귀함수로 next값을 넘겨 새로운 nextNode를 생성
 * 재귀가 끝나는 순서대로 ListNode가 생성될 것이고, 반환된 ListNode는 이전 노드의 next값으로 들어옴
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const recursion = (l1, l2, add) => {
        if (!l1 && !l2 && !add) return null;
        let total = (l1?.val ?? 0) + (l2?.val ?? 0) + add;
        let nextNode = recursion(l1?.next, l2?.next, Math.floor(total / 10));
        return new ListNode(total % 10, nextNode);
    };
    return recursion(l1, l2, 0);
};

module.exports = addTwoNumbers;
