import { combineReducers } from 'redux';
import mainApp from 'redux/main.app/main.app.reducer';
import home from 'redux/home/home.reducer';

export default combineReducers({ mainApp, home });
