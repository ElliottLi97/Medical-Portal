const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class appointment extends Model {}

appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Not Started"
    },
    concerns: {
      type: DataTypes.STRING,
    },
    appointment_start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    appointment_end: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    patient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'patient',
        key: 'id',
      }
    },
    doctor_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'doctor',
          key: 'id',
        },
      },
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
