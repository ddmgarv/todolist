import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { SET_ADDTASK_MODAL } from 'redux/add.task/add.task.types';
import TaskItems from 'components/task.item/Task.item';
import Modal from 'components/modal/Modal';
import AddTaskForm from 'components/addTaskForm/AddTaskForm';
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
					<h5 className='toDo__container--title'>To Do</h5>
					<FontAwesomeIcon onClick={() => this.props.setModal(true)} className='toDo__container--icon' icon={faPlusCircle} />
				</div>
				<div className='toDo__container'>
					<TaskItems list={tasksToDo} />
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
