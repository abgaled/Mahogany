var router = require('express').Router();
var authMiddleware = require('../auth/middlewares/auth');

router.use(authMiddleware.hasAuthOrgCouncil);

router.use('/', require('./home/routes'));

router.use('/enrollment', require('./enrollment/routes'));
router.use('/enrollment/addschedule', require('./enrollment/routes'));

router.use('/announcements', require('./announcements/routes'));


router.use('/activities', require('./activities/routes'));

router.use('/class1', require('./class1/routes'));

router.use('/profile', require('./profile/routes'));
router.use('/profile/editprofile', require('./profile/routes'));

exports.staff = router;