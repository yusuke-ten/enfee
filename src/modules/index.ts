import { combineReducers } from 'redux';

import app, { AppState } from './app/reducer';
import auth, { AuthState } from './auth/reducer';
import intializer, { InitializerState } from './intializer/reducer';

export interface RootState {
  app: AppState;
  auth: AuthState;
  intializer: InitializerState;
}

export default combineReducers<RootState>({
  app,
  auth,
  intializer,
});
