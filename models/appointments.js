const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointments extends Model {}

Appointments.init(
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
    concern: {
      type: DataTypes.STRING,
    },
    datetime: {
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

module.exports = Appointments;
