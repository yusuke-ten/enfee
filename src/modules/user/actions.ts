import { AxiosError } from 'axios';
import { CreatorsToActions } from 'src/utils';
import { UserProfile } from 'services/models';

export const actionTypes = {
  FETCH_USER_PROFILE_START: 'USER/FETCH_USER_PROFILE_START',
  FETCH_USER_PROFILE_SUCCEED: 'USER/FETCH_USER_PROFILE_SUCCEED',
  FETCH_USER_PROFILE_FAIL: 'USER/FETCH_USER_PROFILE_FAIL',
} as const;

export const fetchUserProfile = {
  start: (loginName: string) => ({
    type: actionTypes.FETCH_USER_PROFILE_START,
    payload: { loginName },
  }),
  succeed: (userProfile: UserProfile) => ({
    type: actionTypes.FETCH_USER_PROFILE_SUCCEED,
    payload: { userProfile },
  }),
  fail: (loginName: string, error: AxiosError) => ({
    type: actionTypes.FETCH_USER_PROFILE_FAIL,
    error: true,
    payload: { error },
  }),
};

export type UserAction = CreatorsToActions<typeof fetchUserProfile>;
