const router = require('express').Router();
const {
  Appointments,
  History,
  Patients,
  Doctors
} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {

  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  try {
    // Get all posts and JOIN with user data
    console.log(req.session.user_id, "**********")
    const patientData = await Patients.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{
          model: History,
        },
        {
          model: Appointments,
          include:[{
            model: Doctors,
            attributes: {exclude:['password', 'email']}
          }]
        }
      ],
    });

    // const appointmentData = await Appointments.findAll ({
    //   where:{
    //     patient_id: req.session.user_id
    //   },
    //   include: [
    //     {model: Doctors,
    //     attributes: {exclude:['password', 'email']}}
    //   ]
    // })

    //console.log("patientData", appointmentData);
    // Serialize data so the template can read it
    // const posts = postData.map((post) => post.get({ plain: true }));
    const patient = patientData.get({
      plain: true
    });

    // const appointments = appointmentData.get({
    //   plain: true
    // });
    // const appointments = appointmentData.map((appointment) => appointment.get({ plain: true }));
    console.log("patient", patient);
    const appointments = patient.appointments
    console.log(appointments)
    // console.log("appointment", "**************************",appointments)
    // Pass serialized data and session flag into template
    res.render('home', {
      appointments,
      patient,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log("err:", err);
    res.status(500).json(err);
  };
});

router.get('/appointments/signup', withAuth, async (req, res) => {
//TO-DO: Get the doctor's information

  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  try {
    // Get the doctor's data
    const doctorData = await Doctors.findAll({
      attributes: { exclude: ['password'] },
    });

    // Serialize data so the template can read it
    // const posts = postData.map((post) => post.get({ plain: true }));
    const doctors = doctorData.map(doctor => doctor.get({plain: true}));

    // Pass serialized data and session flag into template
    console.log(doctors)
    res.render('appointmentSignUp', {
      doctors,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log("err:", err);
    res.status(500).json(err);
  };
});

router.get('/history', withAuth, async (req, res) => {

  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  try {
    // Get all posts and JOIN with user data
    console.log(req.session.user_id, "**********")
    const patientData = await Patients.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: History,
          attributes: ['height', 'weight', 'allergies', 'medications', 'data']
        }
      ],
    });

    console.log("patientData", patientData);
    // Serialize data so the template can read it
    // const posts = postData.map((post) => post.get({ plain: true }));
    const patient = patientData.get({
      plain: true
    });

    console.log("patient", patient);
    // Pass serialized data and session flag into template
    res.render('history', {
      patient,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log("err:", err);
    res.status(500).json(err);
  };
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  };

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
