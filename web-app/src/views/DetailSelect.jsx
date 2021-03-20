import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 120,
		width: '100%'
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

const ExtrasVipDropdown = ({ options, title, selected, setSelected, defaultValue, initialValues, name }) => {
	const [ active, setActive ] = useState(false);
	const [ value, setValue ] = useState('');

	const classes = useStyles();

	const handleChange = (event) => {
		setValue(event.target.value);
		setSelected(event.target.value);
	};
	const toggleDropdown = () => {
		setActive(!active);
	};

	const handleClick = (i) => {
		toggleDropdown();
		setSelected({ ...initialValues, [name]: i });
	};

	const renderOptions = () => {
		if (!options) {
			return;
		}

		return options.map((option, i) => {
			return <MenuItem value={option}>{option}</MenuItem>;
		});
	};

	return (
		<div className="dropdown">
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel id="demo-simple-select-outlined-label">{title}</InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					style={{ backgroundColor: '#fff' }}
					value={selected}
					onChange={handleChange}
					label={title}
				>
					{renderOptions()}
				</Select>
			</FormControl>
		</div>
	);
};

export default ExtrasVipDropdown;
