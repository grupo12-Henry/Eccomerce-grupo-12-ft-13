const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('invoice', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            //allowNull: false,
        },
        ivaCondition: {
            type: DataTypes.STRING,
           // allowNull: false,
        },
        ivaCost:{
            type: DataTypes.INTEGER,
            //allowNull: false,
        }
    },
     {timestamps: false})
}