import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../chatbot/components/Options/Options";
import Navegacion from "../chatbot/components/Options/Navegacion";
import Pedidos from "../chatbot/components/Options/Pedidos";
import Maridajes from "../chatbot/components/Options/Maridajes.jsx";
import Carnes from "../chatbot/components/Options/Carnes";
import Pescados from "../chatbot/components/Options/Pescados";
import OtrosPlatos from "../chatbot/components/Options/OtrosPlatos";
import Quiz from "../chatbot/components/Quiz/Quiz";

const config = {
  botName: "VinotecApp",
  initialMessages: [
    createChatBotMessage(`Bienvenido a VinotecApp ¿En que puedo ayudarte?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "navegacion",
      widgetFunc: (props) => <Navegacion {...props} />,
     },
    {
      widgetName: "busqueda",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Cómo buscar un producto?",
            answer:
              "Podes empezar con una busqueda rapida en 'Busca un producto' en la parte superior derecha.",
            id: 1,
          },
          {
            question: "Quiero ver opciones de bebidas dentro de una misma categoría",
            answer:
              "Podes buscar por categoría en la barra de navegación, arriba del catálogo de productos.",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "carrito",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Cómo accedo a mi carrito?",
            answer:
              "En la parte superior derecha de la barra de navegacion",
            id: 1,
          },
          {
            question: "Olvidé agregar algunos productos, cómo los agrego sin realizar una nueva compra?",
            answer:
              "Podes volver a agregarlos desde el boton Agregar Productos del carrito, o simplemente volviendo a la pagina principal.",
            id: 2,
          },
          {
            question: "Cómo finalizo mi compra?",
            answer:
              "Presionando confirmar compra accederas a la pasarela de pagos.",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "pedidos",
      widgetFunc: (props) => <Pedidos {...props} />,
     },
    {
      widgetName: "hacerPedidos",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Cómo agregar productos a mi carrito?",
            answer:
              "Desde cualquier boton Agregar que veas podes enviar el producto a tu carrito",
            id: 1,
          },
          
        ],
      },
    },
    {
      widgetName: "pedidosAnteriores",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Cómo accedo a mis pedidos anteriores?",
            answer:
              "Desde el icono de usuarios en la parte superior derecha: Mi cuenta > Mis pedidos anteriores",
            id: 1,
          },
          
        ],
      },
    },
    // {
    //   widgetName: "favoritos",
    //   widgetFunc: (props) => <Quiz {...props} />,
    //   props: {
    //     questions: [
    //       {
    //         question: "Cómo agregar productos a mis favoritos?",
    //         answer:
    //           "Desde cualquier corazón que veas en productos o en su detalle",
    //         id: 1,
    //       },
          
    //     ],
    //   },
    // },
    {
      widgetName: "usuario",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Cómo registrarse para comprar?",
            answer:
              "Desde el icono usuarios en la barra superior derecha. Opcion: Registrate",
            id: 1,
          },
          {
            question: "Cómo inicio sesion?",
            answer:
              "Desde el icono usuarios en la barra superior derecha. Opciones: Logueate o logueate con Gmail",
            id: 2,
          },
        ],
      },
    },

    //Opciones: Carnes, Pescados, Otros Platos
    {
      widgetName: "maridajes",
      widgetFunc: (props) => <Maridajes {...props} />,
    },
    //CARNES Y SUS OPCIONES: Pollo, Cerdo, Carne al Horno y Asado
    {
      widgetName: "carnes",
      widgetFunc: (props) => <Carnes {...props} />,
    },
    {
      widgetName: "pollo",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "En líneas generales, los Chardonnay frescos y aromáticos maridan muy bien con pollo asado o al horno.",
            answer: 
              "Sin embargo, si la preparación incluye arroz se puede optar por tintos frescos, como un Chateau Vieux Chardonnay. ",
            link:"http://localhost:3000/detail/102",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "cerdo",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Por su alto contenido graso, los cortes de cerdo combinan muy bien con blends tintos estructurados como Alma Mora Reserve Malbec o con varietales de Cabernet Sauvignon.",
            answer:
              "Estos cortes con gran tenor graso deben ser acompañados por vinos que tengan mucha presencia tánica y buen cuerpo, ya que los taninos acompañan y “barren” la sensación grasa del cerdo, convirtiéndose en el complemento perfecto de estas carnes.",
            link:"http://localhost:3000/detail/119",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "resHorno",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Hay dos atributos que distinguen especialmente a la carne al horno: la “crostita” que se genera alrededor del corte por la reacción de Maillard y el adobado con distintos ingredientes y condimentos. ",
            answer:
              "Por la sensación crocante, el sabor agridulce de la crosta que la envuelve y las notas especiadas del adobo, la carne cocida al horno combina muy bien con un Malbec de alta gama como Chateau Vieux Malbec.",
            link:"http://localhost:3000/detail/101",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "asado",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Si bien prácticamente todos los tintos de distintas variedades se combinan con el asado como no lo hace ninguna otra bebida, también existe un estilo de vino adecuado para cada uno de los protagonistas del ritual emblemático de la cocina argentina.",
            answer:
              "Para las achuras y provoletas, una buena opción es un Chardonnay joven, como Benjamin Nieto Chardonnay. Lo importante es servirlo bien frío y que tenga una acidez persistente para que resalten los atributos de los alimentos ricos en grasas y equilibren la sensación que dejan estos bocados en el paladar.",
            link:"http://localhost:3000/detail/163",
            id: 1,
          },
          {
            question: "Cuando se da paso a la carne, sin dudas, es hora de descorchar los grandes tintos. Para los cortes vacunos el acompañante ideal tiene que ser maduro y estructurado; por ejemplo, un vacío combina inmejorablemente con un Alto Uxmal Malbec. ",
            answer:
              "Para el cordero, un Malbec jugoso y con buen cuerpo como Luigi Bosca Malbec es la mejor alternativa",
            link:"http://localhost:3000/detail/89",
            id: 2,
          },
        ],
      },
    },
    //PESCADOS Y SUS OPCIONES: Ceviche, Sushi, Al Horno y Mariscos
    {
      widgetName: "pescados",
      widgetFunc: (props) => <Pescados {...props} />,
    },
    {
      widgetName: "ceviche",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "En el caso del ceviche y el tiradito, por el limón predominante van muy bien con vinos secos aromáticos, con una acidez marcada y cierta mineralidad, como Benjamin Nieto Chardonnay.",
            answer:
              "Este tipo de vinos también acuerda muy bien con platos cocidos a base de vinagre, como el escabeche de pescado, y las preparaciones con salsa de tomate.",
            link:"http://localhost:3000/detail/163",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "sushi",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "El vino blanco que mejor se adapta y potencia los sabores de la combinación de arroz y pescado fresco, es un vino semidulce o afrutado, como Benjamin Nieto Chardonnay.",
            answer:
              "Si se trata de piezas al estilo californiano, a base de queso crema y salmón, es mejor optar por un Sauvignon Blanc, con paso por barrica, como Rutini Sauvignon Blanc.",
            link:"http://localhost:3000/detail/77",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "pezHorno",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Para el salmón, el atún, el bonito o el pez espada, el maridaje más adecuado es con vinos blancos melosos con mucho sabor y cuerpo, o blancos dulces y rosados muy frutales.",
            answer:
              "Los vinos que mejor acompañarán las comidas antes mencionadas son Pinot Noir y Cosecha Tardía, como este Norton Cosecha Tardia Blanco",
            link:"http://localhost:3000/detail/123",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "mariscos",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Una comida con mariscos suele ir bien con vinos blancos ligeros y con vinos espumantes, como Champagne. Si el platillo es picante, se puede llegar a maridar con un vino tinto de sabor más dulce.",
            answer:
              "Mi recomendación para acompañar una paella es un vino rosado, como este San Felipe Extra Dulce Rose de Malbec.",
            link:"http://localhost:3000/detail/129",
            id: 1,
          },
        ],
      },
    },
    //OTROS PLATOS Y SUS OPCIONES: Risottos, Vegetales, Pastas y Picada.
    {
      widgetName: "otrosPlatos",
      widgetFunc: (props) => <OtrosPlatos {...props} />,
    },
    {
      widgetName: "risotto",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Para risottos no hay nada mejor que un Pinot Noir terroso y con reserva en barricas de roble.",
            answer:
              "También un Chardonnay con madera puede acompañar muy bien la cremosidad del arroz, como este Benjami Nieto",
            link:"http://localhost:3000/detail/163",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "vegetales",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Las combinaciones de vegetales de sabor ligero van muy bien con vino como Zinfandel y Sauvignon Blanc añejo.",
            answer:
              "Una buena barbacoa de verduras, irá genial con un Sauvignon Blanc fermentado en barricas de roble, como este Rutini.",
              link:"http://localhost:3000/detail/77",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "pastas",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Aqui lo importante es la salsa. La acidez del tomate invita a compartir con un vino tinto, varietal o blend, de cuerpo medio y un poco de acidez.",
            answer:
              "Cuando los quesos y la crema se apoderan del plato un Sauvignon Blanc, un Pinot Grigio o un cava o espumante frescos podrían ser la elección. Aqui te dejo una excelente recomendación.",
              link:"http://localhost:3000/detail/82",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "picadas",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Si la picada contiene embutidos, quesos de sabores intensos o con pastas duras o semi-duras se puede maridar muy bien con vinos tintos que posean buen cuerpo, importante acidez, estructura y taninos marcados.",
            answer:
              "Si en la picada predominan los quesos y las conservas: Aperol spritz con rodajas de pomelo bien fresco. Si les gusta las cervezas lleven a la mesa cerveza amber roja, IPA o cerveza negra.",
            link:"http://localhost:3000/detail/60",
            id: 1,
          },
        ],
      },
    },
   
    


    
    
  ],
};

export default config;
