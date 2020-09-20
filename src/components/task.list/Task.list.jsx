import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { EDIT_TASK_REQUESTED, DELETE_TASK_REQUESTED } from 'redux/handle.task/handle.task.types';
import { swalConfirm } from 'utils/swalConfirm';
import Modal from 'components/modal/Modal';
import 'components/task.list/task.list.scss';
import EditTaskForm from 'components/edit.task.form/Edit.task.form';

class TaskList extends React.Component {
	handleEditTask = (placement, item) => {
		let text = '';
		switch (placement) {
			case 'toDoList':
				text = 'Write "inProgressList" or "doneList"';
				break;
			case 'inProgressList':
				text = 'Write "toDoList" or "doneList"';
				break;
			case 'doneList':
				text = 'Write "toDoList" or "inProgressList"';
				break;
			default:
				break;
		}
		const response = prompt(text);
		return this.props.editTask({
			fromObjStore: placement,
			toObjStore: response,
			data: item,
		});
	};

	handleDeleteTask = async (placement, id) => {
		const response = await swalConfirm();
		if (!response.value) return;
		return this.props.deleteTask({ objStore: placement, id });
	};

	render() {
		const { list, placement, modifyTaskModal } = this.props;
		return (
			<div className='itemsWrapper'>
				<ul className='itemsWrapper__list'>
					{list.map((item) => (
						<li className='itemsWrapper__list--item' key={item.id}>
							<h6>
								<b>{item.title}</b>
								<FontAwesomeIcon icon={faPencilAlt} onClick={() => this.handleEditTask(placement, item)} />
								<FontAwesomeIcon icon={faTimesCircle} onClick={() => this.handleDeleteTask(placement, item.id)} />
							</h6>
							<p>
								Description: <b>{item.description}</b>
							</p>
							<p>
								Start date: <b>{item.startDate}</b>
							</p>
							<p>
								Finish date: <b>{item.finishDate}</b>
							</p>
						</li>
					))}
				</ul>
				{modifyTaskModal && (
					<Modal>
						<EditTaskForm />
					</Modal>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	modifyTaskModal: state.handleTask.modifyTaskModal,
});

const mapDispatchToProps = (dispatch) => ({
	editTask: (payload) => dispatch({ type: EDIT_TASK_REQUESTED, payload }),
	deleteTask: (payload) => dispatch({ type: DELETE_TASK_REQUESTED, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
