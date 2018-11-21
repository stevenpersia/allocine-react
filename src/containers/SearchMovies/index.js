import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from '../../components/MovieCard';
import './styles.css';

class SearchMovies extends Component {
	state = {
		movies: []
	};

	render() {
		const moviesFound = [];
		for (let i = 0; i < this.state.movies.length; i++) {
			moviesFound.push(
				<MovieCard
					key={this.state.movies[i].id}
					id={this.state.movies[i].id}
					title={this.state.movies[i].title}
					poster={this.state.movies[i].poster_path}
				/>
			);
		}
		return (
			<div className="container">
				<div className="angled-hero-header" />
				<h2>
					Recherche de :{' '}
					{this.props.location.search.substring(1).replace('%20', ' ')}{' '}
					<span className="grayc">({moviesFound.length} résultats)</span>
				</h2>
				<div className="movies-found">{moviesFound}</div>
			</div>
		);
	}

	componentDidMount() {
		axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&query=${
					this.props.location.search
				}&page=1`
			)
			.then(response => {
				this.setState({
					movies: response.data.results
				});
			});
	}
}

export default SearchMovies;
