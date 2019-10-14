import { combineReducers } from 'redux';
import app, { AppState } from './app';

export interface RootState {
  app: AppState;
}

export default combineReducers<RootState>({
  app,
});
