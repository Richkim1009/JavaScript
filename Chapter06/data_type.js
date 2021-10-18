// js는 7개의 데이터 타입을 제공함
// number, string, boolean, undefined, null, symbol, 객체타입

// number 은 64비트 부동소수점 형식, 저장은 2진수로 참조하면 10진수로 해석
var integer = 10;
var double = 10.12;
var negative = -20;

var binary = 0b100001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수


console.log(1 === 1.0); // 참
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

console.log(10 / 0) // Infinity
console.log(10 / -0) // -Infinity
console.log(1 * 'String') // NaN

// js는 대소문자를 구분한다.
var x = nan; // ReferenceError: nan is not defined

// string UTF-16의 집합으로 전 세계 대부분의 문자를 표현함
// '', "", ``으로 사용 가능
var string;
string = '문자열';
string = "문자열";
string = `문자열`;

// 따옴표로 감싸지 않은 hello를 식별자로 인식한다.
var string = hello;

// 템플릿 리터럴, 멀티라인 문자열이 가능하다.
var template = `template literal`;

var first = 'Ung-mo';
var last = 'Lee';

// 문자열을 삽입할때 + 를 사용한다.
console.log('My name is ' + first + ' ' + last + '.');

// es6 문자열 삽입
console.log(`My name is ${first} ${last}.`);

// 불리언 타입
var foo = true;
console.log(foo);

foo = false;
console.log(foo);

// undefined 타입
var foo;
console.log(foo);

// null 타입
var foo = 'Lee';
foo = null;

// symbol 타입, 
var key = Symbol('key');

var obj = {};

obj[key] = 'value';
console.log(obj[key]);

// 객체 타입
// js를 이루고 있는 거의 모든 것이 객체
foo = {}; // object

foo = []; // object

foo = function() {}; // function

// 자바스크립트는 변수 선언이 아니라 할당에 의해 타입이 결정된다. 그리고 재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.
// 동적 타이핑이라고 한다.



