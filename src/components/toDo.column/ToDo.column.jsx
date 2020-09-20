import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { SET_ADDTASK_MODAL } from 'redux/handle.task/handle.task.types';
import TaskList from 'components/task.list/Task.list';
import Modal from 'components/modal/Modal';
import AddTaskForm from 'components/add.task.form/Add.task.form';
import './toDo.column.scss';

class ToDoColumn extends Component {
	closeModal = () => this.props.setModal(false);
	openModal = () => this.props.setModal(true);
	render() {
		const { toDoList = [] } = this.props;
		return (
			<section className='toDoColumn'>
				<div className='toDoColumn__container'>
					<h4 className='toDoColumn__container--title'>
						To Do
						<FontAwesomeIcon onClick={this.openModal} className='toDoColumn__container--icon' icon={faPlusCircle} />
					</h4>
				</div>
				<div className='toDoColumn__container'>
					<TaskList list={toDoList} placement='toDoColumnList' />
				</div>
				{this.props.addTaskModal && (
					<Modal unsetModal={this.closeModal} title='Añadir tarea'>
						<AddTaskForm />
					</Modal>
				)}
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	toDoList: state.home.allLists.toDoList,
	addTaskModal: state.handleTask.addTaskModal,
});

const mapDispatchToProps = (dispatch) => ({
	setModal: (payload) => dispatch({ type: SET_ADDTASK_MODAL, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoColumn);
