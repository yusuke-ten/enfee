import { fork, takeEvery, takeLatest, select, call, put } from 'redux-saga/effects';
import { selectToken } from 'modules/auth/selectors';
import { postCommentApi } from 'services/api/comment';
import { actionTypes, postComment } from './actions';

function runSetComments() {
  console.log('hogemiso');
}

function* watchSetComments() {
  yield takeEvery(actionTypes.SET_COMMENTS, runSetComments);
}

function* runPostComment(action: ReturnType<typeof postComment.start>) {
  const token: ReturnType<typeof selectToken> = yield select(selectToken);
  if (token) {
    try {
      const comment = yield call(
        postCommentApi,
        token,
        action.payload.reviewId,
        action.payload.commentValue,
      );

      yield put(postComment.success(comment));
    } catch (e) {
      yield put(postComment.fail());
    }
  }
}

function* watchPostComment() {
  yield takeLatest(actionTypes.POST_COMMENT_START, runPostComment);
}

export default function* rootSaga() {
  yield fork(watchSetComments);
  yield fork(watchPostComment);
}
