// libraries
import React, { useState, useEffect } from 'react';

// assets
import flag from '../../assets/flag.svg';

const CheckoutForm = ({setPassengerInfo}) => {
	const [ note, setNote ] = useState(false);
	const [ size, setSize ] = useState(100);
	const [ text, setText ] = useState('');
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		countryCode: "",
		mobileNumber: ""
	});

	useEffect(() => {
		setPassengerInfo({...values, note: text});
	},[values, text])

	const handleChange = (e) => {
		setText(e.target.value);
		setSize(99 - text.length);
	};

	const onInputChange = (e) => {
		setValues({...values, [e.target.name]: e.target.value})
	}



	return (
		<div className="checkout-form">
			<div className="checkout-form-heading">
				{note && (
					<div className="checkout-note">
						<textarea
							maxLength={100}
							placeholder="Need to tell us something?"
							onChange={(e) => handleChange(e)}
							value={text}
						/>
						<div>
							<span>{size}</span>
							<button onClick={() => setNote(false)}>Cancel Note</button>
						</div>
					</div>
				)}

				<div>
					<h6>Lead Passenger Info</h6>
					{!note && <h5 onClick={() => setNote(true)}>Add Note</h5>}
				</div>
				<p>Passenger profile will be created</p>
			</div>
			<div className="checkout-form-inner">
				<input placeholder="Firstname" name="firstName" onChange={onInputChange} value={values.firstName}/>
				<input placeholder="Lastname" name="lastName" onChange={onInputChange} value={values.lastName} />
				<input placeholder="Email" name="email" onChange={onInputChange} value={values.email} />
			</div>
			<div className="checkout-form-phone-container">
				<img src={flag} alt="flag" />
				<input className="checkout-form-extension" placeholder="+1" type="number" name="countryCode"  onChange={onInputChange} value={values.countryCode}  />
				<div className="checkout-form-number">
					<input placeholder="Mobile Number" name="mobileNumber"  onChange={onInputChange} value={values.mobileNumber} />
				</div>
			</div>
		</div>
	);
};

export default CheckoutForm;
