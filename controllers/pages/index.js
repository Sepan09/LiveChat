const router = require('express').Router();
const path = require('path');
const withAuth = require('../../middleware/auth');

const landingPage = require('./landing-page');

router.use('/landing-page', withAuth, landingPage);

module.exports = router;