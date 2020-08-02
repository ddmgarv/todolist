import * as addTaskTypes from './add.task.types';

const initialState = {
	addTaskState: false,
	addTaskModal: false,
	addTaskForm: {
		title: '',
		description: '',
		startDate: '',
		finishDate: '',
	},
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case addTaskTypes.ADD_TASK_SUCCEEDED:
			return { ...state, addTaskState: payload };
		case addTaskTypes.ADD_TASK_FAILED:
			return { ...state, addTaskState: payload };
		case addTaskTypes.HANDLE_ADDTASK_FORM:
			return { ...state, addTaskForm: { ...state.addTaskForm, [payload.name]: payload.value } };
		case addTaskTypes.SET_ADDTASK_MODAL:
			return { ...state, addTaskModal: payload };
		default:
			return state;
	}
};
