import React from 'react';
import Home from './pages/home/Home';
import Header from 'components/header/Header';
import idb, { getAllDataIDB } from './IDB/';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.mountIDB = this.mountIDB.bind(this);
	}

	async mountIDB() {
		const db = await idb();
		const data = await getAllDataIDB(db);
		console.log(data);
	}

	componentDidMount() {
		this.mountIDB();
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

export default App;
