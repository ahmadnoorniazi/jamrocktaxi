import React from 'react';

const CheckoutHeading = ({ info, setInfo }) => {
	return (
		<div className="checkout-heading">
			<div>
				<h6>Standard Taxi</h6>
				<p>Up To 4 Pax - Up To 4 Suitcases</p>
			</div>
			<button style={{ backgroundColor: `${info ? '#39b54a' : '#0070c0'}` }} onClick={() => setInfo(!info)}>
				{info ? 'Less Info' : 'More Info'}
			</button>
		</div>
	);
};

export default CheckoutHeading;
