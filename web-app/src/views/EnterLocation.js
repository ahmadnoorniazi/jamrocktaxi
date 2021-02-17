import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { FaRoute } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapsAutoComplete from '../components/GoogleMapsAutoComplete';
import GoogleAutoComplete from '../components/GoogleAutoComplete';
import { language } from 'config';
import { FirebaseContext } from 'common';
import { useHistory } from 'react-router-dom';
import { geocodeByPlaceId } from 'react-places-autocomplete';
import withPage from '../utils/withPage';
import loader from '../assets/loader.gif';

// styles
import '../styles/EnterLocation.scss';

// assets
import priceTag from '../assets/pricetag.svg';

// data
// import locations from '../data/locations';

// components
import InputItem from '../components/EnterLocation/InputItem';

const EnterLocation = (props) => {
	// states
	const [ option, setOption ] = useState('To');
	const [ valueTo, setValueTo ] = useState('');
	const [ valueFrom, setValueFrom ] = useState('');
	const [ pickupAddress, setPickupAddress ] = useState(null);
	const [ dropAddress, setDropAddress ] = useState(null);
	const [ showPrices, setShowPrices ] = useState(false);
	const [ focusValue, setFocus ] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();
	const { api } = useContext(FirebaseContext);
	const { getEstimate, pageLoad } = api;
	const [ locations, setLocations ] = useState([]);
	const [ predefinedLoc, setPredefinedLoc ] = useState([]);
	const fleets = useSelector((state) => state.fleetsData.fleets);
	const estimatedata = useSelector((state) => state.estimatedata);

	const locationsData = useSelector((state) => state.pagesData.prefdefinedLocations);

	useEffect(() => {
		dispatch(pageLoad('homepage'));
	}, []);
	useEffect(
		() => {
			if (showPrices)
				if (estimatedata.error.flag && estimatedata.error.msg) {
					// alert('Route not found');
				} else if (estimatedata.estimate) {
					history.push('/booking');
				}
		},
		[ estimatedata ]
	);
	useEffect(
		() => {
			if (locationsData && locationsData.items[0]) {
				const fields = locationsData.items;
				const data = fields.map((item) => ({
					description: item.fields.description,
					structured_formatting: {
						main_text: item.fields.name
					},
					place_id: item.fields.placeId
				}));
				setPredefinedLoc(data);
			}
		},
		[ locationsData ]
	);

	useEffect(
		() => {
			setOption(focusValue);
		},
		[ focusValue ]
	);

	// Populate array
	const LocationsList = () => {
		// Handle Item Click
		const handleItemClick = (newValue) => {
			if (option === 'To' && focusValue === 'To') {
				setValueTo(newValue.structured_formatting.main_text);
			} else {
				setValueFrom(newValue.structured_formatting.main_text);
			}
			if (newValue && newValue.place_id) {
				geocodeByPlaceId(newValue.place_id).then((results) => {
					if (results.length > 0) {
						newValue.coords = {
							lat: results[0].geometry.location.lat(),
							lng: results[0].geometry.location.lng()
						};
						newValue.placeDetails = results[0];
						if (option === 'To' && focusValue === 'To') {
							setPickupAddress(newValue);
						} else {
							setDropAddress(newValue);
						}
					}
				});
			}
		};

		return (
			<div className="enter-location-lower-item-wrapper" style={{ cursor: 'pointer' }}>
				{[ ...locations, ...predefinedLoc ].map((location, index) => {
					return (
						<div
							className="enter-location-lower-item"
							key={index}
							onClick={() => handleItemClick(location)}
						>
							<div className="enter-location-lower-item-content">
								<h6>{location.structured_formatting.main_text}</h6>
								<p>{location.description}</p>
							</div>
							<FaRoute size={22} />
						</div>
					);
				})}
			</div>
		);
	};

	const OptionsList = (options, type) => {
		const filterOptions = options.slice(1);
		setLocations(filterOptions);
	};

	const onShowPrices = () => {
		if (Array.isArray(fleets) && fleets.length) {
			const [ item ] = fleets;
			dispatch(
				getEstimate({
					platform: 'web',
					pickup: pickupAddress,
					drop: dropAddress,
					carDetails: {
						convenience_fees: item.convenienceFees,
						min_fare: item.miniFare,
						rate_per_hour: item.ratePerHour,
						name: item.name,
						rate_per_kilometer: item.retePerKm
					}
				})
			);
			dispatch({
				type: 'SET_SELECTED_ITEMS',
				payload: {
					pickup: pickupAddress,
					dropOn: dropAddress
				}
			});
			setShowPrices(true);
		}
	};
	const getLocationDetailsById = (newValue) => {
		if (newValue && newValue.place_id) {
			geocodeByPlaceId(newValue.place_id)
				.then((results) => {
					if (results.length > 0) {
						newValue.coords = {
							lat: results[0].geometry.location.lat(),
							lng: results[0].geometry.location.lng()
						};
						newValue.placeDetails = results[0];
					}
				})
				.catch((error) => alert(language.google_places_error));
		}
	};
	const disabledState = !pickupAddress || !dropAddress;

	return (
		<div className="enter-location">
			<div className="enter-location-upper">
				<Link to="/">
					<div className="enter-location-back">
						<IoArrowBack />
					</div>
				</Link>

				<GoogleAutoComplete
					type="From"
					callFrom={true}
					callFocus={true}
					setFocus={setFocus}
					focus={focusValue}
					selectedValue={valueFrom}
					optionsList={OptionsList}
					setSelectedValue={setValueFrom}
					name="From"
				/>

				<GoogleAutoComplete
					type="To"
					callFrom={false}
					selectedValue={valueTo}
					setFocus={setFocus}
					focus={focusValue}
					optionsList={OptionsList}
					setSelectedValue={setValueTo}
					disabled={!valueFrom}
					name="To"
				/>
			</div>
			<div className="enter-location-lower">
				{option ? (
					// valueTo === "" ? null : (
					<LocationsList />
				) : (
					// ) : valueFrom === "" ? null : (
					<LocationsList />
				)
				// )
				}
			</div>
			{showPrices &&
			!estimatedata.error.flag &&
			!estimatedata.error.msg && (
				<div className="d-flex justify-content-center align-items-center w-100 h-100">
					<img className="loader" src={loader} alt="loader" />
				</div>
			)}
			<button
				className="enter-location-show_prices"
				disabled={disabledState}
				onClick={onShowPrices}
				style={{ border: 'none' }}
			>
				<div style={{ backgroundColor: disabledState ? 'grey' : '' }}>
					<img src={priceTag} alt="price_tag" />
					<p>Show Prices</p>
				</div>
			</button>
		</div>
	);
};

export default withPage(EnterLocation, 'prefdefinedLocations');
