import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Empty from '../../assets/img/empty.jpg';
import './styles.css';

class MovieCard extends Component {
	handleClick = e => {
		this.props.history.push('/movie/' + this.props.id);
		window.location.reload();
	};

	render() {
		return (
			<div className="movie-card" onClick={this.handleClick}>
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
		);
	}
}

export default withRouter(MovieCard);
