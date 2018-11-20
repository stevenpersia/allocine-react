import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Empty from '../../assets/img/empty.jpg';

class Actor extends React.Component {
	render() {
		return (
			<Link
				to={{
					pathname: `/actor?${this.props.name}`,
					actorId: this.props.id,
					actorName: this.props.name
				}}
			>
				<div className="card-actor">
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
			</Link>
		);
	}
}

export default Actor;
