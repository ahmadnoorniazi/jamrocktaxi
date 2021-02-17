// libs
import React from 'react';
import { IoLocationOutline, IoLocationSharp } from "react-icons/io5";
import { IoIosCalendar, IoIosAirplane } from "react-icons/io";
import { FaGlassMartini } from "react-icons/fa";
import { GiFireFlower } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";

const CheckoutInfo = ({ checkedReturn }) => {
  return (
    <div className='checkout-summary'>
      <div className='checkout-summary-info'>
        <div className='checkout-summary-info-date'>
          <IoIosCalendar /> <p>2021-01-14</p>
        </div>
        <div className='checkout-summary-time-container'>
          <p>15:30</p>
        </div>
        <div className='checkout-summary-info-flight'>
          <IoIosAirplane /> <p>AA54321</p>
        </div>
        <div className='checkout-summary-info-pax'>
          <BsFillPersonFill /> <p>02</p>
        </div>
        <p className='checkout-summary-info-price'>$40</p>
      </div>
      <div className='checkout-summary-location'>
        <div>
          <IoLocationOutline size={24} />
          <p>Sangster International Airport, Montego Bay</p>
        </div>
        <div>
          <IoLocationSharp size={20} /> <p>Sandals Hotel, Montego Bay</p>
        </div>
      </div>
      {checkedReturn && (
        <>
          <div className='checkout-summary-info'>
            <div className='checkout-summary-info-date'>
              <IoIosCalendar /> <p>2021-01-25</p>
            </div>
            <div className='checkout-summary-time-container'>
              <p>17:00</p>
            </div>
            <div className='checkout-summary-info-return-flight'>
              <IoIosAirplane /> <p>AA54321</p>
            </div>
            <div className='checkout-summary-info-pax'>
              <BsFillPersonFill /> <p>02</p>
            </div>
            <p className='checkout-summary-info-price'>$40</p>
          </div>
          <div className='checkout-summary-location'>
            <div>
              <IoLocationOutline size={20} /> <p>Sandals Hotel, Montego Bay</p>
            </div>
            <div>
              <IoLocationSharp size={24} />
              <p>Sangster International Airport, Montego Bay</p>
            </div>
          </div>
        </>
      )}

      <p className='checkout-summary-extras-text'>Trip Extras</p>
      <div className='checkout-summary-extras'>
        <div className='checkout-summary-extras-item'>
          <div>
            <FaGlassMartini />
            <div>
              <p>Champagne</p>
              <span>Return Lrg</span>
            </div>
          </div>
          <p className='checkout-summary-extras-item-quantity'>x1</p>
          <p>$20</p>
        </div>
        <div className='checkout-summary-extras-item'>
          <div>
            <GiFireFlower />
            <div>
              <p>Flowers</p>
              <span>Return Lrg</span>
            </div>
          </div>
          <p className='checkout-summary-extras-item-quantity'>x2</p>
          <p>$10</p>
        </div>
      </div>
      <div className='checkout-summary-price'>
        <h6>Total</h6>
        <p>$110</p>
      </div>
    </div>
  );
};

export default CheckoutInfo;
