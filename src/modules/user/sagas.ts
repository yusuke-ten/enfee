import { fork, takeEvery, call, put } from 'redux-saga/effects';
import * as api from 'services/api/user';
import { UserProfile } from 'services/models';
import { actionTypes, fetchUserProfile, actions } from './actions';

function* runFetchUserProfile(action: ReturnType<typeof fetchUserProfile.start>) {
  const { loginName } = action.payload;

  try {
    const userProfile = yield call(api.fetchUserProfileApi, loginName);

    yield put(fetchUserProfile.succeed(userProfile));
  } catch (error) {
    yield put(fetchUserProfile.fail(loginName, error));
  }
}

function* watchFetchUserProfile() {
  yield takeEvery(actionTypes.FETCH_USER_PROFILE_START, runFetchUserProfile);
}

function* runFetchUsers(action: ReturnType<typeof actions.fetchUsers.start>) {
  try {
    const users: UserProfile[] = yield call(
      api.fetchUsersApi,
      action.payload.loginName,
      action.payload.target,
    );

    yield put(actions.fetchUsers.succeed(users));
  } catch (error) {
    yield put(actions.fetchUsers.fail(error));
  }
}

function* watchFetchUsers() {
  yield takeEvery(actionTypes.FETCH_USERS_START, runFetchUsers);
}

export default function* root() {
  yield fork(watchFetchUserProfile);
  yield fork(watchFetchUsers);
}
