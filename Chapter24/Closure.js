// 클로전느 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.

const x = 1;
function outerFunc() {
  const x = 10;
  function innerFunc() {
    console.log(x);
  }
  innerFunc();
}

outerFunc();

const x = 1; // 자유변수

function outer () {
  const x = 10;
  const inner = function() { console.log(x); };
  return inner;
}

const innerFunc = outer();
innerFunc();

// 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다.
// 이러한 중첩 함수를 클로저라고 부른다. inner == closure
// 상위 스코프의 어떤 식별자도 참조하지 않는 함수는 클로저가 아니다.
// 함수가 자유변수에 대해 닫혀있다 라는 의미로 closure 라고 한다.

// 클로저의 활용
// 클로저는 상태를 안전하게 변경하고 유지하기위해 사용한다.
// 상태를 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용

const increase = (function() {
  let num = 0;
  return function() {
    return ++num;
  };
}());

const counter = (function() {
  let num = 0;
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    }
  }
}());

const Counter = (function() {
  let num = 0;
  function Counter() {
    
  }

  Counter.prototype.increase = function() {
    return ++num;
  }

  Counter.prototype.decrease = function() {
    return num > 0 ? --num : 0;
  }

  return Counter;
}());

function makeCounter(predicate) {
  let counter = 0;
  return function() {
    counter = predicate(counter);
    return counter;
  };
}

function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

const increaser = makeCounter(increase);


// 자주 발생하는 실수
var funcs = [];

for (var i = 0; i < 3; ++i) {
  funcs[i] = function() {return i;};
}

for(var j = 0; j < funcs.length; ++j) {
  console.log(funcs[j]());
}

var funcs = [];
for(var i= 0; i < 3; ++i) {
  funcs[i] = (function(id) {
    return function() {
      return id;
    };
  }(i));
}

for(var j = 0; j < funcs.length; ++j) {
  console.log(funcs[j]());
}

