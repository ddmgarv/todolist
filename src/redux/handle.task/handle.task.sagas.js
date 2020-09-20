import { call, put, takeLatest, all } from 'redux-saga/effects';
import { setDataIDB, editDataIDB, deleteDataIDB } from 'database';
import * as handleTaskTypes from 'redux/handle.task/handle.task.types';

function* addTask(action) {
	try {
		yield call(setDataIDB, action.payload);
		yield put({ type: handleTaskTypes.ADD_TASK_SUCCEEDED, payload: true });
	} catch (e) {
		yield put({ type: handleTaskTypes.ADD_TASK_FAILED, payload: e.message });
	}
}

function* editTask(action) {
	try {
		yield call(editDataIDB, action.payload);
		yield put({ type: handleTaskTypes.EDIT_TASK_SUCCEEDED, payload: true });
	} catch (e) {
		yield put({ type: handleTaskTypes.EDIT_TASK_FAILED, payload: e.message });
	}
}

function* deleteTask(action) {
	try {
		yield call(deleteDataIDB, action.payload);
		yield put({ type: handleTaskTypes.DELETE_TASK_SUCCEEDED, payload: true });
	} catch (e) {
		yield put({ type: handleTaskTypes.DELETE_TASK_FAILED, payload: e.message });
	}
}

function* watchEditTask() {
	yield takeLatest(handleTaskTypes.EDIT_TASK_REQUESTED, editTask);
}

function* watchDeleteTask() {
	yield takeLatest(handleTaskTypes.DELETE_TASK_REQUESTED, deleteTask);
}

function* watchAddTask() {
	yield takeLatest(handleTaskTypes.ADD_TASK_REQUESTED, addTask);
}

export default function* addTaskSagas() {
	yield all([watchAddTask(), watchEditTask(), watchDeleteTask()]);
}
