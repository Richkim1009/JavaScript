// ***** this *****
// 자신이 속한 객체를 가리키는 식별자

// 객체 리터럴의 this는 자기자신을 가리킨다

// 메서드 내부의 this는 호출한 객체를 가리킨다.
// 매서드 내에서 정의한 함수의 this는 전역 객체를 가리킨다.(함수안에 함수)

// 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.

// 일반 함수 내부의 this는 전역 객체이다.
// 일반함수 안의 내부함수의 this는 전역 객체이다.
// 일반함수로된 중첩 함수, 콜백 함수 내부의 this는 전역 객체이다

// 변수에 메서드를 할당하면 this는 전역 객체를 가리킨다.

// 프로토타입에 함수를 넣었을때의 this는 인스턴스의 this이다.


// 자바스크립트의 this는 바인딩이 동적이다.





// ***** class *****
// 클래스는 정의 이전에 참조 불가
// 호이스팅은 let과 const와 같다





// ***** ES6함수 추가 기능 *****
// 화살표 함수
// 화살표함수는 this가 없기 대문에 bind를 해도 아무것도 변하지 않는다.
// 프로퍼티를 동적으로 추가할때는 화살표 함수를 쓰지 않는다.
// 클래스 필드 정의 제안을 사용하여 클래스 필드에 화살표 함수를 할당할 수 있다.
// 상속받은 클래스 필드에서도 화살표 함수를 사용할 수 있다.
// this는 상위 스코프의 객체이다.

// rest 파라미터
// Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.





// ***** 배열 *****
// sort
// 기본적으로 오름차순 정렬이다.
// 숫자일때 오름차순 : a - b
// 숫자일때 내림차순 : b - a

// 숫자가 아닐때 : 오름차순
(a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));

// map
// 콜백함수를 이용하여 새로운 배열을 리터한다.

// filter
// 콜백함수를 이용하여 리턴값이 참인것만으로 새로운 배열을 생성