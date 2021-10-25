// 프로미스 생성
const promise = new Promise((resolve, reject) => {
  if(Boolean) {
    resolve('result');
  } else {
    reject('failure reason');
  }
});

// 프로미스의 상태 정보
// pending : 비동기 처리가 아직 수행되지 않은 상태, 프로미스가 생성된 직후 기본 상태
// fullfilled : 비동기 처리가 수행된 상태(성공), resolve 함수 호출
// rejected : 비동기 처리가 수행된 상태(실패), reject 함수 호출
// 프로미스는 비동기 처리 상태와 처리 결과를 관리하는 객체다.

// Promise.prototype.then
// fullfilled
new Promise(resolve => resolve('fulfilled'))
  .then(v => console.log(v), e => console.log(e));
// rejected
new Promise((_, reject) => reject(new Error('rejected')))
  .then(v => console.log(v), e => console.error(e));

// Promise.prototype.catch
// reject인 상태에서만 호출한다.
new Promise((_, reject) => reject(new Error('rejected')))
  .catch(e => console.log(e));
// catch 메서드는 then(undefined, onRejected)와 동일하게 동작, 언제나 프로미스를 반환

// Promise.prototype.finally
// 성공 또는 실패와 상관없이 무조건 한 번 호출된다.
new Promise(() => {})
  .finally(() => console.log('finally'));

// 프로미스의 에러처리
promise(wrongUrl).then(
  res => console.log(res),
  err => console.error(err)
);

promise(wrongUrl)
  .then(res => console.log(res))
  .catch(err => console.log(err));

promise(wrongUrl)
  .then(res => console.log(res))
  .then(undefined, err => console.error(err));

// 에러처리는 .catch문을 쓰는 것이 좋다

// 프로미스 체이닝
const url = 'https://json.com';

promiseGet(`${url}/posts/1`)
  .then(({userId}) => promiseGet(`${url}/users/${userId}`))
  .then(userInfo => console.log(userInfo))
  .catch(err => console.error(err));

(async () => {
  const {userId} = await promiseGet(`${url}/posts/1`);
  const userInfo = await promiseGet(`${url}/users/${userId}`);
  console.log(userInfo);
})();

// Prosmise.all
const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

// 세 개의 비동기 처리를 병렬로 처리, 하나라도 rejected 상태가 되면 즉시 종료한다.
Promise.all([requestData1(), requestData2(), requestData3()]).then(console.log).catch(console.error);

// 인수로 전달받은 이터러블의 요소가 프로미스가 아닌 경우 Promise.resolve메서드를 통해 프로미스로 래핑함
Promise.all([1, 2, 3]).then(console.log).catch(console.log);

// Promise.race 가장 먼저 fulfilled 상태가 된 프로미스의 처리 결과를 resolve하는 새로운 프로미스를 반환
// reject가 하나라도 될 경우 즉시 종료 된다.

// 모든 프로미스가 settled 상태가 되면 처리결과를 배열로 반환한다.
Promise.allSettled

// 마이크로태스크 큐
setTimeout(() => console.log(1), 0);
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));

// 2 -> 3 -> 1 순으로 출력됨
// 프로미스의 후속 처리 메서드의 콜백 함수는 마이크로태스크 큐에 저장된다.
// 그 외의 비동기 함수의 콜백 함수나 이벤트 핸들러는 태스크 큐에 일시 저장된다.
// 마이크로태스크 큐는 테스크큐보다 우선순위가 높다.

// fetch
// fetch 함수는 HTTP 응답을 나타내는 Response 객체를 래핑한 promise 객체를 반환한다.
fetch('https://json.com/todos/1').then(response => console.log(response));