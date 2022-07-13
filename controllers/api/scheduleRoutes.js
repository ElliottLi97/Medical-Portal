const router = require('express').Router();
const { Schedules } = require('../../models');

const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newSchedule = await Schedules.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newSchedule);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const scheduleData = await Schedules.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!scheduleData) {
            res.status(404).json({
                message: 'No project found with this id!'
            });
            return;
        }

        res.status(200).json(scheduleData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;