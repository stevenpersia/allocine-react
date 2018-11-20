import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../../components/MovieCard';
import LogoHome from '../../assets/img/logo-reactocine.png';
import './styles.css';

class Home extends Component {
	state = {
		search: '',
		nowPlaying: [],
		topRated: []
	};

	handleInputChange = event => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	render() {
		/* Now Playing */
		const nowPlayingMovies = [];
		for (let i = 0; i < this.state.nowPlaying.length; i++) {
			nowPlayingMovies.push(
				<MovieCard
					key={this.state.nowPlaying[i].id}
					id={this.state.nowPlaying[i].id}
					title={this.state.nowPlaying[i].title}
					poster={this.state.nowPlaying[i].poster_path}
				/>
			);
		}

		/* Top rated */
		const topRatedMovies = [];
		for (let i = 0; i < this.state.topRated.length; i++) {
			topRatedMovies.push(
				<MovieCard
					key={this.state.topRated[i].id}
					id={this.state.topRated[i].id}
					title={this.state.topRated[i].title}
					poster={this.state.topRated[i].poster_path}
				/>
			);
		}

		return (
			<div>
				<div className="angled-hero-header" />
				<div className="form">
					<img src={LogoHome} alt="Reactociné" />
					<h1>Reactociné</h1>
					<form>
						<div className="search">
							<input
								name="search"
								type="text"
								value={this.state.search}
								onChange={this.handleInputChange}
								placeholder="Recherche un film"
							/>
							<Link
								to={{
									pathname: '/search',
									search: this.state.search
								}}
								className="btn"
							>
								GO
							</Link>
						</div>
					</form>
				</div>
				<div className="container">
					<h2>En salle de cinéma</h2>
					<div className="upcoming">{nowPlayingMovies.slice(0, 10)}</div>

					<h2>Films populaires</h2>
					<div className="top-rated">{topRatedMovies.slice(0, 10)}</div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		/* Now playing */
		axios
			.get(
				`https://api.themoviedb.org/3/movie/now_playing?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1`
			)
			.then(response => {
				this.setState({
					nowPlaying: response.data.results
				});
			});

		/* Top rated */
		axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1`
			)
			.then(response => {
				this.setState({
					topRated: response.data.results
				});
			});
	}
}

export default Home;
