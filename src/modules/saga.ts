import { fork } from 'redux-saga/effects';
import app from './app/saga';
import auth from './auth/sagas';

export default function* rootSaga() {
  yield fork(app);
  yield fork(auth);
}
