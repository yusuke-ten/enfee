import { fork, takeLatest, call, put, select } from 'redux-saga/effects';
import { fetchMyProfile } from 'services/api/user';
import { UserProfile } from 'services/models';
import { RootState } from 'src/modules';
import { actions, fetchMyProfile as fetchMyProfileActions } from '.';

export function* runFetchMyProfile() {
  const { token } = yield select((state: RootState) => state.auth);
  if (!token) return;

  try {
    const data: UserProfile = yield call(fetchMyProfile, token);
    yield put(fetchMyProfileActions.succeed(data));
  } catch (err) {
    console.log('error', err);
  }
}

export function* watchFetchMyProfile() {
  yield takeLatest(actions.FETCH_MY_PROFILE_START, runFetchMyProfile);
}

export default function* rootSaga() {
  yield fork(watchFetchMyProfile);
}
