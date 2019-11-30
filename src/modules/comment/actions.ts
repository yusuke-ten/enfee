import { CreatorsToActions } from 'src/utils';
import { Comment } from 'services/models';

export const actionTypes = {
  SET_COMMENTS: 'COMMENT/SET_COMMENTS',
} as const;

export const setComments = (comments: Comment[]) => ({
  type: actionTypes.SET_COMMENTS,
  payload: { comments },
});

export type CommentAction = ReturnType<typeof setComments>;
