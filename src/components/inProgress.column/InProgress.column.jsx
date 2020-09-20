import React, { Component } from 'react';
import { connect } from 'react-redux';
import './inProgress.column.scss';
import TaskList from 'components/task.list/Task.list';

class InProgressColumn extends Component {
	render() {
		const { inProgressList = [] } = this.props;
		return (
			<section className='inProgressColumn'>
				<div className='inProgressColumn__container'>
					<h4 className='inProgressColumn__container--title'>In Progress</h4>
				</div>
				<div className='inProgressColumn__container'>
					<TaskList list={inProgressList} placement='toDoList' />
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	inProgressList: state.home.allLists.inProgressList,
});

export default connect(mapStateToProps)(InProgressColumn);
