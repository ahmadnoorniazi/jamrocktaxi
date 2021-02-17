// libs
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import React from 'react';

const Heading = ({heading, subHeading}) => {
  return (
    <div className='heading-section'>
      <h3>{heading}</h3>
      <p>{subHeading}</p>
      <Link to='enter-location'>
        <div>
          <IoLocationOutline size={26} />
          <p>Enter Your Pickup Location</p>
        </div>
      </Link>
    </div>
  );
};

export default Heading;
