import React from 'react';
// libs
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5';

const BookingInfo = ({ total, pickupAddress, dropAddress }) => {
	return (
		<div className="booking-summary">
			<div className="booking-summary-location">
				<div>
					<IoLocationOutline size={24} />
					<p>{pickupAddress}</p>
				</div>
				<div>
					<IoLocationSharp size={20} /> <p>{dropAddress}</p>
				</div>
			</div>
			<p className="booking-summary-extras-text">Trip Extras</p>
			<div className="booking-summary-extras">No Extras</div>
			<div className="booking-summary-price">
				<h6>Total</h6>
				<p>{`$${total}`}</p>
			</div>
		</div>
	);
};

export default BookingInfo;
