'use strict'
// 객체는 key : value로 사용하며, 프로퍼티와 메소드로 되어있다.
// 객체 리터릴 방식의 생성
var obj = {
  money : 0, // 프로퍼티
  name : 'kim', // 프로퍼티
  name : function() { // 메소드
    console.log(`my name is ${this.name}`)
  }
};

// 문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다. 이때는 []을 사용하여야 한다.
var obj = {};
var key = 'hello';

obj[key] = 'world';

console.log(obj);

// key 값에 문자열이나 심벌 값 외의 값을 사용하면 암묵적 타입변환을 통해 문자열이 된다.
// 예약어를 key 값으로 사용해도 에러가 발생하진 않는다.
// 이미 존재하는 key 값을 중복 으로 선언하면 먼저 선언한 걸 덮어 씌운다.

// 프로퍼티를 접근하는 방법은 . or []을 사용한 방법이 있다.

var person = {
  name: 'Lee',
}

console.log(person.name);
console.log(person['name']);

// key 가 식별자 네이밍 규칙을 준수하지 않았으면 무조건 []를 이용해서 사용해야 한다.
var person ={
  'last-name' : 'Lee',
  1 : 10
}

// 문자열은 ''를 붙여줘야함
person['last-name'];

// 숫자는 둘다가능
person[1];
person['1'];

// 프로퍼티 삭제
var person = {
  name : 'Lee'
};

person.age = 20;


delete person.age;
// 없는 것은 아무런 행동을 하지 않음
delete person.adress;

// ES6에서는 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일때 프로퍼티 키를 생략 할 수 있다.

let x = 1, y = 2;
const obj = {x, y};

console.log(obj); // {x:1, y:2}

// 계산된 프로퍼티 이름

var prefix = 'prop';
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성 무조건 []를 써야함
// ES5
obj[prefix + '-' + ++i] =  i;
obj[prefix + '-' + ++i] =  i;
obj[prefix + '-' + ++i] =  i;
console.log(obj);
// ES6
const prefix = 'prop';
let i = 0;

const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
}

console.log(obj);

// 메소드 축약
// ES5
var obj = {
  name : 'Lee',
  sayHi: function() {
    console.log('Hi!' + this.name);
  }
};

// ES6
const obj = {
  name: 'Lee',
  sayHi() {
    console.log('Hi!' + this.name);
  }
};

