import { call, put, takeLatest } from 'redux-saga/effects';
import apiClient from '../../networking/network';
import { API_ENDPOINTS } from '../../networking/endpoints';
import {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostDetails,
  fetchPostDetailsSuccess,
  fetchPostDetailsFailure,
  fetchSingleUser,
  fetchSingleUserSuccess,
  fetchSingleUserFailure,
  fetchSearchPosts,
  fetchSearchPostsSuccess,
  fetchSearchPostsFailure,
  clearPosts,
  clearSearchPosts
} from '../slices/postSlice';

function* fetchPostsSaga(action: { type: string; payload: number }) {
  try {
    const limit = 30; // Number of posts per page
    const skip = action.payload === 1 ? 0 : ((action.payload - 1) * limit); // Calculate skip based on the page number
    const response = yield call(apiClient.get, `${API_ENDPOINTS.POSTS}?limit=${limit}&skip=${skip}`);
    yield put(fetchPostsSuccess(response));
  } catch (error) {
    yield put(fetchPostsFailure('Failed to fetch posts.'));
  }
}

function* fetchPostDetailsSaga(action: { type: string; payload: number }) {
  try {
    // Fetch post details
    const response = yield call(apiClient.get, API_ENDPOINTS.POST_DETAILS(action.payload));
    yield put(fetchPostDetailsSuccess(response));
  } catch (error) {
    yield put(fetchPostDetailsFailure('Failed to fetch post details.'));
  }
}

function* fetchSingleUserSaga(action: { type: string; payload: number }) {
  try {
    // Fetch single user
    const response = yield call(apiClient.get, API_ENDPOINTS.USER(action.payload));
    yield put(fetchSingleUserSuccess(response));
  } catch (error) {
    yield put(fetchSingleUserFailure('Failed to fetch post details.'));
  }
}

function* fetchSearchPostsSaga(action: { type: string; payload: string }) {
  try {
    // Fetch search posts
    const response = yield call(apiClient.get, API_ENDPOINTS.SEARCH_POST(action.payload));
    yield put(fetchSearchPostsSuccess(response));
  } catch (error) {
    yield put(fetchSearchPostsFailure('Failed to fetch posts.'));
  }
}

function* postSaga() {
  yield takeLatest(fetchPosts.type, fetchPostsSaga);
  yield takeLatest(fetchPostDetails.type, fetchPostDetailsSaga);
  yield takeLatest(fetchSingleUser.type, fetchSingleUserSaga);
  yield takeLatest(fetchSearchPosts.type, fetchSearchPostsSaga);
  yield takeLatest(clearPosts.type, function* () {});
  yield takeLatest(clearSearchPosts.type, function* () {});
}

export default postSaga;