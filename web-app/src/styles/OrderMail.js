import React from "react";

const OrderMail = () => {
  return (
    <div className='py-4 px-2'>
      <p>Dear Tom Jones,</p>
      <p>
        Thanks for choosing Jam Rock Taxi <br /> Your comfort & safety is our
        top priority.
      </p>
      <p>
        We have received your booking and we are processing it. We will be in
        touch if there are any issues with your booking.
      </p>
      <p>Please review your booking details below</p>
      <p>
        Order Number: W1000 <br /> Order Date: 2021-01-12 15:34 <br />
        Order Status: Paid
      </p>
    </div>
  );
};

export default OrderMail;
