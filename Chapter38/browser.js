// script 태그의 async/defer 속성

// async
// HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행된다.
// 단, 자바스크립트의 파싱과 실행은 자바스크립트 파일의 로드가 완료된 직후 진행되며, 이때 HTML 파싱이 중단된다.
// 여러개의 script 태그에 async 어트리뷰트를 지정하면 script 태그의 순서와는 상관없이 로드가 완료된다.
// 순서보장이 필요할때는 사용되면 안된다.

// defer
// HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행된다.
// 단, 자바스크립트의 파싱과 실행은 HTML 파싱이 완료된 직후, 즉 DOM 생성이 완료된 직후 진행된다.