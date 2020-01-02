import { fork } from 'redux-saga/effects';

import app from './app/saga';
import auth from './auth/sagas';
import intializer from './intializer/sagas';
import review from './review/sagas';
import comment from './comment/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  yield fork(app);
  yield fork(auth);
  yield fork(intializer);
  yield fork(review);
  yield fork(comment);
  yield fork(user);
}
