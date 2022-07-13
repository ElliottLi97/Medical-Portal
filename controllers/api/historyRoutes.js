const router = require('express').Router();
const { History } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
console.log("test")
router.put('/edit', withAuth, async (req, res) => {
    try {
        const historyData = await History.update({
            height: req.body.height,
            weight: req.body.weight,
            allergies: req.body.allergies,
            medications: req.body.medications,
            data: req.body.data,
            where: {
                patient_id: req.session.user_id,
            }
        });

        if (!historyData) {
            res.status(404).json({
                message: 'No history found with this id!'
            });
            return;
        }

        res.status(200).json(historyData);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;
