import React, { useEffect, useState } from 'react';

import Nav from '../../components/Nav';

const Fight = () => {
	const [enemies, setEnemies] = useState([1, 2, 3]);
	useEffect(() => {
		setEnemies([4, 5, 6]);
	}, []);

	return (
		<div className='fight'>
			{enemies.map((en) => {
				return <div key={en}>{en}</div>;
			})}
		</div>
	);
};

export default Fight;
