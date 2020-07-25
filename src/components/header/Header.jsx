import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
	render() {
		return (
			<header className='header'>
				<div className='header__container'>
					<h5 className='header__container--title'>To-Do List</h5>
				</div>
				<div className='header__container'>
					<h5 className='header__container--title'>Author: Gustavo Rojas</h5>
				</div>
			</header>
		);
	}
}

export default Header;
