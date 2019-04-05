import React from 'react';

const ContactsInfo = (props) => {
  var info = props.info;
  return(
    <div>
      <span className="address">
        <span className = "address-left">Address: </span>
        <span className = "address-right">{info.address}</span>
      </span>

      <span className="phone">
        <span className = "phone-left">Phone: </span>
        <span className = "phone-right">{info.phone}</span>
      </span>

      <span className="city">
        <span className = "city-left">City: </span>
        <span className = "city-right">{info.city}</span>
      </span>
    </div>
  )
}

export default ContactsInfo;
