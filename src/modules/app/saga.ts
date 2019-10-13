import { fork, takeLatest, call, put } from 'redux-saga/effects';
import { loginApiFactory } from 'services/api/auth';
import { LoginError } from 'src/utils/errors';
import config from 'src/config';
import { actions, login } from '.';

const loginHandler = loginApiFactory();

export function* runLogin(action: ReturnType<typeof login.start>) {
  const { params } = action.payload;

  try {
    const { token } = yield call(loginHandler, params);

    yield put(login.succeed({ token }));
  } catch (err) {
    if (err instanceof LoginError) {
      const error = err.message;
      yield put(login.fail(params, { message: error }));
    } else {
      yield put(login.fail(params, { message: 'エラーが発生しました。' }));
    }
  }
}

export function setTokenToLocalstrage(
  action: ReturnType<typeof login.succeed>,
) {
  const { token } = action.payload.result;
  localStorage.setItem(config.localstrageTokenKey, token);
}

export function* watchLogin() {
  yield takeLatest(actions.LOGIN_START, runLogin);
}

export function* watchLoginSucceed() {
  yield takeLatest(actions.LOGIN_SUCCEED, setTokenToLocalstrage);
}

export default function* rootSaga() {
  yield fork(watchLogin);
  yield fork(watchLoginSucceed);
}
