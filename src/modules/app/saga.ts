import { fork, takeLatest, call, put, select } from 'redux-saga/effects';
import { fetchMyProfile } from 'services/api/user';
import { UserProfile } from 'services/models';
import { selectToken } from 'modules/auth/selectors';
import {
  actionTypes,
  fetchMyProfile as fetchMyProfileActions,
} from './actions';

export function* runFetchMyProfile() {
  const token: ReturnType<typeof selectToken> = yield select(selectToken);
  if (!token) return;

  try {
    const data: UserProfile = yield call(fetchMyProfile, token);
    yield put(fetchMyProfileActions.succeed(data));
  } catch (err) {
    console.log('error', err);
  }
}

export function* watchFetchMyProfile() {
  yield takeLatest(actionTypes.FETCH_MY_PROFILE_START, runFetchMyProfile);
}

export default function* rootSaga() {
  yield fork(watchFetchMyProfile);
}
