import { PAGE_LOAD, PAGE_ERROR, PAGE_LOADED, SET_FLEETS_DATA } from '../store/types';

import { store } from '../store/store';
import { contentfullConfig } from 'config';
const contentfull = require('contentful');

console.log('COOOOOOOOOOOOOOO', contentfull);
var client = contentfull.createClient({
	...contentfullConfig
});
export const fetchPage = (pageName) => async (dispatch) => {
	console.log('pageName', pageName);
	dispatch({
		type: PAGE_LOAD,
		payload: null
	});

	try {
		const pageData = await client.getEntries({
			content_type: pageName
		});
		dispatch({
			type: PAGE_LOADED,
			payload: { [pageName]: pageData }
		});
		if (pageName === 'homepage' && pageData.items && pageData.items[0].fields) {
			const { ourFleets } = pageData.items[0].fields;
			console.log('our fleetssssssssssssssssssssssss', ourFleets);
			const fleets = ourFleets.map((item) => ({
				detail: item.fields.detail,
				name: item.fields.name,
				image: 'https:' + item.fields.image.fields.file.url,
				maxPassengers: item.fields.maxPassengers,
				ratePerHour: item.fields.ratePerHour,
				retePerKm: item.fields.retePerKm,
				miniFare: item.fields.miniFare,
				convenienceFees: item.fields.convenienceFees,
				features: item.fields.features,
				maxBags: item.fields.maxBugs
			}));
			dispatch({
				type: SET_FLEETS_DATA,
				payload: fleets
			});
		}
	} catch (e) {
		dispatch({
			type: PAGE_ERROR,
			payload: null
		});
	}
};
