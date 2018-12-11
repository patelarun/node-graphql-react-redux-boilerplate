import store from '../store/store';
import { getUser } from '../actions';
import { toast } from 'react-toastify';
import {
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  HOME_ROUTE,
} from '../constants';

class DataManager {

  constructor () {
    this.state = store.getState();
    this.dispatch = store.dispatch;
  }

  getInitialData () {
    const { state, dispatch } = this;

    this.initialiseTost();

    const token = localStorage.getItem('auth_token');
    const currentPath = window.location.pathname;
    const isPublicRoute = currentPath.includes(LOGIN_ROUTE) || currentPath.includes(SIGNUP_ROUTE);

    if (!token && isPublicRoute) {
      return;
    } else if (!token && !isPublicRoute) {
      return window.location.href = LOGIN_ROUTE;
    }

    if (!state.user || !state.user.currentUser) {
      dispatch(getUser());
    }

    if (token && (isPublicRoute || currentPath === '/')) {
      window.location.href = HOME_ROUTE;
    }

  }

  initialiseTost () {
    window.toast = toast;
    window.successToast = (msg) => toast.success(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    window.errorToast = (msg) => toast.error(msg, {
        position: toast.POSITION.TOP_CENTER,
      });
  }

}

const dataManager = new DataManager();

export default dataManager;
