const router = require('express').Router();
const sequelize = require('../config/connection');
const { History, Patient} = require('../models');

const withAuth = require('../utils/auth');

router.get('/:id', withAuth, (req, res) => {
    History.findOne({
      where: {
            patient_id: req.session.user_id,
      },
      attributes: [
        'id',
        'data',
        'medications',
        'patient_id'
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        // serialize the data
        const post = dbPostData.get({ plain: true });

        res.render('/edit-history', {
            post,
            loggedIn: true
            });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});
/*
router.post('/', withAuth, async (req, res) => {
    try {
        const newHistory = await History.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newHistory);
    } catch (err) {
        res.status(400).json(err);
    }
});
*/


module.exports = router;
