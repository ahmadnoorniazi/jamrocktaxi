// assets
import React from 'react';
import message from '../../assets/sms.png';
import phone from '../../assets/phone.png';
import mail from '../../assets/mail.png';
import wa from '../../assets/wa.webp';

const ContactUs = ({ children, heading, appList }) => {
	return (
		<div className="home-contact-section px-1">
			<h4>{heading}</h4>
			{children}
			<div className="row justify-content-around m-0">
				{Array.isArray(appList) &&
					appList.map((item) => (
						<div className="home-contact-item">
							<a href={item.fields.value}>
								<img src={'https:' + item.fields.image.fields.file.url} alt={item.fields.name} />
							</a>

							{/* <p>Phone</p> */}
						</div>
					))}
			</div>
		</div>
	);
};

export default ContactUs;
