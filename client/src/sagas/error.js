/* globals errorToast */
import { take, fork } from 'redux-saga/effects';
import { errorTexts } from '../constants';
import {
  SET_ERRORS
} from '../constants';

function* handleDisplayErrors () {
  try {
    while (true) {
      const { payload } = yield take(SET_ERRORS);
      if (!payload || !payload[0] ||  !payload[0].extensions) return;
      const errorCode = payload[0] && payload[0].extensions.exception.code;
      if (errorCode) {
        console.log(errorTexts[errorCode]);
        errorToast(errorTexts[errorCode]);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export default [
  fork(handleDisplayErrors),
];
