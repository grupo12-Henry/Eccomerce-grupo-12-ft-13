const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('product', {
    id:{
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
    },
    stock: {
      type: DataTypes.NUMBER,
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
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    image:{
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });
};