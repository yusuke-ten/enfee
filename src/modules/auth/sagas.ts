import { fork, takeLatest, call, put } from 'redux-saga/effects';
import { LoginError } from 'src/utils/errors';
import { loginApiFactory } from 'services/api/auth';
import * as localStorage from 'utils/localStorage';
import { actionTypes, login } from './actions';

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
  localStorage.setToken(token);
}

export function* watchLogin() {
  yield takeLatest(actionTypes.LOGIN_START, runLogin);
}

export function* watchLoginSucceed() {
  yield takeLatest(actionTypes.LOGIN_SUCCEED, setTokenToLocalstrage);
}

export default function* rootSaga() {
  yield fork(watchLogin);
  yield fork(watchLoginSucceed);
}
