import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Empty from '../empty.jpg';
import './MovieCard.css';

class MovieCard extends Component {
	render() {
		return (
			<Link
				to={{
					pathname: '/movie',
					movieId: this.props.id
				}}
			>
				<div className="movie-card">
					<img
						onError={e => {
							e.target.src = Empty;
						}}
						src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
							this.props.poster
						}`}
						alt={this.props.title}
					/>
					<div className="movie-content">
						<h3>{this.props.title}</h3>
					</div>
				</div>
			</Link>
		);
	}
}

export default MovieCard;
