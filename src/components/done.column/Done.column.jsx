import React, { Component } from 'react';
import './done.column.scss';
class DoneColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasksDone: props.tasksDone,
		};
	}

	render() {
		const { tasksDone } = this.state;
		return (
			<section>
				<div>
					<h5>Done</h5>
				</div>
				<div>
					{tasksDone.map((item, index) => (
						<div>{item}</div>
					))}
				</div>
			</section>
		);
	}
}

export default DoneColumn;
