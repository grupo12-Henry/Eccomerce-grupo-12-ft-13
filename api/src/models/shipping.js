const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('shipping', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        shippingDate: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        freight: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        guideNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: true,

        },
    })
}