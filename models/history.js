const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class History extends Model {}

History.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    data:{
        type: DataTypes.STRING,
        allowNull: false,
    },//can add more specific data later
    patient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'patient',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'history',
  }
);

module.exports = History;
