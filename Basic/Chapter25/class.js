// 클래스는 파스칼 케이스를 사용하는 것이 일반적
class Person {}

// 익명클래스
const Person = class {};

// 기명 클래스 표현식
const Person = class MyClass {};

// 클래스 선언문
class Person {
  // 생성자 
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log('Hello!');
  }
}

// 인스턴스 생성
const me = new Person('Lee');
// 인스턴스 프로퍼티 참조
console.log(me.name);
// 인스턴스 메서드 호출
me.sayHi();
// 정적 메서드 호출
Person.sayHello();

// 클래스 호이스팅

console.log(typeof Person); // function

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
}

class Person {
  // private 필드 정의
  #name = '';
  constructor(name) {
    // private 필드 참조
    this.#name = name;
  }
}

class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Derived extends Base {
  // 암묵적으로 constructor가 정의된다.
  // constructor(...args) {super(...args);}
}

const derived = new Derived(1, 2); // Derived {a: 1, b: 2}

// 서브클래스에서 constructor를 생략하지 않는 경우 서브클래스의 constructor에서 반드시 super를 호출해야 한다.
// 서브클래스의 constructor에서 super를 호출하기 전에 this를 참조할 수 없다.
//