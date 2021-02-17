import React from 'react';

const CheckoutSwitch = ({ checked, setChecked }) => {
	return (
		<div className="ToggleSwitch ToggleSwitch__rounded">
			<div className="ToggleSwitch__wrapper">
				<div className={`Slider ${checked && 'isChecked'}`} onClick={() => setChecked(!checked)} />
			</div>
		</div>
	);
};

export default CheckoutSwitch;
