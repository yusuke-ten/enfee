import { fork, takeLatest, call, put } from 'redux-saga/effects';
import { loginApiFactory } from 'services/api/auth';
import { actions, login } from '.';

const loginHandler = loginApiFactory();

export function* runLogin(action: ReturnType<typeof login.start>) {
  console.log('run login! action: ', action);
  const { params } = action.payload;

  try {
    const { token } = yield call(loginHandler, params);

    yield put(login.succeed(params, { token }));
  } catch (error) {
    yield put(login.fail(params, error));
  }
  console.log('call finished');
}

export function* watchLogin() {
  yield takeLatest(actions.LOGIN_START, runLogin);
}

export default function* rootSaga() {
  yield fork(watchLogin);
}
