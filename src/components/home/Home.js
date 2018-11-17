import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from '../search/MovieCard';
import './Home.css';
import LogoHome from './logo-reactocine.png';

class Home extends Component {
	state = {
		search: '',
		upcoming: [],
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
		/* Upcoming */
		const upcomingMovies = [];
		for (let i = 0; i < this.state.upcoming.length; i++) {
			upcomingMovies.push(
				<MovieCard
					key={this.state.upcoming[i].id}
					id={this.state.upcoming[i].id}
					title={this.state.upcoming[i].title}
					poster={this.state.upcoming[i].poster_path}
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
					<h2>Films récents</h2>
					<div className="upcoming">{upcomingMovies.slice(0, 10)}</div>

					<h2>Films populaires</h2>
					<div className="top-rated">{topRatedMovies.slice(0, 10)}</div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		/* Upcoming */
		axios
			.get(
				`https://api.themoviedb.org/3/movie/upcoming?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1
				`
			)
			.then(response => {
				this.setState({
					upcoming: response.data.results
				});
			});

		/* Top rated */
		axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1
				`
			)
			.then(response => {
				this.setState({
					topRated: response.data.results
				});
			});
	}
}

export default Home;
