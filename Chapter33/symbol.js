// 심벌은 변경 불가능한 원시타입의 값
// 심벌은 Symbol함수를 호출하여 생성 해야한다.
// 다른 값과 절대 중복되지 않는 유일무이한 값이다.

const mySymbol = Symbol();

// 심벌값은 암묵적으로 문자열이나 숫자 타입으로 변환되지 않는다.
// 단, 불리언 타입으로는 암묵적으로 타입 변환된다.

// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
const s1 = Symbol.for('mySymbol');
// 전역 심벌 ㄹ레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 있으면 해당 심벌 값을 반환
const s2 = Symbol.for('mySymbol');

s1 == s2; // true

// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
Symbol.keyFor(s1); // -> mySymbol

// Symbol 함수를 호출하여 생성한 심벌 값은 전역 심벌 레지스트리에 등록되어 관리되지 않는다.
const s3 = Symbol('foo');

// 상수 이름 자체에 의미가 있을때 유일무의한 값인 Symbol을 사용하는게 좋다
const Direction = {
  UP: Symbol('up'),
  DOWN: Symbol('down'),
  LEFT: Symbol('LEFT'),
  RIGHT: Symbol('RIGHT')
};

const myDirection = Direction.UP;

// 심벌 값으로 프로퍼티키 생성
const obj = {
  // 생성할땐 배열처럼
  [Symbol.for('mySymbol')]: 1
};
// 부를때도 배열처럼
obj[Symbol.for('mySymbol')];

// 심벌 값으로 프로퍼티키를 생성하면 은닉할 수 있다.
// 하지만 ES6에서 도입된 Object.getOwnPropertySymbols를 사용하면 심벌값을 프로퍼티키로 사용할 수 있다.

