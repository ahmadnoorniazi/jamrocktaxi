import React from 'react';
// components
import ExtrasVipItem from './ExtrasVipItem';

const ExtrasList = ({ extras, showToast }) => {
	return (
		<div className="extras-item-container">
			{Array.isArray(extras) &&
				extras.map((extra, index) => {
					return <ExtrasVipItem key={index} extra={extra} showToast={showToast} />;
				})}
		</div>
	);
};

export default ExtrasList;
