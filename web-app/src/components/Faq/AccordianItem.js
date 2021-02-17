import React, { Fragment } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AccordianItem = ({ id, flag, closeAll, title, children }) => {
	return (
		<Fragment>
			<div
				id={id}
				className="faq-accordian-header"
				onClick={(e) => {
					closeAll(e.currentTarget.id);
				}}
			>
				<p style={{ color: `${!flag ? '#0070c0' : '#39b54a'}` }}>{title}</p>{' '}
				{flag ? <FaChevronUp /> : <FaChevronDown />}
			</div>
			<div className={flag === true ? 'faq-accordian-body' : 'faq-accordian-hide'}>{children}</div>
		</Fragment>
	);
};

export default AccordianItem;
