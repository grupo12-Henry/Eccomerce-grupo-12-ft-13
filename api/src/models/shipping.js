const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('shipping', {
        idShipping: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
        },
        shippingDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        freight: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guideNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })
}