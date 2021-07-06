const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('Login', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    initialDate: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    expirationDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastLogin: {
      type: DataTypes.STRING,
    },
  });
};
//ACA IRIAN TODAS LAS TABLAS DE NUESTRA DB
