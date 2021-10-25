// 블록 문 : 중괄호 묶은것, 코드 블록, 블록

// 블록문
{
  var foo = 10;
}

// 제어문
var x = 1;
if(x < 10) {
  x++;
}

// 함수 선언문
function sum(a, b) {
  return a + b;
}

// 조건문 : if else, switch

// 조건식은 boolean값으로 평가될 수 있는 표현식이여야 한다.
if(조건식) {

} else if(조건식) {

} else {

}

var num = 2;
var kind;

// if ... else 문은 삼항 조건 연사자로 바꿀수 있다.
if(num > 0) {
  kind = '양수';
} else {
  kind = '음수';
}

var result = num > 0 ? '양수' : '음수'


if(num > 0) {
  kind = '양수';
} else if(num < 0) {
  kind = '음수';
} else {
  kind = '영';
}

// switch 문

switch(표현식) {
  case 표현식1:
    실행문
    break;
  case 표현식2:
    실행문
    break;
  default:
    실행문
    break;
}

// 반복문 for, while, do ... while : 평가 결과가 참인 경우 코드블록을 실행한다.
// js에는 배열 순회 forEach, 객체 프로퍼티를 열거할 때 사용하는 for ... in, ES6에 도입된 이터러블 순회 for...of 

// for 문
for (변수 선언문 또는 할당문; 조건식; 증감식) {
  조건식이 참인 경우 반복 실행될 문;
}

// 무한 반복
for(;;) {}

``
// while : 조건식이 참일때 반복한다.
while(조건식) {}

// do ... while : 무조건 한번은 실행하는 반복문
do {

} while(조건식);

// continue : console.log문장을 실행하지 않는다.
for (var i = 0; i < 10; i++) {
  continue;
  console.log(i);
}
