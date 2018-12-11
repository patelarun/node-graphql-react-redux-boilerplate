import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  GET_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  SET_ERRORS,
  SET_TOKEN,
  SET_USER,
} from '../constants';

export const addProduct = payload => ({ type: ADD_PRODUCT, payload });
export const addProductSuccess = payload => ({ type: ADD_PRODUCT_SUCCESS, payload });
export const fetchProducts = () => ({ type: FETCH_PRODUCTS });
export const fetchProductsSuccess = payload => ({ type: FETCH_PRODUCTS_SUCCESS, payload });
export const getUser = payload => ({ type: GET_USER, payload });
export const loginUser = payload => ({ type: LOGIN_USER, payload });
export const logoutUser = payload => ({ type: LOGOUT_USER, payload });
export const registerUser = payload => ({ type: REGISTER_USER, payload });
export const setUser = payload => ({ type: SET_USER, payload });
export const setToken = payload => ({ type: SET_TOKEN, payload });
export const setErrors = payload => ({ type: SET_ERRORS, payload });
