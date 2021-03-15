import React from 'react';
// libs
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5';
// import { IoIosCalendar } from "react-icons/io";
import { FaGlassMartini, FaDotCircle} from 'react-icons/fa';

import { GiFireFlower } from 'react-icons/gi';

const ExtrasInfo = ({ pickupAddress, dropAddress, extras, total, carFare }) => {
	return (
		<div className="extras-summary">
			<div className="extras-summary-location" style={{flexDirection: 'row'}}>

				<div style={{display: "flex", flexDirection: "row", width: '100%', justifyContent: 'space-between'}}>
					<div style={{display: "flex", flexDirection: "column"}}>

					<div>
					<FaDotCircle style={{color: "#0070c0"}}/>
					<p className="ml-1">{pickupAddress}</p>
				</div>
				<div>
					<FaDotCircle style={{color: "red"}}/>
					<p className="ml-1">{dropAddress}</p>
				</div>
				</div>
				<div>
														<div>					<p className="extras-summary-info-price">${carFare}</p></div>

				</div>
				</div>
			</div>
			<div className="extras-summary-extras">
				{Array.isArray(extras) &&
					extras.map((ext) => (
						<div className="extras-summary-extras-item">
							{console.log("exxxxxxxxxxx", ext)}
							<div>
							 <p className="ml-1">{ext.title}{`(${Object.values(ext.options).join(',')})`}</p>
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
