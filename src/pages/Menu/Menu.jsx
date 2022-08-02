import React from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
	const auth = getAuth();
	const navigate = useNavigate();

	const onLogout = () => {
		auth.signOut();
		navigate('/');
	};

	return (
		<div>
			<div onClick={onLogout}>Logout</div>
		</div>
	);
};

export default Menu;
