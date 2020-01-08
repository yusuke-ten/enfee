import { Reducer } from 'redux';
import { UserProfile, Review } from 'services/models';
import { actionTypes, UserAction } from './actions';

export interface UserState {
  isLoading: boolean;
  profile: UserProfile | null;
  users: UserProfile[];
  reviews: Review[];
}

const initialState: UserState = {
  isLoading: false,
  profile: null,
  users: [],
  reviews: [],
};

const reducer: Reducer<UserState, UserAction> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_PROFILE_START:
      return { ...state, profile: null };
    case actionTypes.FETCH_USER_PROFILE_SUCCEED: {
      return {
        ...state,
        profile: action.payload.userProfile,
      };
    }
    case actionTypes.FETCH_USER_PROFILE_FAIL:
      return { ...state };
    case actionTypes.FETCH_USERS_START:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_USERS_SUCCEED:
      return {
        ...state,
        isLoading: false,
        // users: state.users.concat(action.payload.users),
        users: action.payload.users,
      };
    case actionTypes.FETCH_USERS_FAIL:
      return { ...state, isLoading: false };
    case actionTypes.FETCH_REVIEWS_START:
      return { ...state, isLoading: true, reviews: [] };
    case actionTypes.FETCH_REVIEWS_SUCCEED:
      return { ...state, isLoading: false, reviews: action.payload.reviews };
    case actionTypes.FETCH_REVIEWS_FAIL:
      return { ...state, isLoading: false };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
