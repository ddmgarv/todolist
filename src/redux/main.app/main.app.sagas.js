import { call, takeLatest, put, all } from 'redux-saga/effects';
import * as mainAppTypes from 'redux/main.app/main.app.types';
import initIDB from 'database';
function* callIDBData() {
	try {
		const idb = yield call(initIDB);
		yield put({ type: mainAppTypes.SET_IDB_SUCCEEDED, payload: idb });
	} catch (e) {
		yield put({ type: mainAppTypes.SET_IDB_FAILED, payload: e.message });
	}
}

function* watchMainApp() {
	yield takeLatest(mainAppTypes.SET_IDB_REQUESTED, callIDBData);
}

export default function* homeSagas() {
	yield all([watchMainApp()]);
}
