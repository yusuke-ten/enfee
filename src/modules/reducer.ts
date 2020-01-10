import { combineReducers } from 'redux';

import app, { AppState } from './app/reducer';
import auth, { AuthState } from './auth/reducer';
import intializer, { InitializerState } from './initializer/reducer';
import review, { ReviewState } from './review/reducer';
import comment, { CommentState } from './comment/reducer';
import user, { UserState } from './user/reducer';

export interface RootState {
  app: AppState;
  auth: AuthState;
  intializer: InitializerState;
  review: ReviewState;
  comment: CommentState;
  user: UserState;
}

export default combineReducers<RootState>({
  app,
  auth,
  intializer,
  review,
  comment,
  user,
});
