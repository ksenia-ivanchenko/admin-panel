import { getProfileApi } from 'api/requests/profile';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileFailure,
} from 'store/slices/profileSlice';

function* fetchProfileSaga() {
  try {
    const profile = yield call(getProfileApi);
    yield put(fetchProfileSuccess(profile));
  } catch (error) {
    console.error('ошибка при получении профиля:', error);
    yield put(fetchProfileFailure(error.message || 'неизвестная ошибка'));
  }
}

export function* watchProfile() {
  yield takeLatest(fetchProfileRequest.type, fetchProfileSaga);
}
