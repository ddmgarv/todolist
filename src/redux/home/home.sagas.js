import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as homeTypes from 'redux/home/home.types';
import { getAllDataIDB } from 'database';

function* callIDBData() {
	try {
		const data = yield call(getAllDataIDB);
		yield put({ type: homeTypes.GET_ALL_LISTS_SUCCEEDED, payload: data });
	} catch (e) {
		yield put({ type: homeTypes.GET_ALL_LISTS_FAILED, payload: e.message });
	}
}

function* watchGetLists() {
	yield takeLatest(homeTypes.GET_ALL_LISTS_REQUESTED, callIDBData);
}

export default function* homeSagas() {
	yield all([watchGetLists()]);
}
