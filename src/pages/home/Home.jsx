import React from 'react';
import ToDoColumn from 'components/toDo.column/ToDo.column';
import InProgressColumn from 'components/inProgress.column/InProgress.column';
import DoneColumn from 'components/done.column/Done.column';
import './home.scss';

class Home extends React.Component {
	state = {
		tasksToDo: [1, 2, 3],
		tasksInProgress: [1, 2, 3],
		tasksDone: [1, 2, 3],
	};

	componentDidMount() {
		// this.props.getToDoData()
	}

	componentDidUpdate() {
		// updateState
	}

	render() {
		const { tasksToDo, tasksInProgress, tasksDone } = this.state;
		return (
			<div className='home'>
				<div className='home__grid'>
					<ToDoColumn tasksToDo={tasksToDo} />
					<InProgressColumn tasksInProgress={tasksInProgress} />
					<DoneColumn tasksDone={tasksDone} />
				</div>
			</div>
		);
	}
}

export default Home;
