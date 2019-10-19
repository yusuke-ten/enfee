import { combineReducers } from 'redux';
import app, { AppState } from './app/reducer';
import auth, { AuthState } from './auth/reducer';

export interface RootState {
  app: AppState;
  auth: AuthState;
}

export default combineReducers<RootState>({
  app,
  auth,
});
