const router = require('express').Router();
const { Patients } = require('../../models');

router.get('/', (req, res) => {
    Patients.findAll({
            attributes: { exclude: ['[password'] }
        }).then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Patients.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }).then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.name = dbUserData.name;
                req.session.email = dbUserData.email;
                req.session.loggedIn = true;

                res.json(dbUserData);
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    Patients.findOne({
            where: { name: req.body.email }
        }).then(dbUserData => {
            if (!dbUserData) {
                res.status(400).json({ message: 'No user with that email!' });
                return;
            }

            const validPassword = dbUserData.checkPassword(req.body.password);
            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect password!' });
                return;
            }
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.name = dbUserData.email;
                req.session.loggedIn = true;
                res.json({ user: dbUserData, message: 'You are now logged in!' });
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
