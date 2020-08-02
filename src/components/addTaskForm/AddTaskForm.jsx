import React, { Component } from 'react';
import FormInput from 'components/formInput/FormInput';
import { connect } from 'react-redux';
import { HANDLE_ADDTASK_FORM, ADD_TASK_REQUESTED } from 'redux/add.task/add.task.types';

class AddTaskForm extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		return this.props.handleForm(this.props.formState);
	}
	render() {
		return (
			<form className='addTask' onSubmit={this.handleSubmit}>
				<FormInput name='title' onChange={this.props.handleChange} value={this.props.formState.title} />
				<FormInput name='description' onChange={this.props.handleChange} value={this.props.formState.description} />
				<FormInput name='startDate' type='date' onChange={this.props.handleChange} value={this.props.formState.startDate} />
				<FormInput name='finishDate' type='date' onChange={this.props.handleChange} value={this.props.formState.finishDate} />
				<FormInput type='submit' />
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
