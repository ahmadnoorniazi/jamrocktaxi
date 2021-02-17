import React from 'react';
// libs
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5';
// import { IoIosCalendar } from "react-icons/io";
import { FaGlassMartini } from 'react-icons/fa';
import { GiFireFlower } from 'react-icons/gi';

const ExtrasInfo = ({ pickupAddress, dropAddress, extras, total, carFare }) => {
	return (
		<div className="extras-summary">
			<div className="extras-summary-info">
				{/* <div className='class-summary-info-date'>
          <IoIosCalendar /> <p className='ml-1'>2021-01-14</p>
        </div> */}
				<div className="extras-summary-time-container ml-2">
					{/* <p className='class-summary-info-time'>15:30</p> */}
					<p className="extras-summary-info-price">${carFare}</p>
				</div>
			</div>
			<div className="extras-summary-location">
				<div>
					<IoLocationOutline size={24} />
					<p className="ml-1">{pickupAddress}</p>
				</div>
				<div>
					<IoLocationSharp size={20} />
					<p className="ml-1">{dropAddress}</p>
				</div>
			</div>
			<p className="extras-summary-extras-text">Trip Extras</p>
			<div className="extras-summary-extras">
				{Array.isArray(extras) &&
					extras.map((ext) => (
						<div className="extras-summary-extras-item">
							<div>
								<FaGlassMartini /> <p className="ml-1">{ext.title}</p>
							</div>
							<p className="extras-summary-extras-item-quantity">x{ext.quantity}</p>
							<p className="ml-1">${ext.price}</p>
						</div>
					))}
			</div>
			<div className="extras-summary-price">
				<h6>Total</h6>
				<p>${total}</p>
			</div>
		</div>
	);
};

export default ExtrasInfo;
