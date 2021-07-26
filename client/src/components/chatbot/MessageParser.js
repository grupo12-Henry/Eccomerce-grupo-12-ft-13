
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

//Logica cuando ingresa en un mensaje del cliente. Interpreta para dar una respuesta. 

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if ( lowercase.includes("hola") || lowercase.includes("dia") || lowercase.includes("buenas")) {
      this.actionProvider.greet();
    }

    if ( lowercase.includes("producto") || lowercase.includes("pagina") || lowercase.includes("info") || lowercase.includes("informacion")) {
      this.actionProvider.navegacion();
    }

    if ( lowercase.includes("maridaje") || lowercase.includes("cepas") || lowercase.includes("comida") || lowercase.includes("combinar") || lowercase.includes("acompañar")|| lowercase.includes("vino")|| lowercase.includes("recomendar")|| lowercase.includes("recomendas")|| lowercase.includes("acompaño")) {
    this.actionProvider.maridajes();
    }
  }
}

export default MessageParser;
