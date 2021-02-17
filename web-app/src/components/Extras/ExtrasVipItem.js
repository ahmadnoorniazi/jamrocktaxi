// libs
import React, { useState, Fragment, useContext } from 'react';
import { AiFillInfoCircle, AiFillTag } from 'react-icons/ai';
import { FiCheck } from 'react-icons/fi';
import ExtrasVipInput from './ExtrasVipInput';
import { FirebaseContext } from 'common';
import { useDispatch, useSelector } from 'react-redux';
const options = [ 'Option 1', 'Option 2', 'Option 3', 'Option 4' ];

const ExtrasVipItem = ({ extra, showToast }) => {
	// props
	const { image, title, subTitle, price, features } = extra;

	// states
	const [ info, setInfo ] = useState(false);
	const [ quantity, setQuantity ] = useState(1);
	const [ dropdown, setDropdown ] = useState(false);
	const { api } = useContext(FirebaseContext);
	const { setCartData } = api;
	const dispatch = useDispatch();

	// dropdowns
	const [ airport, setAirport ] = useState(-1);
	const [ paxOne, setPaxOne ] = useState(-1);
	const [ paxTwo, setPaxTwo ] = useState(-1);

	const onAddExtras = (extras) => {
		showToast();
		setDropdown(false);
		dispatch(setCartData({ ...extras, quantity }, 'extras'));
	};

	return (
		<div className="extras-item">
			<div className="extras-item-upper">
				<img src={image} alt={title} />
				<div className="extras-item-content">
					<div>
						<h6>{title}</h6>
						<p>{subTitle}</p>
					</div>

					<AiFillInfoCircle
						style={{ color: `${!info ? '#0070c0' : '#39b54a'}` }}
						onClick={() => setInfo(!info)}
					/>
				</div>
				<div className="extras-item-info-container">
					<p>
						{airport === -1 && paxOne === -1 && paxTwo === -1 ? (
							'From'
						) : (
							<AiFillTag
								style={{
									fontSize: '16px',
									marginRight: '8px',
									color: '#39b54a'
								}}
							/>
						)}
						<span>${price}</span>
					</p>
					{dropdown ? (
						<div>
							<p>Qty.</p>
							<input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
						</div>
					) : (
						<button onClick={() => setDropdown(true)} style={{ color: '#0070C0' }}>
							Add Me
						</button>
					)}
				</div>
			</div>
			{dropdown && (
				<Fragment>
					<div className="extras-vip-item-input-container">
						<ExtrasVipInput
							title="Select Airport"
							options={options}
							setSelected={setAirport}
							selected={airport}
						/>
						<ExtrasVipInput
							title="Select Pax"
							options={options}
							setSelected={setPaxOne}
							selected={paxOne}
						/>
						<ExtrasVipInput
							title="Select Pax"
							options={options}
							setSelected={setPaxTwo}
							selected={paxTwo}
						/>
					</div>
					<div className="extas-vip-item-btn-container">
						<button onClick={() => setDropdown(false)}>Cancel</button>
						<button
							onClick={() => onAddExtras(extra)}
							className="extra-nav-btn extra-nav-btn-2"
							style={{ color: '#0070C0' }}
						>
							Add Me
						</button>
					</div>
				</Fragment>
			)}
			{info && (
				<div className="extras-item-lower">
					<h6>Included In the Price:</h6>
					{features.map((feature, index) => {
						return (
							<div key={index}>
								<FiCheck size={20} /> <p>{feature}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default ExtrasVipItem;
