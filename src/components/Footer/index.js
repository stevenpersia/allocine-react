import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				Made by
				<a href="https://github.com/stevenpersia" target="_blank">
					{' '}
					Steven Persia
				</a>
			</div>
		);
	}
}

export default Footer;
