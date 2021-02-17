import {
	FETCH_ESTIMATE,
	FETCH_ESTIMATE_SUCCESS,
	FETCH_ESTIMATE_FAILED,
	CLEAR_ESTIMATE,
	SET_SELECTED_ITEMS
} from '../store/types';
import Polyline from '@mapbox/polyline';

import { FareCalculator } from '../other/FareCalculator';
import { getRouteDetails } from '../other/GoogleAPIFunctions';
import { store } from '../store/store';

export const getEstimate = (bookingData) => (dispatch) => (firebase) => {
	dispatch({
		type: FETCH_ESTIMATE,
		payload: bookingData
	});

	let startLoc = '"' + bookingData.pickup.coords.lat + ',' + bookingData.pickup.coords.lng + '"';
	let destLoc = '"' + bookingData.drop.coords.lat + ',' + bookingData.drop.coords.lng + '"';

	getRouteDetails(bookingData.platform, startLoc, destLoc).then((res) => {
		if (res) {
			let points = Polyline.decode(res.polylinePoints);
			let waypoints = points.map((point) => {
				return {
					latitude: point[0],
					longitude: point[1]
				};
			});
			const fleetsPrices = store.getState().pagesData && store.getState().pagesData.fleetsPrices;
			var fareCalculation = FareCalculator(res.distance, res.duration, bookingData.carDetails, fleetsPrices);
			dispatch({
				type: FETCH_ESTIMATE_SUCCESS,
				payload: {
					pickup: bookingData.pickup,
					drop: bookingData.drop,
					bookLater: bookingData.bookLater,
					bookingDate: bookingData.bookingDate,
					carDetails: bookingData.carDetails,
					estimateDistance: res.distance,
					estimateFare:
						fareCalculation.priceDetails && fareCalculation.priceDetails.fields
							? parseFloat(fareCalculation.priceDetails.fields.price).toFixed(2)
							: 0,
					estimateTime: res.duration,
					waypoints: waypoints,
					priceDetails: fareCalculation
				}
			});
			dispatch({
				type: SET_SELECTED_ITEMS,
				payload: {
					[`${bookingData.carDetails.name}_estimations`]: {
						pickup: bookingData.pickup,
						drop: bookingData.drop,
						bookLater: bookingData.priceDetails,
						bookingDate: bookingData.bookingDate,
						carDetails: bookingData.carDetails,
						estimateDistance: res.distance,
						estimateFare:
							fareCalculation.priceDetails && fareCalculation.priceDetails.fields
								? parseFloat(fareCalculation.priceDetails.fields.price).toFixed(2)
								: 0,
						estimateTime: res.duration,
						priceDetails: fareCalculation.priceDetails,

						waypoints: waypoints
					}
				}
			});
		} else {
			dispatch({
				type: FETCH_ESTIMATE_FAILED,
				payload: 'No Route Found'
			});
		}
	});
};

export const clearEstimate = () => (dispatch) => (firebase) => {
	dispatch({
		type: CLEAR_ESTIMATE,
		payload: null
	});
};
