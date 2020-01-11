import { Reducer } from 'redux';
import { UserProfile, StoreItem } from 'services/models';
import { AppAction, actionTypes } from './actions';

export interface AppState {
  initialized: boolean;
  isFetchedProfile: boolean;
  myProfile: UserProfile | null;
  isLoadingPage: boolean;
  stores: StoreItem[];
}

const initialState: AppState = {
  initialized: false,
  isFetchedProfile: false,
  myProfile: null,
  isLoadingPage: false,
  stores: [],
};

const reducer: Reducer<AppState, AppAction> = (
  state: AppState = initialState,
  action: AppAction,
) => {
  switch (action.type) {
    case actionTypes.FETCH_MY_PROFILE_START:
      return { ...state };
    case actionTypes.FETCH_MY_PROFILE_SUCCEED:
      return {
        ...state,
        isFetchedProfile: true,
        myProfile: action.payload.params,
      };
    case actionTypes.FETCH_MY_PROFILE_FAIL:
      return {
        ...state,
      };
    case actionTypes.TOGGLE_LODING:
      return {
        ...state,
        isLoadingPage: action.payload.status,
      };
    case actionTypes.FETCH_STORES_START:
      return { ...state };
    case actionTypes.FETCH_STORES_SUCCEED:
      return { ...state, stores: action.payload.stores };
    case actionTypes.FETCH_STORES_FAIL:
      return { ...state };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
