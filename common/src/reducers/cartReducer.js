import { SET_CART_TOTAL, SET_CART_ITEMS, SET_CAR_DATA, SET_EXTRAS_DATA } from '../store/types';

const INITIAL_STATE = {
	car: {},
	extras: [],
	total: 0
};

const setExtras = (state, extra) => {
	const exist = state.extras.find((item) => item.title === extra.title);
	if (exist) {
		return state.extras.map((item) => {
			console.log('otherrrrrr hreeee');

			if (item.title === extra.title) {
				item.quantity = item.quantity + extra.quantity;
				return item;
			}
			return item;
		});
	} else {
		console.log('comeeeeeeee hreeee');
		return [ ...state.extras, extra ];
	}
};

export const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_CAR_DATA:
			return {
				...state,
				car: {
					...action.payload
				}
			};
		case SET_EXTRAS_DATA:
			return {
				...state,
				extras: [ ...setExtras(state, action.payload) ]
			};
		case SET_CART_TOTAL:
			return {
				...state,
				total: action.payload
			};

		default:
			return state;
	}
};
