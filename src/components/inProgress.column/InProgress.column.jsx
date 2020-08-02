import React, { Component } from 'react';
import { connect } from 'react-redux';
import './inProgress.column.scss';

class InProgressColumn extends Component {
	render() {
		const { tasksInProgress = [] } = this.props;
		return (
			<section>
				<div>
					<h5>In Progress</h5>
				</div>
				<div>
					{tasksInProgress.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	tasksInProgress: state.home.allLists.inProgressList,
});

export default connect(mapStateToProps)(InProgressColumn);
