// libs
import React, { Fragment } from 'react';
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5';
import { IoIosCalendar, IoIosAirplane } from 'react-icons/io';
import { FaGlassMartini } from 'react-icons/fa';
import { GiFireFlower } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import dateFormat from 'dateformat';
const CheckoutInfo = ({
	checkedReturn,
	date,
	secondDate,
	pickupLocation,
	dropOfLocation,
	extras,
	total,
	pax,
	startPrice,
	returnPrice
}) => {
	return (
		<div className="checkout-summary">
			<div className="checkout-summary-info">
				<div className="checkout-summary-info-date">
					<IoIosCalendar /> <p>{dateFormat(date.startDate, 'longDate') || ''}</p>
				</div>
				<div className="checkout-summary-time-container">
					<p>{dateFormat(date.startDate, 'shortTime') || ''}</p>
				</div>

				<div className="checkout-summary-info-flight">
					<IoIosAirplane /> <p>{date.flightNumber || ''}</p>
				</div>
				<div className="checkout-summary-info-pax">
					<BsFillPersonFill /> <p>0{pax}</p>
				</div>
				<p className="checkout-summary-info-price">${startPrice}</p>
			</div>
			<div className="checkout-summary-location">
				<div>
					<IoLocationOutline size={24} />
					<p>{pickupLocation}</p>
				</div>
				<div>
					<IoLocationSharp size={20} /> <p>{dropOfLocation}</p>
				</div>
			</div>
			{checkedReturn && (
				<Fragment>
					<div className="checkout-summary-info">
						<div className="checkout-summary-info-date">
							<IoIosCalendar /> <p>{dateFormat(secondDate.returnDate, 'longDate') || ''}</p>
						</div>
						<div className="checkout-summary-time-container">
							<p>{dateFormat(secondDate.returnDate, 'shortTime') || ''}</p>
						</div>
						<div className="checkout-summary-info-return-flight">
							<IoIosAirplane /> <p>{secondDate.flightNumber || ''}</p>
						</div>
						<div className="checkout-summary-info-pax">
							<BsFillPersonFill /> <p>{pax}</p>
						</div>
						<p className="checkout-summary-info-price">${returnPrice}</p>
					</div>
					<div className="checkout-summary-location">
						<div>
							<IoLocationOutline size={20} /> <p>{pickupLocation}</p>
						</div>
						<div>
							<IoLocationSharp size={24} />
							<p>{dropOfLocation}</p>
						</div>
					</div>
				</Fragment>
			)}

			<p className="checkout-summary-extras-text">Trip Extras</p>
			<div className="checkout-summary-extras">
				{Array.isArray(extras) &&
					extras.map((item) => (
						<div className="checkout-summary-extras-item">
							<div>
								<FaGlassMartini />
								<div>
									<p>{item.title}</p>
									<span>Return Lrg</span>
								</div>
							</div>
							<p className="checkout-summary-extras-item-quantity">x{item.quantity || 0}</p>
							<p>${item.quantity && item.price ? item.quantity * item.price : 0}</p>
						</div>
					))}
				{/* <div className="checkout-summary-extras-item">
					<div>
						<GiFireFlower />
						<div>
							<p>Flowers</p>
							<span>Return Lrg</span>
						</div>
					</div>
					<p className="checkout-summary-extras-item-quantity">x2</p>
					<p>$10</p>
				</div> */}
			</div>
			<div className="checkout-summary-price">
				<h6>Total</h6>
				<p>${total}</p>
			</div>
		</div>
	);
};

export default CheckoutInfo;
