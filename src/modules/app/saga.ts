import { fork, takeLatest, call, put, select } from 'redux-saga/effects';
import { loginApiFactory } from 'services/api/auth';
import { fetchMyProfile } from 'services/api/user';
import { LoginError } from 'src/utils/errors';
import config from 'src/config';
import { UserProfile } from 'services/models';
import {
  actions,
  login,
  AppState,
  fetchMyProfile as fetchMyProfileActions,
} from '.';

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

export function* runFetchMyProfile() {
  const { token }: AppState = yield select(state => state.app);
  if (!token) return;

  try {
    const data: UserProfile = yield call(fetchMyProfile, token);
    yield put(fetchMyProfileActions.succeed(data));
  } catch (err) {
    console.log('error', err);
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

export function* watchFetchMyProfile() {
  yield takeLatest(actions.FETCH_MY_PROFILE_START, runFetchMyProfile);
}

export default function* rootSaga() {
  yield fork(watchLogin);
  yield fork(watchLoginSucceed);
  yield fork(watchFetchMyProfile);
}
