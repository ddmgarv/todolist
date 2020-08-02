import React from 'react';
import { connect } from 'react-redux';
import ToDoColumn from 'components/toDo.column/ToDo.column';
import InProgressColumn from 'components/inProgress.column/InProgress.column';
import DoneColumn from 'components/done.column/Done.column';
import { GET_ALL_LISTS_REQUESTED } from 'redux/home/home.types';
import './home.scss';

class Home extends React.Component {
	componentDidMount() {
		this.props.setInitialData();
	}

	render() {
		return (
			<div className='home'>
				<div className='home__grid'>
					<ToDoColumn />
					<InProgressColumn />
					<DoneColumn />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setInitialData: () => dispatch({ type: GET_ALL_LISTS_REQUESTED }),
});

export default connect(null, mapDispatchToProps)(Home);
