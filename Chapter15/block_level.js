// let const는 중복 선언을 하면 문법 에러가 발생한다

// let 키워드로 선언한 변수는 모든 코드 블록을 지역스코프로 인정하는 블록 레벨 스코프를 따른다.
// let 키워드로 선언한 변수는 "선언 단계" 와 "초기화 단계"가 분리되어 진행된다.

var x = 1;
console.log(window.x); // 가능

let y = 1;
console.log(window.y); // 불가능

// const 키워드는 상수를 선언하기 위해 사용한다.
// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.
const foo = 1;

// const 키워드로 선언한 변수는 재할당이 금지된다.
// 상수는 재할당이 금지된 변수를 말한다.

// 상수이름은 대문자로 나타내고 여러단어로 이루어진 경우 _ 를써서 나타낸다.
const TAX_RATE = 0.1;