import { SET_USER } from '../constants/index';

const defaultState = {};

const user = (state = defaultState , action) => {
  switch (action.type) {

    case SET_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state
  }
}

export default user;
