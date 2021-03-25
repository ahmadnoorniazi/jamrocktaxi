import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		width: '100%',
		input: {
			padding: '18.5px 0px'
		}
	}
}));

export default function DateAndTimePickers({ label, value, onChangeDate }) {
	const classes = useStyles();
console.log("value", value)
	return (
		<form className={`${classes.container} calendar-input`} noValidate>
			<TextField
				id="datetime-local"
				label={label}
				variant="outlined"
				type="datetime-local"
				value={value}
				onChange={(e) => onChangeDate(e.target.value)}
				defaultValue={value}
				className={classes.textField}
				InputLabelProps={{
					shrink: true
				}}
			/>
		</form>
	);
}
