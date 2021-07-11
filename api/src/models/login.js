const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('login', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    initialDate: {
      type: DataTypes.STRING,
      unique: true,
    },
    expirationDate: {
      type: DataTypes.STRING,
    },
    lastLogin: {
      type: DataTypes.STRING,
    },
  },
  {timestamps: false}
  );
};

