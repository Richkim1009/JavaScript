// 이터러블 프로토콜
// Well-known Symbol인 Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속 받은
// Symbol.iterator 메서드를 호출하면 이터레터 프로토콜을 준수한 이터레이터를 반환한다.
// 이터러블 프로토콜을 준수한 객체를 이터러블이라 한다.
// for...of문으로 순회할 수 있으며 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.

// 이터레이터 프로토콜
// 이터러블의 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다.
// 이터레이터는 next 메서드를 소유하며 next 메서드를 호출하면 이터러블을 순회하며 value와 done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환
// 이터레이터 프로토콜을 준수한 객체를 이터레이터라 한다.

// 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
const array = [1,2,3];
const [a, ...rest] = array;
console.log(a, rest); // 1, [2,3]

// 이터레이터

// 배열은 이터러블 프로토콜을 준수한 이터러블이다.
const array = [1,2,3];
const iterator = array[Symbol.iterator]();

console.log('next' in iterator); // true

// next 메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환한다.
// 이터레이터 리절트 객체는 value와 done 프로퍼티를 갖는 개체다.
console.log(iterator.next()); // {value: 1, done: false} 마지막객체 다음 객체는 done: true가 된다.

for(const item of [1,2,3]) {
  console.log(item);
}

// 위에 걸 iterable로 바꾸기
const iterable = [1,2,3];
const iterator = iterable[Symbol.iterator]();

for(;;) {
  const res = iterator.next();
  if(res.done) break;
  const item = res.value;
  console.log(item);
}

// 사용자 정의 이터러블 구현
const fibonacci = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;

    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return {value: cur, done: cur => max};
      }
    };
  }
};

for (const num of fibonacci) {
  console.log(num);
}

// 이터러블이면서 이터레이터인 객체를 반환하는 함수
const fibonacciFunc = function(max) {
  let [pre, cur] = [0, 1];

  return {
    [Symbol.iterator]() {return this},
    next() {
      [pre, cur] = [cur, pre + cur];
      return {value: cur, done: cur >= max};
    }
  };
};

let iter = fibonacciFunc(10);
for(const num of iter) {
  console.log(num);
}

// 이터러블이면서 이터레이터이다.
iter = fibonacciFunc(10);
iter.next();