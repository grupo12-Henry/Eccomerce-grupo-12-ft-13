import React from 'react'
import emailjs from 'emailjs-com';

export default function Mailer() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_7o6zrob',
      'template_crvkjug',
      e.target,
      'user_email',
    ).then(res=>{
      console.log(res);
    }).catch(err=>{console.log(err)});
  };
  return (
    <div className="container border">
      <h1>Contact Form</h1>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name"/>

        <label>Email</label>
        <input type="email" name="user_email"/>

        <label>Message</label>
        <textarea name="message" rows="4"/>
        <input type="submit" value="Send"/>
      </form>
    </div>
  )
}
