// import React, { Component } from 'react';

// class Sending extends Component {

//   state = {
//     text: {
//       recipient: '',
//       textmessage: ''
//     }
//   }

//   sendText = () => {
//     const { text } = this.state;
//     //pass text message GET variables via query string
//     fetch(`http://localhost:3001/send-sms?recipient=${text.recipient}&textmessage=${text.textmessage}`)
//     .catch(err => console.error(err))
//   }

//   render() {
//     const { text } = this.state;
//     const spacer = {
//       margin: 8
//     }
//     const textArea = {
//       borderRadius: 4
//     }
//     return (
//       <div >
//         <div style={{ marginTop: 10 }} >
//           <h2> Send Text Message </h2>
//           <label> Your Phone Number </label>
//           <br />
//           <input value={text.recipient}
//             onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />
//           <div style={spacer} />
//           <label> Message </label>
//           <br />
//           <textarea rows={3} value={text.textmessage} style={textArea}
//             onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />
//           <div style={spacer} />
//           <button onClick={this.sendText}> Send Text </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Sending;


import React, { useState } from 'react';
import axios from 'axios'

export default  function Sending() {
    const [sent, setSent] = useState(false)
    const [ sms, setSms] = useState({
      phone: '',
      testMessage: ''
    })
    
    
    const handleInputChange = (e) => {
      setSms({
        ...sms,
        [e.target.name]:e.target.value
      });
  }

    const handleSent = async () => {
        setSent(true)
        try {
            await axios.post("http://localhost:3001/send-sms", sms)
        } catch (error) {
            console.log(error)
        }
    }

    return( 
        <div>
            {!sent? (
            <form onSubmit={handleSent}>
                <input type="tel" name="phone" onChange={handleInputChange} />
                <textarea type="text" name="testMessage" onChange={handleInputChange} />
                <button type="submit" >Enviar sms</button>
            </form>
        ):( <h1>Sms Enviado</h1>)}
        </div>
    )
}

// import React, { useState } from "react";

// function ContactForm() {
//   const [name, setName] = useState('');
//   const [contactWay, setContactWay] = useState('');
//   const [user, setUser] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const submitRequest = async (e) => {
//     e.preventDefault();
//     let data = { name, contactWay, user, subject, message };
//      console.log(data);
//     const url = '/sendMail';
//     const options = {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     };

//     const response = await fetch(url, options);
//     const report = await response.json();
//     console.log(report.status);
    
//     if (await report.status === 'SENT') {
//       setName('');
//       setContactWay('');
//       setUser('')
//       setSubject('');
//       setMessage('');


//     } else {
//       setName('');
//       setContactWay('');
//       setSubject('');
//       setMessage('');
//     };
//   };

//   return (
//     <>
//       <form id="contactForm" onSubmit={submitRequest}>
//         <label htmlFor="name">Nombre:</label>
//         <br />
//         <input type="text" id="name" name="name" placeholder="VinotecApp" onChange={e => setName(e.target.value)}
//           value={name} />
//         <br />
//         <label htmlFor="contactWay">Mas info...:</label>
//         <br />
//         <input type="text" id="contactWay" name="contactWay" placeholder="Otras redes sociales" onChange={e => setContactWay(e.target.value)}
//           value={contactWay}
//           required />
//         <br />
//         <label htmlFor="contactWay">Correo electronico ...:</label>
//         <br />
//         <input type="email" id="user" name="user" placeholder="Email del cliente" onChange={e => setUser(e.target.value)}
//           value={user}
//           required />
//         <br />
//         <label htmlFor="subject" >Asunto:</label>
//         <br />
//         <input type="text" id="subject" name="subject" placeholder="Asunto" onChange={e => setSubject(e.target.value)}
//           value={subject} />
//         <br />
//         <label htmlFor="message">Mensaje:</label>
//         <br />
//         <textarea id="message" type="text" name="message" placeholder="Mensaje a enviar" cols="40"
//           onChange={e => setMessage(e.target.value)}
//           value={message}
//           required />
//         <br />
//         <input id="submitBtn" type="submit" value="Submit" />
//         <br />
//       </form>
//     </>
//   );
// }

// export default ContactForm;

