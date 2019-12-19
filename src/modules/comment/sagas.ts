import { fork, takeEvery, takeLatest, select, call, put } from 'redux-saga/effects';
import { selectToken } from 'modules/auth/selectors';
import { Comment } from 'services/models';
import {
  fetchCommentsApi,
  postCommentApi,
  postCommentLikeApi,
  deleteCommentLikeApi,
} from 'services/api/comment';
import { actionTypes, fetchComments, postComment, like } from './actions';

// レビュー詳細を取得するsagaで同時にコメントを取得するAPIを叩いているので使ってない
// function* runFetchComments(action: ReturnType<typeof fetchComments.start>) {
//   try {
//     const comments: Comment[] = yield call(
//       fetchCommentsApi,
//       action.payload.reviewId,
//     );
//     yield put(fetchComments.success(comments));
//   } catch (err) {
//     yield put(fetchComments.fail());
//   }
// }

// function* watchFetchComments() {
//   yield takeEvery(actionTypes.FETCH_COMMENTS_START, runFetchComments);
// }

function* runLike(action: ReturnType<typeof like.start>) {
  const token: ReturnType<typeof selectToken> = yield select(selectToken);
  const { commentId, type } = action.payload;

  if (!token) return;

  try {
    if (type === 'post') {
      yield call(postCommentLikeApi, token, commentId);
    } else if (type === 'delete') {
      yield call(deleteCommentLikeApi, token, commentId);
    }
    yield put(like.success(commentId, type));
  } catch (err) {
    yield put(like.fail());
  }
}

function* watchLike() {
  yield takeEvery(actionTypes.LIKE_START, runLike);
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
  // yield fork(watchFetchComments);
  yield fork(watchPostComment);
  yield fork(watchLike);
}
