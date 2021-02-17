import React from 'react';
// libs
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const CheckoutNav = () => {
	return (
		<div className="checkout-nav">
			<Link to="/extras" className="checkout-back">
				<IoArrowBack />
			</Link>
			<h5>Checkout</h5>
		</div>
	);
};

export default CheckoutNav;
