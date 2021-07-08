const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('order', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
                    },
        date: {
            type: DataTypes.DATE,
            // allowNull: false,
        },
        bill: {
            type: DataTypes.INTEGER,
            // allowNull: false,
        },
        paymentMethod:{
          type: DataTypes.STRING,
        //   allowNull: false,
        },
         adress: {
             type: DataTypes.STRING,
            //  allowNull: false,
        },
        ticket: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        mail: {
            type: DataTypes.STRING,
            // allowNull: false,
        }
    });
};