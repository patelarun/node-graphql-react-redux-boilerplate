import { combineReducers } from 'redux'
import user from './users';
import products from './products';

export default combineReducers({
  user,
  products,
});
