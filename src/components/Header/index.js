import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import SearchForm from '../../components/SearchForm';
import Logo from '../Logo';
import LogoImg from '../../assets/img/logo-reactocine.png';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="form">
					<Link
						to={{
							pathname: '/'
						}}
					>
						<img src={LogoImg} alt="Reactociné" />
						<h1>Reactociné</h1>
					</Link>
					<SearchForm />
				</div>
			</header>
		);
	}
}

export default Header;
