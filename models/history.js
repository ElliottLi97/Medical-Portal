const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class appointment extends Model {}

appointment.init(
  {
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
    modelName: 'appointment',
  }
);

module.exports = appointment;
