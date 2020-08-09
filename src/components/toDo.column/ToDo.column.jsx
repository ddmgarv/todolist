import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { SET_ADDTASK_MODAL } from 'redux/add.task/add.task.types';
import TaskList from 'components/task.list/Task.list';
import Modal from 'components/modal/Modal';
import AddTaskForm from 'components/add.task.form/Add.task.form';
import './toDo.column.scss';

class ToDoColumn extends Component {
	constructor() {
		super();
		this.unsetModal = this.unsetModal.bind(this);
	}
	unsetModal() {
		return this.props.setModal(false);
	}
	render() {
		const { tasksToDo = [] } = this.props;
		return (
			<section className='toDo'>
				<div className='toDo__container'>
					<h4 className='toDo__container--title'>
						To Do
						<FontAwesomeIcon onClick={() => this.props.setModal(true)} className='toDo__container--icon' icon={faPlusCircle} />
					</h4>
				</div>
				<div className='toDo__container'>
					<TaskList list={tasksToDo} placement='toDoList' />
				</div>
				{this.props.modalState && (
					<Modal unsetModal={this.unsetModal} title='Añadir tarea'>
						<AddTaskForm />
					</Modal>
				)}
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	tasksToDo: state.home.allLists.toDoList,
	modalState: state.addTask.addTaskModal,
});

const mapDispatchToProps = (dispatch) => ({
	setModal: (payload) => dispatch({ type: SET_ADDTASK_MODAL, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoColumn);
