import React from 'react';

class Logo extends React.Component {
	render() {
		return <img src={this.props.url} alt="Reactociné" />;
	}
}

export default Logo;
