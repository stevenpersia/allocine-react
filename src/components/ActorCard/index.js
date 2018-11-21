import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';
import Empty from '../../assets/img/empty.jpg';

class Actor extends React.Component {
	handleClick = e => {
		this.props.history.push('/actor/' + this.props.id);
	};

	render() {
		return (
			<div className="card-actor" onClick={this.handleClick}>
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

export default withRouter(Actor);
