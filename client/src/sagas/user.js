import { take, call, put, fork } from 'redux-saga/effects';
import query from '../utility/query';
import { signupQ, loginQ } from '../graphql/mutation';
import { getUserQ } from '../graphql/query';
import { setUser, setToken, setErrors } from '../actions';
import {
  GET_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  SET_TOKEN,
} from '../constants';


function* requestGetUser () {
  while (true) {
    try {
      yield take(GET_USER);
      const { data, errors } = yield call(query, 'GET', getUserQ);
      if (!data || errors) {
        yield put(setErrors(errors));
      } else {
        window.currentUser = data.getUser;
        yield put(setUser(data.getUser));
      }
    } catch (err) {
      console.log(err);
    }
  }
}

function* login () {
  while (true) {
    try {
      const { payload } = yield take(LOGIN_USER);
      const { data, errors } = yield call(query, 'POST', loginQ, payload);
      if (!data || errors) {
        yield put(setErrors(errors));
      } else {
        yield put(setToken(data.getToken));
      }
    } catch (err) {
    console.log(err);
    }
  }
}

function* registration () {
  while (true) {
    try {
      const { payload } = yield take(REGISTER_USER);
      const { data, errors} = yield call(query, 'POST', signupQ, payload);
      if (!data || errors) {
        yield put(setErrors(errors));
      } else {
        yield put(setToken(data.registerUser));
      }
    } catch (err) {
      console.log(err);
    }
  }
}

function* setUserToken () {
  while (true) {
    try {
      const { payload } = yield take(SET_TOKEN);
      if (payload) {
        localStorage.setItem('auth_token', payload.value);
        window.location.href = '/home';
      }
    } catch (err) {
    console.log(err);
    }
  }
}

function* requestlogoutUser () {
  while (true) {
    try {
      yield take(LOGOUT_USER);
      delete window.currentUser;
      localStorage.removeItem('auth_token');
      setTimeout(() => { window.location.reload() }, 100);
    } catch (err) {
      console.log(err);
    }
  }
}

export default [
  fork(login),
  fork(registration),
  fork(setUserToken),
  fork(requestGetUser),
  fork(requestlogoutUser),
];
