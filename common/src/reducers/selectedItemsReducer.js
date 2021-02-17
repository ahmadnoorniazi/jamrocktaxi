import { SET_SELECTED_ITEMS, CLEAR_SELECTED_ITEMS } from '../store/types';

export const INITIAL_STATE = {};

export const selectedItemsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_SELECTED_ITEMS:
			return {
				...state,
				...action.payload
			};
		case CLEAR_SELECTED_ITEMS:
			return INITIAL_STATE;

		default:
			return state;
	}
};
