const router = require('express').Router();
const controller = require('./user.controller');

router.route('/').get(controller.all);
router.route('/me').get(controller.me);

module.exports = router;
