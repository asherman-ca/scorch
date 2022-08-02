import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ log }) => {
	return (
		<div className='navbar'>
			<div className='log'>
				{log.map((msg) => {
					return <div key={msg}>- {msg}</div>;
				})}
			</div>
			<div className='buttons'>
				<Link to={'/fight'} className='button'>
					FIGHT
				</Link>
				<Link to={'/inventory'} className='button'>
					CHAR
				</Link>
				<Link to={'/menu'} className='button'>
					MENU
				</Link>
			</div>
		</div>
	);
};

export default Nav;
