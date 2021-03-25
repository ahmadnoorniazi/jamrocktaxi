import React, {useState, useEffect} from 'react';
// libs
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5';
// import { GoPrimitiveDot } from "react-icons/go";
import CheckoutDateTimePicker from './Calender'
import TextField from '../../views/TextField'
var dateFormat = require("dateformat");
var now = new Date();

const CheckoutLocation = ({ locationFirst, locationLast, firstLogo, secondLogo, setSelectedData }) => {

	const [value, setValue] = useState("")
	const [date, setDate] = useState(dateFormat(now, "yyyy-mm-dd'T'HH:MM"))


	useEffect(() => {
		setSelectedData({
			startData: date,
			flightNumber: value
		})
	}, [value, date])


	const handleReturnNumber = (e) => {
		setValue(e.target.value)
	}
	return (
		<div className="checkout-location">
			<div className="checkout-location-left">
				{/* <div className="checkout-location-left-top">
					<IoLocationOutline />
					<p>{locationFirst}</p>
				</div> */}
				<div className="checkout-location-left-mid">
					{/* <div className="checkout-location-left-mid-first">
						<CheckoutDateTimePicker />
					</div> */}

					<CheckoutDateTimePicker label="Pickup Date & Time" value={date} onChangeDate={setDate} />
						<TextField label="Flight Number" handleChange={handleReturnNumber} value={value} />

						
				</div>
				{/* <div className="checkout-location-left-last">
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

export default CheckoutLocation;
