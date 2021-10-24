// JSON.stringify
// 객체를 JSON 포맷의 문자열로 변환한다.
// 배열도 JSON 포맷의 문자열로 변환한다.

// JSON.parse
// JSON 포맷의 문자열을 객체로 변환한다.


// XMLHttpRequest
// XMLHttpRequest 객체는 생성자 함수를 호출하여 생성한다.
const xhr = new XMLHttpRequest();
// HTTP 요청 초기화
xhr.open('GET', '/users');
// HTTP 요청 헤더 설정
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정: json
xhr.setRequestHeader('content-type', 'application/json');

// HTTP 요청 전송
xhr.send();