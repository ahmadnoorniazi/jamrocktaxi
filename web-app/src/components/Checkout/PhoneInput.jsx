import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Phone = ({phone, setPhone}) => {
    return (

<PhoneInput
  country={'us'}
  value={phone}
  onChange={setPhone}
/>
  )
}

export default Phone;