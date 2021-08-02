import React, {useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import Maps from '../../../Maps/maps';
import Loading from '../../../dashboard-user/loading/LoadingAdmin';
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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 600);
  }, []);
if (!loading) {
    return <Loading />;
  } else {
  return (
    <>
    <div class='container-fluid Responsive' >
    <div class='pepe'>
      <Maps />
    </div>
    <div class='ml-5 mt-4 mr-5'>
      <div className="formularioDeContacto">
        <section>
          <h3 class="h1-responsive text-left my-4 mb-3">Contáctenos</h3>
            <div>
              <form onSubmit={sendEmail}>
                <div class="row">
                  <div class="col-lg-12">
                    <div class=" md-form mb-0">
                      <label class=" mb-3 form-label">Nombre: </label>
                      <input class=" mb-3 form-control" type="text" name="name" />
                          <label for="email" class="form-label mb-3" >Correo electronico: </label>
                          <input class="form-control mb-3" type="email" name="user_email" />
                    </div>
                  </div>
                </div>
                  <div class="row">
                    <div class="col-lg-12 mb-3">
                      {/* <div class="ml-5 mb-3 md-form"> */}
                        <label class="form-label">Mensaje</label>
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" />
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="mb-3 text-center">
                    <input className="btn btn-dark mb-2" type="submit" value="Enviar" />
                </div>
              </form>
            </div>
        </section>
      </div>
    </div>
    <div className="fotter">
    </div>
    </div>
    </>
  );
  }
}

export default ContactUser