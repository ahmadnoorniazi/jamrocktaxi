// libs
import React, { useState, Fragment, useContext, useEffect } from 'react';

// styles
import '../styles/Checkout.scss';

// icons
// import { BsFillPersonFill, BsBagFill } from "react-icons/bs";

// components
import CheckoutHeading from '../components/Checkout/CheckoutHeading';
import CheckoutInfo from '../components/Checkout/CheckoutInfo';
import CheckoutNav from '../components/Checkout/CheckoutNav';
import CheckoutLocation from '../components/Checkout/CheckoutLocation';
import CheckoutReturnLocation from '../components/Checkout/CheckoutReturnLocation';
import CheckoutSwitch from '../components/Checkout/CheckoutSwitch';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import CheckoutPayment from '../components/Checkout/CheckoutPayment';
import ExtrasVipInput from '../components/Extras/ExtrasVipInput';
import { useSelector, useDispatch } from 'react-redux';
// assets
import airplane from '../assets/aeroplane.svg';
import building from '../assets/building.svg';
import price from '../assets/price-tag.svg';
import { FirebaseContext } from 'common';

const Checkout = () => {
	// state
	const [ info, setInfo ] = useState(false);
	const [ checkedReturn, setCheckedReturn ] = useState(false);
	const [ terms, setTerms ] = useState(false);
	const [ pax, setPax ] = useState(0);
	const [ bags, setBags ] = useState(0);
	const [ tripStartData, setTripStartData ] = useState({});
	const [ tripReturnData, setTripReturnData ] = useState({});
	const [ passengersInfo, setPassengerInfo ] = useState({});
	const [ valid, setValid ] = useState({});
	const { api } = useContext(FirebaseContext);
	const { addBooking } = api;
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { total, car, extras } = cart || {};
	console.log('extrassssssssssssssss', extras);
	const { pickup, dropOf, maxPassengers, maxBags, estimates } = car.rideData || {};

	useEffect(
		() => {
			if (passengersInfo) {
				if (
					passengersInfo.firstName &&
					passengersInfo.lastName &&
					passengersInfo.email &&
					passengersInfo.countryCode &&
					passengersInfo.mobileNumber
				) {
					setValid(true);
				} else {
					setValid(false);
				}
			}
		},
		[ passengersInfo ]
	);

	console.log('passengers iNFOOOOOO', passengersInfo);
	console.log('tripStartData iNFOOOOOO', tripStartData);
	console.log('tripReturnData iNFOOOOOO', tripReturnData);
	console.log('estimatesssssssss', estimates);
	const returnPrice =
		(estimates &&
			estimates.priceDetails &&
			estimates.priceDetails.fields &&
			estimates.priceDetails.fields.returnPrice) ||
		0;
	const startPrice =
		(estimates && estimates.priceDetails && estimates.priceDetails.fields && estimates.priceDetails.fields.price) ||
		0;
	const fullTotal = checkedReturn ? total + returnPrice : total;

	const confirmBooking = () => {
		dispatch(
			addBooking({
				pickup,
				drop: dropOf,
				carDetails: car.rideData,
				userDetails: passengersInfo,
				estimate: estimates,
				tripdate: new Date(tripStartData.startDate).toString(),
				bookLater: false,
				booking_type_web: true,
				settings: { otp_secure: false }
			})
		);
	};

	return (
		<div className="checkout">
			<CheckoutNav />
			<CheckoutHeading info={info} setInfo={setInfo} />
			{!info && (
				<div className="checkout-summary-price-main">
					<h6>Total</h6>
					<p>${fullTotal || 0}</p>
				</div>
			)}

			{info && (
				<CheckoutInfo
					checkedReturn={checkedReturn}
					date={tripStartData}
					secondDate={tripReturnData}
					pickupLocation={pickup && pickup.structured_formatting && pickup.structured_formatting.main_text}
					dropOfLocation={dropOf && dropOf.structured_formatting && dropOf.structured_formatting.main_text}
					extras={extras}
					total={fullTotal}
					pax={pax}
					startPrice={startPrice}
					returnPrice={returnPrice}
				/>
			)}
			<CheckoutLocation
				locationFirst={pickup && pickup.structured_formatting && pickup.structured_formatting.main_text}
				locationLast={dropOf && dropOf.structured_formatting && dropOf.structured_formatting.main_text}
				firstLogo={airplane}
				secondLogo={building}
				setSelectedData={setTripStartData}
			/>
			{console.log('paaaaaaaaaaaaaaaaaaaaa', Array.from(Array(maxPassengers ? maxPassengers + 1 : 0 + 1).keys()))}
			{console.log('bagssssssssssssssssssssssssssssss', Array.from(Array(maxBags ? maxBags + 1 : 0 + 1).keys()))}
			<div className="row m-0">
				<div className="col-6">
					<ExtrasVipInput
						title="No. of Pax"
						options={Array.from(Array(maxPassengers ? maxPassengers + 1 : 0 + 1).keys())}
						setSelected={setPax}
						selected={pax}
					/>
				</div>
				<div className="col-6">
					<ExtrasVipInput
						title="No. of Bags"
						options={Array.from(Array(maxBags ? maxBags + 1 : 0 + 1).keys())}
						setSelected={setBags}
						selected={bags}
					/>
				</div>
			</div>
			<div className="checkout-return-trip">
				<p>Add Return Trip?</p>
				<div className="checkout-return-trip-inner">
					<img src={price} alt="price-tag" />
					<h6>${returnPrice}</h6>
					<span>Extra</span>
				</div>
				<CheckoutSwitch setChecked={setCheckedReturn} checked={checkedReturn} />
			</div>
			{checkedReturn && (
				<Fragment>
					<CheckoutReturnLocation
						locationFirst={pickup && pickup.structured_formatting && pickup.structured_formatting.main_text}
						locationLast={dropOf && dropOf.structured_formatting && dropOf.structured_formatting.main_text}
						secondLogo={airplane}
						firstLogo={building}
						setSelectedData={setTripReturnData}
					/>
				</Fragment>
			)}

			<CheckoutForm setPassengerInfo={setPassengerInfo} />
			<CheckoutPayment terms={terms} setTerms={setTerms} confirmBooking={confirmBooking} valid={valid} />
		</div>
	);
};

export default Checkout;
