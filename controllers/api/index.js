const router = require('express').Router();

//creates the routers
const apptRoutes = require('./apptRoutes');
const doctorRoutes = require('./doctorRoutes');
const historyRoutes = require('../historyRoutes');
const patientRoutes = require('./patientRoutes');
const scheduleRoutes = require('./scheduleRoutes');

router.use('/appointments', apptRoutes);
router.use('/doctorRoutes', doctorRoutes);
router.use('/historyRoutes', historyRoutes);
router.use('/patientRoutes', patientRoutes);
router.use('/scheduleRoutes', scheduleRoutes);


//exporting functions and values.
module.exports = router;