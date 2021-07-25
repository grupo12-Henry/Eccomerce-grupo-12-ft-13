const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('order', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },  
        idMP:{
            type:DataTypes.INTEGER,
        },
        date: {
            type: DataTypes.STRING,
        },
        bill: {
            type: DataTypes.INTEGER,
        },
        paymentMethod:{
          type: DataTypes.STRING,
        },
        adress: {
             type: DataTypes.STRING,
        },
        ticket: {
            type: DataTypes.STRING,
        },
        mail: {
            type: DataTypes.STRING,
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
        ivaCondition: {
            type: DataTypes.STRING,
        },
        ivaCost:{
            type: DataTypes.INTEGER,
        }
    },{timestamps: false});
};