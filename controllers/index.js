const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const historyRoutes = require('./historyRoutes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/history', historyRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
