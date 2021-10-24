// ES6 모듈
// 자바스크립트 파일이 아닌 ESM임을 명확히 하기 위해 ESM파일 확장자명인 .mjs를 사용한다.
<script type='module' src='app.mjs'></script> 

// 모듈 내에서 선언한 식별자는 모듈 외부에서 참조할 수 없다. 모듈 스코프가 다르기 때문

import * as lib from './lib.mjs';

console.log(lib.pi);
console.log(lib.square(10));

