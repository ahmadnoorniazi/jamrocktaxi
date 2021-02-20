import React from 'react';

const ExtrasHeading = ({ info, setInfo, maximumPas, maximumBags, heading }) => {
	return (
		<div className="extras-heading">
			<div>
				<h6>{heading}</h6>
				<p>{`Up To ${maximumPas} Pax - Up To ${maximumBags} Suitcases`}</p>
			</div>
			<button style={{ backgroundColor: `${info ? '#39b54a' : '#0070c0'}` }} onClick={() => setInfo(!info)}>
				{info ? 'Less Info' : 'More Info'}
			</button>
		</div>
	);
};

export default ExtrasHeading;
