// 구조 분해 할당

// 배열 디스트럭처링 할당의대상(할당문의 우변)은 이터러블이어야 하며, 할당 기준은 배열의 인덱스다.

const arr = [1,2,3];
const [one, two, three] = arr;

// 기본값 설정 가능
const [a, b, c = 3] = [1, 2];
