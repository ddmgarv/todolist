import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as homeTypes from './home.types';

function* getIDBData(action) {
	try {
		const user = yield call(new Promise(() => console.log('RUNNING HERE')));
		yield put({ type: homeTypes.GET_ALL_LISTS_SUCCEEDED, user });
	} catch (e) {
		yield put({ type: homeTypes.GET_ALL_LISTS_FAIL, message: e.message });
	}
}

function* homeSaga() {
	yield takeLatest(homeTypes.GET_ALL_LISTS_REQUESTED, getIDBData);
}
export default function* homeSagas() {
	yield all([homeSaga()]);
}
