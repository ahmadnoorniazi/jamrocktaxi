import { SET_CART_TOTAL, SET_CART_ITEMS, SET_CAR_DATA, SET_EXTRAS_DATA } from '../store/types';

import { store } from '../store/store';

export const setCartData = (items, type) => (dispatch) => {
	const currentState = store.getState().cart;

	if (type === 'car') {
		const total = parseInt(parseInt(currentState.total).toFixed()) + parseInt(parseInt(items.total).toFixed());
		dispatch({
			type: SET_CAR_DATA,
			payload: items
		});
		dispatch({
			type: SET_CART_TOTAL,
			payload: total
		});
	}
	if (type === 'extras') {
		const total =
			parseInt(parseInt(currentState.total).toFixed()) +
			parseInt(parseInt(items.price).toFixed()) * parseInt(parseInt(items.quantity));

		dispatch({
			type: SET_EXTRAS_DATA,
			payload: items
		});
		dispatch({
			type: SET_CART_TOTAL,
			payload: total
		});
	}
};
