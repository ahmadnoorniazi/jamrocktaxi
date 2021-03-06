// libs
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
var dateFormat = require("dateformat");
var now = new Date();

import 'react-datepicker/dist/react-datepicker.css';

const CheckoutDateTimePicker = ({getDate = () =>{}}) => {
	const [ startDate, setStartDate ] = useState(dateFormat(now, "isoDateTime"));

	return (
		<DatePicker
			selected={startDate}
			onChange={(date) => {
				setStartDate(date)
				getDate(date)
			}}
			// locale='pt-BR'
			showTimeSelect
			timeFormat="p"
			timeIntervals={15}
			// dateFormat='Pp'
			dateFormat="dd-MM-yy     HH:mm"
			withPortal
		/>
	);
};

export default CheckoutDateTimePicker;
