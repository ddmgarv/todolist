import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import homeSaga from './home/home.sagas';
import Logger from 'redux-logger';
import rootReducer from './root.reducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [Logger, sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(homeSaga);

export default store;
