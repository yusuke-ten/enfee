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

/* eslint no-param-reassign: 0 */
const reducer: Reducer<CommentState, CommentAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case actionTypes.SET_COMMENTS:
      return { ...state, comments: action.payload.comments };
    case actionTypes.FETCH_COMMENTS_START:
      return { ...state };
    case actionTypes.FETCH_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload.comments };
    case actionTypes.FETCH_COMMENTS_FAIL:
      return { ...state };
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
    case actionTypes.LIKE_START: {
      const { commentId, type } = action.payload;
      const updatedComments = state.comments.map(com => {
        if (com.id === commentId) {
          if (type === 'post') {
            com.liked = true;
            com.likeCount += 1;
          } else if (type === 'delete') {
            com.liked = false;
            com.likeCount -= 1;
          }
        }

        return com;
      });

      return { ...state, comments: updatedComments };
    }
    case actionTypes.LIKE_SUCCESS: {
      return { ...state };
    }
    case actionTypes.LIKE_FAIL:
      return { ...state };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
