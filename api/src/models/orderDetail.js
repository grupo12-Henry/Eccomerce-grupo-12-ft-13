const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('orderDetail', {
        id:{
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false,
        },
        quantity:{
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        subTotal:{
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    })
}