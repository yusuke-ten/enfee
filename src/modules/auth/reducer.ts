import { Reducer } from 'redux';
import { actionTypes, AuthAction } from './actions';

export interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  token: string | null;
  isError: boolean;
  loginErrorMessage: string | null;
  signupErroMessage: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
  token: null,
  isError: false,
  loginErrorMessage: null,
  signupErroMessage: null,
};

export const reducer: Reducer<AuthState, AuthAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      console.log('reducer: login start', action.payload);

      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.LOGIN_SUCCEED:
      console.log('login succeed', action.payload);

      return {
        ...state,
        token: action.payload.result.token,
        isLoading: false,
        isLoggedIn: true,
        isError: false,
      };
    case actionTypes.LOGIN_FAIL:
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
