import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { BsFillPersonFill, BsBagFill } from 'react-icons/bs';

const ExtrasVipDropdown = ({ options, title, selected, setSelected, defaultValue, initialValues, name }) => {
	const [ active, setActive ] = useState(false);

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
			return (
				<li
					onClick={() => {
						handleClick(option.value);
					}}
					key={i}
					className={
						'dropdown__list-item ' + (option.value === selected ? 'dropdown__list-item--active' : '')
					}
				>
					{option.label}
				</li>
			);
		});
	};

	return (
		<div className="dropdown">
			<div
				onClick={() => toggleDropdown()}
				className="dropdown__toggle dropdown__list-item"
				style={{ fontSize: '14px', opacity: '0.9', borderColor: '#0070c0' }}
			>
				{title === 'No. of Pax' ? (
					<BsFillPersonFill size={18} />
				) : title === 'No. of Bags' ? (
					<BsBagFill />
				) : null}

				{!selected ? title : selected}
				<FaChevronDown />
			</div>
			<ul className={'dropdown__list ' + (active ? 'dropdown__list--active' : '')}>{renderOptions()}</ul>
		</div>
	);
};

export default ExtrasVipDropdown;
