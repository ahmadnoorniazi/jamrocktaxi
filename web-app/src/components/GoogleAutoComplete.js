import React, { useState, useMemo, useRef, useEffect } from 'react';
import InputItem from './EnterLocation/InputItem';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import { language, Google_Map_Key } from 'config';

function loadScript(src, position, id) {
	if (!position) {
		return;
	}

	const script = document.createElement('script');
	script.setAttribute('async', '');
	script.setAttribute('id', id);
	script.src = src;
	position.appendChild(script);
}

const autocompleteService = { current: null };

const GoogleAutoComplete = ({
	optionsList,
	selectedValue,
	setSelectedValue,
	type,
	disabled,
	selectedType,
	callFrom,
	name,
	callFocus,
	setFocus
}) => {
	const [ inputValue, setInputValue ] = useState('');
	const [ value, setValue ] = useState('');
	const [ options, setOptions ] = useState([]);
	const [ option, setOption ] = useState(false);
	const loaded = useRef(false);

	if (typeof window !== 'undefined' && !loaded.current && !window.google) {
		if (!document.querySelector('#google-maps')) {
			loadScript(
				'https://maps.googleapis.com/maps/api/js?key=' + Google_Map_Key + '&libraries=places',
				document.querySelector('head'),
				'google-maps'
			);
		}

		loaded.current = true;
	}

	const fetch = useMemo(
		() =>
			throttle((request, callback) => {
				autocompleteService.current.getPlacePredictions(request, callback);
			}, 200),
		[]
	);

	useEffect(
		() => {
			setInputValue(value);
		},
		[ value ]
	);

	useEffect(
		() => {
			let active = true;

			if (
				!autocompleteService.current &&
				window.google &&
				window.google.maps &&
				window.google.maps.places &&
				window.google.maps.places.AutocompleteService
			) {
				autocompleteService.current = new window.google.maps.places.AutocompleteService();
			}
			if (!autocompleteService.current) {
				return undefined;
			}

			if (inputValue === '') {
				setOptions(value ? [ value ] : []);
				return undefined;
			}

			fetch({ input: inputValue, componentRestrictions: { country: 'jm' } }, (results) => {
				if (active) {
					let newOptions = [];

					if (value) {
						newOptions = [ value ];
					}

					if (results) {
						newOptions = [ ...newOptions, ...results ];
					}

					setOptions(newOptions);
				}
			});

			return () => {
				active = false;
			};
		},
		[ value, inputValue, fetch ]
	);

	useEffect(
		() => {
			optionsList(options, type);
		},
		[ options ]
	);

	useEffect(
		() => {
			if (selectedValue) {
			}
		},
		[ selectedValue ]
	);

	const onInputChange = (a, b) => {
		// setOptions(newValue ? [ newValue, ...options ] : options);
		// setValue(newValue);
		// if (newValue && newValue.place_id) {
		// 	geocodeByPlaceId(newValue.place_id)
		// 		.then((results) => {
		// 			if (results.length > 0) {
		// 				newValue.coords = {
		// 					lat: results[0].geometry.location.lat(),
		// 					lng: results[0].geometry.location.lng()
		// 				};
		// 				newValue.placeDetails = results[0];
		// 			}
		// 			props.onChange(newValue);
		// 		})
		// 		.catch((error) => alert(language.google_places_error));
		// } else {
		// 	props.onChange(newValue);
		// }
	};
	const onSetVlaue = (value) => {
		setSelectedValue('');
		setValue(value);
	};
	const selectedAddress = selectedValue || value;
	return (
		<InputItem
			option={option}
			setOption={setOption}
			textValue={selectedAddress}
			setTextValue={onSetVlaue}
			placeholder={`Where ${type}?`}
			callFrom={callFrom}
			onChange={onInputChange}
			disabled={disabled}
			name={name}
			callFocus={callFocus}
			setFocus={setFocus}
		/>
	);
};

export default GoogleAutoComplete;
