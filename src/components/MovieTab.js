import React from 'react';

class MovieTab extends React.Component {
	render() {
		return (
			<li href="#" className={this.props.selected}>
				{this.props.icon} {this.props.text}
			</li>
		);
	}
}

export default MovieTab;
