import React from 'react';
// import {init} from 'emailjs-com';
// init("user_3B9lVeoslCeF482TDaNKh");
import emailjs from 'emailjs-com';

// import './ContactUs.css';

export default function MailSend() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_gigwg4k', e.target, 'user_3B9lVeoslCeF482TDaNKh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}