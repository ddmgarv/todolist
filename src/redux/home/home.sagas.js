import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as homeTypes from './home.types';
import { getAllDataIDB } from 'IDB';

function* getIDBData() {
	try {
		const data = yield call(getAllDataIDB);
		yield put({ type: homeTypes.GET_ALL_LISTS_SUCCEEDED, data });
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
