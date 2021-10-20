// 전역변수의 검색 속도가 가장 느리다
// 다른 파일에 있더라도 변수 이름이 같으면 예상하지 못하는 결과를 가져오기도 한다.

// 즉시 실행함수
(function () {
  var foo = 10;
}());

// 네임스페이스 객체
var MYAPP = {};
MYAPP.name = 'LEE';

// 모듈 패턴
var Counter = (function() {
  var num = 0;
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    }
  };
}());

// ES6 모듈

// ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다.Counter