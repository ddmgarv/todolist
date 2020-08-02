import React, { Component } from 'react';
import './done.column.scss';
import { connect } from 'react-redux';

class DoneColumn extends Component {
	render() {
		const { tasksDone = [] } = this.props;
		return (
			<section>
				<div>
					<h5>Done</h5>
				</div>
				<div>
					{tasksDone.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	tasksDone: state.home.allLists.doneList,
});

export default connect(mapStateToProps)(DoneColumn);
