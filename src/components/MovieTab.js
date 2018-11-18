import React from 'react';

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
