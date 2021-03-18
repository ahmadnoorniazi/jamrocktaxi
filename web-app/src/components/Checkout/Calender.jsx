import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: '100%',
		input: {
			padding: '18.5px 0px'
		}
	}
}));

export default function DateAndTimePickers({ label }) {
	const classes = useStyles();

	return (
		<form className={`${classes.container} calendar-input`} noValidate>
			<TextField
				id="datetime-local"
				label={label}
				variant="outlined"
				type="datetime-local"
				format="yyyy-mm-dd"
				defaultValue="2017-05-24T10:30"
				className={classes.textField}
				InputLabelProps={{
					shrink: true
				}}
			/>
		</form>
	);
}
