// 자바스크립트를 이루고 있는 거의 "모든 것"이 객체다

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const circle1 = new Circle(1);

// __proto__ 접근자 프로퍼티
// 모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다.

const obj = {};
const parent = {x : 1};

obj.__proto__ = parent;
console.log(obj.x);

// __proto__ 보다는 Object.getPrototypeOf(obj)와 Object.setPrototypeOf(obj)를 권장한다.

// prototype 프로퍼티는 생성자 함수가 생성할 객체의 프로토타입을 가리킨다.
(function () {}).hasOwnProperty('prototype'); // true
({}).hasOwnProperty('prototype'); // null

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('Lee');

me.sayHello();

const Person = ((function() {
  function Person(name) {
    this.name = name;
  }

  // 생성자 함수의 prototype 프로퍼티를 통해 포로토타입을 교체
  Person.prototype = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    }
  };

  return Person;
})());

const me = new Person('Lee');
// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다. (객체 리터럴은 constuctor가 없다)
console.log(me.constructor === Person); // false
console.log(me.constructor === Object); // true

// 생성자 함수에 의한 프로토타입 교체
const Person = ((function() {
  function Person(name) {
    this.name = name;
  }

  // 생성자 함수의 prototype 프로퍼티를 통해 포로토타입을 교체
  Person.prototype = {
    // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
    constructor: Person,
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    }
  };

  return Person;
})());

console.log(me.constructor === Person); // true
console.log(me.constructor === Object); // false

// instanceof 연산자
function Person(name) {
  this.name = name;
}

const me = new Person('Lee');

console.log(me instanceof Person); // true
console.log(me instanceof Object); // true

function Person(name) {
  this.name = name;
}

const me = new Person('Lee');

const parent = {};

// 인스턴스에 의한 프로토타입 교체
Object.setPrototypeOf(me, parent);

console.log(Person.prototype === parent); // false
console.log(parent.constructo === Person); // false
console.log(me instanceof Person); // false;
console.log(me instanceof Object) // true;

function Person(name) {
  this.name = name;
}

const me = new Person('Lee');
const parent = {};

Object.setPrototypeOf(me, parent);

Person.prototype = parent;

console.log(me instanceof Person); // true
console.log(me instanceof Object); // true

// instanceof 연산자는 constructor프로퍼티가 가리키는 생성자 함수를 찾는 것이 아니라
// 생성자 함수의 prototype에 바인딩된 객체가 프로토타입 체인상에 존재하는지 확인한다.

// instanceof 연산자를 함수로 표현
function isInstanceOf(instance, constructor) {
  const prototype = Object.getPrototypeOf(instance);
  // prototype이 null이면 프로토타입 체인의 종점에 다다른 것이다.
  if (prototype === null) return false;
  
  return prototype === constructor.prototype || isInstanceOf(prototype, constructor);
}

const Person = (function() {
  function Person(name) {
    this.name = name;
  }

  Person.prototype = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    }
  };

  return Person;
}());

const me = new Person('Lee');

console.log(me.constructor === Person); // false
console.log(me instanceof Person); // true
console.log(me instanceof Object); // true

// 직접상송
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null);
console.log(obj.toString());

obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

obj = Object.create(Object.prototype, {
  x: {value: 1, writable: true, enumerable: true, configurable: true}
});

// 객체 리터럴 내부에서 __proto__에 의한 직접 상속
const myProto = {x: 10};

const obj = {
  y: 20,
  __proto__: myProto
};

console.log(obj.x, obj.y);
console.log(Object.getPrototypeOf(obj) === myProto);

// in연산자 
// 확인 대상 객체의 프로퍼티뿐만 아니라 확인 대상 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인하므로 주의가 필요
// ES6의 Relfect.has와 같다

// for in 문
// property key가 심벌인 프로퍼티는 열거하지 않는다.
const person = {name: 'Lee', address: 'Seoul'};

for(const key in person) {
  console.log(key + ': ' + person[key]);
}

// 배열에는 for in문을 사용하지 말고 for, for of, forEach문을 사용하도록 한다.
const arr = [1,2,3];
arr.x = 10;

for(const i in arr) {
  console.log(arr[i]);
};

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(v => console.log(v));

for(const value of arr) {
  console.log(value);
}

// 객체 자산의 고유 프로퍼티만 열거하기 위해서는 for in문 보다는 Object.entries를 사용한다.

