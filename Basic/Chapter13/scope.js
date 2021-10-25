// 스코프는 식별자가 유효한 범위를 말한다.
function test() {
  var x = 1;
  function t() {
    var y = 2;
    console.log(x);
  }
  console.log(y);
  t();
}

test();

// js는 렉시컬 스코프를 따른다.
// 렉시컬 스코프란? 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다.
