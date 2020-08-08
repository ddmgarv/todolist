import React, { Component } from 'react';
import FormInput from 'components/form.input/Form.input';
import { connect } from 'react-redux';
import { HANDLE_ADDTASK_FORM, ADD_TASK_REQUESTED } from 'redux/add.task/add.task.types';
import './addTaskForm.scss';

class AddTaskForm extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		const { formState, handleForm } = this.props;
		const id = Date.now();
		const submitData = { objStore: 'toDoList', data: { ...formState, id } };
		return handleForm(submitData);
	}
	render() {
		const { handleChange, formState } = this.props;
		return (
			<form className='addTask' onSubmit={this.handleSubmit}>
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
	addTaskState: state.addTask.addTaskState,
	formState: state.addTask.addTaskForm,
});

const mapDispatchToProps = (dispatch) => ({
	handleChange: (event) => dispatch({ type: HANDLE_ADDTASK_FORM, payload: event }),
	handleForm: (data) => dispatch({ type: ADD_TASK_REQUESTED, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);
