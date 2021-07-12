const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('product', {
    id:{
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    maker:{
      type: DataTypes.STRING,
      allowNull: false
    },
    subcategories:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    }
  });
};