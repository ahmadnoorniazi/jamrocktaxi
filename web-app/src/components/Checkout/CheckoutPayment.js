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

const CheckoutPayment = ({ terms, setTerms, confirmBooking, valid }) => {
	const history = useHistory();

	const onClick = () => {
		confirmBooking();
		history.push('/order-complete');
	};

	return (
		<div className="checkout-payment">
			<div className="checkout-payment-heading">
				<h6>Payment</h6>
				<div>
					<p>
						Terms & Conditions <span onClick={() => history.push('/privacy')}>Read</span>
					</p>
					<div>
						<CheckoutSwitch setChecked={setTerms} checked={terms} />
					</div>
				</div>
			</div>
			<div className="checkout-payment-card-container">
				<div className="checkout-payment-card">
					<img src={paypal} alt="PayPal" />
					<p>Paypal</p>
				</div>
				<div className="checkout-payment-card-special">
					<div className="checkout-payment-card">
						<img src={gpay} alt="gPay" />
						<p>Gpay</p>
					</div>
				</div>
				<div className="checkout-payment-card">
					<img src={mastercard} alt="mastercard" />
					<p>Card</p>
				</div>
			</div>
			<div>
				<h6>Pay by Card</h6>
				<TextField className="checkout-payment-form-name" label="Name on Card" variant="outlined" />
				<div className="payment-card-main" style={{display: 'flex', justifyContent: "space-between"}}>
					<TextField className="checkout-payment-form-card-num" label="Card Number" variant="outlined"/>
					<TextField className="checkout-payment-form-card-expiry" label="Expiry" variant="outlined" />
					<TextField className="checkout-payment-form-card-cvc" label="CVV"  variant="outlined" />
				</div>
			</div>
			<button disabled={!valid} onClick={onClick} className="checkout-payment-btn"  variant="outlined">
				Pay
			</button>
		</div>
	);
};

export default CheckoutPayment;
