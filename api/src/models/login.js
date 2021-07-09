const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('login', {
    id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      primaryKey: true,
    },
    initialDate: {
      type: DataTypes.STRING,
      // allowNull: false,
      unique: true,
    },
    expirationDate: {
      type: DataTypes.STRING,
      // allowNull: true,
    },
    lastLogin: {
      type: DataTypes.STRING,
    },
  });
};

