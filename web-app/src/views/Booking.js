// libs
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { FirebaseContext } from 'common';

// styles
import '../styles/Booking.scss';

// assets
import map from '../assets/map.png';

// data
import rides from '../data/rides';

// components
import BookingMap from '../components/Booking/BookingMap';
import BookingSummary from '../components/Booking/BookingSummary';
import BookingInfo from '../components/Booking/BookingInfo';
import BookingItemsList from '../components/Booking/BookingItemsList';
import withPage from '../utils/withPage';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// 	convenience_fees: 10
// extra_info: "Rate - 10/km,Minimum - 15/testing1/testing 2/"
// image: "https://dev.exicube.com/images/car0.png"
// min_fare: 15
// name: "Economy"
// rate_per_hour: 10
// rate_per_kilometer: 10

const Booking = () => {
	// state
	const [ info, setInfo ] = useState(false);
	const fleets = useSelector((state) => state.fleetsData.fleets);
	const selectedLocations = useSelector((state) => state.selectedItems);
	const estimatedata = useSelector((state) => state.estimatedata.estimate || {});
	console.log('jjjjjjjjjj', estimatedata)
	const { api } = useContext(FirebaseContext);
	const history = useHistory();
	const { getEstimate, pageLoad } = api;
	const dispatch = useDispatch();

	// const [estimates, setEstimates] = useState({})

	useEffect(() => {
		if (!selectedLocations.pickup || !selectedLocations.dropOn) {
			history.push('/enter-location');
		}
	}, []);

	useEffect(() => {
		dispatch({ type: 'SET_CAR_DATA', payload: {} });
		dispatch({ type: 'SET_CART_TOTAL', payload: 0 });
		dispatch(pageLoad('fleetsPrices'));
	}, []);

	useEffect(() => {
		Array.isArray(fleets) &&
			fleets.length &&
			fleets.forEach((item) => {
				dispatch(
					getEstimate({
						platform: 'web',
						pickup: selectedLocations.pickup,
						drop: selectedLocations.dropOn,
						carDetails: {
							convenience_fees: item.convenienceFees,
							min_fare: item.miniFare,
							rate_per_hour: item.ratePerHour,
							name: item.name,
							rate_per_kilometer: item.retePerKm
						}
					})
				);
			});
	}, []);

	const { pickup, dropOn } = selectedLocations;
	return (
		<div className="booking">
			{/* Back Nav Button */}
			<Link to="/enter-location" className="booking-back">
				<IoArrowBack />
			</Link>
			{/* Map  */}
			{/* { latitude: 25.8103146, longitude: -80.1751609 }, */}
			{pickup &&
			pickup.coords &&
			dropOn &&
			dropOn.coords && (
				<BookingMap
					map={map}
					locations={[
						{
							latitude: pickup && pickup.coords && pickup.coords.lat,
							longitude: pickup && pickup.coords && pickup.coords.lng
						},
						{
							latitude: dropOn && dropOn.coords && dropOn.coords.lat,
							longitude: dropOn && dropOn.coords && dropOn.coords.lng
						}
					]}
				/>
			)}
			<div>
				<p>{estimatedata && (estimatedata.estimateDistance /1000).toFixed()}Km
				 <span style={{marginLeft: "5px"}}>{estimatedata && (estimatedata.estimateTime /60).toFixed()}m</span>
				</p>
			</div>

			<div className="booking-list">
				<div className="booking-list-bar" />
				{/* Booking Summary */}
				<BookingSummary info={info} setInfo={setInfo} />
				{/* Booking Info */}
				{info &&
				pickup &&
				dropOn && (
					<BookingInfo
						total={0}
						pickupAddress={pickup && pickup.structured_formatting && pickup.structured_formatting.main_text}
						dropAddress={dropOn && dropOn.structured_formatting && dropOn.structured_formatting.main_text}
					/>
				)}
				{/* Booking Items List */}
				<div style={{backgroundColor:"gray", height: "1px"}} />
				<BookingItemsList
					data={rides}
					rides={fleets}
					estimationsData={selectedLocations}
					pickup={pickup}
					dropOf={dropOn}
				/>
			</div>
		</div>
	);
};

const pageSlug = 'homepage';
export default withPage(Booking, pageSlug);
