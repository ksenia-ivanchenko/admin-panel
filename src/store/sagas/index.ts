import { all } from 'redux-saga/effects';
import { profileSaga } from './profileSaga';
import { postsSaga } from './postsSaga';

export default function* rootSaga() {
  yield all([profileSaga(), postsSaga()]);
}
