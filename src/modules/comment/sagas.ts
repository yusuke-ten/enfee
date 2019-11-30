import { fork, takeEvery } from 'redux-saga/effects';
import { actionTypes } from './actions';

function runSetComments() {
  console.log('hogemiso');
}

function* watchSetComments() {
  yield takeEvery(actionTypes.SET_COMMENTS, runSetComments);
}

export default function* rootSaga() {
  yield fork(watchSetComments);
}
