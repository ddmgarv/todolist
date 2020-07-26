import React, { Component } from 'react';
import './inProgress.column.scss';

class InProgressColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasksInProgress: props.tasksInProgress,
		};
	}
	render() {
		const { tasksInProgress } = this.state;
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
export default InProgressColumn;
