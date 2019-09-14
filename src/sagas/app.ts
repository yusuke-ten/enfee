import { fork } from 'redux-saga/effects';

export function testSaga() {
  console.log('saga started!');
}

export default function* rootSaga() {
  yield fork(testSaga);
}
