// try...catch

try {
  foo();
} catch (err) {
  // 에러가 발생하면 실행
  console.error(err)
} finally {
  // 에러 발생과 상관없이 무조건 실행
  console.log('finally')
}

