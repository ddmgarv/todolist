import { call, put, takeLatest, all } from 'redux-saga/effects';
import { setDataIDB } from 'database';
import * as addTasksTypes from 'redux/add.task/add.task.types';

function* addTask(action) {
	try {
		yield call(setDataIDB, action.payload);
		yield put({ type: addTasksTypes.ADD_TASK_SUCCEEDED, payload: true });
	} catch (e) {
		yield put({ type: addTasksTypes.ADD_TASK_FAILED, payload: e.message });
	}
}

function* watchAddTask() {
	yield takeLatest(addTasksTypes.ADD_TASK_REQUESTED, addTask);
}

export default function* addTaskSagas() {
	yield all([watchAddTask()]);
}
