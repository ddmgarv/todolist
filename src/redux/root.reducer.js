import { combineReducers } from 'redux';
import mainApp from 'redux/main.app/main.app.reducer';
import home from 'redux/home/home.reducer';
import addTask from 'redux/add.task/add.task.reducer';
import editTask from 'redux/edit.task/edit.task.reducer';

export default combineReducers({ mainApp, home, addTask, editTask });
