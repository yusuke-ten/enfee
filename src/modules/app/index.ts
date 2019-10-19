import { Reducer } from 'redux';
import { CreatorsToActions } from 'src/utils';
import { UserProfile } from 'services/models';

/* actions */
export const actions = {
  FETCH_MY_PROFILE_START: 'APP/FETCH_MY_PROFILE_START',
  FETCH_MY_PROFILE_SUCCEED: 'APP/FETCH_MY_PROFILE_SUCCEED',
  FETCH_MY_PROFILE_FAIL: 'APP/FETCH_MY_PROFILE_FAIL',
} as const;

/* actionCreators */
export const fetchMyProfile = {
  start: () => ({
    type: actions.FETCH_MY_PROFILE_START,
  }),
  succeed: (params: UserProfile) => ({
    type: actions.FETCH_MY_PROFILE_SUCCEED,
    payload: { params },
  }),
  fail: () => ({
    type: actions.FETCH_MY_PROFILE_FAIL,
    error: true,
  }),
};

type AppAction = CreatorsToActions<typeof fetchMyProfile>;

/* reducer */
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
    case actions.FETCH_MY_PROFILE_START:
      return { ...state };
    case actions.FETCH_MY_PROFILE_SUCCEED:
      return {
        ...state,
        isFetchedProfile: true,
        myProfile: action.payload.params,
      };
    case actions.FETCH_MY_PROFILE_FAIL:
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
