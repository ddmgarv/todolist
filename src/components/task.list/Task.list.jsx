import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import 'components/task.list/task.list.scss';
import { EDIT_TASK_REQUESTED } from 'redux/edit.task/edit.task.types';

class TaskList extends React.Component {
	constructor() {
		super();
		this.handleEditTask = this.handleEditTask.bind(this);
		this.handleDeleteTask = this.handleDeleteTask.bind(this);
	}

	handleEditTask(placement, item) {
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
	}

	handleDeleteTask(placement, id) {
		return this.props.deleteTask({ objStore: placement, id });
	}

	render() {
		const { list, placement } = this.props;
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
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	editTask: (payload) => dispatch({ type: EDIT_TASK_REQUESTED, payload }),
	deleteTask: (payload) => dispatch({ type: EDIT_TASK_REQUESTED, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
