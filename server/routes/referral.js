
// server/routes/referral.js
const express = require('express');
const router = express.Router();

// Simulated database (replace with actual database logic)
let users = {
  'user123': { name: 'John Doe', email: 'john.doe@example.com', referrals: [], level: 'Bronze' }
};

// Simulate getting user ID (replace with actual logic)
const getUserId = (req) => 'user123'; // Replace with real user logic (e.g., from JWT)

// Generate referral link
router.get('/generate', (req, res) => {
  const userId = getUserId(req);
  const referralLink = `${req.protocol}://${req.get('host')}/signup?ref=${userId}`;
  res.json({ referralLink });
});

// Simulate signup with referral tracking
router.post('/signup', (req, res) => {
  const { ref } = req.body; // Get the referrer userId from the signup form (replace with real data)
  const referrerId = ref || null;

  const userId = `user${Date.now()}`; // Simulate creating a new user
  if (referrerId) {
    // Add this new user as a referral for the referrer
    users[referrerId].referrals.push(userId);
    
    // Update referral level
    updateLevel(referrerId);
  }

  // Simulate user signup
  users[userId] = { name: 'New User', email: 'new.user@example.com', referrals: [], level: 'Bronze' };
  
  res.json({ message: 'User created successfully!' });
});

// Function to update level based on number of referrals
const updateLevel = (userId) => {
  const referralCount = users[userId].referrals.length;

  let level = 'Bronze';
  if (referralCount >= 5) level = 'Gold';
  else if (referralCount >= 3) level = 'Silver';

  users[userId].level = level;
};

module.exports = router;








