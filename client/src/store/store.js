import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducer from '../reducers/combineReducer';
import rootSaga from '../sagas'; 

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducer,
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;