import { call, takeLatest, put, all } from 'redux-saga/effects';
import * as editTaskTypes from 'redux/edit.task/edit.task.types';
import { editDataIDB, deleteDataIDB } from 'database';

function* editTask(action) {
	try {
		yield call(editDataIDB, action.payload);
		yield put({ type: editTaskTypes.EDIT_TASK_SUCCEEDED, payload: true });
	} catch (e) {
		yield put({ type: editTaskTypes.EDIT_TASK_FAILED, payload: e.message });
	}
}

function* deleteTask(action) {
	try {
		yield call(deleteDataIDB, action.payload);
		yield put({ type: editTaskTypes.EDIT_TASK_SUCCEEDED, payload: true });
	} catch (e) {
		yield put({ type: editTaskTypes.EDIT_TASK_FAILED, payload: e.message });
	}
}

function* watchEditTask() {
	yield takeLatest(editTaskTypes.EDIT_TASK_REQUESTED, editTask);
}

function* watchDeleteTask() {
	yield takeLatest(editTaskTypes.EDIT_TASK_REQUESTED, deleteTask);
}

export default function* editSagas() {
	yield all([watchEditTask(), watchDeleteTask()]);
}
