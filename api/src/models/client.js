const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('client', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            // allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        adress: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        mail: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        identityCard: {
            type: DataTypes.STRING,
            // allowNull: false,
        }
        // admin:{
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false,
        //     default: false
        // }
    });
};