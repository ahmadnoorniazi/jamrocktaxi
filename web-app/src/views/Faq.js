import React, { useState } from 'react';

// components
import Navbar from '../components/Home/Navbar';
import AccordianItem from '../components/Faq/AccordianItem';

// style
import '../styles/Faq.scss';

// assets
import CarImage from '../assets/faq-car.jpeg';

const Faq = () => {
	const [ closeOther, setCloseOther ] = useState(0);

	const closeAll = (id) => {
		if (id === closeOther) setCloseOther(0);
		else setCloseOther(id);
	};
	// const [closeOther, setCloseOther] = useState([
	//   { id: "1", isOpen: false },
	//   { id: "2", isOpen: false },
	// ]);

	// const toggle = (id) => {
	//   let closeAll = [];

	//   closeOther.forEach(item => {

	//   })
	// };

	console.log(closeOther);
	return (
		<div>
			<Navbar />
			<h1 className="faq-title">FAQs</h1>
			<h3 className="faq-subtitle">See Our FAQs or Contact Us</h3>
			<div className="faq-accordian">
				<div>
					<AccordianItem
						id={1}
						flag={closeOther === '1' ? true : false}
						closeAll={closeAll}
						title={'Understanding the price quote'}
					>
						<p>
							The price quoted is always per car based on the car’s capacity. The price does not depend on
							the number of travel companions but you must choose a vehicle with the appropriate capacity
							to suit your needs (passengers & suitcases). Please note that the maximum capacity of a car
							is specified for each vehicle/class.
						</p>
					</AccordianItem>
				</div>
				<div>
					<AccordianItem
						id={2}
						flag={closeOther === '2' ? true : false}
						closeAll={closeAll}
						title={'Understanding the price quote'}
					>
						<p>
							You can prebook your transfer up to a year in advance. Our advance Automated calendar system
							will tell us when your pick up is due for scheduling
							<br />
							<br />
							If you want to book vehicles of Premium Class or Minibus 10, 13, 16, 19, 30 pax, you can
							make a booking not less than 48 hours before the trip.
							<br />
							<br />
							If you choose standard types of vehicles (Comfort, Exec, Minivan) suitable for 4 to 9
							passengers, then please book your transfer no less than 4 hours before its beginning.
							<br />
							<br />
							If your trip starts before the 4 hours lead time, you can make an urgent booking and we will
							endeavour to allocate you a car for your desired pickup time and inform you as soon as
							possible if we can provide the service.
						</p>
					</AccordianItem>
				</div>
				<div>
					<AccordianItem
						id={3}
						flag={closeOther === '3' ? true : false}
						closeAll={closeAll}
						title={'How To Book A Transfer'}
					>
						<p>
							Specify the place of departure in the “Pick-up Location” field, and your destination – in
							the “Drop-off Location” field.
							<br />
							<br />
							Enter your pick-up date and time.
							<br />
							<br />
							Click the button “Search”. Choose the suitable transfer class and click “Book” to proceed to
							the booking.
							<br />
							<br />
							Select a car preference (see image below) based on the number of passengers.
							<br />
							<br />
							<strong>
								Fill in all the required passenger info in the booking form, make payment and you’re
								done.
							</strong>
							<br />
							<img src={CarImage} alt="faq car" />
							<br />
							<br />
							<strong>
								If you have any questions, email us at{' '}
								<a href="mailto:hello@jamrocktaxi.com"> hello@jamrocktaxi.com</a> call the support
								service at <a href="tel:+1217 6363 4160.">+1217 6363 4160.</a>
							</strong>
						</p>
					</AccordianItem>
				</div>
				<div>
					<AccordianItem
						id={4}
						flag={closeOther === '4' ? true : false}
						closeAll={closeAll}
						title={'Was My Booking Successful?'}
					>
						<p>
							After you make your booking, you will receive a confirmation email with a voucher containing
							your booking number and all the details of your journey.
							<br />
							<br />
							If you have not received the email with the confirmation, please contact our bookings
							department by emailing us at{' '}
							<a href="mailto:bookings@jamrocktaxi.com">bookings@jamrocktaxi.com</a> or call us (see
							contact us page)
						</p>
					</AccordianItem>
				</div>
				<div>
					<AccordianItem
						id={5}
						flag={closeOther === '5' ? true : false}
						closeAll={closeAll}
						title={'How Can I Pay For My Transfer'}
					>
						<p>
							We accept VISA, MasterCard, Apple Pay and GooglePay. This payment systems provide the safety
							of money transfers according to international standards. Data is entered on a secure page,
							which is a payment gateway. This guarantees the safety of your data and money transfer.
							<br />
							<br />
							Please Note: We do not accept payment by cash
						</p>
					</AccordianItem>
				</div>
				<div>
					<AccordianItem
						id={6}
						flag={closeOther === '6' ? true : false}
						closeAll={closeAll}
						title={'Payment Currency'}
					>
						<p>
							All payments will be processed in USD. If your card account is in a different currency, your
							bank will process the currency conversion.
						</p>
					</AccordianItem>
				</div>
				<div>
					<AccordianItem
						id={7}
						flag={closeOther === '7' ? true : false}
						closeAll={closeAll}
						title={'What Is The car Capacity'}
					>
						<p>
							Each car has its own capacity which is displayed on the website and on the booking process
							<br />
							<br />A standard piece of baggage is considered a bag or a suitcase whose length, width, and
							height do not exceed 158 cm.
							<br />
							<br />
							Hand luggage can be placed in the car.
							<br />
							<br />
							<strong>Important note:</strong> if you are travelling with bulky baggages (for example,
							prams, wheelchairs, big suitcases, golf clubs etc.), contact us via email at{' '}
							<a href="mailto: info@jamrocktaxi.com"> info@jamrocktaxi.com</a> or call us, see our contact
							us page for more information
						</p>
					</AccordianItem>
				</div>
				<div>
					<AccordianItem
						id={8}
						flag={closeOther === '8' ? true : false}
						closeAll={closeAll}
						title={'How Do I find My Driver'}
					>
						<p>
							<strong>Important note:</strong>the driver will meet you with nameplate sign showing your
							first and last names, which you specified during the booking.
							<br />
							<br />
							If a pick-up place is an airport, our driver and airport representatives will be at the exit
							of arrivals area of the airport after you passed passport control and claimed baggage.
							<br />
							<br />
							If a pick-up place is a hotel, the driver will wait for you in the hotel lobby.
						</p>
					</AccordianItem>
				</div>
				<div>
					<AccordianItem
						id={9}
						flag={closeOther === '9' ? true : false}
						closeAll={closeAll}
						title={'Can I make Changes To My Booking'}
					>
						<p>
							Yes you can! You can make changes to your booking up to 4 hours before your scheduled pickup
							time
						</p>
					</AccordianItem>
				</div>
				<div>
					<AccordianItem
						id={10}
						flag={closeOther === '10' ? true : false}
						closeAll={closeAll}
						title={'Can I Cancel My Order'}
					>
						<p>
							Yes you can! You can cancel your order up to 24hrs before your scheduled pickup time for a
							full refund
						</p>
					</AccordianItem>
				</div>
				<div>
					<AccordianItem
						id={11}
						flag={closeOther === '11' ? true : false}
						closeAll={closeAll}
						title={'Can I Get A Refunds'}
					>
						<p>
							Yes you can! You can cancel your order up to 24hrs before your scheduled pickup time for a
							full refund.
						</p>
					</AccordianItem>
				</div>
			</div>
		</div>
	);
};

export default Faq;
