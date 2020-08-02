import React from 'react';
import Home from 'pages/home/Home';
import Header from 'components/header/Header';
import { connect } from 'react-redux';
import { SET_IDB_REQUESTED } from 'redux/main.app/main.app.types';
import './App.css';

class App extends React.Component {
	componentDidMount() {
		this.props.setIDBInRedux();
	}
	render() {
		const { idb, loading } = this.props;
		if (!idb || loading) {
			return <div>Loading</div>;
		}
		return (
			<main>
				<Header />
				<Home />
			</main>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setIDBInRedux: () => dispatch({ type: SET_IDB_REQUESTED }),
});

const mapStateToProps = (state) => ({
	idb: state.mainApp.idb,
	loading: state.mainApp.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
