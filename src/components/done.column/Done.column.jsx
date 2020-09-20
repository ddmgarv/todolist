import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from 'components/task.list/Task.list';
import './done.column.scss';

class DoneColumn extends Component {
	render() {
		const { doneList = [] } = this.props;
		return (
			<section className='doneColumn'>
				<div className='doneColumn__container'>
					<h4>Done</h4>
				</div>
				<div className='doneColumn__container'>
					<TaskList list={doneList} placement='doneList' />
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	doneList: state.home.allLists.doneList,
});

export default connect(mapStateToProps)(DoneColumn);
