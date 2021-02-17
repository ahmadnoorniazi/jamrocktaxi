// components
import React, { Fragment } from 'react';
import Navbar from '../components/Home/Navbar';

// styles
import '../styles/Privacy.scss';

const Privacy = () => {
	return (
		<Fragment>
			<Navbar />
			<div className="privacy">
				<h1>TERMS AND CONDITIONS</h1>
				<p>
					Please read our terms and conditions as they will govern any service contract entered into with
					Jamrock Taxi Ltd. We will accept your orders & make a legally enforceable agreement without further
					reference to you, you must read these terms & conditions to make sure that you are happy with them.
					For more information please contact us at :{' '}
					<a href="mailto:Info@amrocktaxi.com">Info@amrocktaxi.com.</a>
					<br />
					<br />
					These Terms & Conditions will apply to the purchase of the services by you (the Customer or you). We
					are Jamrock Taxi Ltd, a company registered in England & Wales under company number 11888093 our
					email address is as follows: <a href="mailto:Info@amrocktaxi.com">Info@amrocktaxi.com.</a>. Please
					see our contact us page for more ways to contact us.
					<br />
					<br />
					<strong>Customer Responsibilities</strong>
					<br />
					You must co-operate with us in all matters relating to the Services, provide us and our authorised
					employees and representatives with access to any private pick-up or drop-off premises or location
					you have supplied us.
					<br />
					<br />
					Failure to comply with the above is a Customer default which prevents us from delivering the
					contracted services which entitle us to suspend delivery of the Services until you remedy it or if
					you fail to remedy it following our request, we can terminate the Contract with immediate effect.
					<br />
					<br />A Customer is not entitled to a refund if they fail to provide access to private properties
					which prevents us from delivering the contracted Services.
					<br />
					<br />
					It is the customers responsibility to make sure that the pickup times are suitable to get to their
					final destinations in a timely manner. Jamrock Taxi will not be responsible for transfer delays and
					any associated cost.
					<br />
					<br />
					<strong>Service Delivery</strong>
					<br />
					We will deliver the services, including any goods to the client in the booking details (Lead
					Passenger). We will deliver our service per the details of the booking agreement. The customer can
					refuse to accept the alternative service and a full refund of the amount paid and no more will be
					offered to the customer.
					<br />
					<br />
					<strong>Refunds and Right To Cancel</strong>
					<br />
					Subject as stated in these Terms and Conditions; you can cancel the booking (Contract) 24 hours
					before your service is due to be delayed for a full refund. Refunds may not be given if you cancel
					with less than 24hrs before you service.
					<br />
					<br />
					Cancellation request and evident thereof can be made via phone call or email
				</p>
				<br />
				<h1>PRIVACY POLICY</h1>
				<p>
					Any information we collect will be used to in the strictest of manner to manage your booking and
					communicate with you regarding your booking. We will collect the least amount of personal
					information required to manage your booking and communicate with you.
					<br />
					<br />
					Your personal information will be used to business preposes only or for complying with the
					authorities.
				</p>
			</div>
		</Fragment>
	);
};

export default Privacy;
