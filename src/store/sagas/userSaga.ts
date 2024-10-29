import { call, put, takeLatest } from 'redux-saga/effects';
import apiClient from '../../networking/network';
import { API_ENDPOINTS } from '../../networking/endpoints';
import { loginRequest, loginSuccess, loginFailure } from '../slices/userSlice';

function* login(action: { type: string; payload: { username: string; password: string } }) {
  yield put(loginRequest);
  try {
    const response = yield call(apiClient.post, API_ENDPOINTS.LOGIN, action.payload);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* userSaga() {
  yield takeLatest(loginRequest.type, login);
}

export default userSaga;