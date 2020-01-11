import { CreatorsToActions } from 'src/utils';
import { UserProfile, StoreItem } from 'services/models';

/* actionTypes */
export const actionTypes = {
  FETCH_MY_PROFILE_START: 'APP/FETCH_MY_PROFILE_START',
  FETCH_MY_PROFILE_SUCCEED: 'APP/FETCH_MY_PROFILE_SUCCEED',
  FETCH_MY_PROFILE_FAIL: 'APP/FETCH_MY_PROFILE_FAIL',
  TOGGLE_LODING: 'APP/TOGGLE_LODING',
  FETCH_STORES_START: 'APP/FETCH_STORES_START',
  FETCH_STORES_SUCCEED: 'APP/FETCH_STORES_SUCCEED',
  FETCH_STORES_FAIL: 'APP/FETCH_STORES_FAIL',
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

export const toggleLoadingPage = (status: boolean) => ({
  type: actionTypes.TOGGLE_LODING,
  payload: { status },
});

export const fetchStores = {
  start: () => ({
    type: actionTypes.FETCH_STORES_START,
  }),
  succeed: (stores: StoreItem[]) => ({
    type: actionTypes.FETCH_STORES_SUCCEED,
    payload: { stores },
  }),
  fail: () => ({
    type: actionTypes.FETCH_STORES_FAIL,
  }),
};

export const actions = {
  fetchMyProfile,
  toggleLoadingPage,
  fetchStores,
};

export type AppAction =
  | CreatorsToActions<typeof fetchMyProfile>
  | ReturnType<typeof toggleLoadingPage>
  | CreatorsToActions<typeof fetchStores>;
