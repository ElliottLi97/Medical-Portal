const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Schedule extends Model {}

Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    days:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "MTWThF"
    },
    schedule_start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    schedule_end: {
        type: DataTypes.DATE,
        allowNull: false,
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
    modelName: 'schedule',
  }
);

module.exports = Schedule;
