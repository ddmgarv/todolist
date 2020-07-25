import { createStore, applyMiddleware, compose } from 'redux';
import Logger from 'redux-logger';
import ReduxSaga from 'redux-saga';
import rootReducer from './rootReducer';

const middlewares = [Logger, ReduxSaga];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
