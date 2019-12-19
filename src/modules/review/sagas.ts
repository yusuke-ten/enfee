import {
  all,
  fork,
  takeLatest,
  takeEvery,
  takeLeading,
  call,
  select,
  put,
} from 'redux-saga/effects';
import {
  postReviewApi,
  fetchReviewListApi,
  fetchReviewDetailApi,
  fetchProductCategoryListApi,
} from 'services/api/review';
import { fetchCommentsApi } from 'services/api/comment';
import { selectToken } from 'modules/auth/selectors';
import { FixedReviewDetail, Review, ReviewDetail, Comment } from 'services/models';
import { setComments } from 'modules/comment/actions';
import {
  actionTypes,
  postReview,
  fetchReviewList,
  fetchReviewDetail,
  fetchProductCategoryList,
} from './actions';

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

function* runFetchProductCategoryList() {
  try {
    const result = yield call(fetchProductCategoryListApi);
    yield put(fetchProductCategoryList.success(result));
  } catch (e) {
    yield put(fetchProductCategoryList.fail());
  }
}

function* runFetchReviewDetail(action: ReturnType<typeof fetchReviewDetail.start>) {
  const { reviewId } = action.payload;
  const token: ReturnType<typeof selectToken> = yield select(selectToken);
  try {
    const [reviewDetail, comments]: [ReviewDetail, Comment[]] = yield all([
      call(fetchReviewDetailApi, reviewId),
      call(fetchCommentsApi, token, reviewId),
    ]);
    yield call(fetchReviewDetailApi, reviewId);
    yield put(fetchReviewDetail.success(reviewDetail));
    yield put(setComments(comments));
  } catch (e) {
    yield put(fetchReviewDetail.fail());
  }
}

function* watchPostReviewStart() {
  yield takeLatest(actionTypes.POST_REVIEW_START, runPostReviewStart);
}

function* watchFetchReviewListStart() {
  yield takeEvery(actionTypes.FETCH_REVIEW_LIST_START, runFetchReviewList);
}

function* watchFetchProductCategoryListStart() {
  yield takeLeading(
    actionTypes.FETCH_PRODUCT_CATEGORY_LIST_START,
    runFetchProductCategoryList,
  );
}

function* wtachFetchReviewDetailStart() {
  yield takeLatest(actionTypes.FETCH_REVIEW_DETAIL_START, runFetchReviewDetail);
}

export default function* rootSaga() {
  yield fork(watchPostReviewStart);
  yield fork(watchFetchReviewListStart);
  yield fork(watchFetchProductCategoryListStart);
  yield fork(wtachFetchReviewDetailStart);
}
