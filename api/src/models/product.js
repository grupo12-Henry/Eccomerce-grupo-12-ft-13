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
    stock:{
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    type:{
      type: DataTypes.STRING,
    },
    Description:{
      type: DataTypes.TEXT,
    },
    price:{
      type: DataTypes.INTEGER,
    },
    image:{
      type: DataTypes.TEXT,
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