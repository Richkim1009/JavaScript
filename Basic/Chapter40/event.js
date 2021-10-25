// 이벤트가 발생했을 때 호출된 함수를 이벤트 핸들러라고 한다.
// 이벤트가 발생했을 때 브라우저에게 이벤트 핸들러의 호출을 위임하는 것을 이벤트 핸들러 등록이라 한다.
// 프로그램의 흐름을 이벤트 중심으로 제어하는 프로그래밍 방식을 이벤트 드리븐 프로그래밍이라 한다.

// 이벤트타입

// 마우스 이벤트
// click: 마우스 버튼을 클릭했을 때
// dbclick: 마우스 버튼을 더블 클릭했을 때
// mousedown: 마우스 버튼을 눌렀을 때
// mouseup: 누르고 있던 마우스 버튼을 놓았을 때
// mousemove: 마우스 커서를 움직였을 때
// mouseenter: 마우스 커서를 HTML 요소 안으로 이동했을 때(버블링 되지 않는다.)
// mouseover: 마우스 커서를 HTML 요소 안으로 이동했을 때(버블링 된다.)
// mouseleave: 마우스 커서를 HTML 요소 밖으로 이동했을 때(버블링되지 않는다.)
// mouseout: 마우스 커서를 HTML 요소 밖으로 이동했을 때(버블링 된다.)

// 키보드 이벤트
// keydown: 모든 키를 눌렀을 때 발생한다.
// keypress: 문자 키를 눌렀을 때 연속적으로 발생한다. (사용하지 말자)
// keyup: 누르고 있던 키를 놓았을 때 한 번만 발생한다.

// 포커스 이벤트
// focus: HTML 요소가 포커스를 받았을 때(버블링 되지 않는다.)
// blur: HTML 요소가 포커스를 잃었을 때(버블링 되지 않는다.)
// foucsin: HTML 요소가 포커스를 받았을 때(버블링 된다.)
// focusout: HTML 요소가 포커스를 잃었을 때(버블링 된다.)

// 폼 이벤트
// submit: form 요소 내의 submit 버튼을 클릭했을 때
// reset: form 요소 내의 reset 버튼을 클릭햇을 때

// 값 변경 이벤트
// input: input 요소의 값이 입력되었을 때
// change: input 요소의 값이 변경되었을 때
// readystatechange: HTML 문서의 로드와 파싱 상태를 나타내는 document.readyState프로퍼티 값('loading', 'interactive', 'complete')이 변경될 때

// DOM 뮤테이션 이벤트
// DOMContentLoaded: HTML 문서의 로드와 피싱이 완료되어 DOM 생성이 완료되었을 때

// 뷰 이벤트
// resize: 브라우저 윈도우의 크기를 리사이즈할 때 연속적으로 발생한다.(오직 window 객체에서만 발생한다.)
// scroll: 웹페이지 또는 HTML 요소를 스크롤할 때 연속적으로 발생한다.

// 리소스 이벤트
// load: DOMContentLoaded 이벤트가 발생한 이후, 모든 리소스(이미지, 폰트 등)의 로딩이 완료되었을 때
// unload: 리소스가 언로드될 때
// abort: 리소스 로딩이 중단되었을 때
// error: 리소스 로딩이 실패했을 때

// 이벤트 핸들러 등록
const $button = document.querySelector('button');
// 이벤트 핸들러 프로퍼티 방식
$button.onclick = function() { // $button: 이벤트 타깃, onclick: 이벤트 타입, function(): 이벤트 핸들러
  console.log('button click');
};

// addEventListener 메서드 방식
// 여러개 추가 가능
$button.addEventListener('click', function(){
  console.log('button click');
});

// 이벤트 핸들러 제거
$button.removeEventListener();
$button.onclick = null; // 제거가능한 다른 방법

// 이벤트 객체
// 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다.

// 이벤트는 생성자 함수다.

// 이벤트 전파
// 생성된 이벤트 객체는 이벤트를 발생시킨 DOM 요소인 이벤트 타깃을 중심으로 DOM 트릴르 통해 전파된다.
// 캡처링: 상위에서 하위로, 버블링: 하위에서 상위로
// 캡처링 -> 타깃 -> 버블링 순으로 전파된다.

// 이벤트 위임
// 여러 개의 하위 DOM 요소에 각각 이벤트 핸들러를 등혹하는 대신 하나의 상위 DOM 요소에 이벤트 핸들러를 등록하는 방법

// 이벤트 핸들러 내부의 this는 전역 객체 window를 가리킨다.


