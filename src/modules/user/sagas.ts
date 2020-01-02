import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { fetchUserProfileApi } from 'services/api/user';
import { actionTypes, fetchUserProfile } from './actions';

function* runFetchUserProfile(action: ReturnType<typeof fetchUserProfile.start>) {
  const { loginName } = action.payload;

  try {
    const userProfile = yield call(fetchUserProfileApi, loginName);

    yield put(fetchUserProfile.succeed(userProfile));
  } catch (error) {
    yield put(fetchUserProfile.fail(loginName, error));
  }
}

function* watchFetchUserProfile() {
  yield takeEvery(actionTypes.FETCH_USER_PROFILE_START, runFetchUserProfile);
}

export default function* root() {
  yield fork(watchFetchUserProfile);
}
