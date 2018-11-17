import React from 'react';
import Empty from './empty.jpg';

class Actor extends React.Component {
	render() {
		return (
			<div className="cardActor">
				<img
					onError={e => {
						e.target.src = Empty;
					}}
					src={this.props.img}
					alt={this.props.name}
				/>
				<p>{this.props.name}</p>
				<span>{this.props.role}</span>
			</div>
		);
	}
}

export default Actor;
