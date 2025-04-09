import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getPostsRequest,
  getPostsSuccess,
  getPostsFailure,
} from '../slices/postsSlice';
import { getPostsApi } from 'api/requests/posts';
import { PayloadAction } from '@reduxjs/toolkit';

function* handleGetPosts(action: PayloadAction<number>) {
  try {
    const { posts, pagination } = yield call(getPostsApi, action.payload);
    yield put(getPostsSuccess({ posts, pagination }));
  } catch (error) {
    yield put(getPostsFailure(error.message || 'ошибка загрузки постов'));
  }
}

export function* postsSaga() {
  yield takeLatest(getPostsRequest.type, handleGetPosts);
}
