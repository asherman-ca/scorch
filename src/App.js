import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

import Nav from './components/Nav';
import Splash from './pages/Splash/Splash';
import Fight from './pages/Fight/Fight';
import Inventory from './pages/Inventory/Inventory';
import Menu from './pages/Menu/Menu';
import PrivateRoute from './components/PrivateRoute';

function App() {
	const [log, setLog] = useState(['Game Loaded']);

	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Splash />} />

				<Route path='/fight' element={<Fight />} />
				<Route path='/inventory' element={<Inventory />} />
				<Route path='/menu' element={<Menu />} />
			</Routes>
			<Nav log={log} />
		</Router>
	);
}

export default App;
