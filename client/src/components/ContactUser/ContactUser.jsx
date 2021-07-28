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
    <form style={{display:'flex', width:'40%'}} className="contact-form  d-flex align-items-center justify-content-center" onSubmit={sendEmail}>
      <div style={{ width:'100%', alignItems:'center', justifyContent:'center'}} className=" col-12 border ml-5 border-1">
      {/* <div className=" form-row "> */}
        <div style={{display:'flex', width:'200%'}} className="col-md-6 form-group">
          <input type="hidden" name="contact_number" />
          <label>Nombre: </label>
          <input type="text" name="user_name" />
        </div>
        <div className="  form-group">
          <label>Correo electronico: </label>
          <input type="email" name="user_email" />
        </div>
     
      <div class='row-3'>
        <label>Mensaje</label>
        <textarea  col="6" name="message" />
      </div>
      <div className="text-center">
        <input className="btn btn-dark mb-2" type="submit" value="Enviar" />
      </div>
      </div>
    </form>
  );
}
export default ContactUser;