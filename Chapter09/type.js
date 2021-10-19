// 타입 변환이란? 개발자의 의도에 따라 다른 타입으로 변환할 수 있다.
// 개발자가 의도적으로 타입을 변환하는 것을 명시적 타입 변환 or 타입 캐스팅

var x = 10;

var str = x.toString();
console.log(typeof str, str);

console.log(typeof x, x);


// 개발작의 의도와는 상관없이 타입이 변환 하는것을 암묵적 타입 변환 or 타입 강제 변환
var x = 10;
var str = x + '';
console.log(typeof str, str);

console.log(typeof x, x);

//
'10' + 2 // '102'
5 * '10' // 50
!0 // true
if(1) {}

// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가되는 값) 또는 Falsy 값(거짓으로 평가되는 값) 으로 구분
false, undefined, null, 0, -0, NaN, '' // Falsy값

// 문자열 타입으로 변환
String(1);
String(NaN);
String(Infinity);
String(true);
String(false);

// 숫자형 타입으로 변환
Number('0');
Number('-1');
Number('10.53');
Number(true);
Number(false);

// 단축평가
// 논리합 또는 논리곱 연산자 표현식은 언제나 2개의 피연산자중 어느 한쪽으로 평가된다.

'Cat' && 'Dog' // -> Dog
'Cat' || 'Dog' // -> Cat

// 논리곱 연산자와 논리합 연산자는 논리 연산의 결과를 결정하는 피연ㅅ자를 타입 변환하지 않고 그대로 반환한다. 이를 단축 평가라 한다.
// 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말한다.

true || anything // -> true
false || anything // -> anything
true && anything // -> anything
false && anthing // -> false

// 함수 매개변수에 기본값을 설정할때
function getStringLength(str) {
  str = str || '';
  return str.length;
}

// ES6의 매개변수 기본값 설정
function getStringLength2(str = '') {
  return str.length;
}

// 옵셔널 체이닝 연산자 ?.
// 좌항의 피연산자가 null or undefined인 경우 undefined를 반환하고, 아니면 우항의 프로퍼티를 참조를 이어간다.
var elem = null;

var value = elem?.value;
console.log(value); // undefined

// 논리 연산자 &&는 좌항 피연산자가 false로 평가되는 Falsy 값이면 좌항 피연산자를 그대로 반환한다. 하지만 0이나 ''은 객체로
//평가 될때도 있다.

var str = '';
var length = str && str.length;

//  문자열의 길이(length)를 참조하지 못한다.
console.log(length); // ''


var length = str?.length;
console.log(length); // 0

// null 병합 연산자 ??
// 좌항의 피연산자가 null or undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
var foo = null ?? 'default string'

var foo = '' || 'default string';
console.log(foo) // 'default string'

var foo = '' ?? 'default string';
console.log(foo) // ''