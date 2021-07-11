const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('invoice', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        ivaCondition: {
            type: DataTypes.STRING,
        },
        ivaCost:{
            type: DataTypes.INTEGER,
        }
    },
     {timestamps: false})
}