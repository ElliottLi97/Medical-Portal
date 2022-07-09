const router = require('express').Router();
const { History } = require('../../models');

const withAuth = require('../../utils/auth');

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

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const historyData = await History.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!historyData) {
            res.status(404).json({
                message: 'No project found with this id!'
            });
            return;
        }

        res.status(200).json(historyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
