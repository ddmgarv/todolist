import React, { Component } from 'react';
import FormInput from 'components/form.input/Form.input';
import { connect } from 'react-redux';
import { HANDLE_ADDTASK_FORM, ADD_TASK_REQUESTED } from 'redux/handle.task/handle.task.types';
import './edit.task.form.scss';

class AddTaskForm extends Component {
	submitForm = (event) => {
		event.preventDefault();
		const { formState, handleSubmit } = this.props;
		const id = Date.now();
		const submitData = { objStore: 'toDoList', data: { ...formState, id } };
		return handleSubmit(submitData);
	};
	render() {
		const { handleChange, formState } = this.props;
		return (
			<form className='addTask' onSubmit={this.submitForm}>
				<FormInput placeholder='Title' name='title' onChange={handleChange} value={formState.title} />
				<FormInput placeholder='Description' name='description' onChange={handleChange} value={formState.description} />
				<FormInput name='startDate' type='date' onChange={handleChange} value={formState.startDate} />
				<FormInput name='finishDate' type='date' onChange={handleChange} value={formState.finishDate} />
				<FormInput type='submit' value='Add task' />
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	ediTaskState: state.handleTask.ediTaskState,
	formState: state.handleTask.addTaskForm,
});

const mapDispatchToProps = (dispatch) => ({
	handleChange: (event) => dispatch({ type: HANDLE_ADDTASK_FORM, payload: event }),
	handleSubmit: (payload) => dispatch({ type: ADD_TASK_REQUESTED, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);
