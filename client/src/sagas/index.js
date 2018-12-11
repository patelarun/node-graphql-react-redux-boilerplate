import { all } from 'redux-saga/effects';
import product from './product';
import user from './user';
import error from './error';

function* rootSaga() {
  yield all([
    ...user,
    ...product,
    ...error,
  ]);
}

export default rootSaga;
