import { fork, takeLatest, call, put, select } from 'redux-saga/effects';
import { LoginError } from 'src/utils/errors';
import { loginApiFactory, logout as logoutApi } from 'services/api/auth';
import * as localStorage from 'utils/localStorage';
import config from 'src/config';
import { actionTypes, login, logout } from './actions';
import { selectToken } from './selectors';

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

export function* runLogout() {
  console.log('run logout in saga');

  const token: ReturnType<typeof selectToken> = yield select(selectToken);

  try {
    if (token) {
      localStorage.removeToken();
      const response = yield call(logoutApi, token);
      console.log('logout response in saga', response);
    }
    yield put(logout.finish());

    window.location.href = `${config.baseUrl}/login`;
  } catch (e) {
    console.log(e);
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

export function* watchLogout() {
  yield takeLatest(actionTypes.LOGOUT_START, runLogout);
}

export default function* rootSaga() {
  yield fork(watchLogin);
  yield fork(watchLoginSucceed);
  yield fork(watchLogout);
}
