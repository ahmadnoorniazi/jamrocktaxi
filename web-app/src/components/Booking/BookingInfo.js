import React from 'react';
// libs
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5';

const BookingInfo = ({ total, pickupAddress, dropAddress }) => {
	return (
		<div className="booking-summary">
			<div className="booking-summary-location" style={{flexDirection: 'row'}}>
				<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
					<IoLocationOutline size={15} />
					<div style={{minHeight: '40%', width: '1px', backgroundColor: '#0070c0', marginTop: 0, marginBottom:0}}/>
					<IoLocationSharp size={15} />
				</div>
				<div style={{display: 'flex', flexDirection: 'column'}}>
				<div>
					<p>{pickupAddress}</p>
				</div>
				<div>
					 <p>{dropAddress}</p>
				</div>
				</div>
			
			</div>
		</div>
	);
};

export default BookingInfo;
