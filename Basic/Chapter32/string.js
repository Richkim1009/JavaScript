// string은 유사배열 객체이다
// string은 원시값이다.
// string 래퍼객체는 읽기 전용이다.

String.prototype.search(/o/); // 정규표현식과 매치하는 문자열을 검색한다.
String.prototype.startsWith('He', 0); // 전달받은 인수로 시작하는지 확인
String.prototype.substring(1, 4) // 인덱스 1번 부터 4번 까지 반환한다.
String.prototype.slice(-5) // 기본적으로 substring과 같지만 인수로 음수를 전달할 수 있다는 점이 다르다. 뒤에서 5자리 자름
String.prototype.repeat(); // 인수로 전달한 횟수만큼 문자열을 반복해서 반환한다. 
String.prototype.replace() // 첫 번째 인수를 검색해서 두 번째 인수로 바꾼다.
// 특수한 교체 패턴을 사용할 수 있다. $&는 검색된 문자열을 의미
String.prototype.replace('world', '<strong>$&</strong>');
// 정규 표현식도 전달 가능
