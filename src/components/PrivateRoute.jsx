import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../utils/useAuthStatus';

import Nav from './Nav';

const PrivateRoute = () => {
	const { loggedIn, checkingStatus } = useAuthStatus();

	if (checkingStatus) {
		return <div className='splash'>Loading</div>;
	}

	return loggedIn ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
