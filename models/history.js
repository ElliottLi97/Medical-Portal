const { Model, DataTypes } = require('sequelize');
const { Appointments } = require('.');
const sequelize = require('../config/connection');

class History extends Model {}

History.init(
  {
    data: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'N/A',
    },
    medications: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'N/A',
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
