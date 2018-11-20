import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import SearchMovies from './containers/SearchMovies';
import Movie from './containers/Movie';
import Actor from './containers/Actor';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
	state = {};

	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/search" component={SearchMovies} />
					<Route path="/movie?:movie" component={Movie} />
					<Route path="/actor?:actor" component={Actor} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
