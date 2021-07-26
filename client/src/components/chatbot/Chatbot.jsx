import React, { useState } from 'react'
import Chatbot from "react-chatbot-kit";
import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Roboto() {
  
  const [robot, setRobot] = useState(true)
  const [cerrar, setCerrar] = useState(true)

  const chatbotHandler = () => {
    setRobot(current => !current)
  }
  const chatbotClose = () => {
    setRobot(current => !current)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'end', position: 'fixed', zIndex: '1', marginLeft: '81%'}} >
      <div style={{ maxWidth: "330px"}}>

        <button class='btn btn-primary' onClick={chatbotHandler} style={{ display: 'flex', justifyContent: 'center', alignItems:'center', position: 'static', zIndex: '2', color:"white", borderRadius:'10px', marginLeft: '0%'}}>
          <FontAwesomeIcon  icon={faRobot}/>
        </button>

        { robot === true ?
            <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
              /> : null }
        
      </div>
    </div>
  );
}

export default Roboto;
