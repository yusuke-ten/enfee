import { Reducer } from 'redux';
import { InitializerAction, actionTypes } from './actions';

export interface InitializerState {
  localstorgeChecked: boolean;
  appInitialized: boolean;
  reviewFormInitialized: boolean;
}

const initialState: InitializerState = {
  localstorgeChecked: false,
  appInitialized: false,
  reviewFormInitialized: false,
};

const reducer: Reducer<InitializerState, InitializerAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case actionTypes.CHECKED_LOCALSTORAGE:
      return { ...state, localstorgeChecked: true };
    case actionTypes.INITIALIZE_APP:
      return { ...state };
    case actionTypes.APP_INITIALIZED:
      return { ...state, appInitialized: true };
    case actionTypes.INITIALIZE_REVIEW_FORM:
      return { ...state };
    case actionTypes.REVIEW_FORM_INITIALIZED:
      return { ...state, reviewFormInitialized: true };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
