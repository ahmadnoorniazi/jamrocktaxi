import React from 'react';

const CheckoutHeading = ({ info, setInfo, taxiName, maxBags, maxPassengers }) => {
	return (
		<div className="checkout-heading">
			<div>
				<h6>{taxiName}</h6>
				<p>
					Up To {maxPassengers} Pax - Up To {maxBags} Suitcases
				</p>
			</div>
			<button style={{ backgroundColor: `${info ? '#39b54a' : '#0070c0'}` }} onClick={() => setInfo(!info)}>
				{info ? 'Less Info' : 'More Info'}
			</button>
		</div>
	);
};

export default CheckoutHeading;
