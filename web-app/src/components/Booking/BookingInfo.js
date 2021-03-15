import React from 'react';
// libs
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5';
import { FaGlassMartini, FaDotCircle} from 'react-icons/fa';

const BookingInfo = ({ total, pickupAddress, dropAddress }) => {
	return (
		<div className="booking-summary">
			<div className="booking-summary-location" style={{flexDirection: 'row'}}>
			
				<div style={{display: 'flex', flexDirection: 'column'}}>
				<div style={{alignItems: 'center'}}>					
					<FaDotCircle style={{marginRight: "5px"}} size={15} />
					<p style={{color: "darkgray"}}>{pickupAddress}</p>
				</div>
				<div>					
					<FaDotCircle style={{marginRight: "5px", color: "red"}} size={15} />
					 <p style={{color: "darkgray"}}>{dropAddress}</p>
				</div>
				</div>
			
			</div>
		</div>
	);
};

export default BookingInfo;
