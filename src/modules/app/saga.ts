import { fork, takeLatest, call, put } from 'redux-saga/effects';
import { loginApiFactory, LoginError } from 'services/api/auth';
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
    }

    yield put(login.fail(params, { message: '' }));
  }
}

export function* watchLogin() {
  yield takeLatest(actions.LOGIN_START, runLogin);
}

export default function* rootSaga() {
  yield fork(watchLogin);
}
