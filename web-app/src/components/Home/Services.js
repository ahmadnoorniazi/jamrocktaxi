// libs
import React from 'react';
import { FiCheck } from "react-icons/fi";
const Services = ({sellingPoints, servicesWrapper}) => {
  return (
    <div className='home-service'>
      <div className='row m-0 p-1'>
        { 
        Array.isArray(sellingPoints) && sellingPoints.map(point => (
           <div className='col-6 col-md-3 justify-content-md-center'>
          <FiCheck />
           <p>{point}</p>
        </div>
        ))
        }
      </div>
      <p>{servicesWrapper}</p>
    </div>
  );
};

export default Services;
