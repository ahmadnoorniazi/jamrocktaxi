import React from 'react';
// libs
import { Link } from 'react-router-dom';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const ExtrasNav = ({ showCheckout }) => {
	return (
		<div className="extras-nav">
			<Link to="/booking" className="extras-back">
				<IoArrowBack />
			</Link>
			<Link to="/checkout" className="extras-back">
				<IoArrowForward />
			</Link>
		</div>
	);
};

export default ExtrasNav;
