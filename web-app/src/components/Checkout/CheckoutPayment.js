import React from 'react';
// libs
import { useHistory } from 'react-router-dom';

// assets
import paypal from '../../assets/paypal.svg';
import gpay from '../../assets/gpay.svg';
import mastercard from '../../assets/mastercard.svg';
import TextField from '@material-ui/core/TextField';
// components
import CheckoutSwitch from './CheckoutSwitch';

const CheckoutPayment = ({ terms, setTerms, confirmBooking, valid, onHandlePay }) => {
	const history = useHistory();

	const onClick = () => {
		// confirmBooking();
		// history.push('/order-complete');
		onHandlePay()
	};

	return (
		<div className="checkout-payment">
			<button disabled={!valid}  onClick={onClick} className="checkout-payment-btn"  variant="outlined">
				Pay
			</button>
		</div>
	);
};

export default CheckoutPayment;
