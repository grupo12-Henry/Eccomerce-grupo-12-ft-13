const { Product } = require('./db.js')
const { v4: uuid } = require('uuid');

// let id= uuid();

var datab = [
    {
      PRODUCTOS: 'Coca-Cola 1.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Coca%201.5L.jpg?alt=media&token=36b5d220-d62e-4666-a9ad-0b13eb2a570a',
      Fabricante: 'The Coca-Cola Company',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 125,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Coca-Cola 0.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/coca-500.jpg?alt=media&token=7593f731-eeec-4c89-bdf1-697530b632d0',
      Fabricante: 'The Coca-Cola Company',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 70,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Coca-Cola Light 1.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/coca%20light%201.5.jpg?alt=media&token=48f68d10-54df-45e6-a6b8-79a92309966e',
      Fabricante: 'The Coca-Cola Company',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 125,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Coca-Cola Light 0.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/coca%20light%20500.png?alt=media&token=8aebe303-2840-4513-8797-093dddd4400f',
      Fabricante: 'The Coca-Cola Company',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 70,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Coca-Cola Zero 1.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/coca%20zero%201.5.jpg?alt=media&token=5e110c8c-b821-4727-9ac4-007be52f52e5',
      Fabricante: 'The Coca-Cola Company',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 125,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Coca-Cola Zero 0.6L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Coca%20Zero%20600.jpg?alt=media&token=1ba73b3f-0844-4d8f-a469-4361f309cc2f',
      Fabricante: 'The Coca-Cola Company',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 70,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Sprite 1.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/SPRITE%201.5.jpg?alt=media&token=1952ad32-59c2-4823-a606-201bb004303b',
      Fabricante: 'The Coca-Cola Company',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 125,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Sprite 0.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/sprite%20500.jpg?alt=media&token=4a6388d6-f3ba-405f-b1c4-b13585b0da04',
      Fabricante: 'The Coca-Cola Company',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 70,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Sprite Zero 1.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/sprite%20zero.jpg?alt=media&token=fdba1d4d-ae5c-49f4-9011-53359900084a',
      Fabricante: 'The Coca-Cola Company',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 125,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Fanta 1.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/fanta%201.5.jpg?alt=media&token=273fff40-02b3-40bc-b53e-14b51ddbd4e2',
      Fabricante: 'The Coca-Cola Company',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 125,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Bon Aqua 1.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/bon%20aqua%201.5.jpg?alt=media&token=5c537402-a1f4-4b1f-b6b2-a73280f6efa7',
      Fabricante: 'The Coca-Cola Company',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 100,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Bon Aqua 0.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/bonAqua%200.5.jpg?alt=media&token=ecd728b3-c336-4a64-8c05-4d96650f77a5',
      Fabricante: 'The Coca-Cola Company',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 60,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Pepsi-Cola 1.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/pepsi%201.5.webp?alt=media&token=c54476f5-3b26-4695-8d24-1bf8459c25f8',
      Fabricante: 'PepsiCo',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 100,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: '7-Up 1.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/7up%201.5.png?alt=media&token=cca94133-1cbf-45cc-8e26-63ebf0bc215e',
      Fabricante: 'PepsiCo',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 100,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Mirinda 1.5 L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/MIRINDA-1.5.jpg?alt=media&token=1d11682b-df2d-4e8c-9475-839a6a17539b',
      Fabricante: 'PepsiCo',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 100,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Pepsi Black 1.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/pepsi%20zero%201.5.jpg?alt=media&token=219da780-8be3-4e8b-802c-1c98d4ab66f8',
      Fabricante: 'PepsiCo',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 100,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: '7-Up Free 1.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/7up%20free%201.5.jpg?alt=media&token=b9bd2487-7755-4fb7-be85-260ce37f74da',
      Fabricante: 'PepsiCo',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 100,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Gatorade naranja 1L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/gatorade%20naranja.png?alt=media&token=384f06cc-ad20-4c27-8090-975d6cbdadf4',
      Fabricante: 'PepsiCo',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 125,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Gatorade manzana 1.25L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/gatorade%20naranja.png?alt=media&token=384f06cc-ad20-4c27-8090-975d6cbdadf4',
      Fabricante: 'PepsiCo',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 160,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'AquaFina 0.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/aquafina%20500.jpg?alt=media&token=2d2524d0-9cb5-44c4-855d-393c3380efdd',
      Fabricante: 'PepsiCo',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 50,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'AquaFina 1.5L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/aquafina%201500.jpg?alt=media&token=2e2e7953-158f-40a4-bc72-3cd052b17755',
      Fabricante: 'PepsiCo',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 80,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Tropicana naranja 1L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/tropicana%20naranja.jpg?alt=media&token=eaae8877-a6d3-424a-b761-8903e19b2456',
      Fabricante: 'PepsiCo',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 75,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'Tropicana manzana 1L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/tropicana%20manzana.jpg?alt=media&token=56101870-3f87-404e-b750-ca36bfbfa897',
      Fabricante: 'PepsiCo',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 75,
      CATEGORIA: 'Bebidas'
    },
    {
      PRODUCTOS: 'The Glenlivet 12 años 700 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/glen-elgin-121-8b706dbbd7685346a216079712209554-480-0.jpg?alt=media&token=fcb52ae0-31ef-495d-8d66-a8695968a444',  
      Fabricante: 'The Glenlivet',
      Detalle: 'The Glenlivet 12 Años Single Malt es un referente mundial de la categoría Scotch Single Malt, considerado también como el whisky Single Malt "Patrón" de la región Speyside. De color dorado claro. Elegante y balanceada nariz, con notas frutadas, delicada fragancia floral, miel y leve ahumado. Suave, balanceado, frutado y floral. De final liso, cálido y elegante.',
      STOCK: 24,
      PRECIO: 4900,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Macallan Double Cask 12 Años 700 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Medium-MAC_2018_Double%20Cask_12YO_BottleCarton_RGB_Tif.jpg?alt=media&token=7d739e33-d176-4b41-a8ac-0a0288ae8bd2',    
      Fabricante: 'Macallan',
      Detalle: 'La obsesión con la calidad ha sido la impronta de The Macallan desde que Alexander Reid la fundara en una meseta situada sobre el río Spey, en el noreste de Escocia. Macallan 12 años Double Cask es la asociación perfecta de barricas de roble americano y europeo sazonadas con jerez oloroso para crea el carácter acogedor y distintivo de este armonioso single malt.',
      STOCK: 24,
      PRECIO: 9393,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Macallan Triple Cask 12 Años 700 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Copia-de-Copia-de-Copia-de-Copia-de-Copia-de-Sin-t%C3%ADtuloI-12.jpg?alt=media&token=3852c070-3bc7-4011-9a8b-b4a748a0abb3',
      Fabricante: 'Macallan',
      Detalle: 'La obsesión con la calidad ha sido la impronta de The Macallan desde que Alexander Reid la fundara en una meseta situada sobre el río Spey, en el noreste de Escocia. Macallan 12 años Triple Cask es la asociación perfecta de barricas de roble americano y europeo sazonadas con jerez oloroso para crea el carácter acogedor y distintivo de este armonioso single malt.',
      STOCK: 24,
      PRECIO: 8945,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Ballantines Finest 1000 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Ballantines%20Finest%201000%20ml.jpg?alt=media&token=72df9330-7320-458d-8c9a-0eab29abdc60',
      Fabricante: 'Ballantines',
      Detalle: 'Ballantine’s es un whisky escocés blended creado en 1827 por George Ballantine, un empresario que inventó un método propio para producir un whisky de la mejor calidad. Su color dorado claro y su sabor inconfundible provienen de una compleja mezcla de whiskies de malta y cereales cuidadosamente seleccionados. Todos se dejan añejar durante varios años en barricas de gran calidad.',
      STOCK: 24,
      PRECIO: 1653,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Chivas Regal 18 años 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Chivas%20Regal%2018%20a%C3%B1os%20750%20ml.jpg?alt=media&token=467b6836-b182-4707-bb2b-7e281891d631',
      Fabricante: 'Chivas Regal',
      Detalle: 'Whisky premium escocés, mezcla de las mejores maltas de Speyside. 18 años de envejecimiento en barricas de roble francés. Sabor balanceado a miel y manzana madura. ',
      STOCK: 24,
      PRECIO: 7779,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Chivas Regal 12 años 1000 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Chivas%20Regal%2012%20a%C3%B1os%201000%20ml.png?alt=media&token=a64fe852-0807-4ebd-864a-be0df9285f20',
      Fabricante: 'Chivas Regal',
      Detalle: 'Es una mezcla de los mejores whiskies con una ola de malta y granos madurados durante al menos 12 años. Los barriles de jerez imprimen un color profundo y rico al whisky, mientras el barril de bourbon le da un tono más dorado. Pero todo depende de la mezcla. ',
      STOCK: 24,
      PRECIO: 3369,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Chivas Regal EXTRA 13 Años 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Chivas%20Regal%20EXTRA%2013%20A%C3%B1os%20750%20ml.jpg?alt=media&token=b47c186d-62a5-49c5-91d6-f9590f810435',     
      Fabricante: 'Chivas Regal',
      Detalle: 'Es una mezcla de los mejores whiskies con una ola de malta y granos madurados durante al menos 12 años. Durante su ultimo año es terminado en barricas de tequila. ',
      STOCK: 24,
      PRECIO: 3315,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Johnnie Walker Red Label 1000 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Johnnie%20Walker%20Red%20Label.jpg?alt=media&token=ec975974-e08d-40fd-9c3c-3be3354934d8',
      Fabricante: 'Johnnie Walker',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 2027,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Johnnie Walker Black Label 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Johnnie%20Walker%20Black%20Label%20750%20ml.jpg?alt=media&token=30042346-bc7c-485b-8347-eacb8f057949',
      Fabricante: 'Johnnie Walker',
      Detalle: 'Mezcla que combina whiskies ligeros de la costa este escocesa y whiskies ahumados de la costa oeste. En boca se perciben sabores de manzana y pera fresca con notas de vainilla. Final persistente y ahumado.',
      STOCK: 24,
      PRECIO: 2883,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Johnnie Walker Black Label 1000 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Johnnie%20Walker%20Black%20Label%201000%20ml.png?alt=media&token=51dc5aa1-6db2-4924-915d-4473138b936d',
      Fabricante: 'Johnnie Walker',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 3490,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Johnnie Walker Green Label 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Johnnie%20Walker%20Green%20Label%20750%20ml.jpg?alt=media&token=a566c4dd-5bc9-4127-94aa-5cebfc29dfc0',
      Fabricante: 'Johnnie Walker',
      Detalle: 'Cuando hablamos de la etiqueta negra de JW encontramos un whisky blended muy redondo donde es evidente la presencia de los whiskys de grano pero muy matizados con notas de especias dulces, notas oscuras y ahumadas',
      STOCK: 24,
      PRECIO: 6879,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Johnnie Walker Double Black 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Johnnie%20Walker%20Double%20Black%20750%20ml.jpg?alt=media&token=c8d56148-f29a-4da7-9714-cf574768c580',
      Fabricante: 'Johnnie Walker',
      Detalle: 'Johnnie Walker Double Black está inspirado en los sabores icónicos de Johnnie Walker Black Label, acentuándolos para crear una mezcla con una intensidad sin precedentes. Influenciado por los poderosos whiskies de la costa oeste y la región de las Islas, Johnnie Walker Double Black se disfruta mejor con agua para liberar sus complejas notas de especias ardientes y humo. Una mezcla increíble para compartir sin importar la ocasión.',
      STOCK: 24,
      PRECIO: 4190,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Johnnie Walker Gold Reserve 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Johnnie%20Walker%20Gold%20Reserve%20750%20ml.jpg?alt=media&token=39ad9122-d26d-4b4f-8e53-33d4743a0030',
      Fabricante: 'Johnnie Walker',
      Detalle: 'Johnnie Walker Gold Label Reserve es mejor conocida por su suavidad cremosa y lujosa. Apertura con un estallido de néctar aromático, antes de profundizar, en tonos más aterciopelados y melosos; este galardonado whisky da paso a una persistente textura de roble en el acabado. Johnnie Walker Gold Label Reserve transforma cualquier momento de celebración en algo verdaderamente extraordinario.',
      STOCK: 24,
      PRECIO: 5900,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Johnnie Walker Blue Label 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Johnnie%20Walker%20Blue%20Label%20750%20ml.jpg?alt=media&token=e817855d-4304-4b14-8e4f-78d10e23f244',
      Fabricante: 'Johnnie Walker',
      Detalle: 'JOHNNIE WALKER BLUE LABEL pone las reglas, con capas y capas de sabor y raras barricas seleccionadas a mano de todas las regiones de destilación de Escocia. Sus aromas son influenciados por el humo del oeste y los ricos whiskies dulces del este.',
      STOCK: 24,
      PRECIO: 24300,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'J&B 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/J%26B%20750%20ml.jpg?alt=media&token=18e80e3d-0c6d-4215-82f3-fa70f358e14c',
      Fabricante: 'J&B',
      Detalle: 'El corazón de J&B Rare es formado por Speyside Malt Whiskies. Ellos proporcionan el sabor a fruta, calidad de frescura que podés degustar, y dar a J&B su color claro. Speyside es reconocida como la mejor zona en Escocia para la fabricación de malta.',
      STOCK: 24,
      PRECIO: 1383,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Vat 69 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Vat%2069%20750%20ml.png?alt=media&token=40bd2574-96d0-46f6-81af-03ecfc44aa95',
      Fabricante: 'Vat 69',
      Detalle: 'Las barricas utilizadas para el envejecimiento de los whiskies de VAT 69 todavía se eligen con el mismo cuidado que mantenía William Sanderson, su fundador en 1882. Los whiskies son madurados en barricas, que fueron previamente utilizadas para bourbon americano o jerez español. Las maltas de las destilerías de Clynelish y Ord representan el estilo más auténtico de la región de las Highlands escocesas y están en el corazón del blend de VAT 69.',
      STOCK: 24,
      PRECIO: 487,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'White Horse 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/White%20Horse%20750%20ml.jpg?alt=media&token=d33b9781-00d7-4c73-887b-21421d85d983',
      Fabricante: 'White Horse',
      Detalle: 'Blend 8 años de más de 35 whiskies de malta y grano, siendo su corazón 3 single malts: Lagavulin, Craigellachie y Glen Elgin. Sobresale por la forma singular de su botella, su etiqueta tradicional y su nombre, recibido de una histórica posada de Edimburgo fundada en 1742.Con un bouquet muy sutil, las notas mas sobresalientes recuerdan directamente al roble, luego se aprecian terrosas, algo animales, minerales y aceitosas, sin que sea un espectro de notas muy atractivo.',
      STOCK: 24,
      PRECIO: 737,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Jack Daniels 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Jack%20Daniels%20750%20ml.jpg?alt=media&token=9f0635d9-db0e-43ba-a082-0e104164f506',
      Fabricante: 'Jack Daniels',
      Detalle: 'Ningún barril es idéntico en color, aroma y sabor. Debido a una posición diferente en las plantas altas de los almacenes, el tiempo de maduración y la individualidad de la madera de roble blanco, cada barril desarrolla un carácter único. Solo después de la elección estricta de nuestro Maestro Destilador, Jeff Arnett, y su equipo de degustación, los mejores barriles serán seleccionados para ser Single Barrel.',
      STOCK: 24,
      PRECIO: 4327,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Jack Daniels Honey 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Jack%20Daniels%20Honey%20750%20ml.png?alt=media&token=81438d90-f762-4edc-b28f-2bf180263c35',
      Fabricante: 'Jack Daniels',
      Detalle: 'Entre sus principales características el Whisky Jack Daniel´s Honey destaca por su auténtico toque de miel. Además de que su maridaje te permite beberlo congelado en un shot, mezclado con agua mineral o refresco. Originario de Estados Unidos, fue la región de Tennessee la que lo vio nacer.',
      STOCK: 24,
      PRECIO: 4327,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Jameson Caskmates Ipa 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Jameson%20Caskmates%20Ipa%20750%20ml.jpg?alt=media&token=36315795-8d63-4472-a31e-23471eb2ab71',
      Fabricante: 'Jameson',
      Detalle: 'OLFATO: Floral, lúpulo de hierbas y pomelo. Complementario con madera y un poco de nuez. GUSTO: Lúpulo y cítricos livianos con dulces notas hierbas y tonos ligeramente picantes. La persistencia de la fruta fresca y el lúpulo dan paso a la cebada crujiente y suave.',
      STOCK: 24,
      PRECIO: 1885,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Jameson 1000 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Jameson%201000%20ml.jpg?alt=media&token=53eb5a76-88f8-4be8-bc88-0bc259b2c776',
      Fabricante: 'Jameson',
      Detalle: 'El Whiskey Irlandés Jameson es una mezcla de whiskies de alambique y de grano, es tan versátil como suave debido a su triple destilacion. Es un perfecto equilibrio de notas especiadas, de nuez y vainilla con toques de jerez dulce y la suavidad excepcional, no ahumado.',
      STOCK: 24,
      PRECIO: 2190,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Old Smuggler 1000 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Old%20Smuggler%201000%20ml.jpg?alt=media&token=42c8b865-3008-4404-ae22-d1cda2f648cb',
      Fabricante: 'Old Smuggler',
      Detalle: 'Old Smuggler es una reconocida marca de whisky propiedad desde el año 2006 del Gruppo Campari. Es un whisky escocés fino, cuya primer producción data del año 1835 y que hasta el día de hoy se sigue produciendo con el clásico proceso de destilación empleado en Escocia en el siglo 18.',
      STOCK: 24,
      PRECIO: 397,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Blenders Pride 1000 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Blenders%20Pride%201000%20ml.jpg?alt=media&token=ee36b498-b398-4990-8df1-e47ad816be5c',
      Fabricante: 'Blenders Pride',
      Detalle: 'Blenders Pride es un whisky elaborado a base de maltas provenientes de Escocia añejadas por un mínimo de 3 años, combinadas con whiskies de grano añejos locales. De color dorado pálido, gracias a su maduración en barricas de roble.',
      STOCK: 24,
      PRECIO: 463,
      CATEGORIA: 'Whiskys'
    },
    {
      PRODUCTOS: 'Campari 750',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/campari.jpg?alt=media&token=e738227c-e523-4e78-b230-942a23551162',
      Fabricante: 'Campari',
      Detalle: 'Fue Gaspare Campari el que inventó la bebida que lleva su nombre. En 1867 solía agasajar a sus clientes en su café de Milán con un aperitivo elaborado a base de hierbas y cortezas de naranjas amargas. Aunque se conocen los ingredientes, la fórmula exacta que empleaba Gaspar se mantiene aún hoy en secreto.',
      STOCK: 24,
      PRECIO: 750,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'Gin Beefeater 750',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/beefeater-75-cl.jpg?alt=media&token=e293ab0e-a32c-41bf-9d49-a477e6cb3c0f',
      Fabricante: 'Beefeater',
      Detalle: 'Beefeater es el gin Premium más exportado del mundo, su distinguido sabor se puede disfrutar en más de 170 países. Beefeater fue creado en 1820 por James Burrough, cuya receta secreta se sigue utilizando en nuestros días.',
      STOCK: 24,
      PRECIO: 3100,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'Gin Apostoles 750',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/apostoles.jpg?alt=media&token=b5811c8c-17d0-4f95-8821-5ad1ad997f8e',
      Fabricante: 'Apostoles',
      Detalle: 'APÓSTOLES es el primer gin premium de latinoamérica. Sus botánicos principales son las hojas frescas de yerba mate, pieles de pomelo rosado, eucalipto y menta peperina. En el pueblo de Apóstoles en Misiones fué la primera plantación y es hoy la capital de la yerba mate en la Argentina',
      STOCK: 24,
      PRECIO: 2340,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'Gin Bombay 750ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/bombay.jpeg?alt=media&token=00453cec-7c39-4dd8-8f5b-f8dd30a2626b',
      Fabricante: 'Bombay',
      Detalle: 'Ginebra Bombay Original es una ginebra de 40º de alcohol fabricada en Inglaterra. El sabor de esta ginebra es el de una ginebra clásica, ligeramente seca y con un sutil acabado a enebro. Ginebra Bombay Sapphire es una ginebra de 40º de alcohol elaborado con el exclusivo alambique de cobre Carterhead.',
      STOCK: 24,
      PRECIO: 2630,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'Vodka Absolut 750ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/absolut.jpg?alt=media&token=15f4d84c-f89f-4d95-a89e-a3bc44f9ea90',
      Fabricante: 'Absolut',
      Detalle: 'ABSOLUT VODKA está elaborado exclusivamente con ingredientes naturales, y a diferencia de otros vodkas, no contiene azúcares añadidos. Absolut es, de hecho, tan puro como puede ser el vodka. Aún así, la pureza tiene un sabor: rico, con cuerpo y complejo, pero suave y maduro con el carácter distintivo del grano de trigo, seguido de un toque a frutas secas.',
      STOCK: 24,
      PRECIO: 2580,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'Vodka Grey Goose 700ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/grey%20goose.jpg?alt=media&token=a167d114-2f54-4795-8f71-b885002a0c7e',
      Fabricante: 'Grey Goose',
      Detalle: 'El "maître de chai” se asegura de que cada ingrediente que interviene en la producción sea de la más alta calidad. Selecciona personalmente el 100% del mejor trigo francés, el mismo trigo utilizado en la elaboración de la deliciosa bollería francesa, y emplea un proceso de destilación en cinco fases para otorgar al licor su sabor más excepcional y refinado. Posteriormente es mezclado con agua natural totalmente pura filtrada a través de la piedra caliza de la región de Grand Champagne. Este vodka francés es exuberante, suave, meloso y redondo, dejando en el paladar un gusto duradero.',
      STOCK: 24,
      PRECIO: 4540,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'Vodka Belvedere 1L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/belvedere.jpg?alt=media&token=609f5033-d7f7-40f9-974e-295d4b08e58c',
      Fabricante: 'Belvedere',
      Detalle: 'Belvedere Vodka es el primer vodka súper premium, creado a partir de 600 años de tradición polaca en la fabricación de vodka. Hecho a mano con centeno 100% de procedencia de Polonia y agua natural de su propio pozo, Belvedere es totalmente natural, contiene cero aditivos o azúcar, está certificado como Kosher por la Unión Ortodoxa y se produce de acuerdo con los requisitos legales del Vodka polaco. Su perfil de sabor es estructurado, elegante y equilibrado, con una dulzura sutil, una sensación en boca rica y aterciopelada y un acabado suave y limpio.',
      STOCK: 24,
      PRECIO: 6845,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'Vodka Oddka 750ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/oddka.jpg?alt=media&token=95b03f72-1ffc-43b7-bacd-6e128ea29890',
      Fabricante: 'wyborowa',
      Detalle: 'Fresco Y elegante, ODDKA Original Posee Una Textura Suave Ideal Para Coctelería. ODDKA es la nueva marca polaca de vodka de la familia Wyborowa. Es un vodka a base de maíz, que trae una propuesta de sabores diferencial y única.',
      STOCK: 24,
      PRECIO: 400,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'Fernet Branca 750ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/branca%20750.jpg?alt=media&token=4570f6d7-baec-4765-a6aa-f9c5b7bca2ee',
      Fabricante: 'Branca',
      Detalle: 'Fernet Branca se elabora a partir de la combinación de 27 plantas y especias. Se madurada en barricas de roble durante 12 meses, lo que le confiere su marcado carácter. El proceso de producción es complejo e incluye diferentes tipos de maceraciones.',
      STOCK: 24,
      PRECIO: 805,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'Fernet Branca 1L',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/branca%201L.jpg?alt=media&token=4b89b0a0-4bf2-47f9-9a6b-e7f03a091915',
      Fabricante: 'Branca',
      Detalle: 'Fernet Branca se elabora a partir de la combinación de 27 plantas y especias. Se madurada en barricas de roble durante 12 meses, lo que le confiere su marcado carácter. El proceso de producción es complejo e incluye diferentes tipos de maceraciones.',
      STOCK: 24,
      PRECIO: 1000,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'Fernet 1882 750ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/1882.jpg?alt=media&token=c70b1314-382f-4221-a1a4-3bb6f5b05635',
      Fabricante: 'Porta Hnos.',
      Detalle: 'Fernet 1882 es el primer Fernet argentino. De origen cordobés. Fue catado a ciegas por más de 20.000 fanáticos cordobeses de Fernet que antes de su lanzamiento le dieron la nota máxima en espuma y sabor, ubicándolo entre los mejores Fernet. Es conocido por su calidad y por sus kits especiales, ediciones limitadas que siempre son muy apreciadas por los seguidores de Fernet 1882.',
      STOCK: 24,
      PRECIO: 460,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'Ron Bacardi 750ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/bacardi.jpeg?alt=media&token=56df9ad8-5eb6-4438-8370-456e161374d7',
      Fabricante: 'Bacardi',
      Detalle: 'Un clásico ron blanco con notas distintivas de vainilla y almendra, elaborado en barriles de roble blanco y moldeado con una mezcla secreta de carbón vegetal para lograr una suavidad inconfundible.',
      STOCK: 24,
      PRECIO: 1000,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'Ron Havana club añejo 750ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/havana.jpg?alt=media&token=b948f943-3591-4e44-ba4c-f3fa42b4ec19',
      Fabricante: 'Havana Club',
      Detalle: 'Su añejamiento natural realza las propiedades de la madera, dándole al ron un aroma más profundo y natural. Havana Club Añejo 3 años es intenso y característico, ya que se puede apreciar con facilidad el sabor de la caña de azúcar en su mejor expresión.',
      STOCK: 24,
      PRECIO: 1615,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'Ron Capitan Morgan 750ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/morgan.jpeg?alt=media&token=831c8347-7194-4edf-ba0f-264215164f39',
      Fabricante: 'Capitan Morgan',
      Detalle: 'Captain Morgan Original Spiced Gold es una mezcla secreta de rones caribeños con especias añejadas y otros sabores naturales. Este ron obtiene su distintiva riqueza y color ámbar gracias a su añejamiento en barricas de roble blanco carbonizadas',
      STOCK: 24,
      PRECIO: 830,
      CATEGORIA: 'varios'
    },
    {
      PRODUCTOS: 'QUILMES CERVEZA SIN ALCOHOL LATA 473 ML',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/quilmesLata.jpeg?alt=media&token=55da38f0-e8ea-41ec-adb1-1feefc445f64',
      Fabricante: 'Quilmes',
      Detalle: 'Es una cerveza equilibrada, de gran refrescancia y cuerpo balanceado, que marida con platos más bien grasosos o pesados.',
      STOCK: 24,
      PRECIO: 102,
      CATEGORIA: 'cervezas'
    },
    {
      PRODUCTOS: 'MILLER GENUINE DRAFT CERVEZA 330 ML',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/millerBot.jpeg?alt=media&token=8809e29a-6d01-4ce4-97ec-f8e23950c2d4',
      Fabricante: 'Miller',
      Detalle: 'Miller es una cerveza que se caracteriza por su color dorado, claridad increíble y sabor suave y refrescante, lo cual se consigue gracias a un proceso especial de cuádruple filtrado.',
      STOCK: 24,
      PRECIO: 110,
      CATEGORIA: 'cervezas'
    },
    {
      PRODUCTOS: 'STELLA ARTOIS CERVEZA 330 ML',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/stellaArtois.jpeg?alt=media&token=5ff52514-9d75-48a9-8932-2a84074509ef',
      Fabricante: 'Stella Artois',
      Detalle: 'Lager de color dorado pálido, muy brillante y con una espuma consistente. Una cerveza muy equilibrada donde predominan moderadas notas a frutas blancas y de cereal que resaltan levemente sobre el aroma herbal del lúpulo Saaz. En boca presenta una sensación suave, ligera de amargo y con efecto refrescante.',
      STOCK: 24,
      PRECIO: 110,
      CATEGORIA: 'cervezas'
    },
    {
      PRODUCTOS: 'CORONA EXTRA CERVEZA LATA 269 ML',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/coronaLata.jpeg?alt=media&token=96070486-e416-4139-b728-8ec2597f4145',
      Fabricante: 'Corona',
      Detalle: 'Destacan sus ligeras notas afrutadas, resultado de la fermentación. De cuerpo medio, fresca, balanceada y muy fácil de beber. En boca es moderadamente dulce y recuerda al sabor del cereal.',
      STOCK: 24,
      PRECIO: 102,
      CATEGORIA: 'cervezas'
    },
    {
      PRODUCTOS: 'HEINEKEN CERVEZA LATA 473 ML',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/heinekenLata.jpeg?alt=media&token=369a70ac-aa23-46f5-ab72-a0ca46d43387',
      Fabricante: 'Heineken',
      Detalle: ' Es una cerveza de tipo Lager y estilo Pilsen de color amarillo claro y brillante, con una espuma blanca intensa, cremosa y persistente en el vaso. Su aroma frutal a plátano, procedente de su fermentación lenta a baja temperatura, perdura el consumo final mezclándose con el ligero sabor dulce de la malta pilsen y su amargor suave. Es una cerveza seca de cuerpo ligero con buen paso de boca, que proporciona un final amargo muy fresco y nada astringente.',
      STOCK: 24,
      PRECIO: 110,
      CATEGORIA: 'cervezas'
    },
    {
      PRODUCTOS: 'GROLSCH CERVEZA LATA 473 ML',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/groslch.jpeg?alt=media&token=01304999-438a-4967-bf7c-08540ea2bfd9',
      Fabricante: 'Grolsh',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 140,
      CATEGORIA: 'cervezas'
    },
    {
      PRODUCTOS: 'PATAGONIA KM 24.7 SESSION IPA CON SAUCO CERVEZA 710 ',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/patagonia.jpeg?alt=media&token=b57565ba-a7b4-470e-91c6-4bbdb775398e',
      Fabricante: 'Patagonia',
      Detalle: 'Cerveza estilo Session IPA, muy tomable y refrescante, de amargor marcado otorgado por una combinación de lúpulos patagónicos. Cuenta con un intenso aroma a cítrico y frutal gracias a la de agregado de lúpulo en frío llamada Dry Hopping. El agregado de sauco y miel en frio balancean el amargor del lúpulo, aportando cierta acidez y final seco.',
      STOCK: 24,
      PRECIO: 140,
      CATEGORIA: 'cervezas'
    },
    {
      PRODUCTOS: 'ANDES ORIGEN ROJA CERVEZA LATA LATA 473 ML',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/andesLata.jpeg?alt=media&token=30004f97-9dd9-4be5-8065-092a1cb12a2e',
      Fabricante: 'Andes',
      Detalle: 'Es una cerveza estilo Vienna Lager, su aroma a suave caramelo y leve lúpulo logran un balance perfecto. La Andes origen Roja, color ámbar cobrizo, es una cerveza de deleite. Ideal para acompañar pescados o carnes rojas, elaborados con verduras frescas o grilladas.',
      STOCK: 24,
      PRECIO: 170,
      CATEGORIA: 'cervezas'
    },
    {
      PRODUCTOS: 'ANTARES INDIA PALE ALE CERVEZA 500 ML',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/antaresindia.jpeg?alt=media&token=198ef7c6-25f9-44e4-9f61-748842acafc5',
      Fabricante: 'antares',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 170,
      CATEGORIA: 'cervezas'
    },
    {
      PRODUCTOS: 'BUDWEISER CERVEZA LATA 355 ML',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/budlata.jpeg?alt=media&token=5779f4f0-a961-48e0-8822-4265f5eaf36d',
      Fabricante: 'budweiser',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 170,
      CATEGORIA: 'cervezas'
    },
    {
      PRODUCTOS: 'CAPE HORN HONEY CERVEZA 500 ML',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/honey.jpeg?alt=media&token=7c17650e-a898-4103-844f-55b7bd3dfa66',
      Fabricante: 'cape horn',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 170,
      CATEGORIA: 'cervezas'
    },
    {
      PRODUCTOS: 'Cordoba 473ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/cordoba.jpg?alt=media&token=bf74255d-71fd-4ac0-9c27-03e5e63f87e2',
      Fabricante: 'Cordoba',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 80,
      CATEGORIA: 'cervezas'
    },
    {
      PRODUCTOS: 'Familia Gascon Estuche Malbec 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/estuche%20Familia%20Gascon%20Malbec%20750%20ml.jpeg?alt=media&token=5af03ef0-a019-4556-bf4c-57b708d99ce8',        
      Fabricante: 'ESTUCHE',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 373,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Circus Roble Malbec Estuche 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Circus%20Roble%20Malbec%20Estuche%20750%20ml.jpg?alt=media&token=937e2525-9060-4a4c-86a6-b0ba41b4ec97',
      Fabricante: 'ESTUCHE',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 289,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Trumpeter Malbec Estuche 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Trumpeter%20Malbec%20Estuche%20750%20ml.jfif?alt=media&token=81644bee-d77c-48c9-a364-7080afc8e526',
      Fabricante: 'ESTUCHE',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 705,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Rutini Cabernet Malbec Estuche 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Rutini%20Cabernet%20Malbec%20Estuche%20750%20ml.jpg?alt=media&token=645c7966-1794-445d-b22d-5b961ed77eff',        
      Fabricante: 'ESTUCHE',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 1173,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Rutini Malbec Estuche 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Rutini%20Malbec%20Estuche%20750%20ml.jpg?alt=media&token=d2b99982-cb87-4785-a443-90feb64328ea',
      Fabricante: 'ESTUCHE',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 2009,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Trumpeter Reserva Malbec Estuche',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Trumpeter%20Reserva%20Malbec%20Estuche.jpg?alt=media&token=ff2dd8a8-0e21-4699-a4be-8dab7071754f',
      Fabricante: 'ESTUCHE',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 769,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Encuentro Malbec Rutini',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Encuentro%20Malbec%20Rutini.jpg?alt=media&token=09e86817-b43e-49c3-96ee-0b3a455d9d33',
      Fabricante: 'BODEGA LA RURAL',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 729,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Rutini Malbec Cosecha 2018',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Rutini%20Malbec%20Cosecha%202018.jpeg?alt=media&token=6a92ea48-8823-4d90-8d99-9c9d8160051e',
      Fabricante: 'BODEGA LA RURAL',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 1920,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Rutini Malbec Cosecha 2019',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Rutini%20Malbec%20Cosecha%202019.jpg?alt=media&token=84b57c89-e9e3-4f39-85c5-216e90d31435',
      Fabricante: 'BODEGA LA RURAL',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 1560,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Rutini Cabernet-Malbec Cosecha 2018',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Rutini%20Cabernet-Malbec%20Cosecha%202018.jpeg?alt=media&token=c8358937-3c6d-4780-a12d-522b386c6045',
      Fabricante: 'BODEGA LA RURAL',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 1060,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Rutini Cabernet-Malbec Cosecha 2019',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Rutini%20Cabernet-Malbec%20Cosecha%202019.jpg?alt=media&token=d0af678a-aca4-45fd-b2b4-b95f5a5e4d5b',
      Fabricante: 'BODEGA LA RURAL',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 860,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Rutini Sauvignon Blanc',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Rutini%20Sauvignon%20Blanc.jpg?alt=media&token=b9bf9ddf-43bc-400d-9bc4-9419af031585',
      Fabricante: 'BODEGA LA RURAL',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 769,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Rutini Cabernet Franc Malbec',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Rutini%20Cabernet%20Franc%20Malbec.jpg?alt=media&token=5ed96015-0e70-4df2-94e9-7965dc4e6c0b',
      Fabricante: 'BODEGA LA RURAL',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 860,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Trumpeter (Malbec, Cabernet Sauvignon, Chardonnay)',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Trumpeter%20(Malbec%2C%20Cabernet%20Sauvignon%2C%20Chardonnay).jpeg?alt=media&token=c42fc279-26da-4e86-900d-708e04059091',
      Fabricante: 'BODEGA LA RURAL',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 513,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Trumpeter Cabernet Franc',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Trumpeter%20Cabernet%20Franc.jpg?alt=media&token=6347b9c9-11bd-4ed8-a2a8-10ccf2a45ceb',
      Fabricante: 'BODEGA LA RURAL',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 513,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Trumpeter Reserve Blend',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Trumpeter%20Reserve%20Blend.jpg?alt=media&token=b913f1a1-914c-451e-a26e-43efa9411e3a',
      Fabricante: 'BODEGA LA RURAL',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 669,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Trumpeter Reserve Malbec',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Trumpeter%20Reserve%20Malbec.jpg?alt=media&token=ee61a472-fd9f-49d2-bf96-b15c1c06cffc',
      Fabricante: 'BODEGA LA RURAL',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 669,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'San Felipe 750 ml Blanco Caramañola',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/San%20Felipe%20750%20ml%20Blanco%20Carama%C3%B1ola.jpg?alt=media&token=f1984e6e-05a8-44fc-9f38-a25715b8145b',     
      Fabricante: 'BODEGA LA RURAL',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 247,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Latitud 33 Malbec',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Latitud%2033%20Malbec.jpeg?alt=media&token=ca495b3f-b3d6-4640-954e-d29bf3613739',
      Fabricante: 'BODEGA CHANDON',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 275,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Valmont Tinto',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Valmont%20Tinto.jpeg?alt=media&token=887b955d-9d03-41bf-a490-3f48a71784fb',
      Fabricante: 'BODEGA CHANDON',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 217,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Elementos (Malbec, Cabernet Sauvignon, Chardonnay)',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Elementos%20(Malbec%2C%20Cabernet%20Sauvignon%2C%20Chardonnay).jpg?alt=media&token=882dd6c9-9edd-44c1-bb73-61e36db61acd',
      Fabricante: 'BODEGA EL ESTECO',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 255,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Don David (Malbec, Torrontes)',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Don%20David%20(Malbec%2C%20Torrontes).jpg?alt=media&token=0db8595e-441e-4934-a0b6-badf9929b000',
      Fabricante: 'BODEGA EL ESTECO',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 407,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Luigi Bosca Malbec',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Luigi%20Bosca%20Malbec.jpg?alt=media&token=61f23709-9041-46bd-9d42-1e20fc9c1b2d',
      Fabricante: 'BODEGA LUIGI BOSCA',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 795,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Finca La Linda Malbec',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Finca%20La%20Linda%20Malbec.jpg?alt=media&token=d3a5c256-7262-4fda-b3ab-ee6996c14e23',
      Fabricante: 'BODEGA LUIGI BOSCA',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 455,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Frizze Evolution Blue 1000 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Frizze%20Evolution%20Blue%201000%20ml.jpg?alt=media&token=6281c9b8-98fd-4eae-8a9b-64bcc5b35e90',
      Fabricante: 'BODEGA ANDEAN VIÑAS',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 133,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Nieto Senetiner Malbec 750 ml',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Nieto%20Senetiner%20Malbec%20750%20ml.jpg?alt=media&token=a42c1314-048a-4d45-b970-de7231605ea7',
      Fabricante: 'BODEGA NIETO SENETINER',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 489,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Emilia Malbec',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Emilia%20Malbec.jpg?alt=media&token=4f834b24-cc42-47ba-86ae-49899ebd39e7',
      Fabricante: 'BODEGA NIETO SENETINER',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 367,
      CATEGORIA: 'Vinos'
    },
    {
      PRODUCTOS: 'Benjamin Nieto (Malbec, Chardonnay)',
      URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Benjamin%20Nieto%20(Malbec%2C%20Chardonnay).jpeg?alt=media&token=7ae0952e-0d31-4354-8a0c-f4ae497de34e',
      Fabricante: 'BODEGA NIETO SENETINER',
      Detalle: 'ACA LA INFO',
      STOCK: 24,
      PRECIO: 255,
      CATEGORIA: 'Vinos'
    },
    {
        PRODUCTOS: 'Los Arboles (Malbec, Cabernet Sauvignon)',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Los%20Arboles%20(Malbec%2C%20Cabernet%20Sauvignon).jpeg?alt=media&token=ecf905b4-c9b3-4424-aef3-8eb5bdc7ff41',    
        Fabricante: 'BODEGA NAVARRO CORREAS',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 223,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Santa Julia Malbec',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Santa%20Julia%20Malbec.jpg?alt=media&token=3e79e29a-7788-4452-bc1c-1de03fcb78f3',
        Fabricante: 'BODEGA SANTA JULIA',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 259,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Santa Julia Dulce Tinto',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Santa%20Julia%20Dulce%20Tinto.jpeg?alt=media&token=bedb1e1d-3446-482b-b52e-0c55f4c0367d',
        Fabricante: 'BODEGA SANTA JULIA',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 335,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Carcassone Clásico Tinto 700 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Carcassone%20Cl%C3%A1sico%20Tinto%20700%20ml.jpg?alt=media&token=53e99197-1e48-4464-a520-18d5c076972b',
        Fabricante: 'FINCAS CARCASSONNE',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 127,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Carcassone Clasico Tinto 375 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Carcassone%20Clasico%20Tinto%20375%20ml.jpg?alt=media&token=48eaa2b9-16f0-4f10-bbe5-bf7a9cacaa42',
        Fabricante: 'FINCAS CARCASSONNE',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 77,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Chateau Vieux Tinto 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Chateau%20Vieux%20Tinto%20750%20ml.jpg?alt=media&token=499ba7c3-10eb-4cb3-837b-681b3be3652f',
        Fabricante: 'BODEGA LOPEZ',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 447,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Chateau Vieux Malbec 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Chateau%20Vieux%20Malbec%20750%20ml.jpg?alt=media&token=87e36a54-1c19-41da-823d-6ff0c8b2c216',
        Fabricante: 'BODEGA LOPEZ',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 647,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Chateau Vieux Blanco 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Chateau%20Vieux%20Blanco%20750%20ml.jpg?alt=media&token=dfb9080d-da56-4ab6-95f0-c76a423b4033',
        Fabricante: 'BODEGA LOPEZ',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 233,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Vasco Viejo 700 ml (Tinto, Blanco)',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Vasco%20Viejo%20700%20ml%20(Tinto%2C%20Blanco).gif?alt=media&token=c012c662-5e4a-4969-97bf-10b30047d549',
        Fabricante: 'BODEGA LOPEZ',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 103,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Vasco Viejo 375 ml Tinto',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Vasco%20Viejo%20375%20ml%20Tinto.jpg?alt=media&token=f0bceb92-60d1-4a5d-a668-8e1229170d0f',
        Fabricante: 'BODEGA LOPEZ',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 67,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Lopez 750 ml Malbec',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Lopez%20750%20ml%20Malbec.jpg?alt=media&token=344599d1-9ab8-48ee-a527-c657a6daad6e',
        Fabricante: 'BODEGA LOPEZ',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 189.9,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Lopez 750 ml Blanco',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Lopez%20750%20ml%20Blanco.jpg?alt=media&token=aedb256e-f721-4b6a-b767-ee2f216160c4',
        Fabricante: 'BODEGA LOPEZ',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 149,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Lopez 375 ml Malbec',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Lopez%20375%20ml%20Malbec.jpg?alt=media&token=ec105ee5-fc97-4b8c-92dd-d0d63214b7fc',
        Fabricante: 'BODEGA LOPEZ',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 115,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'DV Catena Malbec',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/DV%20Catena%20Malbec%20Malbec.jpg?alt=media&token=66a5b610-fd8d-46aa-8d0d-4e59217c0701',
        Fabricante: 'BODEGA CATENA ZAPATA',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 1567,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'DV Catena Cabernet Malbec',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/DV%20Catena%20Cabernet%20Malbec.jpg?alt=media&token=5bdc3637-9824-4d28-a5f6-52d152b7df01',
        Fabricante: 'BODEGA CATENA ZAPATA',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 923,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Nicasia (Malbec, Cabernet Franc, Blancs de Blancs)',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Nicasia%20(Malbec%2C%20Cabernet%20Franc%2C%20Blancs%20de%20Blancs).jpg?alt=media&token=a6801859-26e3-4649-9e62-c6d199f92288',
        Fabricante: 'BODEGA CATENA ZAPATA',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 653,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Angelica Zapata Malbec 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Angelica%20Zapata%20Malbec%20750%20ml.jpeg?alt=media&token=157b5d2f-263b-4637-9877-1eb01126871c',
        Fabricante: 'BODEGA CATENA ZAPATA',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 2697,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Alto Uxmal Malbec 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Alto%20Uxmal%20Malbec%20750%20ml.jpg?alt=media&token=7922abd8-38b5-465f-9c58-0ded4314ab92',
        Fabricante: 'BODEGA ESMERALDA',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 405,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Estiba 1 Malbec',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Estiba%201%20Malbec.jpg?alt=media&token=284cd129-c869-4316-a23b-67294129c473',
        Fabricante: 'BODEGA ESMERALDA',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 193,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Uxmal Malbec',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Uxmal%20Malbec.jpg?alt=media&token=d0f78e3d-ca8d-4ff6-8aa1-beca057aad2c',
        Fabricante: 'BODEGA ESMERALDA',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 223,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Esmeralda Malbec',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Esmeralda%20Malbec.jpeg?alt=media&token=e0ce377d-eb27-4982-8188-8b77c7512b29',
        Fabricante: 'BODEGA ESMERALDA',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 290,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Etchart Privado Torrontes',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Etchart%20Privado%20Torrontes.jfif?alt=media&token=c94d97ba-6f50-4420-9d47-c769dcf1f6a4',
        Fabricante: 'BODEGA ETCHART',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 157,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Fond de Cave (Malbec, Chardonnay, Cabernet)',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Fond%20de%20Cave%20(Malbec%2C%20Chardonnay%2C%20Cabernet).jpeg?alt=media&token=f43f6a93-3ff7-4c84-ab83-83aa5ecaedb0',
        Fabricante: 'BODEGA TRAPICHE',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 407,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Alaris (Malbec, Cabernet Sauvignon)',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Alaris%20(Malbec%2C%20Cabernet%20Sauvignon).jpg?alt=media&token=77b1484f-b6c8-4bc4-814d-43b0d2ff4853',
        Fabricante: 'BODEGA TRAPICHE',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 205,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Circus Malbec',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Circus%20Malbec.jpg?alt=media&token=627fb120-58d8-42d9-a171-214d3254f255',
        Fabricante: 'BODEGA ESCORIHUELA GASCON',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 190,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Familia Gascón (Malbec, Cabernet, Chardonnay)',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Familia%20Gasc%C3%B3n%20(Malbec%2C%20Cabernet%2C%20Chardonnay).jpg?alt=media&token=48ce9eb6-5b3d-4d10-90bd-a2aa816c1880',
        Fabricante: 'BODEGA ESCORIHUELA GASCON',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 285,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Alma Mora Select Reserve Malbec',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Alma%20Mora%20Select%20Reserve%20Malbec.jpg?alt=media&token=fe6028f1-fdf3-4660-9ff8-8caf9dacf528',
        Fabricante: 'BODEGA FINCA LAS MORAS',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 365,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Alma Mora (Malbec, Chardonnay, Syrah, Cabernet)',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Alma%20Mora%20(Malbec%2C%20Chardonnay%2C%20Syrah%2C%20Cabernet).jpg?alt=media&token=2917bc9e-ff15-4a9f-ad32-a520be951d6b',
        Fabricante: 'BODEGA FINCA LAS MORAS',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 269,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Dadá Nº1 750 ml Blend Bonarda, malbec con aroma a vainilla',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Dad%C3%A1%20N%C2%BA1%20750%20ml%20Blend%20Bonarda%2C%20malbec%20con%20aroma%20a%20vainilla.jpg?alt=media&token=4873a0fa-e969-44f5-b7e9-74929e067038',
        Fabricante: 'BODEGA FINCA LAS MORAS',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 255,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Finca las Moras (Malbec, Cabernet)',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Finca%20las%20Moras%20(Malbec%2C%20Cabernet).jpg?alt=media&token=c4ab9226-f869-439d-a542-0a1a0e8a1cd6',
        Fabricante: 'BODEGA FINCA LAS MORAS',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 215,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Norton Cosecha Tardia Blanco',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Norton%20cocecha%20tardia.jpg?alt=media&token=8cbf3293-58fd-4155-bda5-95e970d251f8',
        Fabricante: 'BODEGA NORTON',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 225,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Santa Julia blanco dulce 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Santa%20Julia%20blanco%20dulce%20750%20ml.jpg?alt=media&token=c99d6474-2e2c-4854-b8d9-f98a01fb149f',
        Fabricante: 'BODEGA NORTON',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 405,
        CATEGORIA: 'Vinos'
      },
      {
        PRODUCTOS: 'Montchenot Extra Brut 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Montchenot%20Extra%20Brut%20750%20ml.jpg?alt=media&token=d6b62aac-809c-4231-bd4e-926fba8cbe29',
        Fabricante: 'BODEGA LOPEZ',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 339,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Montchenot Rose 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Montchenot%20Rose%20750%20ml.jpg?alt=media&token=4f20b8bf-37c2-47ec-910b-b5105f0fbc72',
        Fabricante: 'BODEGA LOPEZ',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 339,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Espumante Cinzano Pro-Spritz Demi Sec',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Espumante%20Cinzano%20Pro-Spritz%20Demi%20Sec.jpg?alt=media&token=bc45d0cc-af11-4f25-bce7-9cf53ea364f5',
        Fabricante: 'CAMPARI ARGENTINA',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 449,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Norton Cosecha Especial Extra Brut 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Norton%20Cosecha%20Especial%20Extra%20Brut%20750%20ml.png?alt=media&token=3132b7e6-513a-4547-a9a0-0638a5f7fc71',  
        Fabricante: 'BODEGA NORTON',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 429,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'San Felipe Extra Dulce Rose de Malbec',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/San%20Felipe%20Extra%20Dulce%20Rose%20de%20Malbec.jpeg?alt=media&token=224b6419-914d-4317-bdc7-6d663f8b6abf',     
        Fabricante: 'BODEGA LA RURAL',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 423,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'San Felipe Extra Dulce Torrontes',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/San%20Felipe%20Extra%20Dulce%20Torrontes.jpg?alt=media&token=7d28b20f-5e65-41b4-9c8a-696b19931695',
        Fabricante: 'BODEGA LA RURAL',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 423,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Rutini Brut Nature 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Rutini%20Brut%20Nature%20750%20ml.jpg?alt=media&token=96fc3182-198e-4e2e-9a92-97c7d2dfc1a1',
        Fabricante: 'BODEGA LA RURAL',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 2147,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Mercier Extra brut 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Mercier%20Extra%20brut%20750%20ml.jpg?alt=media&token=a4571d56-b973-451f-ae38-c3874f6e92bd',
        Fabricante: 'BODEGA LA RURAL',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 359,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Chandon Extra Brut 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Chandon%20Extra%20Brut%20750%20ml.jpg?alt=media&token=d6aea402-52e7-4628-ac78-8464d670b557',
        Fabricante: 'BODEGA CHANDON',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 625,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Chandon Aperitif 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Chandon%20Aperitif%20750%20ml.png?alt=media&token=1b936380-7912-449e-aa6c-0ed0b6a60cee',
        Fabricante: 'BODEGA CHANDON',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 633,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Chandon Mini Rose 187 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Chandon%20Mini%20Rose%20187%20ml.jpg?alt=media&token=e45c5893-084f-4896-8f89-a4c5289a9d50',
        Fabricante: 'BODEGA CHANDON',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 179,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Baron B Extra Brut 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Baron%20B%20Extra%20Brut%20750%20ml.jpg?alt=media&token=50dfc420-a374-40a4-a3bf-25ddcf197570',
        Fabricante: 'BODEGA CHANDON',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 1165,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Nieto Senetiner Extra Brut 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Nieto%20Senetiner%20Extra%20Brut%20750%20ml.jpg?alt=media&token=237a53e7-f096-4dd4-802d-844f0213b414',
        Fabricante: 'BODEGA NIETO SENETINER',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 523,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Nieto Senetiner Brut Nature 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Nieto%20Senetiner%20Brut%20Nature%20750%20ml.jpg?alt=media&token=ec4937af-d405-4e92-9a2c-305a802522c1',
        Fabricante: 'BODEGA NIETO SENETINER',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 557,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Sidra Saenz Briones 1888 750 ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/sidra%20saenz.jpg?alt=media&token=c00c99d0-991d-486c-b39c-427ac283703a',
        Fabricante: 'BODEGA SÁENZ BRIONES',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 390,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Dom Perignon Vintage 1500ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/dom-perignon-vintage-1042802.jpg?alt=media&token=b7910d7d-0ff6-4efb-a695-a745fe9dac14',
        Fabricante: 'Bodega Dom Perignon',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 132000,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'MUMM Extra Brut 750',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Champagne%20E-B%20Reserve%20Cuvee%20MUMM%20Bot%20750.jpg?alt=media&token=535fada8-01c7-46f1-83bd-480ae200bb07',   
        Fabricante: 'MUMM',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 450,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'MUMM Extra Brut 187',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Champa%C3%B1a%20E-B%20Reserve%20Cuvee%20MUMM%20Bot%20187%20Cmq.jpg?alt=media&token=376a0d08-f682-4499-8974-ddafcfc3361b',
        Fabricante: 'MUMM',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 140,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'Chandon Delice 750ml',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/delice.jpg?alt=media&token=f220840f-9f36-4679-88ff-539912393827',
        Fabricante: 'BODEGA CHANDON',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 920,
        CATEGORIA: 'Espumantes'
      },
      {
        PRODUCTOS: 'CALLIA Extra Brut 750',
        URL: 'https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/CALLIA%20%20Extra%20Brut%20750.jpeg?alt=media&token=cb98c91b-0ea6-4a81-9278-2aef0f9fd592',
        Fabricante: 'CALLIA',
        Detalle: 'ACA LA INFO',
        STOCK: 24,
        PRECIO: 305,
        CATEGORIA: 'Espumantes'
      }
];

async function base (){
  try {
    const DBCreation = await datab.map (el => { //el 'const DBCreation =' se puede sacar y funciona igual
      Product.findOrCreate({
        where:{
          name: el.PRODUCTOS,
          image: el.URL,
          maker: el.Fabricante,
          Description: el.Detalle,
          stock: el.STOCK,
          price: el.PRECIO,
          type: el.CATEGORIA
        }
      });
    });    
    console.log('La Base se cargo correctamente');
  } catch (err) {
    console.log(err);
  }
};    
    
module.exports = {
    base,
    datab
};