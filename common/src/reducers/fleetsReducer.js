import { SET_FLEETS_DATA } from '../store/types';

const INITIAL_STATE = {
	fleets: []
};

export const fleetsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_FLEETS_DATA:
			return {
				fleets: action.payload
			};
		default:
			return state;
	}
};
