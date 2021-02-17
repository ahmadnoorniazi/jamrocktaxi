// assets
import React from 'react';
import message from "../../assets/sms.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import wa from "../../assets/wa.webp";
import withPage from '../../utils/withPage';

const ContactUs = ({ children, page }) => {
  console.log('pageeeeeeeeeeeeeeeee', page)
  return (
    <div className='home-contact-section px-1'>
      <h4>Contact Us</h4>
      {children}
      <div className='row justify-content-around m-0'>
        <div className='home-contact-item'>
          <img src={message} alt='message' />
          {/* <p>Phone</p> */}
        </div>
        <div className='home-contact-item'>
          <img src={phone} alt='phone' />
          {/* <p>Skype</p> */}
        </div>
        <div className='home-contact-item'>
          <img src={mail} alt='mail' />
        </div>
        <div className='home-contact-item'>
          <img src={wa} alt='wa' />
        </div>
      </div>
    </div>
  );
};

const pageSlug = "contactUs"
export default  withPage(ContactUs, pageSlug);
