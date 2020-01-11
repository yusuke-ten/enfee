import {
  fork,
  takeEvery,
  takeLeading,
  call,
  put,
  select,
} from 'redux-saga/effects';
import * as api from 'services/api/user';
import { UserProfile, Review } from 'services/models';
import { selectToken } from 'modules/auth/selectors';
import { actionTypes, fetchUserProfile, actions } from './actions';
import { RootState } from '../reducer';

function* runFetchUserProfile(action: ReturnType<typeof fetchUserProfile.start>) {
  const { loginName } = action.payload;
  const token: ReturnType<typeof selectToken> = yield select(selectToken);

  try {
    const userProfile = yield call(api.fetchUserProfileApi, loginName, token);

    yield put(fetchUserProfile.succeed(userProfile));
  } catch (error) {
    yield put(fetchUserProfile.fail(loginName, error));
  }
}

function* watchFetchUserProfile() {
  yield takeEvery(actionTypes.FETCH_USER_PROFILE_START, runFetchUserProfile);
}

function* runFetchUsers(action: ReturnType<typeof actions.fetchUsers.start>) {
  const token: ReturnType<typeof selectToken> = yield select(selectToken);

  try {
    const users: UserProfile[] = yield call(
      api.fetchUsersApi,
      action.payload.loginName,
      action.payload.target,
      token,
    );

    yield put(actions.fetchUsers.succeed(users));
  } catch (error) {
    yield put(actions.fetchUsers.fail(error));
  }
}

function* watchFetchUsers() {
  yield takeEvery(actionTypes.FETCH_USERS_START, runFetchUsers);
}

function* runFetchReviews(action: ReturnType<typeof actions.fetchReviews.start>) {
  try {
    const reviews: Review[] = yield call(
      api.fetchReviewsApi,
      action.payload.loginName,
    );

    yield put(actions.fetchReviews.succeed(reviews));
  } catch (error) {
    yield put(actions.fetchReviews.fail(error));
  }
}

function* watchFetchReviews() {
  yield takeEvery(actionTypes.FETCH_REVIEWS_START, runFetchReviews);
}

function* runFollow(action: ReturnType<typeof actions.follow>) {
  const token: ReturnType<typeof selectToken> = yield select(selectToken);

  if (token) {
    yield call(api.followApi, action.payload.loginName, token);
  }
}

function* watchFollow() {
  yield takeEvery(actionTypes.FOLLOW, runFollow);
}

function* runUnfollow(action: ReturnType<typeof actions.unfollow>) {
  const token: ReturnType<typeof selectToken> = yield select(selectToken);

  if (token) {
    yield call(api.unfollowApi, action.payload.loginName, token);
  }
}

function* watchUnfollow() {
  yield takeEvery(actionTypes.UNFOLLOW, runUnfollow);
}

function* runUpdateProfile(action: ReturnType<typeof actions.updateProfile.start>) {
  const token: ReturnType<typeof selectToken> = yield select(selectToken);

  if (token) {
    const { loginName, params } = action.paylod;

    try {
      const myProfile: UserProfile = yield call(
        api.updateProfile,
        params,
        loginName,
        token,
      );

      yield put(actions.updateProfile.succeed());
    } catch (error) {
      yield put(actions.updateProfile.fail());
    }
  }
}

function* watchUpdateProfile() {
  yield takeLeading(actionTypes.UPDATE_PROFILE_START, runUpdateProfile);
}

export default function* root() {
  yield fork(watchFetchUserProfile);
  yield fork(watchFetchUsers);
  yield fork(watchFetchReviews);
  yield fork(watchFollow);
  yield fork(watchUnfollow);
  yield fork(watchUpdateProfile);
}
