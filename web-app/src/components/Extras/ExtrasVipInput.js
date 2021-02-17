import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { BsFillPersonFill, BsBagFill } from 'react-icons/bs';

const ExtrasVipDropdown = ({ options, title, selected, setSelected }) => {
	const [ active, setActive ] = useState(false);

	const toggleDropdown = () => {
		setActive(!active);
	};

	const handleClick = (i) => {
		toggleDropdown();
		setSelected(i);
	};

	const renderOptions = () => {
		if (!options) {
			return;
		}

		return options.map((option, i) => {
			return (
				<li
					onClick={() => {
						handleClick(option);
					}}
					key={i}
					className={'dropdown__list-item ' + (i === selected ? 'dropdown__list-item--active' : '')}
				>
					{option}
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

				{selected === -1 ? title : selected}
				<FaChevronDown />
			</div>
			<ul className={'dropdown__list ' + (active ? 'dropdown__list--active' : '')}>{renderOptions()}</ul>
		</div>
	);
};

export default ExtrasVipDropdown;
