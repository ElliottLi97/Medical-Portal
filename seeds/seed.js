const sequelize = require('../config/connection');
const {
  Patients,
  Appointments,
  Doctors,
  Schedules,
  History,
} = require('../models');

const patientData = require('./patientData.json');
const appointmentData = require('./appointmentData.json');
const doctorsData = require('./doctorsData.json');
const schedulesData = require('./schedulesData.json');
const historyData = require('./historyData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Patients.bulkCreate(patientData, {
    individualHooks: true,
    returning: true,
  });

  await Appointments.bulkCreate(appointmentData, {
    individualHooks: true,
    returning: true,
  });

  await Doctors.bulkCreate(doctorsData, {
    individualHooks: true,
    returning: true,
  });

  await Schedules.bulkCreate(schedulesData, {
    individualHooks: true,
    returning: true,
  });

  await History.bulkCreate(historyData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
