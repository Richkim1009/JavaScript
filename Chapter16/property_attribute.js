// const o = {};
// o.[[Prototype]]
// o.__proto__;

// js 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
// 프로퍼티 어트리뷰트란 자바스크립트 엔진이 관리하는 내부 상태 값인 내부 슬롯 [[value]], [[Writeable]], [[Enumerable]], [[Configurable]]
// Object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인할 수는 있다.

const person = {
  name : 'Lee',
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
person.age = 20;
console.log(Object.getOwnPropertyDescriptors(person));

// 점근자 프로퍼티
// 자체적으로는 값을 갖지 않고 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다. (getter, setter)

const human = {
  firstName: 'Ungmo',
  lastName: 'Lee',

  get fullName() {
    return `${this.fristName} ${this.lastName}`; 
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');

Object.getOwnPropertyDescriptor(function() {}, 'prototype');


// 프로퍼티 정의
const person2 = {};

Object.defineProperty(person2, 'firstName', {
  value: 'Ungmo',
  writable: true,
  enumerable: true,
  configurable: true
});

// 객체 확장 금지

const person3 = { name : 'Lee'};

console.log(Object.isExtensible(person3));

Object.preventExtensions(person3);

console.log(Object.isExtensible(person3));

person3.age = 20;
console.log(person3);

delete person3.name;
console.log(person3);
// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
Object.defineProperty(person3, 'age', {value: 20});

// 객체 밀봉 => 읽기와 쓰기만 가능
Object.seal(person);

// 객체 동결 => 읽기만 가능
Object.freeze(person);

// 중첩 객체의 동결
function deepFreeze(target) {
  if (target && typeof target === 'object' && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach(key => deepFreeze(target[key]));
  }
  return target;
}
