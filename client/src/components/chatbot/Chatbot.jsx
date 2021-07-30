import React, { useState } from 'react'
import Chatbot from "react-chatbot-kit";
import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Roboto() {
  
  const [robot, setRobot] = useState(false)

  const chatbotHandler = () => {
    setRobot(current => !current)
  }

  

  return (
    <div> 
      {robot === true? 
       <div style={{ display: 'flex', justifyContent: 'end', position: 'fixed', zIndex: '1', marginLeft: '81%'}} >
          <div style={{ maxWidth: "330px"}}>
              <button class='btn btn-primary' onClick={chatbotHandler} style={{ display: 'flex', justifyContent: 'center', alignItems:'center', position: 'static', zIndex: '2', color:"white", borderRadius:'10px', marginLeft: '0%'}}>
                <FontAwesomeIcon  icon={faRobot}/>
              </button>
                <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />     
          </div>
        </div>
        :

        <div className='boton' style={{ display: 'flex', justifyContent: 'end', position: 'fixed', zIndex: '1', right:'2%', bottom:'2%'}} >

          <div className='mensaje'> Hola, soy Nito! Si necesitas ayuda, hace click sobre mi.</div>

          <div style={{ maxWidth: "330px"}}>
            <button class='btn btn-primary' onClick={chatbotHandler} style={{ display: 'flex', justifyContent: 'center', alignItems:'center', position: 'static', zIndex: '2', color:"white", borderRadius:'10px', marginLeft: '0%', width:'5rem', height:'3rem'}}>
              <FontAwesomeIcon  icon={faRobot} style={{width:'3rem', height:'2rem'}}/>
            </button>       
          </div>  
        </div>}
  </div>  
  )
}

export default Roboto;
