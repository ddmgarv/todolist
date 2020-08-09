import * as editTaskTypes from './edit.task.types';

const initialState = {
	editTaskStatus: '',
	editTaskModal: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case editTaskTypes.EDIT_TASK_SUCCEEDED:
			return { ...state, editTaskStatus: payload };
		case editTaskTypes.EDIT_TASK_FAILED:
			return { ...state, editTaskStatus: payload };
		case editTaskTypes.EDIT_TASK_MODAL:
			return { ...state, editTaskStatus: payload };
		default:
			return state;
	}
};
