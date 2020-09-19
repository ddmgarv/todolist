import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as homeTypes from 'redux/home/home.types';
import { getAllDataIDB } from 'database';
import { ADD_TASK_SUCCEEDED, EDIT_TASK_SUCCEEDED } from 'redux/handle.task/handle.task.types';

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

function* watchAddedTasks() {
  yield takeLatest(ADD_TASK_SUCCEEDED, callIDBData);
}

function* watchEditedTasks() {
  yield takeLatest(EDIT_TASK_SUCCEEDED, callIDBData);
}

// function* watchDeletedTasks() {
// 	yield takeLatest(homeTypes.GET_ALL_LISTS_REQUESTED, callIDBData);
// }

// function* watchInProgressTasks() {
// 	yield takeLatest(homeTypes.GET_ALL_LISTS_REQUESTED, callIDBData);
// }

export default function* homeSagas() {
  yield all([watchGetLists(), watchAddedTasks(), watchEditedTasks()]);
}
