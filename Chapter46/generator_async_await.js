// 제너레이터
// 코드 블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수다.

// 제너레이터 함수 선언문
function* genDecFunc() {
  yield 1;
}

// 제너레이터 함수 표현식
const genExpFunc = function* () {
  yield  1;
};

// 제너레이터 메서드
const obj = {
  * genObjMethod() {
    yield 1;
  }
};

// 제너레이터 클래스 메서드
class Myclass {
  * genClsMethod() {
    yield 1;
  }
}

// 제너레이터 함수는 화살표 함수로 정의할 수 없다.
// new 연산자와 함께 생성자 함수로 호출할 수 없다.

// 제너레이터 객체
// 제너레이터 함수를 호출하면 일반 함수처럼 함수 코드 블록을 실행하는 것이 아니라 제너레이터 객체를 생성해 반환한다.
// 제너레이터 함수가 반환한 제너레이터 객체는 이터러블이면서 동시에 이터레이터다.

// async/await
// async와 await는 프로미스 기반으로 동작한다.

// async 함수
async function foo(n) {return n;}
foo(1).then(v => console.log(v));

const bar = async function(n) {return n;}
bar(2).then(v => console.log(v));

const baz = async n => n;
baz(3).then(v => console.log(v));

const obj ={
  async foo(n) {return n;}
};
obj.foo(4).then(v => console.log(v));

class MyClass {
  async bar(n) {return n;}
}

const myClass = new MyClass();
myClass.bar(5).then(v => console.log(v));

// await 키워드
async function foo() {
  const a = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
  const b = await new Promise(resolve => setTimeout(() => resolve(2), 2000));
  const c = await new Promise(resolve => setTimeout(() => resolve(3), 1000));
  console.log([a, b, c]);
}

foo(); // 6초가 걸림

// 서로 영향을 주지 않아서 한번에 처리하는 것이 낫다
async function foo() {
  const res = await Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
  ])
}

// 에러 처리
// 콜백 함수를 인수로 전달받는 비동기 함수와는 달리 프로미스를 반환하는 비동기 함수는 명시적으로 호출할 수 있기 때문에 호출자가 명확하다.
// async/await에서 에러 처리는 try...catch 문을 사용할 수 있다.
// async 내부에서 에러처리를 하지 않는 다면 reject하는 프로미스를 반납하기 때문에 후속처리 메소드 .then, .catch를 이용해 처리 가능


