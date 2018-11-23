import React from 'react';
import './styles.css';

class MovieTab extends React.Component {
	render() {
		return (
			<a href={this.props.link}>
				<li className={this.props.selected}>
					<i className={'fas fa-' + this.props.icon} />
					{this.props.text}
				</li>
			</a>
		);
	}
}

export default MovieTab;
