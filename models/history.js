const { Model, DataTypes } = require('sequelize');
const { Appointments } = require('.');
const sequelize = require('../config/connection');

class History extends Model {}

History.init(
  {
    height: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true
    },
    allergies: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    medications: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    patient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'patient',
        key: 'id',
      },
    },
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
