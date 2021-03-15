// libs
import React, { createRef, useEffect } from 'react';
import { IoLocationSharp, IoLocationOutline } from 'react-icons/io5';
import { IoMdArrowRoundForward } from 'react-icons/io';

const InputItem = ({
	option,
	setOption,
	textValue,
	setTextValue,
	placeholder,
	callFrom,
	disabled,
	name,
	callFocus,
	setFocus
}) => {
	var ref = createRef();
	useEffect(
		() => {
			if (callFocus) {
				focus(name);
			}
		},
		[ callFocus ]
	);
	// Handle input focus
	const focus = () => {
		if (!disabled) {
			ref.current.focus();
			setFocus(name);
			setOption(true);
		}
	};
console.log("texttttt valuwee", textValue)
	return (
		<div
			className="enter-location-input"
			
			onClick={focus}
		>
			{/* {option ? (
				<IoLocationOutline className="enter-location-input-icon" style={{ color: 'white' }} />
			) : (
				<IoLocationSharp style={{ color: '#0070c0' }} />
			)} */}
			<input
				type="text"
				disabled={disabled}
				value={textValue}
				onChange={(e) => setTextValue(e.target.value)}
				placeholder={placeholder}
				ref={ref}
			/>
			{/* <IoMdArrowRoundForward
				style={{
					color: `${option ? 'white' : '#0070c0'}`
				}}
			/> */}
		</div>
	);
};

export default InputItem;
