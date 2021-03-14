import React from 'react';
// components
import BookingItem from './BookingItem';

const BookingItemsList = ({ rides, data, estimationsData, pickup, dropOf }) => {
	return (
		<div className="booking-list-item-container">
			<h5 className="booking-list-item-container-title">Select Your Taxi</h5>
			{Array.isArray(rides) &&
				rides.map((ride, index) => {
					return (
						<BookingItem
							estimates={estimationsData[`${ride.name}_estimations`]}
							features={data[index].features}
							key={index}
							ride={ride}
							pickup={pickup}
							dropOf={dropOf}
						/>
					);
				})}
		</div>
	);
};

export default BookingItemsList;
