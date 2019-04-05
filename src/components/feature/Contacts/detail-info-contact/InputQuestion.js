import React from 'react';

const InputQuestion = (props) => {
  return(
    <div>
      <div>
        <h2 className = "one-half-heading"> Did not find an answer to your question? </h2>
      </div>

      <div className = "contact-form">
        <div className = "name-form">
          <label>Name</label>
          <span className ="name-box">
            <input className="contact-name"type="text" placeholder = "Your Name"/>
          </span>
        </div>

        <div className = "email-form">
          <label>Email</label>
          <span className ="name-box">
            <input className="contact-email"type="text" placeholder = "Your Email..."/>
          </span>
        </div>

        <div className = "message-form">
          <label>Message</label>
          <span className ="message-box">
            <textarea className="contact-message"type="text" placeholder = "Your Message"/>
          </span>
        </div>

        <div className = "send-message">
          <input type="submit" value="SEND MESSAGE" class="send-message-button"/>
        </div>
      </div>
    </div>
  )
};

export default InputQuestion;
