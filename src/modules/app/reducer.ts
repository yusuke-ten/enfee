import { Reducer } from 'redux';
import { UserProfile } from 'services/models';
import { AppAction, actionTypes } from './actions';

export interface AppState {
  initialized: boolean;
  isFetchedProfile: boolean;
  myProfile: UserProfile | null;
}

const initialState: AppState = {
  initialized: false,
  isFetchedProfile: false,
  myProfile: null,
};

const reducer: Reducer<AppState, AppAction> = (
  state: AppState = initialState,
  action: AppAction,
) => {
  switch (action.type) {
    case actionTypes.FETCH_MY_PROFILE_START:
      return { ...state };
    case actionTypes.FETCH_MY_PROFILE_SUCCEED:
      return {
        ...state,
        isFetchedProfile: true,
        myProfile: action.payload.params,
      };
    case actionTypes.FETCH_MY_PROFILE_FAIL:
      return {
        ...state,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
