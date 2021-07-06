const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('product', {
    id:{
      type: UUID,
      allowNull: false,
      primaryKey: true,
    },
      detail:{
        type: DataTypes.TEXT,
        allowNull: false,
      }
  })
}