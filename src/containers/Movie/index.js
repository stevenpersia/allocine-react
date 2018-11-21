import React, { Component } from 'react';
import axios from 'axios';
import MovieTab from '../../components/MovieTab';
import ActorCard from '../../components/ActorCard';
import MovieCard from '../../components/MovieCard';
import './styles.css';
import Empty from '../../assets/img/empty.jpg';

class Movie extends Component {
	state = {
		movie: {},
		casting: {},
		similar: []
	};

	render() {
		/* Actors */
		const actors = [];
		for (let i = 0; i < this.state.casting.length; i++) {
			actors.push(
				<ActorCard
					key={this.state.casting[i].id}
					id={this.state.casting[i].id}
					img={`https://image.tmdb.org/t/p/w138_and_h175_face/${
						this.state.casting[i].profile_path
					}`}
					name={this.state.casting[i].name}
					role={this.state.casting[i].character}
				/>
			);
		}

		/* Few actors name */
		const fewActorsName = [];
		for (let i = 0; i < this.state.casting.length; i++) {
			fewActorsName.push(`${this.state.casting[i].name}, `);
		}

		/* Similar */
		const similarMovies = [];
		for (let i = 0; i < this.state.similar.length; i++) {
			similarMovies.push(
				<MovieCard
					key={this.state.similar[i].id}
					id={this.state.similar[i].id}
					title={this.state.similar[i].title}
					poster={this.state.similar[i].poster_path}
				/>
			);
		}
		console.log(this.state.movie);
		return (
			<main>
				<div className="container">
					<div className="angled-hero-header" />
					<h1>{this.state.movie.title}</h1>
					<div className="menu">
						<ul>
							<MovieTab icon="film" text="Fiche" selected="selected" link="#" />
							<MovieTab icon="users" text="Casting" link="#casting" />
							<MovieTab icon="video" text="Films similaires" link="#similar" />
						</ul>
					</div>
					<div className="flex-container">
						<img
							onError={e => {
								e.target.src = Empty;
							}}
							src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
								this.state.movie.poster_path
							}`}
							className="affiche"
							alt={this.state.movie.title}
						/>
						<div className="content">
							<ul>
								<li>
									<span>Date de sortie</span> {this.state.movie.release_date}
								</li>
								<li>
									<span>Casting</span> {fewActorsName.slice(0, 4)}...
								</li>
							</ul>
							<div className="synopsis">
								<h3>Synopsis et détails</h3>
								<p>{this.state.movie.overview}</p>
							</div>
						</div>
					</div>

					<div id="casting" className="section casting">
						<h2>Casting</h2>
						<div className="cards">{actors.slice(0, 14)}</div>
					</div>

					<div id="similar" className="section similar">
						<h2>Films similaires</h2>
						<div className="cards">{similarMovies.slice(0, 5)}</div>
					</div>
				</div>
			</main>
		);
	}
	componentDidMount() {
		axios
			.all([
				axios.get(
					`https://api.themoviedb.org/3/movie/${
						this.props.match.params.movie
					}?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
				),
				axios.get(
					`https://api.themoviedb.org/3/movie/${
						this.props.match.params.movie
					}/credits?api_key=4d12b2b226af3e650897e7b25db29466`
				),
				axios.get(
					`https://api.themoviedb.org/3/movie/${
						this.props.match.params.movie
					}/similar?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1`
				)
			])
			.then(
				axios.spread((detailsRes, castingRes, similarRes) => {
					this.setState({
						movie: detailsRes.data,
						casting: castingRes.data.cast,
						similar: similarRes.data.results
					});
				})
			);
	}
}

export default Movie;
