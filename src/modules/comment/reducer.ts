import { Reducer } from 'redux';
import { Comment } from 'services/models';
import { CommentAction, actionTypes } from './actions';

export interface CommentState {
  comments: Comment[];
  replies: { [key: string]: Comment[] };
  isPosting: boolean;
}

const initialState: CommentState = {
  comments: [],
  replies: {},
  isPosting: false,
};

const reducer: Reducer<CommentState, CommentAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case actionTypes.SET_COMMENTS:
      return { ...state, comments: action.payload.comments };
    case actionTypes.POST_COMMENT_START:
      return { ...state, isPosting: true };
    case actionTypes.POST_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.concat(action.payload.comment),
        isPosting: false,
      };
    case actionTypes.POST_COMMENT_FAIL:
      return { ...state, isPosting: false };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
