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
           
        }
    },{timestamps: false});
};