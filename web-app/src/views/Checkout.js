// libs
import React, { useState, Fragment, useContext, useEffect } from 'react';
import Select from './DetailSelect'
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
import ExtrasVipInputSecond from '../components/Extras/ExtrasVipInput2';

import { useSelector, useDispatch } from 'react-redux';
// assets
import airplane from '../assets/aeroplane.svg';
import building from '../assets/building.svg';
import price from '../assets/price-tag.svg';
import { FirebaseContext } from 'common';
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

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
	const bookingData = useSelector((state) => state.bookingdata.booking);
	const { addBooking } = api;
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { total, car, extras } = cart || {};
	console.log('extrassssssssssssssss', extras);
	const { pickup, dropOf, maxPassengers, maxBags, estimates, name, image } = car.rideData || {};
	const history = useHistory();

	useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);

		if (query.get("success")) {
			const localData = window.localStorage.getItem("cartData")
			const parseData = JSON.parse(localData)

			if(parseData.pickup) {
				confirmBooking(parseData, sendEmail)
				history.push('/order-complete')
			}
		  const message = "Order placed! You will receive an email confirmation."
		}

		if (query.get("canceled")) {

			const message = "Order canceled -- continue to shop around and checkout when you're ready."

		}
	  }, []);

	useEffect(
		() => {
			if (passengersInfo) {
				if (
					passengersInfo.firstName &&
					passengersInfo.lastName &&
					passengersInfo.email &&
					passengersInfo.mobileNumber &&
					pickup && pickup.structured_formatting && pickup.structured_formatting.main_text &&
					dropOf && dropOf.structured_formatting && dropOf.structured_formatting.main_text
				) {
					setValid(true);
				} else {
					setValid(false);
				}
			}
		},
		[ passengersInfo ]
	);

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


	const confirmBooking = (tripData,email) => {
		dispatch(
			addBooking(tripData, email)
		);
	};

	const sendEmail = async (data) => {
		await axios.post("https://us-central1-jamrocktaxi-b40ae.cloudfunctions.net/oncheckout/sendEmail",{...data})
		await axios.post("https://us-central1-jamrocktaxi-b40ae.cloudfunctions.net/oncheckout/createProfile", data.userDetails)
	}

	const handleClick = async (event) => {
		const journey = `${estimates && (estimates.estimateDistance /1000).toFixed()} Km ${estimates && (estimates.estimateTime /60).toFixed()}M`
		const extrasTotal = extras && Array.isArray(extras) && extras.reduce((acc, curr) => acc += curr.price * curr.quantity,0)
		const allData = {
			pickup,
			dest: passengersInfo.email,
			drop: dropOf,
			carDetails: car.rideData,
			userDetails: passengersInfo,
			estimate: estimates,
			tripdate: new Date(tripStartData.startDate).toString(),
			bookLater: false,
			booking_type_web: true,
			settings: { otp_secure: false },
			tripData: {
				totalCost: fullTotal,
				returnTotal: returnPrice || 0,
				pax,
				bags,
				extras,
				paymentStatus: 'success',
				isReturn: checkedReturn,
				journey: journey,
				...tripStartData,
				...tripReturnData,
				extrasCost:extrasTotal
			}
		}
		const stripe = await stripePromise;
		// const requestOptions = {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify()
		// };
		const session = await axios.post("https://us-central1-jamrocktaxi-b40ae.cloudfunctions.net/oncheckout/ahmad", {image, fullTotal, name, pickup: pickup && pickup.structured_formatting && pickup.structured_formatting.main_text, dropOf:dropOf && dropOf.structured_formatting && dropOf.structured_formatting.main_text},{headers: {"Access-Control-Allow-Origin": "*"}});

		window.localStorage.setItem("cartData", JSON.stringify(allData));
		// When the customer clicks on the button, redirect them to Checkout.
		const result = await stripe.redirectToCheckout({
		  sessionId: session.data.id,
		});
		if (result.error) {
			console.log('errorrrrrrrrrrrr')
		  // If `redirectToCheckout` fails due to a browser or network
		  // error, display the localized error message to your customer
		  // using `result.error.message`.
		}
	  };

	return (
		<div className="checkout">
			<CheckoutNav />
			<CheckoutHeading
				info={info}
				setInfo={setInfo}
				taxiName={name || ''}
				maxBags={maxBags || 0}
				maxPassengers={maxPassengers || 0}
			/>
			{!info && (
				<div className="checkout-summary-price-main" style={{borderBottom: "1px solid gray"}}>
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
					bags={bags}
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

			<div className="row m-0">
				<div className="col-6">
					<Select
						title="No. of Pax"
						options={Array.from(Array(maxPassengers ? maxPassengers + 1 : 0 + 1).keys())}
						setSelected={setPax}
						selected={pax}
					/>
				</div>
				<div className="col-6" style={{paddingLeft: 0}}>
					<Select
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
						locationLast={pickup && pickup.structured_formatting && pickup.structured_formatting.main_text}
						locationFirst={dropOf && dropOf.structured_formatting && dropOf.structured_formatting.main_text}
						secondLogo={airplane}
						firstLogo={building}
						setSelectedData={setTripReturnData}
					/>
				</Fragment>
			)}

			<CheckoutForm setPassengerInfo={setPassengerInfo} />
			<CheckoutPayment onHandlePay={handleClick} terms={terms} setTerms={setTerms} confirmBooking={confirmBooking} valid={valid} />
		</div>
	);
};

export default Checkout;
