import { combineReducers } from 'redux';
import todo, { TodoState } from './todos';

export interface ApplicationState {
  todo: TodoState;
}

export default combineReducers<ApplicationState>({
  todo,
});
