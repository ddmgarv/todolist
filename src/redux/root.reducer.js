import { combineReducers } from 'redux';
import mainApp from 'redux/main.app/main.app.reducer';
import home from 'redux/home/home.reducer';
import handleTask from 'redux/handle.task/handle.task.reducer';

export default combineReducers({ mainApp, home, handleTask });
