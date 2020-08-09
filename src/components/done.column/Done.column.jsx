import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from 'components/task.list/Task.list';
import './done.column.scss';

class DoneColumn extends Component {
	render() {
		const { tasksDone = [] } = this.props;
		return (
			<section>
				<div>
					<h4>Done</h4>
				</div>
				<div>
					<TaskList list={tasksDone} placement='doneList' />
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	tasksDone: state.home.allLists.doneList,
});

export default connect(mapStateToProps)(DoneColumn);
