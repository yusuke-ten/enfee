import { Reducer } from 'redux';
import { UserProfile, Review } from 'services/models';
import { actionTypes, UserAction } from './actions';

export interface UserState {
  isLoading: boolean;
  profile: UserProfile;
  users: UserProfile[];
  reviews: Review[];
}

const initialState: UserState = {
  isLoading: false,
  profile: {
    id: 0,
    displayName: '',
    loginName: '',
    profile: '',
    imageUrl: '',
    followerCount: 0,
    followingCount: 0,
    reviewCount: 0,
    isFollowing: false,
    loveStore: null,
  },
  users: [],
  reviews: [],
};

const reducer: Reducer<UserState, UserAction> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_PROFILE_START:
      return { ...state, profile: initialState.profile };
    case actionTypes.FETCH_USER_PROFILE_SUCCEED: {
      return {
        ...state,
        profile: action.payload.userProfile,
      };
    }
    case actionTypes.FETCH_USER_PROFILE_FAIL:
      return { ...state };
    case actionTypes.FETCH_USERS_START:
      return { ...state, isLoading: true, users: [], reviews: [] };
    case actionTypes.FETCH_USERS_SUCCEED:
      return {
        ...state,
        isLoading: false,
        users: action.payload.users,
      };
    case actionTypes.FETCH_USERS_FAIL:
      return { ...state, isLoading: false, users: [] };
    case actionTypes.FETCH_REVIEWS_START:
      return { ...state, isLoading: true, reviews: [], users: [] };
    case actionTypes.FETCH_REVIEWS_SUCCEED:
      return { ...state, isLoading: false, reviews: action.payload.reviews };
    case actionTypes.FETCH_REVIEWS_FAIL:
      return { ...state, isLoading: false };
    case actionTypes.FOLLOW: {
      const { loginName } = action.payload;
      // TODO: すべてのユーザーをチェックしているので、stateをシリアライズして処理したい
      // ({ [loginName]: profile })
      // TODO: profileとusersどちらの変更か確認する方法を変える
      const changeStatus = (u: UserProfile) =>
        u.loginName === loginName ? { ...u, isFollowing: true } : u;

      return {
        ...state,
        users: state.users.map(changeStatus),
        profile:
          loginName === state.profile.loginName
            ? { ...state.profile, isFollowing: true }
            : state.profile,
      };
    }
    case actionTypes.UNFOLLOW: {
      const { loginName } = action.payload;

      const changeStatus = (u: UserProfile) =>
        u.loginName === loginName ? { ...u, isFollowing: false } : u;

      return {
        ...state,
        users: state.users.map(changeStatus),
        profile:
          loginName === state.profile.loginName
            ? { ...state.profile, isFollowing: false }
            : state.profile,
      };
    }
    case actionTypes.UPDATE_PROFILE_START:
    case actionTypes.UPDATE_PROFILE_SUCCEED:
    case actionTypes.UPDATE_PROFILE_FAIL:
      return { ...state };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
