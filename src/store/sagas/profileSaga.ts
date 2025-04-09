import { getProfileApi } from 'api/requests/profile';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getProfileRequest,
  getProfileSuccess,
  getProfileFailure,
} from 'store/slices/profileSlice';

function* getProfileSaga() {
  try {
    const profile = yield call(getProfileApi);
    yield put(getProfileSuccess(profile));
  } catch (error) {
    console.error('ошибка при получении профиля:', error);
    yield put(getProfileFailure(error.message || 'ошибка загрузки профиля'));
  }
}

export function* profileSaga() {
  yield takeLatest(getProfileRequest.type, getProfileSaga);
}
