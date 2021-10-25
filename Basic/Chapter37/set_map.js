// Set
// set객체는 중복되지 않는 유일한 값들의 집합이다.
// set 새엇ㅇ자 함수는 이터러블을 인수로 전달받아 set 객체를 생성한다.
// 이때 이터러블의 중복된 값은 set 객체에 요소로 저장되지 않는다.

const uniq = array => [...new Set(array)];
console.log(uniq([2,1,2,3,4,3,4]));

// 요소 개수 확인
const {size} = new Set([1,2,3,3]);
console.log(size);

// 요소 추가
const set = new Set();
set.add(1).add(2); // 체이닝 가능

// 요소 존재 여부 확인
set.has(2); // true
// 요소 삭제
set.delete(2); // return true

// 요소 일괄 삭제
set.clear();

// 요소 순회
set.forEach((v, v2, set) => console.log(v, v2, set)); // v, v2는 현재 순회 중인 요소값이다 같은 값이다.

// set 객체는 이터러블이다.
// for...of 사용가능, 스프레드 문법과 배열 디스트럭처링의 대상이 될 수 있다.

// 교집합 구하기
Set.prototype.intersection = function(set) {
  return new Set([...this].filter(v => set.has(v)));
};

// 합집합 구하기
Set.prototype.union = function(set) {
  return new Set([...this, ...set]);
};

// 차집합 구하기
Set.prototype.difference = function(set) {
  return new Set([...this].filter(v => !set.has(v)));
};

// 부분 집합과 상위 집합
Set.prototype.inSuperset = function (subset) {
  const supersetArr = [...this];
  return [...subset].every(v => supersetArr.includes(v));
};

// Map
// map 객체는 키와 값의 쌍으로 이루어진 컬렉션이다.
// 객체와 유사하지만 이터러블이 포함된다.
// map 생성자 함수는 이터러블을 인수로 전달받아 map 객체를 생성한다.
// 인수로 전달되는 이터러블은 키와 값의 쌍으로 이루어진 요소를 받는다.
const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);

// 요소 개수 확인
const {size} = map1;

// 요소 추가
map1.set('key3', 'value3');

// 요소 존재 여부 확인
map1.has('key1'); // true

// 요소 삭제
map1.delete('key2'); // return true

// 요소 일괄 삭제
map1.clear();

// 요소 순회
map1.forEach((v, k, map) => console.log(v, k, map)); // v: 요소값, k: 요소키, map: this
