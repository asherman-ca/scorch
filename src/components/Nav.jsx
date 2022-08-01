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
					Fight
				</Link>
				<Link to={'/inventory'} className='button'>
					Inventory
				</Link>
				<Link to={'/menu'} className='button'>
					Menu
				</Link>
			</div>
		</div>
	);
};

export default Nav;
