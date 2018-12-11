import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DataManager from '../DataManager';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  HOME_ROUTE,
} from '../constants';


const Home = lazy(() => import('../containers/Home'));
const Signup = lazy(() => import('../containers/Signup'));
const Login = lazy(() => import('../containers/Login'));

class App extends Component {
  constructor (props) {
    super(props);
    DataManager.getInitialData();
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Suspense fallback={<h4>Loading ...</h4>}>
            {/* Throws weird error when write component-name in route component*/}
            {/* Invalid prop `component` of type `object` supplied to `Route`, expected `function` */}
            <Route exact path={LOGIN_ROUTE} component={props => <Login {...props} />} />
            <Route exact path={SIGNUP_ROUTE} component={props => <Signup {...props} />} />
            <Route path={HOME_ROUTE} component={props => <Home {...props} />} />
            <ToastContainer autoClose={4000} />
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
