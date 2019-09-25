import { fork, takeLatest, call, put } from 'redux-saga/effects';
import { actions, login } from '.';

const loginMock = () => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve('ok');
    }, 1000);
  });
};

export function* runLogin(action: ReturnType<typeof login.start>) {
  console.log('run login! action: ', action);
  yield call(loginMock);
  console.log('call finished');
  yield put(login.succeed(action.payload.params, { token: 'ok' }));
}

export function* watchLogin() {
  console.log('watch login!');
  yield takeLatest(actions.LOGIN_START, runLogin);
}

export default function* rootSaga() {
  yield fork(watchLogin);
}
