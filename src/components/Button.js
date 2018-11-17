import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<a href="#" className={`btn ${this.props.theme}`}>
				{this.props.text}
			</a>
		);
	}
}

export default Button;
