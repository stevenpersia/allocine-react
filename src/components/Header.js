import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import LogoImg from '../components/home/logo-reactocine.png';

class Header extends React.Component {
	render() {
		return (
			<header>
				<Link
					to={{
						pathname: '/'
					}}
				>
					<Logo url={LogoImg} />
					<h1>Reactociné</h1>
				</Link>
			</header>
		);
	}
}

export default Header;
