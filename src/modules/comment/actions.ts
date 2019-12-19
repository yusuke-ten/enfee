import { CreatorsToActions } from 'src/utils';
import { Comment } from 'services/models';

export const actionTypes = {
  SET_COMMENTS: 'COMMENT/SET_COMMENTS',
  FETCH_COMMENTS_START: 'COMMENT/FETCH_COMMENTS_START',
  FETCH_COMMENTS_SUCCESS: 'COMMENT/FETCH_COMMENTS_SUCCESS',
  FETCH_COMMENTS_FAIL: 'COMMENT/FETCH_COMMENTS_FAIL',
  POST_COMMENT_START: 'COMMENT/POST_COMMENT_START',
  POST_COMMENT_SUCCESS: 'COMMENT/POST_COMMENT_SUCCESS',
  POST_COMMENT_FAIL: 'COMMENT/POST_COMMENT_FAIL',
  LIKE_START: 'COMMENT/LIKE_START',
  LIKE_SUCCESS: 'COMMENT/LIKE_SUCCESS',
  LIKE_FAIL: 'COMMENT/LIKE_FAIL',
} as const;

export const setComments = (comments: Comment[]) => ({
  type: actionTypes.SET_COMMENTS,
  payload: { comments },
});

export const fetchComments = {
  start: (reviewId: number) => ({
    type: actionTypes.FETCH_COMMENTS_START,
    payload: { reviewId },
  }),
  success: (comments: Comment[]) => ({
    type: actionTypes.FETCH_COMMENTS_SUCCESS,
    payload: { comments },
  }),
  fail: () => ({
    type: actionTypes.FETCH_COMMENTS_FAIL,
  }),
};

export const postComment = {
  start: (params: { commentValue: string; reviewId: number }) => ({
    type: actionTypes.POST_COMMENT_START,
    payload: { ...params },
  }),
  success: (comment: Comment) => ({
    type: actionTypes.POST_COMMENT_SUCCESS,
    payload: { comment },
  }),
  fail: () => ({
    type: actionTypes.POST_COMMENT_FAIL,
  }),
};

export const like = {
  start: (commentId: number, type: 'post' | 'delete') => ({
    type: actionTypes.LIKE_START,
    payload: { commentId, type },
  }),
  success: (commentId: number, type: 'post' | 'delete') => ({
    type: actionTypes.LIKE_SUCCESS,
    paylaod: { commentId, type },
  }),
  fail: () => ({
    type: actionTypes.LIKE_FAIL,
  }),
};

export type CommentAction =
  | ReturnType<typeof setComments>
  | CreatorsToActions<typeof fetchComments>
  | CreatorsToActions<typeof postComment>
  | CreatorsToActions<typeof like>;
