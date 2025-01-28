
// server/routes/referrals.js
const express = require('express');
const router = express.Router();

// Simulate referral data (replace with real database queries)
const users = {
  'user123': { name: 'John Doe', email: 'john.doe@example.com', referrals: ['user456'], level: 'Silver' },
  'user456': { name: 'Jane Smith', email: 'jane.smith@example.com', referrals: [], level: 'Bronze' }
};

// Simulate getting user ID (replace with actual logic)
const getUserId = (req) => 'user123'; // Replace with real user logic

// Get referrals of the logged-in user
router.get('/', (req, res) => {
  const userId = getUserId(req);
  const userReferrals = users[userId].referrals.map((referralId) => {
    const referral = users[referralId];
    return { name: referral.name, email: referral.email, joined: '2025-01-26' };
  });

  res.json(userReferrals);
});

module.exports = router;
