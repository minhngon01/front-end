import React from 'react';
import InputQuestion from './InputQuestion';
import ContactsInfo from './ContactsInfo';
const DetailInfoContact = (props) => {
  var infoContact = [
    {
      'address':'Brooklyn, NY 10036',
      'phone':'+1003612312',
      'city': 'New York'
    },
    {
      'address':'Manhattan,NY 50238',
      'phone':'+1 000 534 1567',
      'city': 'New York'
    }
  ]
  return(
    <div className = "row mt-5">
        <div className = "col-sm-6">
          <InputQuestion/>
        </div>

        <div className = "col-sm-3">
          <div className="phone-number-contact-heading">
            <h2 className = "one-half-2-heading">Consultations and order by phone</h2>
          </div>
          <div className="d-flex flex-column mb-5">
            <a> 093-153-6430 </a>
            <a> 1900-569-428 </a>
            <a> 1900-123-151 </a>
          </div>

          <div>
            <h2 className = "one-half-2-heading">Contacts</h2>
            <ContactsInfo info={infoContact[0]}/>
          </div>
        </div>

        <div className = "col-sm-3">
          <h2 className = "one-half-2-heading">Service department</h2>
          <ContactsInfo info={infoContact[1]}/>
        </div>
    </div>
  )
}

export default DetailInfoContact;
