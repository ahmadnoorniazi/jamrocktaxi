import React, { useEffect } from 'react';
// libs
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useSelector } from 'react-redux';
// assets
import shoppingBag from '../assets/shopping-bag.svg';
import appStore from '../assets/appstore.svg';
import playStore from '../assets/playstore.svg';

// styles
import '../styles/OrderComplete.scss';

const OrderComplete = () => {
	const bookingData = useSelector((state) => state.bookingdata.booking);

	useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);
	
		if (query.get("success")) {
		  const message = "Order placed! You will receive an email confirmation."
		}
	
		if (query.get("canceled")) {
		  
			const message = "Order canceled -- continue to shop around and checkout when you're ready."
		  
		}
	  }, []);

	return (
		<div className="order-complete">
			<Link to="/checkout" className="order-back">
				<IoArrowBack />
			</Link>
			<div className="order-complete-upper">
				<img src={shoppingBag} alt="order-completed" />
				<h6>Thank you for your order! {(bookingData && bookingData.booking_id) || '#548A56'}</h6>
				<p>Your order is been processed. We will contact you if there are any issues with your order</p>
			</div>
			<div className="order-complete-mid">
				<p>
					We recommend downloading our app. You can access your bookings via the app where you can manage or
					cancel your booking. You can also message us or your driver via the app
				</p>
				<h6>Get the JamRockTaxi App</h6>
			</div>
			<div className="order-complete-lower">
				<div>
					<img src={playStore} alt="playstore" />
					<img src={appStore} alt="appStore" />
				</div>
				<Link to="/">Go To Homepage</Link>
			</div>
		</div>
	);
};

export default OrderComplete;
