require('dotenv').config();
const { DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;
  
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommerce`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Product, Card, Category, Client, Login, Order, Review} = sequelize.models;
// Aca vendrian las relaciones


Login.Client = Login.belongsTo(Client);
Client.Login = Client.hasMany(Login);

Client.hasMany(Card);
Card.belongsTo(Client);

// Client.hasMany(Order, {as: 'id_cliente', constraints: false, allowNull:true, defaultValue:null});
Client.hasMany(Order);
Order.belongsTo(Client);


//prueba
Product.belongsToMany(Category, { through: 'product_category',timestamps: false });
Category.belongsToMany(Product, { through: 'product_category',timestamps: false });

const order_detail = sequelize.define('order_detail', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey: true,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    
  },
  subTotal:{
    type: DataTypes.INTEGER,
    
  }
});

Order.belongsToMany(Product, { through: order_detail,timestamps: false });
Product.belongsToMany(Order, { through: order_detail,timestamps: false });

Review.belongsTo(Product);
Product.hasMany(Review);


//Tabla INTERMEDIA de 'Favoritos'  1 cliente tiene muchos productos favs, 1 producto puede ser fav de muchos clientes.
Product.belongsToMany(Client, { through: 'favorites',timestamps: false });
Client.belongsToMany(Product, { through: 'favorites',timestamps: false });

module.exports = {
  ...sequelize.models,
  order_detail, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};