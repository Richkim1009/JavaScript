// ***** 단축 평가 *****
// &&
// 왼쪽에서 오른쪽으로 평가를 한다.
// 왼쪽이 참이라면 오른쪽 값을 반환하고
'cat' && null; // null
'cat' && 'dog'; // 'dog'

// 왼쪽이 거짓이라면 왼쪽을 반환한다.
null && undefined; // null
undefined && 'cat' // undefined


// ||
// 왼쪽에서 오른쪽으로 평가를 한다.
// 왼쪽이 참이면 왼쪽 값을 반환한다.
'cat' || 'dog' // cat

// 왼쪽값이 거짓이고 오른쪽값이 참이면 오른쪽 값을 리턴한다.
null || 'dog' // dog

// 왼쪽도 거짓 오른쪽도 거짓이면 왼쪽값을 반환한다.
null || undefined





// ***** 객체 *****
// 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열
obj['property'];

// const로 상수화를 하여도 동적으로 프로퍼티를 생성할 수 있다.
const a = {};
a.age = 12;





// ***** 함수 *****
// 함수 선언문으로 생성을 하면 함수 호이스팅이 적용된다.
// 함수 표현식으로 생성을 하면 변수 호이스팅이 적용된다.
// 함수는 렉시컬 스코프를 따지므로 함수를 어디서 정의 했냐에 따라 상위 스코프를 결정





// ***** 전역 변수 *****
// 모듈 패턴
// 즉시 실행함수로 클로저를 이용한 변수 은닉화
var Counter = (function () {
  var num = 0; // 변수 은닉
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    }
  }
})





// ***** 생성자 함수에 의한 객체 생성 *****
// this
// 일반 함수로서 호출: 전역객체
// 메서드로서 호출: 메서드를 호출한 객체(마침표 앞의 객체)
// 생성자 함수로서 호출: 생성자 함수가 생성할 인스턴스
// 생성자 함수의 메서드를 생성할때는 꼭 this.으로 시작하자.
function Circle(radius) {
  this.radius = radius;
  this.getArea = function() {
    return Math.PI * this.radius ** 2;
  }
}




// ***** 프로토타입 *****
// 다른 객체지향 언어의 상속기능이다.
// 생성자 함수에서 프로토타입 적용시키기
function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.getArea = function() {
  return Math.PI * this.radius ** 2;
};

// 인스턴스에서 프로토타입 접근하기
const circle1 = new Circle(5);
circle1.__proto__ = parent;

// getProperty와 setProperty를 사용해 접근하자

// 프로토타입의 constructor 프로퍼티와 생성자 함수
// 객체의 프로토타입은 constructor와 같다

// 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다.

// 생성자 함수에 의한 프로토타입의 교체
const Person = (function() {
  function Person(name) {
    this.name = name;
  }

  Person.prototype = {
    constructor: Person,

    sayHello() {
      console.log(this);
    }
  };

  return Person;
}()); // 객체 리터럴에는 constructor가 없기 때문에 따로 설정을 해줘야함

// 인스턴스에 의한 프로토타입의 교체
function Person(name) {
  this.name = name;
}

const me = new Person('Lee');
const parent = {
  constructor: Person,
  sayHello() {
    console.log(this);
  }
};

Object.setPrototypeOf(me, parent);

// 객체 리터럴 내부에서는 __proto__로 상속
const obj = {
  y: 20,
  __proto__: myProto
};