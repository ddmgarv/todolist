import React, { Component } from 'react';
import { connect } from 'react-redux';
import './inProgress.column.scss';
import TaskList from 'components/task.list/Task.list';

class InProgressColumn extends Component {
	render() {
		const { tasksInProgress = [] } = this.props;
		return (
			<section>
				<div>
					<h4>In Progress</h4>
				</div>
				<div>
					<TaskList list={tasksInProgress} placement='toDoList' />
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	tasksInProgress: state.home.allLists.inProgressList,
});

export default connect(mapStateToProps)(InProgressColumn);
