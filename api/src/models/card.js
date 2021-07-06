const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('card', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        number: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        expirationDate: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    })
}