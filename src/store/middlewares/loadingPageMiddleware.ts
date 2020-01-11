import { MiddlewareAPI, Dispatch } from 'redux';
import { Action, metaKeys } from 'modules/actions';
import { RootState } from 'modules/reducer';
import { toggleLoadingPage } from 'modules/app/actions';

const pageLoadingMiddleware = (store: MiddlewareAPI<Dispatch, RootState>) => (
  next: Dispatch,
) => (action: Action) => {
  if (!('meta' in action) || !(metaKeys.LOADING_PAGE in action.meta)) {
    return next(action);
  }

  store.dispatch(toggleLoadingPage(action.meta.LOADING_PAGE));

  return next(action);
};

export default pageLoadingMiddleware;
