const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('shipping', {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        }, 
        shippingDate: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        freight: {
            type: DataTypes.STRING,
        },
        guideNumber: {
            type: DataTypes.STRING,
        },
        cost: {
            type: DataTypes.INTEGER,
        },
    },{timestamps: false,})
}