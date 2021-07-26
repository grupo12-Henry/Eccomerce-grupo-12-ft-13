import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import "./index.css";

function Roboto() {
  return (
    <div style={{ display: 'flex', justifyContent: 'end', position: 'fixed', zIndex: '1', marginLeft: '78%'}} >
      <div style={{ maxWidth: "330px" }}>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default Roboto;
