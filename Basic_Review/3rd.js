// ***** string *****
// String.prototype.substring(s, e) : s부터 e전까지 반환
// String.prototype.slice() : substring과 같지만 음수도 가능





// ***** symbol *****
// symbol타입은 불리언 타입으로 변경할 수 있다.





// ***** 이터러블 *****
// 이터러블의 Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다.
const iterator = array[Symbol.iterator()];
iterator.next();

// 빌트인 이터러블
Array.prototype[Symbol.iterator()];
String.prototype[Symbol.iterator()];
Map.prototype[Symbol.iterator()];
Set.prototype[Symbol.iterator()];
TypedArray.prototype[Symbol.iterator()];
arguments.prototype[Symbol.iterator()];
NodeList.prototype[Symbol.iterator()];
HTMLCollection.prototype[Symbol.iterator()];

// 이터러블인 객체는 for...of문으로 순회가능

// 사용자 정의 이터러블
const fibonacci = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;
    return {
      next () {
        [pre, cur] = [cur, pre + cur];
        return { value: cur, done: cur >= max};
      }
    };
  }
};
for (const num of fibonacci) {
  console.log(num);
} // 이터러블인 fibonacci를 순회할 때마다 next메서드가 호출

// 이터러블이면서 이터레이터인 객체를 생성하는 함수
const iterable = fibonacciFunc(5);
const iterator = iterable[Symbol.iterator]();





// ***** 스프레드 문법 *****
// 이터러블인 객체는 사용할 수 있다.




// ***** Map *****
// 키와 값의 쌍으로 이루어진 컬렉션이지만 객체와는 다르다.
// 이터러블하다





// ***** 브라우저 렌저링 과정 *****
// 파싱: 프로그래밍 언어의 문법에 맞게 작성된 텍스트 문서를 읽어 들여 실행하기 위해 텍스트 문서의
// 문자열 토큰으로 분해하고, 트큰에 문법적 의미와 구조를 반영하여 트리 구조의 자료구조인 파스 트리를 
// 생성하는 일련의 과정을 말한다. 일반적으로 파싱이 완료된 이후에는 파스 트리를 기반으로 중간 언어인
// 바이트코드를 생성하고 실행한다.

// 렌더링: HTML, CSS, 자바스크립트로 작성된 문서를 파싱하여 브라우저에 시각적으로 출력하는것

// 렌더링 과정 : 
// 1. HTML, CSS, JS, image, font file 등 렌더링에 필요한 리소스를 요청
// 2. 브라우저의 렌더링 엔진은 HTML, CSS를 파싱하여 DOM과 CSSOM을 생성하고 결합하여 렌더 트리생성
// 3. 브라우저의 JS엔진은 자바스크립트를 파싱하여 AST를 생성하고 바이트코드르 반환하고 실행
// 4. 렌더 트리를 기반으로 HTML 요소의 레이아웃을 계산하고 브라우저 화면에 HTML 요소를 페인팅한다.

// 바이트코드 -> 문자 -> 토큰 -> 노드 -> DOM
// CSS도 똑같이 CSSOM을 생성

// DOM과 CSSOM은 렌더 트리로 결합된다.
// 렌더 트리는 브라우저 화면에 렌더링되는 노드만으로 구성된다.

// 자바스크립트코드 -> 토큰 -> AST -> 바이트코드

// script 태그의 async/defer
// async: 자바스크립트와 HTML의 로드가 비동기적으로 이루어 지고, 자바스크립트 파일이 로드가 되면
//  HTML 파싱이 중단되고 자바스크립트가 실행이되므로, 순서보장이 되지 않는다.
// defer: 자바스크립트와 HTML의 로드가 비동기적으로 이루어 지고, 자바스크립트의 실행는 DOM생성이
//  완료된 이후에 이루어진다.





// ***** DOM *****
// HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는
// 트리 자료구조다.
// 노드 객체들로 구성된 트리자료구조를 DOM이라 한다.
// 다른이름으로는 DOM 트리

// HTMLCollection : children으로 얻는 엘리먼트
// NodeList : childNodes, querySelectorAll로 얻는 엘리먼트
// querySelectorAll()은 정적으로 변하는 값

// Element.prototype.insertAdjacentHTML(position, DOMString) 메서드를 사용하자





// ***** 이벤트 *****
// EventTarget.addEventListener('eventType', function, useCapture);

// target: 실제 이벤트를 발생시킨 요소
// currentTarget: 이벤트 리스너가 걸린 요소

// 캡처링 -> 타겟 -> 버블링