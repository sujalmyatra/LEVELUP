const express = require('express');
const apiRoutes = require('./api');

const router = express.Router();

// API routes
router.use('/', apiRoutes);

module.exports = router;
