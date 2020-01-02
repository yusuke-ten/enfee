import { Reducer } from 'redux';
import { UserProfile } from 'services/models';
import { actionTypes, UserAction } from './actions';

export interface UserState {
  users: {
    [loginName: string]: UserProfile;
  };
}

const initialState: UserState = {
  users: {},
};

const reducer: Reducer<UserState, UserAction> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_PROFILE_START:
      return { ...state };
    case actionTypes.FETCH_USER_PROFILE_SUCCEED: {
      const { userProfile } = action.payload;

      return {
        ...state,
        users: Object.assign(state.users, { [userProfile.loginName]: userProfile }),
      };
    }
    case actionTypes.FETCH_USER_PROFILE_FAIL:
      return { ...state };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
