import { SET_SELECTED_ITEMS, CLEAR_SELECTED_ITEMS } from '../store/types';

import { store } from '../store/store';

export const selectedState = (data) => (dispatch) => {
	dispatch({
		type: SET_SELECTED_ITEMS,
		payload: data
	});
};
