


// server.js
const express = require('express');
const cors = require('cors');
const withdrawalRoutes = require('./routes/withdrawalRoutes');
const referralRoutes = require('./routes/referral');
const referralsRoutes = require('./routes/referrals');
const adminRoutes = require('./routes/adminRoutes');
// const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/withdrawal', withdrawalRoutes);
app.use('/api/referral', referralRoutes);
app.use('/api/referrals', referralsRoutes);
app.use('/api/admin', adminRoutes); // Admin routes for admin-related tasks

// MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB successfully'))
//   .catch(err => console.error('MongoDB connection error:', err));

// Set up the port
const port = process.env.PORT || 5002;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





















