import { CreatorsToActions } from 'src/utils';
import { Comment } from 'services/models';

export const actionTypes = {
  SET_COMMENTS: 'COMMENT/SET_COMMENTS',
  POST_COMMENT_START: 'COMMENT/POST_COMMENT_START',
  POST_COMMENT_SUCCESS: 'COMMENT/POST_COMMENT_SUCCESS',
  POST_COMMENT_FAIL: 'COMMENT/POST_COMMENT_FAIL',
} as const;

export const setComments = (comments: Comment[]) => ({
  type: actionTypes.SET_COMMENTS,
  payload: { comments },
});

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

export type CommentAction =
  | ReturnType<typeof setComments>
  | CreatorsToActions<typeof postComment>;
