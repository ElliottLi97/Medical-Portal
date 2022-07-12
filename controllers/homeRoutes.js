const router = require('express').Router();
const { Appointments,Doctors,History,Patients,Schedules } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
      }

    try {
      // Get all posts and JOIN with user data
      console.log(req.session.user_id, "**********")
      const postData = await Patients.findByPk(req.session.user_id, {
        include: [
          {
            model: History,

          },
          {
            model: Appointments,

          },
          
        ],
      });
  
      console.log("postData",postData);
      // Serialize data so the template can read it
      // const posts = postData.map((post) => post.get({ plain: true }));
      const posts = postData.get({ plain: true });

  
      // Pass serialized data and session flag into template
      res.render('home', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      console.log("err:",err);
      res.status(500).json(err);
    };
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    };
  
    res.render('login');
  });

  module.exports = router;