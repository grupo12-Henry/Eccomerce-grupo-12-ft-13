class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  //Respuestas que otorga el BOT

  //Saludo
  greet = () => {
    const message = this.createChatBotMessage("Hola!");
    this.addMessageToState(message);
  };

  navegacion = () => {
    const message = this.createChatBotMessage(
      "Empecemos por ayudarte en el tema que elijas:",
      {
        widget: "navegacion",
      }
    );   
    this.addMessageToState(message);
  };

  pedidos = () => {
    const message = this.createChatBotMessage(
      "Necesitas ayuda para hacer un pedido?",
      {
        widget: "pedidos",
      }
    );   
    this.addMessageToState(message);
  };

  pedido = () => {
    const message = this.createChatBotMessage(
      "Necesitas ayuda para hacer un pedido?",
      {
        widget: "hacerPedidos",
      }
    );   
    this.addMessageToState(message);
  };

  carrito = () => {
    const message = this.createChatBotMessage(
      "Cómo funciona el carrito",
      {
        widget: "carrito",
      }
    );   
    this.addMessageToState(message);
  };

  pedidosAnteriores = () => {
    const message = this.createChatBotMessage(
      {
        widget: "pedidos Anteriores",
      }
    );   
    this.addMessageToState(message);
  };

/*   favoritos = () => {
    const message = this.createChatBotMessage(
      {
        widget: "favorites",
      }
    );   
    this.addMessageToState(message);
  }; */

  
  busqueda = () => {
    const message = this.createChatBotMessage(
      "Que estas buscando?",
      {
        widget: "busqueda",
      }
    );   
    this.addMessageToState(message);
  };

  usuario = () => {
    const message = this.createChatBotMessage(
      'Te ayudamos con tu sesion?',
      {
        widget: "usuario",
      }
    );   
    this.addMessageToState(message);
  };

  //maridajes me da 3 opciones: Carnes, pescados y otros.
  maridajes = () => {
    const message = this.createChatBotMessage(
      "¿Con qué pensas acompañar tu vino?",
      {
        widget: "maridajes",
      }
    );
    this.addMessageToState(message);
  };
  //CARNES Y SUS OPCIONES: Pollo, Cerdo, Carne al Horno y Asado
  carnes = () => {
    const message = this.createChatBotMessage(
      "¿Qué vas a preparar?",
      {
        widget: "carnes",
      }
    );
    this.addMessageToState(message);
  };
  pollo = () => {
    const message = this.createChatBotMessage(
      "Maridajes para el pollo:",
      {
        widget: "pollo",
      }
    );
    this.addMessageToState(message);
  };
  cerdo = () => {
    const message = this.createChatBotMessage(
      "Maridajes para el cerdo:",
      {
        widget: "cerdo",
      }
    );
    this.addMessageToState(message);
  };
  resHorno = () => {
    const message = this.createChatBotMessage(
      "Maridajes para carne al horno:",
      {
        widget: "resHorno",
      }
    );
    this.addMessageToState(message);
  };
  asado = () => {
    const message = this.createChatBotMessage(
      "Maridajes para el asado:",
      {
        widget: "asado",
      }
    );
    this.addMessageToState(message);
  };
  //PESCADO Y SUS OPCIONES: Ceviche, Sushi, Al Horno y Mariscos
  pescados = () => {
    const message = this.createChatBotMessage(
      "¿Qué vas a preparar?",
      {
        widget: "pescados",
      }
    );
    this.addMessageToState(message);
  };
  ceviche = () => {
    const message = this.createChatBotMessage(
      "Maridajes para ceviche:",
      {
        widget: "ceviche",
      }
    );
    this.addMessageToState(message);
  };
  sushi = () => {
    const message = this.createChatBotMessage(
      "Maridajes para sushi:",
      {
        widget: "sushi",
      }
    );
    this.addMessageToState(message);
  };
  pezHorno = () => {
    const message = this.createChatBotMessage(
      "Maridajes para pescado al horno:",
      {
        widget: "pezHorno",
      }
    );
    this.addMessageToState(message);
  };
  mariscos = () => {
    const message = this.createChatBotMessage(
      "Maridajes para paella y mariscos:",
      {
        widget: "mariscos",
      }
    );
    this.addMessageToState(message);
  };
  //OTROS PLATOS Y SUS OPCIONES: Risottos, Vegetales, Pastas y Picada.
  otrosPlatos = () => {
    const message = this.createChatBotMessage(
      "¿Qué vas a preparar?",
      {
        widget: "otrosPlatos",
      }
    );
    this.addMessageToState(message);
  };
  risotto = () => {
    const message = this.createChatBotMessage(
      "Maridajes para risotto:",
      {
        widget: "risotto",
      }
    );
    this.addMessageToState(message);
  };
  vegetales = () => {
    const message = this.createChatBotMessage(
      "Maridajes para vegetales:",
      {
        widget: "vegetales",
      }
    );
    this.addMessageToState(message);
  };
  pastas = () => {
    const message = this.createChatBotMessage(
      "Maridajes para pastas:",
      {
        widget: "pastas",
      }
    );
    this.addMessageToState(message);
  };
  picadas = () => {
    const message = this.createChatBotMessage(
      "Maridajes para picadas:",
      {
        widget: "picadas",
      }
    );
    this.addMessageToState(message);
  };

 

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
