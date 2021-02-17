import React from 'react';
// libs
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const ExtrasNav = ({ showCheckout }) => {
	return (
		<div className="extras-nav">
			<Link to="/booking" className="extras-back">
				<IoArrowBack />
			</Link>
			<h5>Select Extras</h5>
			<Link to="/checkout" className={!showCheckout ? 'extra-nav-link' : 'extra-nav-btn'}>
				{showCheckout ? 'Checkout' : 'Skip Extras'}
			</Link>
		</div>
	);
};

export default ExtrasNav;
