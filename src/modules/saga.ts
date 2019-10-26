import { fork } from 'redux-saga/effects';

import app from './app/saga';
import auth from './auth/sagas';
import intializer from './intializer/sagas';
import review from './review/sagas';

export default function* rootSaga() {
  yield fork(app);
  yield fork(auth);
  yield fork(intializer);
  yield fork(review);
}
