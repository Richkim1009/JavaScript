// 이터러블한 객체만 스프레드 문법 가능
const arr = [1,2,3];
Math.max(arr); // 불가능

Math.max(...arr);