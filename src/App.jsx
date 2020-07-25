import React from 'react';
import Home from './pages/home/Home';
import Header from 'components/header/Header';
import './App.css';

class App extends React.Component {
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
