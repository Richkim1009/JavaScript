// Object 생성자 함수
const person = new Object();

person.name = 'Lee';
person.sayHello = function() {
  console.log('Hi! My name is ' + this.name);
};

console.log(person);
person.sayHello();

// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

function foo() {
  //console.log(this);
}

foo();
const obj = {foo};
obj.foo();

const inst = new foo();

// new 키워드를 사용하지 않으면 일반 함수로 사용된다.
const circle3 = Circle(15);

console.log(circle3);
console.log(radius);

function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
  return 100; // 명시적으로 원시값을 반환하면 원시값 (100)이 무시되고 this가 반환됨
  return {}; // 명시적으로 객체를 반환하면 this 반환이 무시되고 객체가 반환됨
}

// consturctor, non-constructor

// constructor: 함수 선언문, 함수 표현식, 클래스(클래스도 함수다)
// non-constructor: 메서드, 화살표 함수

// 일반 함수 정의 : 함수 선어문, 함수 표현식
function foo() {}
const bar = function() {};
// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
const baz = {
  x: function() {}
};

new foo(); // true
new bar(); // true
new baz.x(); // true

const arrow = () => {};
new arrow(); // false

// 축약표현이므로 메서드로 인정한다.
const obj = {
  x() {}
};

new obj.x(); // false

// new.target 생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 ES6부터 지원

function Circle(radius) {
  if(!new.target) {
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
}

const circle = Circle(5);
console.log(circle.getDiameter());

// 스코프 세이프 생성자 패턴
function Circle(radius) {
  if(!(this instanceof Circle)) {
    return new Circle(radius);
  };
}

const circle = Circle(5);