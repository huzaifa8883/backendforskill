
const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

// Ensure this route exists
router.post('/approve', adminController.approveWithdrawalRequest);
router.get('/requests', adminController.getAdminWithdrawalRequests);

module.exports = router;







