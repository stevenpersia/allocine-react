import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import SearchMovies from './containers/SearchMovies';
import Movie from './containers/Movie';
import Actor from './containers/Actor';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
	state = {};

	render() {
		return (
			<Router>
				<div>
					<Header />
					<Route exact path="/" component={Home} />
					<Route path="/search" render={props => <SearchMovies {...props} />} />
					<Route path="/movie/:movie" render={props => <Movie {...props} />} />
					<Route path="/actor/:actor" render={props => <Actor {...props} />} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
