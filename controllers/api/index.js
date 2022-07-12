const router = require('express').Router();

//creates the routers
const apptRoutes = require('./apptRoutes');
const doctorRoutes = require('./doctorRoutes');
const historyRoutes = require('./historyRoutes');
const patientRoutes = require('./patientRoutes');
const scheduleRoutes = require('./scheduleRoutes');

router.use('appointments', apptRoutes);
router.use('doctors', doctorRoutes);
router.use('history', historyRoutes);
router.use('/patients', patientRoutes);
router.use('schedule', scheduleRoutes);


//exporting functions and values.
module.exports = router;