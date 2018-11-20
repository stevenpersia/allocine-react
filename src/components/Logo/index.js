import React from 'react';
import './styles.css';

class Logo extends React.Component {
	render() {
		return <img src={this.props.url} alt="Reactociné" />;
	}
}

export default Logo;
