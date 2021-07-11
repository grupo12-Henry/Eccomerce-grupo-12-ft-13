const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('card', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        number: {
            type: DataTypes.INTEGER,
        },
        expirationDate: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },

    },{timestamps: false,})
}