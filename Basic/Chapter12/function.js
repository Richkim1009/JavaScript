// 함수를 사용하는 이유는 코드의 재사용성

// 함수 리터럴
var f = function add(x, y) {
  return x + y;
};

// 함수도 객체이며 일반 객체와 다른점은 일반객체는 호출을 할수 없지만 함수는 호출이 가능하다.

// 여러가지 함수 생성 방법

function add1(x, y) {
  return x + y;
}

var add2 = function(x, y) {
  return x + y;
}

var add3 = new Function('x', 'y', 'return x + y');

var add = (x, y) => x + y;

// 함수 선언문은 표현식이 아니다

// 함수리터럴의 이름은 함수 밖에서 부를수 없다 항상 식별자가 있어야 한다.
var x = function test(x, y) {return x + y;};

// 그냥 함수 선언한 함수도 원래는 이름으로 부를수 없다 하지만 JS엔진이 자동으로 식별자를 생성 해준다.
var test = function test(x, y) {return x + y;} == function test(x, y) {return x + y;}

// js의 함수는 객체 타입의 값이며 변수에 할당 할 수도 있고 프로퍼티 값이 될 수도 있으며 배열의 요소가 될수도 있다.
// 이처름 값의 성질을 갖는 객체를 일급 객체라 한다. js 의 함수는 일급 객체다.

// 함수 표현식
var add = function (x, y) {
  return x + y;
}

// 함수 선언문으로 선언된 함수는 선언문보다 먼저 호출할수 있지만 함수 표현식으로 표현한 함수는 표현식보다 먼저 호출할수 없다.

console.log(add) // 가능
console.log(sub) // undefine

function add(x, y) { return x + y; } // 함수 호이스팅
var sub = function (x, y) { return x - y; };

// Function 생성자 함수

var add = new Function('x', 'y', 'return x + y');

// 함수의 정의와 동시에 즉시 호출되는 함수를 즉시 실행 함수 라고 한다.
// 즉시 실행 함수는 단 한 번만 호출되며 다시 호출할 수 없다.
(function() {
  var a = 3;
  var b = 5;
  return a * b;
}());

// 즉시실행함수의 여러가지 사용방법
(function() {}());
(function(){})();
!function(){}();
+function(){}();

// 일반적인 반복문을 이용한 함수
function countdown(n) {
  for(var i = n; i >= 0; i--) console.log(i);
}

// 자기자신을 다시부르는 재귀함수
function countDown(n) {
  if(n < 0) return;
  console.log(n);
  countDown(n - 1);
}

// 중첩 함수
function outer() {
  var x = 1;
  function inner() {
    var y = 2;
    console.log(x + y);
  }
  inner();
}

outer();


// 콜백 함수

function repeat(n) {
  for (var i = 0; i < n; i++) console.log(i);
}

repeat(5);

function repeat(n, f) {
  for(var i = 0; i < n; i++) {
    f(i);
  }
}

var logAll = function (i) {
  console.log(i);
};

repeat(5, logAll);

var logOdds = function (i) {
  if(i % 2) console.log(i);
};

repeat(5, logOdds);

// 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수 라고 한다.
// 매개 변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차함수 라고 한다.

repeat(5, function(i) {
  if(i % 2) console.log(i);
});

// 배열 고차 함수
var res = [1,2,3].map(function(item) {
  return item * 2;
});

res = [1,2,3].filter(function(item) {
  return item % 2;
})

res = [1,2,3].reduce(function(acc, cur) {
  return acc + cur;
}, 0);

// 순수함수 : 부수 효과가 없는 함수
var count = 0;
function increase(n) {
  return ++n;
}
count = increase(count);

// 비순수 함수 : 부수효과가 있는 함수
var count = 0;
function increase() {
  return ++count;
}
increase();