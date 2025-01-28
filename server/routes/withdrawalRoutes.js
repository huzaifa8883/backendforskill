
const express = require('express');
const router = express.Router();
const withdrawalController = require('../controller/withdrawalController')

// POST - Create a withdrawal request
router.post('/request', withdrawalController.createWithdrawalRequest);

// GET - Fetch withdrawal history
router.get('/history', withdrawalController.getWithdrawalHistory);

module.exports = router;


