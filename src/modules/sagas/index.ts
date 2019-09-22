import { fork } from 'redux-saga/effects';
import app from './app';

export default function* rootSaga() {
  yield fork(app);
}
