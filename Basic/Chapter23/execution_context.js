// js는 소스코드의 평가, 소스코드의 실행 과정으로 나누어져 있다.
var x; // 소스코드의 평가
x = 1; // 소스코드의 실행

// 코드가 실행되려면 스코프, 식별자, 코드 실행 순서

// 실행 컨텍스트 스택
const x = 1;
function foo() {
  const y = 2;
  function bar () {
    const z = 3;
    console.log(x + y + z);
  }
  bar();
}

foo();
// x, foo() 전역실행 컨텍스트에 등록 -> foo()함수 실행컨텍스트 -> y, bar() 함수 실행 컨텍스트에 등록 -> bar() 실행

// 렉시컬 환경 입니다.
