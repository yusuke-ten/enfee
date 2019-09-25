import { combineReducers } from 'redux';
import todo, { TodoState } from './todos';
import app, { AppState } from './app';

export interface RootState {
  todo: TodoState;
  app: AppState;
}

export default combineReducers<RootState>({
  todo,
  app,
});
