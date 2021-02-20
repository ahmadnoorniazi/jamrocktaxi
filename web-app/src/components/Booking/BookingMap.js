// libs
import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import Map from '../../components/Map';

// assets
import loader from '../../assets/loader.gif';
import Map from './Map';

const BookingMap = (props) => {
	const [ mylocation, setMylocation ] = useState(null);

	const containerStyle = {
		width: '100%',
		height: '100%'
	};

	const center = {
		// 18.017680, -76.810117
		lat: 37.5326,
		// lat: 18.01768,
		// lng: -76.810117,
		lng: 127.024612
	};

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyCl46gvn2YsfKumxlh3UEOl_u3QeakcOVo'
	});

	useEffect(
		() => {
			if (mylocation == null) {
				navigator.geolocation.getCurrentPosition(
					(position) =>
						setMylocation({
							lat: position.coords.latitude,
							lng: position.coords.longitude
						}),
					(err) => console.log(err)
				);
			}
		},
		[ mylocation ]
	);

	// import React, { Component } from 'react';
	// import { render } from 'react-dom';
	// import './style.css';

	const googleMapsApiKey = 'AIzaSyDFrMlfrDNnwEJTDE5cHRrnXUC9XJ_pjjM';

	// const App = (props) => {
	// 	const { places } = props;

	const { loadingElement, containerElement, mapElement, defaultCenter, defaultZoom } = props;

	// 	return (
	// <Map
	// 	googleMapURL={
	// 		'https://maps.googleapis.com/maps/api/js?key=' + googleMapsApiKey + '&libraries=geometry,drawing,places'
	// 	}
	// 	markers={places}
	// 	loadingElement={loadingElement || <div style={{ height: `100%` }} />}
	// 	containerElement={containerElement || <div style={{ height: '80vh' }} />}
	// 	mapElement={mapElement || <div style={{ height: `100%` }} />}
	// 	defaultCenter={defaultCenter || { lat: 25.798939, lng: -80.291409 }}
	// 	defaultZoom={defaultZoom || 11}
	// />;
	// 	);
	// };

	const places = [
		{ latitude: 25.8103146, longitude: -80.1751609 },
		{ latitude: 27.9947147, longitude: -82.5943645 },
		{ latitude: 28.4813018, longitude: -81.4387899 }
	];

	// render(<App defaultZoom={7} places={places} />, document.getElementById('root'));
	return (
		<div className="booking-map">
			{isLoaded ? (
				<Map
					googleMapURL={
						'https://maps.googleapis.com/maps/api/js?key=' +
						googleMapsApiKey +
						'&libraries=geometry,drawing,places'
					}
					markers={props.locations}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `100%` }} />}
					mapElement={<div style={{ height: `100%` }} />}
					defaultCenter={mylocation || { lat: 25.798939, lng: -80.291409 }}
					defaultZoom={defaultZoom || 20}
				/>
			) : (
				<div className="d-flex justify-content-center align-items-center w-100 h-100">
					<img className="loader" src={loader} alt="loader" />
				</div>
			)}
		</div>
	);
};

export default React.memo(BookingMap);
