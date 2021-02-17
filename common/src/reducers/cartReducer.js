import { SET_CART_TOTAL, SET_CART_ITEMS, SET_CAR_DATA, SET_EXTRAS_DATA } from '../store/types';

const INITIAL_STATE = {
	car: {},
	extras: [],
	total: 0
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
				extras: [ ...state.extras, action.payload ]
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
