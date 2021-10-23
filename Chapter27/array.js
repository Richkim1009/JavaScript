// 배열은 object 타입이다.

// js의 배열은 배열의 요소가 연속적으로 이어져 있지 않는 배열을 희소 배열이라 한다.
// js의 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체 (해쉬테이블로 구성) 요소를 삽입, 삭제가 일반적인 배열보다 빠른성능 기대

// Array of
Array.of(1); // [1]
Array.of(1,2,3); // [1,2,3]

// Array from
Array.from({length: 2, 0: 'a', 1: 'b'}) // ['a','b']
Array.from('Hello') // ['H','e','l','l','o']

// Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환
Array.from({length: 3}, ((_, i) => i));

// 유사 배열 객체 : 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다.
const arrayLike = {
  '0' : 'apple',
  '1' : 'banana',
  '2' : 'orange',
  length: 3
};

// 유사 배열 객체는 마치 배열처럼 for 문으로 순회할 수도 있다.
for(let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
}

// 인덱스로 요소에 접근하여 명시적으로 값을 할당하지 않는 요소는 생성되지 않는다.
const arr = [0];
arr[1] = 1;
arr[100] = 100;
console.log(Object.getOwnPropertyDescriptors(arr)); // '0', '1', '100', 'length'가 나온다.

arr['foo'] = 3; // foo: 3 이렇게 객체 처럼 들어간다.

// delete로 요소 삭제 가능
// delete를 사용하지 않는것이 좋다 slice를 이용하자

// 원본 배열을 변경하는 메서드와 새로운 배열을 생성하여 반환하는 메서드가 있다.
const arr = [1];
arr.push(2); // 원본 배열을 직접 변경
const result = arr.concat(3); // 새로운 배열을 생성 해서 반환

// 자주사용하는 Array메서드
Array.isArray() // 배열인지 아닌지 검사해서 불리언값을 리턴한다.
Array.prototype.indexOf() // 배열에 요소가 있다면 첫 번째로 검색된 요소의 인덱스를 반환, 없으면 -1을 반환
Array.prototype.includes() // indexOf와 같음
Array.prototype.unshift() // 인수로 전달받은 모든 값을 원본 배열의 선두에 넣고 변경된 length를 반환한다.
Array.prototype.shift() // 첫번째 요소를 제거하고 제거한 요소를 반환한다.
Array.prototype.concat() // 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환
// concat은 ES6의 스프레드 문법으로 대체 가능하다.
let result = [1,2].concat([3,4]);
result = [...[1,2], ...[3,4]];
Array.prototype.splice(1, 2, 20, 30); // 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 넣는다.
Array.prototype.slice(start, end) // 인수로 전달된 범위의 요소들을 복사하여 배열로 반환
Array.prototype.join() // 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열, 즉 구분자로 연결한 문자열을 반환한다.
Array.prototype.fill() // 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다.
Array.prototype.includes(1, 1) // 배열에 요소 1이 포함되어있는지 1부터 확인한다.
Array.prototype.flat(); // [1,[2,3,4,5]].flat(); -> [1,2,3,4,5] 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화

// 배열의 고차 함수
// 불변성을 지향하는 함수형 프로그래밍에 기반을 둠
Array.prototype.sort() 
// 숫자일때 : 정렬 순서를 정의하는 비교 함수를 인수로 전달 (a, b) => a - b 오름차순, (a, b) => b - a 내림차순
// 객채를 요소로 같은 배열일때 : return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0))
Array.prototype.forEach(콜백함수) // 중간에 break, continue 사용불가
[1,2,3].forEach((item, index, arr) => {})
Array.prototype.map((item, index, arr) => {}) // 콜백 함수의 반환깞들로 구서오딘 새로운 배열을 반환한다.
Array.prototype.filter((item, index, arr) => {}) // 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
Array.prototype.reduce((초기값, 현재값, index, arr) => 초기값 + 현재값, 0) // reduce는 하나의 값만 반환한다.
Array.prototype.some() // 콜백 함수의 반환값이 단 한 번이라도 참이면 true, 아니면 false를 반환한다.
Array.prototype.every() // 콜백 함수의 반환값이 전부다 참이면 true, 아니면 false를 반환한다.
Array.prototype.find() // 콜백 함수의 반환값이 true인 첫 번째 요소를 반환한다.
Array.prototype.findIndex() // 콜백 함수의 반환값이 true인 첫번째 요소의 인덱스를 반환한다.
Array.prototype.flatMap() // .map과 .flat을 합한 것, 1단계만 평탄화한다.

 