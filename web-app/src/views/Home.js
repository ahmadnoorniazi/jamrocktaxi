// libs
import React, { useEffect, useState } from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BiTimeFive, BiTask } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import Slider from 'react-slick';
import { useDispatch } from 'react-redux';

// styles
import '../styles/Home.scss';

// components
import Navbar from '../components/Home/Navbar';
import Heading from '../components/Home/Heading';
import Services from '../components/Home/Services';
import Fleet from '../components/Home/Fleet';
import ContactUs from '../components/Home/ContactUs';
import withPage from '../utils/withPage';

const Home = ({ page }) => {
	// const { homepage} = page.pagesData
	// slider settings
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		swipeToSlie: true
	};
	const [ pageData, setPageData ] = useState({});
	const dispatch = useDispatch();

	useEffect(
		() => {
			let collectData = {};
			if (page.items && page.items[0].fields) {
				const fields = page.items[0].fields;
				const {
					clientApproaches,
					header,
					infoSlider,
					ourFleets,
					sellingPoints,
					subHeader,
					servicesWrapper,
					whoAreWeLabel,
					whoAreWeDetail,
					whatWeDoLabel,
					whatWeDoDetail,
					whyChooseUsLabel,
					whyChooseUsDetail
				} = fields;
				collectData = {
					clientApproaches: clientApproaches.map((item) => item.fields),
					infoSlider: infoSlider.map((item) => item.fields),
					fleets: ourFleets.map((item) => ({
						detail: item.fields.detail,
						name: item.fields.name,
						image: 'https:' + item.fields.image.fields.file.url
					})),
					sellingPoints,
					header,
					subHeader,
					servicesWrapper,
					whoAreWeLabel,
					whoAreWeDetail,
					whatWeDoLabel,
					whatWeDoDetail,
					whyChooseUsLabel,
					whyChooseUsDetail
				};
			}
			setPageData({ ...collectData });
			// dispatch({ type: 'SET_FLEETS_DATA', payload: collectData.fleets });
		},
		[ page ]
	);
	const {
		clientApproaches,
		infoSlider,
		fleets,
		sellingPoints,
		header,
		subHeader,
		servicesWrapper,
		whoAreWeLabel,
		whoAreWeDetail,
		whatWeDoLabel,
		whatWeDoDetail,
		whyChooseUsLabel,
		whyChooseUsDetail
	} = pageData;

	return (
		<div>
			<Navbar />
			<Heading heading={header} subHeading={subHeader} />
			<Services sellingPoints={sellingPoints} servicesWrapper={servicesWrapper} />
			<Fleet fleets={fleets} />
			<div className="d-flex flex-column">
				<div className="home-text-section">
					<h6>{whoAreWeLabel}</h6>
					<p>{whoAreWeDetail}</p>
				</div>
				<div className="home-text-section-special">
					<h6>{whatWeDoLabel}</h6>
					<p>{whatWeDoDetail}</p>
				</div>
				<div className="home-text-section">
					<h6>{whyChooseUsLabel}</h6>
					<p>{whyChooseUsDetail}</p>
				</div>
			</div>

			<div className="home-client">
				<h6 className="home-client-heading">Our Client First Approach</h6>
				<div className="m-0 row">
					{Array.isArray(clientApproaches) && clientApproaches.length > 0 ? (
						clientApproaches.map((clientItem) => (
							<div className="col-12 col-md-6 d-flex home-client-item">
								{clientItem.iconName === 'priceIcon' && <FaRegMoneyBillAlt />}
								{clientItem.iconName === 'watchIcon' && <BiTimeFive />}
								{clientItem.iconName === 'starIcon' && <AiOutlineStar />}
								{clientItem.iconName === 'noticeIcon' && <BiTask />}

								<div>
									<h6>{clientItem.name}</h6>
									<p>{clientItem.details}</p>
								</div>
							</div>
						))
					) : null}
				</div>
			</div>

			<div className="home-know">
				<Slider {...settings} className="m-0 p-0">
					{Array.isArray(infoSlider) &&
						infoSlider.map((slide) => (
							<div className="home-know-item">
								<h6>{slide.label} </h6>
								<p>{slide.detail}</p>
							</div>
						))}
				</Slider>
			</div>

			<ContactUs />
		</div>
	);
};

const pageSlug = 'homepage';
export default withPage(Home, pageSlug);
