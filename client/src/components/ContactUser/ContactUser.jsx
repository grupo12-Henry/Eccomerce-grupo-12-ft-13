import React from 'react';
import emailjs from 'emailjs-com';

export const ContactUser = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_gigwg4k', e.target, 'user_3B9lVeoslCeF482TDaNKh')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <form className="contact-form mt-5" onSubmit={sendEmail}>
      <div className=" col-4 border border-1">
      <div className=" form-row ">
        <div className="col-md-6 form-group">
          <input type="hidden" name="contact_number" />
          <label>Nombre: </label>
          <input type="text" name="user_name" />
        </div>
        <div className=" col-md-6 form-group">
          <label>Correo electronico: </label>
          <input type="email" name="user_email" />
        </div>
      </div>
      <div className="form-group">
        <label>Mensaje</label>
        <textarea className="form-group" rows="3" name="message" />
      </div>
      <div className="text-center">
        <input className="btn btn-dark mb-2" type="submit" value="Enviar" />
      </div>
      </div>
    </form>
  );
}
