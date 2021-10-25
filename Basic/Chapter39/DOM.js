// DOM
// DOM은 HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리자료구조다.
// DOM은 빌트인 객체가 아니라 브라우저 환경에서 제공하는 호스트 객체이다.

// HTML 요소에 id 어트리뷰트를 부여하면 id 값과 동일한 이름의 전역 변수가 암묵적으로 선언된다.
// 해당노드 객체가 할당되는 부수 효과가 있다.

// HTML 문서의 모든 요소 노드를 취득하려면 getElementsByTagName('*');를 사용해야 한다.

// id 어트리뷰트가 있는 요소 노드를 취득하는 경우에는 getElementById 메서드를 사용하고
// 그외에는 querySelector, querySelectorAll 메서드를 사용하는것이 좋다.

// 특정 요소 노드를 취득할 수 있는지 확인
const $apple = document.querySelector('.apple');
$apple.matches('#fruit > li.apple'); // true

// HTMLCollection과 NodeList
// 둘다 유사 배열 객체이면서 이터러블이다.
// for...of문으로 순회할 수 있으며, 스프레드 문법을 사용하여 간단히 배열로 바꿀 수 있다.
// 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는 객체
// HTMLCollection은 언제나 live 객체로 동작한다.
// NodeList는 대부분의 경우 노드 객체의 상태 변화를 실시간으로 반영하지 않고 과거의 정적 상태를 유지하는 non-live 객체로 동작
// 경우에 따라선 live로 등장할 때가 있다.

// getElemetsByTagName, getElemetsByClassName 메서드가 반환하는 HTMLCollection

// querySelectorAll 메서드는 NodeList를 반환함
// NodeList 는 정적이지만 childNodes 프로퍼티가 반환하는 NodeList 객체는 HTMLCollection과 같이 실시간으로 노드 객체의 상태가 변함

// insertAdjancentHTML
// 기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입한다.
$foo.insertAdjacentHTML(위치,구문);

// 요소 노드 생성
document.createElement('li');

// 텍스트노드 생성
const textNode = document.createTextNode('Banana');

// 텍스트 노드를 요소 노드의 자식 노드로 추가
$li.appendChild(textNode);
$li.textContent = 'Banana'; // 같은 문장이다. 주의할점은 요소의 모든 요소가 삭제되고 문자열이 할당된다는 점이다.

// 요소 노드를 DOM에 추가
$fruit.appendChild($li);

// 요소 한번에 여러개 추가하기
// DocumentFragment DOM에 아무도 영향을 주지 않는 노드이다.
const $fragment = document.createDocumentFragment();

// 마지막 노드로 추가
document.getElementById('fruits').appendChild($li);

// 지정한 위치에 노드 삽입
$fruits.insertBefore($li, $fruits.lastElementChild);

// 노드 복사
Node.prototype.cloneNode();
// true이면 자식까지 싹다복사, false이면 자신만 복사

// 노드 교체
Node.prototype.replaceChild(새로운노드, 교환당할노드);

// 노드 삭제
Node.prototype.replaceChild();

// 어트리뷰트
// 모든 어티리뷰트 노드의 참조는 유사 배열 객체이자 이터러블인 NamedNodeMap 객체에 담겨서 요소 노드의 attributes 프로퍼티에 저장

Element.prototype.attributes // 요소 노드의 모든 어트리뷰트 노드를 획득가능

// 어트리뷰트의 값을 취득
$input.getAttribute('value'); // value 어트리뷰트 값을 취득
$input.setAttribute('value', 'foo'); // value 어트리뷰트의 값을 변경

// DOM 프로퍼티로 쉽게 획득과 변경이 가능하다.
$input.value = 'foo';

// 요소 노드의 초기 상태는 어티리뷰트 노드가 관리하며, 최신 상태는 DOM 프로퍼티가 관리한다.

// data 어트리뷰트와 dataset 프로퍼티
// data 어트리뷰트는 data-user-id, data-role과 같이 data- 접두사 다음에 임의의 이름을 붙여 사용한다.
// user.dataset.userId 와 같이 사용한다. (카멜케이스를 사용한다.)
<ul>
  <li id='1' data-user-id='7621' data-role='admin'>Lee</li>
</ul>
const users = [...document.querySelector('.users').children];
const user = users.find(user => user.dataset.userId === '7621');
user.dataset.role = 'subscriber';

// CSS class
const $box = document.querySelector('.box');

// class name 획득
$box.classNam;

// classList DOMTokenList 를 반환한다. 유사 배열 객체이다.
$box.classList;
$box.classList.add();
$box.classList.remove();
$box.classList.item();
$box.classList.contains();
$box.classList.replace();
$box.classList.toggle(); // 인수로 전달한 클래스가 존재하면 제거하고, 없으면 추가한다. 두번째 인수로 true를 주면 강제로 추가, false면 강제로 제거

// 요소에 적용되어 있는 CSS 스타일 참조
const computedStyle = window.getComputedStyle($box);
computedStyle.width;
const computedStyle2 = window.getComputedStyle($box, ':before');




