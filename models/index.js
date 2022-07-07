const Appointments = require('./appointments');
const Doctors = require('./doctors');
const History = require('./history');
const Patients = require('./patients');
const Schedules = require('./schedules');

Patients.hasOne(History, {
    foreignKey: "patient_id",
    onDelete: 'CASCADE'
});

History.belongsTo(Patients, {
    foreignKey: 'patient_id',
});

Patients.hasMany(Appointments,{
    foreignKey: "patient_id",
    onDelete: 'CASCADE'
})

Appointments.belongsTo(Patients,{
    foreignKey: "patient_id",
})

Doctors.hasMany(Appointments,{
    foreignKey:"doctor_id",
    onDelete: "CASCADE"
})

Appointments.belongsTo(Doctors,{
    foreignKey:"doctor_id",
})

Doctors.hasOne(Schedules,{
    foreignKey:"doctor_id",
    onDelete: "CASCADE"
})

Schedules.belongsTo(Doctors,{
    foreignKey:"doctor_id",
})
module.exports = { Appointments, Doctors, History, Patients, Schedules }