import { combineReducers } from 'redux';

import app, { AppState } from './app/reducer';
import auth, { AuthState } from './auth/reducer';
import intializer, { InitializerState } from './intializer/reducer';
import review, { ReviewState } from './review/reducer';
import comment, { CommentState } from './comment/reducer';

export interface RootState {
  app: AppState;
  auth: AuthState;
  intializer: InitializerState;
  review: ReviewState;
  comment: CommentState;
}

export default combineReducers<RootState>({
  app,
  auth,
  intializer,
  review,
  comment,
});