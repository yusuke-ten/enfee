import { Reducer } from 'redux';
import { CreatorsToActions } from '../utils';

/* actions */
const actions = {
  LOGIN_START: 'APP/LOGIN_START',
  LOGIN_SUCCESS: 'APP/LOGIN_SUCCESS',
  LOGIN_FAILED: 'APP/LOGIN_FAILED',
} as const;

interface LoginFormState {
  email: string;
  password: string;
}

/* actionCreators */
export const actionCreators = {
  loginStart: (loginState: LoginFormState) => ({
    type: actions.LOGIN_START,
    payload: { loginState },
  }),
  loginSuccess: () => ({
    type: actions.LOGIN_SUCCESS,
  }),
  loginFailed: (errors: any) => ({
    type: actions.LOGIN_FAILED,
    payload: { errors },
  }),
};

type AppAction = CreatorsToActions<typeof actionCreators>;

interface User {
  login_name: string;
  display_name: string;
  image_url: string;
}

/* reducer */
export interface AppState {
  isLogin: boolean;
  user: User | null;
  token: string | null;
}

const initialState: AppState = {
  isLogin: false,
  user: null,
  token: null,
};

const todoReducer: Reducer<AppState, AppAction> = (
  state: AppState = initialState,
  action: AppAction,
) => {
  switch (action.type) {
    case actions.LOGIN_START:
      return {
        ...state,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
      };
    case actions.LOGIN_FAILED:
      return { ...state };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default todoReducer;
