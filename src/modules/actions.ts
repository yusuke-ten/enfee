import { AppAction } from './app/actions';
import { AuthAction } from './auth/actions';
import { CommentAction } from './comment/actions';
import { InitializerAction } from './initializer/actions';
import { ReviewAction } from './review/actions';
import { UserAction } from './user/actions';

export const metaKeys = {
  LOADING_PAGE: 'LOADING_PAGE',
} as const;

export type Action =
  | AppAction
  | AuthAction
  | CommentAction
  | InitializerAction
  | ReviewAction
  | UserAction;
