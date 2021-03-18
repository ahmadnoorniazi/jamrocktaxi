import React, {useState, useEffect} from 'react';
// libs
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5';

import CheckoutDateTimePicker from './Calender';
import TextField from '../../views/TextField'

const CheckoutReturnLocation = ({ locationFirst, locationLast, firstLogo, secondLogo, setSelectedData }) => {
	const [value, setValue] = useState("")
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		setSelectedData({
			returnDate: date,
			flightNumber: value
		})
	}, [value, date])

	const handleReturnNumber = (e) => {
		setValue(e.target.value)
	}

	return (
		<div className="checkout-location">
			<div className="checkout-location-left">
				{/* <div className="checkout-return-location-left-top">
					<IoLocationOutline />
					<p>{locationFirst}</p>
				</div> */}
				<div className="checkout-location-left-mid">
				
						<CheckoutDateTimePicker label="Pickup Date & Time" getDate={setDate} />
						<TextField label="Flight Number" handleChange={handleReturnNumber} value={value} />
				</div>
				{/* <div className="checkout-return-location-left-last">
					<IoLocationSharp />
					<p>{locationLast}</p>
				</div> */}
			</div>
			{/* <div className="checkout-location-right">
				<img src={firstLogo} alt="location-logo" />
				<div />
				<img src={secondLogo} alt="location-logo" />
			</div> */}
		</div>
	);
};

export default CheckoutReturnLocation;
