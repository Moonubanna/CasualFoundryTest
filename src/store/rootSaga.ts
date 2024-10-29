import { all } from 'redux-saga/effects';
import userSaga from './sagas/userSaga';
import postSaga from './sagas/postsSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    postSaga(),
  ]);
}