// // 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.

// function foo() {
//   // 일반함수에 this는 전역 객체이다
//   console.log(this);
// }

// var value = 1;

// const obj = {
//   value : 100,
//   foo () {
//     console.log('foo\'s this: ', this);
//     // 콜백 함수 내부의 this에는 전역 객체가 바인딩 된다.
//     setTimeout(function() {
//       console.log("callback's this: ", this); // window
//       console.log("callback's this.value: ", this.value); // 1
//     }, 100);
//   }
// }

// obj.foo();

// const obj = {
//   value : 100,
//   foo() {
//     setTimeout(function() {
//       console.log(this.value);
//       // obj를 bind시켜서 this를 사용하는 방법도 있다.
//     }.bind(this), 100);
//   }
// }

// const person = {
//   name: 'Lee',
//   getName() {
//     return this.name;
//   }
// }

// const anotherPerson = {
//   name: 'kim',
// };

// // 메소드는 호출한 객체에 바인딩이 되어있고 getName 프로퍼티가 함수 객체를 가리키고 있을 뿐이다.
// // 이것도 가능함
// anotherPerson.getName = person.getName;

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function() {
//   return this.name;
// };

// const me = new Person('Lee');

// console.log(me.getName());

// Person.prototype.name = 'Kim';

// console.log(Person.prototype.getName());

// console.log(me.getName());

const person = {
  name: 'Lee',
  foo(callback) {
    setTimeout(callback.bind(this), 100);
  }
};

person.foo(function() {
  console.log(`Hi! my name is ${this.name}.`);
});