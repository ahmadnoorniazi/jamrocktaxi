// libs
import Slider from 'react-slick';
import React from 'react';
// data
import cars from '../../data/cars';

const Fleet = ({ fleets }) => {
	// slider settings
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		swipeToSlie: true
	};

	return (
		<div className="home-fleet-section ">
			<p>Our Fleet</p>
			<div className="mx-3 home-fleet-bg">
				<Slider {...settings} className="m-0 p-0">
					{Array.isArray(fleets) &&
						fleets.map((item, index) => (
							<div key={index} className="home-fleet-item">
								<img src={item.image} alt={item.name} />
								<h4>{item.name}</h4>
								<p>{item.detail}</p>
							</div>
						))}
				</Slider>
			</div>
		</div>
	);
};

export default Fleet;
