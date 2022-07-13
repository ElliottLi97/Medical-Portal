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
    res.render('home', {
      patient,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log("err:", err);
    res.status(500).json(err);
  };
});

router.get('/appointments/signup', withAuth, async (req, res) => {

  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  try {
    // Get all posts and JOIN with user data
    // console.log(req.session.user_id, "**********")
    const doctorData = await Doctors.findAll({
      attributes: ['id', 'name'],
      include: [
      {
        model: Appointments
      }
    ]
    });

    console.log("doctorData", doctorData);
    // Serialize data so the template can read it
    // const posts = postData.map((post) => post.get({ plain: true }));
    // const doctor = doctorData.get({
    //   plain: true
    // });
    const doctors = doctorData.map((doctor) => doctor.get({ plain: true }));
    console.log("doctor", doctors);
    // Pass serialized data and session flag into template
    res.render('appointmentSignup', {
      doctors,
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