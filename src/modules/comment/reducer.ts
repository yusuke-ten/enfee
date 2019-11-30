import { Reducer } from 'redux';
import { Comment } from 'services/models';
import { CommentAction, actionTypes } from './actions';

export interface CommentState {
  comments: Comment[];
}

const initialState: CommentState = {
  comments: [],
};

const reducer: Reducer<CommentState, CommentAction> = (
  state = initialState,
  action,
) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_COMMENTS:
      return { ...state, comments: payload.comments };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = type;

      return state;
    }
  }
};

export default reducer;
