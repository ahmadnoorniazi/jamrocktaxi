import React, { useState } from 'react';
// components
import Navbar from '../components/Home/Navbar';
import ContactUs from '../components/Home/ContactUs';

// style
import '../styles/Feedback.scss';

// import { useHistory } from "react-router-dom";

// icons
import ChatIcon from '../assets/icons/chat.svg';
import PlayStore from '../assets/icons/playstore.svg';
import AppStore from '../assets/icons/app-store.svg';
import { FiPhone, FiMail } from 'react-icons/fi';
import withPage from '../utils/withPage';

const Feedback = ({ page }) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const {
		getAppHeader,
		getAppSubHeader,
		heading,
		onlineMessageText,
		subHeading,
		otherContacts,
		appList,
		appImagesList
	} =
		(page.items && page.items[0] && page.items[0].fields) || {};

	// const history = useHistory();
	console.log('pageeeeeeeeeee', page);
	return (
		<div>
			<Navbar />
			<ContactUs heading={heading} appList={appList}>
				<p className="favorite-apps-text">{subHeading}</p>
			</ContactUs>
			<div className="feedback">
				<div>
					<h4>Other Contacts</h4>
					<div className="feedback-inner m-0 row">
						{Array.isArray(otherContacts) &&
							otherContacts.map((item) => (
								<div className="col-6 m-0 feedback-item">
									<a href={item.fields.link} style={{ display: 'flex' }}>
										{item.fields.name === 'Phone' && <FiPhone color="#0070c0" size={18} />}
										{item.fields.name.trim() === 'Email' && <FiMail color="#0070c0" size={20} />}
										<p>{item.fields.value}</p>
									</a>
								</div>
							))}
						{/* <div className="col-6 m-0 feedback-item">
							<FiPhone color="#0070c0" size={18} />
							<p>UK +44 7985 190947</p>
						</div>
						<div className="col-6 m-0 feedback-item">
							<FiPhone color="#0070c0" size={18} />
							<p>JA +1 876 402 1979</p>
						</div>
						<div className="col-6 m-0 feedback-item">
							<FiMail color="#0070c0" size={20} />
							<p>hello@jamrocktaxi.com</p>
						</div> */}
					</div>
					{/* <div className='feedback-info'>
            <span>US +1 217 636 4160</span>
            <div className='feedback-icon'>
              <FiPhone color='#0070c0' size={18} />
            </div>
          </div>
          <div className='feedback-info'>
            <span>JA +1 876 402 1979</span>
            <div className='feedback-icon'>
              <FiPhone color='#0070c0' size={18} />
            </div>
          </div>
          <div className='feedback-info'>
            <span>UK +44 7985 190947</span>
            <div className='feedback-icon'>
              <FiPhone color='#0070c0' size={18} />
            </div>
          </div>
          <div className='feedback-info'>
            <span>hello@jamrocktaxi.com</span>
            <div className='feedback-icon'>
              <FiMail color='#0070c0' size={18} />
            </div>
          </div> */}
				</div>
				<div className="feedback-form-box">
					<div className={'feedback-chat ' + (isOpen ? 'd-none' : 'd-block')}>
						<h4>{onlineMessageText}</h4>
						<a href="mailto:hello@jamrocktaxi.com">
							<img src={ChatIcon} alt="chat" onClick={toggle} />
						</a>
					</div>
					<div className={'feedback-form ' + (isOpen ? 'd-block' : 'd-none')}>
						<h4>Write To Us</h4>
						<form className="form">
							<input type="text" className="form-input" placeholder="First Name" />
							<input type="text" className="form-input" placeholder="Last Name" />
							<input type="email" className="form-input" placeholder="Email" />
							<input type="text" className="form-input" placeholder="Subject" />
							<textarea rows={3} col={1} className="form-input" placeholder="Message" />
							<button
								onClick={(e) => {
									setIsOpen(false);
									e.preventDefault();
								}}
								className="form-cancel-btn"
							>
								Cancel
							</button>
							<button className="form-btn">Send</button>
						</form>
					</div>
				</div>
				<div className="feedback-store">
					<h4>{getAppHeader}</h4>
					<p>{getAppSubHeader}</p>
					<div className="feedback-store-icons">
						{Array.isArray(appImagesList) &&
							appImagesList.map((item) => (
								<div>
									<img src={'https:' + item.fields.image.fields.file.url} alt={item.fields.label} />
									<span>{item.fields.label}</span>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

const pageSlug = 'contactUs';
export default withPage(Feedback, pageSlug);
