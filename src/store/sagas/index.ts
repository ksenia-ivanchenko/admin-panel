import { all } from 'redux-saga/effects';
import { watchProfile } from './profileSaga';

export default function* rootSaga() {
  yield all([watchProfile()]);
}
