const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('client', {

          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },  

        name: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        adress: {
            type: DataTypes.STRING,
        },
        mail: {
            type: DataTypes.STRING,
        },
        identityCard: {
            type: DataTypes.STRING,
        },
        admin:{
            type: DataTypes.TEXT,
            default: ""
        }
    },{timestamps: false,});


};