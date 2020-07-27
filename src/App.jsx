import React from 'react';
import Home from './pages/home/Home';
import Header from 'components/header/Header';
import { connect } from 'react-redux';
import idb from './IDB/';
import './App.css';

class App extends React.Component {
	async componentDidMount() {
		await idb();
		// this.props.setIDBInRedux()
		// this.props.setInitialData()
	}

	render() {
		return (
			<main>
				<Header />
				<Home />
			</main>
		);
	}
}
const mapStateToProps = (state) => ({
	// currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	// setCurrentUserAction: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
