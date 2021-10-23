// 정규표현식
// 문자열을 대상으로 패턴 매칭 기능
const tel = '010-1234-567팔';
const regExp = /^\d{3}-\d{4}-\d{4}$/;
regExp.test(tel);

// 정규 표현식의 생성
/regexp/i // /: 시작, regexp: 패턴, /: 종료, i: 플래그

const target = 'Is this all there is?';

// 패턴: is
// 플래그: i => 대소문자를 구별하지 않고 검색한다.
const regexp = /is/i;

const target = 'Is this all there is?';
const regexp = new RegExp(/is/i);

RegExp.prototype.exec() // 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환한다. 없으면 null
String.prototype.match() // 대상 문자열과 인수로 전달받은 정규표현식과의 매칭 결과를 배열로 반환한다.
const target = 'Is this all there is?';
const regExp = /is/g;
target.match(regExp); // ['is', 'is']

// 플래그
i // ignore case 대소문자를 구별하지 않고 패턴을 검색한다.
g // global 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
m // multi line 문자열의 행이 바뀌더라도 패턴 검색을 계속한다.

// 패턴
// 임이의 문자열 검색
const regExp = /.../;

// 반복 검색
const regExp = /A{1,2}/g; // A가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색한다.
const regExp = /A{2}/g; // A가 2번 반복되는 문자열을 전역 검색한다.
const regExp = /A{2,}/g; // A가 최소 2번 이상 반복되는 문자열을 전역 검색한다.
const regExp = /A+/g; // +는 {1,}과 같다

const target = 'color colour';
const regExp = /colou?r/g; // ?는 {0,1}과 같다 u가 최대 한번 이상 반복되는지 판단한다.

// OR 검색
const target = 'A AA B BB Aa Bb';
const regExp = /A|B/g; // A 또는 B를 전역 검색 [A, A, A, B, B, B, A, B]
const regExp = /A+|B+/g; // [A, AA, B, BB, A, B]

const regExp = /[AB]+/g; // []내의 문자는 or로 동작한다.
const regExp = /[A-B]+/g; // 범위를 지정하려면 -를 쓴다.
const regExp = /[A-Za-z]+/g; // 대소문자 구별 안하고 검색 
const regExp = /[0-9]+/g; // 숫자범위 검색

const target = 'AA BB 12,345';
const regExp = /[0-9,]+/g; // 쉼표때문에 매칭결과가 분리되므로 쉼표를 패턴에 포함한다.

let regExp = /[\d,]+/g; // ,포함 숫자가 한 번 이상 반복되는 문자열을 검색
regExp = /[\D,]+/g; // ,포함 숫자가 아닌것이 반복되는 문자열 검색

// \w는 알파벳, 숫자, 언더스코어를 의미 [A-Za-z0-9_]와 같다.
// \W는 반대로

// NOT 검색
const regExp = /[^0-9]+/g; // [^]숫자를 제외한 문자열을 전역 검색한다.

// 시작 위치로 검색
const regExp = /^https/; // []밖 ^은 문자열 시작을 의미한다.
const regExp = /com$/; // $는 문자열의 마지막을 의미한다.

const url = 'https://example.com';
/^https?:\/\//.test(url); // 특정 단어 시작하는지 검사

const fileName = 'index.html';
/html$/.test(fileName); // 특정 단어로 끝나는지 검사

/^d+$/.test() // 숫자열로만 이루어진 문자열인지 검사
/^[\s]+/.test() // 하나 이상의 공백으로 시작하는지 검사한다.

// * 앞에 문자열이 0개이상이라는 뜻 {0,}와 같음
// .


