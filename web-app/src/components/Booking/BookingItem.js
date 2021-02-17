// libs
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillTag, AiFillInfoCircle } from 'react-icons/ai';
import { BsFillPersonFill, BsBagFill } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { FirebaseContext } from 'common';

const BookingItem = ({ ride, estimates, pickup, dropOf }) => {
	// props
	const { image, name, maxPassengers, maxBags, features } = ride;
	const { api } = useContext(FirebaseContext);
	// const history = useHistory();
	const { setCartData } = api;
	const dispatch = useDispatch();

	// states
	const [ info, setInfo ] = useState(false);
	console.log('estimatesssssssss', estimates);
	const onBooking = (rideData, estimates) => {
		dispatch(
			setCartData(
				{
					rideData: { ...rideData, pickup, dropOf, estimates },
					total: estimates && estimates.estimateFare ? estimates.estimateFare : 0
				},
				'car'
			)
		);
	};
	return (
		<div className="booking-item">
			<div className="booking-item-upper">
				<div className="booking-item-content">
					<img src={image} alt={name} />
					<div className="booking-item-content-sub">
						<h6>{name}</h6>
						<div>
							<p>
								<BsFillPersonFill size={16} /> Up To {maxPassengers}
							</p>
							<p>
								<BsBagFill size={16} /> Up To {maxBags}
							</p>
						</div>
					</div>
					<p className="booking-item-price">
						<AiFillTag /> ${estimates && estimates.estimateFare ? estimates.estimateFare : 0}
					</p>
				</div>
				<div className="booking-item-book-btn-container">
					<AiFillInfoCircle
						style={{ color: `${!info ? '#0070c0' : '#39b54a'}` }}
						onClick={() => setInfo(!info)}
					/>
					<Link onClick={() => onBooking(ride, estimates)} to="/extras">
						Book Me
					</Link>
				</div>
			</div>
			{info && (
				<div className="booking-item-lower">
					<h6>Included in the Price:</h6>
					{features.map((feature, index) => {
						return (
							<div key={index}>
								<FiCheck color="#39b54a" size={20} /> <p className="ml-1">{feature}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default BookingItem;
