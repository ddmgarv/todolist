import React, { Component } from 'react';
import './toDo.column.scss';

class ToDoColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasksToDo: props.tasksToDo,
		};
	}
	render() {
		const { tasksToDo } = this.state;
		return (
			<section>
				<div>
					<h5>To Do</h5>
				</div>
				<div>
					{tasksToDo.map((item, index) => (
						<div>{item}</div>
					))}
				</div>
			</section>
		);
	}
}

export default ToDoColumn;
