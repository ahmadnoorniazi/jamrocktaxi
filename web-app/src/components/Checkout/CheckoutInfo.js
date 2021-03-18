// libs
import React, { Fragment } from 'react';
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5';
import { IoIosCalendar, IoIosAirplane } from 'react-icons/io';
import { FaGlassMartini, FaDotCircle } from 'react-icons/fa';
import { GiFireFlower } from 'react-icons/gi';
import { BsFillPersonFill, BsBagFill } from 'react-icons/bs';
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
	bags,
	startPrice,
	returnPrice
}) => {
	return (
		<div className="checkout-summary">
			<div className="checkout-summary-info">
				<div className="checkout-summary-info-date">
					<IoIosCalendar /> <p>{dateFormat(date.startDate, 'dd-mm-yy') || ''}</p>
				</div>
				<div className="checkout-summary-time-container">
					<p>{dateFormat(date.startDate, 'HH:MM') || ''}</p>
				</div>

				<div className="checkout-summary-info-flight">
					<IoIosAirplane /> <p>{date.flightNumber || ''}</p>
				</div>
				<div className="checkout-summary-info-pax">
					<BsFillPersonFill /> <p>0{pax}</p>
				</div>
				<div className="checkout-summary-info-pax">
					<BsBagFill /> <p>0{bags}</p>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					backgroundColor: 'rgba(0, 112, 192, 0.1)',
					alignItems: 'baseline'
				}}
			>
				<div
					style={{ width: '100%', backgroundColor: 'transparent', marginBottom: 0 }}
					className="checkout-summary-location"
				>
					<div>
						<FaDotCircle />
						<p className="booking-pickup-text-extras" style={{ color: 'darkgray' }}>
							{pickupLocation}
						</p>
					</div>
					<div>
						<FaDotCircle style={{ color: 'red' }} />
						<p className="booking-pickup-text-extras" style={{ color: 'darkgray' }}>
							{dropOfLocation}
						</p>
					</div>
				</div>
				<p
					style={{ fontSize: '16px', fontWeight: 800, marginRight: '3px' }}
					className="checkout-summary-info-price"
				>
					${startPrice}
				</p>
			</div>

			{checkedReturn && (
				<Fragment>
					<div className="checkout-summary-info">
						<div className="checkout-summary-info-date">
							<IoIosCalendar /> <p>{dateFormat(secondDate.returnDate, 'dd-mm-yy') || ''}</p>
						</div>
						<div className="checkout-summary-time-container">
							<p>{dateFormat(secondDate.returnDate, 'HH:MM') || ''}</p>
						</div>
						<div className="checkout-summary-info-return-flight">
							<IoIosAirplane /> <p>{secondDate.flightNumber || ''}</p>
						</div>
						<div className="checkout-summary-info-pax">
							<BsFillPersonFill /> <p>0{pax}</p>
						</div>
						<div className="checkout-summary-info-pax">
							<BsBagFill /> <p>0{bags}</p>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							backgroundColor: 'rgba(0, 112, 192, 0.1)',
							textAlign: 'baseline'
						}}
					>
						<div
							style={{ width: '100%', backgroundColor: 'transparent', marginBottom: 0 }}
							className="checkout-summary-location"
						>
							<div>
								<FaDotCircle />
								<p>{pickupLocation}</p>
							</div>
							<div>
								<FaDotCircle style={{ color: 'red' }} size={24} />
								<p>{dropOfLocation}</p>
							</div>
						</div>
						<p
							style={{ fontSize: '16px', fontWeight: 800, marginRight: '3px' }}
							className="checkout-summary-info-price"
						>
							${returnPrice}
						</p>
					</div>
				</Fragment>
			)}

			<p className="checkout-summary-extras-text">Trip Extras</p>
			<div className="checkout-summary-extras">
				{Array.isArray(extras) &&
					extras.map((item) => (
						<div className="checkout-summary-extras-item">
							<div>
								<div>
									<p style={{ color: 'darkgray' }}>{item.title}</p>
								</div>
							</div>
							<p style={{ color: 'darkgray' }} className="checkout-summary-extras-item-quantity">
								x{item.quantity || 0}
							</p>
							<p style={{ color: 'darkgray' }}>
								${item.quantity && item.price ? item.quantity * item.price : 0}
							</p>
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
