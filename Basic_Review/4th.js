// ***** 프로미스 *****
const promise = new Promise((resolve, reject) => {
  if(true) {
    resolve('result');
  } else {
    reject ('fail')
  }
});

// pending: 비동기 처리가 아직 안된 상태
// fullfilled: 비동기 처리가 수행된 상태(성공)
// rejected: 비동기 처리가 수행된 상태(실패)

Promise.all([promise1(), promise2(), promise3()]).then(console.log()).catch(console.error());

// 프로미스의 후속 처리 메서드도 비동기로 동작
// then, catch 마이크로태스크 큐에저장
// 태스크큐 보다 우선 순위가 높다.





// ***** async/await *****
// async 함수는 언제나 프로미스를 반환한다.
// await 키워드는 반드시 프로미스 앞에서 사용해야 한다.
