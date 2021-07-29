import React from 'react';
import emailjs from 'emailjs-com';
import Maps from '../../../Maps/maps';
import Sidebar from '../../sidebar/Sidebar';
import './contacto.css'

export const ContactUser = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_gigwg4k', e.target, 'user_3B9lVeoslCeF482TDaNKh')//Esto va en variables de entornno
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <>
    <Sidebar />
    <Maps />
    <div>
    <div className="form">
      <section>
        <h3 class="h1-responsive text-left my-4 ml-5 mb-3">Contáctenos</h3>
        <div>
          <div>
            <form onSubmit={sendEmail}>
              <div class="row">
                <div class="col-md-6">
                  <div class=" md-form mb-0 ">
                    <label class="ml-5 mb-3 form-label">Nombre: </label>
                    <input class="ml-5 mb-3 form-control" type="text" name="name" />
                  </div>
                  <div>
                    <div class="ml-5 mb-3 col-md-14">
                      <div class="mmd-form mb-0">
                        <label for="email" class="form-label" >Correo electronico: </label>
                        <input class="form-control" type="email" name="user_email" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="ml-5 mb-3 md-form">
                      <label class="form-label">Mensaje</label>
                      <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" />
                    </div>
                  </div>
                </div>
                <div className="ml-5 mb-3 text-center">
                  <input className="btn btn-dark mb-2" type="submit" value="Enviar" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    </div>
    </>
  );
}

export default ContactUser