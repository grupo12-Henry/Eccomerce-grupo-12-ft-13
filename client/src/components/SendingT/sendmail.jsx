import React, { useState } from 'react';
import axios from 'axios'

export default  function SendingEmail() {
    const [sent, setSent] = useState(false)
    const [ email, setEmail] = useState({
      mail: '',
      subject: '',
      text: ''
    })
    
    
    const handleInputChange = (e) => {
      setEmail({
        ...email,
        [e.target.name]:e.target.value
      });
  }

    const handleSent = async () => {
        setSent(true)
        try {
            await axios.post("http://localhost:3001/send-mail", email)
        } catch (error) {
            console.log(error)
        }
    }

    return( 
        <div>
            {!sent? (
            <form clas='form-control' onSubmit={handleSent}>
                <label> Email: </label>
                <input type="tel" name="mail" onChange={handleInputChange} />
                <label> Asunto: </label>
                <input type="text" name="subject" onChange={handleInputChange} />
                <label> Mensaje: </label>
                <textarea type="text" name="text" onChange={handleInputChange} />
                <button type="submit">Enviar email</button>
            </form>
        ):( <h1>Email Enviado</h1>)}
        </div>
    )
}
