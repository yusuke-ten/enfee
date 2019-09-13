import { combineReducers } from 'redux';
import todo, { TodoState } from './todos';
import app, { AppState } from './app';

export interface ApplicationState {
  todo: TodoState;
  app: AppState;
}

export default combineReducers<ApplicationState>({
  todo,
  app,
});
