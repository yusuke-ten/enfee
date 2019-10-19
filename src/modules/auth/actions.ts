import { CreatorsToActions } from 'src/utils';

export const actionTypes = {
  LOGIN_START: 'APP/LOGIN_START',
  LOGIN_SUCCEED: 'APP/LOGIN_SUCCESS',
  LOGIN_FAIL: 'APP/LOGIN_FAILED',
} as const;

interface LoginParams {
  email: string;
  password: string;
}

export const login = {
  start: (params: LoginParams) => ({
    type: actionTypes.LOGIN_START,
    payload: { params },
  }),
  succeed: (result: { token: string }) => ({
    type: actionTypes.LOGIN_SUCCEED,
    payload: { result },
  }),
  fail: (params: LoginParams, error: { message: string }) => ({
    type: actionTypes.LOGIN_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type AuthAction = CreatorsToActions<typeof login>;
