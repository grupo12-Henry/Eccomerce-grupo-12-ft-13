const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('category', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
      detail:{
        type: DataTypes.TEXT,
        allowNull: false,
      }
  },{timestamps: false,})
}