import { fork, put, takeLatest, select } from 'redux-saga/effects';
import * as localStorage from 'utils/localStorage';
import { login } from 'modules/auth/actions';
import { RootState } from 'modules/index';
import { fetchMyProfile } from 'modules/app/actions';
import { actionTypes, initialized } from './actions';

const selectAuth = (state: RootState) => state.auth;

function* checkTokenInLocalStorage() {
  const token = localStorage.getToken();

  if (token) {
    yield put(login.succeed({ token }));
    yield put(fetchMyProfile.start());
  }

  yield put(initialized.localstorge());
}

function* runInitializeApp() {
  console.log('run initialize app');

  const { token, isLoggedIn }: ReturnType<typeof selectAuth> = yield select(
    selectAuth,
  );

  if (isLoggedIn && token) {
    // ログインユーザに必要なイニシャライズ処理
  }

  // すべてのユーザに必要なイニシャライズ処理を書く

  yield put(initialized.app());
}

function runInitializeReviewForm() {
  console.log('runInitializeReviewForm');
}

function* watchInitializeApp() {
  console.log('watchInitializeApp');
  yield takeLatest(actionTypes.INITIALIZE_APP, runInitializeApp);
}

function* watchInitializeReviewForm() {
  console.log('watchInitializeReviewForm');
  yield takeLatest(actionTypes.INITIALIZE_REVIEW_FORM, runInitializeReviewForm);
}

export default function* rootSaga() {
  yield fork(checkTokenInLocalStorage);
  yield fork(watchInitializeApp);
  yield fork(watchInitializeReviewForm);
}
