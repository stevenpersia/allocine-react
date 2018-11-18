import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Header from '../Header';
import Empty from '../empty.jpg';
import './ActorMovies.css';

class ActorMovies extends Component {
	state = {
		actorMovies: [],
		actorDetails: {}
	};
	render() {
		const actorMoviesFound = [];
		for (let i = 0; i < this.state.actorMovies.length; i++) {
			actorMoviesFound.push(
				<MovieCard
					key={this.state.actorMovies[i].id}
					id={this.state.actorMovies[i].id}
					title={this.state.actorMovies[i].title}
					poster={this.state.actorMovies[i].poster_path}
				/>
			);
		}

		return (
			<div className="container">
				<Header />
				<div className="angled-hero-header" />
				<div className="flex-container actor">
					<div className="img-actor">
						<img
							onError={e => {
								e.target.src = Empty;
							}}
							src={`https://image.tmdb.org/t/p/w138_and_h175_face/${
								this.state.actorDetails.profile_path
							}`}
							alt={this.state.actorDetails.name}
						/>
					</div>

					<div className="content">
						<h2>{this.props.location.actorName}</h2>

						<ul>
							<li>
								<span>Date de naissance</span>
								<p>{this.state.actorDetails.birthday}</p>
							</li>
							<li>
								<span>A joué dans</span>
								<p>{actorMoviesFound.length} films</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="movies-found">{actorMoviesFound}</div>
			</div>
		);
	}

	componentDidMount() {
		let actorId = this.props.location.actorId;

		/* Get movies of actor */
		axios
			.get(
				`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
			)
			.then(response => {
				this.setState({
					actorMovies: response.data.cast
				});
			});

		/* Get details of actor */
		axios
			.get(
				`https://api.themoviedb.org/3/person/${actorId}?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
			)
			.then(response => {
				this.setState({
					actorDetails: response.data
				});
			});
	}
}

export default ActorMovies;
