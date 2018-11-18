import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Header from '../Header';

class SearchActorMovies extends Component {
	state = {
		moviesOfActor: []
	};
	render() {
		const moviesOfActorFound = [];
		for (let i = 0; i < this.state.moviesOfActor.length; i++) {
			moviesOfActorFound.push(
				<MovieCard
					key={this.state.moviesOfActor[i].id}
					id={this.state.moviesOfActor[i].id}
					title={this.state.moviesOfActor[i].title}
					poster={this.state.moviesOfActor[i].poster_path}
				/>
			);
		}
		return (
			<div className="container">
				<Header />
				<div className="angled-hero-header" />
				<h2>
					Recherche de : {this.props.location.actorName}
					<span className="grayc">({moviesOfActorFound.length} résultats)</span>
				</h2>
				<div className="movies-found">{moviesOfActorFound}</div>
			</div>
		);
	}

	componentDidMount() {
		axios
			.get(
				`https://api.themoviedb.org/3/person/${
					this.props.location.actorId
				}/movie_credits?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
			)
			.then(response => {
				this.setState({
					moviesOfActor: response.data.cast
				});
			});
	}
}

export default SearchActorMovies;
