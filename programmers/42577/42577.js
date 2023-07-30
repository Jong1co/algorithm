//솔루션을 함수를 복붙해주세요
/**
1. bruce force
phone_book 리스트 한 개 요소마다 전체 리스트를 돌면서 비교한다 => O(N * N) 
최적화:  시그마를 사용해서 n * (n + 1) / 2 가능 그럼에도 100만이니까 좋지 않음
공간복잡도 : x ?

2. 해시테이블
sort한 후에, 하나씩 대입해보면서 비교 
20 * n => O(N), 공간복잡도가 커지겠네 O(N)

3. 사실 문자열로 sort한 후에 다음 것만 비교하면 됐었음
function solution(phoneBook) {
    return !phoneBook.sort().some((t,i)=> {
        if(i === phoneBook.length -1) return false;

        return phoneBook[i+1].startsWith(phoneBook[i]);        
    })
}
*/

function solution(phone_book) {
  const hash = {};
  phone_book.sort((a, b) => a - b);

  for (let i = 0; i < phone_book.length; i++) {
    let result = '';
    for (let num of phone_book[i]) {
      result += num;
      if (hash[result]) return false;
    }
    hash[result] = true;
  }

  return true;
}
