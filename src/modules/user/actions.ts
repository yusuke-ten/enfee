import { AxiosError } from 'axios';
import { CreatorsToActions } from 'src/utils';
import { metaKeys } from 'modules/actions';
import { UserProfile, Review } from 'services/models';
import { UsersKind } from 'services/api/user';

export const actionTypes = {
  FETCH_USER_PROFILE_START: 'USER/FETCH_USER_PROFILE_START',
  FETCH_USER_PROFILE_SUCCEED: 'USER/FETCH_USER_PROFILE_SUCCEED',
  FETCH_USER_PROFILE_FAIL: 'USER/FETCH_USER_PROFILE_FAIL',
  FETCH_USERS_START: 'USER/FETCH_USERS_START',
  FETCH_USERS_SUCCEED: 'USER/FETCH_USERS_SUCCEED',
  FETCH_USERS_FAIL: 'USER/FETCH_USERS_FAIL',
  FETCH_REVIEWS_START: 'USER/FETCH_REVIEWS_START',
  FETCH_REVIEWS_SUCCEED: 'USER/FETCH_REVIEWS_SUCCEED',
  FETCH_REVIEWS_FAIL: 'USER/FETCH_REVIEWS_FAIL',
  FOLLOW: 'USER/FOLLOW',
  UNFOLLOW: 'USER/UNFOLLOW',
} as const;

export const fetchUserProfile = {
  start: (loginName: string) => ({
    type: actionTypes.FETCH_USER_PROFILE_START,
    payload: { loginName },
    meta: { [metaKeys.LOADING_PAGE]: true },
  }),
  succeed: (userProfile: UserProfile) => ({
    type: actionTypes.FETCH_USER_PROFILE_SUCCEED,
    payload: { userProfile },
    meta: { [metaKeys.LOADING_PAGE]: false },
  }),
  fail: (loginName: string, error: AxiosError) => ({
    type: actionTypes.FETCH_USER_PROFILE_FAIL,
    error: true,
    payload: { loginName, error },
    meta: { [metaKeys.LOADING_PAGE]: false },
  }),
};

export const fetchUsers = {
  start: (loginName: string, target: UsersKind) => ({
    type: actionTypes.FETCH_USERS_START,
    payload: { loginName, target },
  }),
  succeed: (users: UserProfile[]) => ({
    type: actionTypes.FETCH_USERS_SUCCEED,
    payload: { users },
  }),
  fail: (error: AxiosError) => ({
    type: actionTypes.FETCH_USERS_FAIL,
    error: true,
    payload: { error },
  }),
};

export const fetchReviews = {
  start: (loginName: string) => ({
    type: actionTypes.FETCH_REVIEWS_START,
    payload: { loginName },
  }),
  succeed: (reviews: Review[]) => ({
    type: actionTypes.FETCH_REVIEWS_SUCCEED,
    payload: { reviews },
  }),
  fail: (error: AxiosError) => ({
    type: actionTypes.FETCH_REVIEWS_FAIL,
    error: true,
    payload: { error },
  }),
};

export const follow = (loginName: string) => ({
  type: actionTypes.FOLLOW,
  payload: { loginName },
});

export const unfollow = (loginName: string) => ({
  type: actionTypes.UNFOLLOW,
  payload: { loginName },
});

export const actions = {
  fetchUserProfile,
  fetchUsers,
  fetchReviews,
  follow,
  unfollow,
};

export type UserAction =
  | CreatorsToActions<typeof fetchUserProfile>
  | CreatorsToActions<typeof fetchUsers>
  | CreatorsToActions<typeof fetchReviews>
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>;
