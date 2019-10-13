import { Reducer } from 'redux';
import { CreatorsToActions } from 'src/utils';

/* actions */
export const actions = {
  LOGIN_START: 'APP/LOGIN_START',
  LOGIN_SUCCEED: 'APP/LOGIN_SUCCESS',
  LOGIN_FAIL: 'APP/LOGIN_FAILED',
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

type AppAction = CreatorsToActions<typeof login>;

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
  profile: User | null;
  token: string | null;
  error?: string | null;
}

const initialState: AppState = {
  isLoading: false,
  isLoggedIn: false,
  isError: false,
  profile: null,
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
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
