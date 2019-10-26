import { fork, takeLatest, call, select, put } from 'redux-saga/effects';
import { postReview as postReviewApi } from 'services/api/review';
import { selectToken } from 'modules/auth/selectors';
import { FixedReviewDetail } from 'services/models';
import { actionTypes, postReview } from './actions';

function* runPostReviewStart(action: ReturnType<typeof postReview.start>) {
  const token = yield select(selectToken);
  const { params } = action.payload;

  try {
    const result: FixedReviewDetail = yield call(postReviewApi, token, params);
    yield put(postReview.success(result));
  } catch (e) {
    console.log('post review error', e);
    yield put(postReview.fail());
  }
}

function* watchPostReviewStart() {
  yield takeLatest(actionTypes.POST_REVIEW_START, runPostReviewStart);
}

export default function* rootSaga() {
  yield fork(watchPostReviewStart);
}
