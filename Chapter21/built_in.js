// 표준 빌트인 객체, 호스트 개체, 사용자 정의 객체로 구분 된다.

// 문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체 라고 한다.
const str = 'Hello';

// 원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환된다.
console.log(str.length);
console.log(str.toUpperCase());

// 전역 객체
// ES11 에서 globalThis로 통일됨
// window 생략 가능
window.parseInt('F', 16);
parseInt('F', 16);

// var 키워드로 선언한 전역 변수
var foo = 1;

// 선언하지 않는 변수에 값을 암묵적 전역. bar는 전역 변수가 아니라 전역 객체의 프로퍼티다.
bar = 2;

// 함수 안에 있는 선언하지 않은 변수는 전역객체의 프로퍼티가 된다.
// 호이스팅도 되지 않는다.
function foo() {
  y = 20;
}
