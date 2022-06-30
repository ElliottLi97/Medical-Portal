const sequelize = require('../config/connection');
const { Patients, Appointments, Doctors, Schedules } = require('../models');

const patientData = require('./patientData.json');
const appointmentData = require('./appointmentData.json');
const doctorsData = require('./doctorsData.json');
const schedulesData = require('./schedulesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const patient = await Patients.bulkCreate(patientData, {
    individualHooks: true,
    returning: true,
  });

  const appointment = await Appointments.bulkCreate(appointmentData, {
    individualHooks: true,
    returning: true,
  });

  const doctors = await Doctors.bulkCreate(doctorsData, {
    individualHooks: true,
    returning: true,
  });

  const schedule = await Schedules.bulkCreate(schedulesData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
