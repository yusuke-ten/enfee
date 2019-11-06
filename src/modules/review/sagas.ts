import {
  fork,
  takeLatest,
  takeEvery,
  call,
  select,
  put,
} from 'redux-saga/effects';
import { postReviewApi, fetchReviewListApi } from 'services/api/review';
import { selectToken } from 'modules/auth/selectors';
import { FixedReviewDetail, Review } from 'services/models';
import { actionTypes, postReview, fetchReviewList } from './actions';

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

function* runFetchReviewList(action: ReturnType<typeof fetchReviewList.start>) {
  try {
    const result: Review[] = yield call(
      fetchReviewListApi,
      action.paylaod.queryParams,
    );

    console.log('runFetchReviewList success! result: ', result);
    yield put(fetchReviewList.success(result));
  } catch (e) {
    console.log('fetchReviewList error: ', e);
    yield put(fetchReviewList.fail());
  }
}

function* watchPostReviewStart() {
  yield takeLatest(actionTypes.POST_REVIEW_START, runPostReviewStart);
}

function* watchFetchReviewListStart() {
  yield takeEvery(actionTypes.FETCH_REVIEW_LIST_START, runFetchReviewList);
}

export default function* rootSaga() {
  yield fork(watchPostReviewStart);
  yield fork(watchFetchReviewListStart);
}
