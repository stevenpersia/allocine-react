import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import SearchMovies from './components/search/SearchMovies';
import Movie from './components/movie/Movie';

class App extends React.Component {
	state = {};

	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/search" component={SearchMovies} />
					<Route path="/movie" component={Movie} />
					<div className="footer">
						Made by{' '}
						<a href="https://github.com/stevenpersia" target="_blank">
							Steven Persia
						</a>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
