// libs
import React, { useState, useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import withPage from '../utils/withPage';
// styles
import '../styles/Extras.scss';

// data
import extras from '../data/extras';

// components
import ExtrasNav from '../components/Extras/ExtrasNav';
import ExtrasHeading from '../components/Extras/ExtrasHeading';
import ExtrasInfo from '../components/Extras/ExtrasInfo';
import ExtrasList from '../components/Extras/ExtrasList';

const Extras = ({ page }) => {
	// state
	const [ info, setInfo ] = useState(false);
	const [ showCheckout, setShowCheckout ] = useState(false);
	const cart = useSelector((state) => (state.selectedItems && state.cart) || {});
	const selectedLocations = useSelector((state) => state.selectedItems);
	const [ extrasList, setExtrasList ] = useState([]);
	const { total, rideData } = cart.car || {};
	const { extras } = cart;
	// toast
	const [ extraAdded, setExtraAdded ] = useState(false);

	useEffect(
		() => {
			let data = [];
			if (page && page.items && page.items[0].fields) {
				const extras = page.items[0].fields.extrasList;
				data = extras.map((item) => ({
					features: item.fields.features,
					title: item.fields.title,
					subTitle: item.fields.subTitle,
					price: item.fields.price,
					image: 'https:' + item.fields.image.fields.file.url,
					dropdowns: item.fields.dropDownsList
				}));
			}

			setExtrasList(data);
		},
		[ page ]
	);

	const showToast = () => {
		setExtraAdded(true);
		setShowCheckout(true);
		let timer = setTimeout(() => {
			setExtraAdded(false);
			clearTimeout(timer);
		}, 3000);
	};
	const { pickup, dropOn } = selectedLocations;
	return (
		<div className="extras">
			{extraAdded && (
				<div className="extras-toast">
					<div onClick={() => setExtraAdded(false)}>
						<FiCheck /> <p>Extra Added Successfully</p>
					</div>
				</div>
			)}
			<ExtrasNav showCheckout={showCheckout} />
			
			<ExtrasHeading
				info={info}
				setInfo={setInfo}
				maximumPas={rideData && rideData.maxPassengers ? rideData.maxPassengers : ''}
				maximumBags={rideData && rideData.maxBags ? rideData.maxBags : ''}
				heading={rideData && rideData.name ? rideData.name : ''}
			/>
			{info && (
				<ExtrasInfo
					pickupAddress={pickup && pickup.structured_formatting && pickup.structured_formatting.main_text}
					dropAddress={dropOn && dropOn.structured_formatting && dropOn.structured_formatting.main_text}
					extras={extras}
					total={cart.total ? cart.total : 0}
					carFare={total}
				/>
			)}
			<div style={{height: "1px", backgroundColor: "gray"}} />
			<ExtrasList showToast={showToast} extras={extrasList} />
			<ExtrasNav showCheckout={showCheckout} />
		</div>
	);
};

export default withPage(Extras, 'extras');
