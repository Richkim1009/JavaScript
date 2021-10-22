// 화살표 함수

const multiply = (x, y) => x * y;

// 매개변수가 한 개인 경우 소괄호 ()를 생략할 수 있다.
const arrow = x => {};

// 함수 몸체가 하나의 문으로 구성된다면 {}을 생략할 수 있다.
// 화살표 함수도 일급객체이다.
// 화살표 함수는 인스턴스를 생성할 수 없다.
// 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.
// 상위 스코프의 this를 그대로 참조 == lexical this
// 화살표 함수는 자체 this 바인딩을 갖지 않기 때문에 Function.prototype.call, apply, bind메서드를 사용해도
// 화살표 함수 내부의 this를 교체할 수 없다.

window.x = 1;
const normal = function() {return this.x;};
const arrow = () => this.x;

console.log(normal.call({x: 10})); // 10
console.log(arrow.call({x: 10})); // 1
 
// Rest 파라미터
// Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

// Rest 파라미터는 항상 마지막에 와야된다.
function foo(...rest, p1, p2) {};

// Rest 파라미터는 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티에 영향을 주지 않는다.
function foo(...rest) {}; // foo.length == 0

// ES6에서는 rest 파라미터는 args에 배열로 할당
function sum(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}


