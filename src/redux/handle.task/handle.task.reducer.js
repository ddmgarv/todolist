import * as handleTaskTypes from './handle.task.types';

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
    case handleTaskTypes.ADD_TASK_SUCCEEDED:
      return { ...state, addTaskState: payload };
    case handleTaskTypes.ADD_TASK_FAILED:
      return { ...state, addTaskState: payload };
    case handleTaskTypes.HANDLE_ADDTASK_FORM:
      return { ...state, addTaskForm: { ...state.addTaskForm, [payload.target.name]: payload.target.value } };
    case handleTaskTypes.SET_ADDTASK_MODAL:
      return { ...state, addTaskModal: payload };
    case handleTaskTypes.EDIT_TASK_SUCCEEDED:
      return { ...state, editTaskStatus: payload };
    case handleTaskTypes.EDIT_TASK_FAILED:
      return { ...state, editTaskStatus: payload };
    case handleTaskTypes.EDIT_TASK_MODAL:
      return { ...state, editTaskStatus: payload };
    default:
      return state;
  }
};
