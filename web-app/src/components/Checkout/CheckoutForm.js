// libraries
import React, { useState, useEffect } from 'react';
import TextField from '../../views/TextField'
import PhoneInput from './PhoneInput'
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
		console.log("uuuuuuuuuuuuuuuuu",  e.target)
		setValues({...values, [e.target.name]: e.target.value})
	}
	const onNumberChange = (v) => {
		console.log("uuuuuuuuuuuuuuuuu",  v)
		setValues({...values, mobileNumber: v})
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
				<TextField label="Firstname" name="firstName" onChange={onInputChange} value={values.firstName}/>
				<TextField label="Lastname" name="lastName" onChange={onInputChange} value={values.lastName} />
				<TextField label="Email" name="email" onChange={onInputChange} value={values.email} />
			<div className="checkout-form-phone-container">
			<PhoneInput phone={values.mobileNumber} setPhone={onNumberChange} />
			</div>
		</div>
	);
};

export default CheckoutForm;
