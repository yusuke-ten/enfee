import { CreatorsToActions } from 'src/utils';
import { UserProfile } from 'services/models';

/* actionTypes */
export const actionTypes = {
  FETCH_MY_PROFILE_START: 'APP/FETCH_MY_PROFILE_START',
  FETCH_MY_PROFILE_SUCCEED: 'APP/FETCH_MY_PROFILE_SUCCEED',
  FETCH_MY_PROFILE_FAIL: 'APP/FETCH_MY_PROFILE_FAIL',
} as const;

/* actionCreators */
export const fetchMyProfile = {
  start: () => ({
    type: actionTypes.FETCH_MY_PROFILE_START,
  }),
  succeed: (params: UserProfile) => ({
    type: actionTypes.FETCH_MY_PROFILE_SUCCEED,
    payload: { params },
  }),
  fail: () => ({
    type: actionTypes.FETCH_MY_PROFILE_FAIL,
    error: true,
  }),
};

export type AppAction = CreatorsToActions<typeof fetchMyProfile>;
