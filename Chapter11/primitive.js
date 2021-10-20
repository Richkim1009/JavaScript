// 원시값은 변경 불가능한 값
// 원시 값을 변수에 할당하면 변수에는 실제 값이 저장 <==> 객체 값을 변수에 할당하면 참조 값이 저장
// 원시 값을 갖는 변수를 다른 변수에 할당하면 원시 값이 복사되어 전달 (pass by value)
// 객체 값을 갖는 변수를 다른 변수에 할당하면 참조 값이 복사되어 전달 (pass by reference)

const o = {};
o = []; // 불가능

o.a = 1; // 객체의 프로퍼티는 변경 가능

var score = 80;
var copy = score // pass by value

// pass by value도 사실 값을 복사하는게 아니라 변수에 메모리 주소를 저장하는것이다.

// 얕은 복사와 깊은 복사

const o = {x: {y: 1}};

const c1 = {...o};
console.log(c1 === o);
console.log(c1.x === o.x);