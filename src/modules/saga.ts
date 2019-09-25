import { fork } from 'redux-saga/effects';
import app from './app/saga';

export default function* rootSaga() {
  yield fork(app);
}
