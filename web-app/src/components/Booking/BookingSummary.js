import React from 'react';

const BookingSummary = ({ info, setInfo }) => {
	return (
		<div className="booking-summary-container">
			<div>
				<h6>Booking Summary</h6>
				<p>Trip Info</p>
			</div>
			<button style={{ backgroundColor: `${info ? '#39b54a' : '#0070c0'}` }} onClick={() => setInfo(!info)}>
				{info ? 'Less Info' : 'More Info'}
			</button>
		</div>
	);
};

export default BookingSummary;
