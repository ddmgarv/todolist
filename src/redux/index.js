import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import homeSaga from 'redux/home/home.sagas';
import mainAppSaga from 'redux/main.app/main.app.sagas';
import rootReducer from 'redux/root.reducer';
import Logger from 'redux-logger';
import handleTask from './handle.task/handle.task.sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [Logger, sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(mainAppSaga);
sagaMiddleware.run(homeSaga);
sagaMiddleware.run(handleTask);

export default store;
