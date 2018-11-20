import React from 'react';
import './styles.css';

class MovieTab extends React.Component {
	render() {
		return (
			<li className={this.props.selected}>
				{this.props.icon} {this.props.text}
			</li>
		);
	}
}

export default MovieTab;
