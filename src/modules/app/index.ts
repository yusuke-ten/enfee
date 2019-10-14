import { Reducer } from 'redux';
import { CreatorsToActions } from 'src/utils';
import { UserProfile } from 'services/models';

/* actions */
export const actions = {
  LOGIN_START: 'APP/LOGIN_START',
  LOGIN_SUCCEED: 'APP/LOGIN_SUCCESS',
  LOGIN_FAIL: 'APP/LOGIN_FAILED',
  FETCH_MY_PROFILE_START: 'APP/FETCH_MY_PROFILE_START',
  FETCH_MY_PROFILE_SUCCEED: 'APP/FETCH_MY_PROFILE_SUCCEED',
  FETCH_MY_PROFILE_FAIL: 'APP/FETCH_MY_PROFILE_FAIL',
} as const;

interface LoginParams {
  email: string;
  password: string;
}

/* actionCreators */
export const login = {
  start: (params: LoginParams) => ({
    type: actions.LOGIN_START,
    payload: { params },
  }),
  succeed: (result: { token: string }) => ({
    type: actions.LOGIN_SUCCEED,
    payload: { result },
  }),
  fail: (params: LoginParams, error: { message: string }) => ({
    type: actions.LOGIN_FAIL,
    payload: { params, error },
    error: true,
  }),
};

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

type AppAction =
  | CreatorsToActions<typeof login>
  | CreatorsToActions<typeof fetchMyProfile>;

/* reducer */
interface User {
  loginName: string;
  displayName: string;
  imageUrl: string;
  userPageUrl: string;
}

export interface AppState {
  isLoading: boolean;
  isLoggedIn: boolean;
  isError: boolean;
  isFetchedProfile: boolean;
  myProfile: UserProfile | null;
  token: string | null;
  error?: string | null;
}

const initialState: AppState = {
  isLoading: false,
  isLoggedIn: false,
  isFetchedProfile: false,
  isError: false,
  myProfile: null,
  token: null,
};

const reducer: Reducer<AppState, AppAction> = (
  state: AppState = initialState,
  action: AppAction,
) => {
  switch (action.type) {
    case actions.LOGIN_START:
      console.log('reducer: login start', action.payload);

      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actions.LOGIN_SUCCEED:
      console.log('login succeed', action.payload);

      return {
        ...state,
        token: action.payload.result.token,
        isLoading: false,
        isLoggedIn: true,
        isError: false,
      };
    case actions.LOGIN_FAIL:
      console.log('login fail', action.payload.error.message);

      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload.error.message,
      };
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
