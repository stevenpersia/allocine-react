import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class SearchForm extends Component {
	state = {
		search: ''
	};

	handleInputChange = event => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	// GERER LE CAS OU LE CHAMPS EST VIDE
	render() {
		return (
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
		);
	}
}

export default SearchForm;
