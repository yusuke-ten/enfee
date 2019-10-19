import { fork } from 'redux-saga/effects';

import app from './app/saga';
import auth from './auth/sagas';
import intializer from './intializer/sagas';

export default function* rootSaga() {
  yield fork(app);
  yield fork(auth);
  yield fork(intializer);
}
