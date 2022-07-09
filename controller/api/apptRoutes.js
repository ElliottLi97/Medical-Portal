const router = require('express').Router();
const { Appointments } = require('../../models');

const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newAppointment = await Appointments.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newAppointment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const appointmentData = await Appointments.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!appointmentData) {
            res.status(404).json({
                message: 'No project found with this id!'
            });
            return;
        }

        res.status(200).json(appointmentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;