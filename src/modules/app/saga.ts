import { fork, takeLatest, call, put } from 'redux-saga/effects';
import { loginApiFactory } from 'services/api/auth';
import { LoginError } from 'src/utils/errors';
import { actions, login } from '.';

const loginHandler = loginApiFactory();

export function* runLogin(action: ReturnType<typeof login.start>) {
  const { params } = action.payload;

  try {
    const { token } = yield call(loginHandler, params);

    yield put(login.succeed(params, { token }));
  } catch (err) {
    if (err instanceof LoginError) {
      const error = err.message;
      yield put(login.fail(params, { message: error }));
    } else {
      yield put(login.fail(params, { message: 'エラーが発生しました。' }));
    }
  }
}

export function* watchLogin() {
  yield takeLatest(actions.LOGIN_START, runLogin);
}

export default function* rootSaga() {
  yield fork(watchLogin);
}
