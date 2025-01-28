// const User = require('../models/User');
// const moment = require('moment');

// // Generate Referral Link
// exports.generateReferral = async (req, res) => {
//   const user = await User.findById(req.body.userId);
  
//   if (!user) {
//     return res.status(400).json({ message: 'User not found' });
//   }

//   const referralLink = `http://localhost:3000/referral/${user._id}`;
//   user.referralLink = referralLink;
//   await user.save();

//   res.json({ referralLink });
// };

// // Track Referral (User registers using referral link)
// exports.trackReferral = async (req, res) => {
//   const { referralLink, newUserDetails } = req.body;

//   const referrer = await User.findOne({ referralLink });

//   if (!referrer) {
//     return res.status(400).json({ message: 'Referral link is invalid' });
//   }

//   const newUser = new User({ ...newUserDetails });
//   await newUser.save();

//   referrer.bonus += 3000;
//   referrer.referrals.push(newUser._id);
//   referrer.referralTimestamp = new Date();
//   await referrer.save();

//   res.json({ message: 'Referral successful!', referrerBonus: referrer.bonus });
// };

// // Withdraw Bonus after 24 hours
// exports.withdrawBonus = async (req, res) => {
//   const user = await User.findById(req.query.userId);

//   if (!user) {
//     return res.status(400).json({ message: 'User not found' });
//   }

//   const now = moment();
//   const referralTimestamp = moment(user.referralTimestamp);

//   const hoursPassed = now.diff(referralTimestamp, 'hours');

//   if (hoursPassed >= 24) {
//     user.bonus = 0; // Reset the bonus after withdrawal
//     await user.save();

//     res.json({ message: 'Bonus withdrawn successfully' });
//   } else {
//     res.json({ message: `You can withdraw in ${24 - hoursPassed} hours` });
//   }
// };
