import Swal from 'sweetalert2';
import * as handleTaskTypes from './handle.task.types';

const initialState = {
	addTaskState: false,
	addTaskModal: false,
	modifyTaskModal: false,
	addTaskForm: {
		title: '',
		description: '',
		startDate: '',
		finishDate: '',
	},
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case handleTaskTypes.ADD_TASK_SUCCEEDED:
			Swal.fire({
				title: 'Done',
				text: 'Task added successfully.',
				icon: 'success',
				timer: 2000,
			});
			return { ...state, addTaskState: payload };
		case handleTaskTypes.ADD_TASK_FAILED:
			Swal.fire({
				title: 'Error',
				text: `Something went wrong: ${payload}`,
				icon: 'warning',
				timer: 2000,
			});
			return { ...state, addTaskState: payload };
		case handleTaskTypes.HANDLE_ADDTASK_FORM:
			return { ...state, addTaskForm: { ...state.addTaskForm, [payload.target.name]: payload.target.value } };
		case handleTaskTypes.SET_ADDTASK_MODAL:
			return { ...state, addTaskModal: payload };
		case handleTaskTypes.EDIT_TASK_SUCCEEDED:
			Swal.fire({
				title: 'Done',
				text: 'Task Edited successfully.',
				icon: 'success',
				timer: 2000,
			});
			return { ...state, editTaskStatus: payload };
		case handleTaskTypes.EDIT_TASK_FAILED:
			Swal.fire({
				title: 'Error',
				text: `Something went wrong: ${payload}`,
				icon: 'warning',
				timer: 2000,
			});
			return { ...state, editTaskStatus: payload };
		case handleTaskTypes.EDIT_TASK_MODAL:
			return { ...state, editTaskStatus: payload };
		case handleTaskTypes.DELETE_TASK_REQUESTED:
			return state;
		case handleTaskTypes.DELETE_TASK_SUCCEEDED:
			Swal.fire({
				title: 'Done',
				text: 'Task deleted successfully.',
				icon: 'success',
				timer: 2000,
			});
			return state;
		case handleTaskTypes.DELETE_TASK_FAILED:
			Swal.fire({
				title: 'Error',
				text: `An error ocurred: ${payload}.`,
				icon: 'warning',
				timer: 2000,
			});
			return state;
		default:
			return state;
	}
};
