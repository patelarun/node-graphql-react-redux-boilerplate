import { take, call, put, fork } from 'redux-saga/effects'
import query from '../utility/query';
import { setErrors, addProductSuccess, fetchProductsSuccess } from '../actions';
import { fetchProductQ } from '../graphql/query';
import { addProductQ } from '../graphql/mutation';

import {
  ADD_PRODUCT,
  FETCH_PRODUCTS
} from '../constants';


function* requestAddProduct (data) {
  while (true) {
    try {
      const { payload } = yield take(ADD_PRODUCT);
      const { data, errors } = yield call(query, 'POST', addProductQ, payload);
      if (!data || errors) {
        yield put(setErrors(errors));
      } else {
        yield put(addProductSuccess(data));
      }
    } catch (err) {
      console.log(err);
    }
  }
}

function* requestFetchProduct () {
  while (true) {
    try {
      yield take(FETCH_PRODUCTS);
      const { data, errors } = yield call(query, 'GET', fetchProductQ);
      if (!data || errors) {
        yield put(setErrors(errors));
      } else {
        yield put(fetchProductsSuccess(data));
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default [
  fork(requestAddProduct),
  fork(requestFetchProduct),
];
